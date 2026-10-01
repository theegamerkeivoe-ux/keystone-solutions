import {
  ServiceItem,
  PortfolioProject,
  PricingPackage,
  PricingAddon,
  FAQItem,
  BlogPost,
  Testimonial,
  BusinessSettings,
  Lead,
  Consultation
} from '../types';

export const INITIAL_SETTINGS: BusinessSettings = {
  brandName: 'KEYSTONE DIGITAL SOLUTIONS',
  tagline: 'Websites & Digital Systems',
  supportingLine: 'We build the digital foundation your organization deserves.',
  email: 'hello@keystonesolutions.co.ke',
  phone: '+254 712 345 678',
  whatsApp: '+254 712 345 678',
  location: 'Nairobi, Kenya',
  operatingRegion: 'Working with organizations in Kenya and beyond',
  officeHours: 'Mon - Fri: 8:30 AM - 5:30 PM (EAT)',
  socials: {
    linkedin: 'https://linkedin.com/company/keystone-digital-solutions',
    twitter: 'https://twitter.com/keystonesol'
  }
};

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'professional-websites',
    number: '01',
    title: 'Professional Websites',
    tagline: 'Websites that make a strong first impression.',
    headline: 'Digital homes built with precision, speed, and clear communication.',
    audience: ['Businesses', 'Schools', 'Organizations', 'Churches', 'NGOs', 'Professionals', 'Institutions'],
    features: [
      'Custom bespoke UI design',
      'Mobile-first responsive development',
      'Straightforward content management (CMS)',
      'Direct inquiry & lead capture forms',
      'Fast loading speed & search engine optimization (SEO)',
      'Analytics & visitor reporting',
      'Social media integration',
      'Performance and security optimization'
    ],
    ctaText: 'Build a Website →',
    ctaAction: 'start-project',
    previewType: 'website'
  },
  {
    id: 'school-websites-portals',
    number: '02',
    title: 'School Websites & Portals',
    tagline: 'A school website can be much more than a homepage.',
    headline: 'Unified digital campuses connecting admissions, students, parents, and teachers.',
    audience: ['Primary Schools', 'Secondary Schools', 'High Schools', 'Colleges', 'Universities', 'Training Centers'],
    features: [
      'Public showcase: Admissions, News, Events, Photo & Video Gallery',
      'Student Portal: Results, assignments, timetables, study materials',
      'Parent Portal: Student progress, attendance tracking, fee balances, school circulars',
      'Teacher Portal: Class grading, mark entry, attendance registers, lesson plans',
      'Administration Dashboard: Enrollment management, staff records, bulk notifications',
      'Fee structures & bank/payment reconciliation guidelines',
      'School calendar & term schedule management'
    ],
    ctaText: 'Explore School Solutions →',
    ctaAction: 'services',
    previewType: 'school-portal'
  },
  {
    id: 'healthcare-websites',
    number: '03',
    title: 'Healthcare Websites',
    tagline: 'Make your healthcare organization easier to find and understand.',
    headline: 'Clear, compassionate, and accessible digital front doors for health providers.',
    audience: ['Hospitals', 'Specialist Clinics', 'Medical Centers', 'Laboratories', 'Healthcare Providers'],
    features: [
      'Clean directory of departments & clinical specialties',
      'Consultant & doctor profile listings with schedules',
      'Online appointment request & callback systems',
      'Emergency contacts & physical branch navigation',
      'Insurance & payment accepted information',
      'Patient preparation guides & clinic FAQs',
      'Mobile-optimized for patients during urgent visits'
    ],
    ctaText: 'Explore Healthcare →',
    ctaAction: 'services',
    previewType: 'healthcare'
  },
  {
    id: 'business-websites',
    number: '04',
    title: 'Business Websites',
    tagline: 'A website built around your business.',
    headline: 'Designed to earn credibility, explain offerings clearly, and generate genuine inquiries.',
    audience: ['Companies', 'Enterprises', 'Service Providers', 'B2B Firms', 'Consultancies', 'Retailers'],
    features: [
      'Structured corporate story & credibility markers',
      'Service breakdowns with clear conversion pathways',
      'Product showcases & catalog displays',
      'High-converting lead capture & request-a-quote flows',
      'WhatsApp direct inquiry hooks',
      'Client case studies & capability statements',
      'Fast turnaround & dedicated brand styling'
    ],
    ctaText: 'Build Your Business Website →',
    ctaAction: 'start-project',
    previewType: 'business'
  },
  {
    id: 'custom-portals',
    number: '05',
    title: 'Custom Portals',
    tagline: 'When your organization needs more than a website.',
    headline: 'Secure web environments for your clients, staff, or members to interact effortlessly.',
    audience: ['Member Associations', 'SACCOs', 'Training Institutes', 'Logistics Companies', 'Professional Firms'],
    features: [
      'Role-based access control (Admin, Staff, Client, Member)',
      'Secure authentication & password recovery',
      'Document repositories & file sharing systems',
      'Self-service account profiles & activity logs',
      'Internal announcements & message broadcasts',
      'Task tracking & operational workflow pipelines',
      'Tailored data views for different team departments'
    ],
    ctaText: 'Discuss a Portal →',
    ctaAction: 'book-consultation',
    previewType: 'portal'
  },
  {
    id: 'custom-digital-systems',
    number: '06',
    title: 'Custom Digital Systems',
    tagline: 'We build the systems behind the website.',
    headline: 'Database-powered web applications that replace messy spreadsheets and manual paperwork.',
    audience: ['Growing Organizations', 'Educational Institutes', 'Event Organizers', 'Operations Teams'],
    features: [
      'Interactive booking and schedule reservation engines',
      'Student, patient, or attendee registration pipelines',
      'Custom management dashboards & metric analytics',
      'Structured database applications (PostgreSQL / Relational / Cloud)',
      'Automated PDF invoice, receipt, or certificate generation',
      'Payment gateway integrations (M-PESA / Card where required)',
      'Custom automated email and SMS notification triggers'
    ],
    ctaText: 'Build Something Custom →',
    ctaAction: 'start-project',
    previewType: 'system'
  }
];

