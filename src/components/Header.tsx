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
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🚀</span>
            </div>
            <span className="text-xl font-bold text-foreground">Abdulrhman Metwally</span>
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
              onClick={() => window.open('#', '_blank')}
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