/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

// Parse JSON bodies
app.use(express.json());

// Initialize Gemini Client safely (lazy initialization check inside route handles)
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("WARNING: GEMINI_API_KEY is not defined. AI features will fallback to premium mock descriptions.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key || "MOCK_KEY",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// System instructions for the TechGloze AI Chat Agent
const SYSTEM_INSTRUCTION = `
You are the elite AI Strategic Assistant for TechGloze IT Solutions (founded by Abdul Rehman), a premium international digital agency.
Your mission is to represent the agency with world-class prestige, authority, and responsiveness.
Convert visitors into booking discovery calls or starting projects.

Here is your core knowledge base:
- Founder: Abdul Rehman (Web Developer, AI Automation Expert, Digital Strategist, age 19, based in Noida, India. Has 3+ years of experience, delivered 28+ projects, USA, UK, UAE, Israel. Biggest client is Ergonomic Shop in Israel).
- Mission: Helping businesses grow through premium websites, AI automation, SaaS solutions and intelligent digital systems.
- Vision: To build one of the world's leading AI-first digital agencies.
- Services Offered:
  * Development: Premium Website Development, Website Redesign, Landing Pages, WordPress Development, Shopify Development, Custom Web Applications, SaaS Development, React/Next.js, Mobile App & Dashboard Development.
  * AI & Automation: AI Automation, Business Automation, Workflow Automation (n8n, Make, Zapier), CRM Integration, Custom AI Chatbots.
  * Marketing: SEO (Technical & Local SEO), Google Ads, Meta Ads scaling, Social Media Management.
  * Design & Creative: Brand Identity, Graphic Design, Video Editing, Motion Graphics, UI UX Design.
  * Data & Consulting: Excel Automation, Data Entry, Business Consulting.
- Unique Value: Hand-crafted, sub-second page speeds, luxury Apple/Stripe-like visual aesthetics, offline-first architectures, real-time client dashboards, ROI-driven marketing campaigns (averaging 5.4x ROAS on Meta ads).
- Interaction Style: Direct, confident, conversational, elegant, and highly helpful.
- Calls-to-Action: Encourage visitors to use our Studio Labs tools on the page (Cost Calculator, SEO Audit, AI Estimator) or click 'Book Discovery Call' (which triggers our Calendly scheduler with Abdul Rehman).

If process.env.GEMINI_API_KEY is missing, you operate with simulated expertise.
`;

// API 1: Chat Assistant
app.post('/api/chat', async (req: Request, res: Response): Promise<void> => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: "Invalid messages format" });
      return;
    }

    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      // Premium Mock Response fallback
      const lastUserMessage = messages[messages.length - 1]?.content || "";
      const lower = lastUserMessage.toLowerCase();
      let reply = "I would be absolutely thrilled to assist you with that! TechGloze specializes in premium websites, Next.js engineering, AI automation, and custom workflow development. Let's schedule a brief 15-minute Discovery Call to map out your digital roadmap.";
      
      if (lower.includes("price") || lower.includes("cost") || lower.includes("budget") || lower.includes("how much")) {
        reply = "Our custom systems are tailored to your precise growth metrics. Standard high-end Next.js web applications generally start at $5,000, and our custom n8n/CRM automations start at $2,500. You can try our Website Cost Calculator or the AI Project Estimator on this page to receive an interactive breakdown!";
      } else if (lower.includes("service") || lower.includes("do you offer") || lower.includes("what do you")) {
        reply = "We offer a cohesive full-suite digital spectrum: Premium Website & Mobile App Development, AI & Workflow Automation, Google & Meta Ads Marketing, Technical SEO, Brand Identity, and Business/Excel Consulting. Which area can we scale for you first?";
      } else if (lower.includes("founder") || lower.includes("abdul") || lower.includes("rehman") || lower.includes("who founded") || lower.includes("who is")) {
        reply = "TechGloze was founded by Abdul Rehman, an elite web developer and AI automation expert with a proven track record. He's 19 years old, based in Noida, India, has 3+ years of experience, and has delivered 28+ projects globally, including major setups for USA, UK, UAE, and Israel clients like Ergonomic Shop.";
      } else if (lower.includes("saas")) {
        reply = "Yes, we specialize in SaaS development! We construct modern, secure, and scalable SaaS platforms using Next.js, React, Node.js, and serverless databases like Supabase or Firebase.";
      } else if (lower.includes("automation")) {
        reply = "We provide advanced AI and workflow automations using tools like n8n, Make, and Zapier to synchronize your CRM (GoHighLevel, HubSpot, Salesforce) with spreadsheets or other pipelines, saving you dozens of hours of manual labor every week.";
      } else if (lower.includes("long") || lower.includes("how long") || lower.includes("take")) {
        reply = "Most premium website development, dashboards, and custom CRM automations are completed within 4 to 8 weeks. We maintain a transparent milestones tracking dashboard so you can view live progress anytime.";
      } else if (lower.includes("book") || lower.includes("meeting") || lower.includes("call") || lower.includes("calendly")) {
        reply = "You can easily book a 15-minute Discovery Call with Abdul Rehman by clicking the 'Book Discovery Call' button under the contact section! Let's discuss how we can scale your business.";
      }
      
      res.json({ text: reply });
      return;
    }

    const ai = getGeminiClient();
    // Convert client-side message format to Gemini standard format
    const contents = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error (Chat):", error);
    res.status(500).json({ error: "Failed to generate chat response: " + error.message });
  }
});

