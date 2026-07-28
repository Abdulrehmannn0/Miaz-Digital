import { TeamMember } from '../types';

export interface TeamCounterStat {
  value: string;
  label: string;
}

export const TEAM_COUNTERS: TeamCounterStat[] = [
  { value: "8+", label: "Team Members" },
  { value: "40+", label: "Projects" },
  { value: "30+", label: "Live Websites" },
  { value: "50+", label: "Brands Managed" },
  { value: "2016", label: "Professional Journey" }
];

export const TEAM_CATEGORIES = [
  "All",
  "Development",
  "Design",
  "SEO",
  "Marketing",
  "AI",
  "Operations",
  "Content",
  "Social Media"
] as const;

export const FOUNDER_MEMBER: TeamMember = {
  id: "azhar-uddin",
  name: "Azhar Uddin",
  role: "Founder & Digital Growth Strategist",
  country: "India",
  photo: "/src/assets/images/founder_original.jpg",
  experience: "Professional Journey Since 2016",
  skills: [
    "Business Strategy",
    "AI Automation",
    "WordPress",
    "Shopify",
    "SEO",
    "Brand Strategy",
    "Social Media",
    "Client Consulting"
  ],
  category: "Operations",
  description: "Leading Niaz Digital with a focus on building intelligent digital systems that help businesses grow through websites, branding, AI automation, SEO and scalable business operations.",
  availability: "Available for Strategy & Advisory",
  linkedin: "https://www.linkedin.com/in/azhar-uddin-766522a7",
  email: "azhar@niazdigital.com",
  isFounder: true,
  verifiedBadge: "Verified Founder",
  journeyBadge: "2016 Journey"
};

export const TEAM_MEMBERS: TeamMember[] = [
  FOUNDER_MEMBER,
  {
    id: "abdul-rehman",
    name: "Abdul Rehman",
    role: "Web Developer",
    country: "India",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    experience: "2+ Years",
    skills: [
      "WordPress",
      "Shopify",
      "Wix",
      "Elementor",
      "WooCommerce",
      "Custom HTML",
      "CSS",
      "JavaScript",
      "Performance Optimization",
      "Responsive Design"
    ],
    category: "Development",
    availability: "Available for Projects",
    linkedin: "https://www.linkedin.com/in/abdul-rehman-7aa096422",
    email: "abdul@niazdigital.com"
  },
  {
    id: "farman-ali",
    name: "Farman Ali",
    role: "Senior Social Media Manager",
    country: "India",
    experience: "3+ Years",
    skills: [
      "Instagram Growth",
      "Facebook Marketing",
      "LinkedIn Marketing",
      "Pinterest",
      "Threads",
      "YouTube",
      "Content Calendar",
      "Community Management",
      "Analytics",
      "Meta Business Suite"
    ],
    category: "Social Media",
    availability: "Active Campaign Lead",
    linkedin: "https://www.linkedin.com/company/niaz-digital"
  },
  {
    id: "nida-azhar",
    name: "Nida Azhar",
    role: "SEO Specialist",
    country: "India",
    experience: "1+ Years",
    skills: [
      "Technical SEO",
      "On Page SEO",
      "Keyword Research",
      "Google Search Console",
      "RankMath",
      "Schema",
      "Content Optimization",
      "Internal Linking",
      "SEO Audit"
    ],
    category: "SEO",
    availability: "Available for Audits",
    linkedin: "https://www.linkedin.com/company/niaz-digital"
  },
  {
    id: "suhail-saifi",
    name: "Suhail Saifi",
    role: "Performance Marketing Specialist",
    country: "India",
    experience: "1+ Years",
    skills: [
      "Meta Ads",
      "Lead Generation",
      "Google Ads",
      "Pixel Setup",
      "Conversion Tracking",
      "Campaign Optimization",
      "Retargeting",
      "ROAS Improvement"
    ],
    category: "Marketing",
    availability: "Managing Live Campaigns",
    linkedin: "https://www.linkedin.com/company/niaz-digital"
  },
  {
    id: "amaan-saifi",
    name: "Amaan Saifi",
    role: "Graphic Designer",
    country: "India",
    experience: "1+ Years",
    skills: [
      "Brand Identity",
      "Canva",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Social Media Design",
      "Presentation Design",
      "Print Design",
      "Creative Direction"
    ],
    category: "Design",
    availability: "Taking Creative Briefs",
    linkedin: "https://www.linkedin.com/company/niaz-digital"
  },
  {
    id: "adil-saifi",
    name: "Adil Saifi",
    role: "Content Research Specialist",
    country: "India",
    experience: "2+ Years",
    skills: [
      "Market Research",
      "Competitor Analysis",
      "AI Research",
      "Keyword Research",
      "Content Strategy",
      "Prompt Engineering",
      "Industry Research"
    ],
    category: "Content",
    availability: "Active Research Sprints",
    linkedin: "https://www.linkedin.com/company/niaz-digital"
  },
  {
    id: "fareed-saifi",
    name: "Fareed Saifi",
    role: "Data Operations Specialist",
    country: "India",
    experience: "4+ Years",
    skills: [
      "Data Entry",
      "Excel",
      "Google Sheets",
      "CRM Management",
      "Database Management",
      "Quality Assurance",
      "Documentation"
    ],
    category: "Operations",
    availability: "Quality Assurance Active",
    linkedin: "https://www.linkedin.com/company/niaz-digital"
  },
  {
    id: "hammad",
    name: "Hammad",
    role: "AI Automation Assistant",
    country: "India",
    experience: "Support Team",
    skills: [
      "n8n",
      "Make",
      "Zapier",
      "Workflow Automation",
      "API Integration",
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    category: "AI",
    availability: "24/7 Automation Sync",
    isSupport: true
  },
  {
    id: "afshan",
    name: "Afshan",
    role: "Client Success Executive",
    country: "India",
    experience: "Support Team",
    skills: [
      "Client Communication",
      "Project Coordination",
      "Documentation",
      "Scheduling",
      "Meeting Management",
      "Customer Support"
    ],
    category: "Operations",
    availability: "Onboarding New Clients",
    isSupport: true
  },
  {
    id: "emir",
    name: "Emir",
    role: "Future Innovator",
    country: "India",
    experience: "Youngest Member ❤️",
    skills: [
      "Curiosity",
      "Spark",
      "Innovation",
      "Joy"
    ],
    category: "Support",
    description: "Youngest Member of the Niaz Digital Family ❤️",
    specialNote: "Youngest Member of the Niaz Digital Family ❤️ - No professional responsibilities. Just a fun family touch.",
    availability: "Spreading Joy ❤️",
    isSupport: true
  }
];
