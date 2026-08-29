export interface Bi {
  en: string;
  ar: string;
}

export interface CvProduct {
  name: Bi;
  tag: Bi;
  desc: Bi;
  mine: Bi;
  tech: string;
}

export interface CvJob {
  role: Bi;
  company: Bi;
  meta: Bi;
  dates: Bi;
  blurb: Bi;
  products: CvProduct[];
  bullets: Bi[];
}

export interface CvStat {
  n: string;
  label: Bi;
  sub: Bi;
}

export interface CvSkillGroup {
  title: Bi;
  items: string[];
}

export interface CvSideProject {
  name: Bi;
  tag: Bi;
  desc: Bi;
}

export interface CvEduItem {
  name: Bi;
  meta: Bi;
}

export const CV_TEXT = {
  en: {
    badge: "Full CV — 13+ years",
    h1a: "Abdulrhman H. Metwally",
    h1b: "Senior Product Manager · Product Owner · Senior BA",
    lede: "Enterprise software from concept to launch across GRC, Business Continuity, GovTech, SaaS, Telecom, HR Tech, and Blockchain — including platforms deployed to government ministries.",
    pdf: "Download as PDF",
    talk: "Let's talk",
    summary: "Professional summary",
    summaryText:
      "Product Manager and Senior Business Analyst with 13+ years taking enterprise software from concept to launch. Known for building products and teams from zero, reviving stalled ones, then shipping them to production. Has led cross-functional teams of up to 35 (engineering, UX, QA, analysis) across Saudi Arabia and Egypt, including fully remote setups. Owns the end-to-end product lifecycle — discovery, roadmap, backlog, prototyping, delivery — with deep strength in requirements engineering, C-level and government stakeholder management, and Agile/Scrum leadership.",
    expTitle: "Professional experience",
    expSub: "Tap any role to expand products, scope, and outcomes",
    myRole: "My role:",
    skillsTitle: "Skills & tools",
    skillsSub: "What I work with day to day",
    otherTitle: "Freelance & personal projects",
    otherSub: "Delivered alongside full-time roles, 2013 – present",
    eduTitle: "Education",
    courseTitle: "Professional development",
    courseNote:
      "No formal certifications completed — all items are self-study or online coursework (exams not taken). Not presented as certified.",
    coreTitle: "Core competencies",
    volTitle: "Volunteering",
    factsTitle: "Good to know",
    ctaTitle: "Need a product owner who ships?",
    ctaText:
      "Fractional product management, business analysis, or building your product/BA function from scratch — let's find the right shape for your team.",
    ctaMail: "Email me",
  },
  ar: {
    badge: "السيرة الذاتية الكاملة — 13+ سنة",
    h1a: "عبدالرحمن حسين متولي",
    h1b: "مدير منتج أول · Product Owner · محلل أعمال أول",
    lede: "بناء أنظمة المؤسسات من الفكرة حتى الإطلاق في مجالات الحوكمة والمخاطر والالتزام، استمرارية الأعمال، الحكومة الرقمية، SaaS، الاتصالات، الموارد البشرية، والبلوكشين — بما فيها منصات مطبَّقة في وزارات حكومية.",
    pdf: "تحميل PDF",
    talk: "تواصل معي",
    summary: "الملخص المهني",
    summaryText:
      "مدير منتج ومحلل أعمال أول بخبرة تتجاوز 13 سنة في نقل أنظمة المؤسسات من الفكرة إلى الإطلاق. معروف ببناء المنتجات والفرق من الصفر، وإحياء المنتجات المتوقفة ثم إيصالها للإنتاج. قاد فرقًا متعددة التخصصات حتى 35 فردًا (هندسة، تجربة مستخدم، اختبار، تحليل) في السعودية ومصر، بما في ذلك فرق عن بعد بالكامل. يملك دورة حياة المنتج كاملة — الاستكشاف، خريطة الطريق، الباكلوج، النماذج، التسليم — بقوة واضحة في هندسة المتطلبات وإدارة أصحاب المصلحة من الإدارة التنفيذية والجهات الحكومية وقيادة أجايل/سكرم.",
    expTitle: "الخبرة العملية",
    expSub: "اضغط على أي دور لعرض المنتجات والنطاق والنتائج",
    myRole: "دوري:",
    skillsTitle: "المهارات والأدوات",
    skillsSub: "ما أعمل به يوميًا",
    otherTitle: "مشاريع حرة وشخصية",
    otherSub: "أُنجزت بالتوازي مع الوظائف الأساسية، 2013 – حتى الآن",
    eduTitle: "التعليم",
    courseTitle: "التطوير المهني",
    courseNote:
      "لا توجد شهادات معتمدة — كل البنود دراسة ذاتية أو كورسات أونلاين (بدون اجتياز امتحانات). لا تُعرض كشهادات معتمدة.",
    coreTitle: "الكفاءات الأساسية",
    volTitle: "العمل التطوعي",
    factsTitle: "معلومات مهمة",
    ctaTitle: "محتاج Product Owner يوصل المنتج للإنتاج؟",
    ctaText:
      "إدارة منتج بدوام جزئي، تحليل أعمال، أو بناء فريق المنتج/التحليل من الصفر — نتفق على الشكل المناسب لفريقك.",
    ctaMail: "راسلني",
  },
};

