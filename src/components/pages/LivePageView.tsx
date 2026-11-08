"use client";

import React from "react";
import { useLivePreview } from "@payloadcms/live-preview-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import DynamicBlocks from "@/components/blocks/DynamicBlocks";
import RichTextRenderer from "@/components/ui/RichTextRenderer";

interface LivePageViewProps {
  initialPage: any;
}

export default function LivePageView({ initialPage }: LivePageViewProps) {
  const serverOrigin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "http://localhost:3000";

  const { data: livePage } = useLivePreview({
    initialData: initialPage,
    serverURL: serverOrigin,
    depth: 2,
  });

  const page = livePage || initialPage || {};

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F4] dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-[#F6F6F4] transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {page.blocks && page.blocks.length > 0 ? (
          <DynamicBlocks blocks={page.blocks} />
        ) : (
          <div className="max-w-4xl mx-auto px-4 py-24 text-center">
            <h1 className="text-4xl sm:text-6xl font-black mb-6 text-[#0A0A0A] dark:text-white uppercase tracking-tight">
              {page.title}
            </h1>
            {page.heroHeadline && (
              <p className="text-xl text-[#FF7120] font-mono mb-4">
                {page.heroHeadline}
              </p>
            )}
            {page.heroSubtitle && (
              <p className="text-base text-[#6E6E6A] dark:text-[#A0A09B] leading-relaxed max-w-2xl mx-auto">
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

