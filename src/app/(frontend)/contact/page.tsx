"use client";

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import ContactSection from "@/components/sections/ContactSection";
import ProjectEstimator from "@/components/sections/ProjectEstimator";
import { Terminal, Shield, Clock, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F4] dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero with High-Tech Atmospheric Background */}
        <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 border-b border-[#E2E2DC] dark:border-[#222228] bg-[#EFEFEA] dark:bg-[#0A0A0C] overflow-hidden">
          {/* Background Tech Image & Dual Ambient Gradients */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/images/hero-tech-bg.jpg"
              alt="Winhub Digital Solutions Contact Architecture"
              className="w-full h-full object-cover object-right md:object-center opacity-30 dark:opacity-40 filter saturate-150 transform scale-105"
            />
            {/* Horizontal fade: ensures left typography is ultra sharp and clear in both light and dark mode */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#EFEFEA] via-[#EFEFEA]/90 to-[#EFEFEA]/45 dark:from-[#0A0A0C] dark:via-[#0A0A0C]/90 dark:to-[#0A0A0C]/45" />
            {/* Vertical bottom feather into content */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#EFEFEA] via-transparent to-transparent dark:from-[#0A0A0C] dark:via-transparent to-transparent" />
          </div>

          {/* Precision Grid Overlay */}
          <div className="absolute inset-0 grid-hairline pointer-events-none opacity-25 z-0" />

          {/* Glowing Ambient Radial Flare */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF7120]/15 rounded-full blur-[130px] pointer-events-none z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#141417]/90 border border-[#E2E2DC] dark:border-[#282830] shadow-sm backdrop-blur-md text-xs font-mono text-[#0A0A0A] dark:text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF7120] animate-ping" />
              <span className="text-[#FF7120] font-bold uppercase tracking-wider">
                COMMISSION INTAKE // 2026
              </span>
              <span className="text-[#888888] dark:text-[#555555]">|</span>
              <span className="text-[#555552] dark:text-[#A0A09B] uppercase">
                DIRECT CTO REVIEW
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight mb-6 max-w-4xl leading-[1.05]">
              Have an Idea? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7120] via-[#FF8A3D] to-[#E85F0F]">
                Let&apos;s Build It Together.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#4A4A46] dark:text-[#B0B0A8] max-w-3xl leading-relaxed mb-8">
              Whether you need a high-performance web platform, bespoke custom software,
              mobile application or intelligent AI automation, our engineering team is ready to
              turn your technical requirements into digital reality.
            </p>

            {/* Quick Telemetry Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs font-mono text-[#555552] dark:text-[#8E8E89]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                <span>INITIAL RESPONSE: &lt; 2 HOURS</span>
              </div>
              <div className="hidden sm:inline-block text-[#CCCCCC] dark:text-[#333333]">/</div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#FF7120]" />
                <span>CONFIDENTIAL NDA PROTECTED</span>
              </div>
              <div className="hidden sm:inline-block text-[#CCCCCC] dark:text-[#333333]">/</div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-sky-500" />
                <span>GLOBAL TIMEZONE ALIGNMENT</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Coordinates (Header suppressed to avoid duplicate stacked titles) */}
        <ContactSection hideHeader />

        {/* Interactive Estimator Tool */}
        <ProjectEstimator />
      </main>

      <Footer />
    </div>
  );
}
