// Runs after `vite build` + `vite build --ssr`. Renders each real route to a
// static HTML string via entry-server.tsx and writes it as its own
// dist/<route>/index.html, so crawlers and AI agents that don't execute
// JavaScript (GPTBot, ClaudeBot, etc.) see full page content instead of an
// empty <div id="root"></div> shell.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const templatePath = path.join(distDir, "index.html");
if (!fs.existsSync(templatePath)) {
  console.error("[prerender] dist/index.html not found - run `vite build` first.");
  process.exit(1);
}
const template = fs.readFileSync(templatePath, "utf-8");

const ssrEntryPath = path.join(ssrDir, "entry-server.js");
if (!fs.existsSync(ssrEntryPath)) {
  console.error("[prerender] dist-ssr/entry-server.js not found - run `vite build --ssr src/entry-server.tsx --outDir dist-ssr` first.");
  process.exit(1);
}
const { render } = await import(pathToFileURL(ssrEntryPath).href);

// Bilingual pages: EN at the bare path, AR under "/ar" (see localizePath in
// src/contexts/LanguageContext.tsx - keep both lists in sync with App.tsx).
const bilingualPaths = ["/", "/about", "/cv", "/services", "/contact"];
const routes = [
  ...bilingualPaths.map((p) => ({
    url: p,
    outFile: p === "/" ? "index.html" : `${p.slice(1)}/index.html`,
    sitemap: true,
  })),
  ...bilingualPaths.map((p) => ({
    url: p === "/" ? "/ar" : `/ar${p}`,
    outFile: p === "/" ? "ar/index.html" : `ar${p}/index.html`,
    sitemap: true,
  })),
  // Prerendered so a direct visit/refresh resolves to a real file instead of
  // a 404 - always renders logged-out (no cookies exist at build time), the
  // client-side auth check takes over after hydration. Kept out of the
  // sitemap and tagged noindex in the page itself.
  { url: "/admin", outFile: "admin/index.html" },
  { url: "/admin/dashboard", outFile: "admin/dashboard/index.html" },
  { url: "/__prerender_404__", outFile: "404.html" },
];

function stripStaticSeoTags(html) {
  return html
    .replace(/\s*<title>[\s\S]*?<\/title>\n?/, "\n")
    .replace(/\s*<meta\s+name="description"[^>]*>\n?/, "\n")
    .replace(/\s*<meta\s+name="robots"[^>]*>\n?/, "\n")
    .replace(/\s*<link\s+rel="canonical"[^>]*>\n?/, "\n")
    .replace(/\s*<meta\s+property="og:[^"]*"[^>]*>\n?/g, "\n")
    .replace(/<html[^>]*>/, "<html>");
}

for (const route of routes) {
  const { html: appHtml, helmet } = render(route.url);

  let page = stripStaticSeoTags(template);

  const headTags = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join("\n    ");

  page = page.replace("</head>", `    ${headTags}\n  </head>`);
  page = page.replace("<html>", `<html ${helmet.htmlAttributes.toString()}>`);
  page = page.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outPath = path.join(distDir, route.outFile);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, page, "utf-8");
  console.log(`[prerender] ${route.url} -> dist/${route.outFile}`);
}

// The SSR bundle is a build-time-only tool; never deploy it.
fs.rmSync(ssrDir, { recursive: true, force: true });

// --- sitemap.xml -----------------------------------------------------
// Must match SITE_URL in src/data/structuredData.ts.
const SITE_URL = "https://www.arhmetwally.com";
const today = new Date().toISOString().slice(0, 10);
const localePath = (p, lang) => (lang === "ar" ? (p === "/" ? "/ar" : `/ar${p}`) : p);

const sitemapUrls = routes
  .filter((r) => r.sitemap)
  .map((r) => {
    // Recover the bilingual-page's bare path + locale from its own url.
    const isAr = r.url === "/ar" || r.url.startsWith("/ar/");
    const bare = isAr ? (r.url === "/ar" ? "/" : r.url.slice(3)) : r.url;
    const en = `${SITE_URL}${bare}`;
    const ar = `${SITE_URL}${localePath(bare, "ar")}`;
    return {
      loc: isAr ? ar : en,
      priority: bare === "/" ? "1.0" : bare === "/contact" ? "0.7" : "0.9",
      alternates: [
        { hreflang: "en", href: en },
        { hreflang: "ar", href: ar },
        { hreflang: "x-default", href: en },
      ],
    };
  });

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
${u.alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`).join("\n")}
  </url>`
  )
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf-8");
console.log(`[prerender] sitemap.xml -> ${sitemapUrls.length} URLs`);

console.log("[prerender] done.");
