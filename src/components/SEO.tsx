import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/data/structuredData";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
}

const SEO = ({ title, description, path, image, noindex, jsonLd }: SEOProps) => {
  const { language } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;
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

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={language === "ar" ? "ar_SA" : "en_US"} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLdList.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", ...obj })}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
