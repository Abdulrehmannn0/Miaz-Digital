import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Award, 
  TrendingUp, 
  Target, 
  Users, 
  Globe, 
  ShieldCheck, 
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

export default function AboutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateMetaTags({
      title: "Agency Story & Values | Niaz Digital",
      description: "Learn how Niaz Digital combines high-end technical architecture with custom conversion strategy to build robust, automated digital solutions for modern businesses.",
      canonicalUrl: window.location.href,
      ogImage: logoImg
    });
  }, []);

  const corePillars = [
    {
      title: "Conversion-Focused Architecture",
      desc: "Every website layout, form placement, and call-to-action is engineered based on user psychological principles to guide conversion metrics seamlessly.",
      icon: Target,
      color: "text-blue-500"
    },
    {
      title: "Smart Automation Systems",
      desc: "We believe in eliminating repetitive overhead. By connecting CRM and automation pipelines, we help modern companies operate with high margins.",
      icon: TrendingUp,
      color: "text-emerald-500"
    },
    {
      title: "Premium Client Partnerships",
      desc: "We operate as a committed technical partner. No generic ticketing loops or outsourced tiers; you work directly with our leadership team.",
      icon: ShieldCheck,
      color: "text-indigo-500"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] dark:bg-[#070913] min-h-screen relative overflow-hidden">
      {/* Background shapes */}
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

        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
            Agency Profile
          </span>
          <h1 className="text-4xl md:text-6.5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-none mb-6">
            Pioneering Digital Prestige.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            At Niaz Digital, we believe your online presence should be a direct reflection of your business's standards. We merge premium visual design with modern, automated systems to scale operations and accelerate sustainable growth.
          </p>
        </div>

        {/* Mission / Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 md:p-10 rounded-[24px] bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100/50 dark:border-slate-900 flex flex-col justify-between">
            <div>
              <span className="text-3xs font-black uppercase tracking-wider text-blue-500 block mb-4">Our Mission</span>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-4">Empowering with Smart Systems</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                To build high-performing digital frameworks, intuitive automations, and targeted visibility plans that save teams valuable time, improve operational throughput, and establish distinct market authority.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-bold text-slate-400">
              NIAZ DIGITAL &bull; SYSTEMATIC EXCELLENCE
            </div>
          </div>

          <div className="p-8 md:p-10 rounded-[24px] bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100/50 dark:border-slate-900 flex flex-col justify-between">
            <div>
              <span className="text-3xs font-black uppercase tracking-wider text-emerald-500 block mb-4">Our Vision</span>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-4">The Global Benchmark for Growth</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                To serve as a globally recognized digital growth agency, trusted by innovative companies to turn digital complex structures into simple, elegant workflows and high-converting channels.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-bold text-slate-400">
              ESTABLISHED IN INDIA &bull; SERVING GLOBALLY
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mb-24">
          <div className="max-w-xl mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">Our Core Principles</span>
            <h2 className="text-2xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">The Standards We Live By</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePillars.map((p, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-[22px] bg-white/70 dark:bg-slate-900/50 border border-white/50 dark:border-white/10 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800 rounded-2xl w-fit mb-6">
                  <p.icon className={`w-6 h-6 ${p.color}`} />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3">{p.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action card */}
        <div className="p-8 md:p-12 rounded-[32px] bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-500/20">
          <div>
            <h2 className="text-2xl md:text-4.5xl font-display font-extrabold tracking-tight mb-3">
              Let's craft your digital flagship.
            </h2>
            <p className="text-xs md:text-sm text-blue-100/80 max-w-xl leading-relaxed">
              Unlock conversion metrics, save staff hours, and align your agency aesthetics with leading global standard.
            </p>
          </div>
          <a 
            href="https://wa.me/919012403699"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-blue-600 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <PhoneCall className="w-4 h-4 text-blue-600" />
            Book Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
