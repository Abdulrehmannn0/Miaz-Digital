/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, PortfolioItem, CaseStudy, BlogArticle, FAQItem, FounderProfile } from './types';

export const FOUNDER_DATA: FounderProfile = {
  name: "Niaz Ahmed",
  title: "Founder & Chief Digital Architect",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  bio: "A visionary digital strategist and technologist with over a decade of international experience. Niaz has engineered software architectures, designed brand experiences, and run high-converting advertising systems for hyper-growth startups and global enterprise clients. Under his leadership, NiazDigital has scales operations to support clients in over 24 countries.",
  experience: [
    "Former Lead Product Architect at Silicon Valley Tech-Ventures",
    "Advisory Board Member for European AI Automation Consortium",
    "Delivered 150+ high-end enterprise systems & visual campaigns",
    "Expert in advanced low-code integration, NextJS frameworks, & Google GenAI ecosystems"
  ],
  achievements: [
    "Awwwards Honorable Mention for Interactive Design",
    "FWA Site of the Day (Lead Technical Contributor)",
    "Managed over $4.2M in aggregate advertising spend with 4.8x average ROAS",
    "Pioneered enterprise-grade CRM and spreadsheet synchronizations used by Fortune 500 units"
  ],
  socials: {
    linkedin: "https://linkedin.com/in/niaz-digital",
    twitter: "https://twitter.com/niaz_digital",
    instagram: "https://instagram.com/niaz_digital",
    github: "https://github.com/niaz_digital"
  }
};