export const CV_STATS: CvStat[] = [
  {
    n: "5+",
    label: { en: "Government ministries & entities", ar: "وزارات وجهات حكومية" },
    sub: {
      en: "Ministry of Culture, Ministry of Commerce, Ministry of Justice, ADAA, Madinah Municipality",
      ar: "وزارة الثقافة، وزارة التجارة، وزارة العدل، ديوان المحاسبة أبوظبي، أمانة المدينة",
    },
  },
  {
    n: "13+",
    label: { en: "Years in product & analysis", ar: "سنة في المنتج والتحليل" },
    sub: { en: "Enterprise software, 2013 – present", ar: "أنظمة المؤسسات، 2013 – حتى الآن" },
  },
  {
    n: "35",
    label: { en: "Largest team led", ar: "أكبر فريق قِدته" },
    sub: { en: "Engineering, analysis, design, mobile", ar: "هندسة، تحليل، تصميم، موبايل" },
  },
  {
    n: "25",
    label: { en: "Blockchain apps launched", ar: "تطبيق بلوكشين تم إطلاقه" },
    sub: {
      en: "20 smart contracts + 5 dApps, 100% on-chain success",
      ar: "20 عقد ذكي + 5 تطبيقات لامركزية بنجاح كامل",
    },
  },
];