export const INITIAL_PROJECTS: PortfolioProject[] = [
  {
    id: 'savannah-crest-high-school',
    name: 'Savannah Crest High School',
    industry: 'Education',
    projectType: 'School Website & 4-Tier Portal System',
    isConcept: true,
    shortDescription: 'Complete public institutional website paired with unified student, parent, teacher, and admin portals.',
    overview: 'Savannah Crest High School needed to modernize their online image while solving high telephone traffic regarding report cards, term dates, and admissions.',
    challenge: 'Parents struggled to receive timely academic performance updates, and administration spent excessive hours printing paper circulars and sorting admissions.',
    solution: 'Keystone conceptualized a dual-layer platform: an inviting, inspiring public website showcasing academic excellence, alongside secure role-based portals for instant report card access and fee guidelines.',
    features: [
      'Public Admissions & Prospectus download portal',
      'Parent Portal for real-time exam results & fee balances',
      'Teacher Portal for marks entry & class attendance tracking',
      'Student dashboard for assignments and term timetables',
      'Admin portal for bulk SMS alerts & academic records'
    ],
    technologies: ['React', 'TypeScript', 'Secure Portals', 'Automated Grading Engine', 'Responsive CSS'],
    resultsNote: 'Project outcomes will be added when available.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'st-jude-hospital',
    name: 'St. Jude Healthcare & Specialized Clinic',
    industry: 'Healthcare',
    projectType: 'Healthcare Digital Front Door & Appointment Triage',
    isConcept: true,
    shortDescription: 'Modern, reassuring hospital platform featuring doctor directories, clinic schedules, and fast appointment routing.',
    overview: 'Designed for a regional healthcare facility needing to streamline patient inquiries and specialist consultations across four clinics.',
    challenge: 'Patients found it difficult to know which days specific consultants were on site, leading to crowded waiting rooms and missed consultations.',
    solution: 'A calm, clear web experience organized by medical department, displaying doctor availability rosters and an intuitive 3-step appointment request engine.',
    features: [
      'Specialist doctor directory with clinical schedules',
      'Department profiles (Pediatrics, Maternity, Dental, Diagnostics)',
      'Online appointment booking & callback requests',
      'Insurance coverage and NHIF/SHIF clearance checklist',
      'One-tap emergency call & branch GPS directions'
    ],
    technologies: ['Fast Responsive UI', 'Booking Triage', 'Accessibility Compliant', 'Branch Geolocation'],
    resultsNote: 'Project outcomes will be added when available.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'rift-peak-agro',
    name: 'Rift Peak Agro-Processing Ltd',
    industry: 'Business',
    projectType: 'Corporate Website & B2B Product Catalog',
    isConcept: true,
    shortDescription: 'Authoritative commercial website designed for an agricultural export enterprise supplying global markets.',
    overview: 'An agricultural producer in Nakuru expanding its B2B distribution network to European and Middle Eastern buyers.',
    challenge: 'Their existing website was built on a generic blog template that lacked technical product specifications and traceability data needed by international buyers.',
    solution: 'A clean, high-contrast corporate identity and product catalog highlighting export certifications, cold chain logistics, and direct quotation requests.',
    features: [
      'Comprehensive export catalog with phytosanitary specs',
      'Factory & farm quality assurance photo gallery',
      'Custom B2B quotation builder for bulk container shipments',
      'Direct WhatsApp and email lead routing to sales directors'
    ],
    technologies: ['Modern Corporate Layout', 'Catalog Filtering', 'Multi-currency Quote Builder'],
    resultsNote: 'Project outcomes will be added when available.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'pamoja-community-trust',
    name: 'Pamoja Community Trust NGO',
    industry: 'Organizations',
    projectType: 'Impact Showcase & Beneficiary Reporting System',
    isConcept: true,
    shortDescription: 'Transparent, storytelling-focused non-profit web platform with grant application tracking and donor reports.',
    overview: 'An East African community organization working on clean water and youth vocational training programs.',
    challenge: 'International donors required verified, auditable program reports and transparent project milestones, which were previously trapped in PDF email attachments.',
    solution: 'A digital home with interactive impact metrics, downloadable financial audits, and structured volunteer/grant application forms.',
    features: [
      'Interactive project timeline with beneficiary statistics',
      'Audited annual financial reports archive',
      'Grant application intake and initial review workflow',
      'Newsletter and community stories publication hub'
    ],
    technologies: ['Storytelling Layout', 'Document Vault', 'Form Intake Processing'],
    resultsNote: 'Project outcomes will be added when available.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'apex-logistics-portal',
    name: 'Apex Freight & Logistics',
    industry: 'Portals',
    projectType: 'Client Tracking & Consignment Portal',
    isConcept: true,
    shortDescription: 'Private customer dashboard for cargo tracking, customs document clearing, and payment status verification.',
    overview: 'Built for a transit cargo firm operating between Mombasa Port and the Great Lakes region.',
    challenge: 'Operations staff were overwhelmed answering 200+ daily phone calls from clients asking for container location updates and clearance invoices.',
    solution: 'Keystone engineered a secure client portal where registered customers log in with their consignment number to view real-time transit checkpoints and download clearance manifests.',
    features: [
      'Role-based client logins with single-click PIN verification',
      'Transit route milestones and border clearance checkpoints',
      'Invoice PDF download and receipt confirmation',
      'Internal dispatcher admin panel for updating consignment statuses'
    ],
    technologies: ['Role-Based Portals', 'Milestone State Engine', 'Secure PDF Engine'],
    resultsNote: 'Project outcomes will be added when available.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'karibu-conference-center',
    name: 'Karibu Retreat & Conference Center',
    industry: 'Digital Systems',
    projectType: 'Venue Showcase & Interactive Booking Engine',
    isConcept: true,
    shortDescription: 'Hospitality website with interactive hall availability calendar and corporate retreat booking engine.',
    overview: 'A scenic conferencing facility in Naivasha catering to institutional retreats, weddings, and corporate seminars.',
    challenge: 'Double-booking of conference halls and manual quote calculations created friction with prospective corporate clients.',
    solution: 'An elegant presentation of venues, accommodation, and catering paired with a step-by-step reservation system that calculates packages automatically.',
    features: [
      'Interactive room & hall capacity specifications',
      'Real-time date availability checker',
      'Automated retreat package price estimator',
      'Corporate quote generator with instant PDF summary'
    ],
    technologies: ['Booking Logic', 'Date Slot Scheduling', 'Mobile Friendly Checkout'],
    resultsNote: 'Project outcomes will be added when available.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    featured: false
  }
];