export const SERVICES_DATA: Service[] = [
  // DESIGN
  {
    id: "ui-ux-design",
    title: "UI / UX & Product Design",
    category: "Design",
    description: "Sleek, responsive, and award-winning visual layouts crafted on Apple design principles for ultimate conversion.",
    icon: "Layers",
    features: ["Custom Interface Design (Figma)", "Interactive Interactive Prototypes", "Design Systems & Styleguides", "Mobile & Web App wireframing", "Luxury Branding Aesthetics"],
    gradient: "from-blue-500/10 to-indigo-500/5 hover:from-blue-500/20 hover:to-indigo-500/10"
  },
  {
    id: "brand-identity",
    title: "Brand Identity & Logo Design",
    category: "Design",
    description: "Establish a luxury presence with pristine minimalist logo systems, packaging, and business presentation pitch decks.",
    icon: "Compass",
    features: ["Minimalist Logo Systems", "Brand Positioning & Guides", "Premium Packaging Design", "Investor Pitch Deck Design", "Corporate Stationery Kits"],
    gradient: "from-purple-500/10 to-pink-500/5 hover:from-purple-500/20 hover:to-pink-500/10"
  },
  
  // DEVELOPMENT
  {
    id: "web-development",
    title: "Website & Web App Development",
    category: "Development",
    description: "Blazing fast custom Next.js, React, and TypeScript applications engineered with sub-second page loads.",
    icon: "Code2",
    features: ["Custom Next.js & React Apps", "Type-safe TypeScript Architectures", "Headless CMS Integrations", "Sub-second Performance Tuning", "Tailwind CSS Layout Perfection"],
    gradient: "from-teal-500/10 to-emerald-500/5 hover:from-teal-500/20 hover:to-emerald-500/10"
  },
  {
    id: "ecommerce-development",
    title: "Shopify & WordPress E-commerce",
    category: "Development",
    description: "Premium high-converting online storefronts powered by Shopify Plus, headless Shopify APIs, or scalable WooCommerce.",
    icon: "ShoppingBag",
    features: ["Headless Commerce Architectures", "Custom Shopify Theme Development", "WordPress Enterprise Portals", "Payment Gateway Integrations", "Advanced Sales Funnel Optimizations"],
    gradient: "from-amber-500/10 to-orange-500/5 hover:from-amber-500/20 hover:to-orange-500/10"
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    category: "Development",
    description: "Stunning cross-platform iOS and Android applications developed using React Native or Flutter.",
    icon: "Smartphone",
    features: ["iOS & Android Mobile Apps", "React Native & Flutter Builds", "App Store Optimization (ASO)", "Push Notification Automation", "Offline-first Database Architectures"],
    gradient: "from-cyan-500/10 to-sky-500/5 hover:from-cyan-500/20 hover:to-sky-500/10"
  },

  // MARKETING
  {
    id: "paid-ads",
    title: "Meta, Google & LinkedIn Ads",
    category: "Marketing",
    description: "Data-backed paid advertising campaigns delivering maximum ROAS and predictable customer acquisition pipelines.",
    icon: "TrendingUp",
    features: ["Meta Ads (Facebook & Instagram)", "Google Search, Display & PMax", "LinkedIn B2B Campaign Management", "Retargeting sales funnels", "High-performance Ad Creatives"],
    gradient: "from-red-500/10 to-orange-500/5 hover:from-red-500/20 hover:to-orange-500/10"
  },
  {
    id: "seo-optimization",
    title: "SEO & Content Marketing",
    category: "Marketing",
    description: "Drive thousands of highly qualified organic visitors with local, technical, and semantic search optimization.",
    icon: "SearchCode",
    features: ["In-depth Technical SEO Audits", "Semantic Keyword Research", "Local Map Pack Optimization", "Link Building Campaigns", "Premium Content Hub Strategy"],
    gradient: "from-indigo-500/10 to-violet-500/5 hover:from-indigo-500/20 hover:to-violet-500/10"
  },
  {
    id: "reels-video-editing",
    title: "Video Editing & Reels Management",
    category: "Marketing",
    description: "Viral-engineered video editing, Instagram Reels, YouTube Shorts, and high-impact custom motion graphics.",
    icon: "Play",
    features: ["High-retention Video Editing", "Instagram Reels & TikTok Strategy", "Dynamic Kinetic Captions", "Motion Graphics & 2D FX", "SMM Calendar Synchronization"],
    gradient: "from-fuchsia-500/10 to-rose-500/5 hover:from-fuchsia-500/20 hover:to-rose-500/10"
  },

  // AI & AUTOMATION
  {
    id: "ai-automation",
    title: "AI Workflows & CRM Automation",
    category: "AI & Automation",
    description: "Supercharge your business with Zapier, n8n, Make.com integrations, Custom Chatbots, and automated workflows.",
    icon: "Cpu",
    features: ["Zapier & Make.com Integrations", "Custom n8n Enterprise Workflows", "CRM Sync (HubSpot, Salesforce)", "AI Chatbots (Gemini/OpenAI)", "Email & SMS Autoresponders"],
    gradient: "from-blue-500/10 to-purple-500/5 hover:from-blue-500/20 hover:to-purple-500/10"
  },

  // DATA & BUSINESS
  {
    id: "excel-powerbi-dashboards",
    title: "Excel, Power BI & Data Dashboards",
    category: "Data & Business",
    description: "Translate chaotic datasets into executive dashboards, robust Excel macros, and interactive Power BI charts.",
    icon: "BarChart3",
    features: ["Advanced Excel Macro Scripts", "Power BI Interactive Analytics", "Google Sheets Live Integrations", "Sales pipeline lead dashboards", "Data entry scraping automations"],
    gradient: "from-green-500/10 to-emerald-500/5 hover:from-green-500/20 hover:to-emerald-500/10"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "lux-wear",
    title: "Apex Luxury Chronograph Store",
    client: "Apex Luxury Ltd",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    tags: ["E-commerce", "Shopify Plus", "TailwindCSS"],
    techStack: ["Shopify Plus", "React", "Liquid", "Tailwind CSS"],
    duration: "6 Weeks",
    results: "+240% Ecommerce Sales Increase, 3.4% average Conversion Rate.",
    clientReview: {
      author: "Julien Mercer",
      role: "Operations Director",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "NiazDigital transformed our slow online storefront into an absolute powerhouse. The design screams prestige, and our organic conversions have never been higher."
    },
    liveUrl: "https://example.com/apex-watch",
    caseStudyId: "apex-watch-study"
  },
  {
    id: "neo-banking",
    title: "Volt Fintech Mobile App",
    client: "Volt Bank Inc",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    tags: ["Fintech", "Mobile App", "React Native"],
    techStack: ["React Native", "Node.js", "MongoDB", "Framer Motion"],
    duration: "10 Weeks",
    results: "Over 200K App Downloads in 90 days, 4.9 App Store Rating.",
    clientReview: {
      author: "Samantha Vance",
      role: "VP of Product",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "Working with Niaz felt like adding an elite engineering crew to our company. The mobile animations are as buttery smooth as Apple's native experiences."
    },
    liveUrl: "https://example.com/volt-app",
    caseStudyId: "volt-fintech-study"
  },
  {
    id: "alpha-automation",
    title: "AI CRM Pipeline Synchronization",
    client: "Alpha Logistics",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    tags: ["Make.com", "HubSpot", "OpenAI"],
    techStack: ["n8n", "Make.com", "Google Sheets API", "HubSpot CRM"],
    duration: "4 Weeks",
    results: "Saved 42 Hours of weekly manual entry, eliminated 100% of pipeline data errors.",
    clientReview: {
      author: "Robert Kowalski",
      role: "Managing Director",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "The spreadsheet automation dashboards and custom workflow systems NiazDigital deployed saved our operations team over 160 hours per month. Remarkable!"
    },
    liveUrl: "https://example.com/alpha-logistic",
    caseStudyId: "alpha-ai-study"
  },
  {
    id: "prime-meta-ads",
    title: "Scale Campaign 5.4x ROAS",
    client: "Velo Apparel",
    category: "Meta Ads",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    tags: ["Paid Ads", "Meta Marketing", "Creative Strategy"],
    techStack: ["Meta Ads Manager", "Premiere Pro", "Figma", "Google Analytics 4"],
    duration: "Ongoing",
    results: "$140,000 generated from $26,000 ad spend (5.38x ROAS).",
    clientReview: {
      author: "Marcus Chen",
      role: "Founder",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "Niaz Ahmed doesn't just run ads; he understands consumer psychology. The Reels visual creatives and landing page funnels they built converted traffic instantly."
    },
    liveUrl: "https://example.com/velo-ads",
    caseStudyId: "velo-ads-study"
  },
  {
    id: "saas-dashboard",
    title: "Sentry CyberSecurity Admin Console",
    client: "SentryCorp",
    category: "Dashboards",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["SaaS", "React Dashboard", "TailwindCSS"],
    techStack: ["Vite", "React", "Recharts", "TypeScript", "TailwindCSS"],
    duration: "8 Weeks",
    results: "Dashboard retention rose by 40%, user load time dropped by 65%.",
    clientReview: {
      author: "Elena Rostov",
      role: "CTO",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "Our complex cloud monitoring dashboard was a complete mess. Niaz designed a beautifully clean, light-filled UI with detailed real-time telemetry graphs."
    },
    liveUrl: "https://example.com/sentry-dashboard",
    caseStudyId: "sentry-dashboard-study"
  },
  {
    id: "aero-branding",
    title: "Aero Mobility Visual Identity",
    client: "Aero Drone Solutions",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
    tags: ["Brand Identity", "Pitch Deck", "Logo Design"],
    techStack: ["Figma", "Illustrator", "InDesign", "Blender 3D"],
    duration: "5 Weeks",
    results: "Helped secure $3.5M Series-A Funding with dynamic investor slide presentations.",
    clientReview: {
      author: "David Vance",
      role: "CEO & Co-Founder",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "The packaging design and corporate brand book NiazDigital compiled represent international high-end luxury. The pitch deck was a masterpiece."
    },
    liveUrl: "https://example.com/aero-brand",
    caseStudyId: "aero-branding-study"
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: "apex-watch-study",
    client: "Apex Luxury Ltd",
    title: "Engineeing A Prestige Headless Commerce Hub",
    heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    challenge: "Apex Luxury, an elite watch boutique, suffered from high bounce rates (58%) on mobile and slow server response times on standard WordPress. Their inventory tracking didn't sync with store ERPs, and high-value buyers left carts empty due to a clunky multi-step checkout workflow.",
    strategy: "Our strategy focused on transition to a headless commerce stack. By pairing Next.js with the Shopify Storefront API, we could decoupling content from checkout logic. Visual layouts were redesigned with ultra-clean luxury typography, and interactive floating watch displays utilizing 3D hover effects.",
    solution: "We designed and developed a custom high-performance headless client. We integrated Stripe API for single-click payment checkouts, set up automated CRM flows via Zapier to sync offline spreadsheets instantly, and programmed a personalized AI Chat Assistant to assist high-value customers dynamically.",
    technologies: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Vercel", "Zapier"],
    process: [
      "Strategic audit of legacy WordPress checkout flows",
      "Figma design iterations following luxury watch aesthetics",
      "Headless React database pipeline and Stripe gateway integration",
      "Automated spreadsheet sync script installation",
      "Performance optimization to reach 99/100 Lighthouse Speed Index"
    ],
    before: {
      metrics: "58% Bounce Rate, 4.2s Page Load Time, 1.1% Conversion Rate",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop"
    },
    after: {
      metrics: "18% Bounce Rate, 0.6s Page Load Time, 3.4% Conversion Rate",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop"
    },
    results: [
      { label: "Revenue Increase", value: "+240%", growth: "In 90 Days" },
      { label: "Site Performance", value: "99/100", growth: "Lighthouse Rating" },
      { label: "Average Order Value", value: "+38%", growth: "AOV Growth" }
    ]
  },
  {
    id: "volt-fintech-study",
    client: "Volt Bank Inc",
    title: "Developing The Slickest Mobile Bank in the EU",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    challenge: "Volt Fintech required an elite mobile application prototype and design language to present to the central regulatory commission of the EU. They struggled to communicate complex security features and needed extreme fluid visual layouts to captivate users.",
    strategy: "We architected a high-fidelity design system from scratch. Using React Native and Framer Motion, we focused on dynamic gesture-based dashboard transitions and luxury micro-animations that reflect high security and state-of-the-art innovation.",
    solution: "Crafted a secure banking application containing custom charts displaying spend statistics, automated push notices, and biometric authorization modules. A complementary, sleek web dashboard was compiled for corporate clients.",
    technologies: ["React Native", "TypeScript", "Node.js", "Framer Motion", "MongoDB"],
    process: [
      "Core wireframe modeling and biometric UX design",
      "Development of custom spend-chart modules in SVG",
      "Database schema synchronization for rapid account balance query",
      "Regulatory audit submission assistance with premium PDFs",
      "Successful launch of Beta on Apple TestFlight"
    ],
    before: {
      metrics: "Static Figma sketches, no real-time charts or functional logic.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop"
    },
    after: {
      metrics: "Fully functional iOS/Android app on App Store, 4.9 star feedback.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop"
    },
    results: [
      { label: "App Store Downloads", value: "200K+", growth: "First Quarter" },
      { label: "App Store Rating", value: "4.9★", growth: "Outstanding Trust" },
      { label: "Capital Raised", value: "€12.5M", growth: "Series-A Secured" }
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
At NiazDigital, we believe human time is too valuable to spend copying and pasting records between emails, spreadsheets, and CRMs.

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
      name: "Niaz Ahmed",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
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

In this guide, we break down the performance checklist used at NiazDigital to ensure all client landing pages and custom dashboards score a flawless 95+ or 100/100 on Lighthouse.

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
      name: "Niaz Ahmed",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
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

Here is how NiazDigital scaled an e-commerce brand's monthly revenue past $140,000 using a scientific approach to creative production and campaign routing.

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
      name: "Niaz Ahmed",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
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
    answer: "Every single product delivered by NiazDigital is coded completely from scratch using elite tech stacks (Next.js, React, TypeScript, and server-side Node.js). We do not use generic page builder templates. This guarantees sub-second page loads, maximum SEO performance, and security.",
    category: "Services"
  },
  {
    id: "faq-2",
    question: "How does your AI Automation and n8n/Zapier synchronization work?",
    answer: "We map out your manual workflows (e.g., manual lead entry, client intake emails, spreadsheet report building) and create seamless cloud automations. These automations listen to webhooks, process data using AI, and update databases or send updates instantly, saving hours of human labour daily.",
    category: "AI & Automation"
  },
  {
    id: "faq-3",
    question: "How do we collaborate, track milestones, and download deliverables?",
    answer: "Our website features an integrated client portal dashboard! Once you initiate a project, you receive a client login to track project stages, inspect real-time progress timelines, view files, and communicate directly with Niaz.",
    category: "Collaboration"
  },
  {
    id: "faq-4",
    question: "What is your typical project timeline and cost estimate?",
    answer: "High-end corporate websites and brand portfolios are typically designed and developed within 4 to 8 weeks. Cost estimates depend entirely on your custom requirements. You can use our integrated AI Project Estimator or Website Cost Calculator on this site to receive an instant, accurate estimate.",
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
      badge: "★ PREMIER DIGITAL DESIGN & AUTOMATION STUDIO",
      headline: "Helping Businesses Scale Through Design, Marketing & Technology.",
      subheadline: "NiazDigital is a full-service international digital agency helping startups, businesses and enterprises grow with websites, branding, AI automation, marketing and digital solutions.",
      ctaPrimary: "Start Your Project",
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
      headline: "Ayudamos a las Empresas a Escalar mediante Diseño, Marketing y Tecnología.",
      subheadline: "NiazDigital es una agencia digital internacional de servicio completo que ayuda a startups, empresas y corporaciones a crecer con sitios web, branding, automatización con IA y marketing.",
      ctaPrimary: "Iniciar Proyecto",
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
      headline: "Unternehmen skalieren durch Design, Marketing & Technologie.",
      subheadline: "NiazDigital ist eine internationale Full-Service-Digitalagentur, die Start-ups und Unternehmen mit erstklassigen Webseiten, Branding, KI-Automatisierung und Marketinglösungen unterstützt.",
      ctaPrimary: "Projekt starten",
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
      headline: "مساعدة الشركات على التوسع من خلال التصميم والتسويق والتكنولوجيا.",
      subheadline: "NiazDigital هي وكالة رقمية دولية متكاملة الخدمات تساعد الشركات الناشئة والمؤسسات على النمو من خلال مواقع الويب، الهويات التجارية، أتمتة الذكاء الاصطناعي، والتسويق.",
      ctaPrimary: "ابدأ مشروعك",
      ctaSecondary: "عرض المعرض"
    }
  }
};
