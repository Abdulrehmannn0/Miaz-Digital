/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  HelpCircle, 
  FileText, 
  Key, 
  Video, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Copy, 
  Check,
  X,
  Sparkles,
  Search
} from 'lucide-react';

export default function KnowledgeBaseTab() {
  const [activeSubSection, setActiveSubSection] = useState<'faq' | 'docs' | 'brand' | 'creds' | 'videos'>('faq');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>("faq-1");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<{ title: string; desc: string } | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const faqs = [
    { id: "faq-1", q: "How do I map my custom corporate domain name?", a: "To map your custom domain, navigate to your DNS provider (Cloudflare, GoDaddy, Namecheap) and configure a CNAME record pointing to 'domains.niazdigital.com'. Make sure to disable any proxy clouds during initial SSL generation cycles. Validation takes up to 4 hours." },
    { id: "faq-2", q: "Where can I locate my active Stripe transaction receipts?", a: "All transactions are logged directly in your Invoices tab. When any transaction succeeds, Stripe automatically dispatches high-fidelity PDF receipts to your registered billing email John.doe@apexventures.co. If you require specialized corporate invoices, Azhar Uddin can issue manual PDF ledger statements." },
    { id: "faq-3", q: "How do we review staging build performance indicators?", a: "Every deployment build goes through an automated optimization cycle. You can audit performance indexes directly on your Overview progress ring. Our deployment metrics target a minimum Lighthouse speed rating of 95/100, checking server-side layout shifts and responsive viewport assets." }
  ];

  const docs = [
    { title: "Niaz_Digital_Apex_Scope_Statement.pdf", type: "Scope of Work PDF", size: "2.4 MB" },
    { title: "High_Fidelity_Figma_Asset_Grids.fig", type: "Source Figma Grid", size: "18.1 MB" },
    { title: "SMTP_Secure_Server_Configurations.docx", type: "Developer Specification Doc", size: "124 KB" }
  ];

  const brandColors = [
    { name: "Cosmic Midnight", hex: "#070913" },
    { name: "Niaz Electric Blue", hex: "#2563EB" },
    { name: "Emerald Mint", hex: "#10B981" },
    { name: "Stardust Gray", hex: "#F8FAFC" }
  ];

  const credentials = [
    { label: "Staging URL", value: "https://staging.apexventures.niazdigital.com", type: "link" },
    { label: "Figma File ID", value: "fig-9012-apex-luxury-interactive", type: "text" },
    { label: "HubSpot Sandbox ID", value: "hub-2904-apex-development", type: "text" }
  ];

  const tutorials = [
    { title: "Setting up DNS CNAME routing maps on Cloudflare", duration: "4 min video tutorial", desc: "Step-by-step guideline detailing how to add CNAME offsets, bypass cloud proxies, and configure SSL certifications for your custom URL bindings." },
    { title: "Mapping HubSpot lead webhook ingestions inside n8n", duration: "7 min video tutorial", desc: "Watch Azhar Uddin demonstrate how to configure secure n8n triggers, map JSON payloads into HubSpot CRM fields, and validation testing." }
  ];

  const handleCopyValue = (val: string, label: string) => {
    navigator.clipboard.writeText(val);
    setCopiedKey(label);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 text-left">
      <div>
        <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-2">Systems Knowledge Base</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Review sitemaps, brand guideline vectors, secure credentials, developer tutorials, and frequently asked technical accordion folds.</p>
      </div>

      {/* Selector pills */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
        {[
          { id: 'faq', label: 'FAQ Accordions', icon: HelpCircle },
          { id: 'docs', label: 'Contracts & Blueprints', icon: FileText },
          { id: 'brand', label: 'Brand Guidelines', icon: Sparkles },
          { id: 'creds', label: 'Credentials Shelf', icon: Key },
          { id: 'videos', label: 'Video Tutorials', icon: Video }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeSubSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubSection(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-3xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Subsections contents */}
      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          
          {/* FAQ Accordions Section */}
          {activeSubSection === 'faq' && (
            <motion.div 
              key="faq-sub"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {/* Search bar inside FAQ */}
              <div className="relative max-w-md">
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search FAQ articles..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200/65 dark:border-slate-800 rounded-xl text-xs font-semibold focus:outline-none focus:border-blue-500 text-slate-800 dark:text-white"
                />
              </div>

              <div className="space-y-3">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map(faq => {
                    const isExpanded = expandedFaqId === faq.id;
                    return (
                      <div 
                        key={faq.id} 
                        className="p-4 bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] rounded-xl hover:border-blue-500/20 transition-all cursor-pointer"
                        onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <h4 className="text-xs font-bold text-slate-800 dark:text-white leading-tight">
                            {faq.q}
                          </h4>
                          <span className="p-1 rounded bg-slate-50 dark:bg-slate-900 text-slate-400">
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </span>
                        </div>
                        {isExpanded && (
                          <p className="text-3xs text-slate-500 dark:text-slate-400 leading-relaxed mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                            {faq.a}
                          </p>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <span className="text-xs font-bold text-slate-400 block py-4 text-center">No FAQ matches search query</span>
                )}
              </div>
            </motion.div>
          )}

          {/* Scope Documents */}
          {activeSubSection === 'docs' && (
            <motion.div 
              key="docs-sub"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {docs.map((doc, idx) => (
                <div 
                  key={idx} 
                  className="p-4 bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] hover:border-blue-500/20 rounded-xl flex items-center justify-between gap-4 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold text-slate-800 dark:text-white block truncate max-w-xs">{doc.title}</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">{doc.type} &bull; {doc.size}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`Simulated Download of scope item: ${doc.title}`)}
                    className="p-2 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </motion.div>
          )}

          {/* Brand Colors guidelines */}
          {activeSubSection === 'brand' && (
            <motion.div 
              key="brand-sub"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4 text-left"
            >
              <span className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">Corporate Palette Guidelines</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {brandColors.map((color, idx) => (
                  <div key={idx} className="p-3 bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] rounded-xl flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-lg border border-slate-200 dark:border-slate-800" style={{ backgroundColor: color.hex }} />
                    <div>
                      <span className="text-[10px] font-bold text-slate-800 dark:text-white block">{color.name}</span>
                      <button 
                        onClick={() => handleCopyValue(color.hex, color.name)}
                        className="text-4xs font-mono font-bold text-slate-400 hover:text-blue-500 mt-1 inline-flex items-center gap-1 cursor-pointer"
                      >
                        {color.hex} {copiedKey === color.name ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Credentials Cabinet */}
          {activeSubSection === 'creds' && (
            <motion.div 
              key="creds-sub"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3 text-left"
            >
              <div className="p-4 bg-orange-500/5 border border-orange-500/10 rounded-2xl flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-3xs text-slate-500 dark:text-slate-400 leading-normal">
                  Credentials locked under <span className="font-bold text-slate-800 dark:text-white">HMAC hashes</span>. Use these parameters to log in to active sandboxes or inspect dynamic design boards.
                </p>
              </div>

              <div className="space-y-2.5">
                {credentials.map((cred, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-white dark:bg-[#0D1117] border border-slate-150 dark:border-[#1F2937] rounded-xl flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-[9px] uppercase font-bold text-slate-400">{cred.label}</span>
                      <span className="text-xs font-mono font-bold text-slate-850 dark:text-white block mt-0.5 truncate max-w-sm">{cred.value}</span>
                    </div>

                    <div className="shrink-0">
                      {cred.type === 'link' ? (
                        <a 
                          href={cred.value} 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3 py-1.5 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-4xs font-bold text-slate-650 dark:text-slate-350 uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
                        >
                          Visit <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <button
                          onClick={() => handleCopyValue(cred.value, cred.label)}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-250 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-4xs font-bold text-slate-650 dark:text-slate-350 uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
                        >
                          {copiedKey === cred.label ? 'Copied' : 'Copy'} {copiedKey === cred.label ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Video Tutorials playing simulator */}
          {activeSubSection === 'videos' && (
            <motion.div 
              key="videos-sub"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {tutorials.map((tut, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] rounded-2xl flex flex-col justify-between text-left hover:border-blue-500/20 transition-all cursor-pointer group"
                  onClick={() => setPlayingVideo({ title: tut.title, desc: tut.desc })}
                >
                  <div>
                    <span className="text-[9px] uppercase font-extrabold text-blue-600 dark:text-blue-400 tracking-wider block mb-1">{tut.duration}</span>
                    <h4 className="font-display font-bold text-xs text-slate-900 dark:text-white leading-snug group-hover:text-blue-500 transition-colors">
                      {tut.title}
                    </h4>
                    <p className="text-3xs text-slate-400 leading-relaxed mt-2 line-clamp-2">
                      {tut.desc}
                    </p>
                  </div>
                  
                  <span className="text-3xs font-extrabold text-blue-600 dark:text-blue-400 group-hover:underline flex items-center gap-1 mt-4">
                    Launch Tutorial Player &rarr;
                  </span>
                </div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {playingVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl flex flex-col text-left"
            >
              {/* Header */}
              <div className="p-5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/10">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-600 text-white rounded-lg">
                    <Video className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-850 dark:text-white truncate max-w-xs">{playingVideo.title}</h4>
                </div>
                <button 
                  onClick={() => setPlayingVideo(null)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Player Canvas */}
              <div className="p-8 flex flex-col items-center justify-center min-h-[250px] bg-slate-950 text-center space-y-4 relative">
                <div className="w-16 h-16 rounded-full bg-blue-600/20 text-blue-500 border-2 border-blue-600 flex items-center justify-center animate-pulse cursor-pointer hover:scale-110 transition-all">
                  <svg className="w-8 h-8 fill-blue-500 ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                
                <div className="space-y-1">
                  <span className="text-5xs font-mono font-bold tracking-widest text-slate-500 uppercase block">VIDEO TUTORIAL STREAM</span>
                  <span className="text-3xs font-semibold text-slate-300 block max-w-sm mt-1">{playingVideo.desc}</span>
                </div>

                <div className="absolute top-2 right-3 px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-5xs font-mono font-bold text-slate-400">
                  Staging Sandbox Player
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900/40 text-center text-5xs text-slate-400 font-mono">
                Encrypted Playback &bull; Azhar Uddin Operations Guide
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
