/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  DollarSign, 
  Download, 
  CreditCard, 
  CheckCircle2, 
  AlertTriangle, 
  X, 
  Sparkles,
  Info,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { Invoice } from '../../types/dashboard';

interface InvoicesTabProps {
  invoices: Invoice[];
  onPayInvoice: (invoiceId: string) => void;
}

export default function InvoicesTab({
  invoices,
  onPayInvoice
}: InvoicesTabProps) {
  const [activePaymentInvoice, setActivePaymentInvoice] = useState<Invoice | null>(null);
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCvc, setCardCvc] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Math totals
  const totalInvoiced = invoices.reduce((acc, inv) => acc + parseFloat(inv.amount.replace(/[^0-9.]/g, '')), 0);
  const totalPaid = invoices
    .filter(i => i.status === 'paid')
    .reduce((acc, inv) => acc + parseFloat(inv.amount.replace(/[^0-9.]/g, '')), 0);
  const totalOutstanding = invoices
    .filter(i => i.status !== 'paid')
    .reduce((acc, inv) => acc + parseFloat(inv.amount.replace(/[^0-9.]/g, '')), 0);

  const handleStripePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activePaymentInvoice) return;
    
    setIsProcessing(true);
    
    // Simulate API pipeline delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      
      // Update state in parent
      setTimeout(() => {
        onPayInvoice(activePaymentInvoice.id);
        setActivePaymentInvoice(null);
        setIsCompleted(false);
        setCardNumber('');
        setCardExpiry('');
        setCardCvc('');
      }, 1500);
    }, 2000);
  };

  const getStatusBadge = (status: Invoice['status']) => {
    switch (status) {
      case 'paid':
        return (
          <span className="px-2.5 py-1 text-4xs font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Paid
          </span>
        );
      case 'overdue':
        return (
          <span className="px-2.5 py-1 text-4xs font-black uppercase tracking-wider bg-red-500/10 text-red-500 border border-red-500/20 rounded-full flex items-center gap-1 animate-pulse">
            <AlertTriangle className="w-3 h-3" /> Overdue
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 text-4xs font-black uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-full flex items-center gap-1">
            <CreditCard className="w-3 h-3" /> Pending
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 text-left">
      <div>
        <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-2">Finance & Invoicing</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Download cryptographically signed PDF billings, inspect retainer cycles, and manage payments with Stripe Checkout.</p>
      </div>

      {/* Financial Summary Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] text-left">
          <span className="text-4xs text-slate-400 uppercase font-extrabold tracking-wider block">Total Invoiced</span>
          <span className="text-xl font-bold text-slate-800 dark:text-white mt-2 block font-mono">${totalInvoiced.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-left">
          <span className="text-4xs text-emerald-500 uppercase font-extrabold tracking-wider block">Paid to date</span>
          <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-2 block font-mono">${totalPaid.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>

        <div className="p-5 rounded-2xl bg-orange-500/5 border border-orange-500/10 text-left">
          <span className="text-4xs text-orange-500 uppercase font-extrabold tracking-wider block">Outstanding Due</span>
          <span className="text-xl font-bold text-orange-600 dark:text-orange-400 mt-2 block font-mono">${totalOutstanding.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      </div>

      {/* Invoice Ledger Table */}
      <div className="bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-900/10 border-b border-slate-100 dark:border-slate-800/80">
                <th className="px-6 py-4 text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">Invoice ID</th>
                <th className="px-6 py-4 text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">Amount Due</th>
                <th className="px-6 py-4 text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">Due Date</th>
                <th className="px-6 py-4 text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">Status</th>
                <th className="px-6 py-4 text-[9px] uppercase font-extrabold text-slate-400 tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/85">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50/30 dark:hover:bg-slate-900/10 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-slate-850 dark:text-white block font-mono">{inv.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block font-mono">{inv.amount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-3xs text-slate-500 dark:text-slate-400 block font-semibold">{inv.dueDate}</span>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(inv.status)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {inv.status !== 'paid' && (
                        <button
                          type="button"
                          onClick={() => setActivePaymentInvoice(inv)}
                          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-4xs uppercase tracking-wider rounded-lg shadow-xs flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <CreditCard className="w-3 h-3" /> Stripe Checkout
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => alert(`Simulated Download of Invoice PDF for: ${inv.id}`)}
                        className="p-2 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 transition-colors cursor-pointer"
                        title="Download Receipt PDF"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stripe Checkout Modal Simulator */}
      <AnimatePresence>
        {activePaymentInvoice && (
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
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-850 dark:text-white">Secure Stripe Checkout</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">Niaz Digital Payment Gateway Integration</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    if (!isProcessing) {
                      setActivePaymentInvoice(null);
                      setIsCompleted(false);
                    }
                  }}
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
                  disabled={isProcessing}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Body */}
              <div className="p-6">
                {isCompleted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border-2 border-emerald-500">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h5 className="font-display font-black text-sm text-slate-800 dark:text-white">Payment Authorized Successfully!</h5>
                    <p className="text-3xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                      Amount of <span className="font-bold text-slate-700 dark:text-slate-350">{activePaymentInvoice.amount}</span> has been debited. Receipts have been pushed to email queues.
                    </p>
                    <div className="pt-4 flex items-center justify-center gap-1.5 text-5xs text-slate-400 font-mono">
                      <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                      <span>Ledger Syncing Active...</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleStripePay} className="space-y-4">
                    {/* Invoice overview summary */}
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase">Settling Billing:</span>
                        <span className="text-2xs font-extrabold text-slate-850 dark:text-white block mt-0.5">{activePaymentInvoice.id}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] font-mono text-slate-400 uppercase">Total Amount:</span>
                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 block mt-0.5 font-mono">{activePaymentInvoice.amount}</span>
                      </div>
                    </div>

                    {/* Card fields */}
                    <div className="space-y-3">
                      <div>
                        <label className="text-[9px] font-extrabold text-slate-400 uppercase block mb-1">Credit Card Number</label>
                        <input 
                          type="text"
                          required
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          placeholder="4242 4242 4242 4242"
                          className="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-800 dark:text-white font-mono"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[9px] font-extrabold text-slate-400 uppercase block mb-1">Expiration Date</label>
                          <input 
                            type="text"
                            required
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            placeholder="MM/YY"
                            className="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-800 dark:text-white font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] font-extrabold text-slate-400 uppercase block mb-1">CVC Code</label>
                          <input 
                            type="password"
                            required
                            value={cardCvc}
                            onChange={(e) => setCardCvc(e.target.value)}
                            placeholder="***"
                            maxLength={3}
                            className="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-800 dark:text-white font-mono"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Pay button */}
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-bold text-3xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                          <span>Authorizing Payment...</span>
                        </>
                      ) : (
                        <>
                          <span>Pay {activePaymentInvoice.amount} via Stripe</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2 justify-center text-[9px] text-slate-400 font-mono">
                      <span>Secure SSL Encrypted</span>
                      <span>&bull;</span>
                      <span>Powered by Stripe</span>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