export const CV_JOBS: CvJob[] = [
  {
    role: { en: "Product Manager", ar: "مدير منتج" },
    company: { en: "TAM — Riyadh, KSA (Remote)", ar: "TAM — الرياض، السعودية (عن بعد)" },
    meta: {
      en: "~11-person cross-functional team · Python, Node.js, Angular, Flutter",
      ar: "فريق متعدد التخصصات ~11 فرد · Python, Node.js, Angular, Flutter",
    },
    dates: { en: "Jan 2026 – Present", ar: "يناير 2026 – حتى الآن" },
    blurb: {
      en: "Digital solutions & transformation company (tam.sa); products built on the 'TAM Verse' ecosystem. Led a UI designer, mobile developer, assistant analyst in Riyadh, and engineers. Tools: Jira, Figma.",
      ar: "شركة حلول وتحول رقمي (tam.sa)؛ منتجات مبنية على منظومة TAM Verse. قدت مصمم واجهات، مطور موبايل، محلل مساعد في الرياض، ومهندسين. الأدوات: Jira, Figma.",
    },
    products: [
      {
        name: { en: "Jovial", ar: "Jovial" },
        tag: { en: "Event ticketing · Live", ar: "تذاكر الفعاليات · مُشغَّل" },
        desc: {
          en: "Event ticketing and booking platform (jovial.tam.sa) that had stalled before I took it on.",
          ar: "منصة تذاكر وحجز فعاليات (jovial.tam.sa) كانت متوقفة قبل استلامي لها.",
        },
        mine: {
          en: "Over ~3 months overhauled the event-creation mechanism, operations, admin dashboard, roles & permissions, and the entire sales/payment flow; shipped to production.",
          ar: "خلال ~3 شهور أعدت بناء آلية إنشاء الفعاليات، العمليات، لوحة الإدارة، الأدوار والصلاحيات، ومسار البيع والدفع بالكامل؛ وتم الإطلاق للإنتاج.",
        },
        tech: "Python · Node.js · Angular · Flutter",
      },
      {
        name: { en: "FundBase", ar: "FundBase" },
        tag: { en: "GovTech · Live", ar: "حكومي · مُشغَّل" },
        desc: {
          en: "Grant/fund management workflow used by the Ministry of Culture: applicants submit and pass through filters and a workflow to receive funding.",
          ar: "نظام إدارة المنح والتمويل المستخدم في وزارة الثقافة: المتقدمون يُقدّمون ويمرّون عبر مراحل فلترة ومسار عمل للحصول على التمويل.",
        },
        mine: {
          en: "Product owner for ~2 months on an existing product handling hundreds of applications.",
          ar: "مالك منتج لمدة ~شهرين على منتج قائم يتعامل مع مئات الطلبات.",
        },
        tech: "Node.js · Angular",
      },
      {
        name: { en: "Casefile", ar: "Casefile" },
        tag: { en: "Collaboration · Internal", ar: "تعاون · داخلي" },
        desc: {
          en: "Kanban-style team collaboration tool (Trello-like).",
          ar: "أداة تعاون للفرق بنمط كانبان (شبيهة بـ Trello).",
        },
        mine: {
          en: "Drove a full UX overhaul and ran demos with government clients.",
          ar: "قدت إعادة تصميم كاملة لتجربة المستخدم وأدرت عروضًا لعملاء حكوميين.",
        },
        tech: "Figma · Angular",
      },
    ],
    bullets: [
      { en: "Define product vision, roadmap, quarterly OKRs, and KPIs.", ar: "تحديد رؤية المنتج، خريطة الطريق، أهداف OKR الربعية ومؤشرات KPI." },
      { en: "Prioritize backlog by customer value, business impact, and technical constraints.", ar: "ترتيب الباكلوج حسب قيمة العميل والأثر التجاري والقيود التقنية." },
      { en: "Run discovery, release planning, and executive alignment.", ar: "إدارة الاستكشاف وتخطيط الإصدارات والتوافق مع الإدارة التنفيذية." },
    ],
  },
  {
    role: { en: "Product Manager & Associate Business Consultant", ar: "مدير منتج ومستشار أعمال مشارك" },
    company: { en: "PSC (Positive Side Consulting) — Riyadh, KSA (Remote)", ar: "PSC — الرياض، السعودية (عن بعد)" },
    meta: {
      en: "Built and led a ~17-person org · Node.js, Linux/Windows Server, Azure DevOps",
      ar: "بناء وقيادة فريق ~17 فرد · Node.js, Linux/Windows Server, Azure DevOps",
    },
    dates: { en: "Nov 2023 – Jan 2026", ar: "نوفمبر 2023 – يناير 2026" },
    blurb: {
      en: "Built and led a cross-functional org of ~17: 2 UX, 4 POs/analysts, back- and front-end engineers, Figma designers, a Scrum Master, and QA.",
      ar: "بنيت وقدت فريقًا متعدد التخصصات ~17 فرد: 2 تجربة مستخدم، 4 مالكي منتج/محللين، مهندسي واجهات وخلفية، مصممي Figma، سكرم ماستر، واختبار.",
    },
    products: [
      {
        name: { en: "Exceer", ar: "Exceer" },
        tag: { en: "GRC · Zero to MVP", ar: "حوكمة ومخاطر · من الصفر لـ MVP" },
        desc: {
          en: "Full Governance, Risk & Compliance platform (MVP = Business Impact Analysis). Modules: BIA, BCP, Asset Management, Scope Management, Risk Register. Frameworks: Saudi DGA + ISO 22301 / 27001.",
          ar: "منصة حوكمة ومخاطر والتزام كاملة (الـ MVP = تحليل أثر الأعمال). الوحدات: BIA، BCP، إدارة الأصول، إدارة النطاق، سجل المخاطر. الأطر: هيئة الحكومة الرقمية السعودية + ISO 22301 / 27001.",
        },
        mine: {
          en: "Competitor analysis, discovery, authored 300+ user stories, personally built 200+ validated Figma screens/prototypes before handing prototyping to a designer; pricing support and demos.",
          ar: "تحليل المنافسين، الاستكشاف، كتابة أكثر من 300 يوزر ستوري، وبناء أكثر من 200 شاشة/نموذج Figma مُتحقق منها بنفسي قبل تسليم النماذج لمصمم؛ دعم التسعير والعروض.",
        },
        tech: "Node.js · Linux/Windows · Azure DevOps",
      },
      {
        name: { en: "Wesam", ar: "Wesam" },
        tag: { en: "Compliance · Launched", ar: "التزام · تم الإطلاق" },
        desc: {
          en: "Compliance platform aligned to the Saudi DGA Digital Transformation Index (Qiyas): measurement model, application, and enabling tools. Deployed to Madinah Municipality (~100 users).",
          ar: "منصة التزام متوافقة مع مؤشر التحول الرقمي (قياس) لهيئة الحكومة الرقمية: نموذج القياس، التطبيق، والأدوات المساندة. مطبّقة في أمانة المدينة المنورة (~100 مستخدم).",
        },
        mine: {
          en: "Built from scratch; managed the backlog; authored 150+ user stories; ran demos; supported delivery.",
          ar: "بُني من الصفر؛ إدارة الباكلوج؛ كتابة أكثر من 150 يوزر ستوري؛ تنفيذ العروض؛ دعم التسليم.",
        },
        tech: "Node.js · Linux/Windows · Azure DevOps",
      },
    ],
    bullets: [
      {
        en: "Consulting engagements (Associate Consultant unless noted): Board of Grievances (Diwan Al-Mazalim), Royal Court (Al-Diwan Al-Malaki), Enfath Center, Ministry of Justice – Execution Portfolio (as Business Analyst), National Center for Environmental Compliance (built a software system), Decision Support Center, National Development Fund, Madinah Municipality.",
        ar: "مشاركات استشارية (مستشار مشارك ما لم يُذكر غير ذلك): ديوان المظالم، الديوان الملكي، مركز إنفاذ، وزارة العدل – محفظة التنفيذ (كمحلل أعمال)، المركز الوطني للرقابة على الالتزام البيئي (بناء نظام برمجي)، مركز دعم القرار، صندوق التنمية الوطني، أمانة المدينة.",
      },
      {
        en: "Built the Business Analysis function from scratch: hired and mentored dozens of analysts; introduced peer-review and documentation standards that materially reduced developer rework and requirement ambiguity.",
        ar: "بناء وظيفة تحليل الأعمال من الصفر: توظيف وتدريب عشرات المحللين؛ وإدخال معايير مراجعة الأقران والتوثيق التي قلّصت إعادة العمل عند المطورين وغموض المتطلبات بشكل ملموس.",
      },
      {
        en: "Ran 50+ prospect demos and proposals with C-level and government decision-makers; supported pricing and pre-sales.",
        ar: "تنفيذ أكثر من 50 عرضًا ومقترحًا لعملاء محتملين مع قيادات تنفيذية وصنّاع قرار حكوميين؛ ودعم التسعير وما قبل البيع.",
      },
      {
        en: "Delivered Business Continuity (BCM/BCP) training and awareness sessions to major Saudi government entities and supported specialist BCM consultants; delivered Agile/Scrum workshops.",
        ar: "تقديم تدريب وجلسات توعية في استمرارية الأعمال (BCM/BCP) لجهات حكومية سعودية كبرى ودعم مستشاري BCM المتخصصين؛ وتقديم ورش أجايل/سكرم.",
      },
    ],
  },
  {
    role: { en: "Senior Business Analyst & Project Lead", ar: "محلل أعمال أول وقائد مشروع" },
    company: { en: "PSH (Positive Side Horizons) — KSA / Egypt", ar: "PSH — السعودية / مصر" },
    meta: { en: "~15-person team · .NET, Angular", ar: "فريق ~15 فرد · .NET, Angular" },
    dates: { en: "Oct 2022 – Nov 2023", ar: "أكتوبر 2022 – نوفمبر 2023" },
    blurb: {
      en: "Product owner and lead analyst on 'Ahdaf', leading senior and junior engineers, a mobile developer, and a junior analyst.",
      ar: "مالك منتج وكبير المحللين على منتج 'أهداف'، بقيادة مهندسين أساسيين وجدد، مطور موبايل، ومحلل مبتدئ.",
    },
    products: [
      {
        name: { en: "Ahdaf", ar: "أهداف" },
        tag: { en: "Balanced Scorecard · 5 gov entities", ar: "بطاقة الأداء المتوازن · 5 جهات حكومية" },
        desc: {
          en: "Enterprise Balanced Scorecard / strategy-management platform serving all sectors — a ~15-year-old product with a 2,000+ story backlog. Deployed to Abu Dhabi Accountability Authority (UAE), Minors' Affairs Authority (Qatar), CNHI (KSA), Ministry of Commerce (KSA), plus one further entity.",
          ar: "منصة بطاقة أداء متوازن وإدارة استراتيجية للمؤسسات في كل القطاعات — منتج عمره ~15 سنة بباكلوج يتجاوز 2000 ستوري. مطبّق في جهاز أبوظبي للمحاسبة (الإمارات)، هيئة شؤون القاصرين (قطر)، CNHI (السعودية)، وزارة التجارة (السعودية)، وجهة إضافية.",
        },
        mine: {
          en: "Authored ~150 user stories; drove enhancements; personally owned delivery and client demos; built a handover process with the customer-experience team.",
          ar: "كتابة ~150 يوزر ستوري؛ قيادة التحسينات؛ ملكية التسليم وعروض العملاء بنفسي؛ وبناء عملية تسليم مع فريق تجربة العملاء.",
        },
        tech: ".NET · Angular",
      },
    ],
    bullets: [
      {
        en: "Recognized for high-efficiency, friction-free team leadership; team satisfaction was very high.",
        ar: "تقدير لقيادة فريق عالية الكفاءة وبدون خلافات؛ ورضا الفريق كان مرتفعًا جدًا.",
      },
    ],
  },
  {
    role: { en: "Projects Launching Manager (Remote)", ar: "مدير إطلاق المشاريع (عن بعد)" },
    company: { en: "Futira s.r.o. — Slovakia", ar: "Futira s.r.o. — سلوفاكيا" },
    meta: {
      en: "Managed 10+ freelance developers · Solidity, Hardhat, Remix",
      ar: "إدارة أكثر من 10 مطورين مستقلين · Solidity, Hardhat, Remix",
    },
    dates: { en: "Oct 2021 – Oct 2022", ar: "أكتوبر 2021 – أكتوبر 2022" },
    blurb: {
      en: "Launch manager for the company's blockchain/crypto products.",
      ar: "مدير إطلاق منتجات البلوكشين والكريبتو الخاصة بالشركة.",
    },
    products: [],
    bullets: [
      {
        en: "Built and launched 25 blockchain applications (20 smart contracts + 5 dApps) across Ethereum, BSC, Polygon, and Arbitrum for the company's own private coins/tokens and crypto transfers — 100% successful on-chain deployment.",
        ar: "بناء وإطلاق 25 تطبيق بلوكشين (20 عقد ذكي + 5 تطبيقات لامركزية) على Ethereum وBSC وPolygon وArbitrum لعملات ورموز الشركة الخاصة وتحويلات الكريبتو — بنجاح 100% في النشر على الشبكة.",
      },
      {
        en: "Gathered and documented requirements, briefed developers, and personally deployed, tested, and released each contract/app on-chain; hands-on code review and validation.",
        ar: "جمع وتوثيق المتطلبات، وتوجيه المطورين، والنشر والاختبار والإطلاق لكل عقد/تطبيق على الشبكة بنفسي؛ مع مراجعة كود وتحقق عملي.",
      },
      { en: "Coordinated external smart-contract audits.", ar: "تنسيق تدقيق العقود الذكية مع جهات خارجية." },
    ],
  },
  {
    role: { en: "Senior Business Analyst / Product Owner", ar: "محلل أعمال أول / مالك منتج" },
    company: { en: "Unicom Group — Egypt", ar: "Unicom Group — مصر" },
    meta: {
      en: "Telecom SaaS + government & enterprise systems, mainly Iraqi public sector",
      ar: "SaaS اتصالات + أنظمة حكومية ومؤسسية، أساسًا للقطاع العام العراقي",
    },
    dates: { en: "Feb 2020 – Oct 2021", ar: "فبراير 2020 – أكتوبر 2021" },
    blurb: {
      en: "Business analyst / product owner across telecom SaaS and multiple government and enterprise systems.",
      ar: "محلل أعمال / مالك منتج على SaaS اتصالات وعدة أنظمة حكومية ومؤسسية.",
    },
    products: [
      {
        name: { en: "Fleet Signal", ar: "Fleet Signal" },
        tag: { en: "Fleet management", ar: "إدارة الأسطول" },
        desc: { en: "Automates fleet-management operations for government and private fleets.", ar: "أتمتة عمليات إدارة الأسطول للجهات الحكومية والخاصة." },
        mine: { en: "Improved and developed the existing system further.", ar: "تطوير وتحسين النظام القائم." },
        tech: "Enterprise web",
      },
      {
        name: { en: "POS Device Management System", ar: "نظام إدارة أجهزة نقاط البيع" },
        tag: { en: "Retail / payments · Built end-to-end", ar: "تجزئة ومدفوعات · بناء كامل" },
        desc: { en: "A complete system to manage POS devices.", ar: "نظام كامل لإدارة أجهزة نقاط البيع." },
        mine: { en: "Built end-to-end.", ar: "بناء من البداية للنهاية." },
        tech: "Enterprise web",
      },
      {
        name: { en: "E-Justice / Notary (Kateb Al-Adl)", ar: "التوثيق الإلكتروني (كاتب العدل)" },
        tag: { en: "GovTech / legal", ar: "حكومي / قانوني" },
        desc: {
          en: "Integrated electronic legal and notary services via a single center plus an online portal; related to the Iraqi notary and real-estate registry (Shahr Aqari) work.",
          ar: "خدمات قانونية وتوثيق إلكترونية متكاملة عبر مركز واحد وبوابة أونلاين؛ مرتبطة بأعمال التوثيق والشهر العقاري في العراق.",
        },
        mine: { en: "Participated; improved documentation and requirements.", ar: "مشاركة؛ وتحسين التوثيق والمتطلبات." },
        tech: "GovTech portal",
      },
      {
        name: { en: "Prime Minister's Office Executive Dashboard (Iraq)", ar: "لوحة رئاسة الوزراء التنفيذية (العراق)" },
        tag: { en: "GovTech / analytics", ar: "حكومي / تحليلات" },
        desc: { en: "Large executive dashboard tracking nationwide projects.", ar: "لوحة تنفيذية كبيرة لمتابعة المشاريع على مستوى الدولة." },
        mine: { en: "Built the dashboard.", ar: "بناء اللوحة." },
        tech: "Analytics",
      },
      {
        name: { en: "E-Commerce Platform — Iraqi Post", ar: "منصة تجارة إلكترونية — بريد العراق" },
        tag: { en: "E-commerce / government", ar: "تجارة إلكترونية / حكومي" },
        desc: { en: "Full e-commerce system for the Iraqi Post.", ar: "نظام تجارة إلكترونية كامل للبريد العراقي." },
        mine: { en: "Delivered requirements.", ar: "تسليم المتطلبات." },
        tech: "E-commerce",
      },
      {
        name: { en: "Project Management System", ar: "نظام إدارة مشاريع" },
        tag: { en: "Enterprise PM · From scratch", ar: "إدارة مشاريع · من الصفر" },
        desc: {
          en: "A PMP-based project-management system; plus a maintenance-requests / technician dispatch system.",
          ar: "نظام إدارة مشاريع مبني على PMP؛ بالإضافة لنظام طلبات صيانة وإرسال فنيين.",
        },
        mine: { en: "Built from zero.", ar: "بناء من الصفر." },
        tech: "Enterprise web",
      },
    ],
    bullets: [
      {
        en: "Authored SRS, user stories, and use cases; owned backlog grooming, prioritization, and sprint planning across concurrent projects.",
        ar: "كتابة SRS ويوزر ستوريز وحالات استخدام؛ وملكية تنظيم الباكلوج والأولويات وتخطيط السبرنتات على مشاريع متزامنة.",
      },
    ],
  },
  {
    role: { en: "Analyst & Product Owner", ar: "محلل ومالك منتج" },
    company: { en: "Inovatian Inc — Egypt", ar: "Inovatian Inc — مصر" },
    meta: { en: "~35-person cross-functional team — the largest team led", ar: "فريق متعدد التخصصات ~35 فرد — أكبر فريق قِدته" },
    dates: { en: "Jun 2019 – Dec 2019", ar: "يونيو 2019 – ديسمبر 2019" },
    blurb: {
      en: "Led a ~35-person team across engineering, analysis, design, and mobile.",
      ar: "قيادة فريق ~35 فرد يشمل الهندسة والتحليل والتصميم والموبايل.",
    },
    products: [
      {
        name: { en: "Inochain", ar: "Inochain" },
        tag: { en: "Private blockchain · Zero to launch", ar: "بلوكشين خاص · من الصفر للإطلاق" },
        desc: {
          en: "A private blockchain built from scratch with chat and more; validated on-chain transfers, VoIP calling, chat, and video streaming. Custom/modified consensus, starting with Proof of Stake.",
          ar: "بلوكشين خاص مبني من الصفر مع محادثة وأكثر؛ تم التحقق من التحويلات على الشبكة، المكالمات عبر VoIP، المحادثة، وبث الفيديو. توافق مخصّص/معدّل بدأ بـ Proof of Stake.",
        },
        mine: {
          en: "Self-directed domain learning; built and trained the team; owned requirements, backlog, and sprint planning; zero to working launch in ~9 months; attempted external sales (not closed during tenure).",
          ar: "تعلّم المجال بشكل ذاتي؛ بناء وتدريب الفريق؛ ملكية المتطلبات والباكلوج وتخطيط السبرنتات؛ من الصفر لإطلاق عامل في ~9 شهور؛ ومحاولات بيع خارجية (لم تُغلق خلال الفترة).",
        },
        tech: "Custom chain · PoS",
      },
    ],
    bullets: [],
  },
  {
    role: { en: "Senior Business Analyst", ar: "محلل أعمال أول" },
    company: { en: "GET Group Holdings — Egypt", ar: "GET Group Holdings — مصر" },
    meta: { en: "Secure identity — 40+ years, 50+ governments", ar: "الهوية الآمنة — أكثر من 40 سنة و50+ حكومة" },
    dates: { en: "Dec 2018 – Jun 2019", ar: "ديسمبر 2018 – يونيو 2019" },
    blurb: { en: "Global leader in secure identity solutions.", ar: "شركة رائدة عالميًا في حلول الهوية الآمنة." },
    products: [
      {
        name: { en: "GET SDIS — Secure Document Issuance System", ar: "GET SDIS — نظام إصدار الوثائق الآمن" },
        tag: { en: "GovTech / security · National-scale production", ar: "حكومي / أمني · إنتاج بمستوى وطني" },
        desc: {
          en: "Secure issuance of passports and national IDs. Components: Enrollment & Registration (biometric/biographic), Document Layout Design, ICAO Data Preparation (MRZ/LDS), Personalization, Validation & Delivery, Document Management System. Countries: UAE, Egypt, Iraq, Philippines (some clients confidential).",
          ar: "إصدار آمن لجوازات السفر والهويات الوطنية. المكونات: التسجيل والقيد (بيومتري/بيوغرافي)، تصميم تخطيط الوثيقة، تجهيز بيانات ICAO (MRZ/LDS)، التخصيص، التحقق والتسليم، نظام إدارة الوثائق. الدول: الإمارات، مصر، العراق، الفلبين (بعض العملاء سري).",
        },
        mine: {
          en: "Continued building and enhancing across up to ~10 sprints; worked on the encryption workflow and the encryption/printing mechanism for high-volume industrial printers; requirements, conceptual models, test-case review, and estimation accuracy.",
          ar: "الاستمرار في البناء والتحسين على مدى ~10 سبرنتات؛ العمل على مسار التشفير وآلية التشفير/الطباعة للطابعات الصناعية عالية الحجم؛ المتطلبات، النماذج المفاهيمية، مراجعة حالات الاختبار، ودقة التقديرات.",
        },
        tech: "ICAO · MRZ/LDS · Encryption",
      },
    ],
    bullets: [],
  },
  {
    role: { en: "Software Project Manager & Business Analyst", ar: "مدير مشاريع برمجية ومحلل أعمال" },
    company: { en: "Digital TAG (DTAG) — Egypt", ar: "Digital TAG (DTAG) — مصر" },
    meta: { en: "Software house: apps, games, websites, POS, custom systems", ar: "شركة برمجيات: تطبيقات، ألعاب، مواقع، نقاط بيع، أنظمة مخصصة" },
    dates: { en: "Apr 2017 – Dec 2018", ar: "أبريل 2017 – ديسمبر 2018" },
    blurb: {
      en: "Projects: mobile games (card games, fishing games); an Athan (prayer-call) & Quran-reading app; POS systems for lawyers and small shops; custom on-demand systems; websites for lawyers, doctors, and others.",
      ar: "المشاريع: ألعاب موبايل (ورق، صيد)؛ تطبيق أذان وقراءة قرآن؛ أنظمة نقاط بيع للمحامين والمتاجر الصغيرة؛ أنظمة مخصصة حسب الطلب؛ ومواقع للمحامين والأطباء وغيرهم.",
    },
    products: [],
    bullets: [
      { en: "Built and structured the product team; authored SOPs and Sequences of Operations.", ar: "بناء وهيكلة فريق المنتج؛ وكتابة إجراءات التشغيل القياسية وتسلسل العمليات." },
      { en: "Managed projects and teams: backlog management, sprint planning, demos, scope and resources.", ar: "إدارة المشاريع والفرق: إدارة الباكلوج، تخطيط السبرنتات، العروض، النطاق والموارد." },
      { en: "Requirement elicitation, user-story authoring, UX coordination; proxy product owner in Agile ceremonies.", ar: "استخلاص المتطلبات، كتابة اليوزر ستوريز، تنسيق تجربة المستخدم؛ ومالك منتج بالوكالة في اجتماعات أجايل." },
    ],
  },
  {
    role: { en: "Software Analyst & Business Developer", ar: "محلل برمجيات ومطور أعمال" },
    company: { en: "Enjaz Business Solutions — Egypt / KSA", ar: "إنجاز لحلول الأعمال — مصر / السعودية" },
    meta: { en: "Software house: apps, games, websites, POS, custom systems", ar: "شركة برمجيات: تطبيقات، ألعاب، مواقع، نقاط بيع، أنظمة مخصصة" },
    dates: { en: "Jan 2016 – Mar 2017", ar: "يناير 2016 – مارس 2017" },
    blurb: {
      en: "Requirements gathering, backlog grooming, and mockups; business analysis and client coordination; project delivery and resource allocation; software engineering, hiring, and team management.",
      ar: "جمع المتطلبات، تنظيم الباكلوج، والنماذج المبدئية؛ تحليل الأعمال وتنسيق العملاء؛ تسليم المشاريع وتوزيع الموارد؛ هندسة البرمجيات والتوظيف وإدارة الفريق.",
    },
    products: [],
    bullets: [],
  },
  {
    role: { en: "Software Sales Engineer (Remote)", ar: "مهندس مبيعات برمجيات (عن بعد)" },
    company: { en: "Topline — KSA", ar: "Topline — السعودية" },
    meta: {
      en: "Saudi IT company (est. 2001) — hosting, gov e-portals, web & app development, cybersecurity",
      ar: "شركة تقنية سعودية (2001) — استضافة، بوابات حكومية، تطوير ويب وتطبيقات، أمن سيبراني",
    },
    dates: { en: "Oct 2013 – May 2014", ar: "أكتوبر 2013 – مايو 2014" },
    blurb: {
      en: "Sold the company's products (hosting, website design, app development, e-store design).",
      ar: "بيع منتجات الشركة (استضافة، تصميم مواقع، تطوير تطبيقات، تصميم متاجر إلكترونية).",
    },
    products: [],
    bullets: [
      { en: "Managed 10+ clients and achieved ~80,000 SAR in sales in the period — a significant figure at the time.", ar: "إدارة أكثر من 10 عملاء وتحقيق مبيعات ~80,000 ريال سعودي في الفترة — رقم كبير في ذلك الوقت." },
      { en: "Pipeline and account development, contract negotiation, client-success coordination.", ar: "تطوير قائمة العملاء المحتملين والحسابات، التفاوض على العقود، وتنسيق نجاح العملاء." },
    ],
  },
];

