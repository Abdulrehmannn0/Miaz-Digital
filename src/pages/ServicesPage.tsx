import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Search, 
  Layers, 
  Code2, 
  Cpu, 
  TrendingUp, 
  SearchCode, 
  Smartphone, 
  ArrowRight,
  Sparkles,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { DETAILED_SERVICES } from '../data/serviceDetails';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

export default function ServicesPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateMetaTags({
      title: "Capabilities Spectrum | Niaz Digital",
      description: "Explore the comprehensive, premium digital offering of Niaz Digital: Website development, SEO automation, workflow pipelines, and branding operations.",
      canonicalUrl: window.location.href,
      ogImage: logoImg
    });
  }, []);

  const categories = [
    'All', 
    'Website Development', 
    'Digital Marketing', 
    'SEO', 
    'AI Automation', 
    'Branding', 
    'Virtual Assistance'
  ];

  const getIcon = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'website development':
        return Code2;
      case 'seo':
        return SearchCode;
      case 'digital marketing':
        return TrendingUp;
      case 'ai automation':
        return Cpu;
      case 'branding':
        return Layers;
      default:
        return Smartphone;
    }
  };

  const servicesList = Object.values(DETAILED_SERVICES);

  const filteredServices = servicesList.filter(service => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] dark:bg-[#070913] min-h-screen relative overflow-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

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
            Capabilities Spectrum
          </span>
          <h1 className="text-4xl md:text-6.5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-none mb-6">
            Digital Solutions Built For Modern Businesses.
          </h1>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            From strategy to execution, Niaz Digital delivers complete digital solutions that help businesses build a stronger online presence, automate operations, and grow sustainably.
          </p>
        </div>

        {/* Controls block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-10 border-b border-slate-100 dark:border-slate-900">
          
          {/* Categories Tab list */}
          <div className="flex flex-wrap gap-1.5 max-w-full overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10' 
                    : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/40 dark:hover:bg-slate-900/80 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-3.5 w-4.5 h-4.5 text-slate-400" />
            <input 
              type="text"
              placeholder="Search solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 rounded-full text-xs font-semibold placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all"
            />
          </div>

        </div>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = getIcon(service.category);
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 md:p-8 rounded-[24px] bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-100 dark:border-slate-800/80 hover:border-blue-500/30 dark:hover:border-blue-500/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-xl">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 uppercase tracking-wide">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                      {service.subtitle}
                    </p>
                  </div>

                  <div>
                    <ul className="flex flex-col gap-2 mb-8">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => navigate(`/services/${service.id}`)}
                      className="w-full py-3 border border-slate-100 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-all rounded-xl cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <div className="col-span-full py-20 text-center rounded-[24px] border border-dashed border-slate-200 dark:border-slate-800">
              <span className="font-display font-bold text-lg text-slate-800 dark:text-white block mb-2">No Services Match Your Filters</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Modify your keywords or change categories to view different system options. Alternatively, send us a custom brief.
              </p>
            </div>
          )}
        </div>

        {/* Global CTA Card */}
        <div className="p-8 md:p-12 rounded-[32px] bg-gradient-to-r from-slate-900 to-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-slate-800">
          <div>
            <h2 className="text-2xl md:text-3.5xl font-display font-extrabold tracking-tight mb-3">
              Need a bespoke custom solution?
            </h2>
            <p className="text-xs md:text-sm text-slate-400 max-w-xl leading-relaxed">
              We frequently build custom, high-speed applications, custom database solutions, and self-hosted n8n instances designed for your unique operational workflow. Let's trace your needs.
            </p>
          </div>
          <a 
            href="https://wa.me/919012403699"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            Discuss Custom Scope
          </a>
        </div>

      </div>
    </section>
  );
}
