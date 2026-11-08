import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LivePageView from "@/components/pages/LivePageView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const CMS_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

async function getPageDoc(slug: string) {
  try {
    const res = await fetch(
      `${CMS_URL}/api/pages?where[slug][equals]=${encodeURIComponent(slug)}&limit=1&depth=2`,
      { cache: "no-store" }
    );
    if (res.ok) {
      const data = await res.json();
      return data?.docs?.[0] || null;
    }
  } catch (e) {}
  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageDoc(slug);
  if (!page) return {};

  const title =
    page?.seo?.metaTitle ||
    page?.metaTitle ||
    `${page.title} | Winhub Solutions`;

  const description =
    page?.seo?.metaDescription ||
    page?.metaDescription ||
    page?.heroSubtitle ||
    page?.heroHeadline ||
    "";

  return {
    title,
    description,
    alternates: {
      canonical: `https://winhubsolutions.com/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://winhubsolutions.com/${slug}`,
      siteName: "Winhub Solutions",
      type: "website",
    },
  };
}

export default async function GenericDynamicPage({ params }: PageProps) {
  const { slug } = await params;

  // Reserved internal system routes
  const systemRoutes = ["admin", "api", "control", "services", "portfolio", "blog", "home"];
  if (systemRoutes.includes(slug)) {
    return notFound();
  }

  const page = await getPageDoc(slug);
  if (!page) {
    return notFound();
  }

  return <LivePageView initialPage={page} />;
}