export const CV_SKILLS: CvSkillGroup[] = [
  {
    title: { en: "Product management", ar: "إدارة المنتج" },
    items: ["Product Strategy", "Roadmap & Ownership", "Product Discovery", "Backlog Management & Prioritization", "MVP Definition", "KPIs & OKRs", "Go-to-Market", "Release Management", "Product Lifecycle Management"],
  },
  {
    title: { en: "Business analysis", ar: "تحليل الأعمال" },
    items: ["Requirements Engineering", "BRD / FRD / SRS", "User Stories & Use Cases", "Business Rules", "Process Modeling", "Gap Analysis", "Wireframing", "User Research", "UAT", "SDLC", "BIA / BCP", "BCM", "Risk Register", "Digital Transformation Index (Qiyas)"],
  },
  {
    title: { en: "Leadership", ar: "القيادة" },
    items: ["Cross-Functional Team Leadership (up to 35)", "Distributed / Remote Teams", "Hiring & Interviewing", "Mentoring & Coaching", "Agile & Scrum Coaching / Workshops", "Stakeholder & C-Level Management", "Conflict Resolution"],
  },
  {
    title: { en: "Technical", ar: "تقني" },
    items: ["Figma & Visily (Prototyping)", "AI-Assisted Development (Claude Code, Codex)", "Vercel", "GitHub", "Smart-Contract Review & Audit Coordination", "Blockchain (Ethereum, BSC, Polygon, Arbitrum)", "Azure DevOps", "Encryption Workflows (exposure)", "Windows Server", "Linux Server", "CMD"],
  },
  {
    title: { en: "Stacks & tools", ar: "التقنيات والأدوات" },
    items: ["Python", "Node.js", ".NET", "Angular", "Flutter", "Azure DevOps", "Jira", "Trello", "MS Visio", "Draw.io", "Figma", "Visily AI", "Odoo (ERP)", "Solidity", "Remix", "Hardhat", "MetaMask", "Etherscan", "BscScan"],
  },
  {
    title: { en: "Methodologies & domains", ar: "المنهجيات والمجالات" },
    items: ["Agile", "Scrum", "SAFe", "Kanban", "Waterfall", "CMMI", "IEEE", "PMP practices", "GRC", "BCM", "GovTech", "HR Tech", "SaaS", "Telecom", "ERP", "E-Commerce", "Blockchain & Smart Contracts", "Secure Identity", "Fleet Management", "POS / Retail", "Qiyas · Nodyy · Somod · DGA compliance"],
  },
];

