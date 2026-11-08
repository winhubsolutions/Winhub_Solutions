import React from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import DynamicBlocks from "@/components/blocks/DynamicBlocks";
import RichTextRenderer from "@/components/ui/RichTextRenderer";

const CMS_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function GenericDynamicPage({ params }: PageProps) {
  const { slug } = await params;

  // Reserved routes that have their own static/dedicated page handlers
  const reserved = [
    "services",
    "portfolio",
    "work",
    "technologies",
    "blog",
    "insights",
    "contact",
    "about",
    "faq",
    "faqs",
    "admin",
    "api",
    "control",
  ];
  if (reserved.includes(slug)) {
    return notFound();
  }

  try {
    const res = await fetch(`${CMS_URL}/api/pages?where[slug][equals]=${slug}&limit=1`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const data = await res.json();
      if (data?.docs?.length > 0) {
        const page = data.docs[0];
        return (
          <div className="min-h-screen flex flex-col bg-[#F6F6F4] dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-[#F6F6F4] transition-colors duration-300">
            <Navbar />
            <main className="flex-1">
              {page.blocks && page.blocks.length > 0 ? (
                <DynamicBlocks blocks={page.blocks} />
              ) : (
                <div className="max-w-4xl mx-auto px-4 py-24 text-center">
                  <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-[#0A0A0A] dark:text-white">
                    {page.title}
                  </h1>
                  {page.heroHeadline && (
                    <p className="text-xl text-[#666666] dark:text-[#A0A0A8] mb-8">
                      {page.heroHeadline}
                    </p>
                  )}
                  {page.heroSubtitle && (
                    <p className="text-base text-[#666666] dark:text-[#A0A0A8] leading-relaxed max-w-2xl mx-auto">
                      {page.heroSubtitle}
                    </p>
                  )}
                </div>
              )}

              {page.pageContent && (
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
                  <RichTextRenderer data={page.pageContent} />
                </div>
              )}
            </main>
            <Footer />
          </div>
        );
      }
    }
  } catch (err) {}

  return notFound();
}

