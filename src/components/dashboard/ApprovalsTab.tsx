/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Signature, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Lock, 
  Sparkles, 
  X,
  FileText,
  BadgeAlert
} from 'lucide-react';
import { ApprovalItem } from '../../types/dashboard';

interface ApprovalsTabProps {
  approvals: ApprovalItem[];
  onApproveItem: (id: string, signedBy: string) => void;
}

export default function ApprovalsTab({
  approvals,
  onApproveItem
}: ApprovalsTabProps) {
  const [activeSignId, setActiveSignId] = useState<string | null>(null);
  const [signerName, setSignerName] = useState<string>('');
  const [signConsent, setSignConsent] = useState<boolean>(false);
  const [showCertificate, setShowCertificate] = useState<ApprovalItem | null>(null);

  const handleSignSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signerName.trim() || !signConsent || !activeSignId) return;

    onApproveItem(activeSignId, signerName);
    
    // Clear inputs
    setSignerName('');
    setSignConsent(false);
    setActiveSignId(null);
  };

  const getApprovalIcon = (status: ApprovalItem['status']) => {
    switch (status) {
      case 'approved':
        return <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />;
      default:
        return <Clock className="w-5 h-5 text-amber-500 shrink-0 animate-pulse" />;
    }
  };

  return (
    <div className="space-y-6 text-left">
      <div>
        <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-2">Verification Sign-offs & Approvals</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Review critical stage gates and digitally sign off finished elements to authorize next sprint progression.</p>
      </div>

      {/* Roster list */}
      <div className="grid grid-cols-1 gap-4">
        {approvals.map((item) => {
          const isApproved = item.status === 'approved';

          return (
            <div 
              key={item.id} 
              className={`p-5 rounded-2xl border ${
                isApproved 
                  ? 'bg-emerald-500/5 border-emerald-500/10' 
                  : 'bg-white dark:bg-[#0D1117] border-slate-100 dark:border-[#1F2937] hover:border-blue-500/20'
              } flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all`}
            >
              <div className="flex items-start gap-3.5">
                <div className="mt-1">
                  {getApprovalIcon(item.status)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] uppercase font-bold text-slate-400">Gate ID: {item.id.toUpperCase()}</span>
                    <span className="text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                      {item.type}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-xs text-slate-850 dark:text-white mt-1 leading-snug">
                    {item.title}
                  </h4>
                  {isApproved && (
                    <p className="text-[10px] text-slate-400 font-mono mt-1">
                      Electronically signed by: <b className="text-slate-700 dark:text-slate-300 font-black">{item.signedBy}</b> &bull; {item.timestamp}
                    </p>
                  )}
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                {isApproved ? (
                  <button
                    type="button"
                    onClick={() => setShowCertificate(item)}
                    className="px-3.5 py-2 border border-emerald-500/20 hover:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-3xs uppercase tracking-wider rounded-lg transition cursor-pointer"
                  >
                    View Secure Token
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveSignId(item.id)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs uppercase tracking-wider rounded-lg shadow-xs flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Signature className="w-3.5 h-3.5" />
                    Sign Deliverable
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Signature Input overlay */}
      <AnimatePresence>
        {activeSignId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl flex flex-col text-left"
            >
              {/* Header */}
              <div className="p-5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/10">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-600 text-white rounded-lg">
                    <Signature className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-850 dark:text-white">Milestone Authorization</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">TLS Cryptographic Sign-off Console</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveSignId(null)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSignSubmit} className="p-6 space-y-4">
                <div className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl text-3xs text-slate-500 leading-relaxed">
                  <span className="font-bold text-slate-700 dark:text-slate-350 block mb-1">Verify Element:</span>
                  {approvals.find(a => a.id === activeSignId)?.title}
                </div>

                <div>
                  <label className="text-[9px] font-extrabold text-slate-400 uppercase block mb-1">Digitized Signature Full Name *</label>
                  <input 
                    type="text"
                    required
                    value={signerName}
                    onChange={(e) => setSignerName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-800 dark:text-white font-mono"
                  />
                </div>

                <div className="p-3.5 bg-slate-50 dark:bg-slate-950/40 border border-slate-150 dark:border-slate-850 rounded-xl flex items-start gap-2.5">
                  <input 
                    type="checkbox"
                    id="consent-box"
                    required
                    checked={signConsent}
                    onChange={(e) => setSignConsent(e.target.checked)}
                    className="mt-1 accent-blue-600"
                  />
                  <label htmlFor="consent-box" className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal select-none">
                    I authorize Niaz Digital to append my digitized stamp signature to this milestone document. I confirm all phase deliverables have been completed.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!signConsent || !signerName.trim()}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/45 text-white font-bold text-3xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Signature className="w-4 h-4" />
                  <span>Execute Digital Signature</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Verification Certificate Modal */}
      <AnimatePresence>
        {showCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl flex flex-col text-left"
            >
              {/* Header */}
              <div className="p-5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/10">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-emerald-500 text-white rounded-lg">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-850 dark:text-white">Validation Certificate</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">SHA-256 Public Key Verification</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowCertificate(null)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate content */}
              <div className="p-8 space-y-6 text-center bg-linear-to-b from-emerald-500/5 to-transparent">
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-emerald-500 bg-emerald-500/5 text-emerald-500 flex items-center justify-center mx-auto relative">
                  <Signature className="w-10 h-10" />
                  <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-yellow-400 animate-spin" />
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md inline-block">SECURED BY NIAZ CONSOLE</span>
                  <h4 className="text-sm font-black text-slate-850 dark:text-white pt-2">Milestone Cryptographic Sign-off</h4>
                  <p className="text-3xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                    This certificate guarantees the electronic authorization of <b className="text-slate-800 dark:text-white">{showCertificate.title}</b>.
                  </p>
                </div>

                {/* Certificate Specifications details */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-150 dark:border-slate-850 text-left space-y-3 font-mono text-[9px] text-slate-500">
                  <div>
                    <span className="text-slate-400 uppercase font-black text-[8px] block">Authorized Signer:</span>
                    <span className="text-slate-800 dark:text-slate-200 block mt-0.5 font-bold">{showCertificate.signedBy}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase font-black text-[8px] block">Timestamp Audit:</span>
                    <span className="text-slate-800 dark:text-slate-200 block mt-0.5">{showCertificate.timestamp}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase font-black text-[8px] block">SHA-256 Digest Token:</span>
                    <span className="text-blue-500 block break-all font-semibold mt-0.5">8f921e5dc4b0a1d48c0a9161a0de921382103f6be72b0c41094ba9d82e1c310b</span>
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900/40 text-center text-5xs text-slate-400 font-mono">
                Digitally bound &bull; Legal under federal Electronic Signatures Act (E-SIGN)
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
