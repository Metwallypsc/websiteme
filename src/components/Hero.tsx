import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail,} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const isRTL = language === 'ar';
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/20">
            {t('experience')}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-slate-900">
            {t('heroTitle1')}
            <br />
            <span className="text-primary">
              {t('heroTitle2')}
            </span>
          </h1>
          
          <div className="mb-8 space-y-4">
            <p className="text-xl md:text-2xl mb-4 text-slate-700">
              {t('heroIntro')}
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {t('heroDescription')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 shadow-lg transition-all duration-300"
              onClick={() => window.open('mailto:Arhmetwally@outlook.com', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5" />
              {t('getStarted')}
              <span className="ml-2">→</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-black text-white hover:bg-black/90 shadow-lg transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/abdulrhman-metwally/', '_blank')}
            >
              {t('viewLinkedin')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;