export const INITIAL_PRICING: PricingPackage[] = [
  {
    id: 'essential',
    name: 'ESSENTIAL FOUNDATION',
    startingPrice: 'KSh 100,000',
    description: 'For organizations that need a clean, authoritative, high-performance digital presence.',
    features: [
      'Up to 5 custom-designed pages & sections',
      'Bespoke visual architecture (no generic cookie-cutter templates)',
      '100% mobile-first performance on all phones & tablets',
      'Direct inquiry & lead capture with email/WhatsApp routing',
      'Search engine optimization (Google Indexing, Meta & Schema)',
      'High-speed cloud deployment & SSL encryption setup',
      'Full source asset handover & domain configuration'
    ],
    ctaText: 'Start with Essential'
  },
  {
    id: 'professional',
    name: 'INSTITUTIONAL PLATFORM',
    startingPrice: 'KSh 220,000',
    description: 'For growing organizations needing dynamic content management, media archives, and announcements.',
    features: [
      'Multi-page institutional website (up to 12 sections/pages)',
      'Custom visual layout tailored to your specific sector',
      'Simple Content Management System (CMS) for internal updates',
      'News, events, procurement notices, and document downloads',
      'Interactive photo & facility gallery showcasing your campus',
      'Multi-step intake forms & smart inquiry triage',
      'Comprehensive SEO audit & visitor analytics integration',
      'Production deployment and 60 days dedicated post-launch care'
    ],
    popular: true,
    ctaText: 'Choose Institutional'
  },
  {
    id: 'custom',
    name: 'CUSTOM PORTALS & SYSTEMS',
    startingPrice: 'From KSh 450,000',
    description: 'For organizations requiring authenticated portals, multi-role dashboards, and custom operational workflows.',
    features: [
      'Bespoke digital architecture engineered to exact operational specs',
      'User authentication & role-based portals (Students, Parents, Doctors, Staff)',
      'Executive administrative dashboards & real-time metric tracking',
      'Relational database integration (PostgreSQL / Cloud SQL)',
      'API integrations & automated workflow triggers',
      'Secure payment gateway integration (M-PESA STK Push / Card)',
      'Automated PDF documents, invoices, or academic report cards',
      'Comprehensive training, system documentation, and ongoing SLA'
    ],
    ctaText: 'Request Custom Scope'
  }
];