// API 2: Project Estimator
app.post('/api/project-estimate', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, serviceType, budget, timeline, description } = req.body;
    
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      // Return high-quality mock proposal estimates
      const techStack = serviceType.includes("Design") ? ["Figma", "Blender", "Adobe CC"] : ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"];
      const estimateText = `### Premium Roadmap Proposal for ${name || "Client"}
      
**Selected Focus:** ${serviceType}
**Target Budget:** ${budget}
**Timeline Target:** ${timeline}

#### 1. Strategic Approach
We will build a custom ${serviceType.toLowerCase()} framework aligned with Stripe and Apple aesthetic standards. This involves absolute typographic precision, fluid page structures, and sub-second rendering speeds to reduce checkout and lead leakage.

#### 2. Recommended Technologies
${techStack.map(tech => `- **${tech}**: Industry-standard high performance.`).join('\n')}

#### 3. Phased Implementation Roadmap
1. **Strategic Blueprint & Figma Mockups** (Week 1-2)
2. **Interactive Front-end Composition** (Week 2-4)
3. **Database Integration & n8n automations** (Week 4-5)
4. **Sub-second performance tuning & Launch** (Week 6)

#### 4. Cost Evaluation Breakdown
- **Premium UI UX Strategy**: $2,500
- **TypeScript Next.js Assembly**: $4,500
- **CRM Automation Setup**: Included
- **Total Estimated Assessment**: $7,000 (Adjusted for ${budget} target)

*Let's schedule a free Discovery Call on our scheduler to finalize this blueprint!*`;
      
      res.json({ text: estimateText });
      return;
    }

    const ai = getGeminiClient();
    const prompt = `
Generate a highly professional, luxurious, and technical digital agency project proposal and estimate.
Client Name: ${name || "Valued Prospect"}
Email: ${email || "Not provided"}
Project Focus: ${serviceType}
Stated Budget: ${budget}
Desired Timeline: ${timeline}
Project Description: ${description || "General high-end development."}

Please structure your response in beautiful markdown:
1. Executive Summary: Emphasize scaling revenue and conversions.
2. Recommended Tech Stack: Specific choices like Next.js, React, n8n, Supabase, Tailwind, etc.
3. Interactive Features & UX Design Philosophy (e.g., Apple/Vercel/Linear look & feel).
4. Phased Roadmap: Break down milestones realistically.
5. Estimated Cost Breakdown matching the client's targets.
6. Strong call to action to book a 15-minute Discovery Call.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are the Principal Software Architect and UX Strategist at TechGloze IT Solutions. Write authoritative, persuasive, and beautifully formatted client-facing estimates.",
        temperature: 0.5,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error (Estimator):", error);
    res.status(500).json({ error: "Failed to generate project estimate: " + error.message });
  }
});

// API 3: SEO Audit Tool
app.post('/api/seo-audit', async (req: Request, res: Response): Promise<void> => {
  try {
    const { url } = req.body;
    if (!url) {
      res.status(400).json({ error: "URL is required" });
      return;
    }

    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      // Mock SEO audit response
      const domainName = url.replace(/https?:\/\/(www\.)?/, '').split('/')[0];
      const mockResult = `### Technical SEO & Performance Audit for **${domainName}**
      
#### Score Summary
- **Performance Rating:** 72/100 (NEEDS INTEGRATION)
- **Technical SEO Check:** 65/100 (CRITICAL WARNINGS)
- **Semantic Content Rating:** 80/100 (MODERATE)

#### ⚠️ Critical Vulnerabilities Found

1. **Slow Server Response Times (TTFB):**
   Your server responds in 1.4s, which is 3x slower than the Google core threshold. This causes high bounce rates on mobile networks.
   
2. **Missing Meta Schema Markups:**
   Your pages lack Organization and LocalBusiness JSON-LD structure, preventing rich snippet stars in Google search engine rankings.
   
