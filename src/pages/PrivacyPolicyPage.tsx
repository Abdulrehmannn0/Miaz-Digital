import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateMetaTags({
      title: "Privacy Policy | Niaz Digital",
      description: "Read Niaz Digital's privacy and data encryption policy parameters. Absolute confidentiality for client intake briefs.",
      canonicalUrl: window.location.href,
      ogImage: logoImg
    });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] dark:bg-[#070913] min-h-screen text-left">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Flagship
          </button>
        </div>

        {/* Header */}
        <div className="mb-12 border-b border-slate-100 dark:border-slate-900 pb-8">
          <div className="p-3 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-2xl w-fit mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-slate-400 mt-2 uppercase font-mono font-bold">Last updated: July 15, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-slate dark:prose-invert text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed flex flex-col gap-6">
          <p>
            At Niaz Digital, we prioritize client confidentiality. This Privacy Policy documents how we handle your digital project specifications, database records, corporate contact details, and any source materials shared via our client portal.
          </p>

          <h3 className="font-display font-bold text-slate-900 dark:text-white text-base mt-4">1. Information We Collect</h3>
          <p>
            When you submit an intake brief on our Contact or Onboarding forms, we collect your Name, Corporate Email Address, Company Name, Budget Ranges, and Project descriptions. This data is exclusively used to build your custom technical proposals.
          </p>

          <h3 className="font-display font-bold text-slate-900 dark:text-white text-base mt-4">2. Non-Disclosure & Code Security</h3>
          <p>
            We implement strict, enterprise-grade file access privileges. Any credentials, database access keys, or third-party webhooks connected inside our automation routines (e.g., n8n, Make.com) are isolated and encrypted. We do not sell or lease client details to external marketing agencies under any conditions.
          </p>

          <h3 className="font-display font-bold text-slate-900 dark:text-white text-base mt-4">3. Cookies & Tracking</h3>
          <p>
            We utilize standard, secure cookie files solely to maintain authenticated sessions on our secure Client Portal dashboard. No third-party behavioral cookies are deployed without explicit customer opt-in consent.
          </p>

          <h3 className="font-display font-bold text-slate-900 dark:text-white text-base mt-4">4. Client Rights & Compliance</h3>
          <p>
            Niaz Digital fully complies with general global privacy directives. You preserve absolute ownership of your uploaded files, and can request comprehensive data expungement or download full system logs at any point.
          </p>
        </div>

      </div>
    </section>
  );
}
