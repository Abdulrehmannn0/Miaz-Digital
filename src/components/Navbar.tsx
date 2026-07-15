/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Menu, 
  X, 
  ChevronDown, 
  Layers, 
  Code2, 
  Cpu, 
  BarChart3, 
  ShoppingBag, 
  Sun, 
  Moon, 
  PhoneCall,
  LayoutDashboard,
  Brain,
  Wrench,
  HelpCircle,
  Newspaper,
  Globe
} from 'lucide-react';
import { LanguageCode } from '../types';
import { DIALECTS } from '../data';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

interface NavbarProps {
  currentLang: LanguageCode;
  setCurrentLang: (lang: LanguageCode) => void;
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({
  currentLang,
  setCurrentLang,
  isDarkMode,
  setIsDarkMode,
  onNavigate,
  activeSection
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'services' | 'labs' | null>(null);

  const t = DIALECTS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'services', label: t.nav.services },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'about', label: t.nav.about },
    { id: 'dashboard', label: t.nav.dashboard },
    { id: 'tools', label: t.nav.tools },
    { id: 'blog', label: t.nav.blog },
    { id: 'faq', label: t.nav.faq },
  ];

  const languages: { code: LanguageCode; label: string }[] = [
    { code: 'EN', label: 'EN' },
    { code: 'ES', label: 'ES' },
    { code: 'DE', label: 'DE' },
    { code: 'AR', label: 'AR' }
  ];

  // Services featured in Mega Menu
  const megaServices = [
    { id: 'ui-ux-design', label: 'UI/UX & Product Design', desc: 'Figma mockups and wireframes', icon: Layers, color: 'text-blue-500' },
    { id: 'web-development', label: 'Web Development', desc: 'Fast custom Next.js & React apps', icon: Code2, color: 'text-teal-500' },
    { id: 'ai-automation', label: 'AI & CRM Automation', desc: 'Zapier, Make.com, & n8n syncs', icon: Cpu, color: 'text-purple-500' },
    { id: 'paid-ads', label: 'Growth & Paid Ads', desc: 'Meta, Google & LinkedIn Ads scaling', icon: BarChart3, color: 'text-red-500' },
  ];

  // Studio Labs items featured in Mega Menu
  const megaLabs = [
    { id: 'tools-estimator', label: 'AI Project Estimator', desc: 'Receive instant tailored proposal', icon: Brain, color: 'text-pink-500' },
    { id: 'tools-calculator', label: 'Website Cost Calculator', desc: 'Estimate custom builds dynamically', icon: Wrench, color: 'text-cyan-500' },
    { id: 'tools-seo', label: 'SEO Technical Audit', desc: 'Analyze domains and spot bottlenecks', icon: Sparkles, color: 'text-yellow-500' },
  ];

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
    onNavigate(sectionId);
  };

  return (
    <header 
      id="navbar-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl py-4 border-b border-white/40 dark:border-white/10 shadow-lg shadow-slate-100/30 dark:shadow-none' 
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Responsive Logo */}
        <div 
          id="navbar-logo"
          className="flex items-center cursor-pointer group"
          onClick={() => handleNavClick('hero')}
        >
          <img 
            src={logoImg} 
            alt="Niaz Digital Logo" 
            className="h-10 w-auto rounded-lg object-contain group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Menu Navigation */}
        <nav id="navbar-menu" className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isMega = item.id === 'services' || item.id === 'tools';
            
            return (
              <div 
                key={item.id}
                className="relative"
                onMouseEnter={() => {
                  if (item.id === 'services') setActiveMegaMenu('services');
                  else if (item.id === 'tools') setActiveMegaMenu('labs');
                  else setActiveMegaMenu(null);
                }}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  id={`nav-btn-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50 ${
                    activeSection === item.id 
                      ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {item.label}
                  {isMega && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
                  )}
                </button>

                {/* Animated dropdown indicator */}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeUnderline" 
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-blue-600 dark:bg-blue-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Top-Right Control Stack */}
        <div id="navbar-controls" className="hidden lg:flex items-center gap-3">
          
          {/* Dark Mode Toggle */}
          <button
            id="theme-toggler"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Language Switcher */}
          <div id="language-switcher" className="relative group">
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
              <Globe className="w-3.5 h-3.5" />
              {currentLang}
            </button>
            <div className="absolute right-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-1.5 shadow-xl min-w-[80px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={`w-full text-left px-3 py-1.5 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
                      currentLang === lang.code 
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400' 
                        : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp Direct */}
          <a
            id="whatsapp-header-btn"
            href="https://wa.me/919012403699"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors"
            title="Chat on WhatsApp"
          >
            <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.004 2c-5.51 0-9.99 4.49-9.99 10 0 2.007.593 3.878 1.613 5.455L2 22l4.71-1.567c1.54 1.002 3.375 1.57 5.29 1.57 5.51 0 9.99-4.49 9.99-10s-4.48-10-9.99-10zm.004 1.765c4.545 0 8.232 3.69 8.232 8.235 0 4.547-3.687 8.236-8.232 8.236-1.74 0-3.355-.544-4.693-1.464l-.336-.232-2.775.922.937-2.706-.263-.377c-1.022-1.465-1.605-3.232-1.605-5.143.001-4.545 3.691-8.237 8.235-8.237zm-3.327 4.14c-.183-.04-.383-.04-.543-.04-.216 0-.528.082-.8.377-.282.31-1.077 1.054-1.077 2.569s1.093 2.981 1.246 3.187c.15.206 2.112 3.36 5.228 4.557.74.285 1.318.455 1.77.597.747.237 1.428.204 1.967.123.6-.09 1.844-.753 2.106-1.442.261-.688.261-1.278.183-1.4-.08-.124-.282-.19-.583-.34-.303-.15-1.792-.883-2.068-.98-.276-.1-.478-.148-.68.153-.201.302-.78.983-.956 1.183-.176.2-.352.222-.653.072-.301-.15-1.272-.47-2.422-1.5-1.077-.962-1.803-2.15-2.014-2.512-.211-.36-.022-.556.128-.705.136-.134.302-.35.453-.526.151-.176.202-.302.302-.503.1-.201.05-.377-.025-.528-.075-.15-.68-1.64-.931-2.247z"/>
            </svg>
          </a>

          {/* Core Action: Book Call */}
          <a
            id="cta-discovery-btn"
            href="https://wa.me/919012403699"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-md shadow-blue-600/25 cursor-pointer hover:shadow-lg transition-all flex items-center gap-1.5 overflow-hidden group"
          >
            <PhoneCall className="w-4 h-4 group-hover:scale-110 transition-transform" />
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          id="mobile-menu-trigger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 cursor-pointer"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Mega Menu Dropdowns */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div
            id="desktop-mega-menu"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
            onMouseLeave={() => setActiveMegaMenu(null)}
            className="hidden lg:block absolute left-0 w-full bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border-b border-white/40 dark:border-white/10 shadow-2xl py-8 z-40"
          >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8">
              <div className="col-span-3 border-r border-slate-100 dark:border-slate-800 pr-6">
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block mb-3">
                  Niaz Digital Studio
                </span>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  Engineering high-end modular designs, zero-human automation routines, and hyper-targeted advertising setups.
                </p>
                <a
                  href="https://wa.me/919012403699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  Schedule Initial Consultation &rarr;
                </a>
              </div>

              <div className="col-span-9 grid grid-cols-3 gap-6">
                {activeMegaMenu === 'services' ? (
                  megaServices.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleNavClick('services')}
                      className="p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/30 cursor-pointer group transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800 ${service.color}`}>
                          <service.icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-semibold text-sm text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {service.label}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  ))
                ) : (
                  megaLabs.map((lab) => (
                    <div
                      key={lab.id}
                      onClick={() => handleNavClick('tools')}
                      className="p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/30 cursor-pointer group transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800 ${lab.color}`}>
                          <lab.icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-semibold text-sm text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {lab.label}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {lab.desc}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-[#FAFAFA]/80 dark:bg-[#0B0F19]/70 backdrop-blur-xl border-b border-white/40 dark:border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2.5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-left w-full px-4 py-2.5 text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/40 rounded-xl cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <hr className="border-slate-200 dark:border-slate-800" />

              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-semibold text-slate-500">Theme</span>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-sm font-semibold cursor-pointer text-slate-700 dark:text-slate-300"
                >
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  {isDarkMode ? 'Light' : 'Dark'}
                </button>
              </div>

              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-semibold text-slate-500">Language</span>
                <div className="flex gap-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLang(lang.code)}
                      className={`px-3 py-1 rounded-full text-xs font-bold cursor-pointer ${
                        currentLang === lang.code 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/919012403699"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 mt-4 bg-blue-600 text-white rounded-xl font-bold cursor-pointer hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
