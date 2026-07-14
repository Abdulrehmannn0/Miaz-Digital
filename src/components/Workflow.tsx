/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  Target, 
  FileText, 
  Layers, 
  Brush, 
  Code, 
  ShieldCheck, 
  Rocket, 
  LineChart, 
  Flame 
} from 'lucide-react';

interface Stage {
  num: string;
  title: string;
  objective: string;
  icon: any;
  deliverables: string[];
  founderInsight: string;
}

export default function Workflow() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const workflowStages: Stage[] = [
    {
      num: "01",
      title: "Discovery",
      objective: "Deep dive consultation to audit legacy systems and establish numeric business growth benchmarks.",
      icon: MapPin,
      deliverables: ["Legacy Site & Performance Audit", "Functional Requirement Document", "Calculated Timeline Target Matrix"],
      founderInsight: "Many startups rush code before identifying bottlenecks. We never write a single import line until we map your existing data pipeline and database schemas."
    },
    {
      num: "02",
      title: "Research",
      objective: "Deconstruct your top 5 global competitors, analyze search semantic patterns, and map high-value leads.",
      icon: Target,
      deliverables: ["SEO Semantic Opportunity Report", "Competitor Visual Matrix", "Conversion Leak Analysis"],
      founderInsight: "Finding high-converting visual and semantic cues within your competitor's marketing funnels gives us a concrete roadmap to outrank and outperform them."
    },
    {
      num: "03",
      title: "Strategy",
      objective: "Formulate a comprehensive growth blueprint, mapping exact software architectures and Meta creative ad scripts.",
      icon: FileText,
      deliverables: ["Product Specification Blueprint", "Paid Ad Copywriting & Hook Scripting", "Automation Logic Flowcharts"],
      founderInsight: "This is the architectural blueprint. We define whether you need Next.js static rendering, n8n webhook synchronizations, or simple headless Shopify structures."
    },
    {
      num: "04",
      title: "Wireframe",
      objective: "Establish precise visual hierarchies and responsive layouts in low-fidelity gray models.",
      icon: Layers,
      deliverables: ["Low-fidelity Figma layouts", "Inbound lead user-journey routing", "Button and CTAs placement guide"],
      founderInsight: "UX wireframing ensures page grids emphasize information structure over visual noise. Every scroll section is engineered to lead toward a discovery call."
    },
    {
      num: "05",
      title: "Design",
      objective: "Translate low-fidelity models into pristine high-fidelity design prototypes mimicking luxury Apple/Stripe aesthetics.",
      icon: Brush,
      deliverables: ["Figma High-Fidelity Master System", "Blender 3D Asset Mockups", "Comprehensive Brand Stylebook"],
      founderInsight: "Visual design is where our creative direction excels. We choose typography pairings and micro-interactions that communicate instant authority."
    },
    {
      num: "06",
      title: "Development",
      objective: "Engineers code the approved designs into blazing-fast custom TypeScript/Next.js/React pipelines.",
      icon: Code,
      deliverables: ["Clean type-safe TypeScript files", "Tailwind CSS responsive layouts", "Serverless API integration"],
      founderInsight: "No page builders. No bloated plugins. Every button hover, state change, and page transition is hand-compiled for supreme speed indexes."
    },
    {
      num: "07",
      title: "Testing",
      objective: "Execute rigid multi-browser responsiveness diagnostics, Lighthouse speed metrics, and schema code validation.",
      icon: ShieldCheck,
      deliverables: ["Lighthouse Speed audit scores (95+)", "Durable SSL & Security configuration", "Cross-device UX verification"],
      founderInsight: "We test code under throttled slow-3G network conditions. If your mobile checkout fails to render within 1.5 seconds, we optimize the bundle weights."
    },
    {
      num: "08",
      title: "Launch",
      objective: "Safely deploy compiled bundles to lightning-fast cloud servers (Vercel, AWS, Cloud Run) and hook up active domains.",
      icon: Rocket,
      deliverables: ["Cloud Run static servers setup", "Clean DNS redirect execution", "Active CRM routing webhook launch"],
      founderInsight: "Launch day is seamless. Because our backend server.ts layers handle static serving gracefully, cold starts are eliminated completely."
    },
    {
      num: "09",
      title: "Optimization",
      objective: "Deploy real-time hotjar user-recording tracking, monitor GA4 metrics, and optimize conversions.",
      icon: LineChart,
      deliverables: ["Live User Scroll Heatmaps", "GA4 conversion trigger audits", "A/B copywriting experiments"],
      founderInsight: "A web app is a living system. We audit actual visitor scrolls and make micro-design adjustments to button padding and headlines to capture lost conversions."
    },
    {
      num: "10",
      title: "Growth",
      objective: "Launch Meta Ads, Google PMax campaigns, and Technical SEO blogs to flood your pipeline with high-value leads.",
      icon: Flame,
      deliverables: ["Meta Ads scaling campaigns", "SEO Content optimization", "Monthly performance revenue audit"],
      founderInsight: "With a pristine, blazing-fast web infrastructure now live, your customer acquisition spend delivers maximum ROAS without leakage."
    }
  ];

  const ActiveIcon = workflowStages[activeStep].icon;

  return (
    <section 
      id="workflow" 
      className="py-24 bg-[#FFFFFF] dark:bg-[#070913] border-t border-slate-100/50 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
            Bespoke Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            Our 10-stage technical blueprint. Crafted to perfection.
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            We follow a rigid, highly organized 10-step roadmap from initial consultation to continuous customer acquisition. Click through the progressive timeline milestones below to explore our operational methodology.
          </p>
        </div>

        {/* Clickable Progressive Stepping timeline bar */}
        <div className="flex items-center gap-1.5 md:gap-3 overflow-x-auto pb-6 mb-12 -mx-6 px-6 no-scrollbar border-b border-slate-100 dark:border-slate-800">
          {workflowStages.map((stg, idx) => (
            <button
              key={stg.num}
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border font-mono transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeStep === idx
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 font-bold scale-[1.03]'
                  : 'bg-slate-50 dark:bg-slate-900/40 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <span className={`text-2xs ${activeStep === idx ? 'text-blue-200' : 'text-blue-500'}`}>{stg.num}</span>
              <span className="text-xs font-sans font-semibold">{stg.title}</span>
            </button>
          ))}
        </div>

        {/* Display Panel of the Selected Workflow Step */}
        <div className="bg-white/40 dark:bg-slate-950/20 backdrop-blur-xl rounded-[32px] p-8 md:p-12 border border-white/50 dark:border-white/10 shadow-sm relative overflow-hidden">
          
          {/* Subtle light background bloom */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            
            {/* Left overview */}
            <div className="col-span-1 lg:col-span-5 text-left flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="p-3.5 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/20">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 block">PHASE {workflowStages[activeStep].num}</span>
                  <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white mt-0.5">{workflowStages[activeStep].title}</h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                {workflowStages[activeStep].objective}
              </p>

              <hr className="border-slate-200/60 dark:border-slate-800/60 my-2" />

              {/* Founder Insight Box */}
              <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-3xs font-extrabold tracking-wider text-slate-400 uppercase">Abdul Rehman's Advisory Insight</span>
                </div>
                <p className="text-2xs text-slate-500 dark:text-slate-400 leading-relaxed italic">
                  "{workflowStages[activeStep].founderInsight}"
                </p>
              </div>
            </div>

            {/* Right deliverables Checklist */}
            <div className="col-span-1 lg:col-span-7 text-left flex flex-col gap-4">
              <span className="text-3xs font-bold tracking-widest text-slate-400 uppercase">Core Phase Deliverables</span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workflowStages[activeStep].deliverables.map((item, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm flex flex-col gap-2 group hover:border-blue-500 dark:hover:border-blue-500/40 transition-colors duration-200"
                  >
                    <span className="w-5.5 h-5.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center text-3xs">
                      {index + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-3xs text-slate-400 leading-tight">Ready to initiate the Discovery phase with Abdul Rehman?</span>
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer flex items-center gap-1 shrink-0"
                >
                  Start Phase 01 &rarr;
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
