/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  BarChart, 
  Bar 
} from 'recharts';
import { 
  TrendingUp, 
  Sparkles, 
  DollarSign, 
  Users, 
  Search, 
  Activity, 
  Percent, 
  Award 
} from 'lucide-react';

// Dataset 1: Revenue Scale progressions
const REVENUE_DATA = [
  { month: 'Jan', Revenue: 24000, AdSpend: 5000, ROAS: 4.8 },
  { month: 'Feb', Revenue: 38000, AdSpend: 8000, ROAS: 4.75 },
  { month: 'Mar', Revenue: 51000, AdSpend: 11000, ROAS: 4.63 },
  { month: 'Apr', Revenue: 72000, AdSpend: 14000, ROAS: 5.14 },
  { month: 'May', Revenue: 95000, AdSpend: 19000, ROAS: 5.0 },
  { month: 'Jun', Revenue: 140000, AdSpend: 26000, ROAS: 5.38 }
];

// Dataset 2: Organic SEO traffic scale
const SEO_DATA = [
  { week: 'Wk 1', OrganicTraffic: 1200, KeywordsInTop10: 15 },
  { week: 'Wk 3', OrganicTraffic: 2400, KeywordsInTop10: 28 },
  { week: 'Wk 5', OrganicTraffic: 4100, KeywordsInTop10: 42 },
  { week: 'Wk 7', OrganicTraffic: 6800, KeywordsInTop10: 65 },
  { week: 'Wk 9', OrganicTraffic: 9900, KeywordsInTop10: 110 },
  { week: 'Wk 11', OrganicTraffic: 14500, KeywordsInTop10: 160 }
];

// Dataset 3: Lead conversion optimizations
const CONVERSION_DATA = [
  { step: 'Inbound Visits', legacy: 10000, optimized: 10000 },
  { step: 'Lead Registrations', legacy: 110, optimized: 340 }, // Conversion climbed from 1.1% to 3.4%
  { step: 'Discovery Booked', legacy: 22, optimized: 120 }
];

