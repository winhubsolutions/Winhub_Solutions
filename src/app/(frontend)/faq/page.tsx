import React from "react";
import type { Metadata } from "next";
import LiveFaqView from "@/components/pages/LiveFaqView";
import { ALL_SERVICES_FAQS, ServiceFAQItem } from "@/data/allFaqData";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | All Services & Engineering | Winhub Solutions",
  description:
    "Comprehensive answers regarding website development, custom software, mobile apps, AI automation, OJS publishing, UI/UX, e-commerce, and digital marketing.",
  alternates: {
    canonical: "https://winhubsolutions.com/faq",
  },
  openGraph: {
    title: "FAQ & Engineering Knowledge Base | Winhub Solutions",
    description:
      "Explore detailed answers covering all services offered by Winhub Solutions: web, mobile, AI agents, OJS academic publishing, and enterprise cloud stacks.",
    url: "https://winhubsolutions.com/faq",
    siteName: "Winhub Solutions",
    type: "website",
  },
};

const CMS_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

async function getFaqPageData() {
  try {
    const res = await fetch(`${CMS_URL}/api/pages?where[slug][equals]=faq&limit=1&depth=2`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      return data?.docs?.[0] || null;
    }
  } catch (e) {}
  return null;
}

async function getDynamicFaqs(): Promise<ServiceFAQItem[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/faqs?limit=100`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data?.docs) && data.docs.length > 0) {
        const dynamicItems: ServiceFAQItem[] = data.docs.map((doc: any, i: number) => ({
          id: `cms-faq-${doc.id || i}`,
          serviceSlug: "general",
          serviceTitle: "General Questions",
          category: doc.category || "General & Engagement",
          question: doc.question,
          answer: doc.answer,
        }));
        return [...dynamicItems, ...ALL_SERVICES_FAQS];
      }
    }
  } catch (e) {}
  return ALL_SERVICES_FAQS;
}

export default async function FAQPage() {
  const [cmsPage, allFaqs] = await Promise.all([
    getFaqPageData(),
    getDynamicFaqs(),
  ]);

  // Schema.org FAQPage JSON-LD covering all service pillars
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.slice(0, 25).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LiveFaqView initialDoc={cmsPage} allFaqs={allFaqs} />
    </>
  );
}
