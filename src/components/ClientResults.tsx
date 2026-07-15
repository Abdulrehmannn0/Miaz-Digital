/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  Globe, 
  Clock, 
  Users, 
  Laptop, 
  Search, 
  Share2, 
  Zap, 
  Check,
  CheckCircle2
} from 'lucide-react';

interface ServiceDetail {
  title: string;
  desc: string;
}

interface ServiceTabContent {
  id: 'web' | 'seo' | 'marketing' | 'automation';
  label: string;
  title: string;
  overview: string;
  icon: React.ComponentType<any>;
  services: ServiceDetail[];
  techStack: string[];
  deliverables: string[];
}

const SERVICE_TABS: ServiceTabContent[] = [
  {
    id: 'web',
    label: 'Web Development',
    title: 'Custom High-Performance Web Solutions',
    overview: 'Custom digital storefronts, corporate landing pages, and responsive portals engineered for speed, search-readiness, and robust user experiences.',
    icon: Laptop,
    services: [
      { title: 'Shopify Storefronts', desc: 'Custom Liquid themes, interactive video-led product pages, and advanced checkout integrations.' },
      { title: 'Headless Next.js & React', desc: 'Buttery-smooth server-side rendered (SSR) apps styled with precise Tailwind CSS for instant rendering.' },
      { title: 'Corporate WordPress & Wix', desc: 'Clean layout migrations, optimized element builders, and responsive layout configurations.' },
      { title: 'Speed & Vitals Tuning', desc: 'Elimination of render-blocking assets, code-splitting, lazy-loading, and Lighthouse score scaling.' }
    ],
    techStack: ['React', 'Next.js', 'Shopify', 'Liquid', 'WordPress', 'Wix', 'TypeScript', 'Tailwind CSS', 'Vite'],
    deliverables: ['100% Mobile Responsive Grids', 'Sub-second Resource Load Speeds', 'W3C Validated clean markup']
  },
  {
    id: 'seo',
    label: 'SEO',
    title: 'Technical & Organic Search Dominance',
    overview: 'Complete white-hat optimization plans designed to fix crawl inefficiencies, structure search metadata, and scale your organic pipeline.',
    icon: Search,
    services: [
      { title: 'Technical Audits', desc: 'Identifying crawl-budget waste, indexing blockages, server redirect errors, and link status.' },
      { title: 'On-Page Strategy', desc: 'Restructuring semantic header tags, image alt texts, and modern contextual keyword structures.' },
      { title: 'Core Web Vitals Optimization', desc: 'Improving Cumulative Layout Shift (CLS), Largest Contentful Paint (LCP), and Interaction to Next Paint (INP).' },
      { title: 'Web Console Integration', desc: 'Configuring precise sitemaps, tracking parameters, and comprehensive Google Analytics 4 event loops.' }
    ],
    techStack: ['Google Search Console', 'Google Analytics 4', 'Screaming Frog', 'PageSpeed Insights', 'JSON-LD / Schema'],
    deliverables: ['Fully Restructured Crawl Hierarchies', 'Google Indexation Verification', 'Optimized Search Snippets']
  },
  {
    id: 'marketing',
    label: 'Digital Marketing',
    title: 'Cohesive Visual Identity & Outreach',
    overview: 'Premium B2B visual asset kits, comprehensive branding guidelines, and high-converting marketing materials tailored for professional networks.',
    icon: Share2,
    services: [
      { title: 'Corporate Brand Kits', desc: 'Establishing modern type scaling, responsive vector logo variations, and strict brand color rules.' },
      { title: 'Figma & Canva Asset Pipelines', desc: 'Custom, reusable social templates, product carousels, and presentation layouts.' },
      { title: 'Social Media Strategy', desc: 'Formulating high-authority B2B LinkedIn/X campaigns and editorial content schedules.' },
      { title: 'Bite-sized Video Production', desc: 'Short-form social cuts, typographical video assets, and precise video edits matching your brand guidelines.' }
    ],
    techStack: ['Figma', 'Photoshop', 'Canva Design', 'Adobe Premiere Pro', 'CapCut', 'Meta Ads Manager'],
    deliverables: ['Custom Brand Handbook Document', 'Premium Outreach Template Kits', 'Optimized Media Campaigns']
  },
  {
    id: 'automation',
    label: 'AI Automation',
    title: 'Event-Driven Workflow Automation',
    overview: 'Connecting disparate data sources, CRM pipelines, and messaging channels to completely remove manual administrative bottlenecks.',
    icon: Zap,
    services: [
      { title: 'n8n & Make Workflow Systems', desc: 'Designing secure server-hosted workflows to sync customer inputs across web applications.' },
      { title: 'CRM Pipeline Integrations', desc: 'Automating real-time lead ingestion into GoHighLevel, HubSpot, or custom databases.' },
      { title: 'Automated Notification Hubs', desc: 'Wiring webhooks to trigger instant Slack/Email alerts, calendar bookings, and follow-up chains.' },
      { title: 'Smart API & LLM Data Prep', desc: 'Formatting spreadsheets, executing auto-lead scoring, and integrating OpenAI text models.' }
    ],
    techStack: ['n8n.io', 'Make.com', 'Zapier', 'GoHighLevel CRM', 'Google Sheets API', 'OpenAI API', 'REST Webhooks'],
    deliverables: ['Zero Manual Entry Latency', '100% CRM Pipeline Synchronization', 'Secure API Credentials Vaulting']
  }
];

