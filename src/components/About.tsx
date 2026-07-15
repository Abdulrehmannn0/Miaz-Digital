/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Github, 
  Award, 
  Briefcase, 
  CheckCircle,
  TrendingUp,
  Target,
  Compass,
  Mail,
  Phone,
  Quote
} from 'lucide-react';
import { FOUNDER_DATA } from '../data';

export default function About() {
  const coreValues = [
    {
      title: "Hand-Crafted Mastery",
      desc: "Zero cookie-cutter templates. Every system is bespoke-engineered in custom TypeScript.",
      icon: Award,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Predictable ROAS",
      desc: "Our ad campaign blueprints are backed by deep psychological copy and meticulous tracking.",
      icon: TrendingUp,
      color: "text-indigo-600 dark:text-indigo-400"
    },
    {
      title: "Humanless Pipelines",
      desc: "We automate manual spreadsheet tracking and CRM routing, saving clients hundreds of monthly hours.",
      icon: Target,
      color: "text-teal-600 dark:text-teal-400"
    }
  ];

  const socialIcons = {
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    github: Github
  };

  return (
    <section 
      id="about" 
      className="py-24 bg-[#FFFFFF] dark:bg-[#070913] border-t border-slate-100/50 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
            Agency Story & Values
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            Pioneering digital prestige. Our mission is to scale enterprises through technical artistry.
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Niaz Digital is not an ordinary production shop. We are a specialized elite agency merging high-end UI design aesthetics with robust, automated developer-operations. We believe that your website is your digital flagship and should convert organic traffic predictably.
          </p>
        </div>

        {/* Story details & Core Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-8 text-left bg-white/70 dark:bg-slate-950/20 backdrop-blur-xl p-8 rounded-[22px] border border-white/50 dark:border-white/10 shadow-sm">
            <div>
              <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-2">Our Mission</span>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To empower businesses with smart digital solutions, efficient systems, and strategic marketing that save time, improve productivity, and create sustainable growth.
              </p>
            </div>
            <div>
              <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-2">Our Vision</span>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To build Niaz Digital into a globally trusted digital growth agency known for innovation, automation, and meaningful client partnerships.
              </p>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val, i) => (
              <div 
                key={i}
                className="p-6 rounded-[22px] bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-sm flex flex-col text-left hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-xl w-fit mb-5">
                  <val.icon className={`w-5 h-5 ${val.color}`} />
                </div>
                <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-2">{val.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Premium Founder Spotlight Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-gradient-to-br from-white/80 via-white/40 to-slate-50/50 dark:from-slate-950/40 dark:via-slate-950/20 dark:to-slate-900/10 backdrop-blur-xl rounded-[32px] p-8 md:p-12 border border-white/50 dark:border-white/10 shadow-xl relative overflow-hidden">
          {/* Subtle decoration light behind image */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          {/* Founder Portrait Frame */}
          <div className="col-span-1 lg:col-span-4 relative flex flex-col items-center gap-6">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-850/80 group">
              <img 
                src={FOUNDER_DATA.image} 
                alt={FOUNDER_DATA.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 dark:opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-6">
                <div>
                  <span className="text-3xs font-extrabold text-blue-400 uppercase tracking-widest block">Direct Access</span>
                  <span className="text-xs text-white/95 leading-tight block mt-1 font-medium">Work directly with Azhar.</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Badge Card (Glassmorphism) */}
            <div className="w-full max-w-xs bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl p-4.5 border border-slate-100 dark:border-slate-800/60 flex flex-col gap-2.5 shadow-sm">
              <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="p-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href={`mailto:${FOUNDER_DATA.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold break-all">
                  {FOUNDER_DATA.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="p-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href={`tel:${FOUNDER_DATA.phone?.replace(/\s/g, '')}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-semibold">
                  {FOUNDER_DATA.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Founder Biography & Credentials */}
          <div className="col-span-1 lg:col-span-8 text-left flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest px-2.5 py-0.5 bg-blue-50 dark:bg-blue-500/10 rounded-full">FOUNDER SPOTLIGHT</span>
                <Sparkles className="w-4 h-4 text-blue-500" />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight">
                {FOUNDER_DATA.name}
              </h3>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {FOUNDER_DATA.title}
              </p>
            </div>

            {/* Tagline Callout */}
            <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10 relative overflow-hidden">
              <p className="text-xs md:text-sm font-bold text-blue-900 dark:text-blue-300 leading-snug flex items-start gap-2.5">
                <Sparkles className="w-4.5 h-4.5 text-blue-500 shrink-0 mt-0.5" />
                <span>{FOUNDER_DATA.tagline}</span>
              </p>
            </div>

            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {FOUNDER_DATA.bio}
            </p>

            {/* Quote Block with Premium styling */}
            <div className="relative pl-6 py-1 border-l-2 border-blue-500/30">
              <Quote className="absolute top-0 left-1 w-8 h-8 text-blue-500/10 -translate-x-1/2 -translate-y-2" />
              <p className="text-xs italic text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                "{FOUNDER_DATA.quote}"
              </p>
            </div>

            {/* Structured Credentials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Track Record */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800/80 pb-2">
                  Track Record
                </span>
                <div className="flex flex-col gap-2.5">
                  {FOUNDER_DATA.experience.map((exp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Expertise */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800/80 pb-2">
                  Key Expertise
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {FOUNDER_DATA.expertise?.map((exp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                      <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technology Stack Badges */}
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <span className="text-3xs font-bold uppercase tracking-widest text-slate-400">
                Technology Stack & Systems Expert
              </span>
              <div className="flex flex-wrap gap-1.5">
                {FOUNDER_DATA.techStack?.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/60 px-2.5 py-1 rounded-lg uppercase tracking-wider hover:bg-blue-500/5 hover:border-blue-500/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Connect & CTA Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-6 border-t border-slate-100 dark:border-slate-800/60">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400">Follow Journey:</span>
                <div className="flex items-center gap-2.5">
                  {Object.entries(FOUNDER_DATA.socials).map(([platform, url]) => {
                    const Icon = socialIcons[platform as keyof typeof socialIcons];
                    if (!Icon) return null;
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
                        title={`Founder on ${platform}`}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Consultation Booking CTA */}
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
              >
                Book a Free Consultation
              </button>
            </div>

          </div>

        </div>

        {/* Elite Team Grid Section */}
        <div className="mt-20 pt-16 border-t border-slate-100 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 px-3 py-1 bg-blue-50 dark:bg-blue-900/10 rounded-full inline-block mb-3">
              Elite Global Talent
            </span>
            <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight text-slate-900 dark:text-white">
              Meet Our Specialist Team
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              A cohesive team of digital strategists, engineers, and creators working directly with Azhar Uddin to build intelligent digital systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              {
                name: "Azhar Uddin",
                role: "Founder & Digital Growth Strategist",
                image: "/src/assets/images/founder_original.jpg",
              },
              {
                name: "Sarah Jenkins",
                role: "Senior Frontend Developer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
              },
              {
                name: "Michael Chen",
                role: "Senior Backend Developer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
              },
              {
                name: "Amara Okafor",
                role: "Lead UI UX Designer",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
              },
              {
                name: "David Miller",
                role: "SEO & Traffic Strategist",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
              },
              {
                name: "Liam O'Connor",
                role: "AI Workflow Engineer",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=250&auto=format&fit=crop",
              },
              {
                name: "Sofia Rodriguez",
                role: "Lead Graphic Designer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop",
              },
              {
                name: "Yuki Sato",
                role: "Lead Video Editor",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=250&auto=format&fit=crop",
              },
              {
                name: "Marcus Thompson",
                role: "Technical Project Manager",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop",
              },
              {
                name: "Elena Vance",
                role: "Business Development",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&auto=format&fit=crop",
              }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 dark:border-slate-800 mb-3.5 group-hover:border-blue-500 transition-colors">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-display font-bold text-xs text-slate-900 dark:text-white">
                  {member.name}
                </h4>
                <p className="text-4xs font-bold uppercase tracking-wider text-slate-400 mt-1">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
