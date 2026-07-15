/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, PortfolioItem, CaseStudy, BlogArticle, FAQItem, FounderProfile } from './types';

export const FOUNDER_DATA: FounderProfile = {
  name: "Azhar Uddin",
  title: "Founder & Digital Growth Strategist",
  image: "/src/assets/images/founder_original.jpg",
  bio: "Azhar Uddin is the Founder of Niaz Digital, a digital growth agency helping startups, agencies, coaches, and local businesses build powerful digital systems. Since beginning his professional journey in 2016, he has focused on delivering websites, SEO, branding, AI automation, business systems, and virtual assistance that help businesses operate more efficiently and grow sustainably.",
  tagline: "Building Digital Systems That Help Businesses Grow Smarter.",
  mission: "To empower businesses with smart digital solutions, efficient systems, and strategic marketing that save time, improve productivity, and create sustainable growth.",
  vision: "To build Niaz Digital into a globally trusted digital growth agency known for innovation, automation, and meaningful client partnerships.",
  quote: "Great businesses aren't built by doing more—they're built by creating better systems.",
  experience: [
    "Professional Journey Started in 2016",
    "9+ Years of Digital Industry Experience",
    "Founder of Niaz Digital",
    "Helping Businesses Build Scalable Digital Systems"
  ],
  achievements: [
    "Website Design & Development",
    "Search Engine Optimization (SEO)",
    "Social Media Management",
    "AI Workflow Automation",
    "Executive & Virtual Assistance",
    "Branding & Visual Identity",
    "Business Operations",
    "Marketing Systems"
  ],
  expertise: [
    "Website Design & Development",
    "Search Engine Optimization (SEO)",
    "Social Media Management",
    "AI Workflow Automation",
    "Executive & Virtual Assistance",
    "Branding & Visual Identity",
    "Business Operations",
    "Marketing Systems"
  ],
  techStack: [
    "WordPress", "Shopify", "HTML", "CSS", "JavaScript", 
    "Graphic Design", "Branding & Identity", "Canva", 
    "Photoshop", "Figma", "ChatGPT", "Claude", "Gemini", 
    "n8n", "Make", "Zapier", "GoHighLevel"
  ],
  email: "azhar@niazdigital.com",
  phone: "+91 90124 03699",
  socials: {
    linkedin: "https://www.linkedin.com/in/azhar-uddin-766522a7",
    instagram: "https://www.instagram.com/niaz_digital"
  }
};

