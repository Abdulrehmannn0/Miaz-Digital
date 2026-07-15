import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Mail, 
  MapPin, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  PhoneCall, 
  Linkedin, 
  Instagram,
  RefreshCw
} from 'lucide-react';
import { FOUNDER_DATA } from '../data';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

export default function ContactPage() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [service, setService] = useState<string>('Website Design & Development');
  const [budget, setBudget] = useState<string>('$5,000 - $10,000');
  const [timeline, setTimeline] = useState<string>('4 - 6 Weeks');
  const [message, setMessage] = useState<string>('');
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateMetaTags({
      title: "Contact & Onboarding | Niaz Digital",
      description: "Submit your custom project brief directly to Azhar Uddin at Niaz Digital. Get a full technical and speed specification layout in 12 hours.",
      canonicalUrl: window.location.href,
      ogImage: logoImg
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database secure sync
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] dark:bg-[#070913] min-h-screen relative overflow-hidden">
      {/* Glow shapes */}
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel - Info & Credentials */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-10">
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
                Secure Consultation
              </span>
              <h1 className="text-4xl md:text-5.5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-none mb-6">
                Onboard Your Flagship.
              </h1>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Submit your direct project specs to gain instant access to founder Azhar Uddin. We structure technical replies, speed projections, and design layouts within 12 business hours.
              </p>
            </div>

            {/* Quick trust metrics */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                  <ShieldCheck className="w-5.5 h-5.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 dark:text-white block">Strict NDA Protections</span>
                  <span className="text-3xs text-slate-400 block mt-0.5">Your operational and proprietary secrets are legally protected.</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                  <Clock className="w-5.5 h-5.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 dark:text-white block">12-Hour Client Callback Guarantee</span>
                  <span className="text-3xs text-slate-400 block mt-0.5">We respond with calendar availability within half a business day.</span>
                </div>
              </div>
            </div>

            {/* Direct details info */}
            <div className="border-t border-slate-100 dark:border-slate-900 pt-8 flex flex-col gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <a href={`mailto:${FOUNDER_DATA.email}`} className="hover:text-blue-500">{FOUNDER_DATA.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>India &bull; Global Operations</span>
              </div>
            </div>
          </div>

          {/* Right panel - Interactive Intake Form */}
          <div className="col-span-1 lg:col-span-7 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-100 dark:border-slate-800/80 p-8 md:p-10 rounded-[32px] shadow-lg">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-2">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Azhar Uddin"
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-850 rounded-xl text-xs font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-2">Corporate Email</label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="azhar@niazdigital.com"
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-850 rounded-xl text-xs font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-2">Company / Agency Name</label>
                    <input 
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Niaz Digital Ltd"
                      className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-850 rounded-xl text-xs font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-800 dark:text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-2">Target Offering</label>
                      <select 
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-850 rounded-xl text-xs font-semibold focus:outline-none text-slate-850 dark:text-slate-200"
                      >
                        <option>Website Design & Development</option>
                        <option>Search Engine Optimization (SEO)</option>
                        <option>Social Media Management</option>
                        <option>AI Workflow Automation</option>
                        <option>Executive & Virtual Assistance</option>
                        <option>Branding & Visual Identity</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-2">Project Budget</label>
                      <select 
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-850 rounded-xl text-xs font-semibold focus:outline-none text-slate-850 dark:text-slate-200"
                      >
                        <option>$1,000 - $3,000</option>
                        <option>$3,000 - $5,000</option>
                        <option>$5,000 - $10,000</option>
                        <option>$10,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-2">Timeline Range</label>
                      <select 
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-850 rounded-xl text-xs font-semibold focus:outline-none text-slate-850 dark:text-slate-200"
                      >
                        <option>1 - 3 Weeks</option>
                        <option>4 - 6 Weeks</option>
                        <option>6+ Weeks</option>
                        <option>Ongoing retainer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-2">Project Brief & Objectives</label>
                    <textarea 
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your target goals, core pages required, system Integrations needed..."
                      className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-850 rounded-xl text-xs font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-800 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4.5 h-4.5 animate-spin" />
                        Synchronizing Secure Brief...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Project Intake Brief
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-screen"
                  className="py-16 text-center flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 text-emerald-500 flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white mb-2">Brief Successfully Logged</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed mb-8">
                    Your incoming strategic brief has been locked and routed directly to Azhar Uddin. We will contact you at <b>{email}</b> inside 12 hours with a comprehensive roadmap.
                  </p>
                  
                  <div className="flex gap-4">
                    <button 
                      onClick={() => navigate('/')}
                      className="px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                    >
                      Return Home
                    </button>
                    <a 
                      href="https://wa.me/919012403699"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-4 h-4" />
                      Instant WhatsApp
                    </a>
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
