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

const routes = [
  { url: "/", outFile: "index.html" },
  { url: "/about", outFile: "about/index.html" },
  { url: "/cv", outFile: "cv/index.html" },
  { url: "/services", outFile: "services/index.html" },
  { url: "/contact", outFile: "contact/index.html" },
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
    .replace(/\s*<meta\s+name="twitter:[^"]*"[^>]*>\n?/g, "\n")
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
console.log("[prerender] done.");
