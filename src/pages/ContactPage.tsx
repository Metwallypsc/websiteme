import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactFormSection from "@/components/ContactFormSection";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { personJsonLd, webPageJsonLd, PERSON_EMAIL } from "@/data/structuredData";

const TITLE = "Contact Abdulrhman Metwally";
const DESCRIPTION =
  "Get in touch for fractional product management, business analysis, or building your product/BA function from scratch. Email or connect on LinkedIn.";

const ContactPage = () => {
  const { t, language } = useLanguage();
  const { hash } = useLocation();

  // React Router doesn't scroll to hash targets on navigation by itself -
  // used by the "Send a message" link on the closing CTA (/contact#contact-form).
  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    if (!target) return;
    requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [hash]);

  return (
    <main id="main-content" className="pt-20">
      <SEO
        title={TITLE}
        description={DESCRIPTION}
        path="/contact"
        jsonLd={[
          personJsonLd,
          {
            "@type": "ContactPage",
            ...webPageJsonLd({
              name: TITLE,
              description: DESCRIPTION,
              path: "/contact",
              language,
              breadcrumb: [
                { name: "Home", path: "/" },
                { name: "Contact", path: "/contact" },
              ],
            }),
            mainEntity: {
              "@type": "ContactPoint",
              email: PERSON_EMAIL,
              contactType: "business inquiries",
              availableLanguage: ["English", "Arabic"],
            },
          },
        ]}
      />
      <h1 className="sr-only">{t("contactPageH1")}</h1>
      <ContactFormSection />
    </main>
  );
};

export default ContactPage;