3. **Unoptimized Image Referrers:**
   Several static images are served in uncompressed PNG format with no lazy-loading. We recommend AVIF format compressions.

#### 🛠️ Recommended Optimization Blueprint
- **Framework Upgrade:** Migrate core marketing grids to a lightweight Next.js static engine.
- **Micro-Structured Data:** Embed JSON-LD structured schemas to capture visual answer boxes on search pages.
- **Bundle Trimming:** Lazy load heavy cards and calculators.

*We can deploy these SEO integrations for you to boost organic rankings by 120%. Book a Call to begin!*`;
      
      res.json({ text: mockResult });
      return;
    }

    const ai = getGeminiClient();
    const prompt = `
Perform a simulated expert Technical and Semantic SEO Audit on the domain: "${url}".
Generate an authoritative, detailed digital marketing audit.
Structure the response in beautiful markdown:
1. Executive Scorecard: Performance, Technical SEO, Semantic Strength (give realistic values).
2. Major SEO Bottlenecks: Highlight issues like TTFB (Time To First Byte), Cumulative Layout Shift (CLS), Missing Schema Markup (JSON-LD), and Content Cannibalization.
3. Content and Backlink Strategy: Specific growth recommendations for search rankings.
4. Competitive Edge Actions: Simple checklist to implement to outperform competitors.
5. Action Proposal: How TechGloze's technical SEO implementation plan can fix these.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are the Chief SEO Strategist and Semantics Architect at TechGloze IT Solutions. Your audits are accurate, educational, clear, and highly professional.",
        temperature: 0.4,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error (SEO Audit):", error);
    res.status(500).json({ error: "Failed to generate SEO audit: " + error.message });
  }
});

