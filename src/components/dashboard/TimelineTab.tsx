/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  MessageSquare, 
  CornerDownRight, 
  Send,
  User,
  Signature
} from 'lucide-react';
import { TimelinePhase } from '../../types/dashboard';

interface TimelineTabProps {
  phases: TimelinePhase[];
  onApprovePhase: (phaseId: string, signedName: string) => void;
  onAddComment: (phaseId: string, text: string) => void;
}

export default function TimelineTab({
  phases,
  onApprovePhase,
  onAddComment
}: TimelineTabProps) {
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({
    "ph-3": true // Default expand the active one
  });
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});
  const [signingPhaseId, setSigningPhaseId] = useState<string | null>(null);
  const [signatureName, setSignatureName] = useState<string>('');

  const toggleExpand = (id: string) => {
    setExpandedPhases(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubmitComment = (phaseId: string, e: React.FormEvent) => {
    e.preventDefault();
    const text = commentInputs[phaseId] || '';
    if (!text.trim()) return;
    onAddComment(phaseId, text);
    setCommentInputs(prev => ({ ...prev, [phaseId]: '' }));
  };

  const handleSignOffSubmit = (phaseId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!signatureName.trim()) return;
    onApprovePhase(phaseId, signatureName);
    setSignatureName('');
    setSigningPhaseId(null);
  };

  return (
    <div className="space-y-6 text-left">
      <div>
        <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-2">Interactive Project Timeline</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Expand each development phase to audit specific deliverables, verify comments, check shared codes, and sign off completed tasks.</p>
      </div>

      <div className="relative pl-4 border-l-2 border-slate-100 dark:border-slate-800 space-y-6">
        
        {phases.map((phase, idx) => {
          const isExpanded = !!expandedPhases[phase.id];
          const isActive = phase.status === 'active';
          const isCompleted = phase.status === 'completed';

          return (
            <div 
              key={phase.id} 
              className={`relative p-5 rounded-2xl border transition-all ${
                isCompleted 
                  ? 'bg-slate-50/20 dark:bg-slate-900/10 border-slate-100 dark:border-slate-850' 
                  : isActive
                  ? 'bg-linear-to-r from-blue-500/5 to-transparent border-blue-500/20 shadow-xs'
                  : 'bg-white dark:bg-[#0D1117] border-slate-100 dark:border-[#1F2937] opacity-80'
              }`}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute -left-[27px] top-6 w-3 h-3 rounded-full border-2 ${
                  isCompleted 
                    ? 'bg-emerald-500 border-emerald-500' 
                    : isActive
                    ? 'bg-blue-600 border-blue-600 animate-ping'
                    : 'bg-slate-200 dark:bg-slate-800 border-slate-200 dark:border-slate-800'
                }`} 
              />
              {/* Duplicate stationary ring for active dot so ping doesn't look weird */}
              {isActive && (
                <div className="absolute -left-[27px] top-6 w-3 h-3 rounded-full bg-blue-600 border-2 border-blue-600" />
              )}

              {/* Header section clickable to expand */}
              <div 
                onClick={() => toggleExpand(phase.id)}
                className="flex items-start justify-between gap-4 cursor-pointer select-none"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] uppercase font-bold text-slate-400">Step {idx + 1}</span>
                    {isCompleted && (
                      <span className="text-[8px] font-extrabold uppercase text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        COMPLETED
                      </span>
                    )}
                    {isActive && (
                      <span className="text-[8px] font-extrabold uppercase text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded animate-pulse">
                        ACTIVE PHASE
                      </span>
                    )}
                    {phase.status === 'pending' && (
                      <span className="text-[8px] font-extrabold uppercase text-slate-400 bg-slate-100 dark:bg-slate-850 px-1.5 py-0.5 rounded">
                        SCHEDULED
                      </span>
                    )}
                  </div>
                  <h4 className="font-display font-black text-sm text-slate-850 dark:text-white leading-tight">
                    {phase.title}
                  </h4>
                  <p className="text-3xs text-slate-400 font-mono">
                    {isCompleted ? `Signed off: ${phase.completedDate}` : `Est. Completion: ${phase.estimatedDate}`}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="flex items-center gap-2.5">
                    <div className="w-20 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full ${isCompleted ? 'bg-emerald-500' : 'bg-blue-600'}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${phase.completion}%` }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                    <span className="font-mono text-3xs font-extrabold text-slate-400">{phase.completion}%</span>
                  </div>
                  <button type="button" className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Expandable Details Panel */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-5"
                  >
                    {/* Description */}
                    <div>
                      <span className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">Phase Summary</span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">{phase.description}</p>
                    </div>

                    {/* Deliverables Checklist */}
                    <div>
                      <span className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">Key Deliverables checklist</span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        {phase.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-3xs text-slate-650 dark:text-slate-300">
                            <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-500' : 'text-blue-500'}`} />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Phase Files */}
                    {phase.files && phase.files.length > 0 && (
                      <div>
                        <span className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider block mb-2">Phase Assets & Blueprints</span>
                        <div className="flex flex-wrap gap-2">
                          {phase.files.map((fl, fIdx) => (
                            <div 
                              key={fIdx} 
                              className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 flex items-center gap-1.5 text-3xs font-semibold text-slate-700 dark:text-slate-300 hover:border-blue-500/20 transition-all cursor-pointer"
                              onClick={() => alert(`Downloading phase file: ${fl}`)}
                            >
                              <FileText className="w-3.5 h-3.5 text-blue-500" />
                              <span>{fl}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Sign-off Approvals System */}
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-0.5 text-left">
                        <span className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">Verification Sign-off</span>
                        {isCompleted ? (
                          <div className="flex items-center gap-2 mt-1">
                            <Signature className="w-4 h-4 text-emerald-500" />
                            <p className="text-3xs text-slate-600 dark:text-slate-300">
                              Electronically signed by <b className="text-slate-800 dark:text-white font-black">{phase.completedBy}</b> on {phase.completedDate}
                            </p>
                          </div>
                        ) : (
                          <p className="text-3xs text-slate-500 mt-1 leading-normal">
                            Are you satisfied with the deliverables of this phase? Stamp your digital sign-off to freeze parameters and green-light next sprint.
                          </p>
                        )}
                      </div>

                      {!isCompleted && (
                        <div className="shrink-0">
                          {signingPhaseId === phase.id ? (
                            <form onSubmit={(e) => handleSignOffSubmit(phase.id, e)} className="flex items-center gap-2">
                              <input 
                                type="text"
                                required
                                value={signatureName}
                                onChange={(e) => setSignatureName(e.target.value)}
                                placeholder="Your Full Name"
                                className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-3xs font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
                              />
                              <button 
                                type="submit"
                                className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-3xs uppercase tracking-wider rounded-lg shadow-sm"
                              >
                                Sign Stamp
                              </button>
                            </form>
                          ) : (
                            <button 
                              onClick={() => setSigningPhaseId(phase.id)}
                              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-1"
                            >
                              <Signature className="w-3.5 h-3.5" />
                              Approve & Sign Off
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Comments Thread inside this Phase */}
                    <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                      <span className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider block">Phase Discussions</span>
                      
                      {/* Replies */}
                      <div className="space-y-3 pl-3 border-l border-slate-200 dark:border-slate-800">
                        {phase.comments && phase.comments.length > 0 ? (
                          phase.comments.map((comment) => (
                            <div key={comment.id} className="text-3xs space-y-1">
                              <div className="flex items-center gap-1.5 text-slate-400 font-bold">
                                <User className="w-3 h-3 text-blue-500" />
                                <span>{comment.author}</span>
                                <span className="font-mono text-[9px] font-normal">&bull; {comment.date}</span>
                              </div>
                              <p className="text-slate-700 dark:text-slate-350 leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg inline-block">{comment.text}</p>
                            </div>
                          ))
                        ) : (
                          <span className="text-4xs font-bold text-slate-400 uppercase tracking-widest block py-2">No conversations flagged on this phase</span>
                        )}
                      </div>

                      {/* Comment Input form */}
                      <form onSubmit={(e) => handleSubmitComment(phase.id, e)} className="flex gap-2 items-center mt-3">
                        <CornerDownRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <input 
                          type="text"
                          value={commentInputs[phase.id] || ''}
                          onChange={(e) => setCommentInputs(prev => ({ ...prev, [phase.id]: e.target.value }))}
                          placeholder="Post review, request amendments or flag issue..."
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-xl text-3xs font-semibold focus:outline-none focus:border-blue-500 text-slate-800 dark:text-white"
                        />
                        <button 
                          type="submit"
                          className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition"
                        >
                          <Send className="w-3 h-3" />
                        </button>
                      </form>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}

      </div>
    </div>
  );
}
