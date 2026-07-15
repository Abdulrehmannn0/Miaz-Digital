/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  DashboardProject, 
  TimelinePhase, 
  Task, 
  DashboardFile, 
  Invoice, 
  Meeting, 
  Message, 
  ApprovalItem, 
  SupportTicket,
  NotificationItem
} from '../types/dashboard';

export const initialProjects: DashboardProject[] = [
  {
    id: "ND-2026-0042",
    clientName: "John Doe",
    company: "Apex Ventures Inc",
    email: "john.doe@apexventures.co",
    phone: "+1 (555) 019-2834",
    country: "United States",
    status: "In Progress",
    manager: "Azhar Uddin",
    agency: "Niaz Digital",
    healthScore: 94,
    satisfaction: 4.8,
    deliveryDate: "Aug 15, 2026",
    remainingDays: 31,
    overallCompletion: 74,
    currentPhase: "Phase 3: Front-End Next.js Assembly"
  },
  {
    id: "ND-2026-0018",
    clientName: "Sarah Connor",
    company: "Cyberdyne Systems",
    email: "sarah@cyberdyne.io",
    phone: "+44 20 7946 0192",
    country: "United Kingdom",
    status: "Active",
    manager: "Azhar Uddin",
    agency: "Niaz Digital",
    healthScore: 100,
    satisfaction: 5.0,
    deliveryDate: "Sep 20, 2026",
    remainingDays: 67,
    overallCompletion: 45,
    currentPhase: "Phase 2: High-Fidelity UI Design Approval"
  }
];

export const initialTimelinePhases: Record<string, TimelinePhase[]> = {
  "ND-2026-0042": [
    {
      id: "ph-1",
      title: "Phase 1: Brand Strategy & Figma Layouts",
      description: "Define the visual directions, core visual elements, site-map routing architectures and UX low-fidelity wireframe representations.",
      deliverables: ["Visual Identity Palette", "Site Architecture Sitemaps", "Low-fidelity UX Wireframes"],
      completion: 100,
      status: "completed",
      files: ["Apex_Brand_Strategy_V1.pdf", "Wireframes_Layouts_All_Screens.fig"],
      comments: [
        { id: "c-1", author: "Azhar Uddin", text: "Approved the general typography guidelines and layout maps.", date: "June 18, 2026" },
        { id: "c-2", author: "John Doe", text: "Everything matches our initial design brief. Excellent alignment!", date: "June 20, 2026" }
      ],
      completedBy: "Azhar Uddin",
      completedDate: "June 20, 2026",
      estimatedDate: "June 22, 2026"
    },
    {
      id: "ph-2",
      title: "Phase 2: High-Fidelity UI Design Approval",
      description: "Craft pixel-perfect desktop and mobile high-fidelity layouts in Figma including visual animations and asset exports.",
      deliverables: ["High-Fidelity Figma Designs", "Responsive Prototyping Interactions", "Branding Assets Kit Export"],
      completion: 100,
      status: "completed",
      files: ["Apex_Luxury_Brand_Guidelines.pdf", "Figma_Desktop_Mockups_V3.fig"],
      comments: [
        { id: "c-3", author: "John Doe", text: "The dark modes look absolutely breathtaking. Ready for coding!", date: "June 27, 2026" },
        { id: "c-4", author: "Azhar Uddin", text: "Phase signed off. Code architecture is set up.", date: "June 28, 2026" }
      ],
      completedBy: "Azhar Uddin",
      completedDate: "June 28, 2026",
      estimatedDate: "June 30, 2026"
    },
    {
      id: "ph-3",
      title: "Phase 3: Front-End Next.js Assembly",
      description: "Assemble responsive, micro-animated client and service view layers with full Tailwind CSS structures matching the designs.",
      deliverables: ["React Component Matrix", "Fluid Parallax Transitions", "Vite/NextJs Bundler Configs"],
      completion: 85,
      status: "active",
      files: ["Vite_Production_Build_Logs.docx", "NextJS_Component_Matrix_Specs.zip"],
      comments: [
        { id: "c-5", author: "Azhar Uddin", text: "Vite server assembly completed. Working on micro-interactions details.", date: "Today" }
      ],
      estimatedDate: "July 24, 2026"
    },
    {
      id: "ph-4",
      title: "Phase 4: CRM Integration & n8n Syncing",
      description: "Sync interactive client lead form pipelines into HubSpot CRM consoles and n8n webhook workflow systems.",
      deliverables: ["n8n Webhook Workflow Blueprints", "HubSpot Contact Properties Setups", "Interactive SMTP email responders"],
      completion: 40,
      status: "pending",
      files: ["HubSpot_CRM_Automation_Flows.json"],
      comments: [],
      estimatedDate: "Aug 02, 2026"
    },
    {
      id: "ph-5",
      title: "Phase 5: Lighthouse Optimization & Deploy",
      description: "Optimize images, lazy-load heavy modules, configure server-side caching and launch live site deployments.",
      deliverables: ["Lighthouse Performance Metrics (98+ score)", "Live Domain DNS Routing Setup", "SSL Certificate Issuance"],
      completion: 0,
      status: "pending",
      files: [],
      comments: [],
      estimatedDate: "Aug 15, 2026"
    }
  ],
  "ND-2026-0018": [
    {
      id: "ph-1",
      title: "Phase 1: Brand Strategy & Figma Layouts",
      description: "Define the visual directions, sitemaps, wireframes.",
      deliverables: ["Visual Sitemaps", "Layout Framework"],
      completion: 100,
      status: "completed",
      files: ["Cyberdyne_Sitemaps.pdf"],
      comments: [
        { id: "c-10", author: "Azhar Uddin", text: "Sitemap approved by the executive board.", date: "July 01, 2026" }
      ],
      completedBy: "Azhar Uddin",
      completedDate: "July 02, 2026",
      estimatedDate: "July 05, 2026"
    },
    {
      id: "ph-2",
      title: "Phase 2: High-Fidelity UI Design Approval",
      description: "Figma UI assembly and client visual inspection rounds.",
      deliverables: ["UI Prototypes", "Visual Assets"],
      completion: 45,
      status: "active",
      files: ["Cyberdyne_UI_Mockups_V1.fig"],
      comments: [],
      estimatedDate: "July 25, 2026"
    }
  ]
};

