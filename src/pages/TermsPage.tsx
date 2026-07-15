import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

export default function TermsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateMetaTags({
      title: "Terms & Conditions | Niaz Digital",
      description: "Read the professional service agreements, delivery terms, and support maintainer clauses of Niaz Digital.",
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
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight">Terms & Conditions</h1>
          <p className="text-xs text-slate-400 mt-2 uppercase font-mono font-bold">Last updated: July 15, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-slate dark:prose-invert text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed flex flex-col gap-6">
          <p>
            Welcome to Niaz Digital. By engaging our digital agency for website development, SEO services, design systems, branding, or automations, you agree to comply with the following contractual conditions.
          </p>

          <h3 className="font-display font-bold text-slate-900 dark:text-white text-base mt-4">1. Scope of Work & Deliverables</h3>
          <p>
            All development objectives, database schemas, and visual layouts will be fully specified inside a separate Project Statement of Work (SOW). Any additions outside the initial agreed SOW will be calculated as custom change orders.
          </p>

          <h3 className="font-display font-bold text-slate-900 dark:text-white text-base mt-4">2. Client Review & Acceptance</h3>
          <p>
            We implement milestone tracking inside our secure Client Portal. Upon presenting designs or completed systems, the client has five business days to submit detailed review directives. In the absence of feedback, milestones are marked as approved to prevent schedule slippage.
          </p>

          <h3 className="font-display font-bold text-slate-900 dark:text-white text-base mt-4">3. Intellectual Property Ownership</h3>
          <p>
            Full copyright ownership, including source vector logo files, Figma screens, and custom website code, is transferred to the client instantly upon receipt of the final invoice payment. Niaz Digital retains rights to display the project inside our portfolio.
          </p>

          <h3 className="font-display font-bold text-slate-900 dark:text-white text-base mt-4">4. Warranties & Maintenance limits</h3>
          <p>
            We guarantee completed platforms against structural bugs, database errors, and responsiveness offsets for 30 days post-launch. Proactive monthly maintenance is supported via separate retainer agreements.
          </p>
        </div>

      </div>
    </section>
  );
}
