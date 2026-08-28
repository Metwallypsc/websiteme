import { localizePath } from "@/contexts/LanguageContext";

// The live site redirects the apex domain to www (verified: arhmetwally.com
// -> 307 -> www.arhmetwally.com), so www is the actual canonical host - every
// canonical/OG/sitemap URL must use it, not the apex.
export const SITE_URL = "https://www.arhmetwally.com";
export const SITE_NAME = "Abdulrhman Metwally";
export const PERSON_NAME = "Abdulrhman H. Metwally";
export const PERSON_EMAIL = "Arhmetwally@outlook.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/abdulrhman-metwally/";
export const GITHUB_URL = "https://github.com/Metwallypsc";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/home-en.png`;
export const DEFAULT_OG_IMAGE_AR = `${SITE_URL}/og/home-ar.png`;

export const personJsonLd = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: PERSON_NAME,
  alternateName: "Abdulrhman Metwally",
  jobTitle: "Senior Product Manager, Product Owner & Business Analyst",
  description:
    "Senior Product Manager and Business Analyst with 13+ years taking enterprise software from concept to launch across GRC, Business Continuity, GovTech, SaaS, Telecom, HR Tech, and Blockchain.",
  url: SITE_URL,
  email: `mailto:${PERSON_EMAIL}`,
  sameAs: [LINKEDIN_URL, GITHUB_URL],
  knowsAbout: [
    "Product Management",
    "Product Management as a Service (PMaaS)",
    "Business Analysis",
    "Governance, Risk & Compliance (GRC)",
    "Business Continuity Management (BCM)",
    "GovTech",
    "Agile & Scrum",
    "Requirements Engineering",
    "Blockchain & Smart Contracts",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Thebes Academy",
  },
  workLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressCountry: "SA" },
  },
};

export const professionalServiceJsonLd = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: `${PERSON_NAME} - Product Management & Business Analysis Consulting`,
  description:
    "Fractional product management (PMaaS), business analysis, and product/BA team building for startups, tech companies, agencies, and government entities - across GRC, Business Continuity, GovTech, SaaS, Telecom, HR Tech, and Blockchain.",
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  provider: { "@id": `${SITE_URL}/#person` },
  areaServed: ["SA", "EG", "AE", "QA", "IQ"],
  serviceType: [
    "Product Management as a Service (PMaaS)",
    "Business Analysis & Product Documentation",
    "Team Building & Process Design",
    "Mentorship & Career Coaching",
    "Technical Liaison / Product-Vendor Communication",
  ],
  sameAs: [LINKEDIN_URL, GITHUB_URL],
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    "Professional Product Management Services by Abdulrhman Metwally - 13+ years experience in PMaaS, Business Analysis, Team Building & Technical Leadership.",
  publisher: { "@id": `${SITE_URL}/#person` },
  inLanguage: ["en", "ar"],
};

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export const breadcrumbJsonLd = (items: BreadcrumbItem[], language: "en" | "ar" = "en") => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${localizePath(item.path, language)}`,
  })),
});

export const webPageJsonLd = (opts: {
  name: string;
  description: string;
  path: string;
  language?: "en" | "ar";
  breadcrumb?: BreadcrumbItem[];
}) => {
  const language = opts.language ?? "en";
  const localePath = localizePath(opts.path, language);
  const node: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${SITE_URL}${localePath}#webpage`,
    url: `${SITE_URL}${localePath}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    inLanguage: language,
  };
  if (opts.breadcrumb) {
    node.breadcrumb = breadcrumbJsonLd(opts.breadcrumb, language);
  }
  return node;
};
