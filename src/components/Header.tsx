import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Mail, Linkedin, Github, Globe, Menu } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { LINKEDIN_URL } from "@/data/structuredData";
import BookCallButton from "@/components/BookCallButton";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { to: "/", label: t("navHome") },
    { to: "/about", label: t("navAbout") },
    { to: "/cv", label: t("navCV") },
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
              alt="Abdulrhman Metwally"
              width={169}
              height={40}
              loading="eager"
              decoding="async"
              draggable={false}
              className="h-8 sm:h-10 w-auto max-w-[120px] sm:max-w-[160px] object-contain select-none"
            />
          </Link>

          {/* Nav Links (Desktop) */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm font-medium">
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
            <BookCallButton
              source="header"
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            />

            <Button
              asChild
              variant="outline"
              size="sm"
              className="text-slate-600 hover:text-slate-900 hidden sm:inline-flex"
            >
              <Link to="/contact">
                <Mail className="h-4 w-4" />
                {t("contact")}
              </Link>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer")}
              className="text-slate-600 hover:text-slate-900 hidden sm:inline-flex"
            >
              <Linkedin className="h-4 w-4" />
              {t("linkedin")}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("https://github.com/Metwallypsc?tab=repositories", "_blank", "noopener,noreferrer")}
              className="text-slate-600 hover:text-slate-900 hidden sm:inline-flex"
            >
              <Github className="h-4 w-4" />
              {t("github")}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="text-slate-600 hover:text-slate-900 hidden sm:inline-flex"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "العربية" : "English"}
            </Button>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden text-slate-600 hover:text-slate-900"
                  aria-label={language === "ar" ? "افتح قائمة التنقل" : "Open navigation menu"}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side={language === "ar" ? "left" : "right"}>
                <SheetTitle className="sr-only">
                  {language === "ar" ? "قائمة التنقل" : "Navigation menu"}
                </SheetTitle>
                <nav aria-label="Mobile" className="flex flex-col gap-1 mt-8">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `px-3 py-3 rounded-lg text-base font-medium ${
                          isActive
                            ? "bg-blue-50 text-blue-700"
                            : "text-slate-700 hover:bg-slate-50"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                    className="w-full justify-center text-slate-600 hover:text-slate-900"
                  >
                    <Globe className="h-4 w-4" />
                    {language === "en" ? "العربية" : "English"}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
