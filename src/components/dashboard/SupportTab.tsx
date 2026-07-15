/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LifeBuoy, 
  Plus, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  CornerDownRight, 
  Send, 
  User, 
  X,
  Camera
} from 'lucide-react';
import { SupportTicket } from '../../types/dashboard';

interface SupportTabProps {
  tickets: SupportTicket[];
  onRaiseTicket: (ticket: Omit<SupportTicket, 'id'>) => void;
  onPostReply: (ticketId: string, text: string) => void;
}

export default function SupportTab({
  tickets,
  onRaiseTicket,
  onPostReply
}: SupportTabProps) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [ticketTitle, setTicketTitle] = useState<string>('');
  const [ticketPriority, setTicketPriority] = useState<SupportTicket['priority']>('medium');
  const [ticketMessage, setTicketMessage] = useState<string>('');
  const [screenshotAttached, setScreenshotAttached] = useState<boolean>(false);
  const [expandedTicketId, setExpandedTicketId] = useState<string | null>("TCK-4819");
  const [replyInputs, setReplyInputs] = useState<Record<string, string>>({});

  const handleRaiseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketTitle.trim() || !ticketMessage.trim()) return;

    onRaiseTicket({
      title: ticketTitle,
      priority: ticketPriority,
      status: 'open',
      replies: [
        { id: 'rep-init', author: 'John Doe', text: ticketMessage, date: 'Today' }
      ],
      screenshot: screenshotAttached ? 'custom_screenshot.png' : undefined
    });

    setTicketTitle('');
    setTicketMessage('');
    setScreenshotAttached(false);
    setShowForm(false);
  };

  const handleReplySubmit = (ticketId: string, e: React.FormEvent) => {
    e.preventDefault();
    const text = replyInputs[ticketId] || '';
    if (!text.trim()) return;

    onPostReply(ticketId, text);
    setReplyInputs(prev => ({ ...prev, [ticketId]: '' }));

    // Simulate Azhar replying back in the thread after 1.5 seconds!
    setTimeout(() => {
      onPostReply(ticketId, "Understood. Our developers are actively debugging this thread in our local workspaces. We will keep you updated as soon as a hotfix lands.");
    }, 1800);
  };

  const getPriorityBadge = (p: SupportTicket['priority']) => {
    switch (p) {
      case 'high':
        return <span className="px-2 py-0.5 rounded text-[8px] font-extrabold bg-red-500/10 text-red-500 border border-red-500/20 uppercase">HIGH</span>;
      case 'medium':
        return <span className="px-2 py-0.5 rounded text-[8px] font-extrabold bg-blue-500/10 text-blue-500 border border-blue-500/20 uppercase">MEDIUM</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[8px] font-extrabold bg-slate-500/10 text-slate-500 border border-slate-500/20 uppercase">LOW</span>;
    }
  };

  const getStatusBadge = (s: SupportTicket['status']) => {
    switch (s) {
      case 'resolved':
        return (
          <span className="px-2.5 py-1 rounded-full text-4xs font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/25 flex items-center gap-1 shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" /> Resolved
          </span>
        );
      case 'in_progress':
        return (
          <span className="px-2.5 py-1 rounded-full text-4xs font-black uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/25 flex items-center gap-1 shrink-0 animate-pulse">
            <Clock className="w-3.5 h-3.5" /> Progressing
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 rounded-full text-4xs font-black uppercase tracking-wider bg-slate-150 text-slate-500 border border-slate-300 flex items-center gap-1 shrink-0">
            <AlertTriangle className="w-3.5 h-3.5" /> Dispatched
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-2">Technical Support Desk</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Encountered an issue, bug or horizontals overflow shift? Lodge a support ticket directly with Azhar Uddin and the development leads.</p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center gap-1.5 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Raise Support Ticket</span>
        </button>
      </div>

      {/* Ticket Creation Form */}
      {showForm && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4"
        >
          <h4 className="text-xs font-bold text-slate-850 dark:text-white">Describe Issue Specifications</h4>
          <form onSubmit={handleRaiseSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="text-[9px] font-extrabold text-slate-400 block mb-1">Issue Overview *</label>
                <input 
                  type="text"
                  required
                  value={ticketTitle}
                  onChange={(e) => setTicketTitle(e.target.value)}
                  placeholder="e.g. Horizontal horizontal overflow scrolling visible on Safari..."
                  className="w-full px-4 py-2 text-xs bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label className="text-[9px] font-extrabold text-slate-400 block mb-1">Severity / Priority</label>
                <select
                  value={ticketPriority}
                  onChange={(e) => setTicketPriority(e.target.value as SupportTicket['priority'])}
                  className="w-full px-4 py-2 text-xs bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-800 dark:text-white"
                >
                  <option value="low">Low Severity</option>
                  <option value="medium">Medium Severity</option>
                  <option value="high">High Severity</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[9px] font-extrabold text-slate-400 block mb-1">Detailed Explanation & Steps to Reproduce *</label>
              <textarea
                required
                rows={4}
                value={ticketMessage}
                onChange={(e) => setTicketMessage(e.target.value)}
                placeholder="Please describe what happens, steps to reproduce, and specify device browser details..."
                className="w-full px-4 py-2.5 text-xs bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-800 dark:text-white"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <button 
                type="button"
                onClick={() => setScreenshotAttached(!screenshotAttached)}
                className={`px-3 py-2 border rounded-xl text-3xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 transition ${
                  screenshotAttached
                    ? 'bg-blue-500/10 border-blue-500 text-blue-600'
                    : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100'
                }`}
              >
                <Camera className="w-4 h-4" />
                <span>{screenshotAttached ? 'Screenshot_attached.png' : 'Attach Mock Screenshot'}</span>
              </button>

              <button 
                type="submit"
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs uppercase tracking-wider rounded-xl cursor-pointer"
              >
                Lodge Active Ticket
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Tickets List Accordions */}
      <div className="space-y-4">
        {tickets.length > 0 ? (
          tickets.map((t) => {
            const isExpanded = expandedTicketId === t.id;
            return (
              <div 
                key={t.id} 
                className="bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] rounded-2xl overflow-hidden hover:border-blue-500/25 transition-all"
              >
                {/* Header row Clickable */}
                <div 
                  onClick={() => setExpandedTicketId(isExpanded ? null : t.id)}
                  className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none bg-slate-50/20 dark:bg-slate-900/5"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {getPriorityBadge(t.priority)}
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono">TICKET ID: {t.id}</span>
                      <h4 className="font-display font-bold text-xs text-slate-850 dark:text-white mt-0.5 leading-snug">
                        {t.title}
                      </h4>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-4">
                    {getStatusBadge(t.status)}
                    <span className="p-1 rounded text-slate-400 hover:bg-slate-100">
                      {isExpanded ? <X className="w-4 h-4" /> : <CornerDownRight className="w-4 h-4" />}
                    </span>
                  </div>
                </div>

                {/* Expanded Details / Comments Thread */}
                {isExpanded && (
                  <div className="p-5 border-t border-slate-100 dark:border-slate-800/80 space-y-5 bg-slate-50/5 dark:bg-slate-950/20">
                    
                    {/* Screenshot attached block */}
                    {t.screenshot && (
                      <div className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl inline-flex items-center gap-2 text-3xs font-semibold text-slate-600 dark:text-slate-350">
                        <Camera className="w-4 h-4 text-blue-500" />
                        <span>Attached Screenshot: {t.screenshot}</span>
                        <button onClick={() => alert('Opening Screenshot preview')} className="text-blue-500 hover:underline font-bold ml-2">Preview</button>
                      </div>
                    )}

                    {/* Replies list */}
                    <div className="space-y-4">
                      <span className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider block">Replies Thread</span>
                      <div className="relative pl-4 border-l border-slate-200 dark:border-slate-800 space-y-4">
                        {t.replies.map((rep) => {
                          const isMe = rep.author === 'John Doe';
                          return (
                            <div key={rep.id} className="text-3xs text-left space-y-1">
                              <div className="flex items-center gap-1.5 text-slate-400 font-bold">
                                <User className={`w-3 h-3 ${isMe ? 'text-blue-500' : 'text-purple-500'}`} />
                                <span className={isMe ? 'text-slate-650' : 'text-purple-500'}>{rep.author}</span>
                                <span className="font-mono text-[9px] font-normal">&bull; {rep.date}</span>
                              </div>
                              <p className="text-slate-750 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-[#161B22] p-3 rounded-xl inline-block max-w-xl">
                                {rep.text}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Post Reply input Form */}
                    {t.status !== 'resolved' && (
                      <form onSubmit={(e) => handleReplySubmit(t.id, e)} className="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                        <CornerDownRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <input 
                          type="text"
                          required
                          value={replyInputs[t.id] || ''}
                          onChange={(e) => setReplyInputs(prev => ({ ...prev, [t.id]: e.target.value }))}
                          placeholder="Lodge reply or diagnostic output details..."
                          className="flex-grow px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-xl text-3xs font-semibold focus:outline-none focus:border-blue-500 text-slate-850 dark:text-white"
                        />
                        <button 
                          type="submit"
                          className="p-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </form>
                    )}

                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="py-12 border border-dashed border-slate-150 dark:border-slate-850 rounded-2xl text-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">No active tickets registered</span>
          </div>
        )}
      </div>

    </div>
  );
}
