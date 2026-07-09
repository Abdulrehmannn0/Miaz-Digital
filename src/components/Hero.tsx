/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Eye, Sparkles, TrendingUp, ChevronDown } from 'lucide-react';
import { LanguageCode } from '../types';
import { DIALECTS } from '../data';

interface HeroProps {
  currentLang: LanguageCode;
  onCtaClick: (target: string) => void;
}

export default function Hero({ currentLang, onCtaClick }: HeroProps) {
  const t = DIALECTS[currentLang];
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Statistics State
  const [stats, setStats] = useState({
    projects: 0,
    countries: 0,
    experience: 0,
    satisfaction: 0
  });

  useEffect(() => {
    // Mouse movement parallax hook
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 35;
      const y = (clientY / innerHeight - 0.5) * 35;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Elegant stats auto-counting effect
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let count = 0;

    const timer = setInterval(() => {
      count++;
      setStats({
        projects: Math.floor((180 / steps) * count),
        countries: Math.floor((24 / steps) * count),
        experience: Math.floor((10 / steps) * count),
        satisfaction: Math.min(100, Math.floor((100 / steps) * count))
      });

      if (count >= steps) {
        setStats({
          projects: 184,
          countries: 24,
          experience: 10,
          satisfaction: 99
        });
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const partnerLogos = [
    { name: "Stripe", svg: "M4 12h16" }, // Placeholders that look sleek
    { name: "Apple", svg: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" },
    { name: "Vercel", svg: "M12 2L2 22h20L12 2z" },
    { name: "Linear", svg: "M12 2L2 12h20L12 2z" },
    { name: "Framer", svg: "M5 2h14v8H5zm0 10h14v10L12 17l-7 5z" }
  ];

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-white dark:bg-[#0B0F19]"
    >
      {/* Decorative Interactive Floating Blur Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            x: mousePos.x * -1.5,
            y: mousePos.y * -1.5,
          }}
          transition={{ type: "tween", ease: "linear" }}
          className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-blue-300/20 dark:bg-blue-900/10 blur-[130px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div 
          animate={{
            x: mousePos.x * 1.2,
            y: mousePos.y * 1.2,
          }}
          transition={{ type: "tween", ease: "linear" }}
          className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-300/15 dark:bg-indigo-950/15 blur-[150px] mix-blend-multiply dark:mix-blend-screen"
        />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-teal-300/10 dark:bg-sky-950/10 blur-[120px]" />
      </div>

      {/* Main Fullscreen Grid */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 my-auto">
        
        {/* Left Headline Block */}
        <div className="col-span-1 lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          {/* Tag badge with interactive spark animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-2xs font-extrabold tracking-wider text-blue-700 dark:text-blue-300 uppercase">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Master Display Heading */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.05] max-w-2xl">
            Helping Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 dark:from-blue-400 dark:via-indigo-400 dark:to-sky-300">Scale</span> Through Design, Marketing & Tech.
          </h1>

          {/* Editorial Subheadline */}
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
            {t.hero.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
            <button
              id="hero-primary-cta"
              onClick={() => onCtaClick('contact')}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-600/30 cursor-pointer flex items-center justify-center gap-2 group transition-all"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
            
            <button
              id="hero-secondary-cta"
              onClick={() => onCtaClick('portfolio')}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-full shadow-sm cursor-pointer flex items-center justify-center gap-2 transition-all"
            >
              <Eye className="w-4 h-4" />
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Right Graphical Stat Widget Frame (Apple Bento Card style) */}
        <div className="col-span-1 lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            style={{ x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
            className="w-full max-w-[420px] rounded-[24px] bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl p-6 relative overflow-hidden"
          >
            {/* Soft inner lighting */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 dark:bg-blue-500/10 blur-3xl rounded-full" />
            
            <div className="flex items-center justify-between mb-8">
              <span className="text-2xs font-bold tracking-widest text-slate-400 uppercase">Live Metrics</span>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-3xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">Operational</span>
              </div>
            </div>

            {/* Statistics Layout */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-6">
              <div className="flex flex-col text-left">
                <span className="text-3xl font-display font-black text-slate-900 dark:text-white flex items-center">
                  {stats.projects}
                  <span className="text-blue-600 dark:text-blue-400 ml-0.5">+</span>
                </span>
                <span className="text-xs font-semibold text-slate-500 mt-1">Projects Delivered</span>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-3xl font-display font-black text-slate-900 dark:text-white flex items-center">
                  {stats.countries}
                  <span className="text-indigo-500 dark:text-indigo-400 ml-0.5">+</span>
                </span>
                <span className="text-xs font-semibold text-slate-500 mt-1">Countries Served</span>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-3xl font-display font-black text-slate-900 dark:text-white flex items-center">
                  {stats.experience}
                  <span className="text-teal-500 dark:text-teal-400 ml-0.5">Y</span>
                </span>
                <span className="text-xs font-semibold text-slate-500 mt-1">Years Experience</span>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-3xl font-display font-black text-slate-900 dark:text-white flex items-center">
                  {stats.satisfaction}
                  <span className="text-blue-600 dark:text-blue-400 ml-0.5">%</span>
                </span>
                <span className="text-xs font-semibold text-slate-500 mt-1">Client Satisfaction</span>
              </div>
            </div>

            {/* Graphic Micro-chart element */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4 text-left">
              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-800 dark:text-white block">Scale Acceleration</span>
                <span className="text-3xs text-slate-400 leading-tight block mt-0.5">Custom automations & ads generate 4.8x average ROAS.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Horizontal Logo Marquee */}
      <div className="w-full relative py-6 border-y border-slate-200/50 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-950/20 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#0B0F19] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#0B0F19] to-transparent z-10 pointer-events-none" />
        
        <div className="infinite-marquee gap-16 items-center">
          {/* Generate 3 repeat cycles for continuous marquee looping */}
          {[1, 2, 3].map((cycle) => (
            <React.Fragment key={cycle}>
              {partnerLogos.map((logo, i) => (
                <div key={`${logo.name}-${cycle}-${i}`} className="flex items-center gap-2.5 opacity-40 dark:opacity-30 hover:opacity-100 dark:hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-5 h-5 fill-slate-900 dark:fill-white" viewBox="0 0 24 24">
                    <path d={logo.svg} />
                  </svg>
                  <span className="font-display font-bold text-sm tracking-wider text-slate-900 dark:text-white">
                    {logo.name}
                  </span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Elegant Animated Scroll Indicator */}
      <div className="flex justify-center mt-4">
        <motion.button 
          onClick={() => onCtaClick('services')}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
        >
          <span className="text-3xs font-bold uppercase tracking-widest text-slate-400">Discover More</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </motion.button>
      </div>
    </section>
  );
}
