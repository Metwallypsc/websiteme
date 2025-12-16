import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    contact: "Contact",
    linkedin: "LinkedIn",
    
    // Hero
    experience: "12+ Years Experience",
    heroTitle1: "🚀 Elevate Your Product,",
    heroTitle2: "Empower Your Team",
    heroIntro: "Hi, I'm Abdulrhman Metwally, a seasoned Product Manager, Business Analyst, and Strategic Consultant with 12+ years of hands-on experience building digital products in complex industries like GRC, Blockchain, Telecom, Government, and SaaS.",
    heroDescription: "Whether you're launching your first product, scaling a B2B platform, or navigating enterprise digital transformation — I offer end-to-end expertise to help you deliver the right solutions, faster.",
    getStarted: "Get Started Today",
    viewLinkedin: "View LinkedIn Profile",
    
    // Services
    servicesTitle: "My Services",
    servicesSubtitle: "Comprehensive product management and business analysis services tailored to your needs",
    
    service1Title: "Product Management as a Service (PMaaS)",
    service1Subtitle: "Perfect for startups or growing teams needing experienced leadership without hiring full-time.",
    service1Feature1: "Own and manage your product roadmap",
    service1Feature2: "Write and prioritize user stories & features",
    service1Feature3: "Facilitate sprint planning and delivery",
    service1Feature4: "Represent your company in technical discussions with vendors or dev teams",
    service1Feature5: "Lead product discovery, validation, and release planning",
    
    service2Title: "Business Analysis & Product Documentation",
    service2Subtitle: "Translate business vision into clear, actionable requirements.",
    service2Feature1: "BRDs, PRDs, User Stories, Use Cases",
    service2Feature2: "Functional and non-functional specs",
    service2Feature3: "Stakeholder interviews and requirement elicitation",
    service2Feature4: "Support for regulated industries like Digital Government, Insurance, GRC, and Blockchain",
    
    service3Title: "Team Building & Process Design",
    service3Subtitle: "Build scalable processes and empower your people to deliver.",
    service3Feature1: "Build and structure in-house product/BA teams",
    service3Feature2: "Create SOPs (Standard Operating Procedures) and SOOs (Sequences of Operations)",
    service3Feature3: "Design scalable operating models for delivery teams",
    service3Feature4: "Agile adoption and continuous improvement guidance",
    
    service4Title: "Mentorship & Career Coaching for New Professionals",
    service4Subtitle: "Support for individuals starting in Product or Business Analysis roles.",
    service4Feature1: "1:1 mentorship and practical onboarding",
    service4Feature2: "Resume building and role readiness support",
    service4Feature3: "Career navigation tips in tech industries",
    service4Feature4: "Personalized feedback on career strategy",
    
    service5Title: "Technical Liaison / Product-Vendor Communication",
    service5Subtitle: "Your trusted voice when working with external dev houses, SaaS vendors, or freelancers.",
    service5Feature1: "Review proposals and contracts",
    service5Feature2: "Facilitate communication between business and technical stakeholders",
    service5Feature3: "Ensure alignment between your business goals and delivered software",
    
    // Who This Is For
    whoTitle: "Who This Is For",
    whoSubtitle: "Perfect for organizations and individuals at various stages of their journey",
    
    audience1: "Startups",
    audience1Desc: "needing fractional PM leadership",
    audience2: "Tech companies",
    audience2Desc: "seeking to scale with structure",
    audience3: "Agencies",
    audience3Desc: "building regulated or high-risk products",
    audience4: "New professionals",
    audience4Desc: "entering the BA/Product world",
    audience5: "Enterprises",
    audience5Desc: "transitioning from waterfall to Agile",
    
    // Why Work With Me
    whyTitle: "Why Work With Me?",
    whySubtitle: "What sets me apart in the product management and business analysis space",
    
    advantage1: "Deep industry expertise",
    advantage1Desc: "From SaaS to Blockchain to GRC",
    advantage2: "Human-first approach",
    advantage2Desc: "I align teams, not just features",
    advantage3: "Dual fluency",
    advantage3Desc: "I speak both \"tech\" and \"business\"",
    advantage4: "Proven track record",
    advantage4Desc: "Delivered successful products in highly complex domains",
    advantage5: "Fast ramp-up",
    advantage5Desc: "I integrate quickly and deliver value from day one",
    
    // Contact
    contactTitle: "Ready to build something meaningful?",
    contactSubtitle: "Let's talk about how I can support your product journey — as a service, as a coach, or as your partner in solving complex problems.",
    contactEmail: "Arhmetwally@outlook.com",
    linkedinProfile: "LinkedIn Profile",
    quote: "\"Your product deserves more than just management — it deserves momentum.\""
  },
  ar: {
    // Header
    contact: "تواصل",
    linkedin: "لينكد إن",
    
    // Hero
    experience: "أكثر من 12 سنة خبرة",
    heroTitle1: "🚀 ارتقِ بمنتجك،",
    heroTitle2: "مكّن فريقك",
    heroIntro: "مرحباً، أنا عبدالرحمن متولي، مدير منتجات متمرس ومحلل أعمال ومستشار استراتيجي بخبرة عملية تزيد عن 12 عاماً في بناء المنتجات الرقمية في الصناعات المعقدة مثل الحوكمة والامتثال وإدارة المخاطر، البلوك تشين، الاتصالات، الحكومة، والبرمجيات كخدمة.",
    heroDescription: "سواء كنت تطلق منتجك الأول، أو تتوسع في منصة B2B، أو تتنقل في التحول الرقمي للمؤسسات - أقدم خبرة شاملة لمساعدتك في تقديم الحلول المناسبة بشكل أسرع.",
    getStarted: "ابدأ اليوم",
    viewLinkedin: "عرض الملف الشخصي",
    
    // Services
    servicesTitle: "خدماتي",
    servicesSubtitle: "خدمات شاملة لإدارة المنتجات وتحليل الأعمال مصممة خصيصاً لاحتياجاتك",
    
    service1Title: "إدارة المنتجات كخدمة",
    service1Subtitle: "مثالي للشركات الناشئة أو الفرق النامية التي تحتاج قيادة خبيرة دون توظيف بدوام كامل.",
    service1Feature1: "امتلاك وإدارة خارطة طريق منتجك",
    service1Feature2: "كتابة وترتيب أولويات قصص المستخدمين والميزات",
    service1Feature3: "تسهيل تخطيط السبرينت والتسليم",
    service1Feature4: "تمثيل شركتك في المناقشات التقنية مع البائعين أو فرق التطوير",
    service1Feature5: "قيادة اكتشاف المنتج والتحقق وتخطيط الإطلاق",
    
    service2Title: "تحليل الأعمال وتوثيق المنتجات",
    service2Subtitle: "ترجمة رؤية الأعمال إلى متطلبات واضحة وقابلة للتنفيذ.",
    service2Feature1: "وثائق متطلبات الأعمال، وثائق متطلبات المنتج، قصص المستخدمين، حالات الاستخدام",
    service2Feature2: "المواصفات الوظيفية وغير الوظيفية",
    service2Feature3: "مقابلات أصحاب المصلحة واستخراج المتطلبات",
    service2Feature4: "دعم للصناعات المنظمة مثل الحكومة الرقمية والتأمين والحوكمة والبلوك تشين",
    
    service3Title: "بناء الفرق وتصميم العمليات",
    service3Subtitle: "بناء عمليات قابلة للتوسع وتمكين الأشخاص للتسليم.",
    service3Feature1: "بناء وهيكلة فرق المنتج/تحليل الأعمال الداخلية",
    service3Feature2: "إنشاء إجراءات التشغيل المعيارية وتسلسلات العمليات",
    service3Feature3: "تصميم نماذج تشغيل قابلة للتوسع لفرق التسليم",
    service3Feature4: "توجيه اعتماد الأجايل والتحسين المستمر",
    
    service4Title: "الإرشاد والتدريب المهني للمحترفين الجدد",
    service4Subtitle: "دعم للأفراد الذين يبدؤون في أدوار إدارة المنتجات أو تحليل الأعمال.",
    service4Feature1: "إرشاد فردي وتأهيل عملي",
    service4Feature2: "دعم بناء السيرة الذاتية واستعداد الدور",
    service4Feature3: "نصائح للتنقل المهني في صناعات التكنولوجيا",
    service4Feature4: "تغذية راجعة شخصية حول الاستراتيجية المهنية",
    
    service5Title: "الاتصال التقني / التواصل بين المنتج والبائع",
    service5Subtitle: "صوتك الموثوق عند العمل مع شركات التطوير الخارجية أو بائعي البرمجيات أو المستقلين.",
    service5Feature1: "مراجعة المقترحات والعقود",
    service5Feature2: "تسهيل التواصل بين أصحاب المصلحة التجاريين والتقنيين",
    service5Feature3: "ضمان التوافق بين أهداف عملك والبرمجيات المُسلمة",
    
    // Who This Is For
    whoTitle: "لمن هذا؟",
    whoSubtitle: "مثالي للمؤسسات والأفراد في مراحل مختلفة من رحلتهم",
    
    audience1: "الشركات الناشئة",
    audience1Desc: "تحتاج قيادة PM جزئية",
    audience2: "شركات التكنولوجيا",
    audience2Desc: "تسعى للتوسع بهيكلية",
    audience3: "الوكالات",
    audience3Desc: "تبني منتجات منظمة أو عالية المخاطر",
    audience4: "المحترفون الجدد",
    audience4Desc: "دخول عالم تحليل الأعمال/المنتجات",
    audience5: "المؤسسات",
    audience5Desc: "الانتقال من الشلال إلى الأجايل",
    
    // Why Work With Me
    whyTitle: "لماذا تعمل معي؟",
    whySubtitle: "ما يميزني في مجال إدارة المنتجات وتحليل الأعمال",
    
    advantage1: "خبرة صناعية عميقة",
    advantage1Desc: "من البرمجيات كخدمة إلى البلوك تشين إلى الحوكمة",
    advantage2: "نهج يركز على الإنسان",
    advantage2Desc: "أوحد الفرق، وليس فقط الميزات",
    advantage3: "طلاقة مزدوجة",
    advantage3Desc: "أتحدث \"التقنية\" و\"الأعمال\"",
    advantage4: "سجل حافل مثبت",
    advantage4Desc: "سلمت منتجات ناجحة في مجالات معقدة للغاية",
    advantage5: "بدء سريع",
    advantage5Desc: "أتكامل بسرعة وأقدم قيمة من اليوم الأول",
    
    // Contact
    contactTitle: "مستعد لبناء شيء ذي معنى؟",
    contactSubtitle: "دعنا نتحدث حول كيف يمكنني دعم رحلة منتجك - كخدمة، كمدرب، أو كشريك في حل المشاكل المعقدة.",
    contactEmail: "Arhmetwally@outlook.com",
    linkedinProfile: "الملف الشخصي",
    quote: "\"منتجك يستحق أكثر من مجرد إدارة - يستحق زخماً.\""
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};