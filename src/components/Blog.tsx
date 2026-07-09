/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ChevronRight, X, ArrowUpRight, Share2, Sparkles } from 'lucide-react';
import { BLOG_DATA } from '../data';
import { BlogArticle } from '../types';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <section 
      id="blog" 
      className="py-24 bg-slate-50/50 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
            Articles & Insights
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            NiazDigital Journal. Open-source knowledge from the frontlines.
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            We actively write detailed audits explaining high-efficiency React bundler speeds, psychological copy guidelines, and automated HubSpot data routings. Read our latest findings below.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_DATA.map((article) => (
            <div 
              key={article.id}
              className="group bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[22px] shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between text-left"
            >
              
              {/* Image header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-3xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-3.5 text-3xs text-slate-400 font-bold uppercase tracking-wider mb-2.5">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.publishedAt}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readingTime}</span>
                  </div>

                  <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 transition-colors mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer w-fit"
                >
                  Read Article <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Article Reader Pane */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="absolute inset-0 bg-slate-950/40 dark:bg-slate-950/60 backdrop-blur-sm"
              />
              
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                className="bg-white/85 dark:bg-slate-900/75 backdrop-blur-xl border-l border-white/40 dark:border-white/10 shadow-2xl w-full max-w-2xl h-screen overflow-y-auto relative z-10 text-left p-6 md:p-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute right-6 top-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Article Header */}
                <div className="mb-6">
                  <span className="text-3xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-2">
                    {selectedArticle.category} JOURNAL
                  </span>
                  <h3 className="text-2xl md:text-3.5xl font-display font-black text-slate-900 dark:text-white leading-tight">
                    {selectedArticle.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 mt-4 text-3xs text-slate-400 font-bold uppercase tracking-wider">
                    <span>Published {selectedArticle.publishedAt}</span>
                    <span>&bull;</span>
                    <span>{selectedArticle.readingTime}</span>
                  </div>
                </div>

                {/* Article Image Banner */}
                <div className="w-full aspect-[16/9] rounded-[18px] overflow-hidden mb-8 border border-slate-200 dark:border-slate-800">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Author attribution panel */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm shrink-0">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop" alt="Niaz Ahmed" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">Niaz Ahmed</span>
                    <span className="text-4xs text-slate-400 uppercase block mt-0.5">Founder & Technical Director, NiazDigital</span>
                  </div>
                </div>

                {/* Article body content */}
                <div className="flex flex-col gap-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <p className="font-semibold text-slate-700 dark:text-slate-200 text-base">
                    {selectedArticle.excerpt}
                  </p>
                  
                  {/* Render simulated comprehensive article content paragraph groups */}
                  <div className="flex flex-col gap-4">
                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-base mt-2">1. The core structural bottleneck</h4>
                    <p>
                      In our recent audits across 12 high-traffic stores, we observed that legacy page builder tools generate over 4 MB of nested HTML DOM elements. This excessive nesting severely slows down mobile page rendering, causing a critical drop in visitor retention rates.
                    </p>
                    <p>
                      Optimizing these slow page loads down to sub-second levels with headless NextJS SSR structures instantly decreases checkout bounces by 42%. In modern digital landscapes, speed is no longer an optional optimization; it directly impacts your overall campaign ROAS.
                    </p>

                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-base mt-2">2. Engineering high-relevance psychological copy</h4>
                    <p>
                      Paid marketing creative assets must serve a single purpose: matching the exact pain point of your target audience segments. Generic stock images and standardized prompts fail to build authority.
                    </p>
                    <p>
                      Instead, we engineer custom interactive scripts paired with deep visual mockups that showcase your value proposition clearly within the first 3 seconds.
                    </p>
                  </div>
                </div>

                <hr className="border-slate-100 dark:border-slate-800 my-8" />

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white rounded-full cursor-pointer shadow-lg shadow-blue-500/25"
                  >
                    Finish Reading
                  </button>
                  <button
                    onClick={() => alert("Simulating link share: Link copied to clipboard!")}
                    className="p-3 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 text-slate-500 rounded-full cursor-pointer"
                    title="Share this insight"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
