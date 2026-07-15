/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  videoUrl?: string;
  tags: string[];
  techStack: string[];
  duration: string;
  results: string;
  clientReview?: {
    author: string;
    role: string;
    avatar: string;
    rating: number;
    comment: string;
  };
  liveUrl?: string;
  caseStudyId?: string;
  // Redesign fields
  countryBadge?: string;
  industryBadge?: string;
  projectType?: string;
  servicesUsed?: string[];
  shortDescription?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  heroImage: string;
  challenge: string;
  strategy: string;
  solution: string;
  technologies: string[];
  process: string[];
  before: {
    metrics: string;
    image?: string;
  };
  after: {
    metrics: string;
    image?: string;
  };
  results: {
    label: string;
    value: string;
    growth: string;
  }[];
  // Redesign fields
  overview?: string;
  services?: string[];
  screenshots?: string[];
  gallery?: string[];
  testimonial?: {
    author: string;
    role: string;
    comment: string;
    avatar?: string;
  };
  relatedProjectIds?: string[];
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  readingTime: string;
  publishedAt: string;
  tags: string[];
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface FounderProfile {
  name: string;
  title: string;
  image: string;
  bio: string;
  experience: string[];
  achievements: string[];
  tagline?: string;
  mission?: string;
  vision?: string;
  quote?: string;
  expertise?: string[];
  techStack?: string[];
  email?: string;
  phone?: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    github?: string;
  };
}

export type LanguageCode = 'EN' | 'ES' | 'AR' | 'DE';

export interface LanguageContent {
  nav: {
    services: string;
    portfolio: string;
    about: string;
    dashboard: string;
    tools: string;
    blog: string;
    faq: string;
    cta: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
}
