import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();

  const items = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
    { q: t("faq4Q"), a: t("faq4A") },
    { q: t("faq5Q"), a: t("faq5A") },
    { q: t("faq6Q"), a: t("faq6A") },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            {t("faqTitle")}
          </h2>
          <p className="text-lg text-slate-600">{t("faqSubtitle")}</p>
        </div>

        <Accordion type="single" collapsible className="bg-white rounded-xl border border-slate-200 px-6">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-start text-slate-900 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
