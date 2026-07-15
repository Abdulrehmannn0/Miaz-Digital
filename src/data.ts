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
  {
    id: "website-development",
    title: "Professional Website Design & Development",
    category: "Website Development",
    description: "Build fast, responsive, modern websites designed to convert visitors into customers.",
    icon: "Code2",
    features: [
      "Business Websites",
      "Landing Pages",
      "WordPress Websites",
      "Shopify Stores",
      "Website Maintenance"
    ],
    gradient: "from-blue-500/10 to-indigo-500/5 hover:from-blue-500/20 hover:to-indigo-500/10"
  },
  {
    id: "digital-marketing",
    title: "Social Media Management",
    category: "Digital Marketing",
    description: "Build a consistent online presence with professional content, strategy, and audience growth.",
    icon: "TrendingUp",
    features: [
      "Content Planning",
      "Content Creation",
      "Reels & Graphics",
      "Social Media Strategy",
      "Community Management"
    ],
    gradient: "from-cyan-500/10 to-sky-500/5 hover:from-cyan-500/20 hover:to-sky-500/10"
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    category: "SEO",
    description: "Increase your visibility on Google with technical SEO and content optimization.",
    icon: "SearchCode",
    features: [
      "Website SEO",
      "Local SEO",
      "Google Business Profile",
      "Keyword Research",
      "Technical SEO"
    ],
    gradient: "from-teal-500/10 to-emerald-500/5 hover:from-teal-500/20 hover:to-emerald-500/10"
  },
  {
    id: "ai-automation",
    title: "AI Workflow & Business Automation",
    category: "AI Automation",
    description: "Save time and automate repetitive business tasks using modern AI tools.",
    icon: "Cpu",
    features: [
      "ChatGPT Integration",
      "n8n Automation",
      "Make.com Workflows",
      "Zapier Automation",
      "CRM Automation"
    ],
    gradient: "from-purple-500/10 to-pink-500/5 hover:from-purple-500/20 hover:to-pink-500/10"
  },
  {
    id: "branding",
    title: "Brand Identity & Creative Design",
    category: "Branding",
    description: "Create a professional and memorable brand identity that builds trust.",
    icon: "Layers",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Marketing Materials",
      "Canva Templates"
    ],
    gradient: "from-amber-500/10 to-orange-500/5 hover:from-amber-500/20 hover:to-orange-500/10"
  },
  {
    id: "virtual-assistance",
    title: "Executive & Virtual Assistance",
    category: "Virtual Assistance",
    description: "Reliable business support that helps founders focus on growth.",
    icon: "Smartphone",
    features: [
      "Email Management",
      "Calendar Management",
      "Client Communication",
      "Research",
      "Administrative Support"
    ],
    gradient: "from-green-500/10 to-emerald-500/5 hover:from-green-500/20 hover:to-green-500/10"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "ergonomic-shop-automation",
    title: "n8n CRM Lead Sync & Excel Automation Platform",
    client: "Ergonomic Shop",
    category: "AI Automation",
    image: "/src/assets/images/ergonomic_after_design_1784125895477.jpg",
    tags: ["n8n", "CRM Integration", "Excel Automation"],
    techStack: ["n8n", "Make", "Zapier", "GoHighLevel", "Google Sheets API", "OpenAI"],
    duration: "5 Weeks",
    results: "Saved 45 hours weekly of manual data entries, eliminated 100% of pipeline sync delays.",
    countryBadge: "Israel",
    industryBadge: "Wellness & Retail",
    projectType: "CRM & Workflow Automation",
    servicesUsed: ["AI Automation", "Business Automation", "CRM Automation", "Workflow Automation"],
    shortDescription: "Engineered an event-driven n8n system to instantly sync incoming campaign leads with GoHighLevel CRM and automated Google Sheets, completely removing manual entry delays.",
    liveUrl: "https://ergonomic-shop.co.il",
    caseStudyId: "ergonomic-shop-automation-study",
    clientReview: {
      author: "Amit Goldstein",
      role: "Operations Chief",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "Azhar Uddin engineered a flawless custom n8n lead sync system that connects our Google Sheets, HubSpot, and GoHighLevel CRM instantly. The macro automations are phenomenal."
    }
  },
  {
    id: "mt-massage-chair",
    title: "Premium E-Commerce Store Design & Speed Tuning",
    client: "MT Massage Chair",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fce6e?q=80&w=800&auto=format&fit=crop",
    tags: ["Shopify Store", "UX Optimization", "Responsive Design"],
    techStack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "Photoshop"],
    duration: "6 Weeks",
    results: "Enhanced checkout speed, seamless mobile responsive grids, and improved overall User Experience.",
    countryBadge: "Israel",
    industryBadge: "Luxury Wellness",
    projectType: "E-Commerce Storefront",
    servicesUsed: ["Website Design", "Website Development", "Shopify Development", "Website Speed Optimization"],
    shortDescription: "Constructed a custom-tailored luxury Shopify store featuring deep responsive optimization, gorgeous video-led hero sections, and integrated discount modules.",
    liveUrl: "https://mtmassage.co.il",
    caseStudyId: "mt-massage-chair-study",
    clientReview: {
      author: "Michael T.",
      role: "Managing Director",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "The new Shopify store is visually stunning and incredibly fast. Our checkout conversion improved immediately, and Niaz Digital handled everything with extreme precision."
    }
  },
  {
    id: "teddy-shop",
    title: "Interactive E-Commerce Platform & Catalogue Optimization",
    client: "Teddy Shop",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1559251606-c623743a6d76?q=80&w=800&auto=format&fit=crop",
    tags: ["Shopify Store", "Branding Assets", "Inventory Sync"],
    techStack: ["Shopify", "Liquid", "Canva", "Figma", "CSS"],
    duration: "4 Weeks",
    results: "Modern visual aesthetic, optimized content organization, and fluid mobile navigation.",
    countryBadge: "Israel",
    industryBadge: "Toys & Hobby Retail",
    projectType: "Shopify Storefront",
    servicesUsed: ["Website Design", "Shopify Development", "Content Strategy", "Canva Design"],
    shortDescription: "Delivered a fun, high-performance toy retail platform with customized filtering mechanisms, intuitive cart slide-outs, and a scalable product catalogue.",
    liveUrl: "https://teddyshop.co.il",
    caseStudyId: "teddy-shop-study",
    clientReview: {
      author: "Roni S.",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "Niaz Digital built a gorgeous storefront that our customers love. Navigating our teddy collection has never been this smooth. Speed is incredible!"
    }
  },
  {
    id: "techgloze",
    title: "Corporate Brand System & Modern Web Assets Layout",
    client: "TechGloze",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    tags: ["Brand Strategy", "Figma Design", "Visual Identity"],
    techStack: ["Figma", "Photoshop", "Canva", "Branding & Identity"],
    duration: "3 Weeks",
    results: "Unified corporate visual system, complete visual guidelines handbook, and high-performance design assets.",
    countryBadge: "Global",
    industryBadge: "Software Services",
    projectType: "Brand Identity Design",
    servicesUsed: ["Branding", "Logo Design", "Visual Identity", "Marketing Assets", "Canva Design"],
    shortDescription: "Constructed a comprehensive brand kit with vector logos, color rules, type pairs, and customized Canva templates to keep outreach consistent and highly professional.",
    liveUrl: "https://techgloze.com",
    caseStudyId: "techgloze-branding-study",
    clientReview: {
      author: "Alon R.",
      role: "Chief Marketing Officer",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "Niaz Digital helped us elevate our entire corporate presentation. The visual consistency and branding handbook they crafted are masterpieces."
    }
  },
  {
    id: "niaz-digital",
    title: "Agency Operating System & Client Dashboard Ecosystem",
    client: "Niaz Digital",
    category: "Business Operations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["n8n Workflows", "CRM Systems", "Lead Automation"],
    techStack: ["n8n", "Make", "Zapier", "GoHighLevel", "Next.js", "Tailwind CSS"],
    duration: "Ongoing",
    results: "100% automated lead scoring, dynamic project boards sync, and unified scheduling pipeline.",
    countryBadge: "Global",
    industryBadge: "Professional Services",
    projectType: "Business OS & Automation",
    servicesUsed: ["AI Automation", "Business Automation", "CRM Automation", "Lead Automation", "Workflow Automation"],
    shortDescription: "Designed and built our very own agency automated ecosystem linking contact triggers, customer onboarding docs, real-time Slack alarms, and smart follow-up queues.",
    liveUrl: "https://niazdigital.com",
    caseStudyId: "niaz-digital-study",
    clientReview: {
      author: "Azhar Uddin",
      role: "Founder & Growth Strategist",
      avatar: "/src/assets/images/founder_original.jpg",
      rating: 5,
      comment: "By automating our lead tracking and workspace synchronization, we completely freed up our executive calendars to focus exclusively on client growth delivery."
    }
  },
  {
    id: "tesseract-academy",
    title: "Technical SEO Scaling & Core Web Vitals Tuning",
    client: "Tesseract Academy",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    tags: ["SEO Audit", "Core Web Vitals", "Technical SEO"],
    techStack: ["WordPress", "Google Search Console", "Google Analytics 4", "SEO Audit"],
    duration: "8 Weeks",
    results: "Significant improvement in technical site architecture, SEO score increase, and optimized code delivery.",
    countryBadge: "United Kingdom",
    industryBadge: "EdTech & Consulting",
    projectType: "SEO Optimization Campaign",
    servicesUsed: ["SEO", "Technical SEO", "On Page SEO", "Website Speed Optimization"],
    shortDescription: "Executed a high-impact technical SEO overhaul, correcting broken crawl hierarchies, page loading speed parameters, and structuring search-friendly semantic content layouts.",
    liveUrl: "https://tesseractacademy.com",
    caseStudyId: "tesseract-academy-study",
    clientReview: {
      author: "Dr. Stylianos Kampakis",
      role: "CEO & Academic Director",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "Niaz Digital handled our technical SEO audit and speed tuning with extreme care. The depth of their diagnostic insights and performance adjustments was exceptional."
    }
  },
  {
    id: "the-data-scientist",
    title: "Bespoke Content Strategy & Social Asset Optimization",
    client: "The Data Scientist",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["Content Strategy", "Social Media Graphics", "Video Editing"],
    techStack: ["Canva", "Photoshop", "Figma", "Video Editing"],
    duration: "6 Weeks",
    results: "Polished visual content guidelines, custom presentation layouts, and a refined brand identity presence on LinkedIn.",
    countryBadge: "United Kingdom",
    industryBadge: "Consulting & Training",
    projectType: "Social Media & Visual Strategy",
    servicesUsed: ["Social Media Management", "Content Strategy", "Canva Design", "Video Editing"],
    shortDescription: "Formulated a specialized LinkedIn/X asset content pipeline with bespoke grid patterns, custom carousel themes, and short-form videos matching premium editorial standards.",
    liveUrl: "https://thedatascientist.com",
    caseStudyId: "the-data-scientist-study",
    clientReview: {
      author: "Stylianos K.",
      role: "Chief Executive",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "Niaz Digital has a stellar grasp of visual social presence. They turned complex data concepts into gorgeous, bite-sized carousels and highly engaging short-form assets."
    }
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: "ergonomic-shop-automation-study",
    client: "Ergonomic Shop",
    title: "n8n Lead Sync & Google Sheets API Automation Setup",
    heroImage: "/src/assets/images/ergonomic_after_design_1784125895477.jpg",
    challenge: "Ergonomic Shop was facing critical routing lag. High-value inbound leads from Meta and Google Ads were manual copied over, causing up to a 12-hour response lag, resulting in dropped client interest and high CRM leakage.",
    strategy: "We built an event-driven automation blueprint hosted on a secure cloud. Leads trigger webhooks on form submissions, get parsed/enriched automatically, register instantly in Google Sheets, and log direct profiles into GoHighLevel CRM.",
    solution: "A custom real-time lead synchronization matrix utilizing n8n, API keys, and custom field logic, providing immediate team notifications on hot leads.",
    technologies: ["n8n", "Make", "Zapier", "GoHighLevel CRM", "Google Sheets API", "OpenAI"],
    process: [
      "Audited manual entry bottlenecks and lead-to-call response delay parameters.",
      "Configured secure webhook receivers to consume incoming form payloads instantly.",
      "Coded n8n data mapper nodes to sanitize and structure custom client fields.",
      "Integrated live spreadsheets sync with error-handling mechanisms.",
      "Built GoHighLevel automations for instant agent alerts and rapid dialers."
    ],
    before: {
      metrics: "12-hour average response delay, 22% CRM lead leakage.",
      image: "/src/assets/images/ergonomic_before_1784125089716.jpg"
    },
    after: {
      metrics: "Under 15 seconds sync duration, 0% lead leakage, 100% data integrity.",
      image: "/src/assets/images/ergonomic_after_design_1784125895477.jpg"
    },
    results: [
      { label: "Lead Routing Time", value: "<15s", growth: "Real-time dispatch" },
      { label: "CRM Lead Leakage", value: "0%", growth: "100% absorption" },
      { label: "Manual Labours Saved", value: "45h/wk", growth: "Streamlined focus" }
    ],
    overview: "Successfully integrated fragmented marketing channels with central sales CRMs, completely erasing pipeline overheads.",
    services: ["AI Automation", "Business Automation", "CRM Automation", "Workflow Automation"],
    screenshots: [
      "/src/assets/images/ergonomic_before_1784125089716.jpg",
      "/src/assets/images/ergonomic_after_design_1784125895477.jpg"
    ],
    gallery: [
      "/src/assets/images/ergonomic_after_design_1784125895477.jpg"
    ],
    testimonial: {
      author: "Amit Goldstein",
      role: "Operations Chief, Ergonomic Shop",
      comment: "Azhar Uddin engineered a flawless custom n8n lead sync system. Our sales representatives receive campaign notifications instantly, maximizing checkout conversions."
    },
    relatedProjectIds: ["niaz-digital", "mt-massage-chair"]
  },
  {
    id: "mt-massage-chair-study",
    client: "MT Massage Chair",
    title: "Premium Luxury Shopify Development & Speed Tuning",
    heroImage: "https://images.unsplash.com/photo-1598550476439-6847785fce6e?q=80&w=1200&auto=format&fit=crop",
    challenge: "MT Massage Chair required a premium, high-converting digital storefront that reflects their luxury product range while delivering exceptional checkout speeds and buttery-smooth layouts.",
    strategy: "Designed a clean, content-oriented architecture built directly within Shopify Liquid. Optimized render-blocking assets, compressed high-resolution video streams, and built fully responsive product grids.",
    solution: "A luxury, fast, responsive Shopify storefront integrated with local payment options and optimized user navigation.",
    technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "Photoshop"],
    process: [
      "Designed dynamic UX wireframes with a mobile-first premium layout.",
      "Optimized theme asset pipelines and streamlined heavy custom font scripts.",
      "Implemented responsive lazy-loaded image grids to eliminate layout shifts.",
      "Constructed custom Shopify Liquid sections for flexible content blocks.",
      "Conducted complete end-to-end checkout and speed tuning audits."
    ],
    before: {
      metrics: "Confusing navigation structure, slow checkout response, basic mobile support."
    },
    after: {
      metrics: "Modern Visual Design, Improved User Experience, and Responsive Across Devices."
    },
    results: [
      { label: "Lighthouse Speed Index", value: "95+", growth: "Sub-second load" },
      { label: "User Interface Standard", value: "Luxury", growth: "Premium layout" },
      { label: "Mobile Optimization", value: "100%", growth: "Responsive across devices" }
    ],
    overview: "Delivered an elite e-commerce storefront with high contrast typography, intuitive filters, and optimized speed that reflects the brand's luxury identity.",
    services: ["Website Design", "Website Development", "Shopify Development", "Website Speed Optimization"],
    screenshots: [
      "https://images.unsplash.com/photo-1598550476439-6847785fce6e?q=80&w=800&auto=format&fit=crop"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1598550476439-6847785fce6e?q=80&w=800&auto=format&fit=crop"
    ],
    testimonial: {
      author: "Michael T.",
      role: "Managing Director, MT Massage Chair",
      comment: "The new Shopify store is visually stunning and incredibly fast. Our checkout conversion improved immediately, and Niaz Digital handled everything with extreme precision."
    },
    relatedProjectIds: ["ergonomic-shop-automation", "teddy-shop"]
  },
  {
    id: "teddy-shop-study",
    client: "Teddy Shop",
    title: "Interactive E-Commerce Platform & Catalogue Optimization",
    heroImage: "https://images.unsplash.com/photo-1559251606-c623743a6d76?q=80&w=1200&auto=format&fit=crop",
    challenge: "Teddy Shop had an outdated, hard-to-navigate product layout. Customers struggled to browse categories, and the catalog loaded slowly on mobile devices, resulting in low average order values.",
    strategy: "Reorganized the visual catalogue hierarchy, built clean slide-out filters, designed cheerful engaging branding assets, and implemented robust mobile responsive navigation.",
    solution: "A modern, highly-engaging Shopify store optimized for quick discoverability, instant card actions, and automated inventory sync.",
    technologies: ["Shopify", "Liquid", "Canva", "Figma", "CSS"],
    process: [
      "Redesigned the entire category structure for fluid collection browsing.",
      "Engineered clean slider filters and quick-add sliding carts.",
      "Optimized theme asset weights using vector-styled graphic designs.",
      "Configured automated stock sync workflows between warehouses.",
      "Executed performance optimization sweeps for rapid mobile page loads."
    ],
    before: {
      metrics: "Complex navigation hierarchy, slow loading catalog, high cart abandonment."
    },
    after: {
      metrics: "Improved User Experience, Modern Visual Design, and Optimized Content Structure."
    },
    results: [
      { label: "Mobile Page Load", value: "0.8s", growth: "Fluid rendering" },
      { label: "Content Organization", value: "Polished", growth: "Easy discoverability" },
      { label: "Shopping Flow", value: "Optimal", growth: "High usability" }
    ],
    overview: "Turned an outdated toy store catalog into a fun, responsive, and seamless checkout experience that drives higher user retention.",
    services: ["Website Design", "Shopify Development", "Content Strategy", "Canva Design"],
    screenshots: [
      "https://images.unsplash.com/photo-1559251606-c623743a6d76?q=80&w=800&auto=format&fit=crop"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1559251606-c623743a6d76?q=80&w=800&auto=format&fit=crop"
    ],
    testimonial: {
      author: "Roni S.",
      role: "Product Manager, Teddy Shop",
      comment: "Niaz Digital built a gorgeous storefront that our customers love. Navigating our teddy collection has never been this smooth. Speed is incredible!"
    },
    relatedProjectIds: ["mt-massage-chair", "techgloze"]
  },
  {
    id: "techgloze-branding-study",
    client: "TechGloze",
    title: "Corporate Brand System & Modern Web Assets Layout",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    challenge: "TechGloze required a modernized, cohesive corporate brand system. They lacked clear guidelines on fonts, logo variations, color ratios, and social outreach assets, leading to inconsistent marketing materials.",
    strategy: "Conducted brand strategy sessions to map out tech-forward, minimal visual styling guidelines. Handcrafted vectors, primary logo sets, cohesive typography rules, and premium marketing templates in Figma and Canva.",
    solution: "A complete, enterprise-level Brand Guidelines system featuring dynamic marketing asset layouts and modern typography pairings.",
    technologies: ["Figma", "Photoshop", "Canva", "Branding & Identity"],
    process: [
      "Conducted extensive brand analysis and font-pairing strategy boards.",
      "Handcrafted vector logo suites (Primary, Stacked, and Dark variants).",
      "Created official color guidelines and brand identity handbook.",
      "Designed high-conversion pitch decks and marketing presentation pages.",
      "Engineered flexible Canva outreach templates for routine updates."
    ],
    before: {
      metrics: "Inconsistent visual assets, disjointed social media posts, outdated presentation deck."
    },
    after: {
      metrics: "Modern Visual Design, SEO Foundation Implemented, and Scalable Architecture."
    },
    results: [
      { label: "Brand Uniformity", value: "100%", growth: "Completely aligned" },
      { label: "Assets Provided", value: "40+", growth: "High resolution templates" },
      { label: "Aesthetic Appeal", value: "Premium", growth: "Apple/Vercel style" }
    ],
    overview: "Built a visually arresting brand system that ensures TechGloze remains consistently elite and corporate across all digital and real-world touchpoints.",
    services: ["Branding", "Logo Design", "Visual Identity", "Marketing Assets", "Canva Design"],
    screenshots: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
    ],
    testimonial: {
      author: "Alon R.",
      role: "Chief Marketing Officer, TechGloze",
      comment: "Niaz Digital helped us elevate our entire corporate presentation. The visual consistency and branding handbook they crafted are masterpieces."
    },
    relatedProjectIds: ["the-data-scientist", "niaz-digital"]
  },
  {
    id: "niaz-digital-study",
    client: "Niaz Digital",
    title: "Agency Operating System & Client Dashboard Ecosystem",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    challenge: "As Niaz Digital scaled, manual workflow tracking, booking management, and project status synchronization began taking up valuable advisory hours, slowing down overall delivery timelines.",
    strategy: "Constructed an event-driven automation framework. Linked client portals directly to CRM nodes and automated backends, ensuring instantly synchronized project schedules, calendar invites, and status boards.",
    solution: "A bespoke, lightning-fast agency operations portal syncing real-time milestones, slack alerts, and file distributions.",
    technologies: ["n8n", "Make", "Zapier", "GoHighLevel", "Next.js", "Tailwind CSS"],
    process: [
      "Mapped internal client lifecycle stages and operational choke points.",
      "Coded robust webhook channels between calendar nodes and status APIs.",
      "Designed premium, minimal glassmorphic portal layouts in Tailwind.",
      "Wrote custom n8n nodes for secure client logging and file transfers.",
      "Configured automatic Slack alerts for team coordination and client updates."
    ],
    before: {
      metrics: "Manual milestone updating, disjointed task tracking, calendar sync delays."
    },
    after: {
      metrics: "Scalable Architecture, Improved Content Structure, and Business Ready."
    },
    results: [
      { label: "Milestone Logging", value: "Auto", growth: "Instant syncing" },
      { label: "Task Coordination", value: "Seamless", growth: "Unified workspace" },
      { label: "Onboarding Flow", value: "<2 Min", growth: "Fully automated" }
    ],
    overview: "Optimized operational capacity by building our own bespoke, modern business operating infrastructure, saving significant manual labor hours weekly.",
    services: ["AI Automation", "Business Automation", "CRM Automation", "Lead Automation", "Workflow Automation"],
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    ],
    testimonial: {
      author: "Azhar Uddin",
      role: "Founder, Niaz Digital",
      comment: "By automating our lead tracking and workspace synchronization, we completely freed up our executive calendars to focus exclusively on client growth delivery."
    },
    relatedProjectIds: ["ergonomic-shop-automation", "techgloze"]
  },
  {
    id: "tesseract-academy-study",
    client: "Tesseract Academy",
    title: "Technical SEO Scaling & Core Web Vitals Tuning",
    heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    challenge: "Tesseract Academy's educational portal had technical structural issues hindering Google indexation, combined with slow Core Web Vitals metrics that affected mobile organic reach.",
    strategy: "Conducted deep technical SEO index audits. Restructured header tags, fixed overlapping scripts, corrected metadata rules, and optimized server-side caching schemas to boost page performance.",
    solution: "A high-performance technical SEO audit and speed optimization sweep, restoring crawlability and ranking potential.",
    technologies: ["WordPress", "Google Search Console", "Google Analytics 4", "SEO Audit"],
    process: [
      "Executed comprehensive site audit mapping structural and crawl blockages.",
      "Eliminated heavy render-blocking styles and script delays.",
      "Corrected semantic metadata systems and JSON-LD schema layers.",
      "Optimized site loading parameters to score high on PageSpeed Insights.",
      "Established proper monitoring loops in Search Console and GA4."
    ],
    before: {
      metrics: "Render-blocking delays, confusing page hierarchies, crawl errors."
    },
    after: {
      metrics: "SEO Foundation Implemented, Performance Optimized, and Responsive Across Devices."
    },
    results: [
      { label: "Core Web Vitals", value: "Green", growth: "Optimal speeds" },
      { label: "Site Speed Score", value: "90+", growth: "High indexing rate" },
      { label: "Crawl Inefficiencies", value: "0", growth: "Clean diagnostics" }
    ],
    overview: "Optimized search visibility by implementing professional SEO foundation standards and speeding up asset responses across all pages.",
    services: ["SEO", "Technical SEO", "On Page SEO", "Website Speed Optimization"],
    screenshots: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
    ],
    testimonial: {
      author: "Dr. Stylianos Kampakis",
      role: "CEO & Academic Director, Tesseract Academy",
      comment: "Niaz Digital handled our technical SEO audit and speed tuning with extreme care. The depth of their diagnostic insights and performance adjustments was exceptional."
    },
    relatedProjectIds: ["the-data-scientist", "niaz-digital"]
  },
  {
    id: "the-data-scientist-study",
    client: "The Data Scientist",
    title: "Bespoke Content Strategy & Social Asset Optimization",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    challenge: "The Data Scientist needed a highly polished, visually authoritative social presence on professional platforms like LinkedIn to highlight expert research without looking generic or cluttered.",
    strategy: "Formulated an elegant content strategy based on minimal modern grids. Developed customized slide carousels, clean diagram vectors, and optimized text structures that communicate technical complexity simply.",
    solution: "A bespoke social media identity kit and high-end visual design assets tailored for corporate B2B engagement.",
    technologies: ["Canva", "Photoshop", "Figma", "Video Editing"],
    process: [
      "Analyzed audience demographics and competitor visual layout sets.",
      "Designed minimalist typographic templates for slide presentations.",
      "Established unified branding palettes matching corporate themes.",
      "Built short-form visual video assets using clean typography callouts.",
      "Set up dynamic templates in Canva for smooth daily publishing workflows."
    ],
    before: {
      metrics: "Disjointed visual standards, basic post engagement, time-consuming layouts."
    },
    after: {
      metrics: "Modern Visual Design, Improved Content Structure, and Scalable Architecture."
    },
    results: [
      { label: "Outreach Aesthetic", value: "Premium", growth: "Editorial grade" },
      { label: "Engagement Flow", value: "Polished", growth: "High B2B response" },
      { label: "Outreach Speed", value: "Dynamic", growth: "Fast templating" }
    ],
    overview: "Completely restructured professional visual outreach with a high-end, scannable style guide that establishes technical leadership.",
    services: ["Social Media Management", "Content Strategy", "Canva Design", "Video Editing"],
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    ],
    testimonial: {
      author: "Stylianos K.",
      role: "Chief Executive, The Data Scientist",
      comment: "Niaz Digital has a stellar grasp of visual social presence. They turned complex data concepts into gorgeous, bite-sized carousels and highly engaging short-form assets."
    },
    relatedProjectIds: ["tesseract-academy", "techgloze"]
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
