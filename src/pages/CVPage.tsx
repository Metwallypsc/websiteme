import CV from "@/components/CV";
import SEO from "@/components/SEO";
import { personJsonLd, webPageJsonLd } from "@/data/structuredData";

const TITLE = "CV - Abdulrhman Metwally, Senior Product Manager";
const DESCRIPTION =
  "Full CV: 13+ years in product management and business analysis across TAM, PSC, PSH, Futira, Unicom, GET Group and more - GRC, GovTech, SaaS, Telecom, and Blockchain products shipped to government ministries.";

const CVPage = () => {
  return (
    <main id="main-content" className="pt-20">
      <SEO
        title={TITLE}
        description={DESCRIPTION}
        path="/cv"
        jsonLd={[
          personJsonLd,
          webPageJsonLd({
            name: TITLE,
            description: DESCRIPTION,
            path: "/cv",
            breadcrumb: [
              { name: "Home", path: "/" },
              { name: "CV", path: "/cv" },
            ],
          }),
        ]}
      />
      <CV />
    </main>
  );
};

export default CVPage;
