/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
  Flame,
  ChevronLeft,
  ChevronRight
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
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const lastWheelTime = React.useRef<number>(0);

  // Monitor screen size to compute precise carousel layout step widths and container width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Enable arrow-key keyboard navigation globally when interactive elements are in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement?.tagName;
      if (activeEl === 'INPUT' || activeEl === 'TEXTAREA') return;

      if (e.key === 'ArrowLeft') {
        setActiveStep(prev => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveStep(prev => Math.min(workflowStages.length - 1, prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [workflowStages.length]);

  // Handle wheel and trackpad scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleRawWheel = (e: WheelEvent) => {
      // If horizontal scroll is dominant, prevent default page scrolling
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
      }

      const now = Date.now();
      if (now - lastWheelTime.current < 350) return; // Cooldown around the animation duration (350ms)

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 15) return; // Deadzone

      if (delta > 0) {
        if (activeStep < workflowStages.length - 1) {
          setActiveStep(prev => {
            const next = Math.min(workflowStages.length - 1, prev + 1);
            if (next !== prev) lastWheelTime.current = now;
            return next;
          });
        }
      } else {
        if (activeStep > 0) {
          setActiveStep(prev => {
            const next = Math.max(0, prev - 1);
            if (next !== prev) lastWheelTime.current = now;
            return next;
          });
        }
      }
    };

    container.addEventListener('wheel', handleRawWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleRawWheel);
    };
  }, [activeStep, workflowStages.length]);

  // Swipe snapping handler
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50; // trigger offset
    if (info.offset.x < -swipeThreshold) {
      if (activeStep < workflowStages.length - 1) {
        setActiveStep(prev => prev + 1);
      }
    } else if (info.offset.x > swipeThreshold) {
      if (activeStep > 0) {
        setActiveStep(prev => prev - 1);
      }
    }
  };

  const ActiveIcon = workflowStages[activeStep].icon;
  const cardWidth = isMobile ? 280 : 320;
  const gap = isMobile ? 16 : 24;
  const stepSize = cardWidth + gap;
  const totalTrackWidth = workflowStages.length * stepSize - gap;

  // Compute centered offset for active step with viewport/container bounds clamping
  let trackOffset = 0;
  if (containerWidth > 0) {
    const targetOffset = containerWidth / 2 - (activeStep * stepSize + cardWidth / 2);
    const minOffset = Math.min(0, containerWidth - totalTrackWidth);
    trackOffset = Math.max(minOffset, Math.min(0, targetOffset));
  } else {
    trackOffset = -activeStep * stepSize;
  }

  return (
    <section 
      id="workflow" 
      className="py-24 bg-[#FFFFFF] dark:bg-[#070913] border-t border-slate-100/50 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
              Bespoke Workflow
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              Our 10-stage technical blueprint
            </h2>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              We follow a rigid, highly organized 10-step roadmap from initial consultation to continuous customer acquisition. Click the cards or use your arrow keys (← / →) to navigate.
            </p>
          </div>

          {/* Previous/Next Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                activeStep === 0
                  ? 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 opacity-40 cursor-not-allowed'
                  : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
              }`}
              title="Previous Step"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveStep(prev => Math.min(workflowStages.length - 1, prev + 1))}
              disabled={activeStep === workflowStages.length - 1}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                activeStep === workflowStages.length - 1
                  ? 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 opacity-40 cursor-not-allowed'
                  : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
              }`}
              title="Next Step"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Steps Selector */}
        <div ref={containerRef} className="relative w-full overflow-hidden py-4 px-1 mb-12">
          <motion.div
            drag="x"
            dragConstraints={{
              right: 0,
              left: Math.min(0, containerWidth - totalTrackWidth)
            }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            animate={{ x: trackOffset }}
            transition={{ ease: "easeInOut", duration: 0.35 }}
            className="flex gap-4 sm:gap-6 cursor-grab active:cursor-grabbing"
          >
            {workflowStages.map((stg, idx) => (
              <motion.div
                key={stg.num}
                onClick={() => setActiveStep(idx)}
                className={`relative flex-shrink-0 w-[280px] sm:w-[320px] p-6 sm:p-7 rounded-[28px] border text-left cursor-pointer select-none transition-all duration-350 ease-in-out ${
                  activeStep === idx
                    ? 'bg-white dark:bg-slate-900 border-blue-500 dark:border-blue-400 scale-[1.03] z-10 shadow-[0_10px_30px_rgba(59,130,246,0.2)] shadow-blue-500/10'
                    : 'bg-white/40 dark:bg-slate-900/30 border-slate-100 dark:border-slate-800/80 backdrop-blur-xl hover:-translate-y-[6px] hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-900 hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:shadow-blue-500/10'
                }`}
              >
                {/* Active highlight border glow using layoutId to animate smoothly across cards */}
                {activeStep === idx && (
                  <motion.div
                    layoutId="activeBorder"
                    className="absolute inset-0 rounded-[28px] border-2 border-blue-500 dark:border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] pointer-events-none"
                    style={{ margin: '-1px' }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-[10px] font-black tracking-widest ${activeStep === idx ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`}>
                    STAGE {stg.num}
                  </span>
                  <div className={`p-2 rounded-xl transition-all duration-300 ${activeStep === idx ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400'}`}>
                    <stg.icon className="w-4.5 h-4.5" />
                  </div>
                </div>

                <h4 className="font-display font-black text-base text-slate-900 dark:text-white mb-2 leading-tight">
                  {stg.title}
                </h4>
                <p className="text-3xs sm:text-2xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold line-clamp-2">
                  {stg.objective}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Display Panel of the Selected Workflow Step (Content Card) */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-slate-950 rounded-[32px] p-8 md:p-12 border border-slate-100 dark:border-slate-800/80 shadow-2xl shadow-slate-100/40 dark:shadow-none relative overflow-hidden"
            >
              
              {/* Subtle light background bloom */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
                
                {/* Left overview */}
                <div className="col-span-1 lg:col-span-5 text-left flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      initial={{ scale: 0.8, rotate: -5 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="p-4 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/20"
                    >
                      <ActiveIcon className="w-6.5 h-6.5" />
                    </motion.div>
                    <div>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-extrabold uppercase tracking-widest font-mono">
                        Phase {workflowStages[activeStep].num}
                      </span>
                      <h3 className="font-display font-black text-2xl md:text-3xl text-slate-900 dark:text-white mt-1.5 leading-tight">
                        {workflowStages[activeStep].title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-semibold">
                    {workflowStages[activeStep].objective}
                  </p>

                  <hr className="border-slate-100 dark:border-slate-900" />

                  {/* Founder Insight Box */}
                  <div className="p-6 rounded-[24px] bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-100 dark:border-slate-800/40 shadow-sm">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-[10px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                        Azhar Uddin's Advisory Insight
                      </span>
                    </div>
                    <p className="text-2xs sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic font-medium">
                      "{workflowStages[activeStep].founderInsight}"
                    </p>
                  </div>
                </div>

                {/* Right deliverables Checklist */}
                <div className="col-span-1 lg:col-span-7 text-left flex flex-col gap-6">
                  <span className="text-[10px] font-extrabold tracking-widest text-slate-400 dark:text-slate-500 uppercase block">
                    Core Phase Deliverables
                  </span>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {workflowStages[activeStep].deliverables.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.25 }}
                        className="p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20 backdrop-blur-md border border-slate-100 dark:border-slate-800/60 shadow-sm flex flex-col gap-3 group hover:border-blue-500/40 dark:hover:border-blue-500/30 hover:shadow-md transition-all duration-300"
                      >
                        <span className="w-7 h-7 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center text-xs shadow-inner">
                          {index + 1}
                        </span>
                        <span className="text-xs md:text-sm font-semibold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-5 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50/10 dark:bg-slate-950/30">
                    <span className="text-2xs sm:text-xs text-slate-400 dark:text-slate-500 font-semibold leading-tight">
                      Ready to initiate the Discovery phase with Azhar Uddin?
                    </span>
                    <a
                      href="https://wa.me/919012403699"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer shrink-0"
                    >
                      <span>Start Phase 01</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
