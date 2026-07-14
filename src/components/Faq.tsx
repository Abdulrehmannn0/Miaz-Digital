/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { FAQ_DATA } from '../data';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-24 bg-[#FFFFFF] dark:bg-[#070913] border-t border-slate-100/50 dark:border-slate-900"
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-3">
            Frequently Asked Inquiries
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            Clear terms. No ambiguity.
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            We operate on extreme transparency. If your inquiry is not answered below, initiate a secure discovery consult to discuss with our founder.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4 text-left">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id}
                className="rounded-2xl border border-white/50 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl overflow-hidden transition-all duration-300"
              >
                
                {/* Trigger Button Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-white leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Rotating Chevron Icon */}
                  <span className={`p-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {/* Animated Body Collapse */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm leading-relaxed text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-900 pl-14">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Call-to-action block */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-50 dark:bg-blue-500/5 border border-blue-100/40 dark:border-blue-500/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <span className="p-2 bg-blue-600 text-white rounded-xl">
              <MessageCircle className="w-5 h-5" />
            </span>
            <div>
              <span className="text-xs font-bold text-slate-800 dark:text-white block">Still have unresolved queries?</span>
              <p className="text-3xs text-slate-500 dark:text-slate-400 mt-0.5">Submit your core parameters via our AI sandbox or chat assistant.</p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs rounded-full shadow-md shadow-blue-500/20 cursor-pointer shrink-0"
          >
            Ask Abdul Rehman Direct
          </button>
        </div>

      </div>
    </section>
  );
}
