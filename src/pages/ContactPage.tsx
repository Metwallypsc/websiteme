import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { personJsonLd, webPageJsonLd, PERSON_EMAIL } from "@/data/structuredData";

const TITLE = "Contact Abdulrhman Metwally";
const DESCRIPTION =
  "Get in touch for fractional product management, business analysis, or building your product/BA function from scratch. Email or connect on LinkedIn.";

const ContactPage = () => {
  const { t } = useLanguage();
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
      <Contact />
    </main>
  );
};

export default ContactPage;
