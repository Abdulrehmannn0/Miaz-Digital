import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Linkedin, 
  Mail, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  PhoneCall, 
  Briefcase, 
  Globe2, 
  Heart,
  Code,
  Palette,
  SearchCode,
  TrendingUp,
  Cpu,
  Database,
  FileText,
  Share2,
  Users
} from 'lucide-react';
import { TEAM_MEMBERS, TEAM_COUNTERS, TEAM_CATEGORIES, FOUNDER_MEMBER } from '../data/teamData';
import { TeamMember } from '../types';
import logoImg from '../assets/images/niaz_digital_logo_1784067879724.jpg';

interface TeamProps {
  onBookCall?: () => void;
}

export default function Team({ onBookCall }: TeamProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Category Icon Mapping
  const categoryIcons: Record<string, React.ElementType> = {
    All: Users,
    Development: Code,
    Design: Palette,
    SEO: SearchCode,
    Marketing: TrendingUp,
    AI: Cpu,
    Operations: Database,
    Content: FileText,
    'Social Media': Share2
  };

  // Filter team members based on category and search query
  const filteredMembers = useMemo(() => {
    return TEAM_MEMBERS.filter(member => {
      const matchesCategory = 
        selectedCategory === 'All' || 
        member.category === selectedCategory ||
        (selectedCategory === 'Social Media' && member.category === 'Social Media') ||
        (selectedCategory === 'AI' && member.skills.some(s => ['n8n', 'Make', 'Zapier', 'ChatGPT', 'Gemini', 'Claude', 'AI Automation'].includes(s)));

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.country.toLowerCase().includes(query) ||
        member.skills.some(skill => skill.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Non-founder members for grid/carousel
  const teamCards = useMemo(() => {
    return filteredMembers.filter(m => !m.isFounder);
  }, [filteredMembers]);

  // Scroll mobile carousel
  const handleScrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.85;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleCarouselScrollEvent = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const newIndex = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveSlide(newIndex);
  };

  return (
    <section id="team" className="py-20 md:py-32 bg-[#FFFFFF] dark:bg-[#070913] relative overflow-hidden transition-colors duration-300">
      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
        
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-3xs font-black uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Meet The Team
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5.5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6"
          >
            The Engine Behind <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 dark:from-blue-400 dark:via-indigo-400 dark:to-teal-400">Digital Dominance</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal"
          >
            A specialized group of growth strategists, full-stack engineers, SEO architects, and automation specialists operating under unified standards to scale business operations.
          </motion.p>
        </div>

        {/* Animated Counter Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-20 bg-slate-50/80 dark:bg-slate-900/40 backdrop-blur-xl p-6 rounded-[28px] border border-slate-200/80 dark:border-slate-800/80 shadow-sm"
        >
          {TEAM_COUNTERS.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-white/60 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850 text-center hover:border-blue-500/30 transition-all group"
            >
              <span className="text-2xl md:text-3.5xl font-black font-display text-slate-900 dark:text-white block group-hover:scale-105 transition-transform text-blue-600 dark:text-blue-400">
                {stat.value}
              </span>
              <span className="text-3xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1 block">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Search & Category Filter Controls */}
        <div className="mb-14 flex flex-col gap-6">
          {/* Search Input Bar */}
          <div className="relative max-w-xl mx-auto w-full">
            <Search className="absolute left-4.5 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search team members by name, role, or skill..."
              className="w-full pl-12 pr-10 py-3.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs font-semibold placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-slate-900 dark:text-white shadow-inner transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-3 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {TEAM_CATEGORIES.map((cat) => {
              const Icon = categoryIcons[cat] || Users;
              const isSelected = selectedCategory === cat;
              const count = cat === 'All' 
                ? TEAM_MEMBERS.length 
                : TEAM_MEMBERS.filter(m => m.category === cat || (cat === 'AI' && m.skills.some(s => ['n8n', 'Make', 'Zapier', 'ChatGPT', 'Gemini', 'Claude'].includes(s)))).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-3xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                    isSelected 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105' 
                      : 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-850 border border-slate-200/60 dark:border-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat}</span>
                  <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FEATURED FOUNDER CARD - Prominently Styled */}
        {(selectedCategory === 'All' || selectedCategory === 'Operations' || searchQuery.toLowerCase().includes('azhar') || searchQuery.toLowerCase().includes('founder') || searchQuery.toLowerCase().includes('growth')) && (
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950/80 backdrop-blur-2xl border-2 border-blue-500/30 dark:border-blue-500/20 rounded-[36px] p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500"
          >
            {/* Corner Luxury Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Founder Image Column */}
              <div className="col-span-1 lg:col-span-5 flex flex-col items-center text-center">
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-[30px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-950 group-hover:scale-[1.02] transition-transform duration-500">
                  <AvatarImage 
                    src={FOUNDER_MEMBER.photo} 
                    alt={FOUNDER_MEMBER.name}
                    name={FOUNDER_MEMBER.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Verified Founder Badge Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/50 dark:border-slate-700/50 flex items-center justify-center gap-2 shadow-lg">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    <span className="text-3xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100">
                      {FOUNDER_MEMBER.verifiedBadge}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-3xs font-bold uppercase">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    {FOUNDER_MEMBER.availability}
                  </span>
                </div>
              </div>

              {/* Founder Bio Column */}
              <div className="col-span-1 lg:col-span-7 flex flex-col gap-6 text-left">
                
                {/* Badges Header Row */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-blue-600 text-white text-3xs font-black uppercase tracking-wider shadow-sm">
                    {FOUNDER_MEMBER.verifiedBadge}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-3xs font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    {FOUNDER_MEMBER.journeyBadge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 text-3xs font-mono font-bold flex items-center gap-1">
                    <Globe2 className="w-3 h-3 text-slate-400" />
                    {FOUNDER_MEMBER.country} 🇮🇳
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-3xl md:text-4xl text-slate-900 dark:text-white mb-2 tracking-tight">
                    {FOUNDER_MEMBER.name}
                  </h3>
                  <p className="text-xs md:text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
                    {FOUNDER_MEMBER.role}
                  </p>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {FOUNDER_MEMBER.description}
                  </p>
                </div>

                {/* Skills Grid */}
                <div>
                  <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-2.5">
                    Core Technical & Strategic Competencies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {FOUNDER_MEMBER.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg text-3xs font-semibold text-slate-700 dark:text-slate-200 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Action Buttons */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-wrap items-center gap-4">
                  <button 
                    onClick={() => onBookCall ? onBookCall() : (window.location.href = '/contact')}
                    className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-blue-500/20 cursor-pointer flex items-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Book Discovery Call
                  </button>

                  {FOUNDER_MEMBER.linkedin && (
                    <a 
                      href={FOUNDER_MEMBER.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-slate-200 dark:border-slate-700 flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      LinkedIn Profile
                    </a>
                  )}

                  {FOUNDER_MEMBER.email && (
                    <a 
                      href={`mailto:${FOUNDER_MEMBER.email}`}
                      className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl transition-all border border-slate-200 dark:border-slate-700"
                      title="Direct Founder Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>

            </div>
          </motion.div>
        )}

        {/* CORE & SUPPORT TEAM GRID / MOBILE CAROUSEL */}
        <div className="relative">
          
          {/* Mobile Carousel Navigation Arrows */}
          <div className="flex md:hidden items-center justify-between mb-4">
            <span className="text-3xs font-black uppercase tracking-wider text-slate-400">
              Team Roster ({teamCards.length})
            </span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => handleScrollCarousel('left')}
                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300"
                aria-label="Previous Team Member"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleScrollCarousel('right')}
                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300"
                aria-label="Next Team Member"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Members Container (Mobile Carousel / Desktop Grid) */}
          <div 
            ref={carouselRef}
            onScroll={handleCarouselScrollEvent}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-6 md:pb-0 scrollbar-none"
          >
            <AnimatePresence mode="popLayout">
              {teamCards.map((member, index) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="min-w-[85%] sm:min-w-[320px] md:min-w-0 snap-center shrink-0 flex flex-col justify-between p-6 bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 rounded-[28px] shadow-sm hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1.5"
                >
                  <div>
                    {/* Header: Photo Avatar & Status Badge */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 font-display font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                          <AvatarImage 
                            src={member.photo} 
                            alt={member.name}
                            name={member.name}
                          />
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 shadow-sm" title={member.availability} />
                      </div>

                      {member.isSupport ? (
                        <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 text-3xs font-black uppercase">
                          Support
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 text-3xs font-bold uppercase">
                          {member.experience}
                        </span>
                      )}
                    </div>

                    {/* Member Identifiers */}
                    <div className="mb-4 text-left">
                      <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                        {member.name}
                        {member.id === 'emir' && <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-bounce" />}
                      </h4>
                      <p className="text-3xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                        {member.role}
                      </p>
                      
                      <div className="flex items-center gap-2 text-3xs text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1 font-medium">
                          <Globe2 className="w-3 h-3 text-slate-400" />
                          {member.country} 🇮🇳
                        </span>
                        <span>&bull;</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold truncate max-w-[140px]">
                          {member.availability}
                        </span>
                      </div>
                    </div>

                    {/* Emir Special Touch Note */}
                    {member.specialNote && (
                      <div className="p-3 mb-4 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-600 dark:text-pink-300 text-3xs leading-relaxed font-semibold">
                        {member.specialNote}
                      </div>
                    )}

                    {/* Skills Tag Cloud */}
                    <div className="mb-6 text-left">
                      <span className="text-3xs font-black uppercase tracking-wider text-slate-400 block mb-2">
                        Top Skills
                      </span>
                      <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto scrollbar-none">
                        {member.skills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-md text-[11px] font-medium border border-slate-200/60 dark:border-slate-700/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Social Connections */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                      Niaz Team
                    </span>
                    <div className="flex items-center gap-2">
                      {member.linkedin && (
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                          title={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.email && (
                        <a 
                          href={`mailto:${member.email}`}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                          title={`Email ${member.name}`}
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Zero Results State */}
          {filteredMembers.length === 0 && (
            <div className="py-16 text-center bg-slate-50 dark:bg-slate-900/40 rounded-[32px] border border-slate-200 dark:border-slate-800">
              <Users className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-1">
                No team members match "{searchQuery}"
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Try searching for a different skill or reset the active filter.
              </p>
              <button 
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="px-4 py-2 bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl"
              >
                Reset Filter Options
              </button>
            </div>
          )}

        </div>

        {/* BOTTOM CTA: "Want to work with our team?" */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900/80 dark:to-slate-900 rounded-[36px] text-white shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-400/20"
        >
          <div className="max-w-2xl">
            <span className="text-3xs font-black uppercase tracking-widest text-blue-200 block mb-2">
              Collaborate With Specialists
            </span>
            <h3 className="font-display font-black text-2xl md:text-4xl tracking-tight mb-3">
              Want to work with our team?
            </h3>
            <p className="text-xs md:text-sm text-blue-100 leading-relaxed">
              Book a direct strategy call with our digital growth specialists to evaluate your website architecture, SEO visibility, and AI automation potential.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button 
              onClick={() => onBookCall ? onBookCall() : (window.location.href = '/contact')}
              className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-slate-100 text-blue-700 font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-xl cursor-pointer"
            >
              Book Discovery Call
            </button>
            
            <button 
              disabled
              className="w-full sm:w-auto px-6 py-4 bg-blue-800/40 text-blue-200 font-bold text-xs uppercase tracking-wider rounded-2xl border border-blue-400/30 opacity-80 flex items-center justify-center gap-2 cursor-not-allowed"
              title="Careers Portal Coming Soon"
            >
              <span>View Careers</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/40 text-white font-mono">
                Coming Soon
              </span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// Avatar Helper Component to gracefully load photo or SVG fallback
function AvatarImage({ src, alt, name }: { src?: string; alt: string; name: string }) {
  const [hasError, setHasError] = useState(false);

  const getInitials = (str: string) => {
    return str
      .split(' ')
      .map(part => part[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  if (src && !hasError) {
    return (
      <img 
        src={src} 
        alt={alt}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-800 text-white flex items-center justify-center font-display font-black text-xl tracking-wider select-none">
      {getInitials(name)}
    </div>
  );
}
