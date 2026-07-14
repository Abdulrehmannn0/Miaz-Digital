/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Clock, 
  ExternalLink, 
  Layers, 
  MessageSquare, 
  Play, 
  Sparkles, 
  TrendingUp, 
  X,
  FileText,
  ChevronRight
} from 'lucide-react';
import { PORTFOLIO_DATA, CASE_STUDIES_DATA } from '../data';
import { PortfolioItem, CaseStudy } from '../types';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  
  // Before / After Slider State
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    'All', 'Websites', 'Mobile Apps', 'Dashboards', 'Branding', 'Meta Ads', 'AI Automation'
  ];

  const filteredPortfolio = PORTFOLIO_DATA.filter(item => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  const handleSliderMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleOpenCaseStudy = (caseStudyId?: string) => {
    if (!caseStudyId) return;
    const study = CASE_STUDIES_DATA.find(s => s.id === caseStudyId);
    if (study) {
      setActiveCaseStudy(study);
    }
  };

  return (
    <section 
      id="portfolio" 
      className="py-24 bg-[#FFFFFF] dark:bg-[#070913] border-t border-slate-100/50 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
            Portfolio & Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Proof in metrics. Bespoke masterpieces we built that scale.
          </h2>
        </div>

        {/* Standalone Interactive Before/After Speed Comparison Bento Grid Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-center bg-white/40 dark:bg-slate-950/20 backdrop-blur-xl rounded-[32px] p-8 md:p-12 border border-white/50 dark:border-white/10 shadow-sm">
          
          <div className="col-span-1 lg:col-span-5 text-left flex flex-col gap-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-3xs font-extrabold tracking-widest text-blue-700 dark:text-blue-400 uppercase w-fit">
              <Sparkles className="w-3.5 h-3.5" /> Performance Metamorphosis
            </span>
            <h3 className="text-2xl md:text-3.5xl font-display font-black text-slate-900 dark:text-white tracking-tight">
              Before & After Optimization
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Drag the center bar slider to witness TechGloze's performance overhaul. We take bloated, slow templates (Left) and reconstruct them into optimized static Next.js/React pipelines (Right) scoring a perfect 100/100.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <TrendingUp className="w-4.5 h-4.5 text-blue-500" />
                <span>+240% Sales Conversions</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <Clock className="w-4.5 h-4.5 text-emerald-500" />
                <span>0.6s sub-second full page loads</span>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-7">
            {/* Custom Before / After Slider */}
            <div 
              ref={sliderContainerRef}
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
              className="relative w-full aspect-video rounded-[22px] overflow-hidden select-none cursor-ew-resize border border-slate-200 dark:border-slate-800 shadow-2xl"
            >
              {/* Before State (Under layer) */}
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                  alt="Legacy Slow Site" 
                  className="w-full h-full object-cover grayscale opacity-70"
                />
                <div className="absolute top-4 left-4 bg-red-600/90 text-white font-mono text-2xs px-3 py-1 rounded-full font-bold uppercase tracking-wider backdrop-blur-sm shadow-md">
                  Legacy WordPress (TTFB: 4.2s)
                </div>
              </div>

              {/* After State (Upper layer - clipped) */}
              <div 
                className="absolute inset-0"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop" 
                  alt="TechGloze Rebuilt Nextjs Site" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-600/90 text-white font-mono text-2xs px-3 py-1 rounded-full font-bold uppercase tracking-wider backdrop-blur-sm shadow-md">
                  Next.js Headless (TTFB: 0.6s)
                </div>
              </div>

              {/* Slider Center Line and Handle Trigger */}
              <div 
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border border-white font-bold select-none text-xs">
                  &larr;&rarr;
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Categories Tab selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 -mx-6 px-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold cursor-pointer whitespace-nowrap transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/25'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl rounded-[22px] border border-white/50 dark:border-white/10 shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                
                {/* Responsive Image Banner */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Video Hover indicator */}
                  <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center text-blue-600 shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>
                  {/* Technology labels overlay */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-3xs font-bold text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info & Content Body */}
                <div className="p-6 text-left flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-3xs font-extrabold text-blue-600 dark:text-blue-400 tracking-wider uppercase block mb-1">
                      {item.client}
                    </span>
                    <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    {/* Performance Metrics Highlight */}
                    <div className="px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 mb-6 flex items-center gap-3">
                      <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-2xs font-bold text-emerald-600 dark:text-emerald-400 leading-tight">
                        {item.results}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    {item.caseStudyId ? (
                      <button
                        onClick={() => handleOpenCaseStudy(item.caseStudyId)}
                        className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        Read Case Study <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <span className="text-xs text-slate-400">Case study coming soon</span>
                    )}

                    {item.liveUrl && (
                      <a 
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-blue-600"
                        title="Live Preview"
                      >
                        <ArrowUpRight className="w-4.5 h-4.5" />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Premium Fullscreen Case Study Overlay Sheet */}
        <AnimatePresence>
          {activeCaseStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCaseStudy(null)}
                className="absolute inset-0 bg-slate-950/40 dark:bg-slate-950/60 backdrop-blur-sm"
              />
              
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                className="bg-white/85 dark:bg-slate-900/75 backdrop-blur-xl border-l border-white/40 dark:border-white/10 shadow-2xl w-full max-w-2xl h-screen overflow-y-auto relative z-10 text-left p-6 md:p-10"
              >
                {/* Close Overlay Trigger */}
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="absolute right-6 top-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>

                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                  CASE STUDY ANALYSIS
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-black text-slate-900 dark:text-white leading-tight mb-6">
                  {activeCaseStudy.title}
                </h3>

                {/* Banner Hero Image */}
                <div className="w-full aspect-video rounded-[18px] overflow-hidden mb-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <img 
                    src={activeCaseStudy.heroImage} 
                    alt={activeCaseStudy.client} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Results Score Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {activeCaseStudy.results.map((res, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-500/5 border border-blue-100/40 dark:border-blue-500/10">
                      <span className="text-2xl md:text-3xl font-display font-extrabold text-blue-600 dark:text-blue-400 block">
                        {res.value}
                      </span>
                      <span className="text-3xs font-bold text-slate-500 uppercase tracking-wider block mt-1">
                        {res.label}
                      </span>
                      <span className="text-4xs text-slate-400 mt-0.5 block">
                        {res.growth}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Section Content */}
                <div className="flex flex-col gap-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-wider mb-2">The Challenge</h4>
                    <p>{activeCaseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-wider mb-2">The Strategy</h4>
                    <p>{activeCaseStudy.strategy}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-wider mb-2">The Solution</h4>
                    <p>{activeCaseStudy.solution}</p>
                  </div>
                </div>

                <hr className="border-slate-100 dark:border-slate-800 my-8" />

                {/* Implementation Phase Steps */}
                <h4 className="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-wider mb-4">Implementation Process</h4>
                <div className="flex flex-col gap-3.5 pl-4 border-l-2 border-blue-600">
                  {activeCaseStudy.process.map((step, i) => (
                    <div key={i} className="relative">
                      <span className="text-2xs font-extrabold text-blue-600 dark:text-blue-400 block mb-0.5">Phase 0{i + 1}</span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={() => setActiveCaseStudy(null)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white rounded-full cursor-pointer shadow-lg shadow-blue-500/25"
                  >
                    Finish Analysis
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
