import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Team from '../components/Team';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

export default function TeamPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateMetaTags({
      title: "Meet the Team | Digital Growth Strategists & Engineers | Niaz Digital",
      description: "Meet Azhar Uddin, Founder & Growth Strategist, and the engineering, SEO, marketing, and design specialists powering Niaz Digital.",
      canonicalUrl: window.location.href,
      ogImage: logoImg
    });
  }, []);

  const handleBookCall = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#070913] text-[#0F172A] dark:text-slate-100 relative">
      
      {/* Top Breadcrumb Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Flagship
        </button>
      </div>

      {/* Main Team Section Component */}
      <Team onBookCall={handleBookCall} />

    </div>
  );
}
