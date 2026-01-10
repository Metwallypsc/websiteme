import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Globe } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { to: "/", label: t("navHome") },
    { to: "/about", label: t("navAbout") },
    { to: "/services", label: t("navServices") },
    { to: "/contact", label: t("navContact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="Logo"
              loading="eager"
              decoding="async"
              draggable={false}
              className="h-10 w-auto max-w-[160px] object-contain select-none"
            />
          </Link>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("mailto:example@email.com", "_blank", "noopener,noreferrer")}
              className="text-slate-600 hover:text-slate-900"
            >
              <Mail className="h-4 w-4" />
              {t("contact")}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("https://linkedin.com", "_blank", "noopener,noreferrer")}
              className="text-slate-600 hover:text-slate-900 hidden sm:inline-flex"
            >
              <Linkedin className="h-4 w-4" />
              {t("linkedin")}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="text-slate-600 hover:text-slate-900"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "العربية" : "English"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
