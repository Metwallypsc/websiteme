import About from "@/components/About";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { personJsonLd, webPageJsonLd, SITE_URL } from "@/data/structuredData";

const TITLE = "About Abdulrhman Metwally";
const DESCRIPTION =
  "13+ years as a Senior Product Manager and Business Analyst - building product and BA functions from zero, reviving stalled platforms, and shipping enterprise software to government ministries and global clients.";

const AboutPage = () => {
  const { language } = useLanguage();
  return (
    <main id="main-content" className="pt-20">
      <SEO
        title={TITLE}
        description={DESCRIPTION}
        path="/about"
        jsonLd={[
          personJsonLd,
          {
            ...webPageJsonLd({
              name: TITLE,
              description: DESCRIPTION,
              path: "/about",
              language,
              breadcrumb: [
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
              ],
            }),
            "@type": "ProfilePage",
            mainEntity: { "@id": `${SITE_URL}/#person` },
          },
        ]}
      />
      <About />
    </main>
  );
};

export default AboutPage;
