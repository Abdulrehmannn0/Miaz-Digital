import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  HelpCircle, 
  ChevronDown, 
  Search, 
  PhoneCall, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { FAQ_DATA } from '../data';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

export default function FaqPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('All');
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateMetaTags({
      title: "Frequently Asked Questions | Niaz Digital",
      description: "Get immediate answers to queries regarding Niaz Digital website development speeds, custom n8n automations, project fees, and client portal tracking.",
      canonicalUrl: window.location.href,
      ogImage: logoImg
    });
  }, []);

  const categories = ['All', 'Services', 'AI & Automation', 'Collaboration', 'Pricing'];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = activeTab === 'All' || faq.category === activeTab;
    const matchesQuery = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] dark:bg-[#070913] min-h-screen relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-left">
        
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
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
            Frictionless Clarifications
          </span>
          <h1 className="text-4xl md:text-5.5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-none mb-6">
            Frequently Asked.
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            Find answers regarding our bespoke development practices, security controls, automation architectures, and delivery parameters.
          </p>
        </div>

        {/* Filters and Search row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-8 border-b border-slate-100 dark:border-slate-900">
          
          <div className="flex flex-wrap gap-1 max-w-full overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-3xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === cat 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10' 
                    : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/40 dark:hover:bg-slate-900/80 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search parameters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 rounded-full text-xs font-semibold placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>

        </div>

        {/* FAQ items list */}
        <div className="flex flex-col gap-4 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => {
              const isExpanded = expandedIndex === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="rounded-2xl border border-slate-100 dark:border-slate-900 bg-white/40 dark:bg-slate-950/10 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between font-display font-bold text-sm md:text-base text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4.5 h-4.5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-6 pt-0 text-xs md:text-sm text-slate-500 dark:text-slate-400 border-t border-slate-50 dark:border-slate-900 leading-relaxed font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredFaqs.length === 0 && (
            <div className="py-20 text-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
              <span className="font-display font-bold text-lg text-slate-800 dark:text-white block mb-1">No results match your search</span>
              <p className="text-xs text-slate-500">Try modifying your query or select a different category tab.</p>
            </div>
          )}
        </div>

        {/* Custom ask card */}
        <div className="p-8 md:p-10 rounded-[28px] bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-xl shrink-0 mt-1">
              <MessageSquare className="w-5.5 h-5.5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-1">Still have unanswered questions?</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md leading-relaxed font-medium">
                Our team is happy to clear any custom operational queries, project dependencies, or budget questions. We're a short chat away.
              </p>
            </div>
          </div>
          <a 
            href="https://wa.me/919012403699"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-blue-500/10"
          >
            <PhoneCall className="w-4 h-4" />
            Connect on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
