/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Heart, 
  FileText, 
  Sparkles, 
  DollarSign, 
  LifeBuoy, 
  Video, 
  ChevronRight, 
  Download, 
  BarChart2, 
  Users, 
  ShieldAlert,
  Star,
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { DashboardProject, TimelinePhase, Invoice, SupportTicket, Meeting } from '../../types/dashboard';

interface OverviewTabProps {
  project: DashboardProject;
  phases: TimelinePhase[];
  invoices: Invoice[];
  tickets: SupportTicket[];
  meetings: Meeting[];
  unreadMessagesCount: number;
  pendingApprovalsCount: number;
  onNavigateTab: (tabId: string) => void;
  onDownloadProposal: () => void;
  onDownloadContract: () => void;
  onGenerateReport: () => void;
}

export default function OverviewTab({
  project,
  phases,
  invoices,
  tickets,
  meetings,
  unreadMessagesCount,
  pendingApprovalsCount,
  onNavigateTab,
  onDownloadProposal,
  onDownloadContract,
  onGenerateReport
}: OverviewTabProps) {
  const [satisfactionRating, setSatisfactionRating] = useState<number>(project.satisfaction || 5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [surveySubmitted, setSurveySubmitted] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<string>('');

  // Calculate countdown to delivery date
  useEffect(() => {
    const calculateCountdown = () => {
      const delivery = new Date(project.deliveryDate === 'Aug 15, 2026' ? '2026-08-15T12:00:00' : '2026-09-20T12:00:00');
      const now = new Date();
      const diff = delivery.getTime() - now.getTime();
      
      if (diff <= 0) {
        setCountdown('Delivered');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 65)) / (1000 * 60));
      
      setCountdown(`${days}d ${hours}h ${minutes}m left`);
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 60000);
    return () => clearInterval(interval);
  }, [project.deliveryDate]);

  // Find next upcoming meeting
  const upcomingMeeting = meetings.find(m => m.type === 'upcoming');

  // Count active tasks
  const paidInvoicesCount = invoices.filter(i => i.status === 'paid').length;
  const pendingInvoicesCount = invoices.filter(i => i.status === 'pending').length;
  
  // Count resolved tickets
  const activeTickets = tickets.filter(t => t.status !== 'resolved');
  const resolvedTicketsCount = tickets.filter(t => t.status === 'resolved').length;

  return (
    <div className="space-y-8 text-left">
      
      {/* Dynamic Header Banner */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Main Banner Message */}
        <div className="md:col-span-8 p-6 md:p-8 rounded-3xl bg-linear-to-br from-blue-600/10 via-indigo-600/5 to-transparent border border-blue-500/10 dark:border-blue-500/20 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500" />
          
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                Dynamic Sync Enabled
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-4xs text-slate-400 font-bold">Health Score: {project.healthScore}%</span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
              Welcome back, {project.clientName}!
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
              Your custom portal with <b className="text-slate-700 dark:text-slate-300">Niaz Digital</b> is connected. Currently, we are driving hard on <span className="font-bold text-blue-600 dark:text-blue-400">{project.currentPhase}</span>. Project health score is nominal and milestones are on track.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 border-t border-slate-200/50 dark:border-slate-800/80 pt-5">
            <div>
              <span className="text-4xs text-slate-400 uppercase font-extrabold tracking-wider block">Remaining Days</span>
              <span className="text-base font-bold text-slate-800 dark:text-white mt-1 block font-mono">{project.remainingDays} Days</span>
            </div>
            <div>
              <span className="text-4xs text-slate-400 uppercase font-extrabold tracking-wider block">Est. Delivery</span>
              <span className="text-base font-bold text-slate-800 dark:text-white mt-1 block">{project.deliveryDate}</span>
            </div>
            <div>
              <span className="text-4xs text-slate-400 uppercase font-extrabold tracking-wider block">Completion</span>
              <span className="text-base font-bold text-blue-600 dark:text-blue-400 mt-1 block font-mono">{project.overallCompletion}%</span>
            </div>
            <div>
              <span className="text-4xs text-slate-400 uppercase font-extrabold tracking-wider block">Manager</span>
              <span className="text-base font-bold text-slate-800 dark:text-white mt-1 block truncate">{project.manager}</span>
            </div>
          </div>
        </div>

        {/* Live Progress Ring Widget */}
        <div className="md:col-span-4 p-6 rounded-3xl bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] flex flex-col justify-between items-center text-center relative shadow-xs">
          <span className="text-3xs font-extrabold uppercase tracking-wider text-slate-400">Completion Index</span>
          
          <div className="relative w-32 h-32 my-4 flex items-center justify-center">
            {/* Background circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="48"
                className="stroke-slate-100 dark:stroke-slate-800"
                strokeWidth="10"
                fill="transparent"
              />
              <motion.circle
                cx="64"
                cy="64"
                r="48"
                className="stroke-blue-600 dark:stroke-blue-500"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 48}
                initial={{ strokeDashoffset: 2 * Math.PI * 48 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 48 * (1 - project.overallCompletion / 100) }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">{project.overallCompletion}%</span>
              <span className="text-4xs font-bold text-slate-400 uppercase">Tracked Progress</span>
            </div>
          </div>

          <div className="w-full text-center">
            <span className="text-4xs font-bold text-slate-400 uppercase block">Countdown Target</span>
            <span className="text-xs font-mono font-bold text-emerald-500 mt-0.5 block">{countdown || 'Loading timer...'}</span>
          </div>
        </div>

      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Unread Messages Card */}
        <div 
          onClick={() => onNavigateTab('messages')}
          className="p-5 rounded-2xl bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] hover:border-blue-500/40 dark:hover:border-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-4 group"
        >
          <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="text-4xs font-extrabold uppercase text-slate-400 tracking-wider block">Direct Team Chat</span>
            <span className="text-base font-bold text-slate-800 dark:text-white mt-0.5 block flex items-center gap-1.5">
              Chat Thread {unreadMessagesCount > 0 && <span className="px-1.5 py-0.5 text-4xs bg-red-500 text-white font-bold rounded-full animate-bounce">{unreadMessagesCount} unread</span>}
            </span>
            <span className="text-5xs text-slate-400 block mt-0.5">Click to view discussions</span>
          </div>
        </div>

        {/* Pending Approvals Card */}
        <div 
          onClick={() => onNavigateTab('approvals')}
          className="p-5 rounded-2xl bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] hover:border-orange-500/40 dark:hover:border-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-4 group"
        >
          <div className="p-3 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-4xs font-extrabold uppercase text-slate-400 tracking-wider block">Pending Approvals</span>
            <span className="text-base font-bold text-slate-800 dark:text-white mt-0.5 block flex items-center gap-1.5">
              {pendingApprovalsCount} Items Pending {pendingApprovalsCount > 0 && <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />}
            </span>
            <span className="text-5xs text-slate-400 block mt-0.5">Approve mockups & deliverables</span>
          </div>
        </div>

        {/* Invoice Summary Card */}
        <div 
          onClick={() => onNavigateTab('invoices')}
          className="p-5 rounded-2xl bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-4 group"
        >
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <span className="text-4xs font-extrabold uppercase text-slate-400 tracking-wider block">Financial Status</span>
            <span className="text-base font-bold text-slate-800 dark:text-white mt-0.5 block">
              {pendingInvoicesCount} Pending / {paidInvoicesCount} Paid
            </span>
            <span className="text-5xs text-slate-400 block mt-0.5">Click to view Stripe invoices</span>
          </div>
        </div>

        {/* Support Ticket Status Card */}
        <div 
          onClick={() => onNavigateTab('support')}
          className="p-5 rounded-2xl bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] hover:border-purple-500/40 dark:hover:border-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-4 group"
        >
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
            <LifeBuoy className="w-5 h-5" />
          </div>
          <div>
            <span className="text-4xs font-extrabold uppercase text-slate-400 tracking-wider block">Operational Tickets</span>
            <span className="text-base font-bold text-slate-800 dark:text-white mt-0.5 block">
              {activeTickets.length} Active / {resolvedTicketsCount} Fixed
            </span>
            <span className="text-5xs text-slate-400 block mt-0.5">Raise help queries</span>
          </div>
        </div>

      </div>

      {/* Main Core Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Upcoming Meeting, Quick Downloads, Activities */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Upcoming Meeting Widget */}
          {upcomingMeeting ? (
            <div className="p-5 rounded-2xl bg-slate-50/50 dark:bg-[#161B22]/50 border border-slate-100 dark:border-[#1F2937] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 shrink-0 mt-0.5 animate-pulse">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-3xs uppercase font-extrabold tracking-wider text-blue-500 block">Upcoming Sync Meeting</span>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white mt-1">{upcomingMeeting.title}</h4>
                  <p className="text-3xs text-slate-400 mt-1 font-mono">
                    {upcomingMeeting.date} &bull; {upcomingMeeting.time} ({upcomingMeeting.platform === 'google-meet' ? 'Google Meet' : 'Zoom'})
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a 
                  href={upcomingMeeting.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
                >
                  Join Meeting <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button 
                  onClick={() => onNavigateTab('meetings')}
                  className="px-3.5 py-2 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-3xs font-extrabold text-slate-700 dark:text-slate-300 uppercase transition-all"
                >
                  Reschedule
                </button>
              </div>
            </div>
          ) : (
            <div className="p-5 rounded-2xl bg-slate-50/50 dark:bg-[#161B22]/50 border border-slate-100 dark:border-[#1F2937] flex items-center justify-between gap-4">
              <div>
                <span className="text-3xs uppercase font-extrabold tracking-wider text-slate-400">No Meetings Scheduled</span>
                <p className="text-3xs text-slate-500 mt-0.5">Need a review sync or technical support with Azhar Uddin?</p>
              </div>
              <button 
                onClick={() => onNavigateTab('meetings')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs uppercase tracking-wider rounded-lg transition"
              >
                Book Sync Session
              </button>
            </div>
          )}

          {/* Quick Files / Deliverables Compartment & Contract Actions */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
              <div>
                <h4 className="font-display font-black text-sm text-slate-800 dark:text-white">Workspace Actions</h4>
                <p className="text-3xs text-slate-400 mt-0.5">Pristine contract delivery packs available for direct local export.</p>
              </div>
              <Activity className="w-4 h-4 text-slate-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button 
                onClick={onDownloadProposal}
                className="p-4 rounded-xl border border-slate-100 dark:border-[#1F2937] bg-slate-50/30 hover:bg-slate-50 dark:bg-slate-900/30 dark:hover:bg-slate-900/60 hover:border-blue-500/30 transition-all flex flex-col justify-between items-start text-left cursor-pointer group"
              >
                <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg mb-4">
                  <FileText className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-2xs font-bold text-slate-800 dark:text-slate-200 block">Download Proposal</span>
                  <p className="text-4xs text-slate-400 mt-1">Export original design brief and specs</p>
                </div>
                <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 group-hover:translate-y-0.5 transition-all mt-4 self-end" />
              </button>

              <button 
                onClick={onDownloadContract}
                className="p-4 rounded-xl border border-slate-100 dark:border-[#1F2937] bg-slate-50/30 hover:bg-slate-50 dark:bg-slate-900/30 dark:hover:bg-slate-900/60 hover:border-emerald-500/30 transition-all flex flex-col justify-between items-start text-left cursor-pointer group"
              >
                <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg mb-4">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-2xs font-bold text-slate-800 dark:text-slate-200 block">Download Contract</span>
                  <p className="text-4xs text-slate-400 mt-1">Secure PDF service level agreement</p>
                </div>
                <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-y-0.5 transition-all mt-4 self-end" />
              </button>

              <button 
                onClick={onGenerateReport}
                className="p-4 rounded-xl border border-slate-100 dark:border-[#1F2937] bg-slate-50/30 hover:bg-slate-50 dark:bg-slate-900/30 dark:hover:bg-slate-900/60 hover:border-purple-500/30 transition-all flex flex-col justify-between items-start text-left cursor-pointer group"
              >
                <div className="p-2 bg-purple-500/10 text-purple-500 rounded-lg mb-4">
                  <BarChart2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-2xs font-bold text-slate-800 dark:text-slate-200 block">Generate Report</span>
                  <p className="text-4xs text-slate-400 mt-1">Compile real-time milestone matrix</p>
                </div>
                <Sparkles className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-500 group-hover:scale-110 transition-all mt-4 self-end" />
              </button>
            </div>
          </div>

          {/* Recent Activity Timeline Feed */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] text-left">
            <h4 className="font-display font-black text-sm text-slate-800 dark:text-white mb-4">Recent Workspace Activity</h4>
            <div className="relative pl-6 border-l border-slate-200 dark:border-[#1F2937] space-y-6">
              
              <div className="relative">
                <div className="absolute -left-[29px] top-0.5 p-1 rounded-full bg-emerald-500 text-white">
                  <CheckCircle2 className="w-3 h-3" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">Today</span>
                  <span className="text-2xs font-bold text-slate-800 dark:text-slate-200 block mt-0.5">High-Fidelity Figma design signed off & approved</span>
                  <p className="text-3xs text-slate-400 mt-1">Approved by {project.clientName} via digitized verification stamp.</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[29px] top-0.5 p-1 rounded-full bg-blue-500 text-white">
                  <Activity className="w-3 h-3" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">Yesterday</span>
                  <span className="text-2xs font-bold text-slate-800 dark:text-slate-200 block mt-0.5">Component Matrix setup inside front-end repository</span>
                  <p className="text-3xs text-slate-400 mt-1">Pushed by Azhar Uddin to preview staging sandbox.</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[29px] top-0.5 p-1 rounded-full bg-indigo-500 text-white">
                  <Star className="w-3 h-3" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">July 12, 2026</span>
                  <span className="text-2xs font-bold text-slate-800 dark:text-slate-200 block mt-0.5">System Assembly Build compiled successfully</span>
                  <p className="text-3xs text-slate-400 mt-1">Automated deployment and Lighthouse report compilation (Score index 98/100).</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[29px] top-0.5 p-1 rounded-full bg-purple-500 text-white">
                  <DollarSign className="w-3 h-3" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">July 05, 2026</span>
                  <span className="text-2xs font-bold text-slate-800 dark:text-slate-200 block mt-0.5">Invoice INV-2026-0199 Paid successfully</span>
                  <p className="text-3xs text-slate-400 mt-1">Payment processed automatically via secure Stripe webhook integrations.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Column: Active Team Roster & Client Satisfaction Widget */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Active Team Roster */}
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] text-left">
            <h4 className="font-display font-black text-xs text-slate-800 dark:text-white uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Assigned Team</span>
              <Users className="w-4 h-4 text-slate-400" />
            </h4>

            <div className="space-y-4">
              
              {/* Azhar Uddin Profile */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#161B22]/50 border border-slate-100/50 dark:border-[#1F2937] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs shrink-0 relative">
                  AU
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-[#0D1117] rounded-full" />
                </div>
                <div className="min-w-0">
                  <span className="text-2xs font-extrabold text-slate-800 dark:text-white block">Azhar Uddin</span>
                  <span className="text-4xs text-blue-500 font-bold uppercase tracking-wider block mt-0.5">Assigned Manager</span>
                  <span className="text-5xs text-slate-400 block truncate mt-0.5">azhar@niazdigital.com</span>
                </div>
              </div>

              {/* Niaz Digital Profile */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#161B22]/50 border border-slate-100/50 dark:border-[#1F2937] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-900 text-slate-200 flex items-center justify-center font-bold text-xs shrink-0">
                  ND
                </div>
                <div className="min-w-0">
                  <span className="text-2xs font-extrabold text-slate-800 dark:text-white block">Niaz Digital</span>
                  <span className="text-4xs text-purple-500 font-bold uppercase tracking-wider block mt-0.5">Core Agency Service</span>
                  <span className="text-5xs text-slate-400 block truncate mt-0.5">ops@niazdigital.com</span>
                </div>
              </div>

            </div>

            {/* Quick Contact buttons */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <a 
                href="mailto:azhar@niazdigital.com" 
                className="py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-center rounded-lg text-4xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 transition"
              >
                Email Azhar
              </a>
              <a 
                href="https://wa.me/919012403699" 
                target="_blank"
                rel="noreferrer"
                className="py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-center rounded-lg text-4xs font-black uppercase tracking-wider transition"
              >
                WhatsApp Direct
              </a>
            </div>
          </div>

          {/* Client Satisfaction Survey Widget */}
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] text-left">
            <h4 className="font-display font-black text-xs text-slate-800 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>Workspace Feedback</span>
            </h4>
            <p className="text-[10px] text-slate-400 leading-normal mb-4">
              Rate your experience with Niaz Digital dynamic milestone operations. Feedback is logged directly in our manager dashboards.
            </p>

            {surveySubmitted ? (
              <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-blue-500 mx-auto" />
                <span className="text-2xs font-extrabold text-slate-800 dark:text-white block">Feedback Registered!</span>
                <p className="text-4xs text-slate-400">Thank you, {project.clientName}. Your rating ({satisfactionRating}/5 stars) helps maintain high-fidelity deliveries.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-center items-center gap-2 py-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setSatisfactionRating(star)}
                      className="p-1 rounded-full transition-colors focus:outline-none"
                    >
                      <Star 
                        className={`w-7 h-7 cursor-pointer transition-all ${
                          star <= (hoverRating || satisfactionRating)
                            ? 'text-yellow-400 fill-yellow-400 scale-110'
                            : 'text-slate-300 dark:text-slate-800'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                
                <button
                  type="button"
                  onClick={() => setSurveySubmitted(true)}
                  className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-4xs uppercase tracking-widest rounded-lg transition-all"
                >
                  Submit Workspace Rating
                </button>
              </div>
            )}
          </div>

          {/* Quick Invoice Warning */}
          {pendingInvoicesCount > 0 && (
            <div className="p-4 rounded-2xl bg-orange-500/5 border border-orange-500/20 text-left flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-extrabold text-orange-500 tracking-wider block">Action Required</span>
                <p className="text-3xs text-slate-500 dark:text-slate-400 leading-normal mt-1">
                  You have <span className="font-bold text-slate-800 dark:text-slate-200">{pendingInvoicesCount} pending invoice(s)</span> due soon. Please finalize checkout details before next sprint milestones.
                </p>
                <button 
                  onClick={() => onNavigateTab('invoices')}
                  className="text-4xs font-bold text-orange-500 hover:underline mt-2 flex items-center gap-1 cursor-pointer"
                >
                  Go to Invoices <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
