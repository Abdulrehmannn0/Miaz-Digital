/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
import InteractiveFX from './components/InteractiveFX';
import BlogListing from './pages/BlogListing';
import SingleBlog from './pages/SingleBlog';
import { LanguageCode } from './types';

interface HomeProps {
  currentLang: LanguageCode;
  handleScrollToSection: (sectionId: string) => void;
}

function Home({ currentLang, handleScrollToSection }: HomeProps) {
  return (
    <>
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

      {/* Educational logs (Latest 3 blogs section) */}
      <Blog />

      {/* Frequently Asked accordion folds */}
      <Faq />

      {/* Form handling briefing */}
      <Contact />
    </>
  );
}

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('EN');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // Start in premium pure white mode by default
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navigate = useNavigate();
  const location = useLocation();

  // Sync Dark Mode state with Document Root
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Smooth scroll callback with cross-page routing fallback
  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Listen to cross-page scroll targets
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      // Clear navigation state to avoid auto-scrolling on direct browser reloads
      navigate(location.pathname, { replace: true, state: {} });
      
      // Slight delay to ensure DOM and elements have successfully hydrated
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  }, [location, navigate]);

  // Scroll section highlight indicator (active state tracks only on Home route)
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

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
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#070913] text-[#0F172A] dark:text-slate-100 selection:bg-blue-600/30 font-sans transition-colors duration-300 relative overflow-hidden">
      
      {/* Subtle Spider Web canvas & Smooth Magnetic Custom Cursor */}
      <InteractiveFX />

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
        <Routes>
          <Route path="/" element={<Home currentLang={currentLang} handleScrollToSection={handleScrollToSection} />} />
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />
        </Routes>
      </main>

      {/* Dynamic footer copyright */}
      <Footer />

      {/* Secure Gemini AI Agent floating Console */}
      <AiChatbot />

    </div>
  );
}