export const INITIAL_ADDONS: PricingAddon[] = [
  {
    id: 'addon-whatsapp',
    name: 'WhatsApp Business Direct Integration',
    price: 'KSh 5,000',
    description: 'Floating click-to-chat with custom pre-filled message templates.',
    category: 'Growth'
  },
  {
    id: 'addon-domain-hosting',
    name: 'Domain Setup & Managed Fast Hosting (1 Year)',
    price: 'KSh 8,500',
    description: '.co.ke or .com domain registration, SSL certificates, and high-speed hosting setup.',
    category: 'Infrastructure'
  },
  {
    id: 'addon-mpesa',
    name: 'M-PESA Payment Integration',
    price: 'KSh 20,000',
    description: 'Direct Daraja API integration for STK push, paybill/till verification, and instant receipts.',
    category: 'Systems'
  },
  {
    id: 'addon-portal-tier',
    name: 'Custom User Portal Module',
    price: 'From KSh 35,000',
    description: 'Dedicated login area for clients, students, or staff with private files and notices.',
    category: 'Systems'
  },
  {
    id: 'addon-booking-engine',
    name: 'Online Booking & Appointment System',
    price: 'KSh 15,000',
    description: 'Calendar availability, automatic booking confirmation, and SMS/Email reminders.',
    category: 'Systems'
  },
  {
    id: 'addon-brand-identity',
    name: 'Logo & Basic Brand Identity Kit',
    price: 'KSh 12,000',
    description: 'Professional vector wordmark, brand color guide, and social media profile assets.',
    category: 'Design'
  },
  {
    id: 'addon-maintenance',
    name: 'Monthly Care & Maintenance Retainer',
    price: 'KSh 6,000 / mo',
    description: 'Regular security updates, weekly backups, content edits, and performance monitoring.',
    category: 'Infrastructure'
  },
  {
    id: 'addon-redesign',
    name: 'Legacy Website Migration & Redesign',
    price: 'KSh 18,000',
    description: 'Transferring old content, images, and search rankings safely into a modern Keystone build.',
    category: 'Design'
  }
];

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: 'faq-cost',
    question: 'How much does a website cost?',
    answer: 'Pricing depends on the operational scope and technical requirements of your organization. A clean, custom institutional website starts from KSh 100,000 under our Essential Foundation package, while dynamic organizations requiring CMS updates, news feeds, and document archives invest from KSh 220,000 under the Institutional Platform tier. Custom portals, database-driven workflows, and multi-tier systems start from KSh 450,000. We provide an itemized, binding quote before any work commences.'
  },
  {
    id: 'faq-timeline',
    question: 'How long does a website take to build?',
    answer: 'A standard Essential website typically takes 1 to 2 weeks once content and brand materials are assembled. Comprehensive Professional websites generally take 2 to 3 weeks. Custom web platforms, school portals, or complex databases take between 4 to 8 weeks depending on the number of user tiers and automated workflows.'
  },
  {
    id: 'faq-redesign',
    question: 'Do you redesign existing websites?',
    answer: 'Yes. Many organizations come to us with slow, outdated, or hard-to-update websites built years ago. We audit your current site, preserve your important information and search engine positions, and rebuild the interface with modern speed, mobile responsiveness, and clean typography.'
  },
  {
    id: 'faq-school-portals',
    question: 'Do you build school portals?',
    answer: 'Yes, this is one of our primary specialties. We engineer school platforms that range from public admissions websites to unified digital campuses with student dashboards, parent report-card access, teacher grading portals, and administrator management systems.'
  },
  {
    id: 'faq-portal-tiers',
    question: 'Can you build separate student, parent, and teacher portals?',
    answer: 'Absolutely. We architect multi-tier role-based access where each user group sees only what is relevant to them: parents see their children’s fees and attendance, teachers input marks and manage class registers, students download assignments, and headteachers manage institutional records.'
  },
  {
    id: 'faq-hospital',
    question: 'Do you build hospital and clinic websites?',
    answer: 'Yes. We design healthcare websites focused on patient clarity—making it simple for patients to check medical specialties, find clinic hours, discover doctor availability, review accepted insurance, and request consultations without medical confusion.'
  },
  {
    id: 'faq-international',
    question: 'Do you work with organizations outside Kenya?',
    answer: 'Yes. While Keystone Digital Solutions is proudly founded in Kenya, our team collaborates seamlessly with organizations, schools, and enterprises across East Africa and internationally using modern collaborative tools and video consultations.'
  },
  {
    id: 'faq-hosting',
    question: 'Do you provide hosting and domains?',
    answer: 'We configure and manage high-performance cloud hosting, automated SSL certificates, and official domain registrations (.co.ke, .com, .org, .ac.ke, etc.). You always maintain ultimate ownership of your domain and digital assets.'
  },
  {
    id: 'faq-maintenance',
    question: 'Can you maintain our website after launch?',
    answer: 'Yes. We offer flexible ongoing maintenance retainers covering security updates, performance audits, content changes, routine backups, and technical support so your leadership team never has to worry about site downtime.'
  },
  {
    id: 'faq-mpesa',
    question: 'Can you integrate M-PESA into our website?',
    answer: 'Yes. We implement M-PESA integrations (including Daraja API, STK Push, and C2B payment confirmations) for application fees, bookings, donations, or invoicing, subject to your organization meeting the standard provider account compliance requirements.'
  }
];

