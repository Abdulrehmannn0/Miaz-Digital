import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Cpu, 
  Code2, 
  Layers, 
  Smartphone, 
  TrendingUp, 
  SearchCode, 
  BookOpen, 
  PhoneCall, 
  HelpCircle, 
  ArrowRight,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { DETAILED_SERVICES } from '../data/serviceDetails';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const service = serviceId ? DETAILED_SERVICES[serviceId] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (service) {
      updateMetaTags({
        title: `${service.title} | Premium Digital Solutions | Niaz Digital`,
        description: service.description,
        canonicalUrl: window.location.href,
        ogImage: logoImg
      });
    }
  }, [serviceId, service]);

  if (!service) {
    return (
      <section className="py-24 bg-[#FFFFFF] dark:bg-[#070913] min-h-screen flex items-center justify-center text-center">
        <div className="max-w-md mx-auto px-6">
          <div className="p-4 bg-red-500/10 text-red-500 rounded-full w-fit mx-auto mb-6">
            <Layers className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white mb-2">Service Not Found</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
            The requested technical system or design spectrum is currently under development or has been relocated.
          </p>
          <button 
            onClick={() => navigate('/services')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer transition-all shadow-lg shadow-blue-500/25"
          >
            Explore Services
          </button>
        </div>
      </section>
    );
  }

  // Get icon component dynamically based on the category/type
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

  const IconComponent = getIcon(service.category);

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] dark:bg-[#070913] min-h-screen relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation / Breadcrumb */}
        <div className="mb-10 flex items-center justify-between">
          <button 
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Solutions
          </button>
          
          <span className="text-3xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400">
            {service.category}
          </span>
        </div>

        {/* Hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Main Info */}
          <div className="col-span-1 lg:col-span-7 text-left">
            <span className="text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase block mb-3">
              Premium Agency Offering
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-none mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-8">
              {service.subtitle}
            </p>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              {service.description}
            </p>

            {/* Tech stack / tools used tags */}
            <div className="border-t border-slate-100 dark:border-slate-900 pt-8">
              <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-4">Core Tech Stack & Tools</span>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool, idx) => (
                  <span 
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Feature checklist Panel (Card layout) */}
          <div className="col-span-1 lg:col-span-5 bg-white/70 dark:bg-slate-950/20 backdrop-blur-xl border border-white/50 dark:border-white/10 p-8 rounded-[24px] shadow-sm hover:shadow-md transition-shadow text-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3.5 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-2xl">
                <IconComponent className="w-7 h-7" />
              </div>
              <div>
                <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block">Deliverable</span>
                <span className="font-display font-bold text-slate-900 dark:text-white">Bespoke Production</span>
              </div>
            </div>

            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-6">Key Capabilities Included</h3>
            
            <ul className="flex flex-col gap-4 mb-8">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/919012403699"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              Initiate Discovery Call
            </a>
          </div>

        </div>

        {/* Process Roadmap */}
        <div className="border-t border-slate-100 dark:border-slate-900 pt-20 mb-20 text-left">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
              Delivery Framework
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Bespoke Execution Roadmap
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              How we systematically transition your strategic parameters from conceptual briefs to production realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.process.map((p, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100/50 dark:border-slate-900 relative"
              >
                <span className="absolute top-4 right-6 text-4xl font-black font-mono text-slate-200/50 dark:text-slate-800/40">{p.step}</span>
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">{p.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ section */}
        <div className="border-t border-slate-100 dark:border-slate-900 pt-20 mb-20 text-left">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
              Clarifications & Terms
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Frequently Clarified Parameters
            </h2>
          </div>

          <div className="max-w-3xl flex flex-col gap-4">
            {service.faqs.map((faq, i) => (
              <div 
                key={i}
                className="rounded-2xl border border-slate-100 dark:border-slate-900 bg-white/40 dark:bg-slate-950/10 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between font-display font-bold text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-6 pt-0 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-50 dark:border-slate-900 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action card */}
        <div className="p-8 md:p-12 rounded-[32px] bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex flex-col md:flex-row items-center justify-between gap-8 text-left shadow-2xl shadow-blue-500/20">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-100 block mb-2">Ready to scale?</span>
            <h2 className="text-2xl md:text-4.5xl font-display font-extrabold tracking-tight leading-none mb-4">
              Let's engineer your premium platform.
            </h2>
            <p className="text-xs md:text-sm text-blue-100/80 max-w-xl leading-relaxed">
              Connect with Azhar Uddin to map out your digital specifications, automation logic, or targeted visibility. 15-minute free strategy session.
            </p>
          </div>
          <a 
            href="https://wa.me/919012403699"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-blue-600 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-slate-950/20 transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <PhoneCall className="w-4 h-4 text-blue-600" />
            Book Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