export default function ClientResults() {
  const [activeTab, setActiveTab] = useState<'ads' | 'seo' | 'cro'>('ads');

  const metricHighlights = [
    { label: "Aggregate Revenue Generated", value: "$4.2M", desc: "For client startups", icon: DollarSign, color: "text-blue-500 bg-blue-50 dark:bg-blue-950/20" },
    { label: "Average Campaign ROAS", value: "4.8x", desc: "Meta & Google Systems", icon: TrendingUp, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20" },
    { label: "Manual Hours Automated", value: "1,400h", desc: "Saved via n8n & Excel macro", icon: Activity, color: "text-purple-500 bg-purple-50 dark:bg-purple-950/20" },
    { label: "Rank 1 Keywords Secured", value: "320+", desc: "Local & technical SEO", icon: Search, color: "text-cyan-500 bg-cyan-50 dark:bg-cyan-950/20" }
  ];

  return (
    <section 
      id="results" 
      className="py-24 bg-[#FFFFFF] dark:bg-[#070913] border-t border-slate-100/50 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
            Client Results Center
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            Pristine metrics we track. Your growth is mathematically modeled.
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            We don't settle for "brand awareness" reports. We build functional real-time reporting metrics showing dollar returns, organic indexing, conversion funnel health, and hours salvaged through custom workflows.
          </p>
        </div>

        {/* Highlight Scorecards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metricHighlights.map((met, i) => (
            <div 
              key={i}
              className="p-6 rounded-[22px] bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-sm text-left flex items-start gap-4"
            >
              <div className={`p-3 rounded-xl shrink-0 ${met.color}`}>
                <met.icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-2xs font-extrabold text-slate-400 uppercase tracking-wider block mb-1">{met.label}</span>
                <span className="text-2xl font-display font-black text-slate-900 dark:text-white block">{met.value}</span>
                <span className="text-3xs text-slate-500 block mt-0.5">{met.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Dashboard Workspace Frame */}
        <div className="bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl rounded-[28px] border border-white/50 dark:border-white/10 shadow-xl p-6 md:p-8 overflow-hidden">
          
          {/* Workspace Tabs Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-6 mb-8 gap-4">
            <div className="flex items-center gap-2 text-left">
              <span className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Award className="w-5 h-5 animate-pulse" />
              </span>
              <div>
                <h3 className="font-display font-black text-slate-800 dark:text-white text-base">Campaign Sandbox</h3>
                <p className="text-3xs text-slate-400">Interact with real consolidated brand growth indices</p>
              </div>
            </div>

            {/* Dashboard tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/60 rounded-full">
              <button
                onClick={() => setActiveTab('ads')}
                className={`px-4 py-2 rounded-full text-xs font-bold cursor-pointer transition-all ${
                  activeTab === 'ads'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                Revenue & Ads
              </button>
              <button
                onClick={() => setActiveTab('seo')}
                className={`px-4 py-2 rounded-full text-xs font-bold cursor-pointer transition-all ${
                  activeTab === 'seo'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                SEO Organic
              </button>
              <button
                onClick={() => setActiveTab('cro')}
                className={`px-4 py-2 rounded-full text-xs font-bold cursor-pointer transition-all ${
                  activeTab === 'cro'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                Conversion Lift
              </button>
            </div>
          </div>

          {/* Render Active Chart Workspace */}
          <div className="h-[300px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              {activeTab === 'ads' ? (
                <AreaChart data={REVENUE_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366F1" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="month" tickLine={false} style={{ fontSize: '10px', fontWeight: 'bold', fill: '#94A3B8' }} />
                  <YAxis tickLine={false} style={{ fontSize: '10px', fontWeight: 'bold', fill: '#94A3B8' }} />
                  <Tooltip contentStyle={{ background: '#0F172A', borderRadius: '12px', border: 'none', color: '#FFF', fontSize: '11px' }} />
                  <Area type="monotone" dataKey="Revenue" stroke="#2563EB" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRev)" name="Sales Revenue ($)" />
                  <Area type="monotone" dataKey="AdSpend" stroke="#6366F1" strokeWidth={1.5} fillOpacity={1} fill="url(#colorSpend)" name="Ad Spend ($)" />
                </AreaChart>
              ) : activeTab === 'seo' ? (
                <AreaChart data={SEO_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorSeo" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0D9488" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#0D9488" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="week" tickLine={false} style={{ fontSize: '10px', fontWeight: 'bold', fill: '#94A3B8' }} />
                  <YAxis tickLine={false} style={{ fontSize: '10px', fontWeight: 'bold', fill: '#94A3B8' }} />
                  <Tooltip contentStyle={{ background: '#0F172A', borderRadius: '12px', border: 'none', color: '#FFF', fontSize: '11px' }} />
                  <Area type="monotone" dataKey="OrganicTraffic" stroke="#0D9488" strokeWidth={2.5} fillOpacity={1} fill="url(#colorSeo)" name="Weekly Unique Organic Visits" />
                </AreaChart>
              ) : (
                <BarChart data={CONVERSION_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="step" tickLine={false} style={{ fontSize: '10px', fontWeight: 'bold', fill: '#94A3B8' }} />
                  <YAxis tickLine={false} style={{ fontSize: '10px', fontWeight: 'bold', fill: '#94A3B8' }} />
                  <Tooltip contentStyle={{ background: '#0F172A', borderRadius: '12px', border: 'none', color: '#FFF', fontSize: '11px' }} />
                  <Bar dataKey="legacy" fill="#94A3B8" name="Legacy WordPress Funnel (1.1%)" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="optimized" fill="#2563EB" name="NiazDigital Optimized Funnel (3.4%)" radius={[8, 8, 0, 0]} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Subtext description panel dynamically based on tab */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-left">
            {activeTab === 'ads' ? (
              <p className="text-xs text-slate-500 leading-relaxed">
                *Consolidated advertising ROI metrics generated for watch boutique, activewear startups, and fintech clients. Demonstrates consistent average ROAS ratios tracking at <strong>4.8x or greater</strong> with high-relevance creative production.
              </p>
            ) : activeTab === 'seo' ? (
              <p className="text-xs text-slate-500 leading-relaxed">
                *Weekly SEO crawl metrics compiled on client web projects. Integrating semantic JSON-LD structures with NextJS SSR pages increases indexing speeds up to 400%, boosting search engine visibility.
              </p>
            ) : (
              <p className="text-xs text-slate-500 leading-relaxed">
                *The drastic difference between unoptimized WordPress modules (Gray) versus bespoke headless systems (Blue). Landing page conversion ratios climb by over 209% on identical inbound search campaigns.
              </p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
