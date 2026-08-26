export const SITE_URL = "https://arhmetwally.com";
export const SITE_NAME = "Abdulrhman Metwally";
export const PERSON_NAME = "Abdulrhman H. Metwally";
export const PERSON_EMAIL = "Arhmetwally@outlook.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/abdulrhman-metwally/";
export const GITHUB_URL = "https://github.com/Metwallypsc";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.svg`;

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

export const breadcrumbJsonLd = (items: BreadcrumbItem[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const webPageJsonLd = (opts: {
  name: string;
  description: string;
  path: string;
  breadcrumb?: BreadcrumbItem[];
}) => {
  const node: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${SITE_URL}${opts.path}#webpage`,
    url: `${SITE_URL}${opts.path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en",
  };
  if (opts.breadcrumb) {
    node.breadcrumb = breadcrumbJsonLd(opts.breadcrumb);
  }
  return node;
};
