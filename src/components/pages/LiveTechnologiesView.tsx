"use client";

import React from "react";
import { useLivePreview } from "@payloadcms/live-preview-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import TechIcon from "@/components/icons/TechIcons";
import DynamicBlocks from "@/components/blocks/DynamicBlocks";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface TechCategoryGroup {
  category: string;
  description: string;
  items: string[];
}

interface LiveTechnologiesViewProps {
  initialDoc: any;
  categories: TechCategoryGroup[];
}

function renderHeroHeadline(headline: string | null | undefined) {
  if (!headline) {
    return (
      <>
        Building with the <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7120] via-[#FF8A3D] to-[#E85F0F]">
          Right Technology.
        </span>
      </>
    );
  }

  if (headline.includes("|")) {
    const [part1, ...rest] = headline.split("|");
    return (
      <>
        {part1.trim()} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7120] via-[#FF8A3D] to-[#E85F0F]">
          {rest.join(" ").trim()}
        </span>
      </>
    );
  }

  if (headline.includes("\n")) {
    const lines = headline.split("\n");
    return (
      <>
        {lines[0].trim()} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7120] via-[#FF8A3D] to-[#E85F0F]">
          {lines.slice(1).join(" ").trim()}
        </span>
      </>
    );
  }

  if (headline.toLowerCase().includes("right technology")) {
    return (
      <>
        Building with the <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7120] via-[#FF8A3D] to-[#E85F0F]">
          Right Technology.
        </span>
      </>
    );
  }

  return headline;
}

export default function LiveTechnologiesView({
  initialDoc,
  categories,
}: LiveTechnologiesViewProps) {
  const serverOrigin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "http://localhost:3000";

  const { data: liveDoc } = useLivePreview({
    initialData: initialDoc,
    serverURL: serverOrigin,
    depth: 2,
  });

  const page = liveDoc || initialDoc || {};

  const headlineNode = renderHeroHeadline(page.heroHeadline);

  const subtitle =
    page.heroSubtitle ||
    "We leverage modern programming languages, frameworks, databases and development platforms to create high-performance digital solutions.";

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F4] dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero with High-Tech Atmospheric Background */}
        <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 border-b border-[#E2E2DC] dark:border-[#222228] bg-[#EFEFEA] dark:bg-[#0A0A0C] overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/images/hero-tech-bg.jpg"
              alt="Winhub IT Solutions Technology Architecture"
              className="w-full h-full object-cover object-right md:object-center opacity-30 dark:opacity-40 filter saturate-150 transform scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#EFEFEA] via-[#EFEFEA]/90 to-[#EFEFEA]/45 dark:from-[#0A0A0C] dark:via-[#0A0A0C]/90 dark:to-[#0A0A0C]/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#EFEFEA] via-transparent to-transparent dark:from-[#0A0A0C] dark:via-transparent to-transparent" />
          </div>

          <div className="absolute inset-0 grid-hairline pointer-events-none opacity-25 z-0" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF7120]/15 rounded-full blur-[130px] pointer-events-none z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#141417]/90 border border-[#E2E2DC] dark:border-[#282830] shadow-sm backdrop-blur-md text-xs font-mono text-[#0A0A0A] dark:text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF7120] animate-ping" />
              <span className="text-[#FF7120] font-bold uppercase tracking-wider">
                ENGINEERING STACK // 2026
              </span>
              <span className="text-[#888888] dark:text-[#555555]">|</span>
              <span className="text-[#555552] dark:text-[#A0A09B] uppercase">
                PRODUCTION PLATFORMS
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight mb-6 max-w-4xl leading-[1.05]">
              {headlineNode}
            </h1>

            <p className="text-base sm:text-xl text-[#4A4A46] dark:text-[#B0B0A8] max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        </section>

        {/* Dynamic CMS Modular Blocks (if configured) */}
        {page.blocks && page.blocks.length > 0 && (
          <DynamicBlocks blocks={page.blocks} />
        )}

        {/* Categories Sections */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
            {categories.map((cat, idx) => (
              <div
                key={cat.category}
                className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#EFEFEA] dark:border-[#1E1E24] gap-4">
                  <div>
                    <span className="text-xs font-mono text-[#FF7120] uppercase block mb-1">
                      STACK CLASSIFICATION // 0{idx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] dark:text-white tracking-tight">
                      {cat.category}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6E6E6A] dark:text-[#A0A09B] max-w-md">
                    {cat.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {cat.items.map((tech) => (
                    <div
                      key={tech}
                      className="p-5 sm:p-6 rounded-2xl bg-[#FAF9F5] dark:bg-[#16161B] border border-[#ECEBE4] dark:border-[#222228] flex flex-col items-center justify-center text-center group hover:border-[#FF7120] hover:shadow-lg dark:hover:shadow-none hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                    >
                      <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center mb-2.5 transform group-hover:scale-110 transition-transform duration-200">
                        <div className="grayscale contrast-125 dark:brightness-110 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-300">
                          <TechIcon name={tech} className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#4A4A48] dark:text-[#C5C5C0] group-hover:text-[#FF7120] transition-colors truncate max-w-full block">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Banner with Mesh Image */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="rounded-3xl bg-[#0A0A0C] border border-[#222228] p-8 sm:p-14 text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="relative z-10 max-w-xl space-y-4">
                <span className="text-xs font-mono text-[#FF7120] uppercase tracking-wider block">
                  AI AGENTS & MCP INFRASTRUCTURE
                </span>
                <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
                  Deploy Autonomous Agents Inside Your Workflow.
                </h3>
                <p className="text-sm text-[#A0A09B] leading-relaxed">
                  We build custom Model Context Protocol (MCP) servers and LLM agents 
                  that safely query internal data, trigger external actions, and eliminate manual tasks.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF7120] text-white text-xs font-mono font-bold uppercase hover:bg-white hover:text-black transition-colors"
                  >
                    <span>Consult on AI Systems</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="relative z-10 lg:w-1/2 flex justify-center">
                <div className="rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl max-w-md">
                  <img
                    src="/images/ai-mesh.jpg"
                    alt="AI Cognition Mesh"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Ambient Glow */}
              <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
