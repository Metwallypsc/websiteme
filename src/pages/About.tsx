import About from "@/components/About";
import SEO from "@/components/SEO";
import { personJsonLd, webPageJsonLd } from "@/data/structuredData";

const TITLE = "About Abdulrhman Metwally";
const DESCRIPTION =
  "13+ years as a Senior Product Manager and Business Analyst - building product and BA functions from zero, reviving stalled platforms, and shipping enterprise software to government ministries and global clients.";

const AboutPage = () => {
  return (
    <main id="main-content" className="pt-20">
      <SEO
        title={TITLE}
        description={DESCRIPTION}
        path="/about"
        jsonLd={[
          personJsonLd,
          {
            "@type": "ProfilePage",
            mainEntity: { "@id": "https://arhmetwally.com/#person" },
            ...webPageJsonLd({
              name: TITLE,
              description: DESCRIPTION,
              path: "/about",
              breadcrumb: [
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
              ],
            }),
          },
        ]}
      />
      <About />
    </main>
  );
};

export default AboutPage;
