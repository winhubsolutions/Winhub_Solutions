import React from "react";
import type { Metadata } from "next";
import LiveAboutView from "@/components/pages/LiveAboutView";

export const metadata: Metadata = {
  title: "About Us | Leading Web Development & IT Solutions Company | Winhub Solutions",
  description:
    "Learn about Winhub Solutions — delivering innovative web development, custom software, mobile applications, and AI automation.",
  alternates: {
    canonical: "https://winhubsolutions.com/about",
  },
};

async function getAboutPageData() {
  try {
    const serverUrl =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
    const res = await fetch(`${serverUrl}/api/pages?where[slug][equals]=about&limit=1&depth=2`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      return data?.docs?.[0] || null;
    }
  } catch (e) {}
  return null;
}

export default async function AboutPage() {
  const cmsPage = await getAboutPageData();
  return <LiveAboutView initialDoc={cmsPage} />;
}
