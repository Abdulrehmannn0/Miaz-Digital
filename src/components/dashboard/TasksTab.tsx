/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Paperclip, 
  MessageSquare, 
  Calendar, 
  ArrowRightLeft, 
  Plus, 
  User, 
  CheckCircle,
  Clock,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { Task } from '../../types/dashboard';

interface TasksTabProps {
  tasks: Task[];
  onMoveTask: (taskId: string, newStatus: Task['status']) => void;
  onAddTask: (task: Omit<Task, 'id'>) => void;
}

export default function TasksTab({
  tasks,
  onMoveTask,
  onAddTask
}: TasksTabProps) {
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newPriority, setNewPriority] = useState<Task['priority']>('medium');
  const [newDueDate, setNewDueDate] = useState<string>('July 30, 2026');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const columns: { id: Task['status']; label: string; bg: string; border: string; dot: string }[] = [
    { id: 'todo', label: 'Todo', bg: 'bg-slate-50 dark:bg-slate-900/30', border: 'border-slate-100 dark:border-slate-800', dot: 'bg-slate-400' },
    { id: 'in_progress', label: 'In Progress', bg: 'bg-blue-500/5 dark:bg-blue-500/30', border: 'border-blue-500/10 dark:border-blue-500/20', dot: 'bg-blue-500' },
    { id: 'review', label: 'In Review', bg: 'bg-amber-500/5 dark:bg-amber-500/30', border: 'border-amber-500/10 dark:border-amber-500/20', dot: 'bg-amber-500' },
    { id: 'completed', label: 'Completed', bg: 'bg-emerald-500/5 dark:bg-emerald-500/30', border: 'border-emerald-500/10 dark:border-emerald-500/20', dot: 'bg-emerald-500' }
  ];

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    
    onAddTask({
      title: newTitle,
      status: 'todo',
      priority: newPriority,
      dueDate: newDueDate,
      attachmentsCount: 0,
      commentsCount: 0,
      assignee: { name: "Azhar Uddin" }
    });

    setNewTitle('');
    setShowAddForm(false);
  };

  const getPriorityBadge = (priority: Task['priority']) => {
    switch (priority) {
      case 'urgent':
        return <span className="px-2 py-0.5 rounded text-[8px] font-extrabold uppercase bg-red-500/10 text-red-500 border border-red-500/20">URGENT</span>;
      case 'high':
        return <span className="px-2 py-0.5 rounded text-[8px] font-extrabold uppercase bg-orange-500/10 text-orange-500 border border-orange-500/20">HIGH</span>;
      case 'medium':
        return <span className="px-2 py-0.5 rounded text-[8px] font-extrabold uppercase bg-blue-500/10 text-blue-500 border border-blue-500/20">MEDIUM</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[8px] font-extrabold uppercase bg-slate-500/10 text-slate-500 border border-slate-500/20">LOW</span>;
    }
  };

  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-2">Workspace Sprints & Kanban</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Review assigned engineering tasks, track execution states, and audit priorities in real-time.</p>
        </div>
        
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center gap-1.5 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Raise New Task</span>
        </button>
      </div>

      {/* Task Creation Form overlay / dropdown */}
      {showAddForm && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4"
        >
          <h4 className="text-xs font-bold text-slate-800 dark:text-white">Describe New Task Spec</h4>
          <form onSubmit={handleCreateTask} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-3">
              <label className="text-[9px] font-extrabold text-slate-400 block mb-1">Task Details *</label>
              <input 
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Integrate responsive SMTP email responder with secure auth..."
                className="w-full px-4 py-2 text-xs bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-800 dark:text-white"
              />
            </div>

            <div>
              <label className="text-[9px] font-extrabold text-slate-400 block mb-1">Priority Scale</label>
              <select 
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value as Task['priority'])}
                className="w-full px-4 py-2 text-xs bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-800 dark:text-white"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>

            <div>
              <label className="text-[9px] font-extrabold text-slate-400 block mb-1">Target Due Date</label>
              <input 
                type="text"
                required
                value={newDueDate}
                onChange={(e) => setNewDueDate(e.target.value)}
                placeholder="July 30, 2026"
                className="w-full px-4 py-2 text-xs bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 font-semibold text-slate-800 dark:text-white"
              />
            </div>

            <div className="flex items-end">
              <button 
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs uppercase tracking-wider rounded-xl cursor-pointer transition-colors"
              >
                Create Task Card
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Kanban Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {columns.map((col) => {
          const columnTasks = tasks.filter((t) => t.status === col.id);

          return (
            <div 
              key={col.id} 
              className={`p-4 rounded-2xl border ${col.bg} ${col.border} flex flex-col min-h-[500px]`}
            >
              {/* Header Title for Lane */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4 shrink-0">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${col.dot}`} />
                  <span className="text-xs font-bold text-slate-800 dark:text-white">{col.label}</span>
                </div>
                <span className="font-mono text-3xs font-extrabold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                  {columnTasks.length}
                </span>
              </div>

              {/* Task Cards Column */}
              <div className="flex-grow flex flex-col gap-3 overflow-y-auto max-h-[600px] pr-1">
                {columnTasks.length > 0 ? (
                  columnTasks.map((task) => (
                    <motion.div
                      key={task.id}
                      onMouseEnter={() => setHoveredCardId(task.id)}
                      onMouseLeave={() => setHoveredCardId(null)}
                      className="p-4 bg-white dark:bg-[#161B22] border border-slate-200/60 dark:border-[#1F2937] hover:border-blue-500/40 rounded-xl shadow-xs hover:shadow-md hover:scale-[1.01] transition-all duration-200 text-left relative group space-y-3"
                    >
                      {/* Priority Tag */}
                      <div className="flex justify-between items-center gap-2">
                        {getPriorityBadge(task.priority)}
                        <span className="font-mono text-[9px] text-slate-400">ID: {task.id.toUpperCase()}</span>
                      </div>

                      {/* Title */}
                      <p className="text-xs font-semibold text-slate-800 dark:text-white leading-snug">
                        {task.title}
                      </p>

                      {/* Footer Info Row */}
                      <div className="flex items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800/80 pt-2.5">
                        
                        {/* Due Date & Assignee */}
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <Calendar className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="text-[10px] truncate max-w-[70px]">{task.dueDate}</span>
                        </div>

                        {/* Assignee initials badge */}
                        <div className="flex items-center gap-1">
                          <div className="w-4.5 h-4.5 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-[8px]" title={task.assignee.name}>
                            AU
                          </div>
                        </div>

                      </div>

                      {/* Hover action popup for moving lanes (Click-Based moving ensures perfect cross platform UX) */}
                      <div className="absolute top-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 bg-white dark:bg-[#161B22] border border-slate-200 dark:border-[#1F2937] p-1 rounded-lg shadow-sm">
                        <span className="text-[9px] text-slate-400 uppercase font-black px-1">Move:</span>
                        {columns.filter(c => c.id !== task.status).map(c => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => onMoveTask(task.id, c.id)}
                            className="px-1.5 py-0.5 rounded text-[8px] bg-slate-50 hover:bg-blue-500 hover:text-white text-slate-600 dark:bg-slate-900 dark:hover:bg-blue-600 transition-colors cursor-pointer"
                            title={`Move to ${c.label}`}
                          >
                            {c.label.split(' ')[0]}
                          </button>
                        ))}
                      </div>

                    </motion.div>
                  ))
                ) : (
                  <div className="flex-grow flex flex-col items-center justify-center border border-dashed border-slate-200/50 dark:border-slate-800/60 rounded-xl p-4 text-center">
                    <span className="text-5xs font-bold text-slate-400 uppercase tracking-wider block">Lane is Empty</span>
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
