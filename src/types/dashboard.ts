/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DashboardProject {
  id: string;
  clientName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  status: 'Active' | 'In Progress' | 'Completed' | 'On Hold';
  manager: string;
  agency: string;
  healthScore: number;
  satisfaction: number; // 1-5 scale or %
  deliveryDate: string;
  remainingDays: number;
  overallCompletion: number;
  currentPhase: string;
}

export interface TimelinePhase {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  completion: number;
  status: 'pending' | 'active' | 'completed';
  files: string[];
  comments: { id: string; author: string; text: string; date: string }[];
  completedBy?: string;
  completedDate?: string;
  estimatedDate: string;
}

export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in_progress' | 'review' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  dueDate: string;
  attachmentsCount: number;
  commentsCount: number;
  assignee: { name: string; avatar?: string };
}

export interface DashboardFile {
  id: string;
  name: string;
  size: string;
  type: 'pdf' | 'docx' | 'png' | 'zip' | 'figma' | 'video';
  date: string;
  folder?: string;
}

export interface Invoice {
  id: string;
  amount: string;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'upcoming' | 'past';
  link: string;
  platform: 'google-meet' | 'zoom';
}

export interface Message {
  id: string;
  sender: 'client' | 'manager' | 'system';
  senderName: string;
  text: string;
  timestamp: string;
  attachments?: string[];
}

export interface ApprovalItem {
  id: string;
  title: string;
  type: 'design' | 'development' | 'branding' | 'final';
  status: 'pending' | 'approved';
  signedBy?: string;
  timestamp?: string;
}

export interface SupportTicket {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  status: 'open' | 'in_progress' | 'resolved';
  replies: { id: string; author: string; text: string; date: string }[];
  screenshot?: string;
}

export interface NotificationItem {
  id: string;
  type: 'success' | 'warning' | 'info' | 'mention';
  title: string;
  text: string;
  timestamp: string;
  read: boolean;
}

export interface DashboardNotification {
  id: string;
  type: 'task' | 'meeting' | 'file' | 'invoice';
  text: string;
  time: string;
  read: boolean;
}

export type DashboardTask = Task;
