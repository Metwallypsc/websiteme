import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
  src="/logo.svg"
  alt="Logo"
  loading="eager"
  decoding="async"
  draggable={false}
  className="h-10 w-auto max-w-[160px] object-contain select-none"
/>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('mailto:Arhmetwally@outlook.com', '_blank')}
            >
              <Mail className="mr-2 h-4 w-4" />
              {t('contact')}
            </Button>
            <Button 
              size="sm"
              className="bg-black text-white hover:bg-black/90"
              onClick={() => window.open('https://www.linkedin.com/in/abdulrhman-metwally/', '_blank')}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              {t('linkedin')}
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="text-slate-600 hover:text-slate-900"
            >
              <Globe className="mr-2 h-4 w-4" />
              {language === 'en' ? 'العربية' : 'English'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;