/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  Sparkles, 
  Brain, 
  TrendingUp, 
  DollarSign, 
  Wrench, 
  HelpCircle, 
  ArrowRight, 
  RefreshCw, 
  Cpu, 
  CheckCircle,
  CheckCircle2,
  FileCheck,
  Globe,
  Search,
  Share2,
  Zap,
  Award,
  Clock,
  Users,
  Check,
  ChevronLeft,
  ChevronRight,
  Upload,
  FileText,
  X,
  File,
  Download,
  Mail,
  Phone,
  MapPin,
  Layers,
  Video,
  MessageSquare,
  Settings,
  Shield,
  FileArchive,
  Image as ImageIcon
} from 'lucide-react';

// Define structures for our state management
interface MockFile {
  id: string;
  name: string;
  size: string;
  type: string;
  progress: number;
  status: 'uploading' | 'complete';
}

export default function ToolsSuite() {
  // Calculator Tab states
  const [activeTab, setActiveTab] = useState<'website' | 'seo' | 'social' | 'automation' | 'branding' | 'assistant'>('website');

  // --- Calculator 1: Website State ---
  const [webBusinessType, setWebBusinessType] = useState<string>('Startup');
  const [webPlatform, setWebPlatform] = useState<string>('Custom React');
  const [webPages, setWebPages] = useState<string>('1-5');
  const [webFeatures, setWebFeatures] = useState<Record<string, boolean>>({
    Blog: false,
    Booking: false,
    Payment: false,
    Membership: false,
    CRM: true,
    Chat: false,
    WhatsApp: true,
    Multilanguage: false,
    Animations: true,
    SEO: true,
    'Speed Optimization': true,
  });
  const [webDelivery, setWebDelivery] = useState<string>('Standard');

  // --- Calculator 2: SEO State ---
  const [seoUrl, setSeoUrl] = useState<string>('');
  const [seoCountry, setSeoCountry] = useState<string>('USA');
  const [seoBusinessType, setSeoBusinessType] = useState<string>('Startup');
  const [seoKeywords, setSeoKeywords] = useState<string>('1-10');
  const [seoFeatures, setSeoFeatures] = useState<Record<string, boolean>>({
    'Technical SEO': true,
    'On-page SEO': true,
    'Local SEO': false,
    'Google Business Profile': false,
    'Content Optimization': false,
  });

  // --- Calculator 3: SMM State ---
  const [smmPlatforms, setSmmPlatforms] = useState<Record<string, boolean>>({
    Instagram: true,
    Facebook: true,
    LinkedIn: false,
    Pinterest: false,
    YouTube: false,
    Threads: false,
    X: false,
    Reddit: false,
  });
  const [smmPosts, setSmmPosts] = useState<number>(8);
  const [smmReels, setSmmReels] = useState<number>(4);
  const [smmStories, setSmmStories] = useState<boolean>(true);
  const [smmVideoEditing, setSmmVideoEditing] = useState<boolean>(false);
  const [smmCommunityManagement, setSmmCommunityManagement] = useState<boolean>(false);

  // --- Calculator 4: AI Automation State ---
  const [autoFeatures, setAutoFeatures] = useState<Record<string, boolean>>({
    CRM: true,
    WhatsApp: false,
    'Email Automation': true,
    'Lead Capture': true,
    ChatGPT: false,
    Claude: false,
    Gemini: false,
    n8n: false,
    Make: false,
    Zapier: false,
    GoHighLevel: false,
  });

  // --- Calculator 5: Branding State ---
  const [brandFeatures, setBrandFeatures] = useState<Record<string, boolean>>({
    Logo: true,
    'Brand Identity': true,
    'Social Templates': false,
    Presentation: false,
    'Business Card': false,
    'Canva Kit': false,
    'Brand Guidelines': false,
  });

  // --- Calculator 6: EA State ---
  const [eaHours, setEaHours] = useState<number>(20);
  const [eaTasks, setEaTasks] = useState<Record<string, boolean>>({
    Research: true,
    CRM: false,
    Calendar: true,
    Email: true,
    Documentation: false,
    Operations: false,
  });

  // --- Proposal Form State ---
  const [proposalName, setProposalName] = useState<string>('');
  const [proposalCompany, setProposalCompany] = useState<string>('');
  const [proposalEmail, setProposalEmail] = useState<string>('');
  const [proposalPhone, setProposalPhone] = useState<string>('');
  const [proposalCountry, setProposalCountry] = useState<string>('United States');
  const [proposalBudget, setProposalBudget] = useState<string>('$500 - $2,500');
  const [proposalTimeline, setProposalTimeline] = useState<string>('Standard (3-6 weeks)');
  const [proposalRequirements, setProposalRequirements] = useState<string>('');
  const [uploadedFiles, setUploadedFiles] = useState<MockFile[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // --- Generated Proposal Outputs ---
  const [generatedProposal, setGeneratedProposal] = useState<any | null>(null);
  const [proposalLoading, setProposalLoading] = useState<boolean>(false);
  const [selectedAddons, setSelectedAddons] = useState<Record<string, boolean>>({});

  // Real-time Calculators Pricing Math

  // 1. Website Cost Math
  const getWebsiteCost = () => {
    let base = 250; // default business website starting point
    
    // Choose Platform Starting rates
    if (webPlatform === 'Landing Page') base = 120;
    else if (webPlatform === 'Portfolio Website') base = 180;
    else if (webPlatform === 'WordPress') base = 250;
    else if (webPlatform === 'Shopify') base = 350;
    else if (webPlatform === 'Wix' || webPlatform === 'Squarespace') base = 200;
    else if (webPlatform === 'Custom React') base = 700;
    else if (webPlatform === 'Next.js') base = 900;

    // Business Type modifier
    let bizMod = 0;
    if (webBusinessType === 'Corporate') bizMod = 350;
    else if (webBusinessType === 'Ecommerce') bizMod = 300;
    else if (webBusinessType === 'Agency') bizMod = 250;
    else if (webBusinessType === 'Healthcare') bizMod = 200;
    else if (webBusinessType === 'Education') bizMod = 150;
    else if (webBusinessType === 'Small Business') bizMod = 100;

    // Pages volume modifier
    let pageMod = 0;
    if (webPages === '6-10') pageMod = 150;
    else if (webPages === '10-20') pageMod = 350;
    else if (webPages === '20+') pageMod = 700;

    // Features modifiers
    let featureMod = 0;
    Object.entries(webFeatures).forEach(([feat, active]) => {
      if (active) {
        if (feat === 'Blog') featureMod += 50;
        else if (feat === 'Booking') featureMod += 100;
        else if (feat === 'Payment') featureMod += 120;
        else if (feat === 'Membership') featureMod += 150;
        else if (feat === 'CRM') featureMod += 180;
        else if (feat === 'Chat') featureMod += 100;
        else if (feat === 'WhatsApp') featureMod += 50;
        else if (feat === 'Multilanguage') featureMod += 120;
        else if (feat === 'Animations') featureMod += 80;
        else if (feat === 'SEO') featureMod += 100;
        else if (feat === 'Speed Optimization') featureMod += 90;
      }
    });

    const subtotal = base + bizMod + pageMod + featureMod;

    // Delivery modifier
    let deliveryMod = 0;
    if (webDelivery === 'Priority') deliveryMod = Math.round(subtotal * 0.15);
    else if (webDelivery === 'Urgent') deliveryMod = Math.round(subtotal * 0.30);

    return subtotal + deliveryMod;
  };

  // 2. SEO Cost Math
  const getSeoCost = () => {
    // Basic: $120/month, Growth: $250/month, Professional: $450/month, Enterprise: Custom
    let activeChecks = Object.values(seoFeatures).filter(Boolean).length;
    let keywordMultiplier = 1;
    if (seoKeywords === '11-30') keywordMultiplier = 1.3;
    else if (seoKeywords === '31-50') keywordMultiplier = 1.6;
    else if (seoKeywords === '50+') keywordMultiplier = 2.2;

    const baseCost = 100 + (activeChecks * 40);
    const finalValue = Math.round(baseCost * keywordMultiplier);

    if (seoBusinessType === 'Corporate' || seoKeywords === '50+') {
      return { cost: 450, planName: 'Professional', isCustom: false };
    }
    if (finalValue <= 140) {
      return { cost: 120, planName: 'Basic', isCustom: false };
    } else if (finalValue <= 280) {
      return { cost: 250, planName: 'Growth', isCustom: false };
    } else {
      return { cost: 450, planName: 'Professional', isCustom: false };
    }
  };

  // 3. Social Media Cost Math
  const getSmmCost = () => {
    let platformCount = Object.values(smmPlatforms).filter(Boolean).length;
    if (platformCount === 0) return 0;

    let basePostsCost = smmPosts * 12; // $12 per post
    let baseReelsCost = smmReels * 22; // $22 per reel
    
    // Additional platforms modifier
    let multiplier = 1 + (platformCount - 1) * 0.15; // 15% increase per extra platform

    let subtotal = basePostsCost + baseReelsCost;
    if (smmStories) subtotal += 50;
    if (smmVideoEditing) subtotal += 120;
    if (smmCommunityManagement) subtotal += 100;

    return Math.round(subtotal * multiplier);
  };

  // 4. AI Automation Cost Math
  const getAutomationCost = () => {
    let cost = 0;
    Object.entries(autoFeatures).forEach(([feat, active]) => {
      if (active) {
        if (feat === 'CRM') cost += 120;
        else if (feat === 'WhatsApp') cost += 140;
        else if (feat === 'Email Automation') cost += 90;
        else if (feat === 'Lead Capture') cost += 80;
        else if (feat === 'ChatGPT' || feat === 'Claude' || feat === 'Gemini') cost += 150;
        else if (feat === 'n8n' || feat === 'Make' || feat === 'Zapier') cost += 110;
        else if (feat === 'GoHighLevel') cost += 180;
      }
    });
    return cost === 0 ? 0 : Math.max(150, cost); // starting estimate base of 150
  };

  // 5. Branding Cost Math
  const getBrandingCost = () => {
    let cost = 0;
    Object.entries(brandFeatures).forEach(([feat, active]) => {
      if (active) {
        if (feat === 'Logo') cost += 80;
        else if (feat === 'Brand Identity') cost += 120;
        else if (feat === 'Social Templates') cost += 60;
        else if (feat === 'Presentation') cost += 90;
        else if (feat === 'Business Card') cost += 30;
        else if (feat === 'Canva Kit') cost += 50;
        else if (feat === 'Brand Guidelines') cost += 100;
      }
    });
    return cost;
  };

  // 6. Executive Assistant Cost Math
  const getAssistantCost = () => {
    let baseRate = 16; // $16/hr baseline
    let specialTaskCount = 0;
    
    if (eaTasks['CRM']) specialTaskCount += 1;
    if (eaTasks['Operations']) specialTaskCount += 1;

    let operationalRate = baseRate + (specialTaskCount * 2.5);
    return Math.round(eaHours * operationalRate);
  };

  // Combined Active Calculator Pricing
  const getActiveCalculatorCost = () => {
    switch (activeTab) {
      case 'website': return getWebsiteCost();
      case 'seo': return getSeoCost().cost;
      case 'social': return getSmmCost();
      case 'automation': return getAutomationCost();
      case 'branding': return getBrandingCost();
      case 'assistant': return getAssistantCost();
      default: return 0;
    }
  };

  // Mock File Drag and Drop Handling
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
    }
  };

  const processFiles = (fileList: FileList) => {
    Array.from(fileList).forEach(file => {
      const sizeMB = file.size / (1024 * 1024);
      if (sizeMB > 25) {
        alert(`File ${file.name} exceeds maximum size limit of 25MB.`);
        return;
      }

      const newId = Math.random().toString(36).substring(2, 9);
      const newFile: MockFile = {
        id: newId,
        name: file.name,
        size: `${sizeMB.toFixed(2)} MB`,
        type: file.type || 'application/octet-stream',
        progress: 0,
        status: 'uploading'
      };

      setUploadedFiles(prev => [...prev, newFile]);

      // Simulate file upload progress
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.floor(Math.random() * 25) + 15;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(interval);
          setUploadedFiles(prev => 
            prev.map(f => f.id === newId ? { ...f, progress: 100, status: 'complete' } : f)
          );
        } else {
          setUploadedFiles(prev => 
            prev.map(f => f.id === newId ? { ...f, progress: currentProgress } : f)
          );
        }
      }, 300);
    });
  };

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  const getFileIcon = (type: string) => {
    if (type.includes('image')) return ImageIcon;
    if (type.includes('zip') || type.includes('rar') || type.includes('tar')) return FileArchive;
    return FileText;
  };

  // Form Submission and Dynamic Smart Proposal Compilation
  const triggerProposalGeneration = (e: React.FormEvent) => {
    e.preventDefault();

    if (!proposalName || !proposalEmail || !proposalRequirements) {
      alert("Please fill in Name, Email, and Project Requirements to generate your smart proposal.");
      return;
    }

    setProposalLoading(true);

    setTimeout(() => {
      const activeCost = getActiveCalculatorCost();
      let estTimelineText = '3 - 5 Weeks';
      let stack: string[] = [];
      let services: string[] = [];
      let roadmap: string[] = [];
      let inclusions: string[] = [];
      let addOnsList: any[] = [];

      if (activeTab === 'website') {
        estTimelineText = webDelivery === 'Urgent' ? '1 - 2 Weeks' : webDelivery === 'Priority' ? '2 - 3 Weeks' : '4 - 6 Weeks';
        stack = webPlatform === 'Custom React' || webPlatform === 'Next.js' 
          ? ['Next.js React Framework', 'TypeScript Type-Safety', 'Tailwind CSS utility', 'Vite Bundler', 'Lucide Vector Library']
          : webPlatform === 'Shopify' ? ['Shopify Theme Liquid', 'Storefront APIs', 'Secure Cart APIs'] : ['WordPress Engine', 'Elementor builder', 'MySQL secure schema'];
        services = [`Custom ${webPlatform} development`, `${webPages} design iterations`, 'CRM integrations pipeline setup'];
        roadmap = ['Requirements & UX Wireframing', 'Pristine Apple-style Figma UI Design', 'Type-safe React/Liquid Frontend assembly', 'Launch, Domain linkage, Vitals auditing'];
        inclusions = ['Fully 100% Mobile Responsive layout design', 'Sub-second Resource Load speed indexing', '1-Year complimentary high-performance maintenance', 'Comprehensive SEO micro-data setup'];
        addOnsList = [
          { id: 'custom_cms', label: 'Admin Custom CMS Dashboard', price: 250, desc: 'Add or modify items on the go with zero coding.' },
          { id: 'live_chatbot', label: 'Floating AI Support Agent (Gemini API)', price: 400, desc: 'Instantly answers visitor questions and logs inquiries.' }
        ];
      } else if (activeTab === 'seo') {
        estTimelineText = 'Ongoing Monthly Retainer';
        stack = ['Google Search Console', 'Google Analytics 4', 'Screaming Frog Crawler', 'JSON-LD / Schema Markup Builder'];
        services = ['Technical crawling & Redirect fixes', 'Semantic meta tags restructuring', 'Continuous keyword rank scaling'];
        roadmap = ['Complete Technical Website Audit', 'On-Page SEO semantic refactoring', 'Local Maps & GMB Profile synchronization', 'Monthly analytic reports and keyword tracking'];
        inclusions = ['Comprehensive CLS/LCP Core Vitals tuning', 'Continuous search snippet optimization', 'Weekly Google Console indexing triggers'];
        addOnsList = [
          { id: 'blog_writing', label: 'High-authority Monthly blog posts (x4)', price: 150, desc: 'Targeting specific high-volume industry keywords.' }
        ];
      } else if (activeTab === 'social') {
        estTimelineText = 'Continuous Monthly Service';
        stack = ['Figma Creator Suite', 'Adobe Premiere Pro', 'CapCut Pro editor', 'Meta Ads Planner'];
        services = [`SMM Management (${smmPosts} Posts / month)`, `${smmReels} Visual Reels short-cuts`];
        roadmap = ['Editorial content planning session', 'Figma layout & Visual brand assets build', 'Video editing and micro-effects layout', 'Scheduled platform auto-distribution & monitoring'];
        inclusions = ['Custom high-end graphic design frames', 'Captivating brand-consistent copy layouts', 'Bespoke trending hashtag selection'];
        addOnsList = [
          { id: 'com_manage', label: 'Full Community Management & Replies', price: 100, desc: 'We monitor comments, reply to direct messages within 1 hour.' }
        ];
      } else if (activeTab === 'automation') {
        estTimelineText = '2 - 3 Weeks';
        stack = ['n8n.io Workflow Automation', 'Make.com server integration', 'GoHighLevel CRM SDK', 'OpenAI/Gemini REST webhooks'];
        services = ['Event-driven CRM auto-lead capture', 'Trigger notifications loops (Slack/WhatsApp)', 'Automated follow-up sequences'];
        roadmap = ['CRM structure analysis and token setups', 'n8n/Make webhook flow mapping design', 'Secure API keys staging and credentials vaults', 'End-to-end integration and error testing'];
        inclusions = ['Zero manual entry pipeline latency', 'Secure credential and API endpoints hosting', 'Detailed workflow debugging logs dashboard'];
        addOnsList = [
          { id: 'extra_api', label: 'Additional API Destination Webhook', price: 120, desc: 'Connect another external platform to the flow.' }
        ];
      } else if (activeTab === 'branding') {
        estTimelineText = '2 - 4 Weeks';
        stack = ['Figma Design Studio', 'Canva Creator templates', 'Vector EPS assets', 'Modern Font pairing files'];
        services = ['Bespoke minimalist logo design', 'Corporate brand guidelines production', 'Reusable social template kits'];
        roadmap = ['Core Brand values discovery session', '3 Logo concepts & presentation cycles', 'Color theme, typographies, assets mapping', 'Hand-off of Canva/Figma visual handbook'];
        inclusions = ['Scalable high-fidelity SVG/EPS layouts', 'Reusable presentation slide template deck', 'Primal typography selection documentation'];
        addOnsList = [
          { id: 'brand_stationary', label: 'Premium Business Card & Stationary Kit', price: 80, desc: 'Print-ready high-dpi files with custom mockups.' }
        ];
      } else if (activeTab === 'assistant') {
        estTimelineText = 'Flexible Retainer (Monthly)';
        stack = ['Google Workspace admin tools', 'HubSpot / GoHighLevel CRM', 'Notion workspace management', 'Slack notification boards'];
        services = [`Virtual Assistant Support (${eaHours} Hours/month)`, 'Calendar control & Email triage routines'];
        roadmap = ['Onboarding call to handoff instructions', 'Credential setups & workspace delegation', 'Continuous daily operations assistance', 'Weekly reporting logs on tasks performed'];
        inclusions = ['Highly professional bilingual communications', 'Sub-2-hour urgency response times', 'Dedicated Notion workspace tracking board'];
        addOnsList = [
          { id: 'extra_hours', label: 'Optional Overtime Hours Buffer (x5 hrs)', price: 90, desc: 'Secures extra hours at a highly discounted rate.' }
        ];
      }

      setGeneratedProposal({
        proposalId: `TG-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        basePrice: activeCost,
        timeline: estTimelineText,
        techStack: stack,
        recommendedServices: services,
        roadmap: roadmap,
        inclusions: inclusions,
        addOns: addOnsList,
        clientName: proposalName,
        clientCompany: proposalCompany || 'Your Venture',
        clientEmail: proposalEmail,
        clientPhone: proposalPhone || 'Not Provided',
        clientCountry: proposalCountry,
        clientBudget: proposalBudget,
        clientTimeline: proposalTimeline,
        requirements: proposalRequirements,
        filesCount: uploadedFiles.length
      });

      setProposalLoading(false);

      // Smooth scroll to proposal output container
      setTimeout(() => {
        const target = document.getElementById('proposal-showcase');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);

    }, 1300);
  };

  const getAddonTotal = () => {
    if (!generatedProposal) return 0;
    let addOnCost = 0;
    generatedProposal.addOns.forEach((addon: any) => {
      if (selectedAddons[addon.id]) {
        addOnCost += addon.price;
      }
    });
    return addOnCost;
  };

  const downloadSimulatedProposal = () => {
    if (!generatedProposal) return;
    const element = document.createElement("a");
    const totalEstimate = generatedProposal.basePrice + getAddonTotal();
    
    const fileContent = `
=========================================
TECHGLOZE PREMIUM PROJECT PROPOSAL
Proposal ID: ${generatedProposal.proposalId}
Date: ${generatedProposal.date}
=========================================

CLIENT INFORMATION:
Name: ${generatedProposal.clientName}
Company: ${generatedProposal.clientCompany}
Email: ${generatedProposal.clientEmail}
Phone: ${generatedProposal.clientPhone}
Location: ${generatedProposal.clientCountry}
Indicated Budget: ${generatedProposal.clientBudget}
Indicated Timeline: ${generatedProposal.clientTimeline}

PROJECT PRICE ESTIMATE: $${totalEstimate.toLocaleString()}
Project Timeline: ${generatedProposal.timeline}

SUGGESTED TECHNOLOGICAL STACK:
${generatedProposal.techStack.map((tech: string) => ` - ${tech}`).join('\n')}

CORE RECOMMENDED SERVICES:
${generatedProposal.recommendedServices.map((svc: string) => ` - ${svc}`).join('\n')}

PROJECT ROADMAP STEPS:
${generatedProposal.roadmap.map((step: string, index: number) => ` [Phase 0${index + 1}] ${step}`).join('\n')}

GUARANTEED INCLUSIONS:
${generatedProposal.inclusions.map((inc: string) => ` - ${inc}`).join('\n')}

We look forward to collaborating with you to scale your business growth.
To lock in this estimate, please reach out via WhatsApp at +91 90124 03699 or reply directly.
`;

    const file = new Blob([fileContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `TechGloze_Proposal_${generatedProposal.proposalId}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const getWhatsAppProposalLink = () => {
    if (!generatedProposal) return "https://wa.me/919012403699";
    const totalEstimate = generatedProposal.basePrice + getAddonTotal();
    const text = `Hello Azhar, I calculated my project estimate using your AI Business Estimator. 

*Proposal ID:* ${generatedProposal.proposalId}
*Estimated Investment:* $${totalEstimate}
*Service Category:* ${activeTab.toUpperCase()}
*My Name:* ${generatedProposal.clientName}
*Company:* ${generatedProposal.clientCompany}

Let's book a discovery call to discuss the project details!`;
    return `https://wa.me/919012403699?text=${encodeURIComponent(text)}`;
  };

  const emailSimulatedProposal = () => {
    if (!generatedProposal) return;
    const totalEstimate = generatedProposal.basePrice + getAddonTotal();
    const subject = `Project Proposal Estimate - ${generatedProposal.clientCompany} [${generatedProposal.proposalId}]`;
    const body = `Hi Azhar and TechGloze team,

I have completed our custom project calculation using your AI Estimator.

- Proposal ID: ${generatedProposal.proposalId}
- Company: ${generatedProposal.clientCompany}
- Estimated Price: $${totalEstimate}
- Estimated Timeline: ${generatedProposal.timeline}

Let's coordinate a discovery call.

Thanks,
${generatedProposal.clientName}`;

    window.open(`mailto:hello@techgloze.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <section 
      id="tools" 
      className="py-24 bg-slate-50/50 dark:bg-[#070913] border-t border-slate-100 dark:border-slate-900 overflow-hidden relative"
    >
      {/* Decorative gradient glowing spheres */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/5 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-indigo-600/5 dark:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-extrabold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            AI Business Estimator
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            Instant Project Estimation & Smart Proposal Generator
          </h2>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            Estimate your website, branding, SEO, AI automation, or marketing project instantly using real pricing logic based on today's global freelance and agency market.
          </p>
        </div>

        {/* 6 Category Interactive Tabs Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10 pb-6 border-b border-slate-200/50 dark:border-slate-800/60">
          {[
            { id: 'website', label: 'Website Cost', icon: Globe },
            { id: 'seo', label: 'SEO Audit', icon: Search },
            { id: 'social', label: 'Social Media', icon: Share2 },
            { id: 'automation', label: 'AI Automation', icon: Zap },
            { id: 'branding', label: 'Branding Identity', icon: Award },
            { id: 'assistant', label: 'Virtual Assistant', icon: Users },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex flex-col items-center justify-center p-5 rounded-2xl border cursor-pointer text-center group transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/15'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:border-blue-500/30'
                }`}
              >
                <div className={`p-2 rounded-xl mb-3 transition-colors ${isActive ? 'bg-white/10' : 'bg-slate-50 dark:bg-slate-800 group-hover:bg-blue-500/5'}`}>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400 group-hover:text-blue-500'}`} />
                </div>
                <span className="text-[11px] font-extrabold tracking-tight leading-tight block">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Workspace Frame (Calculators Box) */}
        <div className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 rounded-[32px] p-6 md:p-10 shadow-xl mb-12 overflow-hidden relative">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />

          <AnimatePresence mode="wait">
            
            {/* 1. Website Cost Calculator */}
            {activeTab === 'website' && (
              <motion.div
                key="website"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
              >
                {/* Inputs Columns */}
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <Globe className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-extrabold text-slate-800 dark:text-white text-base">Website Cost Calculator</h3>
                      <p className="text-3xs text-slate-400">Specify platforms, business scale, features, and delivery speeds</p>
                    </div>
                  </div>

                  {/* Row 1: Business scale & Platforms */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Business Type</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Startup', 'Small Business', 'Agency', 'Ecommerce', 'Healthcare', 'Education', 'Portfolio', 'Corporate'].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setWebBusinessType(item)}
                            className={`px-3 py-2.5 rounded-xl border text-2xs font-bold text-center cursor-pointer transition-colors ${
                              webBusinessType === item
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/80 hover:bg-slate-50'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Choose Platform</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['WordPress', 'Shopify', 'Custom React', 'Next.js', 'Landing Page', 'Wix', 'Squarespace'].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setWebPlatform(item)}
                            className={`px-3 py-2.5 rounded-xl border text-2xs font-bold text-center cursor-pointer transition-colors ${
                              webPlatform === item
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/80 hover:bg-slate-50'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Page count & Delivery speeds */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Screens / Pages Volume</label>
                      <div className="grid grid-cols-4 gap-2">
                        {['1-5', '6-10', '10-20', '20+'].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setWebPages(item)}
                            className={`px-2 py-2.5 rounded-xl border text-2xs font-bold text-center cursor-pointer transition-colors ${
                              webPages === item
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/80 hover:bg-slate-50'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Delivery Urgency</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Standard', 'Priority', 'Urgent'].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setWebDelivery(item)}
                            className={`px-2 py-2.5 rounded-xl border text-2xs font-bold text-center cursor-pointer transition-colors ${
                              webDelivery === item
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/80 hover:bg-slate-50'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Checkbox Integrations Grid */}
                  <div>
                    <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Required Features & Integrations</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                      {Object.keys(webFeatures).map((feat) => (
                        <button
                          key={feat}
                          type="button"
                          onClick={() => setWebFeatures({ ...webFeatures, [feat]: !webFeatures[feat] })}
                          className={`px-3 py-2 rounded-xl border text-3xs font-extrabold text-left cursor-pointer transition-colors flex items-center justify-between ${
                            webFeatures[feat]
                              ? 'bg-blue-500/10 text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-500/40'
                              : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/80'
                          }`}
                        >
                          <span>{feat}</span>
                          {webFeatures[feat] && <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Estimator Sidebar */}
                <div className="lg:col-span-4 flex flex-col justify-between bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 text-left">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block mb-4">Pricing Estimation Breakdown</span>
                    <div className="flex flex-col gap-3 text-2xs font-semibold text-slate-500 mb-6">
                      <div className="flex justify-between border-b border-slate-200/40 dark:border-slate-800/40 pb-2">
                        <span>Platform Base:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{webPlatform}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/40 dark:border-slate-800/40 pb-2">
                        <span>Scale:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{webBusinessType}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/40 dark:border-slate-800/40 pb-2">
                        <span>Screens:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{webPages} Pages</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/40 dark:border-slate-800/40 pb-2">
                        <span>Delivery Speed:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{webDelivery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Extra Features:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{Object.values(webFeatures).filter(Boolean).length} Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-900 mb-6 shadow-inner">
                    <span className="text-4xs text-slate-400 font-bold uppercase block mb-1">Estimated Base investment</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-display font-black text-slate-900 dark:text-white">${getWebsiteCost().toLocaleString()}</span>
                      <span className="text-[10px] text-slate-400 font-bold">USD</span>
                    </div>
                    <p className="text-[9px] text-slate-400 mt-1.5 leading-normal">
                      *Starting estimate only. Landing layouts starting at $120. Next.js customized solutions starting at $900. Click compile below to structure full proposal.
                    </p>
                  </div>

                  <a 
                    href="#proposal-form"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-2xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
                  >
                    <span>Proceed to Proposal Generator</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* 2. SEO Cost Calculator */}
            {activeTab === 'seo' && (
              <motion.div
                key="seo"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
              >
                {/* Inputs */}
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-2 rounded-xl bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400">
                      <Search className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-extrabold text-slate-800 dark:text-white text-base">SEO Cost Calculator</h3>
                      <p className="text-3xs text-slate-400">Map targeted countries, business scale, keyword count, and optimization services</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Website URL (Optional)</label>
                      <input 
                        type="url"
                        value={seoUrl}
                        onChange={(e) => setSeoUrl(e.target.value)}
                        placeholder="https://yourbrand.com"
                        className="w-full px-4 py-3 text-xs bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                      />
                    </div>

                    <div>
                      <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Target Audience Country</label>
                      <select
                        value={seoCountry}
                        onChange={(e) => setSeoCountry(e.target.value)}
                        className="w-full px-4 py-3 text-xs bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                      >
                        <option value="USA">United States (USA)</option>
                        <option value="India">India</option>
                        <option value="Israel">Israel</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="UAE">United Arab Emirates (UAE)</option>
                        <option value="UK">United Kingdom (UK)</option>
                        <option value="Other">International / Multi-Country</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Business Scale</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Startup', 'Small Business', 'Local Business', 'Corporate', 'E-commerce'].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setSeoBusinessType(item)}
                            className={`px-3 py-2.5 rounded-xl border text-2xs font-bold text-center cursor-pointer transition-colors ${
                              seoBusinessType === item
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/80 hover:bg-slate-50'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Target Keywords Volume</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['1-10', '11-30', '31-50', '50+'].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setSeoKeywords(item)}
                            className={`px-3 py-2.5 rounded-xl border text-2xs font-bold text-center cursor-pointer transition-colors ${
                              seoKeywords === item
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/80 hover:bg-slate-50'
                            }`}
                          >
                            {item} Keywords
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Required SEO Disciplines</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {Object.keys(seoFeatures).map((feat) => (
                        <button
                          key={feat}
                          type="button"
                          onClick={() => setSeoFeatures({ ...seoFeatures, [feat]: !seoFeatures[feat] })}
                          className={`px-3 py-2.5 rounded-xl border text-3xs font-extrabold text-left cursor-pointer transition-colors flex items-center justify-between ${
                            seoFeatures[feat]
                              ? 'bg-teal-500/10 text-teal-600 border-teal-600 dark:text-teal-400 dark:border-teal-500/40'
                              : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/80'
                          }`}
                        >
                          <span>{feat}</span>
                          {seoFeatures[feat] && <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outputs */}
                <div className="lg:col-span-4 flex flex-col justify-between bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 text-left">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block mb-4">Target Plan Recommendation</span>
                    <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-900 mb-6 shadow-sm">
                      <span className="text-4xs text-blue-600 dark:text-blue-400 font-bold uppercase block mb-0.5">Recommended Level</span>
                      <span className="text-xl font-display font-black text-slate-900 dark:text-white block">{getSeoCost().planName} SEO Pack</span>
                      <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-3xl font-display font-black text-slate-900 dark:text-white">${getSeoCost().cost.toLocaleString()}</span>
                        <span className="text-3xs text-slate-400 font-bold">/ Month</span>
                      </div>
                      <p className="text-[9px] text-slate-400 mt-2.5 leading-normal">
                        - Basic Plan: <strong>$120/mo</strong> (Local search optimization)<br />
                        - Growth Plan: <strong>$250/mo</strong> (National keywords scaling)<br />
                        - Professional Plan: <strong>$450/mo</strong> (High-authority content & audit loops)
                      </p>
                    </div>
                  </div>

                  <a 
                    href="#proposal-form"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-2xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
                  >
                    <span>Proceed to Proposal Generator</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* 3. Social Media Calculator */}
            {activeTab === 'social' && (
              <motion.div
                key="social"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
              >
                {/* Inputs */}
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-2 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      <Share2 className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-extrabold text-slate-800 dark:text-white text-base">Social Media Calculator</h3>
                      <p className="text-3xs text-slate-400">Manage posts, reels, stories, video editing, and community moderators</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Target Platform Channels</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {Object.keys(smmPlatforms).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setSmmPlatforms({ ...smmPlatforms, [p]: !smmPlatforms[p] })}
                          className={`px-3 py-2 rounded-xl border text-3xs font-extrabold text-center cursor-pointer transition-colors ${
                            smmPlatforms[p]
                              ? 'bg-purple-500/10 text-purple-600 border-purple-600 dark:text-purple-400 dark:border-purple-500/40'
                              : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/80'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <div className="flex justify-between mb-1">
                        <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider">Posts Per Month</label>
                        <span className="text-2xs font-bold text-purple-600 dark:text-purple-400">{smmPosts} Posts</span>
                      </div>
                      <input 
                        type="range"
                        min={4}
                        max={30}
                        step={1}
                        value={smmPosts}
                        onChange={(e) => setSmmPosts(parseInt(e.target.value))}
                        className="w-full accent-purple-600 h-1.5 rounded-full cursor-pointer bg-slate-200 dark:bg-slate-800"
                      />
                      <div className="flex justify-between text-4xs text-slate-400 font-bold mt-1.5">
                        <span>4 Posts</span>
                        <span>30 Posts</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider">Short-Form Videos / Reels</label>
                        <span className="text-2xs font-bold text-purple-600 dark:text-purple-400">{smmReels} Reels</span>
                      </div>
                      <input 
                        type="range"
                        min={0}
                        max={20}
                        step={1}
                        value={smmReels}
                        onChange={(e) => setSmmReels(parseInt(e.target.value))}
                        className="w-full accent-purple-600 h-1.5 rounded-full cursor-pointer bg-slate-200 dark:bg-slate-800"
                      />
                      <div className="flex justify-between text-4xs text-slate-400 font-bold mt-1.5">
                        <span>0 Reels</span>
                        <span>20 Reels</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Outreach & Creative Options</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setSmmStories(!smmStories)}
                        className={`p-3.5 rounded-xl border text-3xs font-extrabold text-left cursor-pointer transition-colors flex flex-col gap-1.5 ${
                          smmStories
                            ? 'bg-purple-500/10 text-purple-600 border-purple-600 dark:text-purple-400 dark:border-purple-500/40'
                            : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/80'
                        }`}
                      >
                        <span className="text-2xs font-extrabold block">Interactive Stories</span>
                        <span className="opacity-70 font-semibold block leading-normal">Publishing continuous polls & countdowns.</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSmmVideoEditing(!smmVideoEditing)}
                        className={`p-3.5 rounded-xl border text-3xs font-extrabold text-left cursor-pointer transition-colors flex flex-col gap-1.5 ${
                          smmVideoEditing
                            ? 'bg-purple-500/10 text-purple-600 border-purple-600 dark:text-purple-400 dark:border-purple-500/40'
                            : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/80'
                        }`}
                      >
                        <span className="text-2xs font-extrabold block">Bespoke Video Editing</span>
                        <span className="opacity-70 font-semibold block leading-normal">Color corrections, typography, sound designs.</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSmmCommunityManagement(!smmCommunityManagement)}
                        className={`p-3.5 rounded-xl border text-3xs font-extrabold text-left cursor-pointer transition-colors flex flex-col gap-1.5 ${
                          smmCommunityManagement
                            ? 'bg-purple-500/10 text-purple-600 border-purple-600 dark:text-purple-400 dark:border-purple-500/40'
                            : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/80'
                        }`}
                      >
                        <span className="text-2xs font-extrabold block">Community Monitoring</span>
                        <span className="opacity-70 font-semibold block leading-normal">Replying to feedback & lead inbox management.</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Live Estimator Sidebar */}
                <div className="lg:col-span-4 flex flex-col justify-between bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 text-left">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block mb-4">SMM Quote Summary</span>
                    <div className="flex flex-col gap-3 text-2xs font-semibold text-slate-500 mb-6">
                      <div className="flex justify-between border-b border-slate-200/40 dark:border-slate-800/40 pb-2">
                        <span>Active Channels:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{Object.values(smmPlatforms).filter(Boolean).length} Platforms</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/40 dark:border-slate-800/40 pb-2">
                        <span>Graphic Posts:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{smmPosts} / Month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Reels Videos:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{smmReels} / Month</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-900 mb-6 shadow-sm">
                    <span className="text-4xs text-slate-400 font-bold uppercase block mb-1">Estimated Retainer investment</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-display font-black text-slate-900 dark:text-white">${getSmmCost().toLocaleString()}</span>
                      <span className="text-3xs text-slate-400 font-bold">/ Month</span>
                    </div>
                    <p className="text-[9px] text-slate-400 mt-1.5 leading-normal">
                      Includes comprehensive visual layouts, trend-research audits, monthly analytics reporting logs, and strategic hashtag targeting.
                    </p>
                  </div>

                  <a 
                    href="#proposal-form"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-2xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
                  >
                    <span>Proceed to Proposal Generator</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* 4. AI Automation Calculator */}
            {activeTab === 'automation' && (
              <motion.div
                key="automation"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
              >
                {/* Inputs */}
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-2 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      <Zap className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-extrabold text-slate-800 dark:text-white text-base">AI Automation Calculator</h3>
                      <p className="text-3xs text-slate-400">Assemble API connectors, workflow triggers, and custom chatbot engines</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider block mb-3">Integrate Platforms & Flow Blocks</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {Object.keys(autoFeatures).map((feat) => (
                        <button
                          key={feat}
                          type="button"
                          onClick={() => setAutoFeatures({ ...autoFeatures, [feat]: !autoFeatures[feat] })}
                          className={`p-4 rounded-xl border text-left cursor-pointer transition-colors flex flex-col justify-between h-24 ${
                            autoFeatures[feat]
                              ? 'bg-blue-600/10 text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-500/40'
                              : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/80 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-1">
                            <span className="text-2xs font-extrabold block">{feat}</span>
                            {autoFeatures[feat] && <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                          </div>
                          <span className="text-4xs text-slate-400 block leading-tight font-semibold">
                            {feat === 'CRM' ? 'Sync web-leads instantly into CRM.' :
                             feat === 'WhatsApp' ? 'Automated WhatsApp text blasts.' :
                             feat === 'Email Automation' ? 'Structured follow-up loops.' :
                             feat === 'Lead Capture' ? 'Smart inbound capturing hooks.' :
                             feat === 'ChatGPT' || feat === 'Claude' || feat === 'Gemini' ? 'Context-trained custom AI model.' :
                             feat === 'n8n' || feat === 'Make' || feat === 'Zapier' ? 'Cloud webhook event triggers.' :
                             'Custom GoHighLevel setups.'}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outputs */}
                <div className="lg:col-span-4 flex flex-col justify-between bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 text-left">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block mb-4">Automation Setup Price</span>
                    <div className="flex flex-col gap-3 text-2xs font-semibold text-slate-500 mb-6">
                      <div className="flex justify-between border-b border-slate-200/40 dark:border-slate-800/40 pb-2">
                        <span>Systems Selected:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{Object.values(autoFeatures).filter(Boolean).length} Active</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Workflow Latency:</span>
                        <span className="text-slate-900 dark:text-white font-bold">Zero (Real-Time)</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-900 mb-6 shadow-sm">
                    <span className="text-4xs text-slate-400 font-bold uppercase block mb-1">Estimated Setup investment</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-display font-black text-slate-900 dark:text-white">${getAutomationCost().toLocaleString()}</span>
                      <span className="text-3xs text-slate-400 font-bold">USD</span>
                    </div>
                    <p className="text-[9px] text-slate-400 mt-1.5 leading-normal">
                      One-time integration fee. Includes webhook logic blueprints, REST auth tokens wiring, security sandbox testing, and 6-Months monitoring.
                    </p>
                  </div>

                  <a 
                    href="#proposal-form"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-2xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
                  >
                    <span>Proceed to Proposal Generator</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* 5. Branding Cost Calculator */}
            {activeTab === 'branding' && (
              <motion.div
                key="branding"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
              >
                {/* Inputs */}
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-2 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <Award className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-extrabold text-slate-800 dark:text-white text-base">Branding Identity Calculator</h3>
                      <p className="text-3xs text-slate-400">Map vector logos, style guidelines, typography rules, Canva templates, and presentation slides</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider block mb-3">Select Brand Assets Needed</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {Object.keys(brandFeatures).map((feat) => (
                        <button
                          key={feat}
                          type="button"
                          onClick={() => setBrandFeatures({ ...brandFeatures, [feat]: !brandFeatures[feat] })}
                          className={`p-4 rounded-xl border text-left cursor-pointer transition-colors flex flex-col justify-between h-24 ${
                            brandFeatures[feat]
                              ? 'bg-amber-500/10 text-amber-600 border-amber-600 dark:text-amber-400 dark:border-amber-500/40'
                              : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/80 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-1">
                            <span className="text-2xs font-extrabold block">{feat}</span>
                            {brandFeatures[feat] && <Check className="w-4 h-4 text-amber-600 dark:text-amber-400" />}
                          </div>
                          <span className="text-4xs text-slate-400 block leading-tight font-semibold">
                            {feat === 'Logo' ? 'Custom minimalist vector typography.' :
                             feat === 'Brand Identity' ? 'Colors, secondary assets systems.' :
                             feat === 'Social Templates' ? 'Reusable Canva grid kits.' :
                             feat === 'Presentation' ? 'Pro business slide master file.' :
                             feat === 'Business Card' ? 'Double-sided vector files.' :
                             feat === 'Canva Kit' ? 'Direct import branding setup.' :
                             'Visual stylebook documentation.'}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outputs */}
                <div className="lg:col-span-4 flex flex-col justify-between bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 text-left">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block mb-4">Branding Package Price</span>
                    <div className="flex flex-col gap-3 text-2xs font-semibold text-slate-500 mb-6">
                      <div className="flex justify-between border-b border-slate-200/40 dark:border-slate-800/40 pb-2">
                        <span>Items Selected:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{Object.values(brandFeatures).filter(Boolean).length} Active</span>
                      </div>
                      <div className="flex justify-between">
                        <span>File Delivery Formats:</span>
                        <span className="text-slate-900 dark:text-white font-bold">Figma + SVG + EPS</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-900 mb-6 shadow-sm">
                    <span className="text-4xs text-slate-400 font-bold uppercase block mb-1">Estimated Setup investment</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-display font-black text-slate-900 dark:text-white">${getBrandingCost().toLocaleString()}</span>
                      <span className="text-3xs text-slate-400 font-bold">USD</span>
                    </div>
                    <p className="text-[9px] text-slate-400 mt-1.5 leading-normal">
                      Includes 3 complete creative concept iterations, continuous typography research, high-resolution source print layouts, and scalable files.
                    </p>
                  </div>

                  <a 
                    href="#proposal-form"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-2xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
                  >
                    <span>Proceed to Proposal Generator</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* 6. Executive Assistant Calculator */}
            {activeTab === 'assistant' && (
              <motion.div
                key="assistant"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
              >
                {/* Inputs */}
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-2 rounded-xl bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400">
                      <Users className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-extrabold text-slate-800 dark:text-white text-base">Executive & Virtual Assistant Calculator</h3>
                      <p className="text-3xs text-slate-400">Track task hours, custom calendar, emails, CRM sync, and operational tasks</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider">Required Hours Per Month</label>
                      <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{eaHours} Hours / mo</span>
                    </div>
                    <input 
                      type="range"
                      min={5}
                      max={160}
                      step={5}
                      value={eaHours}
                      onChange={(e) => setEaHours(parseInt(e.target.value))}
                      className="w-full accent-orange-600 h-1.5 rounded-full cursor-pointer bg-slate-200 dark:bg-slate-800"
                    />
                    <div className="flex justify-between text-4xs text-slate-400 font-bold mt-1.5">
                      <span>5 Hours (Basic Support)</span>
                      <span>160 Hours (Full-Time Assistant)</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Select Delegated Operations</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {Object.keys(eaTasks).map((feat) => (
                        <button
                          key={feat}
                          type="button"
                          onClick={() => setEaTasks({ ...eaTasks, [feat]: !eaTasks[feat] })}
                          className={`px-3 py-2.5 rounded-xl border text-3xs font-extrabold text-left cursor-pointer transition-colors flex items-center justify-between ${
                            eaTasks[feat]
                              ? 'bg-orange-500/10 text-orange-600 border-orange-600 dark:text-orange-400 dark:border-orange-500/40'
                              : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/80'
                          }`}
                        >
                          <span>{feat === 'CRM' ? 'CRM Management' : feat === 'Calendar' ? 'Calendar Scheduling' : feat === 'Email' ? 'Email Triage' : feat}</span>
                          {eaTasks[feat] && <Check className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outputs */}
                <div className="lg:col-span-4 flex flex-col justify-between bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 text-left">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block mb-4">Support Package Price</span>
                    <div className="flex flex-col gap-3 text-2xs font-semibold text-slate-500 mb-6">
                      <div className="flex justify-between border-b border-slate-200/40 dark:border-slate-800/40 pb-2">
                        <span>Total Monthly Hours:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{eaHours} Hours</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/40 dark:border-slate-800/40 pb-2">
                        <span>Calculated Rate:</span>
                        <span className="text-slate-900 dark:text-white font-bold">${(getAssistantCost() / eaHours).toFixed(1)}/hr</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delegated Tasks:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{Object.values(eaTasks).filter(Boolean).length} Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-900 mb-6 shadow-sm">
                    <span className="text-4xs text-slate-400 font-bold uppercase block mb-1">Estimated Retainer investment</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-display font-black text-slate-900 dark:text-white">${getAssistantCost().toLocaleString()}</span>
                      <span className="text-3xs text-slate-400 font-bold">/ Month</span>
                    </div>
                    <p className="text-[9px] text-slate-400 mt-1.5 leading-normal">
                      Includes bi-weekly coordination calls, continuous task tracking boards in Notion, daily updates logs, and backup assistant coordination.
                    </p>
                  </div>

                  <a 
                    href="#proposal-form"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-2xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
                  >
                    <span>Proceed to Proposal Generator</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Section 2: Smart Proposal Generator (Form Inputs) */}
        <div 
          id="proposal-form" 
          className="bg-white/90 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 rounded-[32px] p-6 md:p-10 shadow-xl overflow-hidden relative"
        >
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="text-left mb-10 border-b border-slate-100 dark:border-slate-800 pb-6">
            <span className="text-3xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-2">Proposal Setup</span>
            <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white leading-tight">Smart Proposal Parameters</h3>
            <p className="text-xs text-slate-400 mt-1">Provide your contact coordinates and detailed specifications. Our logic engine compiles estimates, roadmaps, and tech-stacks instantly.</p>
          </div>

          <form onSubmit={triggerProposalGeneration} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Input fields panel */}
            <div className="lg:col-span-7 flex flex-col gap-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={proposalName}
                    onChange={(e) => setProposalName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 text-xs bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                  />
                </div>

                <div>
                  <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Company / Organization</label>
                  <input
                    type="text"
                    value={proposalCompany}
                    onChange={(e) => setProposalCompany(e.target.value)}
                    placeholder="e.g. Acme Ventures"
                    className="w-full px-4 py-2.5 text-xs bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={proposalEmail}
                    onChange={(e) => setProposalEmail(e.target.value)}
                    placeholder="e.g. john@acme.com"
                    className="w-full px-4 py-2.5 text-xs bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                  />
                </div>

                <div>
                  <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={proposalPhone}
                    onChange={(e) => setProposalPhone(e.target.value)}
                    placeholder="e.g. +1 (555) 019-2834"
                    className="w-full px-4 py-2.5 text-xs bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Country Location</label>
                  <input
                    type="text"
                    value={proposalCountry}
                    onChange={(e) => setProposalCountry(e.target.value)}
                    placeholder="e.g. United States"
                    className="w-full px-4 py-2.5 text-xs bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                  />
                </div>

                <div>
                  <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Intended Budget Scale</label>
                  <select
                    value={proposalBudget}
                    onChange={(e) => setProposalBudget(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                  >
                    <option>$120 - $500</option>
                    <option>$500 - $2,500</option>
                    <option>$2,500 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000+</option>
                  </select>
                </div>

                <div>
                  <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Target Timeline</label>
                  <select
                    value={proposalTimeline}
                    onChange={(e) => setProposalTimeline(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500 font-semibold"
                  >
                    <option>Urgent (1-2 weeks)</option>
                    <option>Standard (3-6 weeks)</option>
                    <option>Flexible / Retainer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-3xs font-extrabold text-slate-400 uppercase block mb-1">Project Goals & Feature Requirements *</label>
                <textarea
                  required
                  rows={4}
                  value={proposalRequirements}
                  onChange={(e) => setProposalRequirements(e.target.value)}
                  placeholder="We need a premium, blazing-fast web page with beautiful custom branding templates and n8n integrations to sync incoming customer form inputs automatically..."
                  className="w-full px-4 py-2.5 text-xs bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500 font-semibold leading-relaxed"
                />
              </div>
            </div>

            {/* Drag & Drop File Upload Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left gap-4">
              <div>
                <span className="text-3xs font-extrabold text-slate-400 uppercase block mb-2">Project Asset Files (Optional)</span>
                
                {/* Simulated Drag & Drop Container */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`p-6 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center transition-all duration-300 relative ${
                    isDragging
                      ? 'border-blue-500 bg-blue-500/5'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20'
                  }`}
                >
                  <Upload className="w-8 h-8 text-slate-400 mb-2.5 animate-bounce" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Drag & Drop files here</span>
                  <p className="text-[10px] text-slate-400 max-w-[200px] leading-normal block mb-3">Accepting PDF, DOCX, PPTX, ZIP, PNG, JPG up to 25MB.</p>
                  
                  <label className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs cursor-pointer shadow-sm transition-colors block">
                    <span>Select files manually</span>
                    <input 
                      type="file" 
                      multiple 
                      onChange={handleFileSelect} 
                      className="hidden" 
                    />
                  </label>
                </div>

                {/* Uploaded File List Showcase */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 flex flex-col gap-2 max-h-[140px] overflow-y-auto">
                    {uploadedFiles.map((file) => {
                      const FileIcon = getFileIcon(file.type);
                      return (
                        <div 
                          key={file.id} 
                          className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-between gap-3 text-left"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-blue-500">
                              <FileIcon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <span className="text-2xs font-extrabold text-slate-800 dark:text-slate-200 block truncate max-w-[150px]">{file.name}</span>
                              <span className="text-[9px] text-slate-400 block mt-0.5">{file.size}</span>
                            </div>
                          </div>

                          {file.status === 'uploading' ? (
                            <div className="flex items-center gap-2">
                              <div className="w-12 bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden shrink-0">
                                <div className="bg-blue-600 h-full rounded-full" style={{ width: `${file.progress}%` }} />
                              </div>
                              <span className="text-[9px] text-slate-400 font-bold shrink-0">{file.progress}%</span>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => removeFile(file.id)}
                              className="p-1 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 cursor-pointer transition-all"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={proposalLoading}
                className="w-full py-3.5 mt-2 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/25 disabled:opacity-60"
              >
                {proposalLoading ? <RefreshCw className="w-4.5 h-4.5 animate-spin" /> : <Brain className="w-4.5 h-4.5" />}
                {proposalLoading ? "Compiling pricing matrices..." : "Generate AI Technical Proposal"}
              </button>
            </div>

          </form>

        </div>

        {/* Section 3: Generated Proposal Output Board */}
        <div id="proposal-showcase" className="mt-12">
          <AnimatePresence>
            {generatedProposal && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white dark:bg-slate-950 rounded-[36px] border border-slate-200/70 dark:border-slate-800/80 shadow-2xl p-6 md:p-12 relative overflow-hidden"
              >
                
                {/* Decorative glow and lines */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />

                {/* Grid header details */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-6 mb-8 gap-6 text-left">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/10">
                      <FileCheck className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-black tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                          SMART GENERATED PROPOSAL
                        </span>
                        <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[9px] font-mono font-extrabold uppercase">
                          {generatedProposal.proposalId}
                        </span>
                      </div>
                      <h4 className="font-display font-extrabold text-xl md:text-2xl text-slate-900 dark:text-white mt-1 leading-tight">
                        Project Execution Blueprint
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">Compiled dynamically on {generatedProposal.date}</p>
                    </div>
                  </div>

                  <div className="flex flex-col text-left md:text-right">
                    <span className="text-3xs font-extrabold text-slate-400 uppercase tracking-widest block mb-1">Prepared For</span>
                    <span className="text-xs font-black text-slate-900 dark:text-white block">{generatedProposal.clientName}</span>
                    <span className="text-[10px] font-bold text-slate-400 block mt-0.5">{generatedProposal.clientCompany} ({generatedProposal.clientCountry})</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left relative z-10">
                  
                  {/* Left proposal content */}
                  <div className="lg:col-span-8 flex flex-col gap-8">
                    
                    {/* Key estimate price banner */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-900 rounded-2xl p-6">
                      <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-slate-200/50 dark:border-slate-800/50 pb-4 sm:pb-0">
                        <span className="text-3xs font-bold text-slate-400 uppercase tracking-wider block">Estimated Price</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-display font-black text-slate-900 dark:text-white">
                            ${(generatedProposal.basePrice + getAddonTotal()).toLocaleString()}
                          </span>
                          <span className="text-4xs text-slate-400 font-bold">USD</span>
                        </div>
                        <span className="text-4xs text-slate-400 block mt-0.5">Based on specified options</span>
                      </div>

                      <div className="flex flex-col gap-1 sm:pl-4 border-b sm:border-b-0 sm:border-r border-slate-200/50 dark:border-slate-800/50 pb-4 sm:pb-0">
                        <span className="text-3xs font-bold text-slate-400 uppercase tracking-wider block">Est. Timeline</span>
                        <span className="text-base font-black text-slate-800 dark:text-white mt-1 block">
                          {generatedProposal.timeline}
                        </span>
                        <span className="text-4xs text-slate-400 block">Milestone schedules</span>
                      </div>

                      <div className="flex flex-col gap-1 sm:pl-4">
                        <span className="text-3xs font-bold text-slate-400 uppercase tracking-wider block">Assurance Level</span>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="text-2xs font-extrabold text-slate-800 dark:text-white">Price Locked</span>
                        </div>
                        <span className="text-4xs text-slate-400 block mt-1">Guaranteed against scope shifts</span>
                      </div>
                    </div>

                    {/* Specifications and suggested stack */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <span className="text-3xs font-extrabold text-slate-400 uppercase tracking-widest block mb-3">Suggested Tech Stack</span>
                        <div className="flex flex-wrap gap-1.5">
                          {generatedProposal.techStack.map((tech: string, index: number) => (
                            <span 
                              key={index}
                              className="text-[10px] font-bold text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 px-2.5 py-1 rounded-lg font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-3xs font-extrabold text-slate-400 uppercase tracking-widest block mb-3">Recommended Services</span>
                        <ul className="flex flex-col gap-2">
                          {generatedProposal.recommendedServices.map((svc: string, index: number) => (
                            <li key={index} className="flex items-center gap-2 text-2xs text-slate-700 dark:text-slate-300 font-semibold">
                              <Check className="w-4 h-4 text-blue-500 shrink-0" />
                              <span>{svc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Staged Execution Roadmap */}
                    <div>
                      <span className="text-3xs font-extrabold text-slate-400 uppercase tracking-widest block mb-4">Project Execution Roadmap</span>
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
                        {generatedProposal.roadmap.map((step: string, index: number) => (
                          <div 
                            key={index}
                            className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/80 hover:border-blue-500/20 transition-all duration-300 flex flex-col gap-2 relative group"
                          >
                            <span className="text-[10px] font-mono font-black text-blue-600 dark:text-blue-400 block">
                              PHASE 0{index + 1}
                            </span>
                            <span className="text-3xs md:text-2xs font-extrabold text-slate-800 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Guarantees and standard inclusions */}
                    <div>
                      <span className="text-3xs font-extrabold text-slate-400 uppercase tracking-widest block mb-3">What's Included By Default</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {generatedProposal.inclusions.map((inc: string, index: number) => (
                          <div key={index} className="flex items-center gap-2 text-3xs md:text-2xs text-slate-600 dark:text-slate-400 font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right options, add-ons and Call-To-Actions (Actions Sidebar) */}
                  <div className="lg:col-span-4 flex flex-col gap-6">
                    
                    {/* Optional Add-ons section */}
                    {generatedProposal.addOns.length > 0 && (
                      <div className="p-6 bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-900 rounded-2xl">
                        <span className="text-3xs font-extrabold text-slate-400 uppercase tracking-widest block mb-3">Optional Add-ons</span>
                        <div className="flex flex-col gap-3">
                          {generatedProposal.addOns.map((addon: any) => (
                            <button
                              key={addon.id}
                              onClick={() => setSelectedAddons({ ...selectedAddons, [addon.id]: !selectedAddons[addon.id] })}
                              className={`p-3.5 rounded-xl border text-left cursor-pointer transition-colors flex items-start gap-2.5 ${
                                selectedAddons[addon.id]
                                  ? 'bg-blue-600/10 text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-500/40'
                                  : 'bg-white dark:bg-slate-950 border-slate-200/50 dark:border-slate-800/80 hover:bg-slate-50'
                              }`}
                            >
                              <div className="p-0.5 rounded mt-0.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shrink-0 flex items-center justify-center">
                                <div className={`w-2.5 h-2.5 rounded-sm transition-colors ${selectedAddons[addon.id] ? 'bg-blue-600 dark:bg-blue-400' : 'bg-transparent'}`} />
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center justify-between gap-1 w-full">
                                  <span className="text-3xs font-extrabold text-slate-800 dark:text-slate-200 block truncate">{addon.label}</span>
                                  <span className="text-[10px] font-black shrink-0">+${addon.price}</span>
                                </div>
                                <span className="text-[9px] text-slate-400 leading-snug block mt-0.5 font-semibold">{addon.desc}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Dynamic checkout total */}
                    <div className="p-4 bg-slate-100 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/80 rounded-xl">
                      <span className="text-4xs text-slate-400 font-bold uppercase block mb-1">TOTAL INVESTMENT</span>
                      <span className="text-3xl font-display font-black text-slate-900 dark:text-white block">
                        ${(generatedProposal.basePrice + getAddonTotal()).toLocaleString()}
                      </span>
                    </div>

                    {/* CTAs list */}
                    <div className="flex flex-col gap-2.5">
                      <a
                        href={getWhatsAppProposalLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-2xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md shadow-emerald-500/10 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat via WhatsApp</span>
                      </a>

                      <a
                        href="https://wa.me/919012403699"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-2xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 cursor-pointer"
                      >
                        <Clock className="w-4 h-4" />
                        <span>Book Discovery Call</span>
                      </a>

                      <button
                        onClick={downloadSimulatedProposal}
                        className="w-full py-3.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 font-extrabold text-2xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Proposal PDF</span>
                      </button>

                      <button
                        onClick={emailSimulatedProposal}
                        className="w-full py-3.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 font-extrabold text-2xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email Proposal Copy</span>
                      </button>
                    </div>

                  </div>

                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