export const initialTasks: Record<string, Task[]> = {
  "ND-2026-0042": [
    {
      id: "tsk-1",
      title: "Revamp Landing Page Hero section with glassmorphism overlays",
      status: "in_progress",
      priority: "high",
      dueDate: "July 20, 2026",
      attachmentsCount: 3,
      commentsCount: 2,
      assignee: { name: "Azhar Uddin" }
    },
    {
      id: "tsk-2",
      title: "Configure n8n lead ingestion webhook payload validations",
      status: "todo",
      priority: "medium",
      dueDate: "July 25, 2026",
      attachmentsCount: 1,
      commentsCount: 0,
      assignee: { name: "Azhar Uddin" }
    },
    {
      id: "tsk-3",
      title: "Verify Stripe Checkout redirect callback handling",
      status: "review",
      priority: "urgent",
      dueDate: "July 18, 2026",
      attachmentsCount: 2,
      commentsCount: 4,
      assignee: { name: "Azhar Uddin" }
    },
    {
      id: "tsk-4",
      title: "Complete Figma high-fidelity desktop prototyping connections",
      status: "completed",
      priority: "medium",
      dueDate: "June 26, 2026",
      attachmentsCount: 5,
      commentsCount: 1,
      assignee: { name: "Azhar Uddin" }
    },
    {
      id: "tsk-5",
      title: "Integrate Google Analytics 4 click telemetry hooks",
      status: "todo",
      priority: "low",
      dueDate: "Aug 05, 2026",
      attachmentsCount: 0,
      commentsCount: 0,
      assignee: { name: "Azhar Uddin" }
    }
  ],
  "ND-2026-0018": [
    {
      id: "tsk-21",
      title: "Sitemap strategy formulation",
      status: "completed",
      priority: "high",
      dueDate: "July 02, 2026",
      attachmentsCount: 1,
      commentsCount: 1,
      assignee: { name: "Azhar Uddin" }
    },
    {
      id: "tsk-22",
      title: "High-fidelity mockups of corporate dashboard",
      status: "in_progress",
      priority: "urgent",
      dueDate: "July 22, 2026",
      attachmentsCount: 2,
      commentsCount: 0,
      assignee: { name: "Azhar Uddin" }
    }
  ]
};

