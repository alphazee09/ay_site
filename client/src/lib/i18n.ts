export type Language = 'en' | 'ar';

export interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const translations: Translations = {
  // Navigation
  home: {
    en: 'Home',
    ar: 'الرئيسية'
  },
  about: {
    en: 'About Us',
    ar: 'من نحن'
  },
  strategy: {
    en: 'Our Strategy',
    ar: 'استراتيجيتنا'
  },
  sectors: {
    en: 'Business Sectors',
    ar: 'قطاعات أعمالنا'
  },
  projects: {
    en: 'Projects & Jobs',
    ar: 'مشاريعنا وأعمالنا'
  },
  clients: {
    en: 'Clients & Partners',
    ar: 'شركاؤنا وعملاؤنا'
  },
  contact: {
    en: 'Contact Us',
    ar: 'اتصل بنا'
  },

  // Home Page
  headline: {
    en: 'Your Business Success Partner',
    ar: 'شريك نجاح أعمالك'
  },
  subheading: {
    en: 'Innovating, investing, and leading across multiple sectors for a sustainable future.',
    ar: 'نبتكر ونستثمر ونقود في قطاعات متعددة من أجل مستقبل مستدام.'
  },
  intro: {
    en: 'AY Group is a diversified investment company headquartered in Muscat, Oman. We specialize in business services, logistics, technology, real estate, tourism, and trade. Our mission is to create value for our partners through strategic investments and innovative solutions.',
    ar: 'مجموعة AY هي شركة استثمارية متعددة المجالات يقع مقرها في مسقط، سلطنة عمان. نتخصص في الخدمات التجارية، اللوجستيات، التكنولوجيا، العقارات، السياحة، والتجارة. رسالتنا هي خلق قيمة لشركائنا من خلال الاستثمارات الذكية والحلول المبتكرة.'
  },
  exploreServices: {
    en: 'Explore Our Services',
    ar: 'اكتشف خدماتنا'
  },
  viewProjects: {
    en: 'View Our Projects',
    ar: 'استعرض مشاريعنا'
  },
  contactTeam: {
    en: 'Contact Our Team',
    ar: 'تواصل معنا'
  },

  // About Us
  whoWeAre: {
    en: 'Who We Are',
    ar: 'من نحن'
  },
  whoWeAreDesc: {
    en: 'AY Group is an Oman-based investment entity founded on strategic partnerships and diversification. We acquire existing projects, establish new ventures, and manage operations across multiple sectors.',
    ar: 'مجموعة AY هي كيان استثماري في سلطنة عمان قائم على الشراكات الاستراتيجية والتنوع. نستحوذ على مشاريع قائمة، ونؤسس مشاريع جديدة، وندير العمليات في قطاعات متعددة.'
  },
  vision: {
    en: 'Vision',
    ar: 'الرؤية'
  },
  visionDesc: {
    en: 'To be the leading provider of integrated business solutions in the region.',
    ar: 'أن نكون المزود الرائد للحلول المتكاملة للأعمال في المنطقة.'
  },
  values: {
    en: 'Values',
    ar: 'القيم'
  },
  valuesDesc: {
    en: 'Partnership – Innovation – Excellence – Sustainability',
    ar: 'الشراكة – الابتكار – التميز – الاستدامة'
  },

  // Strategy
  strategyTitle: {
    en: 'Our Strategy',
    ar: 'استراتيجيتنا'
  },
  strategyDesc: {
    en: 'We implement a horizontal expansion model, targeting small and medium-sized enterprises and large-scale projects. Our strategies include:',
    ar: 'نطبق نموذج التوسع الأفقي، مستهدفين المؤسسات الصغيرة والمتوسطة والمشاريع الكبرى. تشمل استراتيجياتنا:'
  },
  strategy1: {
    en: 'Acquiring existing projects',
    ar: 'الاستحواذ على مشاريع قائمة'
  },
  strategy2: {
    en: 'Launching new ventures',
    ar: 'إطلاق مشاريع جديدة'
  },
  strategy3: {
    en: 'Managing and operating ongoing businesses',
    ar: 'إدارة وتشغيل الأعمال الجارية'
  },
  strategy4: {
    en: 'Building smart partnerships',
    ar: 'بناء شراكات ذكية'
  },

  // Business Sectors
  businessSectors: {
    en: 'Business Sectors',
    ar: 'قطاعات أعمالنا'
  },
  ayBusinessCenter: {
    en: 'AY Business Center',
    ar: 'مركز AY للأعمال'
  },
  ayBusinessCenterDesc: {
    en: 'Fully serviced offices, shared workspaces, virtual offices, business support, event hosting, capacity building.',
    ar: 'مكاتب مجهزة بالكامل، مساحات عمل مشتركة، مكاتب افتراضية، دعم الأعمال، استضافة الفعاليات، بناء القدرات.'
  },
  aySoftLabs: {
    en: 'AY Soft Labs',
    ar: 'AY للبرمجيات'
  },
  aySoftLabsDesc: {
    en: 'Website & app development, ERP & CRM systems, AI, cybersecurity, technical consultancy.',
    ar: 'تطوير المواقع والتطبيقات، أنظمة ERP وCRM، الذكاء الاصطناعي، الأمن السيبراني، الاستشارات التقنية.'
  },
  construction: {
    en: 'Construction & Interiors',
    ar: 'البناء والتصميم الداخلي'
  },
  constructionDesc: {
    en: 'Building works, interior design, project studies, cost analysis.',
    ar: 'أعمال البناء، التصميم الداخلي، الدراسات الهندسية، تحليل التكاليف.'
  },
  logistics: {
    en: '13 for Logistics & Services',
    ar: '13 للوجستيات والخدمات'
  },
  logisticsDesc: {
    en: 'Event management, promotional gifts, printing, media production, catering, corporate services, logistics, marketing, PR, financial planning.',
    ar: 'إدارة الفعاليات، الهدايا الترويجية، المطبوعات، الإنتاج الإعلامي، التموين، الخدمات المؤسسية، اللوجستيات، التسويق، العلاقات العامة، التخطيط المالي.'
  },
  digitalInnovators: {
    en: 'AY Digital Innovators',
    ar: 'AY للابتكار الرقمي'
  },
  digitalInnovatorsDesc: {
    en: 'Digital marketing, SEO, social media management, paid advertising, customer management systems.',
    ar: 'التسويق الرقمي، تحسين محركات البحث، إدارة وسائل التواصل الاجتماعي، الإعلانات المدفوعة، أنظمة إدارة العملاء.'
  },
  importExport: {
    en: 'AY Import & Export',
    ar: 'AY للاستيراد والتصدير'
  },
  importExportDesc: {
    en: 'Import/export operations tailored to market needs, associated logistics services.',
    ar: 'عمليات الاستيراد والتصدير وفقاً لاحتياجات السوق، والخدمات اللوجستية المصاحبة.'
  },
  malaysiaTours: {
    en: 'AY Malaysia Tours',
    ar: 'AY لرحلات ماليزيا'
  },
  malaysiaToursDesc: {
    en: 'Tourism, medical tourism, honeymoon packages, training trips, scientific tours.',
    ar: 'السياحة، السياحة العلاجية، برامج شهر العسل، الرحلات التدريبية، الرحلات العلمية.'
  },

  // Projects
  projectsTitle: {
    en: 'Projects & Jobs',
    ar: 'مشاريعنا وأعمالنا'
  },
  completedProjects: {
    en: 'Completed Projects',
    ar: 'المشاريع المنجزة'
  },
  runningProjects: {
    en: 'Running Projects',
    ar: 'المشاريع الجارية'
  },
  completedProject1: {
    en: 'Corporate events & conferences – full planning and execution.',
    ar: 'الفعاليات والمؤتمرات – تخطيط وتنفيذ كامل.'
  },
  completedProject2: {
    en: 'Real estate developments – commercial & residential.',
    ar: 'تطوير العقارات – مشاريع تجارية وسكنية.'
  },
  completedProject3: {
    en: 'ERP & CRM system implementations.',
    ar: 'تنفيذ أنظمة ERP وCRM.'
  },
  completedProject4: {
    en: 'Medical & leisure tourism programs in Malaysia.',
    ar: 'برامج السياحة العلاجية والترفيهية في ماليزيا.'
  },
  runningProject1: {
    en: 'AY Business Center operations.',
    ar: 'تشغيل مركز AY للأعمال.'
  },
  runningProject2: {
    en: 'Digital marketing campaigns through AY Digital Innovators.',
    ar: 'حملات التسويق الرقمي عبر AY للابتكار الرقمي.'
  },
  runningProject3: {
    en: 'Ongoing commercial fit-out and interior design projects.',
    ar: 'مشاريع تجهيزات وتصميم داخلي تجارية جارية.'
  },
  runningProject4: {
    en: 'Active import/export contracts with Asia and Africa.',
    ar: 'عقود استيراد وتصدير نشطة مع آسيا وأفريقيا.'
  },

  // Clients & Partners
  clientsTitle: {
    en: 'Clients & Partners',
    ar: 'شركاؤنا وعملاؤنا'
  },
  clientsDesc: {
    en: 'We collaborate with:',
    ar: 'نتعاون مع:'
  },
  client1: {
    en: 'Government institutions',
    ar: 'المؤسسات الحكومية'
  },
  client2: {
    en: 'Private corporations',
    ar: 'الشركات الخاصة'
  },
  client3: {
    en: 'SMEs and entrepreneurs',
    ar: 'الشركات الصغيرة والمتوسطة ورواد الأعمال'
  },
  client4: {
    en: 'International trade partners',
    ar: 'شركاء التجارة الدولية'
  },
  client5: {
    en: 'Technology providers',
    ar: 'مزودو التكنولوجيا'
  },
  client6: {
    en: 'Real estate developers',
    ar: 'مطورو العقارات'
  },

  // Contact
  contactTitle: {
    en: 'Contact Us',
    ar: 'اتصل بنا'
  },
  address: {
    en: 'Muscat – Azaiba, Oman',
    ar: 'مسقط – العذيبة، سلطنة عمان'
  },
  phone: {
    en: '+968 22512731',
    ar: '+968 22512731'
  },
  website: {
    en: 'www.ay-group.net',
    ar: 'www.ay-group.net'
  },
  email: {
    en: 'contact@ay-group.net',
    ar: 'contact@ay-group.net'
  },
  followUs: {
    en: 'Follow Us',
    ar: 'تابعنا'
  },

  // Common
  learnMore: {
    en: 'Learn More',
    ar: 'اعرف المزيد'
  },
  getInTouch: {
    en: 'Get in Touch',
    ar: 'تواصل معنا'
  },
  readMore: {
    en: 'Read More',
    ar: 'اقرأ المزيد'
  }
};

export const getTranslation = (key: string, language: Language): string => {
  return translations[key]?.[language] || key;
};

export const isRTL = (language: Language): boolean => {
  return language === 'ar';
};