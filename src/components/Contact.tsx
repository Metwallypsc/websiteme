import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">📩</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{t('contactTitle')}</h2>
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-white/90 shadow-lg transition-all duration-300"
              onClick={() => window.open('mailto:Arhmetwally@outlook.com', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5" />
              {t('contactEmail')}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => window.open('#', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              {t('linkedinProfile')}
            </Button>
          </div>

          <div className="text-center">
            <p className="text-white/80 text-lg font-medium italic">
              {t('quote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;