export const CV_SIDE: CvSideProject[] = [
  {
    name: { en: "AI-Powered HR Platform", ar: "منصة موارد بشرية بالذكاء الاصطناعي" },
    tag: { en: "HR Tech / AI", ar: "موارد بشرية / ذكاء اصطناعي" },
    desc: {
      en: "An AI product integrating an HR module with any ERP; automates employee self-service (leave, cash advances, biometric attendance) and speeds up team workflows. Helped build the project and its ERP integration.",
      ar: "منتج ذكاء اصطناعي يربط وحدة الموارد البشرية بأي ERP؛ يؤتمت الخدمة الذاتية للموظف (الإجازات، السلف، الحضور البيومتري) ويسرّع مسارات العمل. شاركت في بناء المشروع وتكامله مع الـ ERP.",
    },
  },
  {
    name: { en: "Egypt Digital Platform — Courts module", ar: "منصة مصر الرقمية — وحدة المحاكم" },
    tag: { en: "GovTech / legal", ar: "حكومي / قانوني" },
    desc: {
      en: "The courts portion of the Egypt Digital Platform, delivered via a company; co-designed the prototype and workflow with another team.",
      ar: "الجزء الخاص بالمحاكم في منصة مصر الرقمية، عبر شركة؛ وشاركت في تصميم النموذج ومسار العمل مع فريق آخر.",
    },
  },
  {
    name: { en: "E-Commerce Platform — Libya", ar: "منصة تجارة إلكترونية — ليبيا" },
    tag: { en: "E-commerce", ar: "تجارة إلكترونية" },
    desc: { en: "E-commerce platform for a company in Libya.", ar: "منصة تجارة إلكترونية لشركة في ليبيا." },
  },
  {
    name: { en: "Online Auctions Platform", ar: "منصة مزادات إلكترونية" },
    tag: { en: "Marketplace", ar: "سوق إلكتروني" },
    desc: { en: "A website for auctions and selling products via auction.", ar: "موقع للمزادات وبيع المنتجات عبر المزاد." },
  },
  {
    name: { en: "Grants Management System", ar: "نظام إدارة المنح" },
    tag: { en: "GovTech / grants", ar: "حكومي / منح" },
    desc: { en: "Business analysis only — requirements and analysis.", ar: "تحليل أعمال فقط — المتطلبات والتحليل." },
  },
  {
    name: { en: "Dubai On-Demand Services Platform", ar: "منصة خدمات عند الطلب — دبي" },
    tag: { en: "Services", ar: "خدمات" },
    desc: { en: "Home-services and device-repair dispatch app; owned requirements and flow.", ar: "تطبيق خدمات منزلية وإصلاح أجهزة؛ ملكية المتطلبات ومسار العمل." },
  },
  {
    name: { en: "ERP work: accounting enhancement & Odoo training", ar: "أعمال ERP: تحسين نظام محاسبي وتدريب Odoo" },
    tag: { en: "ERP / finance", ar: "ERP / مالية" },
    desc: {
      en: "Freelance enhancement of an accounting ERP, plus Odoo accounting ERP training delivered with a company.",
      ar: "تحسين نظام ERP محاسبي كعمل حر، بالإضافة لتقديم تدريب على محاسبة Odoo مع شركة.",
    },
  },
  {
    name: { en: "Personal projects (vibe coding)", ar: "مشاريع شخصية (Vibe Coding)" },
    tag: { en: "AI-assisted build", ar: "بناء بمساعدة الذكاء الاصطناعي" },
    desc: {
      en: "A database chatbot that answers from a database, this personal website, and a friend's website — all built with Claude Code, Codex, and Vercel.",
      ar: "شات بوت يجيب من قاعدة بيانات، هذا الموقع الشخصي، وموقع لصديق — كلها مبنية بـ Claude Code وCodex وVercel.",
    },
  },
  {
    name: { en: "Requirements-gathering partnerships", ar: "شراكات جمع المتطلبات" },
    tag: { en: "Business analysis", ar: "تحليل أعمال" },
    desc: {
      en: "Several projects with developers under personal agreements, owning the requirements-gathering (BA) portion. Plus additional software-delivery projects for many clients since 2013, often in parallel with full-time roles.",
      ar: "عدة مشاريع مع مطورين باتفاقات شخصية، بملكية جزء جمع المتطلبات (BA). بالإضافة لمشاريع تسليم برمجيات أخرى لعملاء كثيرين منذ 2013، غالبًا بالتوازي مع الوظائف الأساسية.",
    },
  },
];

