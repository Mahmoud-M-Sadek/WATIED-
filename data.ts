import { Project, Service } from './types';

// Company Details
export const COMPANY_INFO = {
  name: "WATIED Marketing Solutions",
  location: "المنصورة – جمهورية مصر العربية",
  phone: "01550700980",
  whatsapp: "https://wa.me/201550700980",
  instagram: "https://www.instagram.com/watied.marketing_solution",
  facebook: "https://www.facebook.com/share/16WPYjXy8G/",
  logo: "https://d.top4top.io/p_36168tsrb1.png"
};

// Services Data
export const SERVICES: Service[] = [
  {
    id: 'identity',
    title: 'تطوير الهوية البصرية',
    description: 'صياغة هوية بصرية تعكس قيمتكم التجارية وتترسخ في ذهن العملاء.',
    icon: null 
  },
  {
    id: 'market-analysis',
    title: 'تحليل الأسواق والمنافسين',
    description: 'دراسات سوقية دقيقة لبناء خطط استراتيجية قائمة على الحقائق والأرقام.',
    icon: null
  },
  {
    id: 'marketing-plans',
    title: 'الخطط التسويقية المتكاملة',
    description: 'استراتيجيات شاملة للوصول إلى الجمهور المستهدف وتحقيق أعلى عائد.',
    icon: null
  },
  {
    id: 'pricing',
    title: 'هيكلة الأسعار والعروض',
    description: 'تطوير استراتيجيات تسعير مدروسة تضمن الربحية والتنافسية في آن واحد.',
    icon: null
  },
  {
    id: 'cx',
    title: 'تطوير تجربة العملاء (CX)',
    description: 'تصميم رحلة عميل سلسة واحترافية تعزز من ولاء العملاء وتكرار الشراء.',
    icon: null
  },
  {
    id: 'content',
    title: 'إدارة المحتوى والحملات الإعلانية',
    description: 'صناعة محتوى ذي قيمة، وإدارة حملات إعلانية تحقق عائداً استثمارياً ملموساً.',
    icon: null
  }
];

// Projects Data
export const PROJECTS: Project[] = [
  {
    id: 'jeans-masr',
    title: 'Jeans Masr - جينز مصر',
    category: 'تطوير أعمال & هوية بصرية',
    coverImage: 'https://l.top4top.io/p_3616qzv021.png',
    description: 'مشروع متكامل لتطوير علامة تجارية في قطاع الملابس، حيث قمنا بإعادة صياغة الهوية البصرية، وتطوير استراتيجية التسعير، وتحسين تجربة العملاء لضمان الاستمرارية والنمو المستدام.',
    gallery: [
      'https://a.top4top.io/p_3616gyei32.png',
      'https://b.top4top.io/p_361646bhr3.png',
      'https://c.top4top.io/p_3616jh5j14.png',
      'https://d.top4top.io/p_3616dovkj5.png',
      'https://e.top4top.io/p_3616wfnva6.png',
      'https://f.top4top.io/p_3616eksmj7.png',
      'https://g.top4top.io/p_3616qt2lo8.png',
      'https://h.top4top.io/p_3616ptb8p9.png',
      'https://i.top4top.io/p_3616n261n10.png',
      'https://f.top4top.io/p_3616dk5161.png',
      'https://g.top4top.io/p_36160vuey2.png',
      'https://h.top4top.io/p_3616o32pb3.png',
      'https://i.top4top.io/p_361667q144.png',
      'https://j.top4top.io/p_3616x2iz85.png',
      'https://k.top4top.io/p_3616cux7x6.png',
      'https://l.top4top.io/p_3616zpivv7.png',
      'https://b.top4top.io/p_36160nkwo8.png',
      'https://c.top4top.io/p_36165wq689.png',
      'https://d.top4top.io/p_3616eckqo10.png',
      'https://h.top4top.io/p_3616zxz571.png',
      'https://i.top4top.io/p_3616zhuj12.png',
      'https://j.top4top.io/p_36165xsg23.png',
      'https://k.top4top.io/p_36166jg6g4.png',
      'https://l.top4top.io/p_3616pgin65.png',
      'https://a.top4top.io/p_3616uflu16.png',
      'https://b.top4top.io/p_3616ef0hh7.png',
      'https://c.top4top.io/p_3616xx6wl8.png',
      'https://d.top4top.io/p_3616dlp609.png',
      'https://e.top4top.io/p_3616v0pm610.png'
    ]
  },
  // Placeholder project
  {
    id: 'coffee-house',
    title: 'Coffee House Experience',
    category: 'استشارات & تجربة عميل',
    coverImage: 'https://picsum.photos/800/600?random=10',
    description: 'تحليل شامل لسوق القهوة وإعادة هيكلة قائمة الأسعار وتدريب فريق العمل لتقديم تجربة ضيافة استثنائية وفق أعلى المعايير.',
    gallery: [
      'https://picsum.photos/800/600?random=10',
      'https://picsum.photos/800/600?random=11'
    ]
  }
];

export const TEXT_CONTENT = {
  home: {
    hero: {
      headline: "تطوير الأعمال من الجذور... لا نكتفي بالمظاهر",
      subline: "Business Development — Identity — Pricing — Customer Experience — Content — Sales Systems"
    },
    aboutSnippet: "تُعد WATIED Marketing Solutions شركة رائدة متخصصة في تطوير الأعمال وبناء الأنظمة التسويقية الذكية، حيث نقوم بتحويل المشاريع من مجرد أنشطة قائمة إلى علامات تجارية راسخة وناجحة.",
    whyUs: [
        "نعالج جذور التحديات لا مظاهرها",
        "نعمل مع الكيانات الطامحة للريادة والاستدامة",
        "منهجيتنا: فهم - دراسة - تحليل - بناء - إطلاق"
    ]
  },
  aboutPage: `تُعد WATIED Marketing Solutions شركة متخصصة في تطوير الأعمال وبناء الأنظمة التسويقية الذكية، تهدف إلى تحويل المشاريع من مجرد أنشطة "قيد التشغيل" إلى علامات تجارية راسخة وناجحة.
فلسفتنا راسخة: نحن نعالج جذور التحديات... ولا نكتفي بتجميل المظاهر.

✔ نتعاون مع المشاريع التي تطمح لبناء كيان مؤسسي ثابت ومحترم.
✔ منهجيتنا واضحة: نفهم – ندرس – نحلل – نبني – نطلق... بمهنية ومصداقية.`,
  projectCta: "هل تتطلع لبناء علامة تجارية راسخة؟ تواصل مع WATIED الآن."
};