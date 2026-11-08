/**
 * Winhub Solutions - Payload CMS Client & Data Ingestion Bridge
 * Connects Next.js Frontend with Payload CMS REST/GraphQL APIs
 * Automatically provides fallback to static catalogs if Payload server is offline.
 */

import { AGENCY_CONFIG, PORTFOLIO_PROJECTS, FAQ_DATA, OJS_FAQS, ANGULAR_FAQS } from "@/data/agencyData";
import { SERVICES_CATALOG, ServiceDetail } from "@/data/servicesCatalog";
import { ServiceDoc, ProjectDoc, FAQDoc, SiteSettingsDoc } from "./types";

const CMS_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";

export async function getServices(): Promise<ServiceDoc[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/services?limit=100`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      if (data?.docs?.length > 0) return data.docs;
    }
  } catch (err) {
    // Silent fallback to static catalog
  }

  // Fallback to servicesCatalog.ts
  return SERVICES_CATALOG.map((s: ServiceDetail) => ({
    id: s.slug,
    title: s.title,
    slug: s.slug,
    category: s.shortTag,
    shortDescription: s.intro,
    h1Heading: s.h1,
    content: s.overview,
    expertiseList: s.expertise.map((item: string) => ({ item })),
    features: s.features,
    benefits: s.benefits,
    processSteps: s.process,
    technologies: s.technologies.map((name: string) => ({ name })),
    faqs: s.faqs.map((f: { q: string; a: string }) => ({ question: f.q, answer: f.a })),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }));
}

export async function getServiceBySlug(slug: string): Promise<ServiceDoc | null> {
  const all = await getServices();
  return all.find((s) => s.slug === slug) || null;
}

export async function getProjects(): Promise<ProjectDoc[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/projects?limit=100`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      if (data?.docs?.length > 0) return data.docs;
    }
  } catch (err) {}

  return PORTFOLIO_PROJECTS.map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    client: p.client,
    category: p.category,
    featured: p.featured,
    year: p.year,
    shortDescription: p.description,
    metrics: p.impactMetrics?.map((m) => `${m.value} ${m.label}`).join(" · "),
    tags: p.tags,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }));
}

export async function getFAQs(category?: string): Promise<FAQDoc[]> {
  try {
    const query = category ? `?where[category][equals]=${category}` : "";
    const res = await fetch(`${CMS_URL}/api/faqs${query}`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      if (data?.docs?.length > 0) return data.docs;
    }
  } catch (err) {}

  let list: FAQDoc[] = [];

  if (!category || category === "general") {
    list.push(...FAQ_DATA.map((f: { question: string; answer: string }, i: number) => ({
      id: `gen-${i}`,
      question: f.question,
      answer: f.answer,
      category: "general" as const,
      order: i,
    })));
  }
  if (!category || category === "ojs") {
    list.push(...OJS_FAQS.map((f: { q: string; a: string }, i: number) => ({
      id: `ojs-${i}`,
      question: f.q,
      answer: f.a,
      category: "ojs" as const,
      order: i,
    })));
  }
  if (!category || category === "angular") {
    list.push(...ANGULAR_FAQS.map((f: { q: string; a: string }, i: number) => ({
      id: `ang-${i}`,
      question: f.q,
      answer: f.a,
      category: "angular" as const,
      order: i,
    })));
  }

  return list;
}

export async function getSiteSettings(): Promise<SiteSettingsDoc> {
  try {
    const res = await fetch(`${CMS_URL}/api/globals/site-settings`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      if (data) return data;
    }
  } catch (err) {}

  return {
    companyName: AGENCY_CONFIG.name,
    tagline: AGENCY_CONFIG.tagline,
    headquarters: AGENCY_CONFIG.headquarters,
    registeredAddress: AGENCY_CONFIG.address.full,
    contacts: {
      email: AGENCY_CONFIG.contacts.email,
      phone: AGENCY_CONFIG.contacts.phone,
    },
    telemetryStatus: AGENCY_CONFIG.status,
    socialLinks: {
      linkedin: AGENCY_CONFIG.socials.find((s) => s.name === "LinkedIn")?.url,
      twitter: AGENCY_CONFIG.socials.find((s) => s.name.includes("Twitter"))?.url,
      github: AGENCY_CONFIG.socials.find((s) => s.name === "GitHub")?.url,
    },
  };
}
