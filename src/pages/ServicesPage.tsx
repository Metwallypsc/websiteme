import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { personJsonLd, webPageJsonLd, SITE_URL } from "@/data/structuredData";

const TITLE = "Product Management & Business Analysis Services";
const DESCRIPTION =
  "Product Management as a Service (PMaaS), business analysis & documentation, team building, technical liaison, and mentorship - from a Senior PM with 13+ years across GRC, GovTech, SaaS, and more.";

const ServicesPage = () => {
  const { t } = useLanguage();

  const serviceKeys = [
    "service1",
    "service2",
    "service3",
    "service4",
    "service5",
  ] as const;

  const serviceListJsonLd = {
    "@type": "CollectionPage",
    ...webPageJsonLd({
      name: TITLE,
      description: DESCRIPTION,
      path: "/services",
      breadcrumb: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ],
    }),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: serviceKeys.map((key, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: t(`${key}Title`),
          description: t(`${key}Subtitle`),
          provider: { "@id": `${SITE_URL}/#person` },
          areaServed: "Worldwide (Remote)",
        },
      })),
    },
  };

  const faqJsonLd = {
    "@type": "FAQPage",
    mainEntity: [1, 2, 3, 4, 5, 6].map((n) => ({
      "@type": "Question",
      name: t(`faq${n}Q`),
      acceptedAnswer: { "@type": "Answer", text: t(`faq${n}A`) },
    })),
  };

  return (
    <main id="main-content" className="pt-20">
      <SEO
        title={TITLE}
        description={DESCRIPTION}
        path="/services"
        jsonLd={[personJsonLd, serviceListJsonLd, faqJsonLd]}
      />
      <h1 className="sr-only">{t("servicesPageH1")}</h1>
      <Services />
      <FAQ />
    </main>
  );
};

export default ServicesPage;
