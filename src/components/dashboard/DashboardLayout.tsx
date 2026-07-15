/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  Clock, 
  FileText, 
  CreditCard, 
  Video, 
  MessageSquare, 
  Signature, 
  BookOpen, 
  LifeBuoy, 
  Settings as SettingsIcon,
  Bell,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

// Tabs import
import OverviewTab from './OverviewTab';
import TimelineTab from './TimelineTab';
import TasksTab from './TasksTab';
import FilesTab from './FilesTab';
import InvoicesTab from './InvoicesTab';
import MeetingsTab from './MeetingsTab';
import MessagesTab from './MessagesTab';
import ApprovalsTab from './ApprovalsTab';
import KnowledgeBaseTab from './KnowledgeBaseTab';
import SupportTab from './SupportTab';
import SettingsTab from './SettingsTab';
import NotificationsTab from './NotificationsTab';

// Mock Data import
import { 
  initialProjects, 
  initialTimelinePhases, 
  initialTasks, 
  initialFiles, 
  initialInvoices, 
  initialMeetings, 
  initialMessages, 
  initialApprovals, 
  initialTickets, 
  initialNotifications 
} from '../../data/dashboardMockData';

import { 
  DashboardProject, 
  TimelinePhase, 
  DashboardTask, 
  DashboardFile, 
  Invoice, 
  Meeting, 
  Message, 
  ApprovalItem, 
  SupportTicket, 
  DashboardNotification 
} from '../../types/dashboard';