export const INITIAL_BLOG: BlogPost[] = [
  {
    id: 'blog-1',
    title: '5 Things Every School Website Should Have',
    slug: '5-things-every-school-website-should-have',
    category: 'Education Technology',
    readTime: '4 min read',
    summary: 'A school website is no longer an afterthought. Here is what modern parents, students, and inspectors look for first.',
    published: true,
    content: [
      'When a parent first considers enrolling their child in your school, their first impression almost always happens online. Yet many schools continue to treat their website as a static billboard rather than an active administrative gateway.',
      '1. Clear, Transparent Admissions Instructions: Parents want to know admission criteria, interview dates, application fee requirements, and term schedules without having to make three separate phone calls.',
      '2. Mobile-Friendly Parent Circulars: Over 85% of parents in Kenya check school updates via smartphone. If your newsletters are buried inside 15MB scanned PDFs that do not open on mobile phones, critical notices go unread.',
      '3. Up-to-Date Academic Calendar: Term dates, mid-term breaks, sports days, and visiting days must be accurate. A website displaying last year’s calendar immediately signals administrative disorganization.',
      '4. Transparent Fee Structure Guidelines: While schools have varying payment options, clear guidance on accepted payment modes (Paybill, Bank account details, account naming formats) drastically reduces finance office confusion.',
      '5. Real Photos of Your Campus and Learning Culture: Stock photos of Western classrooms alienate local parents. Genuine photography of your students, laboratory facilities, sports fields, and library conveys authenticity and pride.'
    ]
  },
  {
    id: 'blog-2',
    title: 'Why Your Organization Needs More Than a Facebook Page',
    slug: 'why-your-organization-needs-more-than-a-facebook-page',
    category: 'Digital Strategy',
    readTime: '3 min read',
    summary: 'Relying exclusively on social media leaves your organization vulnerable to algorithm shifts and credibility doubts.',
    published: true,
    content: [
      'Social media is exceptional for building community awareness, but relying on a Facebook page or Instagram account as your primary digital presence carries severe business risks.',
      'You do not own social media algorithms. A platform can change its reach overnight or restrict your page without explanation. A dedicated website is an owned digital asset that belongs 100% to your organization.',
      'Institutional Credibility: When donors, corporate partners, or discerning clients evaluate your organization, a professional domain email (e.g., info@yourorganization.co.ke) and a structured institutional website provide legitimacy that a free social profile simply cannot replicate.',
      'Information Architecture: Social media feeds are chronological streams where important policies, service descriptions, and documentation get buried within days. A website organizes knowledge logically so visitors can find what they need in seconds.'
    ]
  },
  {
    id: 'blog-3',
    title: 'School Website vs School Portal: What’s the Difference?',
    slug: 'school-website-vs-school-portal-whats-the-difference',
    category: 'Education Technology',
    readTime: '5 min read',
    summary: 'Understanding the distinction between your public face and your internal operational system.',
    published: true,
    content: [
      'School administrators frequently confuse a public website with an internal portal. Understanding the distinction helps boards budget accurately and avoid unrealistic software expectations.',
      'The Public Website is your digital front door. It is accessible to anyone in the world: prospective parents, alumni, community partners, and regulatory bodies. Its primary job is marketing, communication, credibility, and prospective student admissions.',
      'The School Portal is a private, authenticated workspace. Only authenticated users—such as enrolled students, their registered guardians, teachers, and finance administrators—can log in.',
      'Why both matter: An outstanding school pairs an inspiring public website with a secure, dependable internal portal. One attracts and informs the public, while the other runs daily operations efficiently.'
    ]
  },
  {
    id: 'blog-4',
    title: 'What Makes a Professional Institutional Website?',
    slug: 'what-makes-a-professional-institutional-website',
    category: 'Web Design',
    readTime: '4 min read',
    summary: 'How government agencies, hospitals, universities, and NGOs project competence and reliability online.',
    published: true,
    content: [
      'Institutions operate under different standards than lifestyle startups. An institutional website must balance dignity with accessibility.',
      'Speed and Accessibility: Visitors may be accessing your site from rural areas with limited 3G connectivity. Heavy uncompressed banners and slow scripts frustrate citizens when they need vital services.',
      'Restrained Visual Tone: Neon gradients and trendy animations diminish authority. Clear typography, generous whitespace, structured tables, and sober brand accents communicate permanence and trustworthiness.',
      'Searchable Document Repositories: Annual reports, procurement notices, regulatory compliance forms, and guidelines must be easily searchable and downloadable.'
    ]
  },
  {
    id: 'blog-5',
    title: '7 Signs Your Business Website Needs a Redesign',
    slug: '7-signs-your-business-website-needs-a-redesign',
    category: 'Website Tips',
    readTime: '4 min read',
    summary: 'A slow or outdated website silently turns away potential clients. Here are the warning signs to look for.',
    published: true,
    content: [
      'Your website is often the first salesperson your prospective customer meets. If any of these 7 signs sound familiar, your current website might be costing you contracts:',
      '1. It is hard to read or navigate on a smartphone without pinching and zooming.',
      '2. It takes more than 3 seconds to load on a standard mobile connection.',
      '3. You are embarrassed to give out your URL during business meetings.',
      '4. Your team cannot edit basic text or prices without paying an external developer for minor updates.',
      '5. It lacks a direct WhatsApp link or structured lead inquiry form.',
      '6. Your service offerings have evolved, but the website reflects what your company did three years ago.',
      '7. Visitors visit your site but never contact you or submit an inquiry.'
    ]
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  // Following prompt guidelines: "If there are no real testimonials, display: Client stories will appear here as we grow."
  // Do NOT fabricate fake clients or testimonials.
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-1',
    fullName: 'David Kiprono',
    organizationName: 'Savannah Valley Academy',
    email: 'principal@savannahvalley.ac.ke',
    phone: '+254 722 100 200',
    organizationType: 'School',
    projectType: 'School Portal',
    budget: 'KSh 50,000–100,000',
    preferredLaunchDate: 'Next Term (Within 2 months)',
    currentWebsite: 'https://savannahvalley.mock',
    projectDescription: 'We are looking to transition our 650 students to a digital portal for term report cards, fee tracking, and teacher mark entries. Our current static site cannot handle logins.',
    createdAt: '2026-09-26T10:14:00Z',
    status: 'NEW',
    internalNotes: [
      'Inquiry received via website intake form.',
      'High priority: Board approved digital transition budget for Q4.'
    ]
  },
  {
    id: 'lead-2',
    fullName: 'Dr. Sarah Wambui',
    organizationName: 'Equator Specialist Dental Clinic',
    email: 'dr.wambui@equatordental.co.ke',
    phone: '+254 733 456 789',
    organizationType: 'Clinic',
    projectType: 'Hospital Website',
    budget: 'KSh 25,000–50,000',
    preferredLaunchDate: 'Within 3 weeks',
    currentWebsite: '',
    projectDescription: 'We are expanding to a second branch in Kilimani and need a modern website displaying our pediatric and orthodontics specialists with online appointment booking.',
    createdAt: '2026-09-25T14:30:00Z',
    status: 'CONTACTED',
    internalNotes: [
      'Spoke on phone on Friday. She confirmed they have branding and doctor photos ready.',
      'Scheduled consultation call for Tuesday morning.'
    ]
  },
  {
    id: 'lead-3',
    fullName: 'Peter Ochieng',
    organizationName: 'Lake Victoria Fisheries Cooperative',
    email: 'info@lakevicfish.org',
    phone: '+254 711 987 654',
    organizationType: 'NGO',
    projectType: 'New Website',
    budget: 'KSh 50,000–100,000',
    preferredLaunchDate: '1 month',
    currentWebsite: '',
    projectDescription: 'We represent 12 cooperative societies in Kisumu. We need a clean, authoritative website to attract development partners and display catch data statistics.',
    createdAt: '2026-09-23T08:20:00Z',
    status: 'PROPOSAL SENT',
    internalNotes: [
      'Sent detailed proposal including Professional package + M-PESA member contribution portal add-on.',
      'Awaiting board meeting resolution on Thursday.'
    ]
  }
];

export const INITIAL_CONSULTATIONS: Consultation[] = [
  {
    id: 'cons-1',
    fullName: 'Sister Beatrice Mwangi',
    organizationName: 'Horizon Ridge High School',
    email: 'admin@horizonridge.ac.ke',
    phone: '+254 720 334 455',
    projectType: 'School Website & Portal',
    consultationType: 'School Website',
    date: '2026-09-30',
    timeSlot: '10:00 AM - 10:45 AM (EAT)',
    notes: 'Discussion regarding parent portal adoption and student fee clearance workflows.',
    status: 'SCHEDULED',
    createdAt: '2026-09-26T16:00:00Z'
  },
  {
    id: 'cons-2',
    fullName: 'Eng. Francis Mutua',
    organizationName: 'Savannah Solar Energy Ltd',
    email: 'fmutua@savannahsolar.co.ke',
    phone: '+254 700 889 911',
    projectType: 'Corporate Website Redesign',
    consultationType: 'Business Website',
    date: '2026-10-02',
    timeSlot: '02:00 PM - 02:45 PM (EAT)',
    notes: 'Wants to review commercial project showcases and lead generation funnel.',
    status: 'SCHEDULED',
    createdAt: '2026-09-27T09:15:00Z'
  }
];
