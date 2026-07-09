/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Linkedin, Twitter, Instagram, Github, ArrowUp } from 'lucide-react';
import { FOUNDER_DATA } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = {
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    github: Github
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 items-start">
          
          {/* Column 1: Logo & Vision */}
          <div className="col-span-1 md:col-span-5 text-left flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=250&auto=format&fit=crop" 
                alt="NiazDigital Logo" 
                className="w-10 h-10 object-cover rounded-xl border border-slate-700"
              />
              <span className="font-display font-black text-white text-base tracking-widest uppercase">NiazDigital</span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              An elite digital agency constructing bespoke NextJS flagships, automating complex spreadsheet operations, and scaling brand revenue parameters predictably.
            </p>
            <div className="flex items-center gap-2.5 mt-2">
              {Object.entries(FOUNDER_DATA.socials).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all border border-slate-700/50"
                    title={platform}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="col-span-1 md:col-span-3 text-left">
            <span className="text-3xs font-black uppercase tracking-wider text-slate-200 block mb-4">Core Sections</span>
            <ul className="flex flex-col gap-2.5 text-xs">
              {[
                { name: 'Story & Mission', id: '#about' },
                { name: 'Services Spectrum', id: '#services' },
                { name: 'Case Studies', id: '#portfolio' },
                { name: 'Client Sandbox', id: '#tools' }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.id} className="hover:text-white transition-colors block py-0.5">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & FAQ */}
          <div className="col-span-1 md:col-span-4 text-left flex flex-col gap-4">
            <div>
              <span className="text-3xs font-black uppercase tracking-wider text-slate-200 block mb-3">Corporate Offices</span>
              <p className="text-3xs leading-relaxed">
                Prestige Business Hub, Dubai Marina, UAE<br />
                Financial District, London, UK
              </p>
            </div>
            <div>
              <span className="text-3xs font-black uppercase tracking-wider text-slate-200 block mb-1">Inbound Briefing Ticket</span>
              <a href="mailto:info@niazdigital.com" className="text-xs font-bold text-white hover:underline">info@niazdigital.com</a>
            </div>
          </div>

        </div>

        {/* Copyright Panel Footer row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-3xs font-bold uppercase tracking-wider text-slate-500 gap-4">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span>&copy; {currentYear} NiazDigital Ltd. All Rights Reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span>Handcompiled in London & Dubai</span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700/40 cursor-pointer transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
