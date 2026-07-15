import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers } from 'lucide-react';
import { updateMetaTags } from '../lib/wordpress';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    updateMetaTags({
      title: "404 - System Displaced | Niaz Digital",
      description: "The requested digital endpoint is not located in Niaz Digital systems.",
      canonicalUrl: window.location.href,
      ogImage: logoImg
    });
  }, []);

  return (
    <section className="py-24 bg-[#FFFFFF] dark:bg-[#070913] min-h-screen flex items-center justify-center text-center">
      <div className="max-w-md mx-auto px-6">
        <div className="p-4 bg-red-500/10 text-red-500 rounded-full w-fit mx-auto mb-6">
          <Layers className="w-8 h-8 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-6.5xl font-display font-black text-slate-900 dark:text-white tracking-tight mb-2">404</h1>
        <h2 className="text-xl font-display font-bold text-slate-800 dark:text-slate-250 mb-3">System Path Displaced</h2>
        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-8 max-w-sm mx-auto leading-relaxed">
          The requested technical system path is currently under development or has been relocated to an alternate endpoint.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer transition-all shadow-lg shadow-blue-500/25"
        >
          Return to Flagship
        </button>
      </div>
    </section>
  );
}
