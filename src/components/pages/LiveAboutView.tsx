"use client";

import React from "react";
import Link from "next/link";
import { useLivePreview } from "@payloadcms/live-preview-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import RichTextRenderer from "@/components/ui/RichTextRenderer";
import DynamicBlocks from "@/components/blocks/DynamicBlocks";
import { ABOUT_DATA } from "@/data/agencyData";
import {
  Terminal,
  Zap,
  ShieldCheck,
  Lock,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  Zap,
  ShieldCheck,
  Lock,
  Users,
  Award,
};

interface LiveAboutViewProps {
  initialDoc: any;
}

function renderHeroHeadline(headline: string | null | undefined) {
  if (!headline) {
    return (
      <>
        Empowering Businesses <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7120] via-[#FF8A3D] to-[#E85F0F]">
          Through Technology.
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

  if (headline.toLowerCase().includes("through technology")) {
    return (
      <>
        Empowering Businesses <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7120] via-[#FF8A3D] to-[#E85F0F]">
          Through Technology.
        </span>
      </>
    );
  }

  return headline;
}

export default function LiveAboutView({ initialDoc }: LiveAboutViewProps) {
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
  const subtitle = page.heroSubtitle || ABOUT_DATA.intro;

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F4] dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero with High-Tech Atmospheric Background */}
        <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 border-b border-[#E2E2DC] dark:border-[#222228] bg-[#EFEFEA] dark:bg-[#0A0A0C] overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/images/hero-tech-bg.jpg"
              alt="Winhub IT Solutions Corporate Architecture"
              className="w-full h-full object-cover object-right md:object-center opacity-40 dark:opacity-45 mix-blend-multiply dark:mix-blend-screen filter saturate-150 transform scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#EFEFEA] via-[#EFEFEA]/85 to-transparent dark:from-[#0A0A0C] dark:via-[#0A0A0C]/85 dark:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#EFEFEA] via-transparent to-transparent dark:from-[#0A0A0C] dark:via-transparent to-transparent" />
          </div>

          <div className="absolute inset-0 grid-hairline pointer-events-none opacity-25 z-0" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF7120]/15 rounded-full blur-[130px] pointer-events-none z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#141417]/90 border border-[#E2E2DC] dark:border-[#282830] shadow-sm backdrop-blur-md text-xs font-mono text-[#0A0A0A] dark:text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF7120] animate-ping" />
              <span className="text-[#FF7120] font-bold uppercase tracking-wider">
                AGENCY PROFILE // 2026
              </span>
              <span className="text-[#888888] dark:text-[#555555]">|</span>
              <span className="text-[#555552] dark:text-[#A0A09B] uppercase">
                WINHUB SOLUTIONS
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

        {/* Modular Dynamic Blocks (If defined in CMS) */}
        {page.blocks && page.blocks.length > 0 && (
          <DynamicBlocks blocks={page.blocks} />
        )}

        {/* Narrative & Highlights */}
        <section className="py-20 border-b border-[#E2E2DC] dark:border-[#222228]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#555552] dark:text-[#A0A09B] leading-relaxed">
                {page.pageContent ? (
                  <RichTextRenderer data={page.pageContent} />
                ) : (
                  ABOUT_DATA.descriptionParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))
                )}

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF7120] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#0A0A0A] dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-colors"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#282830] text-[#0A0A0A] dark:text-white text-xs font-mono font-semibold tracking-wider uppercase hover:bg-[#EFEFEA] transition-colors"
                  >
                    <span>Contact Team</span>
                  </Link>
                </div>
              </div>

              {/* Highlights 4 Cards */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_DATA.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="p-6 rounded-3xl bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] shadow-sm flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-mono text-[#8E8E89] uppercase tracking-wider block mb-2">
                      {item.label}
                    </span>
                    <h3 className="text-xl font-black text-[#0A0A0A] dark:text-white tracking-tight">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white dark:bg-[#0D0D10] border-b border-[#E2E2DC] dark:border-[#222228]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#F6F6F4] dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#222228] relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1C1C22] text-[#FF7120] flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#FF7120] uppercase tracking-wider block mb-2">
                  OUR PURPOSE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight mb-4">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-[#555552] dark:text-[#A0A09B] leading-relaxed">
                  {ABOUT_DATA.mission}
                </p>
              </div>

              <div className="p-8 sm:p-12 rounded-3xl bg-[#F6F6F4] dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#222228] relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1C1C22] text-[#FF7120] flex items-center justify-center mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#FF7120] uppercase tracking-wider block mb-2">
                  OUR HORIZON
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight mb-4">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-[#555552] dark:text-[#A0A09B] leading-relaxed">
                  {ABOUT_DATA.vision}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 border-b border-[#E2E2DC] dark:border-[#222228]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest mb-3">
                <Terminal className="w-3.5 h-3.5" />
                <span>// OPERATIONAL PRINCIPLES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] dark:text-white uppercase leading-tight">
                Our Core Values.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {ABOUT_DATA.coreValues.map((val) => {
                const Icon = iconMap[val.icon] || Zap;
                return (
                  <div
                    key={val.title}
                    className="p-6 rounded-3xl bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] flex flex-col justify-between hover:border-[#FF7120] transition-colors"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#F6F6F4] dark:bg-[#1A1A20] text-[#FF7120] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-[#0A0A0A] dark:text-white mb-2">
                        {val.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6E6E6A] dark:text-[#A0A09B] leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

