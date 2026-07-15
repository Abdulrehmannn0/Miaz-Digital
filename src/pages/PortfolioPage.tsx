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
  FileText
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

export default function PortfolioPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

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

  const handleSliderMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

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
              <Sparkles className="w-3.5 h-3.5" /> Performance Overhaul
            </span>
            <h3 className="text-2xl md:text-3.5xl font-display font-black text-slate-900 dark:text-white tracking-tight">
              Core Speed Overhaul
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Drag the center slider bar to witness the before-and-after optimization of our web assets. We transform slow, bloated page-builder sites (Left) into ultra-optimized Next.js and static HTML builds (Right).
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <TrendingUp className="w-4.5 h-4.5 text-blue-500" />
                <span>+240% User Sign-up Metrics</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <Clock className="w-4.5 h-4.5 text-emerald-500" />
                <span>0.6s sub-second loading speeds</span>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-7">
            {/* Custom Before / After Slider */}
            <div 
              ref={sliderContainerRef}
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
              className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden select-none cursor-ew-resize border border-slate-200/50 dark:border-slate-800/80 shadow-md"
            >
              {/* BEFORE State image */}
              <div className="absolute inset-0 bg-[#0F172A] flex flex-col items-center justify-center p-6 text-center">
                <div className="max-w-xs">
                  <div className="w-20 h-20 rounded-full border-4 border-dashed border-red-500/40 flex items-center justify-center mx-auto mb-4 animate-spin-slow">
                    <span className="text-red-500 text-xs font-bold">29%</span>
                  </div>
                  <span className="text-3xs font-black uppercase tracking-wider text-red-400 block mb-1">Old Server Speed</span>
                  <span className="text-xs font-bold text-slate-400">Slow templates & bloated plugin databases</span>
                </div>
              </div>

              {/* AFTER State overlay */}
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-br from-blue-900 to-indigo-950 flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-all duration-75"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="min-w-[450px] max-w-xs">
                  <div className="w-20 h-20 rounded-full border-4 border-emerald-500 flex items-center justify-center mx-auto mb-4 bg-emerald-500/10 shadow-lg shadow-emerald-500/25">
                    <span className="text-emerald-400 text-xs font-extrabold">100%</span>
                  </div>
                  <span className="text-3xs font-black uppercase tracking-wider text-emerald-400 block mb-1">Bespoke Static Architecture</span>
                  <span className="text-xs font-bold text-white">Clean React components & compressed assets</span>
                </div>
              </div>

              {/* Slider separator handle line */}
              <div 
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize shadow-lg flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center border border-slate-200">
                  <span className="text-slate-600 text-xs font-bold tracking-tighter">&larr;&rarr;</span>
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
                    {item.description}
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
