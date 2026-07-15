/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  CheckCircle2, 
  X,
  ExternalLink
} from 'lucide-react';
import { Meeting } from '../../types/dashboard';

interface MeetingsTabProps {
  meetings: Meeting[];
  onBookMeeting: (meeting: Omit<Meeting, 'id'>) => void;
}

export default function MeetingsTab({
  meetings,
  onBookMeeting
}: MeetingsTabProps) {
  const [showScheduler, setShowScheduler] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(20); // default to July 20
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM EST');
  const [agenda, setAgenda] = useState<string>('');
  const [platform, setPlatform] = useState<'google-meet' | 'zoom'>('google-meet');
  const [schedulerCompleted, setSchedulerCompleted] = useState<boolean>(false);

  const availableSlots = [
    '09:00 AM EST',
    '11:00 AM EST',
    '02:30 PM EST',
    '04:00 PM EST'
  ];

  // Calendar numbers mapping (July 2026)
  const daysInJuly = Array.from({ length: 31 }, (_, i) => i + 1);
  const startingDayOfWeek = 3; // July 1, 2026 is a Wednesday

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agenda.trim()) return;

    onBookMeeting({
      title: agenda,
      date: `July ${selectedDate}, 2026`,
      time: selectedTime,
      type: 'upcoming',
      link: platform === 'google-meet' 
        ? 'https://meet.google.com/niaz-digital-client-sync' 
        : 'https://zoom.us/j/niazdigitalflows',
      platform
    });

    setSchedulerCompleted(true);
    setTimeout(() => {
      setSchedulerCompleted(false);
      setShowScheduler(false);
      setAgenda('');
    }, 1500);
  };

  const upcomingMeetings = meetings.filter(m => m.type === 'upcoming');
  const pastMeetings = meetings.filter(m => m.type === 'past');

  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-2">Meetings & Schedules</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Review historical sync records, manage calendar bookings, and access Google Meet / Zoom conferences.</p>
        </div>

        <button
          onClick={() => setShowScheduler(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center gap-1.5 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Book Sync Call</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Calendar visual view */}
        <div className="lg:col-span-4 p-5 rounded-2xl bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] text-center">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80 mb-4">
            <span className="text-xs font-bold text-slate-800 dark:text-white">July 2026</span>
            <div className="flex gap-1">
              <button className="p-1 rounded hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400"><ChevronLeft className="w-4 h-4" /></button>
              <button className="p-1 rounded hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-[10px] font-bold text-slate-400 mb-2">
            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {/* Empty slots for starting offset */}
            {Array.from({ length: startingDayOfWeek }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {daysInJuly.map(day => {
              const hasMeeting = meetings.some(m => m.date.includes(`July ${day},`));
              const isSelected = selectedDate === day;

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => setSelectedDate(day)}
                  className={`py-1.5 rounded-lg text-3xs font-semibold focus:outline-none cursor-pointer relative ${
                    isSelected 
                      ? 'bg-blue-600 text-white font-extrabold'
                      : hasMeeting
                      ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-100 dark:hover:bg-blue-500/20'
                      : 'text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span>{day}</span>
                  {hasMeeting && !isSelected && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-4xs text-slate-400 flex items-center gap-1.5 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Has scheduled event</span>
          </div>
        </div>

        {/* Dynamic Meetings List */}
        <div className="lg:col-span-8 space-y-6">
          {/* Upcoming list */}
          <div className="space-y-3">
            <span className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider block">Upcoming Sync Meetings</span>
            
            {upcomingMeetings.length > 0 ? (
              upcomingMeetings.map(m => (
                <div 
                  key={m.id} 
                  className="p-4 bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] hover:border-blue-500/20 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-blue-500/10 text-blue-500 rounded-xl shrink-0">
                      <Video className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 dark:text-white leading-tight">{m.title}</h4>
                      <p className="text-[10px] text-slate-400 mt-1 font-mono">
                        {m.date} &bull; {m.time} &bull; <span className="uppercase font-bold text-slate-500">{m.platform}</span>
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <a 
                      href={m.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-4xs uppercase tracking-wider rounded-lg shadow-xs flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      Join Call <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 border border-dashed border-slate-150 dark:border-slate-850 rounded-xl text-center">
                <span className="text-3xs font-extrabold text-slate-400 uppercase block">No upcoming meetings listed</span>
                <p className="text-5xs text-slate-500 mt-1">Click &quot;Book Sync Call&quot; to request a direct technical synchronization.</p>
              </div>
            )}
          </div>

          {/* Past list */}
          <div className="space-y-3">
            <span className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider block">Completed Call history</span>
            
            <div className="space-y-2.5">
              {pastMeetings.map(m => (
                <div 
                  key={m.id} 
                  className="p-3 bg-slate-50/40 dark:bg-slate-900/10 border border-slate-100 dark:border-slate-850 rounded-xl flex items-center justify-between gap-4 opacity-75 hover:opacity-100 transition-opacity"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-400/10 text-slate-500 rounded-lg shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-3xs font-bold text-slate-700 dark:text-slate-300">{m.title}</h4>
                      <p className="text-[9px] text-slate-400 font-mono mt-0.5">{m.date} &bull; {m.time}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => alert(`Simulating playback of recorded meeting: ${m.title}`)}
                    className="px-2.5 py-1.5 border border-slate-200 dark:border-slate-800 hover:bg-slate-150 rounded-lg text-4xs font-extrabold text-slate-600 dark:text-slate-300 uppercase tracking-wider cursor-pointer"
                  >
                    Watch Recording
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Scheduler Modal Popup */}
      <AnimatePresence>
        {showScheduler && (
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
                    <CalendarIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-850 dark:text-white">Schedule Sync Session</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">Automated Meeting dispatch with Azhar Uddin</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowScheduler(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                {schedulerCompleted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border-2 border-emerald-500">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h5 className="font-display font-black text-sm text-slate-800 dark:text-white">Call Scheduled & Confirmed!</h5>
                    <p className="text-3xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                      Your session on <span className="font-bold text-slate-700 dark:text-slate-350">July {selectedDate}, 2026</span> at <span className="font-bold text-slate-700 dark:text-slate-350">{selectedTime}</span> is booked. Secure Calendar invitations are being dispatched.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookSubmit} className="space-y-4">
                    {/* Date select overview */}
                    <div className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                      <span className="text-[10px] font-mono text-blue-500 font-extrabold uppercase block">Booking Target:</span>
                      <span className="text-xs font-bold text-slate-800 dark:text-white mt-0.5 block">July {selectedDate}, 2026</span>
                    </div>

                    {/* Time Slot Select */}
                    <div>
                      <label className="text-[9px] font-extrabold text-slate-400 uppercase block mb-2">Select Open Slot</label>
                      <div className="grid grid-cols-2 gap-2">
                        {availableSlots.map(slot => {
                          const isSelected = selectedTime === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`py-2 rounded-xl text-3xs font-bold tracking-wide transition-all border cursor-pointer ${
                                isSelected
                                  ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                                  : 'bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Conference choice */}
                    <div>
                      <label className="text-[9px] font-extrabold text-slate-400 uppercase block mb-2">Conference Platform</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setPlatform('google-meet')}
                          className={`py-2 rounded-xl text-3xs font-bold tracking-wide transition-all border cursor-pointer flex items-center justify-center gap-1.5 ${
                            platform === 'google-meet'
                              ? 'bg-blue-500/10 border-blue-500 text-blue-600 dark:text-blue-400'
                              : 'bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-slate-600 dark:text-slate-350'
                          }`}
                        >
                          <Video className="w-3.5 h-3.5" />
                          Google Meet
                        </button>
                        <button
                          type="button"
                          onClick={() => setPlatform('zoom')}
                          className={`py-2 rounded-xl text-3xs font-bold tracking-wide transition-all border cursor-pointer flex items-center justify-center gap-1.5 ${
                            platform === 'zoom'
                              ? 'bg-indigo-500/10 border-indigo-500 text-indigo-600 dark:text-indigo-400'
                              : 'bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-slate-600 dark:text-slate-350'
                          }`}
                        >
                          <Video className="w-3.5 h-3.5 text-indigo-500" />
                          Zoom Video
                        </button>
                      </div>
                    </div>

                    {/* Meeting agenda text */}
                    <div>
                      <label className="text-[9px] font-extrabold text-slate-400 uppercase block mb-1">Meeting Agenda *</label>
                      <input 
                        type="text"
                        required
                        value={agenda}
                        onChange={(e) => setAgenda(e.target.value)}
                        placeholder="e.g. Phase 3 Front-end layouts and typography round evaluation..."
                        className="w-full px-4 py-2.5 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-800 dark:text-white"
                      />
                    </div>

                    {/* Book button */}
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm Session Booking</span>
                    </button>
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