export const initialFiles: Record<string, DashboardFile[]> = {
  "ND-2026-0042": [
    { id: "fl-1", name: "Apex_Luxury_Brand_Guidelines.pdf", size: "4.8 MB", type: "pdf", date: "June 24, 2026", folder: "Branding" },
    { id: "fl-2", name: "Figma_Desktop_Mockups_V3.fig", size: "22.1 MB", type: "figma", date: "June 28, 2026", folder: "Design" },
    { id: "fl-3", name: "HubSpot_CRM_Automation_Flows.json", size: "128 KB", type: "zip", date: "July 01, 2026", folder: "Automation" },
    { id: "fl-4", name: "NextJS_Component_Matrix_Specs.zip", size: "12.4 MB", type: "zip", date: "July 12, 2026", folder: "Development" },
    { id: "fl-5", name: "Hero_Section_Framer_Animation_Prototype.mp4", size: "18.5 MB", type: "video", date: "July 14, 2026", folder: "Design" },
    { id: "fl-6", name: "Apex_Initial_Contract_Signed.pdf", size: "1.2 MB", type: "pdf", date: "June 10, 2026", folder: "Legal" }
  ],
  "ND-2026-0018": [
    { id: "fl-21", name: "Cyberdyne_Sitemaps.pdf", size: "2.1 MB", type: "pdf", date: "July 02, 2026", folder: "Strategy" },
    { id: "fl-22", name: "Cyberdyne_UI_Mockups_V1.fig", size: "18.2 MB", type: "figma", date: "July 10, 2026", folder: "Design" }
  ]
};

export const initialInvoices: Record<string, Invoice[]> = {
  "ND-2026-0042": [
    { id: "INV-2026-0182", amount: "$1,500.00", dueDate: "June 12, 2026", status: "paid" },
    { id: "INV-2026-0199", amount: "$2,500.00", dueDate: "July 05, 2026", status: "paid" },
    { id: "INV-2026-0210", amount: "$3,000.00", dueDate: "July 30, 2026", status: "pending" },
    { id: "INV-2026-0231", amount: "$1,000.00", dueDate: "Aug 15, 2026", status: "pending" }
  ],
  "ND-2026-0018": [
    { id: "INV-2026-0205", amount: "$2,500.00", dueDate: "July 04, 2026", status: "paid" },
    { id: "INV-2026-0220", amount: "$2,500.00", dueDate: "Aug 01, 2026", status: "pending" }
  ]
};

export const initialMeetings: Record<string, Meeting[]> = {
  "ND-2026-0042": [
    { id: "mt-1", title: "Bi-Weekly Deliverables Sync & Demo", date: "July 20, 2026", time: "11:00 AM EST", type: "upcoming", link: "https://meet.google.com/niaz-digital-client-sync", platform: "google-meet" },
    { id: "mt-2", title: "n8n Webhook Flow Integration Mapping", date: "July 28, 2026", time: "02:30 PM EST", type: "upcoming", link: "https://zoom.us/j/niazdigitalflows", platform: "zoom" },
    { id: "mt-3", title: "Apex Project Kick-off Briefing Session", date: "June 10, 2026", time: "10:00 AM EST", type: "past", link: "https://meet.google.com/niaz-digital-client-sync", platform: "google-meet" },
    { id: "mt-4", title: "Brand Strategy Review & UI Direction Round 1", date: "June 17, 2026", time: "01:00 PM EST", type: "past", link: "https://meet.google.com/niaz-digital-client-sync", platform: "google-meet" }
  ],
  "ND-2026-0018": [
    { id: "mt-21", title: "Kickoff Sync & Strategy Session", date: "July 01, 2026", time: "09:00 AM EST", type: "past", link: "https://meet.google.com/cyberdyne-sync", platform: "google-meet" }
  ]
};