export const CV_EDUCATION: CvEduItem[] = [
  { name: { en: "B.Sc. in Computer Science", ar: "بكالوريوس علوم حاسب" }, meta: { en: "Thebes Academy, Egypt — 2014", ar: "أكاديمية طيبة، مصر — 2014" } },
  { name: { en: "High School Diploma", ar: "الثانوية العامة" }, meta: { en: "Fahaheel Al-Wataniya School, Kuwait — Grade: Excellent", ar: "مدرسة الفحيحيل الوطنية، الكويت — التقدير: ممتاز" } },
];

export const CV_COURSES: string[] = [
  "PMP (self-study)",
  "CBAP (Udemy)",
  "ISTQB Quality Fundamentals (self-study)",
  "Product Management (Coursera)",
  "Client Needs & Software Requirements (Coursera)",
  "Agile Methodologies (Coursera)",
  "Business Analysis & Project Delivery (Udemy)",
  "Risk Management (Udemy)",
  "Project Management Workshop (self-study)",
  "E-Marketing Diploma (EMA)",
];

export const CV_CORE: string[] = [
  "Stakeholder Management",
  "Market Research & Competitive Analysis",
  "Requirements Engineering",
  "Product Lifecycle Management",
  "Analytical Thinking & Problem Solving",
  "Product Roadmap Development",
  "UX & Customer Feedback Management",
  "GRC software requirements",
  "Business continuity systems",
  "Risk Management & BCM",
  "Team Leadership & Mentoring",
  "Decision-Making & Conflict Resolution",
  "Digital Transformation Index (Qiyas, Nodyy, Somod)",
  "Smart Contract Requirement Engineering & Audit Coordination",
];

