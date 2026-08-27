import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "@/components/ContactForm";
import CalendlyInlineEmbed from "@/components/CalendlyInlineEmbed";

const ContactFormSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            {t("contactFormHeading")}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t("contactFormSubtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            {/* Remounts on language switch: react-hook-form's resolver and
                Radix Select's rendered options both otherwise keep whatever
                translation was active when the form first mounted. */}
            <ContactForm key={language} />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium text-slate-500 mb-4 text-center lg:text-start">
              {t("contactFormBookInstead")}
            </p>
            <CalendlyInlineEmbed />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
