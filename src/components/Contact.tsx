/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Calendar, 
  Send, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  PhoneCall, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Github,
  Award
} from 'lucide-react';
import { FOUNDER_DATA } from '../data';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [service, setService] = useState<string>('Website & Custom Web App');
  const [budget, setBudget] = useState<string>('$5,000 - $10,000');
  const [timeline, setTimeline] = useState<string>('4 - 6 Weeks');
  const [message, setMessage] = useState<string>('');
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database secure sync
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  const socialIcons = {
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    github: Github
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-[#FFFFFF] dark:bg-[#070913] border-t border-slate-100/50 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel info */}
          <div className="col-span-1 lg:col-span-5 text-left flex flex-col gap-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
                Secure Consultation
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-5">
                Initiate your digital flagship transformation.
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Skip the generic agency hierarchy. By submitting your inbound project brief, you gain direct access to our technical founder Niaz Ahmed. We respond within 12 hours with a comprehensive technical specification.
              </p>
            </div>

            {/* Core credentials checklist */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 dark:text-white block">Protected Contract Clauses</span>
                  <span className="text-3xs text-slate-400 block mt-0.5">Comprehensive NDA parameters and copyright protections.</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 dark:text-white block">12-Hour Callback Promise</span>
                  <span className="text-3xs text-slate-400 block mt-0.5">We respond with calendar booking triggers within half a day.</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 dark:text-white block">No Hidden Commission / Retainers</span>
                  <span className="text-3xs text-slate-400 block mt-0.5">Absolute pricing transparency backed by detailed task metrics.</span>
                </div>
              </div>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Direct Connect Details */}
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                <Mail className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                <a href="mailto:info@niazdigital.com" className="hover:underline font-semibold">info@niazdigital.com</a>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                <MapPin className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                <span className="font-semibold">Prestige Business Hub, London & Dubai Offices</span>
              </div>
            </div>

            {/* Social profiles */}
            <div className="flex items-center gap-3.5 mt-2">
              <span className="text-3xs font-bold text-slate-400 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-2">
                {Object.entries(FOUNDER_DATA.socials).map(([platform, url]) => {
                  const Icon = socialIcons[platform as keyof typeof socialIcons];
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-blue-600 hover:border-blue-500 transition-all shadow-sm"
                      title={platform}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right panel contact form */}
          <div className="col-span-1 lg:col-span-7 bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[32px] p-6 md:p-10 shadow-xl relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 text-left"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Company Name</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Apex Luxury Ltd"
                        className="w-full px-4 py-2.5 text-xs bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Sarah Jenkins"
                        className="w-full px-4 py-2.5 text-xs bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Corporate Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="s.jenkins@apexluxury.com"
                      className="w-full px-4 py-2.5 text-xs bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1.5">Required Capabilities Focus</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                    >
                      <option>Website & Custom Web App</option>
                      <option>Mobile App Development (iOS/Android)</option>
                      <option>SEO Optimizations & Content Strategy</option>
                      <option>AI Automations & CRM Webhooks Sync</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1.5">Target Budget Range</label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-2.5 text-xs bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                      >
                        <option>$3,000 - $5,000</option>
                        <option>$5,000 - $10,000</option>
                        <option>$10,000 - $25,000</option>
                        <option>$25,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1.5">Timeline Targets</label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-4 py-2.5 text-xs bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                      >
                        <option>2 - 4 Weeks</option>
                        <option>4 - 6 Weeks</option>
                        <option>6 - 10 Weeks</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Message / Project Goals Description</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly state your key business objectives and metrics goals..."
                      className="w-full px-4 py-2.5 text-xs bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 mt-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
                    {isSubmitting ? "Submitting Secure Brief..." : "Submit Project Inbound Brief &rarr;"}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 flex items-center justify-center shadow-lg border border-emerald-100">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white tracking-tight">
                    Project Brief Logged Successfully!
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. Your inquiry for <strong>{company || "your business"}</strong> has been securely logged under tracking ticket <strong>ND-{Math.floor(Math.random() * 9000) + 1000}</strong>.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 text-left w-full max-w-md text-3xs flex flex-col gap-2 font-medium">
                    <div className="flex justify-between text-slate-400">
                      <span>Assigned Expert:</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200">Niaz Ahmed (Founder)</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Callback Promise:</span>
                      <span className="font-bold text-blue-600">Within 12 Hours</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer"
                  >
                    Submit another briefing
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
