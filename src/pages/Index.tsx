import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import { personJsonLd, websiteJsonLd, webPageJsonLd } from "@/data/structuredData";

const TITLE = "Abdulrhman Metwally - Product Management Services";
const DESCRIPTION =
  "Senior Product Manager & Business Analyst with 13+ years shipping enterprise software across GRC, GovTech, SaaS, Telecom, HR Tech, and Blockchain. Product Management as a Service, business analysis, and team building.";

const Index = () => {
  return (
    <main id="main-content" className="min-h-screen">
      <SEO
        title={TITLE}
        description={DESCRIPTION}
        path="/"
        jsonLd={[
          personJsonLd,
          websiteJsonLd,
          webPageJsonLd({ name: TITLE, description: DESCRIPTION, path: "/" }),
        ]}
      />
      <Hero />
      <Services />
      <WhoIsThisFor />
      <WhyWorkWithMe />
      <Contact />
    </main>
  );
};

export default Index;
