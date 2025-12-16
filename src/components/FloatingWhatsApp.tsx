import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FloatingWhatsApp = () => {
  const { language } = useLanguage();
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+201234567890', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
        language === 'ar' ? 'left-6' : 'right-6'
      }`}
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default FloatingWhatsApp;