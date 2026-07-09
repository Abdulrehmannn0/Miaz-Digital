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

// System instructions for the NiazDigital AI Chat Agent
const SYSTEM_INSTRUCTION = `
You are the elite AI Strategic Assistant for NiazDigital (founded by Niaz Ahmed), a premium international digital agency.
Your mission is to represent the agency with world-class prestige, authority, and responsiveness.
Convert visitors into booking discovery calls or starting projects.

Here is your core knowledge base:
- Founder: Niaz Ahmed (Digital Architect, over a decade of international experience scaling startups and enterprise solutions).
- Services Offered:
  * Design: UI/UX & Product Design (Figma systems), Brand Identity, Minimalist Logos, Packaging, Presentation Slide decks.
  * Development: Custom Next.js/React/TypeScript apps, Mobile App Dev (React Native/Flutter), Shopify Plus, WordPress, E-commerce, landing pages.
  * Marketing: Meta Ads (Facebook/Instagram campaigns, Reels, Video Editing), Google Ads (PMax), LinkedIn B2B, SEO (technical & local SEO).
  * AI & Automation: CRM Syncs (HubSpot/Salesforce), Make.com, Zapier, n8n integration, Custom Chatbots.
  * Data & Business: Advanced Excel macro scripting, Power BI, custom spreadsheets, lead generation.
- Unique Value: Hand-crafted, sub-second page speeds, luxury Apple/Stripe-like visual aesthetics, offline-first architectures, real-time client dashboards, ROI-driven marketing campaigns (averaging 4.8x ROAS).
- Interaction Style: Direct, confident, conversational, elegant, and highly helpful.
- Calls-to-Action: Encourage visitors to use our Studio Labs tools on the page (Cost Calculator, ROI Calculator, AI Estimator) or click 'Book Discovery Call' (which triggers our Calendly scheduler).

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
      let reply = "I would be absolutely thrilled to assist you with that! NiazDigital specializes in premium design, Next.js engineering, and custom automation. Let's schedule a brief 15-minute Discovery Call to map out your digital roadmap.";
      
      if (lower.includes("price") || lower.includes("cost") || lower.includes("budget")) {
        reply = "Our custom solutions are tailored to your precise growth metrics. Standard high-end Next.js web applications generally start at $5,000. You can try our Website Cost Calculator or the AI Project Estimator on this page to receive an interactive breakdown!";
      } else if (lower.includes("service") || lower.includes("do you offer") || lower.includes("what do you")) {
        reply = "We offer a cohesive full-suite digital spectrum: Design (Figma UI/UX, brand identity), Development (Next.js, React, Mobile Apps), Marketing (Meta and Google Ads, viral Reels editing, technical SEO), and Enterprise AI Automation (n8n, CRM synchronizations, custom spreadsheets). Which area can we scale for you first?";
      } else if (lower.includes("founder") || lower.includes("niaz") || lower.includes("team")) {
        reply = "NiazDigital was founded by Niaz Ahmed, a master digital architect and advertising growth specialist with a decade of global experience. He works directly as the lead consultant on every project to maintain pristine quality, with no diluted junior teams.";
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
        systemInstruction: "You are the Principal Software Architect and UX Strategist at NiazDigital. Write authoritative, persuasive, and beautifully formatted client-facing estimates.",
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
5. Action Proposal: How NiazDigital's technical SEO implementation plan can fix these.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are the Chief SEO Strategist and Semantics Architect at NiazDigital. Your audits are accurate, educational, clear, and highly professional.",
        temperature: 0.4,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error (SEO Audit):", error);
    res.status(500).json({ error: "Failed to generate SEO audit: " + error.message });
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
    console.log(`[NiazDigital Server] Server started, running on http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode.`);
  });
}

startServer();
