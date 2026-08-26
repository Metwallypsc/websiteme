import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CV_STATS } from "@/data/cvData";
import { ArrowRight } from "lucide-react";

const About = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
          {t("aboutHeading")}
        </h1>
        <p className="text-xl text-slate-700 leading-relaxed mb-6">
          {t("aboutIntro")}
        </p>
        <p className="text-slate-600 leading-relaxed mb-5">{t("aboutP1")}</p>
        <p className="text-slate-600 leading-relaxed mb-12">{t("aboutP2")}</p>

        <h2 className="text-xl font-semibold mb-5 text-slate-900">
          {t("aboutHighlightsTitle")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {CV_STATS.map((s, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-5 text-center">
              <div className="text-2xl font-extrabold text-blue-600">{s.n}</div>
              <div className="mt-1 text-xs font-medium text-slate-600 leading-snug">
                {s.label[language]}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-2xl px-8 py-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">{t("aboutCtaTitle")}</h2>
          <p className="text-slate-300 mb-7 max-w-xl mx-auto">{t("aboutCtaText")}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/cv">
                {t("aboutCtaCv")}
                <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-600 text-white bg-transparent hover:bg-slate-800"
            >
              <Link to="/services">{t("aboutCtaServices")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
