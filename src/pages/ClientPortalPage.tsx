import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Lock, 
  AlertCircle,
  Key
} from 'lucide-react';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';
import DashboardLayout from '../components/dashboard/DashboardLayout';

export default function ClientPortalPage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [accessCode, setAccessCode] = useState<string>('');
  const [loginError, setLoginError] = useState<string | null>(null);

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

  if (isAuthenticated) {
    return <DashboardLayout />;
  }

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
          {/* SECURE LOGIN CARD SCREEN */}
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
        </AnimatePresence>

      </div>
    </section>
  );
}
