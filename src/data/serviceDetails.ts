export interface DetailedService {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  features: string[];
  tools: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const DETAILED_SERVICES: Record<string, DetailedService> = {
  "website-development": {
    id: "website-development",
    title: "Professional Website Design & Development",
    subtitle: "High-performance digital flagships engineered for conversions.",
    category: "Website Development",
    description: "Build fast, responsive, modern websites designed to convert visitors into customers. We blend advanced technical architecture with deep psychological layouts to ensure your site loads under a second and structures trust immediately.",
    features: [
      "Responsive Layout Architecture",
      "Conversion Rate Optimization (CRO)",
      "High-Fidelity UI/UX Prototyping",
      "Dynamic Headless Content Integrations",
      "Advanced Core Web Vitals Audits"
    ],
    tools: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    process: [
      { step: "01", title: "Discovery", desc: "Analyzing your target customer personas, business bottlenecks, and competitive positioning." },
      { step: "02", title: "Design", desc: "Developing high-fidelity custom interactive Figma mockups focusing on readability and flow." },
      { step: "03", title: "Engineering", desc: "Writing clean, modular, typed code with sub-second page loads and responsive adaptations." }
    ],
    faqs: [
      { q: "How fast will my website be?", a: "We target a Mobile Lighthouse score of 95+ and fully loaded speeds under 1.5 seconds by optimizing image formats, utilizing code-splitting, and minifying overhead structures." },
      { q: "Will I be able to update content myself?", a: "Yes. We set up flexible headless CMS endpoints or robust, modular custom editors so you can effortlessly edit copy, blogs, and images." }
    ]
  },
  "wordpress-development": {
    id: "wordpress-development",
    title: "WordPress Development",
    subtitle: "Scalable, secure, and custom-crafted WordPress ecosystems.",
    category: "Website Development",
    description: "Enterprise-grade WordPress engineering utilizing customized lightweight themes and element blocks. We completely avoid bulky page builders that bloat loading speeds, replacing them with bespoke code structures that are safe and easy to maintain.",
    features: [
      "Custom Theme & Gutenberg Blocks",
      "Advanced Database Optimization",
      "Enterprise Security Hardening",
      "Seamless API & CRM Integrations",
      "Advanced WooCommerce Customization"
    ],
    tools: ["WordPress", "PHP", "Tailwind CSS", "MySQL", "Advanced Custom Fields (ACF)"],
    process: [
      { step: "01", title: "Architecture Plan", desc: "Mapping database schemas, third-party hooks, and custom post configurations." },
      { step: "02", title: "Clean Coding", desc: "Drafting highly secure templates that avoid slow plugins and excessive page builders." },
      { step: "03", title: "Security Launch", desc: "Implementing automated backup nodes, cloudfire firewalls, and direct speed caching layers." }
    ],
    faqs: [
      { q: "Do you use pre-made templates?", a: "Never. All our WordPress websites are built from a clean canvas to guarantee pristine code, maximum security, and lightning-fast loading speeds." },
      { q: "How do you protect against hacks?", a: "We apply multi-layered security including active security plugins, cloud firewalls, custom login pathways, and automatic off-site hourly database backups." }
    ]
  },
  "shopify-development": {
    id: "shopify-development",
    title: "Shopify Store Development",
    subtitle: "Turn casual traffic into lifelong repeating e-commerce customers.",
    category: "Website Development",
    description: "We engineer premium Shopify online stores using custom Liquid templating or headless Hydrogen architecture. Our builds maximize product catalog discoverability, streamline checkout, and optimize customer lifetime value.",
    features: [
      "Bespoke Liquid Theme Development",
      "Headless Commerce & Hydrogen Integrations",
      "Seamless App Stack Audits & Customization",
      "High-Yield Dynamic Checkout Routines",
      "Automated Post-Purchase Sequences"
    ],
    tools: ["Shopify", "Liquid", "React", "GraphQL", "Tailwind CSS"],
    process: [
      { step: "01", title: "UX Map", desc: "Optimizing the shopping cart journey, filters, search discoverability, and checkout paths." },
      { step: "02", title: "Theme Crafting", desc: "Writing optimized, non-bloated Liquid templates or headless React frameworks." },
      { step: "03", title: "Integrations", desc: "Connecting payment channels, warehouse inventory endpoints, and email workflows." }
    ],
    faqs: [
      { q: "Can you migrate my store from WooCommerce or Squarespace to Shopify?", a: "Yes. We handle seamless migration of your products, customer records, order history, and URLs while fully preserving your existing Google SEO rankings." },
      { q: "Will the Shopify store load fast even with many products?", a: "Absolutely. We strictly optimize assets, lazy-load images, and audits apps to ensure the user gets a seamless click-to-cart experience." }
    ]
  },
  "custom-website-development": {
    id: "custom-website-development",
    title: "Custom Website Development",
    subtitle: "Bespoke SaaS platforms and hyper-scalable React applications.",
    category: "Website Development",
    description: "When generic CMS architectures fall short, we build robust, tailor-made SaaS dashboards, custom digital platforms, and complex database apps using modern frontend and backend frameworks.",
    features: [
      "Custom SaaS & Dashboard Architectures",
      "Robust RESTful & GraphQL Endpoints",
      "Dynamic User Roles & Secure Databases",
      "Real-Time Data Streams & Sockets",
      "Advanced Multi-Tenant Structuring"
    ],
    tools: ["Next.js", "Node.js", "Express", "Drizzle", "PostgreSQL"],
    process: [
      { step: "01", title: "Database Schema", desc: "Structuring relation maps, authorization protocols, and API scaling specs." },
      { step: "02", title: "Component Systems", desc: "Constructing typed, reusable Tailwind design primitives and state providers." },
      { step: "03", title: "Cloud Deployment", desc: "Provisioning secure Docker containers, continuous integration pipelines, and automated cloud scaling." }
    ],
    faqs: [
      { q: "Is custom development more expensive than standard templates?", a: "It is an investment in infinite scalability and complete ownership of your intellectual property, eliminating recurring plugin or platform fees." },
      { q: "How secure is custom developed code?", a: "Extremely secure. We implement strict OAuth2, encrypted JWT tokens, SQL injection preventions, and sanitization protocols." }
    ]
  },
  "landing-pages": {
    id: "landing-pages",
    title: "Landing Pages & High-Converting Funnels",
    subtitle: "Turn expensive click traffic into predictable high-ticket conversions.",
    category: "Website Development",
    description: "Precision-designed standalone pages built to sell specific services or products. We use copywriting strategies that appeal directly to user pain-points alongside frictionless forms and rapid loading speeds.",
    features: [
      "Attention-Grabbing Hero Sections",
      "Pain-Point Driven Interactive Flows",
      "Frictionless Lead Forms",
      "Continuous A/B Test Frameworks",
      "Full CRM Lead Routing Connections"
    ],
    tools: ["React", "Vite", "Tailwind CSS", "Framer Motion", "n8n"],
    process: [
      { step: "01", title: "Copywriting", desc: "Drafting compelling headlines, risk-reversal terms, and high-yielding call-to-actions." },
      { step: "02", title: "Visual Flow", desc: "Directing the user eye directly down to the conversion forms without distractions." },
      { step: "03", title: "CRM Sync", desc: "Instantly pushing sign-ups into CRM pipelines with automated text auto-triggers." }
    ],
    faqs: [
      { q: "What is an average conversion rate for your landing pages?", a: "While industry standards sit around 2-3%, our psychologically structured funnels regularly secure 10% to 25% opt-in rates depending on the traffic quality." },
      { q: "Can you integrate this with my ad campaigns?", a: "Yes, we embed pixel trackers (Meta, Google, LinkedIn) and custom webhook events to feed your ad algorithms accurate attribution data." }
    ]
  },
  "website-redesign": {
    id: "website-redesign",
    title: "Website Redesign & Modernization",
    subtitle: "Overhaul stale layouts into fast, premium brand assets.",
    category: "Website Development",
    description: "We transform dated, slow websites into modern, high-performance assets. We completely preserve your structural SEO rankings, redirect stale URLs, and overhaul user interfaces to match leading global design standards.",
    features: [
      "Total UI/UX visual modernization",
      "Preservation of Google SEO Backlink Maps",
      "Code Refactoring & Core Web Vitals Fix",
      "Mobile-Responsive Grid Overhaul",
      "Dynamic Asset Optimization"
    ],
    tools: ["Figma", "React", "Next.js", "Screaming Frog", "Tailwind CSS"],
    process: [
      { step: "01", title: "Site Audit", desc: "Analyzing high-traffic pages, bounce rates, and organic Google keyword maps to keep." },
      { step: "02", title: "Visual Elevation", desc: "Drafting a sleek, high-contrast, modern brand aesthetic that looks current and premium." },
      { step: "03", title: "Hot Swap", desc: "Replacing the old server assets with zero downtime and verified redirect links." }
    ],
    faqs: [
      { q: "Will a redesign temporarily drop my Google rankings?", a: "Not with us. We carefully map out your old URL structure and implement precise 301 redirects, ensuring you maintain your authority and search visibility." },
      { q: "How long does a website redesign take?", a: "Depending on size, a complete overhaul takes between 3 to 6 weeks from strategy to hot launch." }
    ]
  },
  "website-maintenance": {
    id: "website-maintenance",
    title: "Website Maintenance & Engineering Support",
    subtitle: "Peace of mind. Your digital flagship is always secure, fast, and online.",
    category: "Website Development",
    description: "Proactive, daily support to keep your web assets running flawlessly. We handle plugin audits, code upgrades, database tuneups, uptime checks, and coordinate swift content changes so you never worry about server bugs.",
    features: [
      "24/7 Server Uptime Monitoring",
      "Automated Hourly Cloud Backups",
      "Vulnerability & Security Audits",
      "Performance Tune-ups & Image Compression",
      "On-Demand Visual and Text Edits"
    ],
    tools: ["Cloudflare", "GitHub", "UptimeRobot", "Sentry", "AWS S3"],
    process: [
      { step: "01", title: "Integrate Support", desc: "Setting up real-time server tracking, Sentry bug notifications, and Git hooks." },
      { step: "02", title: "Optimize Base", desc: "Minifying database files and compressing high-resolution assets." },
      { step: "03", title: "Continuous Care", desc: "Conducting weekly security patches, backup routines, and rendering visual reports." }
    ],
    faqs: [
      { q: "What happens if my website goes down?", a: "Our uptime monitors notify our engineers immediately, allowing us to deploy fixes and restore the latest clean backup within minutes." },
      { q: "Do unused support hours roll over?", a: "Yes, our monthly maintenance plans are structured flexibly to accommodate your ongoing business needs." }
    ]
  },
  "seo": {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    subtitle: "Secure high-intent, repeating organic Google search traffic.",
    category: "SEO",
    description: "Stop relying on expensive paid advertising. We design comprehensive, data-driven organic ranking campaigns that put your business directly in front of buyers searching for your services.",
    features: [
      "Data-Backed Keyword Maps",
      "High-Yield Technical Auditing",
      "On-Page Semantic Optimization",
      "Authority Building & Backlinks",
      "Revenue-Driven Conversion Tracking"
    ],
    tools: ["Ahrefs", "Semrush", "Google Search Console", "Screaming Frog", "SurferSEO"],
    process: [
      { step: "01", title: "Market Scan", desc: "Deconstructing your top competitors' high-traffic keyword structures and backlink strategies." },
      { step: "02", title: "Content Maps", desc: "Structuring search-intent briefs that outclass competitor pages systematically." },
      { step: "03", title: "Authority Setup", desc: "Acquiring premium clean backlinks and local directories to build page trust." }
    ],
    faqs: [
      { q: "How long does it take to see organic results on Google?", a: "While initial technical improvements yield index crawl upticks in weeks, noticeable keyword ranking shifts generally mature in 3 to 6 months of persistent optimization." },
      { q: "Do you guarantee #1 ranking on Google?", a: "No agency can guarantee #1 rankings due to changing search algorithms. We do guarantee transparent, high-quality technical work that consistently improves organic conversion volume." }
    ]
  },
  "local-seo": {
    id: "local-seo",
    title: "Local SEO",
    subtitle: "Dominate search results in your city and target service areas.",
    category: "SEO",
    description: "Capture clients searching in your immediate vicinity. We optimize your map placements, geo-targeted service landing pages, and local citation channels to guarantee local map-pack dominance.",
    features: [
      "Google Maps-Pack Optimizations",
      "Local Citation & Directory Auditing",
      "Geo-Targeted Content & Landing Pages",
      "Automated Review Gathering Workflows",
      "Local Competitor Tracking Map"
    ],
    tools: ["BrightLocal", "Google Business Profile", "Whitespark", "Yext", "n8n"],
    process: [
      { step: "01", title: "Citation Audit", desc: "Locating and resolving duplicate and incorrect Name, Address, and Phone listings." },
      { step: "02", title: "Local Pages", desc: "Publishing customized rich service subpages specifically tailored to targeted zip codes." },
      { step: "03", title: "Review Workflows", desc: "Setting up SMS triggers that prompt satisfied clients to leave organic five-star ratings." }
    ],
    faqs: [
      { q: "Why is Local SEO important for service businesses?", a: "Over 46% of all Google searches have local intent. Securing a spot in the local Map Pack delivers immediate, high-converting leads to your phone." },
      { q: "How do you handle multiple service areas?", a: "We design individual geo-landing pages that speak specifically to each local community while remaining clear of keyword stuffing." }
    ]
  },
  "technical-seo": {
    id: "technical-seo",
    title: "Technical SEO",
    subtitle: "Ensure search engine spiders can perfectly index and crawl your code.",
    category: "SEO",
    description: "We optimize your website's under-the-hood architecture. From structured schema schemas to crawl-budget allocations, we make sure search engines understand every line of your website.",
    features: [
      "Advanced JSON-LD Schema Markup",
      "Crawl Budget & Indexing Audits",
      "Core Web Vitals Speed Overhaul",
      "Sitemap & Robots.txt Fine-Tuning",
      "Canonicalization & Hreflang Setup"
    ],
    tools: ["Screaming Frog", "Google Search Console", "Schema Generator", "PageSpeed Insights"],
    process: [
      { step: "01", title: "Crawl Sweep", desc: "Running advanced bot simulators to locate broken links, indexing loops, and redirect chains." },
      { step: "02", title: "Schema Injection", desc: "Injecting precise semantic metadata, product schemas, and organization details." },
      { step: "03", title: "Server Speed", desc: "Re-configuring host caching levels, CDNs, and file compressions to streamline indexing speeds." }
    ],
    faqs: [
      { q: "What is a crawl budget?", a: "It is the number of pages a search bot schedules to index on your site. If your code is bloated, bots leave before indexing your most important content." },
      { q: "Will you fix technical issues directly in my code?", a: "Yes. Our team consists of seasoned software engineers, not just marketers, allowing us to patch backend systems directly." }
    ]
  },
  "google-business-profile-optimization": {
    id: "google-business-profile-optimization",
    title: "Google Business Profile Optimization",
    subtitle: "Maximize phone calls and map routes directly from Google Maps.",
    category: "SEO",
    description: "We optimize, secure, and actively manage your Google Business Profile (formerly GMB). We help you climb search rankings, handle review strategies, and establish your listing as the premier option in your market.",
    features: [
      "Primary Category Selection & Audit",
      "Keyword-Rich Profile Copywriting",
      "Automated Map Post Publishing",
      "Review Management & Automated Replies",
      "Spam Competitor Listing Removals"
    ],
    tools: ["Google Business Profile", "BrightLocal", "Canva", "n8n"],
    process: [
      { step: "01", title: "Verify & Claim", desc: "Resolving profile duplicates, suspension risks, and verifying exact coordinates." },
      { step: "02", title: "Content Polish", desc: "Uploading high-resolution, geo-tagged project photos and optimized descriptions." },
      { step: "03", title: "Automation Sync", desc: "Setting up webhook triggers that instantly update and publish promo offers to your profile." }
    ],
    faqs: [
      { q: "How do you handle fake negative reviews?", a: "We monitor your profile, file official appeals with Google Support, and leverage legal and platform terms to flag and remove malicious spam ratings." },
      { q: "Will this increase my direct phone calls?", a: "Yes, optimized listings consistently see an increase in call volume, website visits, and direct driving directions." }
    ]
  },
  "social-media-management": {
    id: "social-media-management",
    title: "Social Media Management",
    subtitle: "Build a consistent online presence with professional content, strategy, and audience growth.",
    category: "Digital Marketing",
    description: "Our agency manages your social media channels end-to-end. We design premium custom visuals, write highly engaging copy, and schedule your posts to cultivate an active, authentic community that drives buyers to your brand.",
    features: [
      "Strategic Content Calendar Outlines",
      "High-Fidelity Graphic Design & Templates",
      "Short-Form Video & Reel Creation",
      "Engaging Brand Copywriting",
      "Direct Community Management & Growth"
    ],
    tools: ["Buffer", "Later", "Canva", "CapCut", "Figma"],
    process: [
      { step: "01", title: "Brand Voice", desc: "Defining your tone, visual colors, post themes, and core audience demographics." },
      { step: "02", title: "Production Batch", desc: "Writing and designing a whole month of graphics, captions, and reels." },
      { step: "03", title: "Launch & Engage", desc: "Publishing and interacting with comments and DM requests to keep algorithms active." }
    ],
    faqs: [
      { q: "Which platforms should my business focus on?", a: "It depends on where your clients congregate. B2B firms usually win on LinkedIn and Twitter, while consumer brands scale on Instagram and Facebook." },
      { q: "Do you respond to messages in my inbox?", a: "Yes, we can coordinate an agreed FAQ document and handle initial incoming customer questions to route high-intent leads directly to your sales team." }
    ]
  },
  "instagram-management": {
    id: "instagram-management",
    title: "Instagram Management",
    subtitle: "Create high-performing Reels, aesthetic feeds, and massive organic growth.",
    category: "Digital Marketing",
    description: "We optimize your Instagram grid to build massive brand authority. We specialize in producing trending Reels, high-value carousel posts, and engaging stories that turn random viewers into highly engaged followers.",
    features: [
      "Trending Reel Editing & Audio Sourcing",
      "Aesthetic Grid Visual Harmonization",
      "Story Strategies for Daily Engagement",
      "Relevant Hashtag & SEO Keyword Mapping",
      "Targeted Outreach & Collaboration Sourcing"
    ],
    tools: ["Figma", "CapCut", "Lightroom", "Instagram Analytics", "Metricool"],
    process: [
      { step: "01", title: "Grid Planning", desc: "Styling custom color presets and visual templates so your brand looks cohesive and beautiful." },
      { step: "02", title: "Video Polish", desc: "Editing hooks and captions for short-form video reels that retain viewer attention." },
      { step: "03", title: "Growth Analytics", desc: "Analyzing weekly impressions and adjust video structures based on performance metrics." }
    ],
    faqs: [
      { q: "How often should my account publish Reels?", a: "We find posting 3 to 5 optimized Reels per week is the optimal balance for maximizing algorithmic reach without sacrificing brand quality." },
      { q: "Do you film the videos for me?", a: "We provide detailed storyboard scripts and recording guides. You record simple raw videos on your phone, and our editors transform them into highly-polished content." }
    ]
  },
  "facebook-management": {
    id: "facebook-management",
    title: "Facebook Page Management & Community Building",
    subtitle: "Leverage Facebook pages and groups to foster warm, organic customer trust.",
    category: "Digital Marketing",
    description: "Scale your Facebook business presence. We handle daily posting schedules, review collection campaigns, and configure organic client-engagement patterns that convert organic reach into pipeline leads.",
    features: [
      "Strategic Facebook Page Customization",
      "Interactive Facebook Group Management",
      "Local Event & Offer Promotion Publishing",
      "Targeted Organic Local Shares",
      "Meta Business Suite Optimization"
    ],
    tools: ["Meta Business Suite", "Canva", "Buffer", "Zapier"],
    process: [
      { step: "01", title: "Page Optimization", desc: "Updating banners, buttons, auto-responders, and category parameters." },
      { step: "02", title: "Content Calendar", desc: "Drafting educational posts, local testimonials, and limited-time discount structures." },
      { step: "03", title: "Direct Interaction", desc: "Moderating community groups and protecting pages from spam." }
    ],
    faqs: [
      { q: "Is Facebook still relevant for businesses?", a: "Absolutely. With billions of active users, it remains an essential trust-verification touchpoint for local services and consumer products." },
      { q: "Do you run Facebook ads as well?", a: "Yes, we can seamlessly bundle our organic content strategy with highly targeted paid Facebook ad funnels to maximize your reach." }
    ]
  },
  "linkedin-management": {
    id: "linkedin-management",
    title: "LinkedIn Executive Brand Management",
    subtitle: "Establish professional authority and secure valuable B2B client partnerships.",
    category: "Digital Marketing",
    description: "We optimize your LinkedIn profiles to command authority in your niche. Our copywriters draft in-depth thought leadership articles, carousel decks, and industry news summaries that keep your brand visible to key decision makers.",
    features: [
      "Thought Leadership Content Writing",
      "Profile Optimization & Banner Layouts",
      "B2B Lead Magnet Custom Creation",
      "Targeted Growth Connection Outreach",
      "In-Depth Industry News Curation"
    ],
    tools: ["Taplio", "Figma", "LinkedIn Premium", "Shield App"],
    process: [
      { step: "01", title: "Position Plan", desc: "Identifying your industry expertise, corporate values, and ideal enterprise customer profiles." },
      { step: "02", title: "Ghostwriting", desc: "Drafting engaging personal and company stories that showcase actual client wins." },
      { step: "03", title: "Network Growth", desc: "Sending connection requests to industry founders and managing daily inbound leads." }
    ],
    faqs: [
      { q: "Do you write as my personal profile or my company page?", a: "We do both. Personal profiles secure 10x more organic reach, so we leverage them to humanize founders, while company pages act as a professional trust anchor." },
      { q: "How do you capture my unique voice?", a: "We run a brief onboarding interview to record your insights and turn your ideas into polished professional posts." }
    ]
  },
  "content-strategy": {
    id: "content-strategy",
    title: "Content Strategy & Growth Planning",
    subtitle: "High-yield roadmaps that guarantee your content drives real sales.",
    category: "Digital Marketing",
    description: "Stop creating random content. We build comprehensive, performance-driven roadmaps that detail exactly what content to publish, on what channels, and when, ensuring every piece of content maps to a business goal.",
    features: [
      "Competitive Content Gaps Analysis",
      "Target Persona Intent Sourcing",
      "Multi-Channel Distribution Roadmaps",
      "Lead Magnet Design & Planning",
      "Key Conversion Goal Tracking Maps"
    ],
    tools: ["Notion", "Miro", "Ahrefs", "AnswerThePublic", "Google Sheets"],
    process: [
      { step: "01", title: "Deep Research", desc: "Analyzing high-affinity customer topics, search habits, and competitive content gaps." },
      { step: "02", title: "System Setup", desc: "Structuring 90-day topics, formats, and conversion hooks." },
      { step: "03", title: "Distribution Plan", desc: "Designing simple content-repurposing pipelines (e.g., turning one blog into five tweets and three reels)." }
    ],
    faqs: [
      { q: "What is a content distribution strategy?", a: "It is the roadmap for sharing your content. Instead of just posting once, we map how to adapt and distribute a single high-quality asset across multiple social platforms." },
      { q: "How do we measure the success of a strategy?", a: "We trace metrics directly back to business outcomes: website clicks, form sign-ups, booked discovery calls, and new client acquisitions." }
    ]
  },
  "graphic-design": {
    id: "graphic-design",
    title: "Graphic Design & Digital Creative",
    subtitle: "Stunning visual elements that elevate your brand's digital presence.",
    category: "Branding",
    description: "We design premium custom graphics, marketing banners, and advertising assets. Our creative work blends aesthetic mastery with conversion principles to make sure your brand always stands out.",
    features: [
      "Custom Digital Marketing Creative",
      "High-Converting Ad Creative Layouts",
      "Aesthetic Website Graphic Elements",
      "Custom Vector Illustrations & Icons",
      "Print-Ready Marketing Asset Layouts"
    ],
    tools: ["Figma", "Adobe Illustrator", "Photoshop", "Indesign", "Canva Pro"],
    process: [
      { step: "01", title: "Visual Style", desc: "Gathering design references, styling color palettes, and selecting typography." },
      { step: "02", title: "Drafting", desc: "Designing visual layouts with clean geometry and high contrast." },
      { step: "03", title: "Deliver", desc: "Exporting clean, responsive assets across multiple formats." }
    ],
    faqs: [
      { q: "Do I get full ownership of the designs?", a: "Absolutely. Once the invoice is finalized, all design files, licensing rights, and source graphics are transferred to you." },
      { q: "Can you design matching print and physical assets?", a: "Yes, we export high-resolution vector PDFs perfect for physical business cards, banners, and packaging." }
    ]
  },
  "brand-identity": {
    id: "brand-identity",
    title: "Brand Identity & Creative Design",
    subtitle: "Complete brand guidelines to build immediate consumer trust.",
    category: "Branding",
    description: "Create a professional and memorable brand identity that builds trust. We establish a solid visual language for your business, including custom logos, color theory, typography, and comprehensive brand guidelines.",
    features: [
      "Custom Corporate Logo Designing",
      "Modern Color Palette Formulas",
      "Typography Sourcing & Pairings",
      "Detailed Brand Style Guidelines PDF",
      "Digital Asset Templates Setup"
    ],
    tools: ["Figma", "Adobe Illustrator", "Lightroom", "Brandfolder"],
    process: [
      { step: "01", title: "Brand Discovery", desc: "Defining your company's core values, market positioning, and brand personality." },
      { step: "02", title: "Concept Art", desc: "Drafting varied visual directions and custom logo variations." },
      { step: "03", title: "Guideline Book", desc: "Compiling a complete brand book detailing correct usage of assets across all channels." }
    ],
    faqs: [
      { q: "What is included in a Brand Guidelines book?", a: "It details your logo variations, clear space rules, color palettes (HEX, RGB, CMYK), typography, and examples of correct digital and print usage." },
      { q: "How long does a full brand identity design take?", a: "Typically 3 to 5 weeks of collaborative refinement from initial research to delivering finalized logo files." }
    ]
  },
  "logo-design": {
    id: "logo-design",
    title: "Bespoke Logo Design",
    subtitle: "Timeless, minimalist, and memorable logo designs.",
    category: "Branding",
    description: "We design premium, custom corporate logos that make your brand memorable. We focus on scalability and simplicity, ensuring your mark looks stunning from a tiny browser favicon to a massive physical billboard.",
    features: [
      "Custom Logo Sketching & Concepting",
      "Premium High-Resolution Vector Assets",
      "Scalable Monograms, Emblems & Wordmarks",
      "Optimized Brand Favicons & App Icons",
      "Multiple Design Directions Included"
    ],
    tools: ["Adobe Illustrator", "Figma", "Procreate", "Vectorizer"],
    process: [
      { step: "01", title: "Concept Sketches", desc: "Brainstorming and hand-sketching multiple logo concepts based on your company history." },
      { step: "02", title: "Vector Precision", desc: "Refining select concepts into precise vector paths with balanced geometry." },
      { step: "03", title: "Export Suite", desc: "Providing clean files across all essential formats (SVG, PNG, EPS, AI) for print and digital." }
    ],
    faqs: [
      { q: "What is a vector file and why do I need it?", a: "Vector files (AI, SVG, EPS) use mathematical formulas instead of pixels, allowing you to scale your logo to any size without losing crispness." },
      { q: "Can we revise the designs?", a: "Yes, we include several rounds of collaborative revisions to ensure your final logo matches your vision perfectly." }
    ]
  },
  "canva-design": {
    id: "canva-design",
    title: "Canva Template & Creative Design",
    subtitle: "Empower your in-house team with easily editable Canva templates.",
    category: "Branding",
    description: "Keep your visual identity intact while allowing your marketing team to edit assets on the fly. We design premium custom layouts inside Canva, so your staff can update social media graphics effortlessly.",
    features: [
      "Fully Customizable Social Graphics",
      "Clean Instagram Post & Reel Templates",
      "Interactive Sales PDF & Presentation Decks",
      "Easy Drag-and-Drop Image Frames",
      "Saved Brand Kits in Your Canva Account"
    ],
    tools: ["Canva Pro", "Figma", "Adobe Illustrator"],
    process: [
      { step: "01", title: "Asset Sourcing", desc: "Creating unique custom backgrounds and graphics in professional vector suites." },
      { step: "02", title: "Canva Porting", desc: "Rebuilding layouts within Canva with locked brand colors and fonts." },
      { step: "03", title: "Staff Handoff", desc: "Delivering shareable editing links alongside quick training clips." }
    ],
    faqs: [
      { q: "Do I need a Canva Pro subscription?", a: "While many designs work on free accounts, we highly recommend Canva Pro to access custom brand font uploads and transparent image exports." },
      { q: "Can my team break the designs easily?", a: "We lock key elements (logos, grid layouts, primary headers) in place to ensure your team stays on-brand while editing." }
    ]
  },
  "adobe-creative-design": {
    id: "adobe-creative-design",
    title: "Adobe Creative Suite Design",
    subtitle: "High-end visual products utilizing industry-standard creative programs.",
    category: "Branding",
    description: "Premium creative services utilizing the full power of Adobe's professional application ecosystem. We construct rich vector files, complex raster manipulations, and publish high-end layout prints.",
    features: [
      "Complex Photo Manipulations",
      "Advanced Multipage Document Layouts",
      "Bespoke High-End Vector Illustration",
      "Sleek Creative Packaging Design",
      "Print-Ready Asset Color Corrections"
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Lightroom"],
    process: [
      { step: "01", title: "Creative Brief", desc: "Reviewing specifications, print dimensions, bleed lines, and packaging margins." },
      { step: "02", title: "Art Production", desc: "Crafting pristine graphics with advanced layers, masking, and typography setups." },
      { step: "03", title: "Press Optimization", desc: "Optimizing color spaces (CMYK) and exporting print-ready PDFs." }
    ],
    faqs: [
      { q: "Do you supply source Adobe files?", a: "Yes, all our design tiers include fully layered, organized source files (.AI, .PSD, .INDD) upon request." },
      { q: "Can you coordinate with professional print shops?", a: "Yes, we talk directly with print vendors to match their specific ink limits, bleed values, and crop markings." }
    ]
  },
  "ai-automation": {
    id: "ai-automation",
    title: "AI Workflow & Business Automation",
    subtitle: "Eliminate administrative work and streamline operations using smart AI tools.",
    category: "AI Automation",
    description: "Save time and automate repetitive business tasks using modern AI tools. We build smart data structures, connect disparate web software, and configure intelligent agent endpoints that act as full-time digital employees.",
    features: [
      "Custom Automated Workflows",
      "CRM & Pipeline Integration",
      "Intelligent Lead Allocation & Alerts",
      "AI Copywriting & Drafting Tools",
      "Database & Spreadsheet Syncing"
    ],
    tools: ["n8n", "Make.com", "Zapier", "OpenAI API", "HubSpot"],
    process: [
      { step: "01", title: "Audit Bottlenecks", desc: "Analyzing your daily team tasks to locate slow data copying and repetitive steps." },
      { step: "02", title: "Build Logic", desc: "Drafting smart, self-healing api routes, webhooks, and AI pipelines." },
      { step: "03", title: "Launch & Support", desc: "Testing and deploying integrations with real-time error alerts and performance dashboards." }
    ],
    faqs: [
      { q: "What kinds of tasks can you automate?", a: "We can automate data entry, lead-scoring allocations, customer follow-up emails, document generation, and direct notifications between apps." },
      { q: "Do I have to pay for expensive software monthly?", a: "We choose cost-effective tools like self-hosted n8n or Make.com, which offer extremely low operating costs compared to other services." }
    ]
  },
  "n8n": {
    id: "n8n",
    title: "n8n Workflow Engineering",
    subtitle: "Ultra-cost-effective, custom node-based workflow integrations.",
    category: "AI Automation",
    description: "We deploy and build scalable automation webhooks using n8n. We specialize in structuring custom JavaScript functions, multi-path routing, and self-hosted environments that save thousands in automation software costs.",
    features: [
      "Custom n8n Workflow Construction",
      "Advanced Self-Hosted n8n Server Setup",
      "Custom JavaScript Code Nodes Integration",
      "Multi-Branch Decision Routing Protocols",
      "Self-Healing Error Capture Systems"
    ],
    tools: ["n8n", "JavaScript", "Docker", "REST APIs", "PostgreSQL"],
    process: [
      { step: "01", title: "Server Setup", desc: "Deploying secure, isolated n8n servers inside robust Cloud Run or VPS instances." },
      { step: "02", title: "Logic Design", desc: "Connecting webhooks, parsing JSON payloads, and coding data mutations." },
      { step: "03", title: "Test & Scale", desc: "Running load tests to ensure workflows execute perfectly under high traffic." }
    ],
    faqs: [
      { q: "Why use n8n over Zapier?", a: "n8n allows for self-hosting with zero premium tier limits, handles complex loops easily, and processes data locally for complete privacy." },
      { q: "Can we process AI requests through n8n?", a: "Yes. n8n has deep, native nodes for OpenAI, LangChain, and vector databases, making it perfect for custom AI workflows." }
    ]
  },
  "make-com": {
    id: "make-com",
    title: "Make.com Automation Architecture",
    subtitle: "Highly visual, complex, and reliable multi-app integrations.",
    category: "AI Automation",
    description: "We build advanced, clean multi-app automation pipelines on Make (formerly Integromat). We design structured scenarios utilizing webhooks, custom arrays, iterators, and direct data-transform modules.",
    features: [
      "Advanced Make Scenario Engineering",
      "Database & API Router Optimization",
      "Complex Array & Data Parsers Setup",
      "Robust Webhook Trigger Implementations",
      "Performance Optimization & Cost Audits"
    ],
    tools: ["Make.com", "JSON", "Airtable", "Webhooks", "Slack API"],
    process: [
      { step: "01", title: "Mapping Apps", desc: "Visualizing the required data paths and access levels across your applications." },
      { step: "02", title: "Scenario Drafting", desc: "Connecting modules, configuring filters, and setting up error handlers." },
      { step: "03", title: "Production Run", desc: "Activating real-time checks and compiling visual analytics on execution counts." }
    ],
    faqs: [
      { q: "Can Make handle large file processing?", a: "Yes. Make has built-in modules that let us download, compress, and move files seamlessly between cloud storage providers." },
      { q: "What happens if a scenario errors out?", a: "We configure automated 'Break' routes and real-time Slack or email alerts to catch issues and preserve your data." }
    ]
  },
  "zapier": {
    id: "zapier",
    title: "Zapier Integrations & Scaling",
    subtitle: "Connect thousands of software systems instantly with high-reliability Zaps.",
    category: "AI Automation",
    description: "Integrate your SaaS stack with the world's most popular automation platform. We build clean, modular Zap systems with code steps and webhook handlers that avoid multi-step overhead costs.",
    features: [
      "Multi-Step Multi-App Zap Engineering",
      "Zapier Formatter & Filter Optimizations",
      "Code-by-Zapier Python/JS Custom Steps",
      "Instant Webhook Trigger Deployments",
      "Active Error Catching & Auto-Replay"
    ],
    tools: ["Zapier", "Python", "JavaScript", "Google Sheets", "Trello"],
    process: [
      { step: "01", title: "Audit Apps", desc: "Reviewing your current software versions to ensure compatibility with Zapier integrations." },
      { step: "02", title: "Build Zaps", desc: "Structuring your steps, adding filters, and writing custom Javascript steps for complex data transformations." },
      { step: "03", title: "Deploy Live", desc: "Activating workflows and creating tracking sheets to monitor your daily automated tasks." }
    ],
    faqs: [
      { q: "Does Zapier support complex coding logic?", a: "Yes. Through 'Code by Zapier' steps, we write custom Python or JavaScript to clean data and parse complex APIs." },
      { q: "How do you minimize monthly Zap usage costs?", a: "We combine steps, apply smart filters, and leverage webhooks to ensure you only trigger tasks when absolutely necessary." }
    ]
  },
  "crm-automation": {
    id: "crm-automation",
    title: "CRM Architecture & Lead Automation",
    subtitle: "Convert incoming traffic into sales-ready leads automatically.",
    category: "AI Automation",
    description: "We optimize and automate your CRM platforms (HubSpot, GoHighLevel, Salesforce, Pipedrive). We build automated pipelines, lead scoring rules, and trigger email/SMS sequences that keep your prospects engaged without manual work.",
    features: [
      "Bespoke Lead Scoring Algorithms",
      "Multi-Channel Automated Follow-ups",
      "Real-Time Sales Team Deal Assignments",
      "Data Syncing with Central Dashboards",
      "Comprehensive CRM Database Auditing"
    ],
    tools: ["HubSpot", "GoHighLevel", "Salesforce", "ActiveCampaign", "Pipedrive"],
    process: [
      { step: "01", title: "Pipeline Review", desc: "Analyzing your sales funnel, deal stages, and manual bottlenecks." },
      { step: "02", title: "Workflow Setup", desc: "Coding lead assignments, calendar connections, and email triggers." },
      { step: "03", title: "Team Handoff", desc: "Testing contact records and training your sales team on their automated dashboards." }
    ],
    faqs: [
      { q: "Can this prevent leads from falling through the cracks?", a: "Yes. We configure immediate response triggers, automatic follow-ups, and notify sales reps when leads become cold." },
      { q: "Is it possible to migrate my contacts from my old CRM?", a: "Absolutely. We migrate contacts, pipeline stages, custom properties, and historic notes safely to your new platform." }
    ]
  },
  "business-workflow-automation": {
    id: "business-workflow-automation",
    title: "Business Workflow Automation",
    subtitle: "Interconnect all business operations for frictionless data flow.",
    category: "AI Automation",
    description: "We design and build complete custom integrations that connect your marketing, sales, fulfillment, and accounting departments, ensuring data moves across your company automatically.",
    features: [
      "Cross-Department Automation Plans",
      "Automated Document & Invoice Drafting",
      "Instant Multi-Channel Team Alerts",
      "Real-Time Centralized KPI Dashboards",
      "Automated Employee Onboarding Systems"
    ],
    tools: ["n8n", "Slack", "Airtable", "Google Workspace", "QuickBooks"],
    process: [
      { step: "01", title: "Map Systems", desc: "Conducting interviews to map out your company's complete daily operations." },
      { step: "02", title: "Build Connections", desc: "Constructing robust data pipes using APIs, custom scripts, and webhooks." },
      { step: "03", title: "Go Live", desc: "Activating the automated engine and setting up a dashboard to track daily savings." }
    ],
    faqs: [
      { q: "Will our team need specialized training to use this?", a: "Not at all. The automation runs in the background. Your staff simply continues using their favorite tools as they normally would." },
      { q: "How do we verify that the automated tasks ran successfully?", a: "We set up automated logging systems and direct Slack notifications to alert your team of any issues." }
    ]
  },
  "executive-virtual-assistance": {
    id: "executive-virtual-assistance",
    title: "Executive & Virtual Assistance",
    subtitle: "Reliable business support that helps founders focus on growth.",
    category: "Virtual Assistance",
    description: "Exceptional administrative support for busy founders. We organize your calendars, manage your inboxes, schedule travel, and handle repetitive administrative tasks so you can focus on growing your business.",
    features: [
      "Inbox Management & Filter Systems",
      "Calendar Management & Schedulers",
      "Professional Client Communications",
      "In-Depth Topic & Competitive Research",
      "Administrative & Database Support"
    ],
    tools: ["Google Workspace", "Outlook", "Zoom", "Slack", "Asana"],
    process: [
      { step: "01", title: "Align Tasks", desc: "Reviewing your routine, preferred email response styles, and platform setups." },
      { step: "02", title: "Setup Systems", desc: "Creating shared folder access, templates, and scheduling parameters." },
      { step: "03", title: "Daily Execution", desc: "Handling active communication, meeting schedulers, and admin tasks." }
    ],
    faqs: [
      { q: "How do we communicate daily?", a: "We connect on Slack, Microsoft Teams, or WhatsApp to handle quick updates, urgent requests, and task handoffs." },
      { q: "Are my company details and files secure?", a: "Yes, we prioritize security. We use secure password managers like 1Password and follow strict data privacy guidelines." }
    ]
  },
  "business-operations": {
    id: "business-operations",
    title: "Business Operations & Project Coordination",
    subtitle: "Optimize project timelines and team delivery frameworks.",
    category: "Virtual Assistance",
    description: "We organize your project boards, track client deadlines, coordinate team deliverables, and manage day-to-day operations to ensure your projects launch successfully and on-time.",
    features: [
      "Project Board Structuring",
      "Active Team Task Assignments",
      "Client Deadline Tracking Maps",
      "Weekly Project Analytics Reports",
      "SOP & Operations Document Drafting"
    ],
    tools: ["Trello", "Asana", "ClickUp", "Monday.com", "Notion"],
    process: [
      { step: "01", title: "Audit Workflows", desc: "Reviewing your active project boards, bottlenecks, and delivery timelines." },
      { step: "02", title: "Structure Boards", desc: "Setting up custom project boards, milestone parameters, and templates." },
      { step: "03", title: "Daily Tracking", desc: "Monitoring progress, resolving bottlenecks, and updating dashboard states." }
    ],
    faqs: [
      { q: "Can you help migrate our projects to a new PM tool?", a: "Yes, we can migrate tasks, comments, files, and users between ClickUp, Asana, Monday, and Notion while maintaining system structure." },
      { q: "How do you coordinate with our internal staff?", a: "We manage task boards, conduct stand-ups, and send friendly task reminders on Slack to keep projects moving forward." }
    ]
  },
  "marketing-systems": {
    id: "marketing-systems",
    title: "Marketing System Coordination",
    subtitle: "Manage and optimize your digital marketing campaigns end-to-end.",
    category: "Virtual Assistance",
    description: "We coordinate your marketing campaigns, schedule newsletters, monitor ad budgets, and compile marketing reports to keep your acquisition channels performing predictably.",
    features: [
      "Email Campaign Scheduling & Lists",
      "Ad Budget Tracking & Metric Logs",
      "Content Asset Scheduling Systems",
      "Marketing Performance Data Reports",
      "Affiliate & Partner Program Help"
    ],
    tools: ["Mailchimp", "Klaviyo", "Meta Ads", "Google Analytics", "Airtable"],
    process: [
      { step: "01", title: "Review Campaigns", desc: "Mapping your current marketing channels, tools, and campaign metrics." },
      { step: "02", title: "Setup Calendars", desc: "Establishing content calendars, email lists, and analytics templates." },
      { step: "03", title: "Ongoing Tracking", desc: "Publishing newsletters, updating spreadsheets, and creating visual performance reports." }
    ],
    faqs: [
      { q: "Can you write our newsletter copy?", a: "Yes, we draft engaging email copy, design templates, clean subscriber lists, and track open and click-through rates." },
      { q: "How often do you provide performance reports?", a: "We compile detailed reports weekly or monthly, highlighting key metrics like ROAS, CPC, and new lead growth." }
    ]
  }
};
