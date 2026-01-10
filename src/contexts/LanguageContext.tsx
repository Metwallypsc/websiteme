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
    heroTitle1: "Elevate Your Product,",
    heroTitle2: "Empower Your Team",
    heroIntro: "Hi, I'm Abdulrhman H. Metwally, a seasoned Product Manager, Business Analyst, and Strategic Consultant with 12+ years of hands-on experience building digital products in complex industries like GRC, Blockchain, Telecom, Government, and SaaS.",
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
    contact: "تواصل معي",
    linkedin: "لينكدإن",
    
    // Hero
    experience: "خبرة تزيد عن ١٢ عاماً",
    heroTitle1: "ارتقِ بمنتجك،",
    heroTitle2: "وحرّك طاقات فريقك نحو التميّز",
    heroIntro: "مرحباً، أنا عبدالرحمن حسين متولي، مدير منتجات ومحلل أعمال ومستشار استراتيجي بخبرة عملية تزيد عن ١٢ عاماً في تطوير المنتجات الرقمية ضمن قطاعات متخصصة تشمل: الحوكمة والامتثال، إدارة المخاطر، البلوك تشين، الاتصالات، القطاع الحكومي، والبرمجيات كخدمة (SaaS).",
    heroDescription: "سواء كنت تطلق منتجك الأول، توسّع منصة أعمالك، أو تقود تحولك الرقمي المؤسسي، أقدّم لك خبرة متكاملة وحلول عملية تساعدك على الإنجاز بسرعة وكفاءة.",
    getStarted: "ابدأ رحلتك الآن",
    viewLinkedin: "اطلع على ملفي الشخصي",
    
    // Services
    servicesTitle: "الخدمات التي أقدمها",
    servicesSubtitle: "حلول شاملة في إدارة المنتجات وتحليل الأعمال، مصمّمة خصيصاً لاحتياجاتك",
    
    service1Title: "إدارة المنتجات كخدمة (PMaaS)",
    service1Subtitle: "الحل الأمثل للشركات الناشئة والفرق المتنامية التي تحتاج قيادة منتجات متمرسة دون التوظيف الدائم.",
    service1Feature1: "الإشراف على خارطة طريق المنتج وتطويرها",
    service1Feature2: "صياغة قصص المستخدمين وترتيب أولويات الميزات",
    service1Feature3: "تيسير تخطيط السبرنتات ومتابعة التسليم",
    service1Feature4: "تمثيل مؤسستك في المفاوضات التقنية مع المورّدين وفرق التطوير",
    service1Feature5: "قيادة عمليات استكشاف المنتج والتحقق منه وتخطيط الإطلاق",
    
    service2Title: "تحليل الأعمال وتوثيق المنتجات",
    service2Subtitle: "تحويل الرؤى التجارية إلى متطلبات واضحة وقابلة للتنفيذ.",
    service2Feature1: "وثائق متطلبات الأعمال والمنتجات، وقصص المستخدمين، وحالات الاستخدام",
    service2Feature2: "المواصفات الوظيفية وغير الوظيفية",
    service2Feature3: "إجراء المقابلات مع أصحاب المصلحة واستنباط المتطلبات",
    service2Feature4: "دعم متخصص للقطاعات المنظّمة: الحكومة الرقمية، التأمين، الحوكمة، والبلوك تشين",
    
    service3Title: "بناء الفرق وتصميم العمليات",
    service3Subtitle: "أنشئ منظومة عمل قوية تمكّن فريقك من الأداء بثبات وقابلية للتوسع.",
    service3Feature1: "بناء وهيكلة فرق المنتجات وتحليل الأعمال داخل المؤسسة",
    service3Feature2: "وضع إجراءات التشغيل المعيارية وتحديد تسلسلات العمليات",
    service3Feature3: "تصميم نماذج تشغيلية قابلة للتوسع لفرق التطوير",
    service3Feature4: "الإرشاد نحو تبني منهجية Agile والتحسين المستمر",
    
    service4Title: "التوجيه والإرشاد الوظيفي للمحترفين الجدد",
    service4Subtitle: "دعم متخصص للمبتدئين في مجالي إدارة المنتجات وتحليل الأعمال.",
    service4Feature1: "جلسات إرشاد فردية وتأهيل عملي مكثّف",
    service4Feature2: "بناء السيرة الذاتية والاستعداد للوظيفة المستهدفة",
    service4Feature3: "توجيه احترافي لفهم متطلبات السوق واتخاذ قرارات مهنية واعية",
    service4Feature4: "تقييم شخصي وتخطيط استراتيجي للمسار الوظيفي",
    
    service5Title: "التواصل الفني وربط المنتج بالمورّدين",
    service5Subtitle: "أكون صوتك الموثوق عند التعامل مع المطوّرين الخارجيين أو مزودي الخدمات السحابية.",
    service5Feature1: "مراجعة المقترحات الفنية والعقود",
    service5Feature2: "تسهيل التواصل بين الفريق التقني وأصحاب المصلحة",
    service5Feature3: "ضمان مواءمة الأهداف التجارية مع المخرجات التقنية",
    
    // Who This Is For
    whoTitle: "الفئات المستفيدة",
    whoSubtitle: "حلول مصمّمة بعناية لدعم الشركات والأفراد في مراحل مختلفة من النمو والتحوّل.",
    
    audience1: "الشركات الناشئة",
    audience1Desc: "دعم عملي لبناء المنتج، اختبار الفكرة، وتسريع الوصول إلى السوق بخبرة متمرسة.",
    audience2: "شركات التكنولوجيا",
    audience2Desc: "هيكلة العمليات، ضبط الأولويات، وبناء نموذج تشغيلي يدعم النمو المستدام.",
    audience3: "الشركات المتخصصة",
    audience3Desc: "خبرة عملية في التعامل مع المتطلبات التنظيمية في قطاعات مثل الحوكمة، التأمين، والبلوك تشين.",
    audience4: "خريجون ومحترفون جدد",
    audience4Desc: "تأهيل عملي، توجيه وظيفي، واستعداد حقيقي لدخول سوق العمل بثقة.",
    audience5: "المؤسسات الكبرى",
    audience5Desc: "دعم استراتيجي لإدارة التغيير، تحسين الأداء، وتمكين الفرق متعددة التخصصات.",
    
    // Why Work With Me
	whyTitle: "لماذا تختار العمل معي؟",
	whySubtitle: "قيمة حقيقية وخبرة عملية في إدارة المنتجات وتحليل الأعمال",

	advantage1: "خبرة عملية عبر قطاعات متعددة",
	advantage1Desc: "تجربة متعمقة في البرمجيات كخدمة، البلوك تشين، الحوكمة، والقطاعات عالية التنظيم",

	advantage2: "نهج يركّز على تمكين الفرق",
	advantage2Desc: "بناء توافق حقيقي بين الأطراف المختلفة وتحويل الأفراد إلى فرق منتجة",

	advantage3: "ربط فعّال بين الأعمال والتقنية",
	advantage3Desc: "ترجمة الأهداف التجارية إلى حلول تقنية قابلة للتنفيذ",

	advantage4: "سجل مثبت في تسليم منتجات معقّدة",
	advantage4Desc: "قيادة منتجات ناجحة داخل بيئات تنافسية ومتطلبات تنظيمية صارمة",

	advantage5: "سرعة اندماج وتأثير مباشر",
	advantage5Desc: "تحقيق قيمة ملموسة منذ اليوم الأول دون منحنى تعلّم طويل",

	// Contact
	contactTitle: "هل أنت مستعد لبناء منتج قوي؟",
	contactSubtitle: "دعنا نناقش كيف يمكنني دعم رحلة منتجك، سواء كخبير تنفيذي، مرشد مهني، أو شريك في حل التحديات المعقّدة.",
	contactEmail: "Arhmetwally@outlook.com",
	linkedinProfile: "ملفي على لينكدإن",
	quote: "\"المنتجات الناجحة لا تُدار فقط، بل تُقاد برؤية واضحة وزخم مستمر.\""

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