export const CV_VOL: Bi[] = [
  { en: "Logistics & transport volunteer — local nonprofit.", ar: "متطوع لوجستيات ونقل — جمعية أهلية محلية." },
  { en: "Speaker & graphic designer — environmental advocacy campaigns.", ar: "متحدث ومصمم جرافيك — حملات مناصرة بيئية." },
];

export const CV_FACTS: Bi[] = [
  { en: "English level: B1, actively improving — worth knowing for US/EU remote roles.", ar: "مستوى الإنجليزي: B1 وفي تحسّن مستمر — يهم لأدوار الريموت في أمريكا وأوروبا." },
  { en: "Employment gap May 2014 – Jan 2016: studying plus freelance work.", ar: "فترة انقطاع من مايو 2014 حتى يناير 2016: دراسة وعمل حر." },
  {
    en: "Confirmed launches and deployments: Ahdaf (5 government entities), Wesam (Madinah Municipality), Jovial (live), Futira (on-chain, internal), GET SDIS (national scale), Unicom systems. Several strong products never reached a market sale because the company closed or ran out of funds.",
    ar: "الإطلاقات والتطبيقات المؤكدة: أهداف (5 جهات حكومية)، وسام (أمانة المدينة)، Jovial (مُشغَّل)، Futira (على الشبكة، داخلي)، GET SDIS (بمستوى وطني)، أنظمة Unicom. عدة منتجات قوية لم تصل لبيع في السوق لأن الشركة أُغلقت أو نفد تمويلها.",
  },
];
