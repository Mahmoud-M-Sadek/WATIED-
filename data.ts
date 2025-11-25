import { Project, Service } from './types';

// Company Details
export const COMPANY_INFO = {
  name: "وطيد Marketing Solutions",
  location: "المنصورة – مصر",
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
    title: 'تطوير الهويّات البصرية',
    description: 'نصنع هوية بصرية تعكس قيمتك وتثبت في ذهن العميل.',
    icon: null 
  },
  {
    id: 'market-analysis',
    title: 'تحليل الأسواق والمنافسين',
    description: 'دراسة دقيقة للسوق لوضع خطط مبنية على واقع وأرقام.',
    icon: null
  },
  {
    id: 'marketing-plans',
    title: 'خطط تسويقية كاملة',
    description: 'استراتيجيات متكاملة للوصول لجمهورك المستهدف بفعالية.',
    icon: null
  },
  {
    id: 'pricing',
    title: 'إعداد الأسعار وعروض البيع',
    description: 'تسعير مدروس يضمن الربحية وتنافسية العرض.',
    icon: null
  },
  {
    id: 'cx',
    title: 'تجهيز تجربة العميل',
    description: 'تصميم رحلة عميل سلسة تزيد من الولاء والتكرار.',
    icon: null
  },
  {
    id: 'content',
    title: 'إدارة المحتوى والإعلان',
    description: 'صناعة محتوى هادف وحملات إعلانية ذات عائد استثماري.',
    icon: null
  }
];

// Projects Data
export const PROJECTS: Project[] = [
  {
    id: 'jeans-masr',
    title: 'جينز مصر Jeans Masr',
    category: 'تطوير أعمال & هوية بصرية',
    coverImage: 'https://l.top4top.io/p_3616qzv021.png',
    description: 'مشروع متكامل لتطوير علامة تجارية في سوق الملابس، حيث قمنا بإعادة صياغة الهوية البصرية، وتطوير استراتيجية التسعير، وتحسين تجربة العميل لضمان الاستمرارية والنمو.',
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
  // Placeholder project to fill the grid slightly
  {
    id: 'coffee-house',
    title: 'Coffee House Experience',
    category: 'استشارات & تجربة عميل',
    coverImage: 'https://picsum.photos/800/600?random=10',
    description: 'تحليل شامل لسوق القهوة وإعادة هيكلة قائمة الأسعار وتدريب الفريق لتقديم تجربة ضيافة استثنائية.',
    gallery: [
      'https://picsum.photos/800/600?random=10',
      'https://picsum.photos/800/600?random=11'
    ]
  }
];

export const TEXT_CONTENT = {
  home: {
    hero: {
      headline: "نطور مشروعك من الجذور… مش من المظاهر",
      subline: "Business Development — Identity — Pricing — Customer Experience — Content — Sales Systems"
    },
    aboutSnippet: "وطيد Marketing Solutions شركة متخصصة في تطوير الأعمال وبناء الأنظمة التسويقية الذكية اللي بتحول المشاريع من مجرد نشاط “شغال” إلى براند ثابت وناجح.",
    whyUs: [
        "نعالج جذور المشكلة… مش المظاهر",
        "نشتغل مع المشاريع اللي عايزة تبني كيان ثابت",
        "نفهم – ندرس – نحلل – نبني – نطلق"
    ]
  },
  aboutPage: `وطيد Marketing Solutions شركة متخصصة في تطوير الأعمال وبناء الأنظمة التسويقية الذكية اللي بتحول المشاريع من مجرد نشاط “شغال” إلى براند ثابت وناجح.
فلسفتنا بسيطة: نعالج جذور المشكلة… مش المظاهر.

✔ نشتغل مع المشاريع اللي عايزة تبني كيان ثابت ومحترم.
✔ نفهم – ندرس – نحلل – نبني – نطلق… بدون لف ودوران.`,
  projectCta: "عايز تبني براند ثابت؟ تواصل مع وطيد الآن."
};