import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage, localizePath, delocalizePath } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();
  const { t, language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main id="main-content" className="pt-20 min-h-screen flex items-center justify-center bg-white">
      <SEO
        title={t("notFoundTitle")}
        description={t("notFoundText")}
        path={delocalizePath(location.pathname)}
        noindex
      />
      <div className="text-center px-6">
        <p className="text-7xl font-extrabold text-blue-600 mb-4">404</p>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">{t("notFoundTitle")}</h1>
        <p className="text-slate-600 mb-8 max-w-sm mx-auto">{t("notFoundText")}</p>
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link to={localizePath("/", language)}>{t("notFoundCta")}</Link>
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
