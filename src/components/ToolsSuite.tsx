/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  Sparkles, 
  SearchCode, 
  Brain, 
  TrendingUp, 
  DollarSign, 
  Wrench, 
  HelpCircle, 
  ArrowRight, 
  RefreshCw, 
  Cpu, 
  CheckCircle,
  FileCheck
} from 'lucide-react';

export default function ToolsSuite() {
  const [activeTab, setActiveTab] = useState<'estimator' | 'calculator' | 'seo' | 'roi'>('estimator');

  // ROI Calculator States
  const [adSpend, setAdSpend] = useState<number>(3000);
  const [targetRoas, setTargetRoas] = useState<number>(4.8);
  const [aov, setAov] = useState<number>(120);

  // SEO Audit States
  const [seoUrl, setSeoUrl] = useState<string>('');
  const [seoResult, setSeoResult] = useState<string>('');
  const [seoLoading, setSeoLoading] = useState<boolean>(false);
  const [seoProgress, setSeoProgress] = useState<string>('');

  // Cost Calculator States
  const [appType, setAppType] = useState<'landing' | 'corporate' | 'webapp' | 'mobile'>('corporate');
  const [screensRange, setScreensRange] = useState<'small' | 'medium' | 'large'>('medium');
  const [features, setFeatures] = useState<{ [key: string]: boolean }>({
    crm: true,
    cms: false,
    ai: true,
    stripe: false
  });

  // AI Project Estimator States
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [estService, setEstService] = useState<string>('Website & Custom Web App');
  const [estBudget, setEstBudget] = useState<string>('$5,000 - $10,000');
  const [estTimeline, setEstTimeline] = useState<string>('4 - 6 Weeks');
  const [estDesc, setEstDesc] = useState<string>('');
  const [estResult, setEstResult] = useState<string>('');
  const [estLoading, setEstLoading] = useState<boolean>(false);

  // Custom visual markdown formatter/renderer for Gemini responses
  const renderResponseMarkdown = (text: string) => {
    if (!text) return null;
    const lines = text.split('\n');
    return (
      <div className="flex flex-col gap-3 text-left font-sans text-xs leading-relaxed text-slate-700 dark:text-slate-300">
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          if (trimmed.startsWith('###')) {
            return (
              <h4 key={idx} className="font-display font-extrabold text-sm text-slate-900 dark:text-white mt-4 border-b border-slate-100 dark:border-slate-800 pb-1.5 uppercase tracking-wider">
                {trimmed.replace('###', '').trim()}
              </h4>
            );
          }
          if (trimmed.startsWith('##')) {
            return (
              <h3 key={idx} className="font-display font-black text-base text-blue-600 dark:text-blue-400 mt-5 uppercase tracking-widest">
                {trimmed.replace('##', '').trim()}
              </h3>
            );
          }
          if (trimmed.startsWith('*') || trimmed.startsWith('-')) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-4">
                <span className="text-blue-500 shrink-0 mt-1">&bull;</span>
                <span>{trimmed.replace(/^[\*\-\+]\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1')}</span>
              </div>
            );
          }
          if (trimmed.match(/^\d+\./)) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-4">
                <span className="font-bold text-indigo-500 shrink-0">{trimmed.match(/^\d+\./)?.[0]}</span>
                <span>{trimmed.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1')}</span>
              </div>
            );
          }
          if (trimmed === '') return <div key={idx} className="h-2" />;
          
          // Replace simple bold markers
          const formatted = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          return (
            <p key={idx} dangerouslySetInnerHTML={{ __html: formatted }} />
          );
        })}
      </div>
    );
  };

  // Trigger server-side Gemini SEO Audit
  const handleSeoAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!seoUrl) return;
    setSeoLoading(true);
    setSeoResult('');
    
    // Smooth reassuring loader progress updates
    const progressMsgs = [
      "Establishing connection to target host...",
      "Analyzing semantic title structure & CLS values...",
      "Parsing missing schema-LD blocks...",
      "Consulting Gemini SEO model for competitive advisory blueprint..."
    ];
    setSeoProgress(progressMsgs[0]);
    let progressIdx = 0;
    const interval = setInterval(() => {
      progressIdx = (progressIdx + 1) % progressMsgs.length;
      setSeoProgress(progressMsgs[progressIdx]);
    }, 1500);

    try {
      const res = await fetch('/api/seo-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: seoUrl })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setSeoResult(data.text);
    } catch (err: any) {
      setSeoResult(`### ⚠️ System Connection Error\nFailed to process SEO Audit. Please try again later.\nDetails: ${err.message}`);
    } finally {
      clearInterval(interval);
      setSeoLoading(false);
    }
  };

  // Trigger server-side Gemini Project Estimate
  const handleProjectEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstLoading(true);
    setEstResult('');

    try {
      const res = await fetch('/api/project-estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: clientName,
          email: clientEmail,
          serviceType: estService,
          budget: estBudget,
          timeline: estTimeline,
          description: estDesc
        })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setEstResult(data.text);
    } catch (err: any) {
      setEstResult(`### ⚠️ Connection Interrupted\nFailed to calculate estimate dynamically.\nDetails: ${err.message}`);
    } finally {
      setEstLoading(false);
    }
  };

  // Cost Calculator Math
  const calculateCost = () => {
    let base = 0;
    if (appType === 'landing') base = 1200;
    else if (appType === 'corporate') base = 3200;
    else if (appType === 'webapp') base = 5500;
    else if (appType === 'mobile') base = 6500;

    let screens = 0;
    if (screensRange === 'medium') screens = 1200;
    else if (screensRange === 'large') screens = 2500;

    let featuresCost = 0;
    if (features.crm) featuresCost += 500;
    if (features.cms) featuresCost += 800;
    if (features.ai) featuresCost += 1200;
    if (features.stripe) featuresCost += 600;

    return base + screens + featuresCost;
  };

  const getCalculatorDuration = () => {
    let baseWeeks = 3;
    if (appType === 'webapp' || appType === 'mobile') baseWeeks = 6;
    if (screensRange === 'large') baseWeeks += 2;
    return `${baseWeeks} - ${baseWeeks + 2} Weeks`;
  };

  return (
    <section 
      id="tools" 
      className="py-24 bg-white dark:bg-[#0B0F19] border-t border-slate-100 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
            Studio Labs Sandbox
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            Elite calculators & AI sandboxes. Estimate before you book.
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            We provide absolute pricing and returns transparency. Explore our custom interactive estimators to calculate your expected revenue returns, technical specifications, and AI project proposals.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 border-b border-slate-100 dark:border-slate-800 pb-6">
          <button
            onClick={() => setActiveTab('estimator')}
            className={`flex items-center justify-center gap-2 py-4 px-3 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
              activeTab === 'estimator'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/25'
                : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Brain className="w-4 h-4 shrink-0" />
            AI Project Estimator
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex items-center justify-center gap-2 py-4 px-3 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
              activeTab === 'calculator'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/25'
                : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Wrench className="w-4 h-4 shrink-0" />
            Website Cost Calculator
          </button>
          <button
            onClick={() => setActiveTab('seo')}
            className={`flex items-center justify-center gap-2 py-4 px-3 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
              activeTab === 'seo'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/25'
                : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <SearchCode className="w-4 h-4 shrink-0" />
            AI Technical SEO Audit
          </button>
          <button
            onClick={() => setActiveTab('roi')}
            className={`flex items-center justify-center gap-2 py-4 px-3 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
              activeTab === 'roi'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/25'
                : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <TrendingUp className="w-4 h-4 shrink-0" />
            Marketing ROI Calculator
          </button>
        </div>

        {/* Tab display container */}
        <div className="bg-white/40 dark:bg-slate-950/20 backdrop-blur-xl rounded-[32px] p-6 md:p-10 border border-white/50 dark:border-white/10 shadow-sm">
          <AnimatePresence mode="wait">
            
            {/* T1: AI ESTIMATOR */}
            {activeTab === 'estimator' && (
              <motion.div
                key="estimator"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10"
              >
                {/* Form fields */}
                <form onSubmit={handleProjectEstimate} className="col-span-1 lg:col-span-5 text-left flex flex-col gap-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1.5 rounded-lg bg-pink-500/10 text-pink-500">
                      <Brain className="w-5 h-5 animate-pulse" />
                    </span>
                    <h3 className="font-display font-black text-slate-800 dark:text-white text-base">Custom Proposal Generator</h3>
                  </div>

                  <div>
                    <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Company / Your Name</label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Stripe Solutions"
                      className="w-full px-4 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="growth@stripe.com"
                      className="w-full px-4 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Project Category Focus</label>
                    <select
                      value={estService}
                      onChange={(e) => setEstService(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                    >
                      <option>Website & Custom Web App</option>
                      <option>Mobile App (iOS/Android)</option>
                      <option>AI automation & CRM sync</option>
                      <option>Paid Ad Creative & SMM Setup</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Stated Budget</label>
                      <select
                        value={estBudget}
                        onChange={(e) => setEstBudget(e.target.value)}
                        className="w-full px-4 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                      >
                        <option>$3,000 - $5,000</option>
                        <option>$5,000 - $10,000</option>
                        <option>$10,000 - $25,000</option>
                        <option>$25,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Timeline Target</label>
                      <select
                        value={estTimeline}
                        onChange={(e) => setEstTimeline(e.target.value)}
                        className="w-full px-4 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                      >
                        <option>2 - 4 Weeks</option>
                        <option>4 - 6 Weeks</option>
                        <option>6 - 10 Weeks</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Core Requirements / Goals</label>
                    <textarea
                      required
                      rows={3}
                      value={estDesc}
                      onChange={(e) => setEstDesc(e.target.value)}
                      placeholder="We need a premium Next.js dashboard that hooks up to our internal HubSpot and automatically updates client data, styled with dark-mode..."
                      className="w-full px-4 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={estLoading}
                    className="w-full py-3 mt-1 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/20 disabled:opacity-50"
                  >
                    {estLoading ? <RefreshCw className="w-4.5 h-4.5 animate-spin" /> : <Brain className="w-4.5 h-4.5" />}
                    {estLoading ? "Analyzing proposal parameters..." : "Generate AI Technical Roadmap"}
                  </button>
                </form>

                {/* Proposal Result Showcase */}
                <div className="col-span-1 lg:col-span-7 flex flex-col h-full min-h-[300px]">
                  <span className="text-3xs font-bold text-slate-400 tracking-wider uppercase text-left mb-2 block">Calculated Blueprint Proposal</span>
                  <div className="flex-grow bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 overflow-y-auto max-h-[380px] shadow-sm flex flex-col justify-center">
                    {estLoading ? (
                      <div className="text-center py-10 flex flex-col items-center gap-3">
                        <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
                        <span className="text-xs text-slate-400 font-semibold">Consulting NiazDigital AI Estimator database...</span>
                      </div>
                    ) : estResult ? (
                      renderResponseMarkdown(estResult)
                    ) : (
                      <div className="text-center py-12">
                        <FileCheck className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                        <span className="text-xs font-bold text-slate-400 block mb-1">Ready for input parameters</span>
                        <p className="text-4xs text-slate-400 max-w-xs mx-auto leading-normal">
                          Provide your business context and goals on the left form. Our AI model will compile a structured tech-stack, cost, and timeline evaluation instantly.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* T2: WEBSITE COST CALCULATOR */}
            {activeTab === 'calculator' && (
              <motion.div
                key="calculator"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10"
              >
                <div className="col-span-1 lg:col-span-7 text-left flex flex-col gap-6">
                  
                  {/* Select application style */}
                  <div>
                    <span className="text-3xs font-extrabold text-slate-400 uppercase block mb-3">01. App Type Base</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                      {[
                        { id: 'landing', label: 'Landing Page', cost: '$1,200', desc: 'Single sales pitch' },
                        { id: 'corporate', label: 'Corporate Site', cost: '$3,200', desc: 'Elite portfolio (5-10p)' },
                        { id: 'webapp', label: 'Custom Web App', cost: '$5,500', desc: 'Full interactive platform' },
                        { id: 'mobile', label: 'Mobile App', cost: '$6,500', desc: 'Native iOS & Android' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setAppType(item.id as any)}
                          className={`p-4 rounded-xl border flex flex-col text-left justify-between h-28 cursor-pointer transition-colors ${
                            appType === item.id
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                          }`}
                        >
                          <span className="text-2xs font-extrabold leading-tight block">{item.label}</span>
                          <div>
                            <span className="text-3xs block opacity-60 mt-0.5 leading-tight">{item.desc}</span>
                            <span className="text-sm font-black mt-2 block">{item.cost}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select page count */}
                  <div>
                    <span className="text-3xs font-extrabold text-slate-400 uppercase block mb-3">02. Screen Volumes & Scope</span>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'small', label: '1 - 5 Screens', cost: 'Included' },
                        { id: 'medium', label: '6 - 12 Screens', cost: '+$1,200' },
                        { id: 'large', label: '13+ Screens', cost: '+$2,500' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setScreensRange(item.id as any)}
                          className={`p-4 rounded-xl border text-left flex flex-col justify-between cursor-pointer transition-colors ${
                            screensRange === item.id
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                          }`}
                        >
                          <span className="text-2xs font-extrabold block">{item.label}</span>
                          <span className="text-xs font-black mt-1.5 block">{item.cost}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Toggle Premium Integrations */}
                  <div>
                    <span className="text-3xs font-extrabold text-slate-400 uppercase block mb-3">03. Feature Integrations</span>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: 'crm', label: 'CRM Automated Routing (HubSpot)', cost: '+$500', desc: 'Sync inquiries directly into pipeline' },
                        { id: 'cms', label: 'Admin CMS Management Board', cost: '+$800', desc: 'Manage blogs, posts, FAQs instantly' },
                        { id: 'ai', label: 'AI Gemini Floating Chat Assistant', cost: '+$1,200', desc: 'Self-helping lead capturing chatbot' },
                        { id: 'stripe', label: 'Stripe Merchant Gateway Checkout', cost: '+$600', desc: 'Collect instant client card payments' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setFeatures({ ...features, [item.id]: !features[item.id] })}
                          className={`p-4 rounded-xl border text-left flex flex-col justify-between cursor-pointer transition-colors ${
                            features[item.id]
                              ? 'bg-blue-600/10 text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-500/40'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span className="text-2xs font-extrabold block">{item.label}</span>
                            <span className="text-xs font-bold shrink-0">{item.cost}</span>
                          </div>
                          <span className="text-3xs text-slate-400 leading-tight block mt-1.5">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Final Cost Summary */}
                <div className="col-span-1 lg:col-span-5 text-left flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                  <div>
                    <span className="text-3xs font-extrabold text-slate-400 uppercase tracking-widest block mb-4">Calculated Quote Breakdown</span>
                    
                    <div className="flex flex-col gap-3.5 mb-8 text-xs font-medium text-slate-500">
                      <div className="flex justify-between">
                        <span>App Style Base:</span>
                        <span className="font-bold text-slate-800 dark:text-white capitalize">{appType} app</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Screens Scope:</span>
                        <span className="font-bold text-slate-800 dark:text-white capitalize">{screensRange} scale</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active Integrations:</span>
                        <span className="font-bold text-slate-800 dark:text-white">
                          {Object.values(features).filter(Boolean).length} Selected
                        </span>
                      </div>
                      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-3.5">
                        <span>Development Timeline:</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">{getCalculatorDuration()}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl mb-6">
                      <span className="text-3xs text-slate-400 uppercase block mb-0.5">ESTIMATED INVESTMENT</span>
                      <span className="text-3xl font-display font-black text-slate-900 dark:text-white block">
                        ${calculateCost().toLocaleString()}
                      </span>
                      <span className="text-4xs text-slate-400 leading-normal block mt-1">Includes 1-Year free technical maintenance and sub-second speed optimization guarantees.</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 cursor-pointer"
                  >
                    <FileCheck className="w-4.5 h-4.5" />
                    Lock In This Estimate &rarr;
                  </button>
                </div>
              </motion.div>
            )}

            {/* T3: AI TECHNICAL SEO AUDIT */}
            {activeTab === 'seo' && (
              <motion.div
                key="seo"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10"
              >
                <div className="col-span-1 lg:col-span-5 text-left flex flex-col gap-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1.5 rounded-lg bg-teal-500/10 text-teal-500">
                      <SearchCode className="w-5 h-5 animate-pulse" />
                    </span>
                    <h3 className="font-display font-black text-slate-800 dark:text-white text-base">Instant SEO Audit Sandbox</h3>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    Enter your live domain URL. Our integrated server-side Gemini system will compile a rigorous audit detecting structural speed blocks, missing micro-data index tags, and suggest optimizations.
                  </p>

                  <form onSubmit={handleSeoAudit} className="flex flex-col gap-3">
                    <input
                      type="url"
                      required
                      value={seoUrl}
                      onChange={(e) => setSeoUrl(e.target.value)}
                      placeholder="https://mysite.com"
                      className="w-full px-4 py-3 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                    />
                    
                    <button
                      type="submit"
                      disabled={seoLoading}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/20 disabled:opacity-50"
                    >
                      {seoLoading ? <RefreshCw className="w-4.5 h-4.5 animate-spin" /> : <SearchCode className="w-4.5 h-4.5" />}
                      {seoLoading ? "Performing technical crawls..." : "Trigger Domain SEO Crawl"}
                    </button>
                  </form>
                </div>

                <div className="col-span-1 lg:col-span-7 text-left flex flex-col min-h-[300px]">
                  <span className="text-3xs font-bold text-slate-400 tracking-wider uppercase mb-2 block">Technical Audit Report</span>
                  <div className="flex-grow bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 overflow-y-auto max-h-[380px] shadow-sm flex flex-col justify-center">
                    {seoLoading ? (
                      <div className="text-center py-10 flex flex-col items-center gap-3">
                        <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-bold animate-pulse">{seoProgress}</span>
                      </div>
                    ) : seoResult ? (
                      renderResponseMarkdown(seoResult)
                    ) : (
                      <div className="text-center py-12">
                        <SearchCode className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                        <span className="text-xs font-bold text-slate-400 block mb-1">Ready for crawler webhook</span>
                        <p className="text-4xs text-slate-400 max-w-xs mx-auto leading-normal">
                          Provide your live website URL on the left. The crawler will examine server headers and index parameters using Gemini diagnostics.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* T4: MARKETING ROI CALCULATOR */}
            {activeTab === 'roi' && (
              <motion.div
                key="roi"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left"
              >
                {/* Inputs */}
                <div className="col-span-1 lg:col-span-6 flex flex-col gap-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600">
                      <Calculator className="w-5 h-5" />
                    </span>
                    <h3 className="font-display font-black text-slate-800 dark:text-white text-base">Campaign Spend ROI Modeler</h3>
                  </div>

                  {/* Ad spend slider */}
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-3xs font-extrabold text-slate-400 uppercase">01. Monthly Ad Spend</span>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">${adSpend.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min={1000}
                      max={50000}
                      step={1000}
                      value={adSpend}
                      onChange={(e) => setAdSpend(parseInt(e.target.value))}
                      className="w-full accent-blue-600 h-1 rounded-full cursor-pointer bg-slate-200 dark:bg-slate-800"
                    />
                  </div>

                  {/* ROAS slider */}
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-3xs font-extrabold text-slate-400 uppercase">02. Expected Target ROAS</span>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{targetRoas}x</span>
                    </div>
                    <input
                      type="range"
                      min={2.0}
                      max={10.0}
                      step={0.1}
                      value={targetRoas}
                      onChange={(e) => setTargetRoas(parseFloat(e.target.value))}
                      className="w-full accent-blue-600 h-1 rounded-full cursor-pointer bg-slate-200 dark:bg-slate-800"
                    />
                  </div>

                  {/* Average Order Value inputs */}
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-3xs font-extrabold text-slate-400 uppercase">03. Average Customer Value (AOV)</span>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">${aov}</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={1000}
                      step={10}
                      value={aov}
                      onChange={(e) => setAov(parseInt(e.target.value))}
                      className="w-full accent-blue-600 h-1 rounded-full cursor-pointer bg-slate-200 dark:bg-slate-800"
                    />
                  </div>
                </div>

                {/* Return values */}
                <div className="col-span-1 lg:col-span-6 grid grid-cols-2 gap-4">
                  
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <span className="text-3xs font-bold text-slate-400 uppercase">Target Revenue</span>
                    <span className="text-2xl font-display font-black text-slate-900 dark:text-white block mt-1">
                      ${(adSpend * targetRoas).toLocaleString()}
                    </span>
                    <span className="text-4xs text-slate-400 block mt-1">Generated gross volume</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <span className="text-3xs font-bold text-slate-400 uppercase">Estimated Orders</span>
                    <span className="text-2xl font-display font-black text-slate-900 dark:text-white block mt-1">
                      {Math.floor((adSpend * targetRoas) / aov)}
                    </span>
                    <span className="text-4xs text-slate-400 block mt-1">Customer checkouts needed</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <span className="text-3xs font-bold text-slate-400 uppercase">Estimated Net Profit</span>
                    <span className="text-2xl font-display font-black text-emerald-500 block mt-1">
                      ${((adSpend * targetRoas) - adSpend).toLocaleString()}
                    </span>
                    <span className="text-4xs text-slate-400 block mt-1">Less advertising cost</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                    <div>
                      <span className="text-3xs font-bold text-slate-400 uppercase">Net ROI Percentage</span>
                      <span className="text-2xl font-display font-black text-blue-600 dark:text-blue-400 block mt-1">
                        {Math.floor(((adSpend * targetRoas - adSpend) / adSpend) * 100)}%
                      </span>
                    </div>
                    <span className="text-4xs text-slate-400 block mt-1">Yield on ad investment</span>
                  </div>

                  <div className="col-span-2 p-4 bg-blue-50 dark:bg-blue-500/10 border border-blue-100/40 rounded-xl flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="text-3xs text-slate-500 leading-normal">
                      *NiazDigital campaigns maintain an average ROAS of <strong>4.8x</strong>, scaling startups beyond $100K gross revenues. Set your spend and see expected outputs!
                    </span>
                  </div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
