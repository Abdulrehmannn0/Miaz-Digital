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
  ChevronRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

export default function PortfolioPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
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
    'All', 'Websites', 'Mobile Apps', 'Dashboards', 'Branding', 'Meta Ads', 'AI Automation'
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="group relative rounded-[28px] bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/80 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Image / Color placeholder */}
                <div className="w-full aspect-[16/10] bg-slate-100 dark:bg-slate-950/80 relative flex items-center justify-center overflow-hidden">
                  <span className="font-display font-black text-slate-200 dark:text-slate-900/50 text-4xl uppercase tracking-widest">{item.category}</span>
                  
                  {/* Subtle decorative grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
                  
                  {/* Highlight bar */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-white/50 dark:border-white/10 flex items-center justify-between translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Learn more details</span>
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                  </div>
                </div>

                <div className="p-6 md:p-8 text-left">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {item.category}
                    </span>
                    <span className="text-3xs font-semibold text-slate-400 dark:text-slate-500">
                      Completed System
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.results}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
