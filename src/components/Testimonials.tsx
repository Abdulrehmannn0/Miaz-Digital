/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Quote, Star, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

export default function Testimonials() {
  const testimonials = PORTFOLIO_DATA
    .filter(item => item.clientReview)
    .map(item => ({
      id: item.id,
      name: item.clientReview!.author,
      role: item.clientReview!.role,
      avatar: item.clientReview!.avatar,
      rating: item.clientReview!.rating,
      comment: item.clientReview!.comment,
      company: item.client
    }));

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-[#FFFFFF] dark:bg-[#070913] border-t border-slate-100/50 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            Trusted by venture-backed startups and family enterprises.
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Read authentic critiques from global CTOs and marketing directors who decommissioned slow, generic layouts for custom-engineered NextJS architectures built by NiazDigital.
          </p>
        </div>

        {/* Testimonials Bento Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((t) => (
            <div 
              key={t.id}
              className="p-6 md:p-8 rounded-[24px] bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-white/50 dark:border-white/10 text-left flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Soft decorative background quote mark */}
              <Quote className="absolute right-6 top-6 w-24 h-24 text-blue-500/5 dark:text-blue-500/2 pointer-events-none" />

              <div>
                {/* Visual Rating Row */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 shrink-0" />
                  ))}
                  <span className="text-3xs font-bold text-slate-400 ml-1.5 uppercase tracking-wide">VERIFIED PARTNER</span>
                </div>

                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-6 relative z-10 italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Profile Details footer */}
              <div className="flex items-center gap-3.5 border-t border-slate-200/40 dark:border-slate-800/40 pt-5 mt-auto relative z-10">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm shrink-0">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">{t.name}</span>
                  <div className="flex flex-wrap items-center gap-x-1.5 text-3xs text-slate-400 font-semibold mt-0.5">
                    <span>{t.role}</span>
                    <span className="text-blue-500">&bull;</span>
                    <span className="text-blue-600 dark:text-blue-400">{t.company}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global summary banner */}
        <div className="p-6 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 rounded-lg shrink-0">
              <Sparkles className="w-5 h-5 animate-spin" />
            </span>
            <div>
              <span className="text-xs font-bold text-slate-800 dark:text-white block">100% Customer Satisfaction Blueprint</span>
              <p className="text-3xs text-slate-500 dark:text-slate-400 mt-0.5">We maintain perfect 5-star ratings across Google Maps and freelance boards for technical and design execution.</p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline shrink-0 flex items-center gap-1 cursor-pointer"
          >
            Review our contract clauses &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
