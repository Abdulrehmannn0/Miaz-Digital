/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Bell, 
  Check, 
  Trash2, 
  Layers, 
  Video, 
  FileText, 
  CheckCircle2, 
  Settings,
  Mail,
  Zap,
  Info
} from 'lucide-react';
import { DashboardNotification } from '../../types/dashboard';

interface NotificationsTabProps {
  notifications: DashboardNotification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onClearNotifications: () => void;
}

export default function NotificationsTab({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
  onClearNotifications
}: NotificationsTabProps) {

  const getNotificationIcon = (type: DashboardNotification['type']) => {
    switch (type) {
      case 'task':
        return <Layers className="w-4 h-4 text-purple-500" />;
      case 'meeting':
        return <Video className="w-4 h-4 text-emerald-500" />;
      case 'file':
        return <FileText className="w-4 h-4 text-blue-500" />;
      case 'invoice':
        return <Zap className="w-4 h-4 text-orange-500" />;
      default:
        return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-2">Technical Alerts & Notifications</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Review deployment completion records, task modifications, meeting bookings, and sign-off confirmations.</p>
        </div>

        {notifications.length > 0 && (
          <div className="flex gap-2 shrink-0">
            <button
              onClick={onMarkAllAsRead}
              className="px-3 py-1.5 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 font-bold text-4xs uppercase tracking-wider rounded-lg transition flex items-center gap-1 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Mark all read</span>
            </button>
            <button
              onClick={onClearNotifications}
              className="px-3 py-1.5 border border-red-500/10 hover:bg-red-500/10 text-red-500 font-bold text-4xs uppercase tracking-wider rounded-lg transition flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear logs</span>
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Notifications Feed */}
        <div className="lg:col-span-8 space-y-3">
          {notifications.length > 0 ? (
            notifications.map((n) => (
              <div 
                key={n.id} 
                className={`p-4 rounded-xl border flex items-start gap-4 transition-all relative ${
                  n.read
                    ? 'bg-white dark:bg-[#0D1117] border-slate-100 dark:border-[#1F2937] opacity-70'
                    : 'bg-blue-500/5 border-blue-500/20 shadow-xs'
                }`}
              >
                <div className="p-2.5 bg-slate-50 dark:bg-slate-900 rounded-lg shrink-0 border border-slate-200/50 dark:border-slate-800">
                  {getNotificationIcon(n.type)}
                </div>

                <div className="flex-grow text-left pr-6">
                  <h4 className={`text-xs leading-snug ${n.read ? 'text-slate-700 dark:text-slate-300' : 'font-bold text-slate-900 dark:text-white'}`}>
                    {n.text}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono block mt-1">{n.time}</span>
                </div>

                {!n.read && (
                  <button
                    onClick={() => onMarkAsRead(n.id)}
                    className="absolute top-4 right-4 p-1 hover:bg-blue-500/15 text-blue-500 rounded-lg cursor-pointer"
                    title="Mark as read"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))
          ) : (
            <div className="py-16 border border-dashed border-slate-150 dark:border-slate-850 rounded-2xl text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Clean logs - No unread notifications</span>
            </div>
          )}
        </div>

        {/* Configurations side channel */}
        <div className="lg:col-span-4 p-5 rounded-2xl bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] space-y-4 text-left">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
            <Settings className="w-4.5 h-4.5 text-slate-500" />
            <h4 className="text-3xs uppercase font-extrabold text-slate-400 tracking-wider">Alert Configurations</h4>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <input type="checkbox" id="cfg-mail" defaultChecked className="mt-1 accent-blue-600" />
              <div>
                <label htmlFor="cfg-mail" className="text-2xs font-extrabold text-slate-800 dark:text-white block">Email Dispatch</label>
                <p className="text-[9px] text-slate-400 mt-0.5">SMTP alerts sent to John.doe@apexventures.co.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" id="cfg-slack" defaultChecked className="mt-1 accent-blue-600" />
              <div>
                <label htmlFor="cfg-slack" className="text-2xs font-extrabold text-slate-800 dark:text-white block">Slack Integration</label>
                <p className="text-[9px] text-slate-400 mt-0.5">Stream logs into #general-staging active feeds.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" id="cfg-sms" className="mt-1 accent-blue-600" />
              <div>
                <label htmlFor="cfg-sms" className="text-2xs font-extrabold text-slate-800 dark:text-white block">SMS Notifications</label>
                <p className="text-[9px] text-slate-400 mt-0.5">Critical outages triggers dispatching directly to mobile.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
