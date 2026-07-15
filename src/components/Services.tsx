/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Layers, 
  Compass, 
  Code2, 
  ShoppingBag, 
  Smartphone, 
  TrendingUp, 
  SearchCode, 
  Play, 
  Cpu, 
  BarChart3,
  X,
  Sparkles,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onBookCall: () => void;
}

export default function Services({ onBookCall }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDetailsModal, setActiveDetailsModal] = useState<Service | null>(null);

  const categories = ['All', 'Website Development', 'Digital Marketing', 'SEO', 'AI Automation', 'Branding', 'Virtual Assistance'];

  // Map icon strings to Lucide components
  const iconMap: Record<string, any> = {
    Layers,
    Compass,
    Code2,
    ShoppingBag,
    Smartphone,
    TrendingUp,
    SearchCode,
    Play,
    Cpu,
    BarChart3
  };

  const filteredServices = SERVICES_DATA.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.features.some(feat => feat.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      id="services" 
      className="py-24 bg-[#FFFFFF] dark:bg-[#070913] border-t border-slate-100/50 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
              Capabilities Spectrum
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              Digital Solutions Built For Modern Businesses.
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              From strategy to execution, Niaz Digital delivers complete digital solutions that help businesses build a stronger online presence, automate operations, and grow sustainably.
            </p>
          </div>
          
          {/* Dynamic Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search custom service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-850 rounded-full text-xs font-medium placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm transition-colors"
            />
          </div>
        </div>

        {/* Categories Menu Tab */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 -mx-6 px-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold cursor-pointer whitespace-nowrap transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/25'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Services Cards Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const IconComponent = iconMap[service.icon] || Code2;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 rounded-[22px] bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden group hover:-translate-y-1.5`}
                >
                  {/* Outer gradient glow background hover layer */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-3xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative z-10">
                    {/* Top Capability Checklist items (truncated previews) */}
                    <ul className="flex flex-col gap-2 mb-6">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-3xs font-medium text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action trigger button */}
                    <button
                      onClick={() => setActiveDetailsModal(service)}
                      className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-500 transition-colors cursor-pointer text-center block"
                    >
                      Learn More
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Empty state when query returns null */}
          {filteredServices.length === 0 && (
            <div className="col-span-full py-16 text-center bg-white dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-800 rounded-[22px]">
              <span className="font-display font-bold text-lg text-slate-800 dark:text-white block mb-1">No services found</span>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                We design and build bespoke custom modules not found in this listing. Send us a direct brief to discuss.
              </p>
            </div>
          )}
        </div>

        {/* Detailed Service Specification Modal Overlay */}
        <AnimatePresence>
          {activeDetailsModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveDetailsModal(null)}
                className="absolute inset-0 bg-slate-950/40 dark:bg-slate-950/60 backdrop-blur-sm"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white/80 dark:bg-slate-900/75 backdrop-blur-xl rounded-[24px] border border-white/50 dark:border-white/10 p-6 md:p-8 shadow-2xl max-w-xl w-full relative z-10 text-left overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveDetailsModal(null)}
                  className="absolute right-6 top-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl">
                    {(() => {
                      const Icon = iconMap[activeDetailsModal.icon] || Code2;
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-3xs font-bold text-blue-600 uppercase tracking-widest block mb-0.5">{activeDetailsModal.category}</span>
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">{activeDetailsModal.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {activeDetailsModal.description}
                </p>

                <hr className="border-slate-100 dark:border-slate-800 mb-6" />

                <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-3">Service Deliverables Checklist</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {activeDetailsModal.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <a
                    href="https://wa.me/919012403699"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveDetailsModal(null)}
                    className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white rounded-full flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Consult on this project
                  </a>
                  <button
                    onClick={() => setActiveDetailsModal(null)}
                    className="w-full sm:w-auto px-6 py-3 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 rounded-full cursor-pointer"
                  >
                    Close Specs
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
