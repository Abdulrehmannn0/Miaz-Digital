import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Linkedin, 
  Instagram, 
  Mail, 
  PhoneCall, 
  Quote, 
  CheckCircle2, 
  Wrench, 
  Award,
  Terminal
} from 'lucide-react';
import { FOUNDER_DATA } from '../data';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

export default function FounderPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateMetaTags({
      title: "Azhar Uddin | Founder & Growth Strategist | Niaz Digital",
      description: "Read the professional biography and digital philosophy of Azhar Uddin, founder of Niaz Digital growth agency.",
      canonicalUrl: window.location.href,
      ogImage: logoImg
    });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] dark:bg-[#070913] min-h-screen relative overflow-hidden">
      {/* Background radial effects */}
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

        {/* Master Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left panel - Avatar card with stats */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-6">
            <div className="p-4 bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[32px] shadow-sm overflow-hidden group">
              <div className="aspect-square w-full rounded-[24px] overflow-hidden relative bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
                <img 
                  src={logoImg} 
                  alt="Azhar Uddin Logo" 
                  className="w-44 h-44 object-contain opacity-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
              </div>

              <div className="p-6 text-left">
                <h2 className="font-display font-black text-2xl text-slate-900 dark:text-white mb-1">
                  {FOUNDER_DATA.name}
                </h2>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
                  {FOUNDER_DATA.title}
                </p>
                <p className="text-3xs text-slate-400 leading-relaxed uppercase font-black">
                  Since 2016 &bull; IT & Digital Architecture
                </p>
              </div>
            </div>

            {/* Quick stats panel */}
            <div className="p-6 bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100/50 dark:border-slate-900 rounded-[24px] text-left">
              <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-4">Verification Metrics</span>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-2xl font-black font-display text-slate-900 dark:text-white block">9+ Yrs</span>
                  <span className="text-3xs text-slate-400 font-bold uppercase">Experience</span>
                </div>
                <div>
                  <span className="text-2xl font-black font-display text-slate-900 dark:text-white block">100%</span>
                  <span className="text-3xs text-slate-400 font-bold uppercase">Client Rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel - Story details */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-10">
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
                Founder Spotlight
              </span>
              <h1 className="text-4xl md:text-5.5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-none mb-6">
                Azhar Uddin
              </h1>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                {FOUNDER_DATA.tagline}
              </p>
              <div className="p-6 rounded-[22px] bg-slate-50/50 dark:bg-slate-900/30 border-l-4 border-blue-500 mb-8 flex gap-4">
                <Quote className="w-8 h-8 text-blue-500/30 shrink-0" />
                <p className="text-sm font-medium italic text-slate-600 dark:text-slate-300 leading-relaxed text-left">
                  {FOUNDER_DATA.quote}
                </p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                {FOUNDER_DATA.bio}
              </p>
            </div>

            {/* Core Values / Accomplishments lists */}
            <div className="border-t border-slate-100 dark:border-slate-900 pt-8">
              <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-6">Strategic Milestones</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FOUNDER_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical stack tags */}
            <div className="border-t border-slate-100 dark:border-slate-900 pt-8">
              <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-6">Proficiency Matrix</span>
              <div className="flex flex-wrap gap-1.5">
                {FOUNDER_DATA.techStack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800 text-3xs font-bold uppercase rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Connect buttons */}
            <div className="border-t border-slate-100 dark:border-slate-900 pt-8 flex flex-col sm:flex-row gap-4 items-center">
              <a 
                href="https://wa.me/919012403699"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-full flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                Book Strategy Session
              </a>
              
              <div className="flex gap-3">
                <a 
                  href={FOUNDER_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-500 hover:text-blue-600 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={FOUNDER_DATA.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-500 hover:text-pink-600 transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
