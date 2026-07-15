/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Github, ArrowUp } from 'lucide-react';
import { FOUNDER_DATA } from '../data';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

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
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src={logoImg} 
                  alt="Niaz Digital Logo" 
                  className="h-10 w-auto rounded-lg object-contain"
                  referrerPolicy="no-referrer"
                />
              </Link>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              An elite digital agency constructing bespoke high-performance digital flagships, automating complex spreadsheet operations, and scaling brand revenue parameters predictably.
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
              <li>
                <Link to="/about" className="hover:text-white transition-colors block py-0.5">Story & Mission</Link>
              </li>
              <li>
                <Link to="/founder" className="hover:text-white transition-colors block py-0.5">About Founder</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block py-0.5">Services Spectrum</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors block py-0.5">Our Portfolio</Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors block py-0.5">Case Studies</Link>
              </li>
              <li>
                <Link to="/client-portal" className="hover:text-white transition-colors block py-0.5">Client Portal</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & FAQ */}
          <div className="col-span-1 md:col-span-4 text-left flex flex-col gap-4">
            <div>
              <span className="text-3xs font-black uppercase tracking-wider text-slate-200 block mb-3">Resources</span>
              <ul className="flex flex-col gap-2.5 text-xs mb-4">
                <li>
                  <Link to="/faq" className="hover:text-white transition-colors block py-0.5">FAQ Directory</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors block py-0.5">Contact & Onboarding</Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-white transition-colors block py-0.5">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white transition-colors block py-0.5">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-3xs font-black uppercase tracking-wider text-slate-200 block mb-1">Inbound Briefing Ticket</span>
              <a href="mailto:azhar@niazdigital.com" className="text-xs font-bold text-white hover:underline">azhar@niazdigital.com</a>
            </div>
          </div>

        </div>

        {/* Copyright Panel Footer row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-3xs font-bold uppercase tracking-wider text-slate-500 gap-4">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span>&copy; {currentYear} Niaz Digital. All Rights Reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span>Intelligent Digital Systems</span>
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
