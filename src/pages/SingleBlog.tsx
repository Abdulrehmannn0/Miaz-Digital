/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Link2, 
  AlertCircle, 
  RefreshCw, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  List 
} from 'lucide-react';
import { fetchPostBySlug, fetchRelatedPosts, updateMetaTags } from '../lib/wordpress';
import { BlogArticle } from '../types';

export default function SingleBlog() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [post, setPost] = useState<BlogArticle | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [processedHtml, setProcessedHtml] = useState<string>('');

  const loadPostData = async () => {
    if (!slug) return;
    setLoading(true);
    setError(null);
    try {
      const article = await fetchPostBySlug(slug);
      if (!article) {
        setError("Article not found. The post may have been draft-decommissioned or modified.");
        setPost(null);
        return;
      }
      setPost(article);

      // Process content to add IDs to Headings for Table of Contents
      const parser = new DOMParser();
      const doc = parser.parseFromString(article.content, 'text/html');
      const headingElements = doc.querySelectorAll('h2, h3');
      const extractedHeadings = Array.from(headingElements).map((el, index) => {
        const text = el.textContent || "";
        const id = `heading-${index}`;
        el.setAttribute('id', id);
        return {
          id,
          text,
          level: parseInt(el.tagName.replace('H', ''))
        };
      });
      setHeadings(extractedHeadings);
      setProcessedHtml(doc.body.innerHTML);

      // Fetch related articles
      const related = await fetchRelatedPosts(article.id);
      setRelatedPosts(related);

      // Dynamic SEO tag injection
      updateMetaTags({
        title: `${article.title} | Niaz Digital Journal`,
        description: article.excerpt,
        canonicalUrl: window.location.href,
        ogImage: article.image
      });

    } catch (err: any) {
      setError(err?.message || "Failed to sync detailed post parameters from Niaz Digital WordPress database.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPostData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post?.title || '')}&url=${encodeURIComponent(window.location.href)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
  };

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] dark:bg-[#070913] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link 
            to="/blog"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-fit group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </Link>
        </div>

        {loading ? (
          /* Detailed Article Skeleton */
          <div id="blog-post-skeleton" className="max-w-4xl mx-auto">
            <div className="w-20 h-4 bg-slate-100 dark:bg-slate-800 rounded-full mb-4 animate-pulse" />
            <div className="w-full h-12 bg-slate-200 dark:bg-slate-800 rounded-xl mb-6 animate-pulse" />
            <div className="w-4/5 h-12 bg-slate-200 dark:bg-slate-800 rounded-xl mb-8 animate-pulse" />
            <div className="w-full aspect-[21/9] bg-slate-100 dark:bg-slate-800/60 rounded-3xl mb-12 animate-pulse" />
            <div className="space-y-4">
              <div className="w-full h-4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
              <div className="w-5/6 h-4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
              <div className="w-full h-4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
              <div className="w-3/4 h-4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
            </div>
          </div>
        ) : error ? (
          /* Error State */
          <div id="blog-post-error" className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto">
            <div className="p-4 rounded-full bg-red-50 dark:bg-red-500/10 text-red-500 mb-6 border border-red-100 dark:border-red-500/20">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mb-2">
              Sync Interrupted
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              {error}
            </p>
            <button 
              onClick={loadPostData}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-full shadow-lg shadow-blue-500/20 cursor-pointer flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4 animate-spin-slow" />
              Sync Article Data
            </button>
          </div>
        ) : post ? (
          /* Full Article Content */
          <article className="max-w-4xl mx-auto">
            
            {/* Metadata Badges */}
            <div className="mb-6">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest px-3 py-1 bg-blue-50 dark:bg-blue-900/15 rounded-full inline-block mb-4">
                {post.category} JOURNAL
              </span>
              <h1 className="text-3xl md:text-5.5xl font-display font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-400 dark:text-slate-400 font-semibold border-b border-slate-100 dark:border-slate-800/60 pb-8">
                <div className="flex items-center gap-2">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-slate-800"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-slate-800 dark:text-slate-200 block text-xs font-bold leading-none">{post.author.name}</span>
                    <span className="text-[9px] text-slate-400 uppercase mt-0.5 block">{post.author.role}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-blue-500" /> {post.publishedAt}</div>
                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-500" /> {post.readingTime}</div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="w-full aspect-[21/10] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-100 dark:border-slate-800 shadow-sm">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Two Column Layout: TOC + Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
              
              {/* Left Column: Table of Contents & Social Shares */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-8 order-2 lg:order-1">
                
                {/* Table of Contents */}
                {headings.length > 0 && (
                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80">
                    <div className="flex items-center gap-2 mb-4 text-slate-800 dark:text-slate-200">
                      <List className="w-4.5 h-4.5 text-blue-500" />
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider">Table of Contents</h4>
                    </div>
                    <nav className="flex flex-col gap-2.5">
                      {headings.map((h, i) => (
                        <a 
                          key={i}
                          href={`#${h.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }}
                          className={`text-xs hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                            h.level === 3 ? 'pl-3 text-slate-400 dark:text-slate-500' : 'font-semibold text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {h.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Social Share Column */}
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-blue-500" /> Share This Article
                  </h4>
                  <div className="flex gap-2">
                    <a 
                      href={shareUrls.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-500/10 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-100 dark:border-slate-700/60 rounded-xl transition-colors cursor-pointer flex-1 flex items-center justify-center"
                      title="Share on Facebook"
                    >
                      <Facebook className="w-4.5 h-4.5" />
                    </a>
                    <a 
                      href={shareUrls.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-500/10 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-100 dark:border-slate-700/60 rounded-xl transition-colors cursor-pointer flex-1 flex items-center justify-center"
                      title="Share on Twitter"
                    >
                      <Twitter className="w-4.5 h-4.5" />
                    </a>
                    <a 
                      href={shareUrls.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-500/10 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-100 dark:border-slate-700/60 rounded-xl transition-colors cursor-pointer flex-1 flex items-center justify-center"
                      title="Share on LinkedIn"
                    >
                      <Linkedin className="w-4.5 h-4.5" />
                    </a>
                    <button 
                      onClick={handleCopyLink}
                      className="p-3 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-500/10 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-100 dark:border-slate-700/60 rounded-xl transition-colors cursor-pointer flex-1 flex items-center justify-center"
                      title="Copy Article URL"
                    >
                      {copied ? <Check className="w-4.5 h-4.5 text-emerald-500 animate-pulse" /> : <Link2 className="w-4.5 h-4.5" />}
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: HTML Rich Content Body */}
              <div className="lg:col-span-8 order-1 lg:order-2">
                <div 
                  className="wp-rendered-content text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-medium space-y-6 
                    [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-slate-600 [&>p]:dark:text-slate-300
                    [&>h2]:font-display [&>h2]:font-black [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:text-slate-900 [&>h2]:dark:text-white [&>h2]:pt-6 [&>h2]:pb-2 [&>h2]:tracking-tight
                    [&>h3]:font-display [&>h3]:font-extrabold [&>h3]:text-lg [&>h3]:text-slate-900 [&>h3]:dark:text-white [&>h3]:pt-4 [&>h3]:pb-1 [&>h3]:tracking-tight
                    [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6 [&>ul]:space-y-2 [&>ul]:text-slate-600 [&>ul]:dark:text-slate-300
                    [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-6 [&>ol]:space-y-2 [&>ol]:text-slate-600 [&>ol]:dark:text-slate-300
                    [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-slate-500 [&>blockquote]:dark:text-slate-400 [&>blockquote]:my-6
                    [&>pre]:bg-slate-50 [&>pre]:dark:bg-slate-900 [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:overflow-x-auto [&>pre]:font-mono [&>pre]:text-xs [&>pre]:border [&>pre]:border-slate-100 [&>pre]:dark:border-slate-800/80 [&>pre]:my-6
                    [&>figure]:my-8 [&>figure>img]:rounded-2xl [&>figure>img]:w-full [&>figure>figcaption]:text-center [&>figure>figcaption]:text-3xs [&>figure>figcaption]:text-slate-400 [&>figure>figcaption]:mt-2"
                  dangerouslySetInnerHTML={{ __html: processedHtml }}
                />

                {/* Article Tags */}
                {post.tags.length > 0 && (
                  <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 px-3 py-1 rounded-full uppercase tracking-wider"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </div>

            <hr className="border-slate-100 dark:border-slate-800/60 my-16" />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12 text-left">
                <h3 className="font-display font-black text-lg md:text-xl text-slate-900 dark:text-white tracking-tight mb-8">
                  Related Insights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((rPost) => (
                    <Link 
                      key={rPost.id} 
                      to={`/blog/${rPost.slug}`}
                      className="group flex flex-col justify-between bg-white/40 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-850 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all"
                    >
                      <div>
                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-50 mb-3.5">
                          <img 
                            src={rPost.image} 
                            alt={rPost.title} 
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h4 className="font-display font-bold text-xs md:text-sm text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                          {rPost.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 mt-3 block group-hover:underline">
                        Read Article &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </article>
        ) : null}
        
      </div>
    </section>
  );
}
