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
    experience: 0,
    projects: 0,
    industries: 0
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
        experience: Math.floor((9 / steps) * count),
        projects: Math.floor((100 / steps) * count),
        industries: Math.floor((20 / steps) * count)
      });

      if (count >= steps) {
        setStats({
          experience: 9,
          projects: 100,
          industries: 20
        });
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const partnerLogos = [
    { name: "WordPress", svg: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18.5a8.45 8.45 0 01-4.8-1.5l3.35-9.5 3.12 9.07a8.45 8.45 0 01-1.67.93zm5.17-10.42a4.43 4.43 0 00-.44-1.51c-.27-.44-.53-.82-.53-1.27 0-.5.38-.97.92-.97a1.9 1.9 0 01.14 0 7.8 7.8 0 00-4.3-1.6c-2 0-3.8.9-5 2.3h.3c.5 0 1.4 0 1.4 0 .3 0 .3-.4 0-.4h-.6L11 12.1l1.1-3.4-.1-.3h-.7c-.3 0-.3-.4 0-.4h1.4c.3 0 .3-.4 0-.4h-.6l1.8 5.4.5-1.5c.2-.7.3-1.2.3-1.6z" },
    { name: "Shopify", svg: "M19 5h-3V4c0-2.2-1.8-4-4-4S8 1.8 8 4v1H5c-1.1 0-2 .9-2 2l1.5 14c.1 1.1 1 2 2.1 2h10.8c1.1 0 2-.9 2.1-2L21 7c0-1.1-.9-2-2-2zM10 4c0-1.1.9-2 2-2s2 .9 2 2v1h-4V4zm8 15H6l-1.2-11h14.4L18 19z" },
    { name: "Google", svg: "M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.579-7.859-8s3.529-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C18.121 2.029 15.44 1 12.24 1 6.033 1 12.24s5.033 11.24 11.24 11.24c5.89 0 9.87-4.137 9.87-10.029 0-.645-.07-1.129-.151-1.614l-8.72-.052z" },
    { name: "Meta", svg: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.3 12.3c-.6 0-1.1-.3-1.4-.8l-.9-1.5-.9 1.5c-.3.5-.8.8-1.4.8-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8c.6 0 1.1.3 1.4.8l.9 1.5.9-1.5c.3-.5.8-.8 1.4-.8 1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8z" },
    { name: "OpenAI", svg: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.12 14.5a3.17 3.17 0 0 1-1.59-2.75V10.4l1.35.78c.36.21.78.32 1.2.32a2.38 2.38 0 0 0 1.2-.32l2.45-1.42V12.9l-3.26 1.88c-.37.21-.8.32-1.2.32a2.43 2.43 0 0 1-1.2-.31zm1.34-3.13l1.35.78c.77.45 1.25 1.28 1.25 2.17v3.13l-1.35-.78a2.38 2.38 0 0 0-1.2-.32c-.42 0-.84.11-1.2.32l-2.45 1.42V10.4l3.26-1.88c.37-.21.8-.32 1.2-.32a2.43 2.43 0 0 1 1.2.31z" },
    { name: "Claude", svg: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-4H8V10.5h3v-3h2v3h3v2h-3z" },
    { name: "Gemini", svg: "M12 2c0 5-5 5-5 5s5 0 5 5c0-5 5-5 5-5s-5 0-5-5zm6 11c0 3-3 3-3 3s3 0 3 3c0-3 3-3 3-3s-3 0-3-3z" },
    { name: "n8n", svg: "M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-1 5v10l5-5-5-5z" },
    { name: "Make", svg: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11H8V9h8v4z" }
  ];

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#FFFFFF] dark:bg-[#070913]"
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
            {currentLang === 'EN' ? (
              <>
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 dark:from-blue-400 dark:via-indigo-400 dark:to-sky-300">Intelligent Digital Systems</span> That Scale Modern Businesses.
              </>
            ) : (
              t.hero.headline
            )}
          </h1>

          {/* Editorial Subheadline */}
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
            {t.hero.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
            <a
              id="hero-primary-cta"
              href="https://wa.me/919012403699"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-600/30 cursor-pointer flex items-center justify-center gap-2 group transition-all"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>
            
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
                  {stats.experience}
                  <span className="text-teal-500 dark:text-teal-400 ml-0.5">+</span>
                </span>
                <span className="text-xs font-semibold text-slate-500 mt-1">Years Experience</span>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-3xl font-display font-black text-slate-900 dark:text-white flex items-center">
                  {stats.projects}
                  <span className="text-blue-600 dark:text-blue-400 ml-0.5">+</span>
                </span>
                <span className="text-xs font-semibold text-slate-500 mt-1">Projects Delivered</span>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-3xl font-display font-black text-slate-900 dark:text-white flex items-center">
                  {stats.industries}
                  <span className="text-indigo-500 dark:text-indigo-400 ml-0.5">+</span>
                </span>
                <span className="text-xs font-semibold text-slate-500 mt-1">Industries Served</span>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-3xl font-display font-black text-slate-900 dark:text-white flex items-center">
                  Global
                </span>
                <span className="text-xs font-semibold text-slate-500 mt-1">Remote Services</span>
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
