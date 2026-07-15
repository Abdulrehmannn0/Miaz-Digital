import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Clock, 
  TrendingUp, 
  Sparkles, 
  ArrowRight,
  Eye,
  CheckCircle2,
  FileText,
  ChevronRight,
  Globe,
  ArrowUpRight,
  X
} from 'lucide-react';
import { PORTFOLIO_DATA, CASE_STUDIES_DATA } from '../data';
import { PortfolioItem, CaseStudy } from '../types';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

export default function PortfolioPage() {
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

  const handleOpenCaseStudy = (caseStudyId?: string) => {
    if (!caseStudyId) return;
    const study = CASE_STUDIES_DATA.find(s => s.id === caseStudyId);
    if (study) {
      setActiveCaseStudy(study);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateMetaTags({
      title: "Our Work & Masterpieces | Niaz Digital",
      description: "View the portfolio of premium website builds, custom SEO optimizations, brand systems, and automated pipelines designed by Niaz Digital.",
      canonicalUrl: window.location.href,
      ogImage: logoImg
    });
  }, []);

  const categories = [
    'All', 'Web Development', 'SEO', 'Social Media', 'Branding', 'AI Automation', 'Business Operations'
  ];

  const filteredPortfolio = PORTFOLIO_DATA.filter(item => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] dark:bg-[#070913] min-h-screen relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Flagship
          </button>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
            Bespoke Case Studies
          </span>
          <h1 className="text-4xl md:text-6.5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-none mb-6">
            Our Works Gallery.
          </h1>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            Explore premium websites, high-speed applications, brand designs, and advanced automations constructed by Niaz Digital. We let our actual delivery metrics tell the story.
          </p>
        </div>

        {/* Before/After Optimization Slider Bento Grid Block */}
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

        {/* Portfolio Controls */}
        <div className="flex items-center gap-1.5 max-w-full overflow-x-auto no-scrollbar pb-8 border-b border-slate-100 dark:border-slate-900 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 ${
                selectedCategory === cat 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10' 
                  : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/40 dark:hover:bg-slate-900/80 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
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

        {/* Dynamic Case Study Sheet Overlay Modal */}
        <AnimatePresence>
          {activeCaseStudy && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4 md:p-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-4xl bg-white dark:bg-slate-950 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden text-left max-h-[85vh] flex flex-col"
              >
                {/* Modal Sticky Header */}
                <div className="p-6 border-b border-slate-100 dark:border-slate-900 flex items-center justify-between bg-white dark:bg-slate-950 sticky top-0 z-10">
                  <div>
                    <span className="text-3xs font-black uppercase tracking-widest text-blue-500">Case Study Strategic Blueprint</span>
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-white truncate max-w-lg">{activeCaseStudy.title}</h4>
                  </div>
                  <button 
                    onClick={() => setActiveCaseStudy(null)}
                    className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Scrollable Content Body */}
                <div className="p-8 md:p-12 overflow-y-auto flex-grow flex flex-col gap-10">
                  
                  {/* Challenge & Solution Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <span className="text-3xs font-black uppercase tracking-wider text-red-500 block mb-3">The Challenge</span>
                      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{activeCaseStudy.challenge}</p>
                    </div>
                    <div>
                      <span className="text-3xs font-black uppercase tracking-wider text-emerald-500 block mb-3">The Solution</span>
                      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{activeCaseStudy.solution}</p>
                    </div>
                  </div>

                  {/* Execution Process Phases */}
                  <div className="border-t border-slate-100 dark:border-slate-900 pt-8">
                    <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-6">Strategic Execution Phases</span>
                    <div className="flex flex-col gap-4">
                      {activeCaseStudy.process.map((step, i) => (
                        <div key={i} className="flex gap-4 items-start text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">
                          <span className="text-blue-500 font-bold font-mono text-xs md:text-sm">0{i+1}</span>
                          <p className="leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Systems Implemented */}
                  <div className="border-t border-slate-100 dark:border-slate-900 pt-8">
                    <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-4">Core Systems Implemented</span>
                    <div className="flex flex-wrap gap-2">
                      {activeCaseStudy.technologies.map((t, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800/80 text-3xs font-bold uppercase rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Growth Metrics */}
                  <div className="border-t border-slate-100 dark:border-slate-900 pt-8">
                    <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-6">Verified Client Gains</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {activeCaseStudy.results.map((res, i) => (
                        <div key={i} className="p-6 bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-slate-100/50 dark:border-slate-900">
                          <span className="text-3xs font-black text-slate-400 uppercase tracking-wider block mb-2">{res.label}</span>
                          <span className="text-3xl font-black font-display text-blue-600 dark:text-blue-400 block mb-1">{res.value}</span>
                          <span className="text-2xs font-bold text-slate-500 dark:text-slate-400 block">{res.growth}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
