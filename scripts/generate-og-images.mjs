// Runs before `vite build` (so its output survives Vite's dist/ clean) and
// renders one branded 1200x630 share image per page x locale into
// dist/og/<slug>-<lang>.png, using satori (JSX -> SVG) + resvg (SVG -> PNG).
// Self-hosted, static, no runtime dependency - see SEO.tsx for the URL
// convention (${SITE_URL}/og/${slug}-${language}.png) these must match.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "dist", "og");
const fontsDir = path.join(__dirname, "fonts");

const loadFont = (file) => fs.readFileSync(path.join(fontsDir, file));

const fonts = [
  { name: "Inter", data: loadFont("Inter-Regular.ttf"), weight: 400, style: "normal" },
  { name: "Inter", data: loadFont("Inter-Bold.ttf"), weight: 700, style: "normal" },
  { name: "Inter", data: loadFont("Inter-ExtraBold.ttf"), weight: 800, style: "normal" },
  // Tajawal (not the site's body font, Noto Sans Arabic) specifically because
  // Google's Noto Sans Arabic ships only as a variable font, which satori's
  // bundled opentype.js parser fails to load (throws on the fvar table).
  // Tajawal ships real static per-weight files with full GSUB tables, so
  // satori's harfbuzzjs shaper joins letters correctly - verified manually.
  { name: "Tajawal", data: loadFont("Tajawal-Regular.ttf"), weight: 400, style: "normal" },
  { name: "Tajawal", data: loadFont("Tajawal-Bold.ttf"), weight: 700, style: "normal" },
  { name: "Tajawal", data: loadFont("Tajawal-ExtraBold.ttf"), weight: 800, style: "normal" },
];

// Brand colors match the hex values actually rendered on the live site
// (Tailwind blue-600/purple-600/green-500, slate-900) - see the earlier
// note in src/index.css: the --primary/--accent CSS-var HSL tokens aren't
// what's visually used in practice, plain Tailwind color-scale classes are.
const BRAND = {
  blue: "#2563eb",
  purple: "#9333ea",
  green: "#22c55e",
  white: "#ffffff",
};

const PAGES = [
  {
    slug: "home",
    en: { title: "Senior Product Manager & Business Analyst", tagline: "13+ years across GRC, Blockchain, Telecom, Government & SaaS" },
    ar: { title: "مدير منتج أول ومحلل أعمال", tagline: "خبرة تفوق 13 عامًا في الحوكمة والبلوكشين والاتصالات والحكومة و SaaS" },
  },
  {
    slug: "about",
    en: { title: "About Abdulrhman Metwally", tagline: "13+ years taking enterprise software from concept to launch" },
    ar: { title: "عن عبدالرحمن متولي", tagline: "أكثر من 13 عامًا في تحويل أنظمة المؤسسات من فكرة إلى إطلاق" },
  },
  {
    slug: "cv",
    en: { title: "Full CV - 13+ Years in Product & Analysis", tagline: "Product management, business analysis & team building" },
    ar: { title: "السيرة الذاتية الكاملة - أكثر من 13 سنة خبرة", tagline: "إدارة المنتج، تحليل الأعمال، وبناء الفرق" },
  },
  {
    slug: "services",
    en: { title: "Product Management & Business Analysis Services", tagline: "PMaaS, business analysis, team building & mentorship" },
    ar: { title: "خدمات إدارة المنتجات وتحليل الأعمال", tagline: "إدارة منتج بدوام جزئي، تحليل أعمال، وبناء فرق" },
  },
  {
    slug: "contact",
    en: { title: "Let's Build Something Meaningful", tagline: "Book a call or send a message to get started" },
    ar: { title: "لنبنِ شيئًا ذا معنى", tagline: "احجز مكالمة أو ابعت رسالة عشان نبدأ" },
  },
];

// Satori lays text out as plain left-to-right runs with no Unicode bidi
// engine of its own. Per-word shaping (letter joining) works fine via its
// bundled harfbuzzjs, but a single RTL string's inter-word spacing renders
// wrong. Splitting into words and laying them out as row-reverse flex
// children (real words, real gap) sidesteps both problems and wraps
// correctly. English text renders as one plain text node as usual.
function textNode(text, { lang, fontSize, fontWeight, color, textAlign = "left" }) {
  if (lang !== "ar") {
    return {
      type: "div",
      props: { style: { display: "flex", fontSize, fontWeight, color, textAlign, fontFamily: "Inter" }, children: text },
    };
  }
  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "row-reverse",
        flexWrap: "wrap",
        gap: "0.3em",
        fontSize,
        fontWeight,
        color,
        fontFamily: "Tajawal",
      },
      children: text.split(" ").map((w) => ({ type: "div", props: { style: { display: "flex" }, children: w } })),
    },
  };
}

function buildTree({ title, tagline, lang }) {
  const isAr = lang === "ar";
  const rowDir = isAr ? "row-reverse" : "row";
  const brandLabel = isAr ? "عبدالرحمن متولي" : "ABDULRHMAN METWALLY";

  return {
    type: "div",
    props: {
      style: {
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        backgroundImage: `linear-gradient(135deg, ${BRAND.blue} 0%, #7c3aed 55%, ${BRAND.purple} 100%)`,
      },
      children: [
        // Brand row
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: rowDir, alignItems: "center", gap: "18px" },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    width: "64px",
                    height: "64px",
                    borderRadius: "16px",
                    backgroundColor: BRAND.white,
                    color: BRAND.blue,
                    fontSize: "36px",
                    fontFamily: "Inter",
                    fontWeight: 800,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  children: "M",
                },
              },
              textNode(brandLabel, { lang, fontSize: "26px", fontWeight: 700, color: BRAND.white }),
            ],
          },
        },
        // Title + tagline
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: "22px", maxWidth: "1000px", alignItems: isAr ? "flex-end" : "flex-start" },
            children: [
              textNode(title, { lang, fontSize: "58px", fontWeight: 800, color: BRAND.white, textAlign: "left" }),
              textNode(tagline, { lang, fontSize: "30px", fontWeight: 400, color: "rgba(255,255,255,0.88)", textAlign: "left" }),
            ],
          },
        },
        // Bottom accent bar
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              width: "100%",
              height: "8px",
              borderRadius: "4px",
              backgroundImage: `linear-gradient(90deg, ${BRAND.blue}, ${BRAND.purple}, ${BRAND.green})`,
            },
          },
        },
      ],
    },
  };
}

async function renderImage({ slug, lang, title, tagline }) {
  const svg = await satori(buildTree({ title, tagline, lang }), { width: 1200, height: 630, fonts });
  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } });
  const png = resvg.render().asPng();
  const outPath = path.join(outDir, `${slug}-${lang}.png`);
  fs.writeFileSync(outPath, png);
  console.log(`[og-image] ${slug}-${lang}.png (${(png.length / 1024).toFixed(0)} KB)`);
}

fs.mkdirSync(outDir, { recursive: true });
for (const page of PAGES) {
  await renderImage({ slug: page.slug, lang: "en", title: page.en.title, tagline: page.en.tagline });
  await renderImage({ slug: page.slug, lang: "ar", title: page.ar.title, tagline: page.ar.tagline });
}
console.log(`[og-image] done - ${PAGES.length * 2} images in dist/og/`);
