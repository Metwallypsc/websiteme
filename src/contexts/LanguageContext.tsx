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
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navContact: "Contact",
    navCV: "My CV",
    contact: "Contact",
    linkedin: "LinkedIn",
    github: "GitHub",
    
    // Hero
    experience: "13+ Years Experience",
    heroTitle1: "Elevate Your Product,",
    heroTitle2: "Empower Your Team",
    heroIntro: "Hi, I'm Abdulrhman H. Metwally, a seasoned Product Manager, Business Analyst, and Strategic Consultant with 13+ years of hands-on experience building digital products in complex industries like GRC, Blockchain, Telecom, Government, and SaaS.",
    heroDescription: "Whether you're launching your first product, scaling a B2B platform, or navigating enterprise digital transformation — I offer end-to-end expertise to help you deliver the right solutions, faster.",
    getStarted: "Get Started Today",
    viewLinkedin: "View LinkedIn Profile",
    
    // Services page header
    servicesPageH1: "Product Management & Business Analysis Services",

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
    
    // FAQ (Services page)
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Common questions before we start working together",
    faq1Q: "What is Product Management as a Service (PMaaS)?",
    faq1A: "It's fractional product leadership: you get an experienced PM owning your roadmap, backlog, and delivery without the cost or commitment of a full-time hire - ideal for startups and growing teams that need senior leadership part-time.",
    faq2Q: "Do you work remotely with international clients?",
    faq2A: "Yes. My last three roles (TAM, PSC, Futira) were fully remote, and I've delivered products for clients and government entities in Saudi Arabia, Egypt, the UAE, Qatar, and Iraq.",
    faq3Q: "What industries do you specialize in?",
    faq3A: "Governance, Risk & Compliance (GRC), Business Continuity, GovTech, SaaS, Telecom, HR Tech, and Blockchain - all backed by shipped, production products, not just theory.",
    faq4Q: "Can you build a product or business-analysis team from scratch?",
    faq4A: "Yes. At PSC I built the Business Analysis function from zero - hiring and mentoring dozens of analysts and introducing peer-review and documentation standards that measurably cut developer rework.",
    faq5Q: "What's the engagement model - full-time, part-time, or project-based?",
    faq5A: "Whatever fits: fractional PMaaS on a part-time retainer, a fixed-scope consulting engagement, or full ownership of a product from discovery through delivery.",
    faq6Q: "Have you worked with government clients before?",
    faq6A: "Yes - products and systems I've led are deployed across 5+ government ministries and entities, including Saudi Arabia's Ministry of Culture, Ministry of Commerce, Ministry of Justice, the UAE's Abu Dhabi Accountability Authority, and Madinah Municipality.",

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
    
    // Footer
    footerTagline: "Product Manager · Business Analyst · Strategic Consultant",
    footerBlurb: "Helping teams build the right products, faster — with 13+ years across GRC, SaaS, telecom, blockchain & government.",
    footerNavigate: "Navigate",
    footerServicesHeading: "Services",
    footerService1: "Product Mgmt (PMaaS)",
    footerService2: "Business Analysis",
    footerService3: "Team Building",
    footerService4: "Mentorship & Coaching",
    footerService5: "Technical Liaison",
    footerGetInTouch: "Get in touch",
    footerLocation: "Cairo, Egypt",
    footerCopyrightName: "Abdulrhman H. Metwally. All rights reserved.",
    footerBackToTop: "Back to top",

    // 404
    notFoundTitle: "Page not found",
    notFoundText: "The page you're looking for doesn't exist or may have moved.",
    notFoundCta: "Back to homepage",

    // About page
    aboutHeading: "About Me",
    aboutIntro: "I'm Abdulrhman H. Metwally, a Senior Product Manager, Product Owner, and Business Analyst with 13+ years turning enterprise software ideas into products that actually ship — across GRC, Business Continuity, GovTech, SaaS, Telecom, HR Tech, and Blockchain.",
    aboutP1: "My path started in software sales and business analysis, and grew into leading cross-functional teams of up to 35 people across Saudi Arabia and Egypt — including fully remote setups. I've built product and business-analysis functions from zero, revived platforms that had stalled, and carried several products from a blank page to production, including systems deployed inside government ministries and public entities.",
    aboutP2: "I care about the full lifecycle: discovery, roadmap, backlog, prototyping, delivery — not just writing requirements and walking away. Day to day that means Agile/Scrum leadership, stakeholder management up to C-level and government decision-makers, and enough technical fluency (from Figma prototypes to blockchain smart contracts) to work directly with engineering rather than through a translator.",
    aboutHighlightsTitle: "A few numbers that sum it up",
    aboutCtaTitle: "Want the full picture?",
    aboutCtaText: "The complete work history — every role, product, and client — lives on my CV page. Or jump straight to the services I offer.",
    aboutCtaCv: "View full CV",
    aboutCtaServices: "See services",

    // Contact page header
    contactPageH1: "Contact",

    // Contact
    contactTitle: "Ready to build something meaningful?",
    contactSubtitle: "Let's talk about how I can support your product journey — as a service, as a coach, or as your partner in solving complex problems.",
    contactEmail: "Arhmetwally@outlook.com",
    linkedinProfile: "LinkedIn Profile",
    quote: "\"Your product deserves more than just management — it deserves momentum.\"",

    // Booking + contact form
    bookACall: "Book a Call",
    sendMessage: "Send a Message",
    calendarLoading: "Loading calendar…",
    contactFormHeading: "Send a message",
    contactFormSubtitle: "Tell me a bit about what you need and I'll reply within a day or two.",
    contactFormOr: "or",
    contactFormBookInstead: "Prefer to talk it through? Grab a slot directly.",
    contactFormNameLabel: "Name",
    contactFormNamePlaceholder: "Your name",
    contactFormEmailLabel: "Email",
    contactFormEmailPlaceholder: "you@company.com",
    contactFormCompanyLabel: "Company (optional)",
    contactFormCompanyPlaceholder: "Your company",
    contactFormServiceLabel: "How can I help?",
    contactFormServicePlaceholder: "Select a service",
    contactFormBudgetLabel: "Budget / timeline (optional)",
    contactFormBudgetPlaceholder: "e.g. $2-5k/mo, starting next month",
    contactFormMessageLabel: "Message",
    contactFormMessagePlaceholder: "What are you working on, and what would help most right now?",
    contactFormSubmit: "Send message",
    contactFormSubmitting: "Sending…",
    contactFormSuccessTitle: "Message sent",
    contactFormSuccessText: "Thanks — I'll get back to you within a day or two. If it's time-sensitive, booking a call is the fastest way to talk it through.",
    contactFormErrorTitle: "Something went wrong",
    contactFormErrorText: "Your message didn't go through. Please try again, or email me directly.",
    contactFormErrorRetry: "Try again",
    contactFormEmailFallback: "Prefer email? Reach me directly at",
    contactServiceOther: "Other",
    validationCaptchaMissing: "Please complete the verification challenge before sending.",
    validationNameRequired: "Please enter your name (at least 2 characters).",
    validationEmailInvalid: "Please enter a valid email address.",
    validationServiceRequired: "Please choose what you need help with.",
    validationMessageRequired: "Please write a message (at least 10 characters).",

    // service select uses the footerService1-5 labels + this one
  },
  ar: {
    // Header
    navHome: "الرئيسية",
    navAbout: "من أنا",
    navServices: "الخدمات",
    navContact: "تواصل معي",
    navCV: "سيرتي الذاتية",
    contact: "تواصل معي",
    linkedin: "لينكدإن",
    github: "جيت هاب",
    
    // Hero
    experience: "خبرة تزيد عن ١٣ عاماً",
    heroTitle1: "ارتقِ بمنتجك،",
    heroTitle2: "وحرّك طاقات فريقك نحو التميّز",
    heroIntro: "مرحباً، أنا عبدالرحمن حسين متولي، مدير منتجات ومحلل أعمال ومستشار استراتيجي بخبرة عملية تزيد عن ١٣ عاماً في تطوير المنتجات الرقمية ضمن قطاعات متخصصة تشمل: الحوكمة والامتثال، إدارة المخاطر، البلوك تشين، الاتصالات، القطاع الحكومي، والبرمجيات كخدمة (SaaS).",
    heroDescription: "سواء كنت تطلق منتجك الأول، توسّع منصة أعمالك، أو تقود تحولك الرقمي المؤسسي، أقدّم لك خبرة متكاملة وحلول عملية تساعدك على الإنجاز بسرعة وكفاءة.",
    getStarted: "ابدأ رحلتك الآن",
    viewLinkedin: "اطلع على ملفي الشخصي",
    
    // Services page header
    servicesPageH1: "خدمات إدارة المنتجات وتحليل الأعمال",

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
    
    // FAQ (Services page)
    faqTitle: "أسئلة شائعة",
    faqSubtitle: "أسئلة بيسألها العملاء قبل ما نبدأ نشتغل مع بعض",
    faq1Q: "إيه هي إدارة المنتجات كخدمة (PMaaS)؟",
    faq1A: "قيادة منتج بدوام جزئي: بتحصل على مدير منتج متمرس يدير خارطة الطريق والباكلوج والتسليم من غير تكلفة أو التزام توظيف دائم — مناسبة جدًا للشركات الناشئة والفرق النامية اللي محتاجة قيادة أساسية بدوام جزئي.",
    faq2Q: "بتشتغل عن بعد مع عملاء دوليين؟",
    faq2A: "أيوه. آخر 3 وظائف لي (TAM، PSC، Futira) كانت عن بعد بالكامل، وسلّمت منتجات لعملاء وجهات حكومية في السعودية ومصر والإمارات وقطر والعراق.",
    faq3Q: "إيه القطاعات اللي بتتخصص فيها؟",
    faq3A: "الحوكمة والمخاطر والالتزام (GRC)، استمرارية الأعمال، الحكومة الرقمية، SaaS، الاتصالات، الموارد البشرية، والبلوكشين — كلها مدعومة بمنتجات فعلية اتشحنت، مش نظري بس.",
    faq4Q: "تقدر تبني فريق منتج أو تحليل أعمال من الصفر؟",
    faq4A: "أيوه. في PSC بنيت وظيفة تحليل الأعمال من الصفر — وظفت ودرّبت عشرات المحللين، وأدخلت معايير مراجعة الأقران والتوثيق اللي قلّلت إعادة العمل عند المطورين بشكل ملموس.",
    faq5Q: "إيه نموذج التعامل — دوام كامل، جزئي، ولا بالمشروع؟",
    faq5A: "على حسب احتياجك: PMaaS بدوام جزئي، أو مشاركة استشارية بنطاق محدد، أو ملكية كاملة للمنتج من الاستكشاف للتسليم.",
    faq6Q: "اشتغلت قبل كده مع عملاء حكوميين؟",
    faq6A: "أيوه — منتجات وأنظمة قدتها مطبّقة في أكثر من 5 وزارات وجهات حكومية، منها وزارة الثقافة ووزارة التجارة ووزارة العدل السعودية، وديوان المحاسبة بأبوظبي، وأمانة المدينة المنورة.",

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

	// Footer
	footerTagline: "مدير منتج · محلل أعمال · مستشار استراتيجي",
	footerBlurb: "بساعد الفرق تبني المنتج الصح وبسرعة — بخبرة 13+ سنة في GRC وSaaS والاتصالات والبلوك تشين والقطاع الحكومي.",
	footerNavigate: "التنقل",
	footerServicesHeading: "الخدمات",
	footerService1: "إدارة المنتجات (PMaaS)",
	footerService2: "تحليل الأعمال",
	footerService3: "بناء الفرق",
	footerService4: "الإرشاد والتوجيه",
	footerService5: "الوساطة التقنية",
	footerGetInTouch: "تواصل معي",
	footerLocation: "القاهرة، مصر",
	footerCopyrightName: "عبدالرحمن حسين متولي. جميع الحقوق محفوظة.",
	footerBackToTop: "للأعلى",

	// 404
	notFoundTitle: "الصفحة غير موجودة",
	notFoundText: "الصفحة اللي بتدور عليها مش موجودة أو ممكن تكون اتنقلت.",
	notFoundCta: "ارجع للصفحة الرئيسية",

	// About page
	aboutHeading: "من أنا",
	aboutIntro: "أنا عبدالرحمن حسين متولي، مدير منتجات أول ومحلل أعمال بخبرة تتجاوز 13 سنة في تحويل أفكار أنظمة المؤسسات إلى منتجات تُشحن فعليًا — في مجالات الحوكمة والمخاطر والالتزام، استمرارية الأعمال، الحكومة الرقمية، SaaS، الاتصالات، الموارد البشرية، والبلوكشين.",
	aboutP1: "بدأت مسيرتي في مبيعات البرمجيات وتحليل الأعمال، وتطورت لقيادة فرق متعددة التخصصات وصلت إلى 35 فردًا في السعودية ومصر، بما في ذلك فرق عن بعد بالكامل. بنيت وظائف المنتج وتحليل الأعمال من الصفر، وأحييت منصات كانت متوقفة، وأوصلت عدة منتجات من فكرة على الورق إلى الإنتاج الفعلي، بما فيها أنظمة مطبَّقة داخل وزارات وجهات حكومية.",
	aboutP2: "أهتم بدورة حياة المنتج كاملة: الاستكشاف، خريطة الطريق، الباكلوج، النماذج، والتسليم — مش بس كتابة المتطلبات والانصراف. يوميًا ده معناه قيادة أجايل/سكرم، وإدارة أصحاب المصلحة حتى مستوى الإدارة التنفيذية وصنّاع القرار الحكوميين، وقدرة تقنية كافية (من نماذج Figma لعقود البلوكشين الذكية) للعمل مباشرة مع فرق الهندسة من غير وسيط.",
	aboutHighlightsTitle: "أرقام تلخص المشوار",
	aboutCtaTitle: "عايز الصورة كاملة؟",
	aboutCtaText: "تاريخ العمل الكامل — كل دور ومنتج وعميل — موجود في صفحة السيرة الذاتية. أو روح مباشرة على الخدمات اللي أقدمها.",
	aboutCtaCv: "شوف السيرة الذاتية كاملة",
	aboutCtaServices: "شوف الخدمات",

	// Contact page header
	contactPageH1: "تواصل معي",

	// Contact
	contactTitle: "هل أنت مستعد لبناء منتج قوي؟",
	contactSubtitle: "دعنا نناقش كيف يمكنني دعم رحلة منتجك، سواء كخبير تنفيذي، مرشد مهني، أو شريك في حل التحديات المعقّدة.",
	contactEmail: "Arhmetwally@outlook.com",
	linkedinProfile: "ملفي على لينكدإن",
	quote: "\"المنتجات الناجحة لا تُدار فقط، بل تُقاد برؤية واضحة وزخم مستمر.\"",

	// Booking + contact form
	bookACall: "احجز مكالمة",
	sendMessage: "ابعت رسالة",
	calendarLoading: "جاري تحميل التقويم…",
	contactFormHeading: "ابعتلي رسالة",
	contactFormSubtitle: "قولي شوية عن اللي محتاجه وهرد عليك خلال يوم أو اتنين.",
	contactFormOr: "أو",
	contactFormBookInstead: "تفضل تتكلم على طول؟ احجز معاد مباشرة.",
	contactFormNameLabel: "الاسم",
	contactFormNamePlaceholder: "اسمك",
	contactFormEmailLabel: "الإيميل",
	contactFormEmailPlaceholder: "you@company.com",
	contactFormCompanyLabel: "الشركة (اختياري)",
	contactFormCompanyPlaceholder: "اسم شركتك",
	contactFormServiceLabel: "محتاج مساعدة في إيه؟",
	contactFormServicePlaceholder: "اختار خدمة",
	contactFormBudgetLabel: "الميزانية / الجدول الزمني (اختياري)",
	contactFormBudgetPlaceholder: "مثال: 2-5 آلاف دولار شهريًا، بداية الشهر الجاي",
	contactFormMessageLabel: "الرسالة",
	contactFormMessagePlaceholder: "بتشتغل على إيه، وإيه اللي هيفيدك أكتر دلوقتي؟",
	contactFormSubmit: "ابعت الرسالة",
	contactFormSubmitting: "جاري الإرسال…",
	contactFormSuccessTitle: "الرسالة اتبعتت",
	contactFormSuccessText: "شكرًا — هرد عليك خلال يوم أو اتنين. لو الموضوع مستعجل، حجز مكالمة هو أسرع طريقة نتكلم بيها.",
	contactFormErrorTitle: "حصلت مشكلة",
	contactFormErrorText: "رسالتك ماوصلتش. جرب تاني، أو ابعتلي إيميل مباشرة.",
	contactFormErrorRetry: "جرب تاني",
	contactFormEmailFallback: "تفضل الإيميل؟ تقدر توصلي مباشرة على",
	contactServiceOther: "حاجة تانية",
	validationCaptchaMissing: "من فضلك كمّل التحقق قبل ما تبعت.",
	validationNameRequired: "من فضلك اكتب اسمك (حرفين على الأقل).",
	validationEmailInvalid: "من فضلك اكتب إيميل صحيح.",
	validationServiceRequired: "من فضلك اختار محتاج مساعدة في إيه.",
	validationMessageRequired: "من فضلك اكتب رسالة (10 حروف على الأقل).",

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