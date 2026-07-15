/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
  ChevronRight,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { PORTFOLIO_DATA, CASE_STUDIES_DATA } from '../data';
import { PortfolioItem, CaseStudy } from '../types';

export default function Portfolio() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  
  // Before / After Slider State
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDraggingRef.current = true;
    updateSliderPosition(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    updateSliderPosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const updateSliderPosition = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const categories = [
    'All', 'Web Development', 'SEO', 'Social Media', 'Branding', 'AI Automation', 'Business Operations'
  ];

  const filteredPortfolio = PORTFOLIO_DATA.filter(item => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-center bg-white/40 dark:bg-slate-950/20 backdrop-blur-xl rounded-[32px] p-8 md:p-12 border border-slate-100 dark:border-slate-800 shadow-sm">
          
          <div className="col-span-1 lg:col-span-5 text-left flex flex-col gap-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-3xs font-extrabold tracking-widest text-blue-700 dark:text-blue-400 uppercase w-fit">
              <Sparkles className="w-3.5 h-3.5" /> Real Client Case Study
            </span>
            <h3 className="text-2xl md:text-3.5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Website Transformation That Increased Performance & User Experience
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              One of our recent projects involved improving the digital experience of Ergonomic Shop, a leading massage chair retailer. Our work focused on improving user experience, website structure, navigation, content organization, SEO foundation, and overall performance while maintaining the brand identity. The optimized version demonstrates how thoughtful design and technical improvements can significantly enhance business growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Website UX & Interface Improvement</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Navigation & Structure Optimization</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Better SEO Foundation</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Faster Performance Optimization</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Mobile Responsive Improvements</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Improved Conversion-Oriented Layout</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigate('/portfolio/ergonomic-shop')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 transition-all duration-200 cursor-pointer group"
              >
                <span>View Full Case Study</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-7 select-none">
            {/* Custom Before / After Slider macOS Browser Mockup */}
            <div className="relative group/slider rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.01] active:scale-[1.005]">
              {/* Browser Chrome Header bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/80" />
                </div>
                <div className="flex-1 max-w-xs md:max-w-md mx-4">
                  <div className="w-full bg-white dark:bg-slate-950 text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500 px-3 py-1 rounded-md text-center font-mono border border-slate-200/50 dark:border-slate-800/50 truncate flex items-center justify-center gap-1">
                    <span className="text-slate-300 dark:text-slate-700">https://</span>
                    <span className="font-semibold text-slate-600 dark:text-slate-400 transition-all duration-300">
                      {sliderPosition > 50 ? 'ergonomic-shop.co.il' : 'ergonomic.shop'}
                    </span>
                  </div>
                </div>
                <div className="w-12 shrink-0 flex justify-end gap-1 text-slate-400 dark:text-slate-600">
                  <span className="text-xs">&bull;&bull;&bull;</span>
                </div>
              </div>

              {/* Interactive Comparison Stage */}
              <div 
                ref={sliderContainerRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                className="relative w-full aspect-[16/10] sm:aspect-video overflow-hidden cursor-ew-resize select-none bg-slate-100 dark:bg-slate-900"
              >
                {/* AFTER State (Modern Redesign screenshot) - Under layer */}
                <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900">
                  <img 
                    src="/src/assets/images/ergonomic_after_design_1784125895477.jpg" 
                    alt="After Redesign" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none"
                  />
                </div>

                {/* BEFORE State (Old Outdated Site screenshot) - Upper layer (clipped) */}
                <div 
                  className="absolute inset-0 select-none pointer-events-none"
                  style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                >
                  <img 
                    src="/src/assets/images/ergonomic_before_1784125089716.jpg" 
                    alt="Before Redesign" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none"
                  />
                </div>

                {/* Static Badges - placed on top of everything inside the stage */}
                <div className="absolute top-4 left-4 bg-red-600 text-white font-sans text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shadow-md z-30 select-none pointer-events-none">
                  BEFORE
                </div>
                <div className="absolute top-4 right-4 bg-emerald-600 text-white font-sans text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shadow-md z-30 select-none pointer-events-none">
                  AFTER
                </div>

                {/* Slider separator handle line */}
                <div 
                  className="absolute inset-y-0 w-0.5 bg-white cursor-ew-resize flex items-center justify-center z-20"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white flex items-center justify-center shadow-2xl border-2 border-white font-semibold select-none transition-transform duration-200 cursor-ew-resize">
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                    </svg>
                  </div>
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
                className="group relative flex flex-col justify-between bg-white dark:bg-slate-950/40 backdrop-blur-xl rounded-[32px] border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 overflow-hidden"
              >
                
                {/* Responsive Image Banner */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Absolute Badge Overlays */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                    <div className="flex gap-1.5 items-center">
                      {item.countryBadge && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-800 dark:text-slate-100 bg-white/90 dark:bg-slate-900/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-100/20 shadow-sm">
                          <Globe className="w-3 h-3 text-blue-500" />
                          {item.countryBadge}
                        </span>
                      )}
                      {item.industryBadge && (
                        <span className="inline-flex items-center text-[10px] font-bold text-white bg-blue-600/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                          {item.industryBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.projectType && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center text-[9px] font-extrabold text-white bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {item.projectType}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info & Content Body */}
                <div className="p-6 md:p-8 text-left flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400 tracking-widest uppercase block mb-1">
                      {item.client}
                    </span>
                    <h3 className="font-display font-extrabold text-lg md:text-xl text-slate-900 dark:text-white leading-tight mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    {item.shortDescription && (
                      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                        {item.shortDescription}
                      </p>
                    )}

                    {/* Services Provided Badges */}
                    {item.servicesUsed && item.servicesUsed.length > 0 && (
                      <div className="mb-4">
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                          Services Provided
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.servicesUsed.map((svc, sIdx) => (
                            <span key={sIdx} className="text-[9px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-500/10 border border-blue-100/10 dark:border-blue-500/10 px-2 py-0.5 rounded-full">
                              {svc}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack Badges */}
                    {item.techStack && item.techStack.length > 0 && (
                      <div className="mb-6">
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                          Technology Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.techStack.map((tech, tIdx) => (
                            <span key={tIdx} className="text-[9px] font-bold text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 px-2 py-0.5 rounded-full font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Performance Metrics Highlight */}
                    <div className="px-4 py-3 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 mb-6 flex items-center gap-2.5">
                      <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-2xs font-bold text-emerald-600 dark:text-emerald-400 leading-tight">
                        {item.results}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                    {item.liveUrl ? (
                      <a 
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
                        title="Live Website"
                      >
                        <span>Live Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <div className="flex items-center justify-center py-3 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        Offline
                      </div>
                    )}

                    {item.caseStudyId ? (
                      <button
                        onClick={() => handleOpenCaseStudy(item.caseStudyId)}
                        className="flex items-center justify-center gap-1.5 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-blue-500/10 hover:shadow-lg transition-all cursor-pointer text-center"
                      >
                        <span>Case Study</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <div className="flex items-center justify-center py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        Coming Soon
                      </div>
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
