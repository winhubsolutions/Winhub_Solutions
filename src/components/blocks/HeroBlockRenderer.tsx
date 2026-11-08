"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

const HeroCanvas = dynamic(() => import("@/components/hero/HeroCanvas"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#0A0A0C]" />,
});

export interface HeroBlockProps {
  badgeText?: string;
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  styleVariant?: "3d-canvas" | "cyber-grid" | "minimal-dark";
  metrics?: { value: string; label: string }[];
}

export default function HeroBlockRenderer({
  badgeText = "YOUR TECHNOLOGY PARTNER",
  headline = "WE BUILD THE WEB. YOU BUILD THE FUTURE.",
  subheadline = "Building Digital Solutions That Move Businesses Forward. Full-stack web engineering, custom enterprise platforms, autonomous AI agents, and scholarly OJS publishing.",
  primaryCtaText = "Start Your Project",
  primaryCtaUrl = "/contact",
  secondaryCtaText = "Explore 18 Disciplines",
  secondaryCtaUrl = "/services",
  styleVariant = "3d-canvas",
  metrics = [
    { value: "150+", label: "Projects Shipped" },
    { value: "18", label: "Specialized Disciplines" },
    { value: "99.9%", label: "Platform Uptime" },
  ],
}: HeroBlockProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#E2E2DC] dark:border-[#222228] bg-[#F6F6F4] dark:bg-[#0A0A0C]">
      {/* 3D Canvas Background or Cyber Grid */}
      {styleVariant === "3d-canvas" ? (
        <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-60 z-0">
          <HeroCanvas />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />
      )}

      {/* Atmospheric Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-indigo-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-24 sm:py-32 flex flex-col items-center text-center">
        {/* Top Badge */}
        {badgeText && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D5D5CE] dark:border-[#2A2A30] bg-[#FFFFFF]/80 dark:bg-[#141418]/80 backdrop-blur-md mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#555555] dark:text-[#A0A0A8]">
              {badgeText}
            </span>
          </div>
        )}

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0A0A0A] dark:text-white max-w-5xl leading-[1.08] mb-6">
          {headline}
        </h1>

        {/* Subtitle */}
        {subheadline && (
          <p className="text-base sm:text-xl text-[#555555] dark:text-[#A0A0A8] max-w-3xl leading-relaxed mb-10">
            {subheadline}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {primaryCtaText && (
            <Link
              href={primaryCtaUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] font-medium text-sm hover:opacity-90 transition-all shadow-md active:scale-95"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}

          {secondaryCtaText && (
            <Link
              href={secondaryCtaUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#D5D5CE] dark:border-[#2A2A30] bg-[#FFFFFF]/60 dark:bg-[#141418]/60 text-[#0A0A0A] dark:text-white font-medium text-sm hover:bg-[#EFEFEA] dark:hover:bg-[#1A1A22] transition-all backdrop-blur-sm active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>{secondaryCtaText}</span>
            </Link>
          )}
        </div>

        {/* Bottom Metrics Bar */}
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 pt-10 border-t border-[#E2E2DC] dark:border-[#222228] w-full max-w-4xl">
            {metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-2xl sm:text-4xl font-bold font-mono tracking-tight text-[#0A0A0A] dark:text-white">
                  {m.value}
                </span>
                <span className="text-xs sm:text-sm text-[#777777] dark:text-[#888890] mt-1 font-medium">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
