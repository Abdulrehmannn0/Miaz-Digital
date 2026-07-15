/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  User, 
  Settings, 
  Briefcase, 
  Bell, 
  Database, 
  CheckCircle2, 
  Info,
  Sliders,
  Sparkles
} from 'lucide-react';
import { DashboardProject } from '../../types/dashboard';

interface SettingsTabProps {
  project: DashboardProject;
  projects: DashboardProject[];
  activeProjectId: string;
  onSwitchProject: (id: string) => void;
  role: 'client' | 'admin';
  onChangeRole: (newRole: 'client' | 'admin') => void;
  onUpdateClientInfo: (info: Partial<DashboardProject>) => void;
  onTweakCompletion: (value: number) => void;
}

export default function SettingsTab({
  project,
  projects,
  activeProjectId,
  onSwitchProject,
  role,
  onChangeRole,
  onUpdateClientInfo,
  onTweakCompletion
}: SettingsTabProps) {
  const [clientName, setClientName] = useState<string>(project.clientName);
  const [company, setCompany] = useState<string>(project.company);
  const [email, setEmail] = useState<string>(project.email);
  const [phone, setPhone] = useState<string>(project.phone);
  const [country, setCountry] = useState<string>(project.country);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  const handleSaveInfo = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateClientInfo({
      clientName,
      company,
      email,
      phone,
      country
    });

    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  return (
    <div className="space-y-6 text-left">
      <div>
        <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-2">Workspace & Security Settings</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Manage client information, configure workspace settings, and audit cryptographic security roles.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Security Role & RBAC Admin Controls */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* RBAC Card */}
          <div className="p-5 rounded-2xl bg-[#0D1117] border border-[#1F2937] text-white">
            <h4 className="text-xs font-black uppercase tracking-wider mb-3 flex items-center gap-2 text-blue-450">
              <Shield className="w-4.5 h-4.5 text-blue-400" />
              <span>Identity & Access Control (RBAC)</span>
            </h4>
            <p className="text-[10px] text-slate-400 leading-normal mb-5">
              Switch security boundaries to inspect how Admin roles audit global client matrices compared to typical Client-only locks.
            </p>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => onChangeRole('client')}
                className={`w-full py-2.5 rounded-xl text-3xs font-black uppercase tracking-wider transition cursor-pointer border ${
                  role === 'client'
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-transparent border-[#1F2937] hover:border-slate-800 text-slate-400'
                }`}
              >
                Role: Client View
              </button>

              <button
                type="button"
                onClick={() => onChangeRole('admin')}
                className={`w-full py-2.5 rounded-xl text-3xs font-black uppercase tracking-wider transition cursor-pointer border ${
                  role === 'admin'
                    ? 'bg-purple-600 border-purple-600 text-white shadow-md'
                    : 'bg-transparent border-[#1F2937] hover:border-slate-800 text-slate-400'
                }`}
              >
                Role: Administrator (Sudo)
              </button>
            </div>

            {role === 'admin' && (
              <div className="mt-4 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[9px] text-purple-300 leading-normal flex items-start gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5 animate-spin" style={{ animationDuration: '4s' }} />
                <span><b>Admin Mode Active:</b> You can now toggle project streams, modify dynamic metrics, and inspect global analytics.</span>
              </div>
            )}
          </div>

          {/* Admin Tweak Panel (Visible only when role === 'admin') */}
          {role === 'admin' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-2xl bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937]"
            >
              <h4 className="text-xs font-black uppercase tracking-wider mb-3 flex items-center gap-2 text-slate-850 dark:text-white">
                <Sliders className="w-4.5 h-4.5 text-purple-500" />
                <span>Simulation Sandbox Control</span>
              </h4>
              <p className="text-[10px] text-slate-400 leading-normal mb-4">
                Instantly alter core project telemetry to test live dashboard component syncing.
              </p>

              <div className="space-y-4 text-left">
                {/* Switch active project */}
                <div>
                  <label className="text-[9px] font-extrabold text-slate-400 uppercase block mb-1.5">Active Project Stream</label>
                  <select
                    value={activeProjectId}
                    onChange={(e) => onSwitchProject(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold focus:outline-none focus:border-blue-500 text-slate-800 dark:text-white"
                  >
                    {projects.map(p => (
                      <option key={p.id} value={p.id}>{p.id} - {p.company}</option>
                    ))}
                  </select>
                </div>

                {/* Slider to tweak overall completion */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-[9px] font-extrabold text-slate-400 uppercase">Override Progress Rating</label>
                    <span className="font-mono text-3xs font-extrabold text-purple-500">{project.overallCompletion}%</span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="100"
                    value={project.overallCompletion}
                    onChange={(e) => onTweakCompletion(parseInt(e.target.value))}
                    className="w-full accent-purple-600 cursor-pointer"
                  />
                  <span className="text-[9px] text-slate-400 block mt-1 leading-normal">
                    This dynamically updates progress rings and activity logs in real-time.
                  </span>
                </div>
              </div>
            </motion.div>
          )}

        </div>

        {/* Right Side: Client Information Form */}
        <div className="lg:col-span-8">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800/80 pb-4 flex items-center justify-between">
              <div>
                <h4 className="font-display font-black text-sm text-slate-800 dark:text-white">Workspace Specifications</h4>
                <p className="text-3xs text-slate-400 mt-0.5">Edit verified customer details connected with Niaz contracts.</p>
              </div>
              <User className="w-4 h-4 text-slate-400" />
            </div>

            <form onSubmit={handleSaveInfo} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] font-extrabold text-slate-400 uppercase block mb-1">Contact Name *</label>
                  <input 
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-850 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-extrabold text-slate-400 uppercase block mb-1">Company Entity *</label>
                  <input 
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-850 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-extrabold text-slate-400 uppercase block mb-1">Authorized Email *</label>
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-850 dark:text-white font-mono"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-extrabold text-slate-400 uppercase block mb-1">Registered Phone</label>
                  <input 
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-850 dark:text-white font-mono"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-[9px] font-extrabold text-slate-400 uppercase block mb-1">Country / Region</label>
                  <input 
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-850 dark:text-white"
                  />
                </div>
              </div>

              {saveSuccess && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-3xs font-bold uppercase rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  Credentials updated on live state!
                </div>
              )}

              <button 
                type="submit"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs uppercase tracking-wider rounded-lg shadow-sm transition"
              >
                Save Client Info
              </button>
            </form>
          </div>
        </div>

      </div>

    </div>
  );
}