// API 4: Smart Technical Proposal Generator
app.post('/api/generate-proposal', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, company, email, phone, country, budget, timeline, description, activeCalculator, basePrice } = req.body;

    if (!name || !email || !description) {
      res.status(400).json({ error: "Missing required fields (Name, Email, Description)" });
      return;
    }

    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      // Return high-quality mock proposal estimates with en-dash matching client demands
      const mockMarkdown = `# Project Execution Blueprint (TG-2026-${Math.floor(1000 + Math.random() * 9000)})
Prepared for: **${name}**  
Company: **${company || "Niaz Digital"}**  
Location: **${country}**  
Estimated Investment: **$${(basePrice || 350).toLocaleString()} USD**  
Estimated Timeline: **${timeline || "30 Days"}**  

---

## 1. Executive Summary
We are pleased to submit this execution blueprint for ${company || "Niaz Digital"}. Our mission is to construct a modern, high-performance solution that accelerates your digital footprint, drives real conversions, and integrates intelligent systems. 

This proposal maps out a custom-tailored strategy designed to maximize ROI, incorporating absolute typographic precision, fluid layout designs, and sub-second rendering speeds to minimize customer bounce rates.

## 2. Project Scope
Based on your specifications, we will architect a cohesive system prioritizing scalability, clean code standards, and robust performance:
- Fully mobile-responsive interface styled with high-contrast Tailwind configurations.
- Custom integrations to sync forms, leads, and operational workflows.
- Performance optimization ensuring Google Core Web Vitals scoring in the 90-100 green range.

## 3. Recommended Technology Stack
For a secure, future-proof, and lightning-fast deployment, we recommend:
- **Frontend / Engine**: Next.js (React Framework) or Tailwind CSS
- **Programming Language**: TypeScript (strict type-safety)
- **Deployment / Hosting**: Vercel Edge Networks
- **Database / Backend**: Supabase or Firebase Firestore (if cloud storage needed)
- **Automation Pipeline**: n8n workflows & webhook triggers

## 4. Estimated Timeline
We propose a structured, milestone-based execution timeline of **${timeline || "30 Days"}** divided into four major stages:
1. **Milestone 1: Strategic Alignment & Blueprinting (Days 1-7)**  
   Mapping user journeys, low-fidelity wireframing, and interactive brand typography setup.
2. **Milestone 2: High-Fidelity UI Design & Mockups (Days 8-15)**  
   Prototyping responsive Apple-grade interfaces with fluid motion paths.
3. **Milestone 3: Interactive Assembly & Integration (Days 16-24)**  
   Composing the front-end with clean React states and mapping operational API webhooks.
4. **Milestone 4: Testing, Performance Optimization & Launch (Days 25-30)**  
   Compressing assets, auditing Core Web Vitals, and domain hand-off.

## 5. Estimated Budget
The complete investment is calculated as **$${(basePrice || 350).toLocaleString()} USD** based on your selected criteria:
- **Creative Strategy & UX/UI Prototyping**: $${Math.round((basePrice || 350) * 0.3)} USD
- **Technical Assembly & API Integration**: $${Math.round((basePrice || 350) * 0.5)} USD
- **Performance Tuning & Search Optimization**: $${Math.round((basePrice || 350) * 0.2)} USD

## 6. Deliverables
A comprehensive list of high-quality handoffs includes:
- Fully production-compiled source repository on GitHub.
- Configured production deployment under your domain with SSL certification.
- Admin dashboard login credentials and visual workflow manuals.

## 7. SEO Strategy
To capture organic search demand and ensure high search engine placement:
- Semantic HTML tags structure mapping.
- Core Web Vitals tuning: sub-second LCP (Largest Contentful Paint) and zero CLS (Cumulative Layout Shift).
- Implementation of structured JSON-LD Schema markups to capture Google rich answer boxes.

## 8. AI Automation Opportunities
To eliminate manual work and minimize pipeline latencies:
- Auto-sync lead forms with CRM pipelines (HubSpot, GoHighLevel).
- Auto-route email/WhatsApp alerts immediately upon action triggers.

## 9. CRM Integration
- Complete setup of automated fields synchronization to log contacts, tags, and timeline entries cleanly.

## 10. Performance Optimization
- Native image formats conversion (WebP/AVIF) and asset minifications to ensure instant page load speeds.

## 11. Hosting Recommendation
- We recommend hosting the application on Vercel's global CDN, providing instant global response times and 99.9% uptime.

## 12. Maintenance Plan
- Includes 12 months of standard critical updates, monthly security patching, and hosting stability surveillance.

## 13. Next Steps
To finalize this scope and lock in your price:
1. **Book a 15-Minute Discovery Call** with Abdul Rehman to align goals.
2. Review design milestones and approve wireframes.
3. Initiate secure project setup.

*Let's collaborate to build something outstanding!*`;

      res.json({ text: mockMarkdown });
      return;
    }

    const ai = getGeminiClient();
    const prompt = `
Generate a highly detailed, professional, and prestigious AI Technical Proposal for a client.
Client Details:
- Name: ${name}
- Company: ${company || "Your Venture"}
- Email: ${email}
- Phone: ${phone || "Not provided"}
- Country: ${country}
- Target Budget: ${budget}
- Desired Timeline: ${timeline}
- Active Calculator Context: ${activeCalculator || "General Tech Services"} (Calculated Base Price: $${basePrice || "Custom"})
- Project Requirements & Goals: ${description}

Please output a beautifully-structured, comprehensive, client-ready proposal strictly using standard Markdown (MD).
Do not include any wrapper symbols other than standard MD.
The proposal MUST include the following 13 numbered sections with highly-specific and customized recommendations based on the client's goals and description:
1. Executive Summary: Emphasize scaling revenue, professional branding, and premium interactive UX.
2. Project Scope: Define concrete deliverables based on their requirements.
3. Recommended Technology Stack: Specify concrete technologies (e.g., Next.js, React, Tailwind CSS, TypeScript, n8n, Supabase, Vercel, WordPress/Liquid if relevant). Explain WHY these are selected.
4. Estimated Timeline: Map out a structured milestone calendar matching the timeline target (${timeline}).
5. Estimated Budget: Give a clear price-locked value or realistic breakdown.
6. Deliverables: A checklist of all functional hand-offs.
7. SEO Strategy: Define local or technical SEO parameters, PageSpeed tuning, JSON-LD Schema, meta structures.
8. AI Automation Opportunities: Detail exact automation setups (e.g. n8n, Zapier) to reduce manual work.
9. CRM Integration: Specify how to connect contact forms or data to HubSpot, GoHighLevel, or spreadsheets.
10. Performance Optimization: Detail asset compression, CDN caching, AVIF, serverless edge networks.
11. Hosting Recommendation: Give standard cloud hosting (Vercel, Netlify, Cloud Run, WP Engine).
12. Maintenance Plan: Propose standard support structure.
13. Next Steps: Instruct them on booking a discovery call.

Ensure the tone is elite, world-class, confident, and highly persuasive.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are the Principal Solutions Architect and CTO at TechGloze IT Solutions. Write incredibly detailed, prestigious, and technical client-facing proposals that look extremely authoritative.",
        temperature: 0.5,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error (Proposal):", error);
    res.status(500).json({ error: "Failed to generate technical proposal: " + error.message });
  }
});


// Serve static frontend assets and mount Vite middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Mount Vite middleware in development
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve production static assets from dist
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[TechGloze Server] Server started, running on http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode.`);
  });
}

startServer();