export const SERVICES_DATA: Service[] = [
  // DEVELOPMENT
  {
    id: "web-development",
    title: "Premium Website Development",
    category: "Development",
    description: "Blazing fast custom Next.js, React, and TypeScript applications engineered with sub-second page loads.",
    icon: "Code2",
    features: [
      "Next.js Development & React Development",
      "Website Redesign & Performance Overhaul",
      "Custom Web Applications & SaaS Development",
      "WordPress Development & Shopify Development",
      "Landing Pages & High-Converting Funnels"
    ],
    gradient: "from-blue-500/10 to-indigo-500/5 hover:from-blue-500/20 hover:to-indigo-500/10"
  },
  {
    id: "mobile-apps",
    title: "Mobile App & Dashboard Development",
    category: "Development",
    description: "Stunning cross-platform iOS and Android applications developed using React Native or Flutter, alongside real-time dashboards.",
    icon: "Smartphone",
    features: [
      "iOS & Android Mobile App Development",
      "Dashboard Development & Real-Time Analytics",
      "React Native & Flutter Hybrid Apps",
      "Push Notification Automations",
      "Offline-first Local Databases"
    ],
    gradient: "from-cyan-500/10 to-sky-500/5 hover:from-cyan-500/20 hover:to-sky-500/10"
  },

  // AI & AUTOMATION
  {
    id: "ai-automation",
    title: "AI & Business Automation",
    category: "AI & Automation",
    description: "Supercharge your business with custom n8n, Make, and Zapier automated workflows and intelligent AI integrations.",
    icon: "Cpu",
    features: [
      "AI Automation & Business Automation",
      "Workflow Automation (n8n, Make, Zapier)",
      "CRM Integration (HubSpot, GoHighLevel, etc.)",
      "Custom AI Chatbots (Gemini/OpenAI)",
      "Excel Automation & Automated Lead Routing"
    ],
    gradient: "from-purple-500/10 to-pink-500/5 hover:from-purple-500/20 hover:to-pink-500/10"
  },

  // MARKETING
  {
    id: "marketing-seo",
    title: "SEO, Google Ads & Meta Ads",
    category: "Marketing",
    description: "Data-backed advertising and semantic organic search optimization that scales enterprise pipeline lead pipelines.",
    icon: "TrendingUp",
    features: [
      "SEO (Technical SEO & Local SEO)",
      "Google Ads (Search, Display & PMax)",
      "Meta Ads (Facebook & Instagram scaling)",
      "Social Media Management & Strategy",
      "Data-driven lead generation funnels"
    ],
    gradient: "from-teal-500/10 to-emerald-500/5 hover:from-teal-500/20 hover:to-emerald-500/10"
  },

  // DESIGN & CREATIVE
  {
    id: "brand-creative",
    title: "Brand Identity, Video Editing & UIUX",
    category: "Design",
    description: "Sleek, responsive, and award-winning visual identities and layouts crafted on modern design principles.",
    icon: "Layers",
    features: [
      "UI UX Design & Figma Design Systems",
      "Brand Identity & Minimalist Logo Systems",
      "Graphic Design & Creative Copywriting",
      "Video Editing & Motion Graphics",
      "Premium Investor Pitch Deck Designs"
    ],
    gradient: "from-amber-500/10 to-orange-500/5 hover:from-amber-500/20 hover:to-orange-500/10"
  },

  // BUSINESS CONSULTING
  {
    id: "business-consulting",
    title: "Business Consulting & Data Entry",
    category: "Data & Business",
    description: "Professional strategic consulting to identify automation bottlenecks, clean datasets, and audit tech infrastructure.",
    icon: "BarChart3",
    features: [
      "Business Consulting & Digital Strategy",
      "Excel Automation, Formulas & Scripts",
      "Detailed Data Entry & Database Cleanup",
      "Analytics & Dashboard Integrations",
      "Tech Stack Audits & Security Consulting"
    ],
    gradient: "from-green-500/10 to-emerald-500/5 hover:from-green-500/20 hover:to-emerald-500/10"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "medical-website",
    title: "CareFlow Modern Patient & Healthcare Portal",
    client: "MedClinic Specialist Group (USA)",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    tags: ["Healthcare Portal", "Next.js", "TailwindCSS"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    duration: "6 Weeks",
    results: "3.8% Patient booking conversion increase, 100% HIPAA-compliant data sync.",
    clientReview: {
      author: "Dr. Sarah Miller",
      role: "Clinical Director",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "TechGloze delivered a flawlessly secure patient healthcare portal. It is exceptionally fast, beautiful, and our patients love using it. Abdul is an elite developer."
    },
    liveUrl: "https://example.com/careflow-portal",
    caseStudyId: "careflow-portal-study"
  },
  {
    id: "roofing-website",
    title: "Apex Residential & Corporate Roofing Platform",
    client: "Apex Roofing Group (United Kingdom)",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1632829172672-c3258124779a?q=80&w=800&auto=format&fit=crop",
    tags: ["Roofing Website", "Framer", "Local SEO"],
    techStack: ["React", "Vite", "Framer Motion", "Tailwind CSS"],
    duration: "4 Weeks",
    results: "+180% local lead generation in the first 30 days, ranking #1 for roofing in regional SEO.",
    clientReview: {
      author: "Thomas Higgins",
      role: "Managing Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "Absolutely outstanding. The local roofing website designed by TechGloze has completely filled our scheduler. It looks premium and performs like a dream."
    },
    liveUrl: "https://example.com/apex-roofing",
    caseStudyId: "apex-roofing-study"
  },
  {
    id: "real-estate",
    title: "Elite Homes Luxury Real Estate Portal",
    client: "Elite Homes Group (United Arab Emirates)",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
    tags: ["Real Estate Website", "Next.js", "Mapbox"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Mapbox GL", "Node.js"],
    duration: "8 Weeks",
    results: "+220% listing inquiry rate, buttery-smooth interactive maps.",
    clientReview: {
      author: "Faris Al-Mazrouei",
      role: "Sales Director",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "TechGloze created a real estate website that matches the premium nature of our luxury Dubai properties. Seamless map interactions and high-retention UI."
    },
    liveUrl: "https://example.com/elite-homes",
    caseStudyId: "elite-homes-study"
  },
  {
    id: "ergonomic-shop-automation",
    title: "n8n CRM Lead Sync & Excel Automation Platform",
    client: "Ergonomic Shop (Israel)",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    tags: ["n8n", "CRM Integration", "Excel Automation"],
    techStack: ["n8n", "Make.com", "GoHighLevel", "Google Sheets API", "OpenAI"],
    duration: "5 Weeks",
    results: "Saved 45 hours weekly of manual data entries, eliminated 100% of pipeline sync delays.",
    clientReview: {
      author: "Amit Goldstein",
      role: "Operations Chief",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "Azhar Uddin engineered a flawless custom n8n lead sync system that connects our Google Sheets, HubSpot, and GoHighLevel CRM instantly. The Excel macro automations are phenomenal."
    },
    liveUrl: "https://example.com/ergonomic-automation",
    caseStudyId: "ergonomic-shop-automation-study"
  },
  {
    id: "dentist-portal",
    title: "SmileCraft Modern Orthodontic Dental Portal",
    client: "SmileCraft Clinic (USA)",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    tags: ["Dental Website", "React", "Booking API"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Calendly API", "Express"],
    duration: "4 Weeks",
    results: "+140% appointment bookings within 45 days, premium patient onboarding layout.",
    clientReview: {
      author: "Dr. Jessica Hayes",
      role: "Lead Orthodontist",
      avatar: "https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "Our new custom dental website designed by TechGloze has streamlined patient onboarding beautifully. The integrated booking system works perfectly."
    },
    liveUrl: "https://example.com/smilecraft-dental",
    caseStudyId: "smilecraft-dental-study"
  },
  {
    id: "ergonomic-shop-ads",
    title: "High-Converting Meta Ads, Google Ads & SEO Campaign",
    client: "Ergonomic Shop (Israel)",
    category: "Meta Ads",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    tags: ["Meta Ads", "Google Ads", "Technical SEO"],
    techStack: ["Meta Ads Manager", "Google Ads (PMax)", "Google Analytics 4", "SEO Audit"],
    duration: "Ongoing",
    results: "5.4x ROAS on Meta Ad campaigns, organic keyword traffic increased by 130%.",
    clientReview: {
      author: "Amit Goldstein",
      role: "Founder",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "TechGloze scaled our sales using high-performing Google and Meta ad campaigns. Our ROAS has remained above 5x, and the technical SEO has brought in incredible organic visitors."
    },
    liveUrl: "https://example.com/ergonomic-ads-seo",
    caseStudyId: "ergonomic-shop-ads-study"
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: "careflow-portal-study",
    client: "MedClinic Specialist Group (USA)",
    title: "Engineering a Highly Secure Patient Care Portal",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
    challenge: "MedClinic was struggling with slow load times on patient intake pages, data leaks from manual entries, and a confusing patient booking pipeline. They required a fully secure, beautiful portal integrated with their medical database.",
    strategy: "Our strategy centered on constructing a custom React and Next.js engine with type-safe backend integrations. The interface followed Apple's design parameters, featuring high contrast, intuitive dashboard modules, and seamless appointment calendar setups.",
    solution: "We designed and developed the CareFlow Portal. It incorporates HIPAA-compliant API validations, automated push alerts for doctors, and direct client portal integrations that reduce data entry friction by 100%.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "React"],
    process: [
      "Secure architecture blueprint & HIPAA compliance layout planning",
      "Figma high-fidelity prototype modeling",
      "Next.js frontend development with sub-second performance audits",
      "Supabase serverless secure database synchronization",
      "Launch & doctor workflow testing sessions"
    ],
    before: {
      metrics: "5.2s Intake Loading, 12% drop-off on booking, manual spreadsheet logging.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop"
    },
    after: {
      metrics: "0.4s Intake Loading, 98% patient booking completion rate, fully automated syncing.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400&auto=format&fit=crop"
    },
    results: [
      { label: "Booking Completion", value: "98%", growth: "+14% Over baseline" },
      { label: "Intake Page Speed", value: "0.4s", growth: "Sub-second load" },
      { label: "Data Integrity", value: "100%", growth: "Zero pipeline leaks" }
    ]
  },
  {
    id: "ergonomic-shop-automation-study",
    client: "Ergonomic Shop (Israel)",
    title: "Scaling Operations and CRM Pipelines with n8n & Google Sheets API",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    challenge: "Ergonomic Shop had massive manual lead routing lag. Leads coming in from Meta & Google campaigns had to be copied manually into Google Sheets, then passed to GoHighLevel CRM, leading to delayed outbound calls (up to 12 hours) and lost revenue.",
    strategy: "We built an event-driven automation strategy using n8n hosted on secure server environments. The system triggers on campaign form submissions, auto-enriches leads using custom LLM logic, updates live Excel/Google Sheet records, and logs the customer instantly into GoHighLevel CRM.",
    solution: "A robust lead integration system. Lead response time dropped from 12 hours to less than 15 seconds. High-value clients are tagged, and a dialer webhook notifies the sales representative immediately.",
    technologies: ["n8n", "Make.com", "GoHighLevel CRM", "Google Sheets API", "OpenAI"],
    process: [
      "Workflow assessment & manual data bottleneck identification",
      "n8n webhook architecture planning and secure credentials authentication",
      "GoHighLevel pipeline and custom database mapping",
      "Auto-enrichment LLM scripting installation",
      "Live environment stress-testing and automated error-alert setups"
    ],
    before: {
      metrics: "12-hour lead lag, high human data-entry errors, 22% CRM leakage.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop"
    },
    after: {
      metrics: "Under 15-second lead sync, 100% error elimination, 0% lead leakage.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop"
    },
    results: [
      { label: "Lead Sync Time", value: "<15s", growth: "Real-time routing" },
      { label: "Manual Hours Saved", value: "45h/wk", growth: "Operational efficiency" },
      { label: "Lead Leakage", value: "0%", growth: "100% CRM absorption" }
    ]
  }
];

export const BLOG_DATA: BlogArticle[] = [
  {
    id: "ai-automation-2026",
    title: "How to Build a Zero-Employee Lead Routing Workflow using n8n, OpenAI & HubSpot",
    slug: "build-zero-employee-lead-routing-workflow-n8n-openai",
    excerpt: "Ditch manual database updates. Learn step-by-step how we programmed a self-enriching lead classification pipeline that saves 30 hours weekly.",
    content: `
At TechGloze, we believe human time is too valuable to spend copying and pasting records between emails, spreadsheets, and CRMs.

In this deep dive, we outline the exact architecture we deployed for our enterprise consulting clients to automate lead scoring, CRM enrichment, and initial contact email drafting entirely without human intervention.

### The Stack
- **n8n (Self-Hosted on Cloud Run):** For secure, visual logic execution.
- **Gemini API / OpenAI:** For semantic analysis, sentiment auditing, and draft composing.
- **HubSpot CRM:** As the central data repository.
- **Google Sheets API:** As a backup audit tracker.

### Step 1: Webhook Triggering
Every time a potential client completes our project estimation form, a payload containing details (budget, project description, timeline) is transmitted to our n8n webhook.

### Step 2: Semantic enrichment via AI
Instead of generic lead scoring based on fixed keywords, n8n forwards the project brief description to Gemini. The model analyzes:
1. **Budget viability:** Is the customer's budget realistic for the scope?
2. **Intent level:** Is the user ready to book a call immediately or browsing?
3. **Primary service tag:** Categorizing into Design, Web App, Ads, or AI Automation.

### Step 3: Automated CRM Registration & Routing
The enriched variables are instantly pushed to HubSpot. High-value leads automatically trigger a Calendly invite email and generate a real-time tracking pipeline on our custom Client Portal.

### The Business Result
Our clients report a **100% elimination of routing delay**, dropping response time from 14 hours to 4 minutes. Average discovery booking rates climbed by 34%!
`,
    category: "AI & Automation",
    author: {
      name: "Azhar Uddin",
      avatar: "/src/assets/images/founder_original.jpg",
      role: "Founder"
    },
    readingTime: "5 Min Read",
    publishedAt: "July 2026",
    tags: ["Automation", "n8n", "Make.com", "AI"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "lighthouse-optimization",
    title: "The Ultimate Performance Blueprint: Achieving a 100/100 Lighthouse Rating in React",
    slug: "achieving-100-lighthouse-rating-react-vite",
    excerpt: "A comprehensive guide on dynamic imports, critical CSS embedding, image loading attributes, and why default HMR isn't your friend on production.",
    content: `
Page speed is the silent killer of modern advertising ROAS. A delay of just 1.5 seconds can slash your e-commerce conversion rates by half.

In this guide, we break down the performance checklist used at TechGloze to ensure all client landing pages and custom dashboards score a flawless 95+ or 100/100 on Lighthouse.

### 1. Dynamic Routing & Lazy Loading
Never load code the user hasn't requested. In Vite/React, wrap auxiliary components (calculators, contact sliders) in \`React.lazy()\` and load them inside a \`Suspense\` fallback container. This splits your main bundle size down to the bare essentials.

### 2. Image referrers and modern formats
Always load media from compressed CDNs, utilizing modern WebP/AVIF compression. Additionally, specify strict aspect ratios to prevent layout shifts:
\`\`\`jsx
<img src={src} loading="lazy" width={800} height={450} alt="Product" />
\`\`\`

### 3. Server-Side Asset Delivery
Deploy your applications using clean Express proxy layers (like our premium full-stack template). Serving statically compiled bundles from Cloud Run containers bypasses external request overhead and secures fast DNS lookups.
`,
    category: "Development",
    author: {
      name: "Azhar Uddin",
      avatar: "/src/assets/images/founder_original.jpg",
      role: "Founder"
    },
    readingTime: "4 Min Read",
    publishedAt: "June 2026",
    tags: ["Next.js", "React", "Optimization", "SEO"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "meta-ads-roas-scale",
    title: "Scaling Meta Campaigns to 5.4x ROAS without Increasing Creative Fatigue",
    slug: "scaling-meta-ads-roas-creative-strategy",
    excerpt: "How we structured Reel visual sequences, motion-graphic callouts, and multi-budget frameworks to generate high-value acquisitions.",
    content: `
Most agencies think scaling Meta Ads is as simple as raising the budget. They double the budget, only to watch their conversion metrics tumble into a deficit.

Here is how TechGloze scaled an e-commerce brand's monthly revenue past $140,000 using a scientific approach to creative production and campaign routing.

### The Formula: Video Psychology Over Placement
We engineered 9-second high-retention video Reels split into specific psychological segments:
1. **The Hook (0-2s):** A visual problem-focused anomaly (no voiceover, dynamic kinetic motion text).
2. **The Validation (3-5s):** Showing the solution in immediate action with clean, luxury typography.
3. **The Call-to-Action (6-9s):** A subtle, elegant hover motion showing a phone clicking 'Shop Now'.

### The Campaign Architecture
Instead of dozens of fractured ad-sets, we consolidated Meta budgets into a single Advantage+ Shopping campaign backed by 4 highly stylized core Reels creatives and a fast-loading custom landing page.
`,
    category: "Marketing",
    author: {
      name: "Azhar Uddin",
      avatar: "/src/assets/images/founder_original.jpg",
      role: "Founder"
    },
    readingTime: "6 Min Read",
    publishedAt: "May 2026",
    tags: ["Meta Ads", "Paid Traffic", "Copywriting", "Funnels"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you offer custom web applications or only standard templates?",
    answer: "Every single product delivered by TechGloze is coded completely from scratch using elite tech stacks (Next.js, React, TypeScript, and server-side Node.js). We do not use generic page builder templates. This guarantees sub-second page loads, maximum SEO performance, and security.",
    category: "Services"
  },
  {
    id: "faq-2",
    question: "How does your AI Automation and n8n/Zapier synchronization work?",
    answer: "We map out your manual workflows (e.g., manual lead entry, client intake emails, spreadsheet report building, CRM updates) and build seamless cloud automations. These systems listen to hooks, process data using AI, and update databases instantly, saving hours of human labour daily.",
    category: "AI & Automation"
  },
  {
    id: "faq-3",
    question: "How do we collaborate, track milestones, and download deliverables?",
    answer: "Our website features an integrated client portal dashboard! Once you initiate a project, you receive a secure client login to track project stages, inspect real-time progress timelines, view files, and communicate directly with Abdul.",
    category: "Collaboration"
  },
  {
    id: "faq-4",
    question: "What is your typical project timeline and cost estimate?",
    answer: "High-end corporate websites, custom dental or roofing portals, and automations are typically designed and developed within 4 to 8 weeks. Cost estimates depend entirely on your custom requirements. You can use our integrated AI Project Estimator or Website Cost Calculator on this site to receive an instant, accurate estimate.",
    category: "Pricing"
  }
];

export const DIALECTS = {
  EN: {
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      about: "Founder",
      dashboard: "Client Portal",
      tools: "Studio Labs",
      blog: "Insights",
      faq: "FAQ",
      cta: "Discovery Call"
    },
    hero: {
      badge: "AI • Digital Growth • Business Systems",
      headline: "Building Intelligent Digital Systems That Scale Modern Businesses.",
      subheadline: "Niaz Digital helps startups, agencies, coaches, and local businesses grow with high-performance websites, SEO, branding, AI automation, social media management, and business support—all under one trusted digital partner.",
      ctaPrimary: "Book a Free Consultation",
      ctaSecondary: "View Portfolio"
    }
  },
  ES: {
    nav: {
      services: "Servicios",
      portfolio: "Portafolio",
      about: "Fundador",
      dashboard: "Portal de Cliente",
      tools: "Laboratorios",
      blog: "Perspectivas",
      faq: "Preguntas",
      cta: "Llamada Gratuita"
    },
    hero: {
      badge: "★ ESTUDIO PREMIER DE DISEÑO Y AUTOMATIZACIÓN",
      headline: "Construyendo Sistemas Digitales Premium Que Escalan Negocios.",
      subheadline: "Ayudamos a empresas ambiciosas a crecer a través de sitios web premium, automatización con IA, soluciones SaaS y experiencias digitales modernas creadas para el rendimiento.",
      ctaPrimary: "Reservar Llamada",
      ctaSecondary: "Ver Portafolio"
    }
  },
  DE: {
    nav: {
      services: "Dienstleistungen",
      portfolio: "Portfolio",
      about: "Gründer",
      dashboard: "Kundenportal",
      tools: "Studio-Labor",
      blog: "Einblicke",
      faq: "FAQ",
      cta: "Erstgespräch"
    },
    hero: {
      badge: "★ PREMIER DIGITALDESIGN & AUTOMATISIERUNGSSTUDIO",
      headline: "Erstellung von Premium-Digitalsystemen zur Skalierung von Unternehmen.",
      subheadline: "Unterstützung ambitionierter Unternehmen beim Wachstum durch Premium-Websites, KI-Automatisierung, SaaS-Lösungen und moderne digitale Erlebnisse für maximale Performance.",
      ctaPrimary: "Erstgespräch buchen",
      ctaSecondary: "Portfolio ansehen"
    }
  },
  AR: {
    nav: {
      services: "الخدمات",
      portfolio: "أعمالنا",
      about: "المؤسس",
      dashboard: "بوابة العملاء",
      tools: "مختبر الاستوديو",
      blog: "المدونة",
      faq: "الأسئلة الشائعة",
      cta: "احجز جلسة استشارة"
    },
    hero: {
      badge: "★ استوديو التصميم والأتمتة الرقمي الرائد",
      headline: "بناء الأنظمة الرقمية المتميزة التي توسع نطاق الأعمال.",
      subheadline: "مساعدة الشركات الطموحة على النمو من خلال مواقع الويب المتميزة وأتمتة الذكاء الاصطناعي وحلول SaaS والتجارب الرقمية الحديثة المصممة للأداء العالي.",
      ctaPrimary: "احجز جلسة استشارة",
      ctaSecondary: "عرض المعرض"
    }
  }
};