export default function ClientResults() {
  const [activeTab, setActiveTab] = useState<'web' | 'seo' | 'marketing' | 'automation'>('web');

  const metricHighlights = [
    { 
      value: "40+", 
      label: "Projects Delivered", 
      desc: "Across websites, SEO, branding, automation, and digital marketing.", 
      icon: Award, 
      color: "text-blue-500 bg-blue-50 dark:bg-blue-950/20 border border-blue-500/10" 
    },
    { 
      value: "30+", 
      label: "Live Websites", 
      desc: "Built using WordPress, Shopify, Wix, React, and custom technologies.", 
      icon: Globe, 
      color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/10" 
    },
    { 
      value: "9+", 
      label: "Years of Industry Experience", 
      desc: "Helping businesses since 2016.", 
      icon: Clock, 
      color: "text-purple-500 bg-purple-50 dark:bg-purple-950/20 border border-purple-500/10" 
    },
    { 
      value: "Multi-Country", 
      label: "Global Client Network", 
      desc: "Worked with clients across India, Israel, Cambodia, UAE, UK, USA, and other international markets.", 
      icon: Users, 
      color: "text-cyan-500 bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-500/10" 
    }
  ];

  const currentTabContent = SERVICE_TABS.find(tab => tab.id === activeTab) || SERVICE_TABS[0];
  const ActiveIcon = currentTabContent.icon;

  return (
    <section 
      id="results" 
      className="py-24 bg-[#FFFFFF] dark:bg-[#070913] border-t border-slate-100/50 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3 animate-fade-in">
            Real Results. Real Projects. Real Business Growth.
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            Verified Capabilities & Genuine Impact
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            We help businesses grow through modern websites, SEO, branding, AI automation, social media management, and scalable digital systems.
          </p>
        </div>

        {/* Highlight Scorecards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metricHighlights.map((met, i) => (
            <div 
              key={i}
              className="p-6 rounded-[22px] bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-100 dark:border-slate-800/80 shadow-sm text-left flex items-start gap-4 hover:shadow-md hover:scale-[1.01] transition-all duration-300"
            >
              <div className={`p-3 rounded-xl shrink-0 ${met.color}`}>
                <met.icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-2xl font-display font-black text-slate-900 dark:text-white block">{met.value}</span>
                <span className="text-2xs font-extrabold text-slate-400 uppercase tracking-wider block mt-1 mb-1">{met.label}</span>
                <span className="text-3xs text-slate-500 dark:text-slate-400 block leading-normal">{met.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Workspace Frame */}
        <div className="bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl rounded-[28px] border border-slate-100 dark:border-slate-800/80 shadow-xl p-6 md:p-8 overflow-hidden">
          
          {/* Workspace Tabs Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-6 mb-8 gap-4">
            <div className="flex items-center gap-2 text-left w-full sm:w-auto">
              <span className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <CheckCircle2 className="w-5 h-5 animate-pulse" />
              </span>
              <div>
                <h3 className="font-display font-black text-slate-800 dark:text-white text-base">Service Showcase</h3>
                <p className="text-3xs text-slate-400">Explore authentic service pipelines and client deliverables</p>
              </div>
            </div>

            {/* Dashboard tabs */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/60 rounded-2xl sm:rounded-full w-full sm:w-auto justify-start sm:justify-end">
              {SERVICE_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl sm:rounded-full text-xs font-bold cursor-pointer transition-all w-full sm:w-auto text-left sm:text-center ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Render Active Tab Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left"
              >
                {/* Strategic Overview (Left) */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="p-1.5 rounded-md bg-blue-500/10 text-blue-500 dark:text-blue-400">
                        <ActiveIcon className="w-4.5 h-4.5" />
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-500 dark:text-blue-400">
                        Strategic Practice
                      </span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-display font-extrabold text-slate-900 dark:text-white mb-4">
                      {currentTabContent.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      {currentTabContent.overview}
                    </p>
                  </div>

                  {/* Core Toolstack */}
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-3">
                      Core Toolstack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentTabContent.techStack.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[9px] font-bold text-slate-600 dark:text-slate-300 bg-slate-100/50 dark:bg-slate-800/40 border border-slate-200/40 dark:border-slate-800 px-2 py-0.5 rounded-full font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verified Outcomes */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-3">
                      Verified Outcomes
                    </span>
                    <ul className="flex flex-col gap-2">
                      {currentTabContent.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-3xs md:text-xs text-slate-600 dark:text-slate-300 font-bold">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sub-services Grid (Right) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentTabContent.services.map((svc, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-5 md:p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-900 hover:border-blue-500/30 hover:shadow-md transition-all duration-300 group/item flex flex-col justify-between"
                    >
                      <div>
                        <h5 className="font-display font-extrabold text-sm md:text-base text-slate-800 dark:text-white mb-2 group-hover/item:text-blue-500 dark:group-hover/item:text-blue-400 transition-colors">
                          {svc.title}
                        </h5>
                        <p className="text-3xs md:text-2xs text-slate-400 dark:text-slate-400 leading-relaxed font-semibold">
                          {svc.desc}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100/30 dark:border-slate-900/40">
                        <span className="text-[9px] font-bold text-slate-400">Available Capability</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500/60 group-hover/item:text-blue-500 group-hover/item:scale-110 transition-all shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
