import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Lock, 
  LayoutDashboard, 
  FileText, 
  Share2, 
  Download, 
  Upload, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowDownToLine, 
  CloudUpload, 
  AlertCircle,
  BookOpen,
  PhoneCall,
  Key
} from 'lucide-react';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

interface SharedFile {
  name: string;
  size: string;
  type: string;
  date: string;
}

export default function ClientPortalPage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [accessCode, setAccessCode] = useState<string>('');
  const [loginError, setLoginError] = useState<string | null>(null);
  
  const [activeSubTab, setActiveSubTab] = useState<'tracker' | 'files' | 'kb'>('tracker');
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [uploadedFiles, setUploadedFiles] = useState<SharedFile[]>([
    { name: "Apex_Luxury_Brand_Guidelines.pdf", size: "4.8 MB", type: "PDF Document", date: "June 24, 2026" },
    { name: "Figma_Desktop_Mockups_V3.fig", size: "22.1 MB", type: "Figma Design", date: "June 28, 2026" },
    { name: "HubSpot_CRM_Automation_Flows.json", size: "128 KB", type: "JSON Config", date: "July 01, 2026" }
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateMetaTags({
      title: "Secure Client Portal | Niaz Digital",
      description: "Access your project deliverables, track current development milestones, share branding files, and view operational knowledge bases on Niaz Digital's client console.",
      canonicalUrl: window.location.href,
      ogImage: logoImg
    });
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessCode.trim()) {
      setLoginError("Please supply an authorized contract access code.");
      return;
    }
    // Accept any code for demo ease, but suggest "NIAZ2026"
    setIsAuthenticated(true);
    setLoginError(null);
  };

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
    <section className="py-16 md:py-24 bg-[#FFFFFF] dark:bg-[#070913] min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Flagship
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!isAuthenticated ? (
            /* SECURE LOGIN CARD SCREEN */
            <motion.div 
              key="login-screen"
              className="max-w-md mx-auto py-12"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
            >
              <div className="bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-100 dark:border-slate-800 p-8 rounded-[32px] shadow-2xl text-center">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-full w-fit mx-auto mb-6">
                  <Lock className="w-8 h-8" />
                </div>
                
                <h2 className="font-display font-black text-2xl text-slate-900 dark:text-white mb-2">Secure Portal Access</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  Please enter your custom project contract access code to sync with your dynamic workspace. For demo view, you may use code <b>NIAZ2026</b>.
                </p>

                <form onSubmit={handleLogin} className="flex flex-col gap-4 text-left">
                  <div>
                    <label className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-2">Project Access Code</label>
                    <div className="relative">
                      <Key className="absolute left-4 top-3.5 w-4.5 h-4.5 text-slate-400" />
                      <input 
                        type="text"
                        required
                        value={accessCode}
                        onChange={(e) => setAccessCode(e.target.value)}
                        placeholder="NIAZ2026"
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-850 rounded-xl text-xs font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  {loginError && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-3xs font-bold uppercase rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {loginError}
                    </div>
                  )}

                  <button 
                    type="submit"
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer shadow-lg shadow-blue-500/20 transition-all"
                  >
                    Establish Secure Session
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            /* COMPREHENSIVE DASHBOARD INTERACTIVE AREA */
            <motion.div 
              key="dashboard-area"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10"
            >
              
              {/* Sidebar Menu Panel */}
              <div className="col-span-1 lg:col-span-3 flex flex-col gap-4 text-left">
                <div className="p-6 bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100/50 dark:border-slate-900 rounded-[24px]">
                  <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-4">Active Workspace</span>
                  <span className="font-display font-bold text-slate-900 dark:text-white text-base block mb-1">Apex Brands Inc.</span>
                  <span className="text-3xs font-semibold text-emerald-500 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">Active Retainer</span>
                </div>

                <div className="flex flex-col gap-1">
                  <button 
                    onClick={() => setActiveSubTab('tracker')}
                    className={`p-4 rounded-xl text-xs font-bold uppercase tracking-wider text-left flex items-center gap-3 transition-colors cursor-pointer ${activeSubTab === 'tracker' ? 'bg-blue-600 text-white' : 'hover:bg-slate-50 dark:hover:bg-slate-900/50 text-slate-500 dark:text-slate-400'}`}
                  >
                    <LayoutDashboard className="w-4.5 h-4.5" />
                    Milestone Tracker
                  </button>
                  <button 
                    onClick={() => setActiveSubTab('files')}
                    className={`p-4 rounded-xl text-xs font-bold uppercase tracking-wider text-left flex items-center gap-3 transition-colors cursor-pointer ${activeSubTab === 'files' ? 'bg-blue-600 text-white' : 'hover:bg-slate-50 dark:hover:bg-slate-900/50 text-slate-500 dark:text-slate-400'}`}
                  >
                    <Share2 className="w-4.5 h-4.5" />
                    Deliverables & Files ({uploadedFiles.length})
                  </button>
                  <button 
                    onClick={() => setActiveSubTab('kb')}
                    className={`p-4 rounded-xl text-xs font-bold uppercase tracking-wider text-left flex items-center gap-3 transition-colors cursor-pointer ${activeSubTab === 'kb' ? 'bg-blue-600 text-white' : 'hover:bg-slate-50 dark:hover:bg-slate-900/50 text-slate-500 dark:text-slate-400'}`}
                  >
                    <BookOpen className="w-4.5 h-4.5" />
                    Knowledge Base
                  </button>
                </div>
              </div>

              {/* Central Content Panel */}
              <div className="col-span-1 lg:col-span-9 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-100 dark:border-slate-800/80 p-8 rounded-[32px] shadow-sm">
                
                <AnimatePresence mode="wait">
                  {activeSubTab === 'tracker' && (
                    <motion.div 
                      key="tracker-panel"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-col gap-6"
                    >
                      <div>
                        <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-2">Milestone Progress Timeline</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Inspecting actual real-time roadmap completions and pending sprint blocks.</p>
                      </div>

                      <div className="flex flex-col gap-4">
                        {trackerMilestones.map((mil, idx) => (
                          <div 
                            key={idx}
                            className="p-5 bg-slate-50/50 dark:bg-slate-950/20 border border-slate-100/50 dark:border-slate-900 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 text-left"
                          >
                            <div>
                              <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-1">{mil.title}</h4>
                              <p className="text-3xs text-slate-400">{mil.date}</p>
                            </div>

                            <div className="flex items-center gap-4 shrink-0">
                              <div className="w-32 bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-blue-600 h-full" style={{ width: `${mil.progress}%` }} />
                              </div>
                              <span className="text-3xs font-mono font-bold text-slate-400">{mil.progress}%</span>
                              
                              {mil.status === 'completed' && <span className="text-3xs font-black uppercase text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">Done</span>}
                              {mil.status === 'active' && <span className="text-3xs font-black uppercase text-blue-500 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full animate-pulse">Active</span>}
                              {mil.status === 'pending' && <span className="text-3xs font-black uppercase text-slate-400 bg-slate-500/10 border border-slate-500/15 px-2 py-0.5 rounded-full">Scheduled</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeSubTab === 'files' && (
                    <motion.div 
                      key="files-panel"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-col gap-6"
                    >
                      <div>
                        <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-2">Deliverables Compartment</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Download authorized assets or drop custom assets directly to our developer team.</p>
                      </div>

                      {/* Dropzone */}
                      <div 
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`py-12 border-2 border-dashed rounded-[22px] flex flex-col items-center justify-center transition-all cursor-pointer ${dragOver ? 'border-blue-500 bg-blue-500/5' : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 hover:bg-slate-50 dark:hover:bg-slate-950/40'}`}
                      >
                        <CloudUpload className="w-10 h-10 text-slate-400 mb-4" />
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Drag and Drop Brand Assets</span>
                        <p className="text-3xs text-slate-400 mb-4">Files up to 50MB (Figma, PNG, PDF, JSON)</p>
                        
                        <label className="px-4.5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs uppercase tracking-wider rounded-lg transition-all cursor-pointer">
                          Select Manually
                          <input 
                            type="file" 
                            multiple 
                            onChange={handleFileSelect} 
                            className="hidden" 
                          />
                        </label>
                      </div>

                      {/* Files list */}
                      <div className="flex flex-col gap-3">
                        {uploadedFiles.map((file, idx) => (
                          <div 
                            key={idx}
                            className="p-4 bg-slate-50/30 dark:bg-slate-950/10 border border-slate-100 dark:border-slate-900 rounded-xl flex items-center justify-between text-left hover:shadow-sm"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2.5 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-lg">
                                <FileText className="w-5 h-5" />
                              </div>
                              <div>
                                <span className="text-xs font-bold text-slate-800 dark:text-white block truncate max-w-xs md:max-w-md">{file.name}</span>
                                <span className="text-3xs text-slate-400 block mt-0.5">{file.size} &bull; {file.type} &bull; {file.date}</span>
                              </div>
                            </div>

                            <button className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-blue-600 hover:text-white text-slate-400 transition-all cursor-pointer">
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeSubTab === 'kb' && (
                    <motion.div 
                      key="kb-panel"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-col gap-6"
                    >
                      <div>
                        <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-2">Systems Knowledge Base</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Exclusive operational tutorials prepared for our contract clients.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {kbArticles.map((art, i) => (
                          <div 
                            key={i}
                            className="p-6 bg-slate-50/50 dark:bg-slate-950/20 border border-slate-100/50 dark:border-slate-900 rounded-2xl flex flex-col justify-between text-left hover:shadow-md transition-shadow"
                          >
                            <div>
                              <span className="text-3xs font-mono font-bold text-blue-500 block mb-3">{art.readTime}</span>
                              <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-2">{art.title}</h4>
                              <p className="text-3xs text-slate-400 leading-relaxed mb-6">{art.desc}</p>
                            </div>
                            
                            <span className="text-3xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 cursor-pointer hover:underline">
                              Read Tutorial &rarr;
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
