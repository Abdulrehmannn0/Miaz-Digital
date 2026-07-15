import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Layers, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  X, 
  Sparkles,
  PhoneCall,
  Briefcase,
  TrendingUp as TrendIcon,
  ChevronRight
} from 'lucide-react';
import { CASE_STUDIES_DATA } from '../data';
import { CaseStudy } from '../types';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

export default function CaseStudiesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateMetaTags({
      title: "In-Depth Case Studies | Niaz Digital",
      description: "Explore the exact strategic, technical, and architectural methods Niaz Digital used to optimize core systems, reduce lag times, and scale client revenue.",
      canonicalUrl: window.location.href,
      ogImage: logoImg
    });

    if (location.pathname === '/portfolio/ergonomic-shop' || location.pathname.includes('ergonomic')) {
      const ergonomicStudy = CASE_STUDIES_DATA.find(s => s.id === 'ergonomic-shop-automation-study');
      if (ergonomicStudy) {
        setActiveStudy(ergonomicStudy);
      }
    }
  }, [location.pathname]);

  const handleCloseStudy = () => {
    setActiveStudy(null);
    if (location.pathname === '/portfolio/ergonomic-shop') {
      navigate('/case-studies');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] dark:bg-[#070913] min-h-screen relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

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
            Case Studies
          </span>
          <h1 className="text-4xl md:text-6.5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-none mb-6">
            Enterprise Client Wins.
          </h1>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            Read complete, un-redacted strategic blueprints of our complex technical integrations, custom automations, and speed optimizations.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {CASE_STUDIES_DATA.map((study) => (
            <div 
              key={study.id}
              className="p-8 rounded-[32px] bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/80 flex flex-col justify-between hover:shadow-xl hover:border-blue-500/20 transition-all group text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-full uppercase tracking-wide">
                    {study.client}
                  </span>
                  <span className="text-3xs font-bold text-slate-400">
                    Bespoke System Study
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white tracking-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {study.challenge.substring(0, 160)}...
                </p>

                {/* Key Metrics row */}
                <div className="grid grid-cols-3 gap-3 mb-8 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                  {study.results.map((res, i) => (
                    <div key={i}>
                      <span className="text-lg font-black font-display text-blue-600 dark:text-blue-400 block">{res.value}</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight block truncate">{res.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setActiveStudy(study)}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5"
              >
                Read Strategic Blueprint
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Strategic Case Studies details Overlay/Modal */}
        <AnimatePresence>
          {activeCaseStudyOverlay(activeStudy, handleCloseStudy)}
        </AnimatePresence>

      </div>
    </section>
  );
}

function activeCaseStudyOverlay(study: CaseStudy | null, onClose: () => void) {
  if (!study) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4 md:p-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-4xl bg-white dark:bg-slate-950 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden text-left max-h-[85vh] flex flex-col"
      >
        {/* Modal Sticky Head */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-900 flex items-center justify-between bg-white dark:bg-slate-950 sticky top-0 z-10">
          <div>
            <span className="text-3xs font-black uppercase tracking-widest text-blue-500">{study.client}</span>
            <h4 className="font-display font-bold text-base text-slate-900 dark:text-white truncate max-w-lg">{study.title}</h4>
          </div>
          <button 
            onClick={onClose}
            className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-8 md:p-12 overflow-y-auto flex-grow flex flex-col gap-10">
          
          {/* Main challenges block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <span className="text-3xs font-black uppercase tracking-wider text-red-400 block mb-3">The Challenge</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{study.challenge}</p>
            </div>
            <div>
              <span className="text-3xs font-black uppercase tracking-wider text-emerald-400 block mb-3">The Solution</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{study.solution}</p>
            </div>
          </div>

          {/* Detailed Process */}
          <div className="border-t border-slate-100 dark:border-slate-900 pt-8">
            <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-6">Strategic Execution Phases</span>
            <div className="flex flex-col gap-3">
              {study.process.map((step, i) => (
                <div key={i} className="flex gap-4 items-start text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span className="text-blue-500 font-bold font-mono">0{i+1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack badges */}
          <div className="border-t border-slate-100 dark:border-slate-900 pt-8">
            <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-4">Core Systems Implemented</span>
            <div className="flex flex-wrap gap-2">
              {study.technologies.map((t, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800/80 text-3xs font-bold uppercase rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Growth Results badge grid */}
          <div className="border-t border-slate-100 dark:border-slate-900 pt-8">
            <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-6">Verified Client Gains</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {study.results.map((res, i) => (
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
  );
}
