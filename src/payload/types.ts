/**
 * Winhub Solutions - Payload CMS TypeScript Type Definitions
 */

export interface MediaItem {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  sizes?: {
    thumbnail?: { url: string; width: number; height: number };
    card?: { url: string; width: number; height: number };
    hero?: { url: string; width: number; height: number };
  };
}

export interface SEOMetadata {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  ogImage?: MediaItem | string;
  canonicalUrl?: string;
}

export interface ServiceDoc {
  id: string;
  title: string;
  slug: string;
  category?: string;
  shortDescription?: string;
  h1Heading: string;
  content?: any;
  expertiseList?: { item: string }[];
  features?: { title: string; desc: string }[];
  benefits?: { title: string; desc: string }[];
  processSteps?: { step?: string; title: string; desc: string }[];
  technologies?: { name: string }[];
  faqs?: { question: string; answer: string }[];
  seo?: SEOMetadata;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectDoc {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: string;
  featured?: boolean;
  year?: string;
  shortDescription: string;
  heroImage?: MediaItem | string;
  metrics?: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  seo?: SEOMetadata;
  createdAt: string;
  updatedAt: string;
}

export interface TechnologyDoc {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "cms" | "cloud" | "ai";
  iconIdentifier?: string;
  description?: string;
  featured?: boolean;
  order?: number;
}

export interface BlogPostDoc {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  excerpt: string;
  featuredImage?: MediaItem | string;
  content: any;
  tags?: { tag: string }[];
  seo?: SEOMetadata;
}

export interface TestimonialDoc {
  id: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  quote: string;
  projectDelivered?: string;
  avatar?: MediaItem | string;
  featured?: boolean;
}

export interface FAQDoc {
  id: string;
  question: string;
  answer: string;
  category: "general" | "ojs" | "angular" | "react" | "ai" | "support";
  order?: number;
}

export interface SiteSettingsDoc {
  companyName: string;
  tagline: string;
  headquarters: string;
  registeredAddress: string;
  contacts: {
    email: string;
    phone: string;
    whatsapp?: string;
  };
  telemetryStatus: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
  };
}
