/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, ChevronRight, AlertCircle, RefreshCw, BookOpen, ArrowLeft } from 'lucide-react';
import { fetchAllPosts, updateMetaTags } from '../lib/wordpress';
import { BlogArticle } from '../types';

export default function BlogListing() {
  const [posts, setPosts] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const loadPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAllPosts();
      setPosts(data);
    } catch (err: any) {
      setError(err?.message || "Failed to establish synchronization with Niaz Digital WordPress database.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
    
    // Smooth scroll to top of window when entering the route
    window.scrollTo({ top: 0, behavior: 'instant' });

    // SEO Optimization
    updateMetaTags({
      title: "Niaz Digital Journal | Premium Systems & Growth Insights",
      description: "Read the latest digital growth articles, Technical SEO insights, CRM automation blueprints, and custom system case studies directly from Azhar Uddin and the Niaz Digital team.",
      canonicalUrl: window.location.href,
      ogImage: "/src/assets/images/niaz_digital_logo_1784067879724.jpg"
    });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] dark:bg-[#070913] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation Breadcrumb / Back button */}
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
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
            Articles & Insights
          </span>
          <h1 className="text-4xl md:text-6.5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-none mb-6">
            Niaz Digital Journal
          </h1>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            Open-source digital knowledge from the engineering frontlines. High-efficiency React render speeds, psychological copywriting strategies, and automated data routing routines updated in real-time.
          </p>
        </div>

        {/* Dynamic States Grid */}
        {loading ? (
          /* Loading Skeletons */
          <div id="blog-skeleton-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
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
                    <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full mb-2 animate-pulse" />
                    <div className="w-4/5 h-3 bg-slate-100 dark:bg-slate-800 rounded-full mb-2 animate-pulse" />
                  </div>
                  <div className="w-24 h-4 bg-slate-100 dark:bg-slate-800 rounded-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          /* Error State */
          <div id="blog-error-state" className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto">
            <div className="p-4 rounded-full bg-red-50 dark:bg-red-500/10 text-red-500 mb-6 border border-red-100 dark:border-red-500/20">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mb-2">
              Synchronization Interrupted
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              {error}
            </p>
            <button 
              onClick={loadPosts}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-full shadow-lg shadow-blue-500/20 cursor-pointer flex items-center gap-2 transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Establish Direct Sync
            </button>
          </div>
        ) : posts.length === 0 ? (
          /* Empty State */
          <div id="blog-empty-state" className="flex flex-col items-center justify-center py-20 text-center max-w-sm mx-auto">
            <div className="p-4 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-400 mb-6 border border-slate-100 dark:border-slate-800">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mb-2">
              No Articles Published
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              We are currently drafting new engineering blueprints. Return shortly to read our latest findings.
            </p>
          </div>
        ) : (
          /* Blog Grid */
          <div id="blog-listing-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((article, idx) => (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.05, 0.4) }}
                className="group bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[22px] shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between text-left h-full"
              >
                
                {/* Image Header with Lazy Loading and Hover Effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
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

                {/* Body Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-3.5 text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-500/80" /> {article.publishedAt}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-blue-500/80" /> {article.readingTime}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-base md:text-lg text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 line-clamp-2">
                      {article.title}
                    </h3>

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
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      Read Article <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
