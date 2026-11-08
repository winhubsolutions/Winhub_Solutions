import React from "react";
import type { Metadata } from "next";
import LiveContactView from "@/components/pages/LiveContactView";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Technical Consultation | Winhub Solutions",
  description:
    "Connect with Winhub Solutions in Warangal and Hyderabad. Request a technical consultation, project estimate, or dedicated engineering team.",
  alternates: {
    canonical: "https://winhubsolutions.com/contact",
  },
  openGraph: {
    title: "Contact Winhub Solutions | Software Engineering & IT Consultation",
    description:
      "Initiate technical discovery with Winhub Solutions. Dual offices in Warangal and Hyderabad, India.",
    url: "https://winhubsolutions.com/contact",
    siteName: "Winhub Solutions",
    type: "website",
  },
};

async function getContactPageData() {
  try {
    const serverUrl =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
    const res = await fetch(`${serverUrl}/api/pages?where[slug][equals]=contact&limit=1&depth=2`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      return data?.docs?.[0] || null;
    }
  } catch (e) {}
  return null;
}

export default async function ContactPage() {
  const cmsPage = await getContactPageData();
  return <LiveContactView initialDoc={cmsPage} />;
}
