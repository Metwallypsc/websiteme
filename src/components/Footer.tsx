import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, MapPin, Globe, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PERSON_EMAIL, LINKEDIN_URL, GITHUB_URL } from "@/data/structuredData";

const Footer = () => {
  const { language, setLanguage, t } = useLanguage();
  const year = new Date().getFullYear();

  const navItems = [
    { to: "/", label: t("navHome") },
    { to: "/about", label: t("navAbout") },
    { to: "/cv", label: t("navCV") },
    { to: "/services", label: t("navServices") },
    { to: "/contact", label: t("navContact") },
  ];

  const serviceLinks = [
    t("footerService1"),
    t("footerService2"),
    t("footerService3"),
    t("footerService4"),
    t("footerService5"),
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-slate-900 text-slate-300">
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-success" />

      <div className="container mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr_1.2fr] gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex bg-white rounded-lg px-3 py-2 mb-5">
              <img
                src="/logo.svg"
                alt="Abdulrhman Metwally"
                width={135}
                height={32}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm font-semibold mb-3.5">{t("footerTagline")}</p>
            <p className="text-slate-400 text-sm max-w-[340px] mb-6 leading-relaxed">
              {t("footerBlurb")}
            </p>
            <div className="flex gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                <Github className="h-[18px] w-[18px]" />
              </a>
              <a
                href={`mailto:${PERSON_EMAIL}`}
                aria-label="Email"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                <Mail className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-5">
              {t("footerNavigate")}
            </h4>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-slate-300 text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-5">
              {t("footerServicesHeading")}
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link to="/services" className="text-slate-300 text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-5">
              {t("footerGetInTouch")}
            </h4>
            <div className="flex items-start gap-2.5 text-sm mb-3.5">
              <Mail className="h-[17px] w-[17px] text-success mt-0.5 shrink-0" />
              <a href={`mailto:${PERSON_EMAIL}`} className="text-slate-300 hover:text-white transition-colors break-all">
                {PERSON_EMAIL}
              </a>
            </div>
            <div className="flex items-start gap-2.5 text-sm mb-4">
              <MapPin className="h-[17px] w-[17px] text-success mt-0.5 shrink-0" />
              <span className="text-slate-300">{t("footerLocation")}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Globe className="h-[17px] w-[17px] text-success shrink-0" />
              <div className="inline-flex border border-white/10 rounded-full overflow-hidden text-xs">
                <button
                  onClick={() => setLanguage("en")}
                  aria-pressed={language === "en"}
                  className={`px-3.5 py-1.5 transition-colors ${
                    language === "en" ? "bg-white/10 text-white" : "text-slate-400"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("ar")}
                  aria-pressed={language === "ar"}
                  className={`px-3.5 py-1.5 transition-colors ${
                    language === "ar" ? "bg-white/10 text-white" : "text-slate-400"
                  }`}
                >
                  ع
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 py-6 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-slate-400 text-sm">
            © {year} {t("footerCopyrightName")}
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-slate-300 text-sm hover:text-white transition-colors"
          >
            {t("footerBackToTop")}
            <span className="w-[30px] h-[30px] rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <ArrowUp className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
