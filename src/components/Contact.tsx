import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useLanguage, localizePath } from "@/contexts/LanguageContext";
import BookCallButton from "@/components/BookCallButton";

const Contact = () => {
  const { t, language } = useLanguage();
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">{t('contactTitle')}</h2>
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <BookCallButton
              source="home_closing_cta"
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90 shadow-lg transition-all duration-300"
            />

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-blue-600 hover:bg-white hover:!text-black transition-all duration-300 shadow-lg"
            >
              <Link to={`${localizePath("/contact", language)}#contact-form`}>
                <MessageSquare className="mr-2 h-5 w-5" />
                {t('sendMessage')}
              </Link>
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
