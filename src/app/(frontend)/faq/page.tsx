import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import FAQPageClient from "./FAQPageClient";
import { ALL_SERVICES_FAQS } from "@/data/allFaqData";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | All Services & Engineering | Winhub Solutions",
  description:
    "Comprehensive answers regarding website development, custom software, mobile apps, AI automation, OJS publishing, UI/UX, e-commerce, and digital marketing.",
  alternates: {
    canonical: "https://winhubsolutions.in/faq",
  },
  openGraph: {
    title: "FAQ & Engineering Knowledge Base | Winhub Solutions",
    description:
      "Explore detailed answers covering all services offered by Winhub Solutions: web, mobile, AI agents, OJS academic publishing, and enterprise cloud stacks.",
    url: "https://winhubsolutions.in/faq",
    siteName: "Winhub Solutions",
    type: "website",
  },
};

export default function FAQPage() {
  // Schema.org FAQPage JSON-LD covering all service pillars
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_SERVICES_FAQS.slice(0, 25).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F4] dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-[#F6F6F4] selection:bg-[#FF7120] selection:text-white transition-colors duration-300">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="flex-1">
        <FAQPageClient initialFaqs={ALL_SERVICES_FAQS} />
      </main>

      <Footer />
    </div>
  );
}
