/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  FileText, 
  Share2, 
  Download, 
  Upload, 
  HelpCircle, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  ChevronRight,
  BookOpen,
  ArrowDownToLine,
  CloudUpload,
  AlertCircle
} from 'lucide-react';

interface SharedFile {
  name: string;
  size: string;
  type: string;
  date: string;
}

export default function ClientDashboard() {
  const [activeSubTab, setActiveSubTab] = useState<'tracker' | 'files' | 'kb'>('tracker');
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [uploadedFiles, setUploadedFiles] = useState<SharedFile[]>([
    { name: "Apex_Luxury_Brand_Guidelines.pdf", size: "4.8 MB", type: "PDF Document", date: "June 24, 2026" },
    { name: "Figma_Desktop_Mockups_V3.fig", size: "22.1 MB", type: "Figma Design", date: "June 28, 2026" },
    { name: "HubSpot_CRM_Automation_Flows.json", size: "128 KB", type: "JSON Config", date: "July 01, 2026" }
  ]);

  // Handle mock file uploads (with drag and drop!)
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files) as File[];
    
    // Add file metadata to state
    if (files.length > 0) {
      const newFiles = files.map(f => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
        type: f.type || "Generic Binary",
        date: "Today"
      }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? (Array.from(e.target.files) as File[]) : [];
    if (files.length > 0) {
      const newFiles = files.map(f => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
        type: f.type || "Generic Binary",
        date: "Today"
      }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const trackerMilestones = [
    { title: "Phase 1: Brand Strategy & Figma Layouts", progress: 100, status: "completed", date: "Completed June 20, 2026" },
    { title: "Phase 2: High-Fidelity UI Design Approval", progress: 100, status: "completed", date: "Completed June 28, 2026" },
    { title: "Phase 3: Front-End Next.js Assembly", progress: 85, status: "active", date: "Estimated Completion July 14, 2026" },
    { title: "Phase 4: CRM Integration & n8n Syncing", progress: 40, status: "pending", date: "Scheduled July 18, 2026" },
    { title: "Phase 5: Lighthouse Optimization & Deploy", progress: 0, status: "pending", date: "Scheduled July 22, 2026" }
  ];

  const kbArticles = [
    { title: "How to connect your NextJS client to Vercel DNS", desc: "A simple step-by-step guideline detailing how to config custom domains, configure CNAME offsets, and activate free SSL bindings on Vercel consoles.", readTime: "3 min read" },
    { title: "Managing your automated HubSpot contact pipelines", desc: "Explaining how CRM webhook integrations allocate new lead scorings directly into sales team pipelines, and configuring email auto-triggers.", readTime: "5 min read" },
    { title: "Reviewing campaign performance inside Google Analytics 4", desc: "How to drill down into unique conversion parameters, track specific button clicks, and monitor checkout exit funnels.", readTime: "4 min read" }
  ];

  return (
    <section 
      id="dashboard" 
      className="py-24 bg-slate-50/50 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
            Client Portal Sandbox
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            Pristine project tracking. Absolute visibility at every step.
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Welcome to your digital flagship console. NiazDigital client portal provides real-time milestone completions, direct secure asset downloads, and a full-suite self-help knowledge base.
          </p>
        </div>

        {/* Console Workspace Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel options */}
          <div className="col-span-1 lg:col-span-3 bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[22px] p-5 text-left shadow-sm">
            
            {/* Active profile card */}
            <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
              <div className="relative w-11 h-11 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 flex items-center justify-center font-display font-bold text-sm">
                AL
              </div>
              <div>
                <span className="text-3xs font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">CLIENT PORTAL</span>
                <span className="text-sm font-bold text-slate-800 dark:text-white block mt-0.5">Apex Luxury Ltd</span>
                <span className="text-4xs text-slate-400 block mt-0.5">Project ID: AL-9204</span>
              </div>
            </div>

            {/* Menu options list */}
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setActiveSubTab('tracker')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors cursor-pointer ${
                  activeSubTab === 'tracker'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <LayoutDashboard className="w-4.5 h-4.5" />
                Project Milestone Tracker
              </button>

              <button
                onClick={() => setActiveSubTab('files')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors cursor-pointer ${
                  activeSubTab === 'files'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <FileText className="w-4.5 h-4.5" />
                File Sharing Portal
              </button>

              <button
                onClick={() => setActiveSubTab('kb')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors cursor-pointer ${
                  activeSubTab === 'kb'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <BookOpen className="w-4.5 h-4.5" />
                Self-Help Knowledge Base
              </button>
            </div>

            <hr className="border-slate-100 dark:border-slate-800 my-5" />

            {/* Micro warning footer */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-start gap-2 text-4xs leading-normal text-slate-400">
              <AlertCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>This console displays simulated project parameters. Authentic clients are allocated separate encrypted workspace links.</span>
            </div>

          </div>

          {/* Right panel interactive render */}
          <div className="col-span-1 lg:col-span-9 bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[22px] p-6 md:p-8 min-h-[420px] shadow-sm text-left">
            <AnimatePresence mode="wait">
              
              {/* Tracker Panel */}
              {activeSubTab === 'tracker' && (
                <motion.div
                  key="tracker"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div>
                      <h3 className="font-display font-black text-slate-800 dark:text-white text-base">Development Milestone Tracker</h3>
                      <p className="text-3xs text-slate-400">Track visual mockup signoffs and engineering metrics live.</p>
                    </div>
                    <span className="text-3xs font-extrabold text-blue-600 bg-blue-50 dark:bg-blue-500/10 px-3 py-1.5 rounded-full uppercase tracking-wider shrink-0">
                      Phase 3 Active (77% overall)
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    {trackerMilestones.map((m, idx) => (
                      <div 
                        key={idx}
                        className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div className="flex items-start gap-3 text-left">
                          {m.status === 'completed' ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          ) : m.status === 'active' ? (
                            <Clock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5 animate-pulse" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-slate-200 shrink-0 mt-0.5" />
                          )}
                          <div>
                            <span className="text-xs font-bold text-slate-800 dark:text-white block">{m.title}</span>
                            <span className="text-3xs text-slate-400 block mt-0.5">{m.date}</span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="flex items-center gap-3 w-full md:w-48">
                          <div className="flex-grow h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${m.status === 'completed' ? 'bg-emerald-500' : 'bg-blue-600'}`}
                              style={{ width: `${m.progress}%` }}
                            />
                          </div>
                          <span className="font-mono text-2xs font-bold text-slate-500 shrink-0">{m.progress}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Files Panel */}
              {activeSubTab === 'files' && (
                <motion.div
                  key="files"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div>
                      <h3 className="font-display font-black text-slate-800 dark:text-white text-base">File Sharing & Delivery Portal</h3>
                      <p className="text-3xs text-slate-400">Download pristine wireframe PDFs, design system packs, and configuration codes securely.</p>
                    </div>
                  </div>

                  {/* Drag and Drop File Upload Area */}
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center flex flex-col items-center justify-center transition-all ${
                      dragOver
                        ? 'border-blue-500 bg-blue-50/20'
                        : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50/50'
                    }`}
                  >
                    <CloudUpload className="w-10 h-10 text-slate-300 mb-2" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Drag & Drop project files here</span>
                    <span className="text-3xs text-slate-400 mt-1 block">Maximum upload file volume is 50 MB (Supports .fig, .pdf, .json, .zip)</span>
                    
                    {/* Manual selection */}
                    <label className="mt-3 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg text-3xs font-extrabold text-slate-700 dark:text-slate-300 cursor-pointer">
                      Browse Files
                      <input 
                        type="file" 
                        multiple 
                        className="hidden" 
                        onChange={handleFileSelect}
                      />
                    </label>
                  </div>

                  {/* Files List */}
                  <div className="flex flex-col gap-3">
                    <span className="text-3xs font-bold text-slate-400 uppercase tracking-wider block">Shared Deliverables Repository</span>
                    {uploadedFiles.map((file, i) => (
                      <div 
                        key={i}
                        className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50/30 dark:bg-slate-800/10"
                      >
                        <div className="flex items-center gap-3 text-left overflow-hidden">
                          <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                            <FileText className="w-4.5 h-4.5" />
                          </div>
                          <div className="overflow-hidden">
                            <span className="text-xs font-bold text-slate-800 dark:text-white block truncate">{file.name}</span>
                            <span className="text-4xs text-slate-400 block mt-0.5">{file.type} &bull; {file.size} &bull; {file.date}</span>
                          </div>
                        </div>

                        {/* Direct mock download */}
                        <button
                          onClick={() => alert(`Simulating premium delivery. Downloading: ${file.name}`)}
                          className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 text-slate-500 hover:text-blue-600 shrink-0 cursor-pointer"
                          title="Download shared resource"
                        >
                          <ArrowDownToLine className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Knowledge Base Panel */}
              {activeSubTab === 'kb' && (
                <motion.div
                  key="kb"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div>
                      <h3 className="font-display font-black text-slate-800 dark:text-white text-base">Self-Help Knowledge Base</h3>
                      <p className="text-3xs text-slate-400">Essential tutorial guidelines for configuring active domains, webhooks, and analytics dashboards.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {kbArticles.map((art, i) => (
                      <div 
                        key={i}
                        className="p-5 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between text-left hover:border-blue-500 dark:hover:border-blue-500/30 transition-all cursor-pointer group"
                      >
                        <div>
                          <span className="text-3xs text-blue-600 dark:text-blue-400 font-extrabold uppercase block mb-1">{art.readTime}</span>
                          <h4 className="font-bold text-xs text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                            {art.title}
                          </h4>
                          <p className="text-3xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                            {art.desc}
                          </p>
                        </div>
                        <span className="text-3xs font-extrabold text-blue-600 dark:text-blue-400 group-hover:underline flex items-center gap-1 mt-4">
                          Read Article <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
