import Mentorship from "@/components/Mentorship";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { personJsonLd, webPageJsonLd } from "@/data/structuredData";

const TITLE = "Mentorship & Career Coaching for Aspiring PMs & BAs";
const DESCRIPTION =
  "1:1 mentorship and practical coaching for anyone breaking into - or growing in - Product Management and Business Analysis, guided by 13+ years of hands-on experience shipping real products in complex industries.";

const MentorshipPage = () => {
  const { language } = useLanguage();

  return (
    <main id="main-content" className="pt-20">
      <SEO
        title={TITLE}
        description={DESCRIPTION}
        path="/mentorship"
        jsonLd={[
          personJsonLd,
          webPageJsonLd({
            name: TITLE,
            description: DESCRIPTION,
            path: "/mentorship",
            language,
            breadcrumb: [
              { name: "Home", path: "/" },
              { name: "Mentorship", path: "/mentorship" },
            ],
          }),
        ]}
      />
      <Mentorship />
    </main>
  );
};

export default MentorshipPage;
