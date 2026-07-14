/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, ChevronRight, RefreshCw, AlertCircle, ArrowUpRight } from 'lucide-react';
import { fetchLatestPosts } from '../lib/wordpress';
import { BLOG_DATA } from '../data';
import { BlogArticle } from '../types';

export default function Blog() {
  const [posts, setPosts] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isOfflineFallback, setIsOfflineFallback] = useState<boolean>(false);

  const loadLatest = async () => {
    setLoading(true);
    setIsOfflineFallback(false);
    try {
      const data = await fetchLatestPosts(3);
      if (data && data.length > 0) {
        setPosts(data);
      } else {
        // Fallback if empty response
        setPosts(BLOG_DATA.slice(0, 3));
        setIsOfflineFallback(true);
      }
    } catch (err) {
      console.warn("WordPress REST API offline or unreachable. Falling back to built-in high-end blog presets.");
      // Graceful offline fallback to keep the app absolutely operational and pristine
      setPosts(BLOG_DATA.slice(0, 3));
      setIsOfflineFallback(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLatest();
  }, []);

  return (
    <section 
      id="blog" 
      className="py-24 bg-[#FFFFFF] dark:bg-[#070913] border-t border-slate-100/50 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
              Articles & Insights
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              TechGloze Journal. Open-source knowledge from the frontlines.
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              We actively write detailed audits explaining high-efficiency React bundler speeds, psychological copy guidelines, and automated HubSpot data routings. Read our latest findings below.
            </p>
          </div>

          {isOfflineFallback && (
            <div className="px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 font-semibold text-[10px] tracking-wider uppercase border border-amber-100 dark:border-amber-900/30 w-fit shrink-0">
              Offline Presets Mode
            </div>
          )}
        </div>

        {/* Loading Skeletons */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="bg-white/40 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/80 rounded-[22px] overflow-hidden flex flex-col justify-between h-[450px]"
              >
                <div className="w-full aspect-[16/10] bg-slate-100 dark:bg-slate-800/50 animate-pulse" />
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex gap-4 mb-4">
                      <div className="w-20 h-3 bg-slate-100 dark:bg-slate-800 rounded-full animate-pulse" />
                      <div className="w-16 h-3 bg-slate-100 dark:bg-slate-800 rounded-full animate-pulse" />
                    </div>
                    <div className="w-full h-5 bg-slate-200 dark:bg-slate-800 rounded-lg mb-3 animate-pulse" />
                    <div className="w-5/6 h-5 bg-slate-200 dark:bg-slate-800 rounded-lg mb-4 animate-pulse" />
                  </div>
                  <div className="w-24 h-4 bg-slate-100 dark:bg-slate-800 rounded-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Blog Post Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((article) => (
              <div 
                key={article.id}
                className="group bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[22px] shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between text-left"
              >
                
                {/* Image header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-3.5 text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-2.5">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-blue-500/80" /> {article.publishedAt}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-blue-500/80" /> {article.readingTime}</span>
                    </div>

                    <Link to={`/blog/${article.slug}`}>
                      <h3 className="font-display font-extrabold text-base md:text-lg text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 mb-6 font-medium">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-50 dark:border-slate-800/60 pt-4 mt-2">
                    <div className="flex items-center gap-2">
                      <img 
                        src={article.author.avatar} 
                        alt={article.author.name}
                        className="w-6 h-6 rounded-full object-cover border border-slate-100 dark:border-slate-800"
                        referrerPolicy="no-referrer"
                      />
                      <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">
                        {article.author.name}
                      </span>
                    </div>

                    <Link
                      to={`/blog/${article.slug}`}
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer w-fit"
                    >
                      Read Article <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* View All Blogs CTA Section */}
        <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/blog"
            className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all cursor-pointer flex items-center gap-1.5 group"
          >
            View All Blogs
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          
          {isOfflineFallback && (
            <button
              onClick={loadLatest}
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-full transition-all cursor-pointer flex items-center gap-1.5"
            >
              Reconnect Live Sync
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