export const initialMessages: Record<string, Message[]> = {
  "ND-2026-0042": [
    { id: "msg-1", sender: "system", senderName: "Niaz Digital Console", text: "Secure dynamic client workspace compiled. Hello John! This is your live conversation thread with Azhar Uddin and the development team.", timestamp: "June 10, 2026 10:05 AM" },
    { id: "msg-2", sender: "manager", senderName: "Azhar Uddin", text: "Welcome John! I've uploaded the initial contract agreements in our 'Files' compartment. Feel free to review.", timestamp: "June 10, 2026 10:30 AM" },
    { id: "msg-3", sender: "client", senderName: "John Doe", text: "Awesome, signing now. Looking forward to beautiful layouts!", timestamp: "June 10, 2026 11:15 AM" },
    { id: "msg-4", sender: "manager", senderName: "Azhar Uddin", text: "Hey John, I have completed the Phase 1 strategy wireframes. Let me know your thoughts on the typography scales inside the PDF.", timestamp: "June 18, 2026 04:20 PM" },
    { id: "msg-5", sender: "client", senderName: "John Doe", text: "Approved the wireframes! The layout map looks extremely streamlined.", timestamp: "June 20, 2026 10:00 AM" },
    { id: "msg-6", sender: "manager", senderName: "Azhar Uddin", text: "Fantastic. Just pushed the NextJS structure live on our Dev instance. Let's sync about the glassmorphic overlays hero during our upcoming meeting.", timestamp: "Yesterday 05:45 PM" }
  ],
  "ND-2026-0018": [
    { id: "msg-21", sender: "system", senderName: "Niaz Digital Console", text: "Project initialized.", timestamp: "July 01, 2026" }
  ]
};

export const initialApprovals: Record<string, ApprovalItem[]> = {
  "ND-2026-0042": [
    { id: "app-1", title: "Approve Brand Strategy & Typography Directions", type: "branding", status: "approved", signedBy: "John Doe", timestamp: "June 20, 2026 10:01 AM" },
    { id: "app-2", title: "Approve High-Fidelity UI/UX Layouts Mockups", type: "design", status: "approved", signedBy: "John Doe", timestamp: "June 28, 2026 02:40 PM" },
    { id: "app-3", title: "Approve React Component Matrices & Assembly", type: "development", status: "pending" },
    { id: "app-4", title: "Approve Production Deployment & Delivery Launch", type: "final", status: "pending" }
  ],
  "ND-2026-0018": [
    { id: "app-21", title: "Branding direction approval", type: "branding", status: "pending" }
  ]
};

export const initialTickets: Record<string, SupportTicket[]> = {
  "ND-2026-0042": [
    {
      id: "TCK-4819",
      title: "HubSpot webhook verification fails with 401 signature error",
      priority: "high",
      status: "in_progress",
      replies: [
        { id: "rp-1", author: "John Doe", text: "When we trigger form test entries in HubSpot we receive an invalid credential response in our logs. Could we inspect the client secrets bindings?", date: "July 12, 2026" },
        { id: "rp-2", author: "Azhar Uddin", text: "Inspected the logs. The signature decryption is expecting our local secrets block, but HubSpot is sending standard auth. We are updating the route handler checks today to accommodate both.", date: "July 13, 2026" }
      ]
    },
    {
      id: "TCK-4731",
      title: "Safari desktop layout horizontal overflow on case study comparison slider",
      priority: "medium",
      status: "resolved",
      replies: [
        { id: "rp-3", author: "John Doe", text: "The slider is forcing a horizontal scrolling bar on my Safari. Works perfectly on Chrome though.", date: "July 02, 2026" },
        { id: "rp-4", author: "Azhar Uddin", text: "Identified a missing 'overflow-x-hidden' class on the container parent. Hotfix is now live on the preview site.", date: "July 03, 2026" }
      ]
    }
  ],
  "ND-2026-0018": []
};

export const initialNotifications: NotificationItem[] = [
  { id: "not-1", type: "success", title: "Invoice Paid", text: "Apex Ventures paid Invoice INV-2026-0199 ($2,500.00).", timestamp: "July 05, 2026", read: false },
  { id: "not-2", type: "mention", title: "Azhar Uddin mentioned you", text: "@John, I have added the updated responsive prototypes inside the Deliverables compartment.", timestamp: "Yesterday", read: false },
  { id: "not-3", type: "warning", title: "Upcoming Sync Meeting", text: "Bi-Weekly Sync Meeting starts tomorrow at 11:00 AM.", timestamp: "Today", read: false },
  { id: "not-4", type: "info", title: "System Assembly Build", text: "React production assembly build compiled successfully. Performance index at 99%.", timestamp: "July 12, 2026", read: true }
];
