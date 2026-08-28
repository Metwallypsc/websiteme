import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage, localizePath } from "@/contexts/LanguageContext";
import { SITE_URL, SITE_NAME } from "@/data/structuredData";

interface SEOProps {
  // `path` is always the bare/English form (e.g. "/cv") regardless of the
  // active locale - this component derives the actual canonical/hreflang/
  // og:image URLs for both locales from it via localizePath.
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
}

const slugFromPath = (path: string) => (path === "/" ? "home" : path.replace(/^\//, "").replace(/\//g, "-"));

const SEO = ({ title, description, path, image, noindex, jsonLd }: SEOProps) => {
  const { language } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";
  const localePath = localizePath(path, language);
  const url = `${SITE_URL}${localePath}`;
  const enUrl = `${SITE_URL}${path}`;
  const arUrl = `${SITE_URL}${localizePath(path, "ar")}`;
  const ogImage = image ?? `${SITE_URL}/og/${slugFromPath(path)}-${language}.png`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  // react-helmet-async bakes the correct <title>/<html lang/dir> into each
  // prerendered page (verified in the production build), but doesn't
  // reliably re-apply them to the live DOM on client-side route changes -
  // set them directly so the browser tab title and lang/dir stay correct
  // while navigating the SPA, not just on the initial load of a page.
  useEffect(() => {
    document.title = fullTitle;
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute("dir", dir);
  }, [fullTitle, language, dir]);

  return (
    <Helmet>
      <html lang={language} dir={dir} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Utility/noindex pages (404, admin) have no real locale counterpart.
          react-helmet-async doesn't reliably collect <link> tags nested
          inside a Fragment, so these are rendered as direct Helmet children
          gated individually rather than wrapped in one <>...</>. */}
      {!noindex && <link rel="alternate" hrefLang="en" href={enUrl} />}
      {!noindex && <link rel="alternate" hrefLang="ar" href={arUrl} />}
      {!noindex && <link rel="alternate" hrefLang="x-default" href={enUrl} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content={language === "ar" ? "ar_SA" : "en_US"} />
      <meta property="og:locale:alternate" content={language === "ar" ? "en_US" : "ar_SA"} />

      {jsonLdList.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", ...obj })}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
