"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import HeroCanvas from "./HeroCanvas";
import { AGENCY_CONFIG } from "@/data/agencyData";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#F6F6F4] dark:bg-[#0A0A0C] border-b border-[#E2E2DC] dark:border-[#222228] pt-8 pb-12 transition-colors duration-300">
      {/* Interactive 3D WebGL Hero Model */}
      <HeroCanvas currentShape="neural" />

      {/* Subtle Grid Lines Overlay */}
      <div className="absolute inset-0 grid-hairline pointer-events-none opacity-30 z-0" />

      {/* Top Small Label */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-4">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 dark:bg-[#141417]/90 border border-[#E2E2DC] dark:border-[#282830] shadow-sm backdrop-blur-sm text-xs font-mono text-[#0A0A0A] dark:text-white">
          <span className="w-2 h-2 rounded-full bg-[#FF7120] animate-ping" />
          <span className="font-bold text-[#FF7120] tracking-wider uppercase">
            {AGENCY_CONFIG.heroSmallLabel}
          </span>
          <span className="text-[#888888] dark:text-[#555555]">|</span>
          <span className="text-[#555555] dark:text-[#A0A09B] uppercase">
            WINHUB SOLUTIONS
          </span>
        </div>
      </div>

      {/* Main Center Typographic Hero */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 my-auto py-10">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#0A0A0A] dark:text-white uppercase leading-[1.02] mb-6">
            Building Digital Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7120] via-[#E85F0F] to-[#0A0A0A] dark:to-white">
              That Move Businesses
            </span>{" "}
            <span className="text-[#0A0A0A] dark:text-white inline-flex items-baseline">
              Forward<span className="text-[#FF7120] animate-pulse">.</span>
            </span>
          </h1>

          {/* Descriptive Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#4A4A46] dark:text-[#B0B0A8] font-normal leading-relaxed max-w-3xl mb-8">
            {AGENCY_CONFIG.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF7120] text-white text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#0A0A0A] dark:hover:bg-white dark:hover:text-[#0A0A0A] hover:shadow-xl hover:shadow-[#FF7120]/25 group"
            >
              <span>Get a Free Consultation</span>
              <Sparkles className="w-4 h-4 text-white group-hover:text-[#FF7120]" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white dark:bg-[#141417] border border-[#E2E2DC] dark:border-[#282830] text-[#0A0A0A] dark:text-white text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#EFEFEA] dark:hover:bg-[#1E1E24] hover:border-[#0A0A0A] dark:hover:border-white group"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-[#FF7120] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Hero Highlights Pill Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#E2E2DC] dark:border-[#222228]">
            {AGENCY_CONFIG.heroHighlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-2 p-3 rounded-xl bg-white/70 dark:bg-[#121216]/70 border border-[#E2E2DC] dark:border-[#222228] backdrop-blur-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-[#FF7120] shrink-0" />
                <span className="text-xs font-mono font-bold text-[#0A0A0A] dark:text-white">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#6E6E6A] dark:text-[#8E8E89] gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>ENTERPRISE WEB & SOFTWARE ENGINEERING</span>
          </div>
          <div>5+ YEARS OF EXPERIENCE · 100+ PROJECTS SHIPPED</div>
        </div>
      </div>
    </section>
  );
}