export default function DashboardLayout() {
  // Navigation tabs definition
  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Sparkles },
    { id: 'timeline', label: 'Project Timeline', icon: Clock },
    { id: 'tasks', label: 'Tasks Kanban', icon: Layers },
    { id: 'files', label: 'Files Cabinet', icon: FileText },
    { id: 'invoices', label: 'Invoices & Finance', icon: CreditCard },
    { id: 'meetings', label: 'Meetings Book', icon: Video },
    { id: 'messages', label: 'Messages Stream', icon: MessageSquare },
    { id: 'approvals', label: 'Approvals Gate', icon: Signature },
    { id: 'knowledge', label: 'Knowledge Base', icon: BookOpen },
    { id: 'support', label: 'Technical Support', icon: LifeBuoy },
    { id: 'settings', label: 'Settings & Roles', icon: SettingsIcon },
  ];

  // Global Sync States
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [role, setRole] = useState<'client' | 'admin'>('client');

  // Load initial projects state
  const [projects, setProjects] = useState<DashboardProject[]>(initialProjects);
  const [activeProjectId, setActiveProjectId] = useState<string>(initialProjects[0].id);

  // Derive current active project
  const currentProject = projects.find(p => p.id === activeProjectId) || projects[0];

  // Specific state structures
  const [phases, setPhases] = useState<TimelinePhase[]>(initialTimelinePhases);
  const [tasks, setTasks] = useState<DashboardTask[]>(initialTasks);
  const [files, setFiles] = useState<DashboardFile[]>(initialFiles);
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);
  const [meetings, setMeetings] = useState<Meeting[]>(initialMeetings);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [approvals, setApprovals] = useState<ApprovalItem[]>(initialApprovals);
  const [tickets, setTickets] = useState<SupportTicket[]>(initialTickets);
  const [notifications, setNotifications] = useState<DashboardNotification[]>(initialNotifications);

  // Unread badge helpers
  const unreadCount = notifications.filter(n => !n.read).length;

  // Sync Action Handlers
  const handleSignTimelinePhase = (phaseId: string, signatory: string) => {
    // 1. Sign phase
    setPhases(prev => prev.map(p => p.id === phaseId ? { ...p, status: 'completed', signedBy: signatory, signDate: 'Today' } : p));
    
    // 2. Append Notification
    const newNotif: DashboardNotification = {
      id: `notif-${Date.now()}`,
      text: `Timeline phase signed off: "${phases.find(p => p.id === phaseId)?.title}" by ${signatory}`,
      time: 'Just now',
      type: 'task',
      read: false
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const handleUpdateTaskStatus = (taskId: string, newStatus: DashboardTask['status']) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
  };

  const handleUploadFile = (file: Omit<DashboardFile, 'id'>) => {
    const newFile: DashboardFile = {
      ...file,
      id: `file-${Date.now()}`
    };
    setFiles(prev => [newFile, ...prev]);

    // Notification
    const newNotif: DashboardNotification = {
      id: `notif-${Date.now()}`,
      text: `New file deliverable added: "${file.name}"`,
      time: 'Just now',
      type: 'file',
      read: false
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const handleDeleteFile = (fileId: string) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const handlePayInvoice = (invoiceId: string) => {
    setInvoices(prev => prev.map(i => i.id === invoiceId ? { ...i, status: 'paid' } : i));

    // Notification
    const newNotif: DashboardNotification = {
      id: `notif-${Date.now()}`,
      text: `Invoice ${invoiceId} settled via Stripe!`,
      time: 'Just now',
      type: 'invoice',
      read: false
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const handleBookMeeting = (meeting: Omit<Meeting, 'id'>) => {
    const newMeeting: Meeting = {
      ...meeting,
      id: `meet-${Date.now()}`
    };
    setMeetings(prev => [newMeeting, ...prev]);

    // Notification
    const newNotif: DashboardNotification = {
      id: `notif-${Date.now()}`,
      text: `Sync call booked for July ${meeting.date.split(' ')[1]}: "${meeting.title}"`,
      time: 'Just now',
      type: 'meeting',
      read: false
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const handleSendMessage = (text: string, sender: Message['sender']) => {
    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      sender,
      senderName: sender === 'client' ? currentProject.clientName : 'Azhar Uddin',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMsg]);
  };

  const handleApproveItem = (id: string, signedBy: string) => {
    setApprovals(prev => prev.map(a => a.id === id ? { ...a, status: 'approved', signedBy, timestamp: 'Today ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) } : a));

    // Notification
    const newNotif: DashboardNotification = {
      id: `notif-${Date.now()}`,
      text: `Gate Sign-off finalized: "${approvals.find(a => a.id === id)?.title}"`,
      time: 'Just now',
      type: 'task',
      read: false
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const handleRaiseTicket = (ticket: Omit<SupportTicket, 'id'>) => {
    const newTicket: SupportTicket = {
      ...ticket,
      id: `TCK-${Math.floor(1000 + Math.random() * 9000)}`
    };
    setTickets(prev => [newTicket, ...prev]);
  };

  const handlePostReply = (ticketId: string, text: string) => {
    const newReply = {
      id: `rep-${Date.now()}`,
      author: 'John Doe',
      text,
      date: 'Today'
    };
    setTickets(prev => prev.map(t => t.id === ticketId ? { ...t, replies: [...t.replies, newReply] } : t));
  };

  const handleUpdateClientInfo = (info: Partial<DashboardProject>) => {
    setProjects(prev => prev.map(p => p.id === activeProjectId ? { ...p, ...info } : p));
  };

  const handleTweakCompletion = (val: number) => {
    setProjects(prev => prev.map(p => p.id === activeProjectId ? { ...p, overallCompletion: val } : p));
  };

  // Notification tab helpers
  const handleMarkAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  // Render tab component dynamically
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <OverviewTab 
            project={currentProject} 
            phases={phases}
            invoices={invoices}
            tickets={tickets}
            meetings={meetings}
            unreadMessagesCount={3}
            pendingApprovalsCount={approvals.filter(a => a.status !== 'approved').length}
            onNavigateTab={(tabId) => setActiveTab(tabId)}
            onDownloadProposal={() => alert('Simulating PDF download: Niaz Proposal Statement')}
            onDownloadContract={() => alert('Simulating PDF download: Signed Contract Agreement')}
            onGenerateReport={() => alert('Compiling overall milestone progress and Lighthouse analytics report...')}
          />
        );
      case 'timeline':
        return (
          <TimelineTab 
            phases={phases} 
            onApprovePhase={handleSignTimelinePhase}
            onAddComment={(phaseId, text) => {
              setPhases(prev => prev.map(p => {
                if (p.id === phaseId) {
                  return {
                    ...p,
                    comments: [
                      ...p.comments,
                      { id: `comm-${Date.now()}`, author: 'John Doe', text, date: 'Today' }
                    ]
                  };
                }
                return p;
              }));
            }}
          />
        );
      case 'tasks':
        return (
          <TasksTab 
            tasks={tasks} 
            onMoveTask={handleUpdateTaskStatus}
            onAddTask={(task) => {
              const newTaskItem = {
                ...task,
                id: `TSK-${Date.now()}`
              };
              setTasks(prev => [...prev, newTaskItem]);
            }}
          />
        );
      case 'files':
        return (
          <FilesTab 
            files={files} 
            onUploadFile={handleUploadFile}
            onDeleteFile={handleDeleteFile}
          />
        );
      case 'invoices':
        return (
          <InvoicesTab 
            invoices={invoices} 
            onPayInvoice={handlePayInvoice}
          />
        );
      case 'meetings':
        return (
          <MeetingsTab 
            meetings={meetings} 
            onBookMeeting={handleBookMeeting}
          />
        );
      case 'messages':
        return (
          <MessagesTab 
            messages={messages} 
            onSendMessage={handleSendMessage}
          />
        );
      case 'approvals':
        return (
          <ApprovalsTab 
            approvals={approvals} 
            onApproveItem={handleApproveItem}
          />
        );
      case 'knowledge':
        return <KnowledgeBaseTab />;
      case 'support':
        return (
          <SupportTab 
            tickets={tickets} 
            onRaiseTicket={handleRaiseTicket}
            onPostReply={handlePostReply}
          />
        );
      case 'settings':
        return (
          <SettingsTab 
            project={currentProject}
            projects={projects}
            activeProjectId={activeProjectId}
            onSwitchProject={setActiveProjectId}
            role={role}
            onChangeRole={setRole}
            onUpdateClientInfo={handleUpdateClientInfo}
            onTweakCompletion={handleTweakCompletion}
          />
        );
      case 'notifications':
        return (
          <NotificationsTab 
            notifications={notifications}
            onMarkAsRead={handleMarkAsRead}
            onMarkAllAsRead={handleMarkAllAsRead}
            onClearNotifications={handleClearNotifications}
          />
        );
      default:
        return <div className="text-center py-12">Tab under development.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col lg:flex-row relative transition-colors">
      
      {/* Mobile Drawer Navigation Hamburger bar */}
      <div className="lg:hidden p-4 bg-white dark:bg-[#0D1117] border-b border-slate-200/50 dark:border-slate-800 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
          <span className="font-display font-black text-xs text-slate-850 dark:text-white uppercase tracking-widest">NIAZ PLATFORM</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('notifications')}
            className="p-1.5 rounded-lg relative text-slate-500 hover:text-slate-850 dark:hover:text-white"
          >
            <Bell className="w-4.5 h-4.5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
            )}
          </button>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 text-slate-500 hover:text-slate-850"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Left Sidebar Navigation */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 bottom-0 z-40 w-64 border-r border-slate-200/50 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] transform lg:transform-none transition-transform duration-300 flex flex-col justify-between ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          {/* Logo brand */}
          <div className="p-6 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between bg-slate-50/20 dark:bg-slate-900/10">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
              <div>
                <span className="font-display font-black text-xs text-slate-900 dark:text-white uppercase tracking-widest block">NIAZ CLIENTS</span>
                <span className="text-[9px] font-mono font-bold text-blue-500 block">DASHBOARD INTEGRATED</span>
              </div>
            </div>
            
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded hover:bg-slate-100"
            >
              <X className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Navigation Items List */}
          <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)]">
            {sidebarItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-left transition-all cursor-pointer relative group ${
                    isActive
                      ? 'bg-blue-600 text-white font-extrabold shadow-sm'
                      : 'text-slate-650 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-950/40 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-105'}`} />
                  <span className="flex-grow truncate">{item.label}</span>
                  
                  {/* Subtle active indicator tag */}
                  {isActive && (
                    <motion.span 
                      layoutId="active-nav-dot" 
                      className="w-1.5 h-1.5 bg-white rounded-full shrink-0"
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Support Roster at Sidebar Bottom */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-950/25">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 relative">
              AU
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-[#0D1117] rounded-full animate-pulse" />
            </div>
            <div className="overflow-hidden text-left">
              <span className="text-[10px] font-black text-slate-850 dark:text-white block truncate">Azhar Uddin</span>
              <span className="text-5xs text-slate-400 block uppercase tracking-wider mt-0.5">Assigned Manager</span>
            </div>
          </div>
        </div>

      </aside>

      {/* Main Container Area */}
      <main className="flex-grow flex flex-col min-w-0">
        
        {/* Main Content Header Bar (Desktop/Global Breadcrumbs) */}
        <header className="hidden lg:flex items-center justify-between px-8 py-5 bg-white dark:bg-[#0D1117] border-b border-slate-200/50 dark:border-[#1F2937] sticky top-0 z-30 transition-colors">
          <div className="flex items-center gap-2.5 text-xs text-slate-400 font-bold">
            <span className="text-slate-800 dark:text-white">Workspace</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 dark:text-white uppercase font-black">{currentProject.company}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-mono text-[10px] text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-md font-black select-none">
              {currentProject.projectId}
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* Quick alert notifications bell */}
            <button
              onClick={() => setActiveTab('notifications')}
              className="p-1.5 rounded-lg relative text-slate-500 hover:text-slate-850 dark:hover:text-white cursor-pointer"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 px-1.5 py-0.5 bg-red-500 text-white text-[8px] font-black rounded-full animate-bounce">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Account dropdown indicator widget */}
            <div className="flex items-center gap-2.5 pl-4 border-l border-slate-100 dark:border-slate-800 text-left">
              <div className="w-8.5 h-8.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center font-bold text-xs text-slate-750 dark:text-white">
                JD
              </div>
              <div>
                <span className="text-2xs font-extrabold text-slate-850 dark:text-white block">{currentProject.clientName}</span>
                <span className="text-5xs text-slate-400 uppercase tracking-widest block font-mono">CLIENT PORTAL ACCESS</span>
              </div>
            </div>
          </div>
        </header>

        {/* Floating warning if role === 'admin' is displayed */}
        {role === 'admin' && (
          <div className="bg-purple-600 text-white px-8 py-2 flex items-center justify-between text-5xs uppercase tracking-widest font-black font-mono">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 animate-ping" />
              <span>SYSTEM ADMIN OVERRIDE SESSION RUNNING &bull; ALL STATE CHECKS BYPASS ENCRYPTION</span>
            </div>
            <button onClick={() => setRole('client')} className="hover:underline flex items-center gap-1">
              EXIT ADMIN <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Dynamic Tab Workspace viewport wrapper */}
        <div className="p-6 md:p-8 flex-grow max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + activeProjectId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {renderActiveTab()}
            </motion.div>
          </AnimatePresence>
        </div>

      </main>

    </div>
  );
}
