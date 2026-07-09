/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ClientResults from './components/ClientResults';
import Workflow from './components/Workflow';
import ToolsSuite from './components/ToolsSuite';
import ClientDashboard from './components/ClientDashboard';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiChatbot from './components/AiChatbot';
import { LanguageCode } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('EN');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Start in premium dark mode by default
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Sync Dark Mode state with Document Root
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Smooth scroll callback
  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll section highlight indicator
  useEffect(() => {
    const sections = ['hero', 'services', 'portfolio', 'about', 'dashboard', 'tools', 'blog', 'faq', 'contact'];
    
    const handleScrollHighlight = () => {
      const scrollPos = window.scrollY + 200;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollHighlight);
    return () => window.removeEventListener('scroll', handleScrollHighlight);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#070913] text-slate-900 dark:text-slate-100 selection:bg-blue-600/30 font-sans transition-colors duration-300">
      
      {/* Sticky Translucent Header */}
      <Navbar 
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onNavigate={handleScrollToSection}
        activeSection={activeSection}
      />

      {/* Main Core Flagship Body Sections */}
      <main className="pt-20">
        
        {/* Full-Screen Parallax Hero */}
        <Hero 
          currentLang={currentLang} 
          onCtaClick={handleScrollToSection} 
        />

        {/* Modular Capabilities Matrix */}
        <Services onBookCall={() => handleScrollToSection('contact')} />

        {/* Bespoke Case Studies Portfolio with Comparison Slider */}
        <Portfolio />

        {/* Interactive Client Results Dashboards */}
        <ClientResults />

        {/* Clicking Workflow Timeline milestones */}
        <Workflow />

        {/* Cost Calculators, AI estimations & SEO audits */}
        <ToolsSuite />

        {/* File Sharing & Interactive Milestone Tracking Board */}
        <ClientDashboard />

        {/* Verified reviews */}
        <Testimonials />

        {/* Global biography spotlight */}
        <About />

        {/* Educational logs */}
        <Blog />

        {/* Frequently Asked accordion folds */}
        <Faq />

        {/* Form handling briefing */}
        <Contact />

      </main>

      {/* Dynamic footer copyright */}
      <Footer />

      {/* Secure Gemini AI Agent floating Console */}
      <AiChatbot />

    </div>
  );
}
