"use client";

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import { SERVICES_CATALOG } from "@/data/servicesCatalog";
import {
  Globe,
  Layers,
  Smartphone,
  Cpu,
  BookOpen,
  Palette,
  ShoppingBag,
  TrendingUp,
  Terminal,
  CheckCircle2,
  ArrowRight,
  Code2,
  Sparkles,
  Shield,
  Clock,
  Layers3,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
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
              alt="Winhub IT Solutions Services Architecture"
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
                CAPABILITY MATRIX // 2026
              </span>
              <span className="text-[#888888] dark:text-[#555555]">|</span>
              <span className="text-[#555552] dark:text-[#A0A09B] uppercase">
                18 CORE DISCIPLINES
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight mb-6 max-w-4xl leading-[1.05]">
              Complete IT Solutions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7120] via-[#FF8A3D] to-[#E85F0F]">
                Under One Roof.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#4A4A46] dark:text-[#B0B0A8] max-w-3xl leading-relaxed mb-8">
              At Winhub Solutions, we provide end-to-end technology services to help
              organizations build, modernize and expand their digital infrastructure.
              Explore our 18 specialized disciplines below.
            </p>

            {/* Quick Telemetry Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs font-mono text-[#555552] dark:text-[#8E8E89]">
              <div className="flex items-center gap-2">
                <Layers3 className="w-3.5 h-3.5 text-emerald-500" />
                <span>FULL-STACK ARCHITECTURE</span>
              </div>
              <div className="hidden sm:inline-block text-[#CCCCCC] dark:text-[#333333]">/</div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#FF7120]" />
                <span>ENTERPRISE GRADE SLA</span>
              </div>
              <div className="hidden sm:inline-block text-[#CCCCCC] dark:text-[#333333]">/</div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-sky-500" />
                <span>AGILE SPRINT DELIVERY</span>
              </div>
            </div>
          </div>
        </section>

        {/* 18 Individual Services Grid */}
        <section className="py-20 border-b border-[#E2E2DC] dark:border-[#222228]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES_CATALOG.map((service, index) => (
                <div
                  key={service.slug}
                  className="p-8 rounded-3xl bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] shadow-sm hover:border-[#FF7120] hover:shadow-xl dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 text-3xl font-black text-[#EFEFEA] dark:text-[#181820] select-none group-hover:text-[#FF7120]/20 transition-colors">
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </div>

                  <div>
                    {/* Relevant Service Graphic Thumbnail */}
                    <div className="relative mb-5 rounded-2xl overflow-hidden border border-[#E2E2DC] dark:border-[#222228] bg-[#0E0E12] aspect-[16/9]">
                      <img
                        src={`/images/services/${service.slug}.svg`}
                        alt={service.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/images/ai-mesh.jpg";
                        }}
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[9px] font-mono text-white/80 border border-white/10 uppercase">
                        {service.slug}
                      </div>
                    </div>

                    <span className="text-[10px] font-mono uppercase text-[#FF7120] tracking-wider block mb-2 font-bold">
                      {service.shortTag}
                    </span>

                    <h2 className="text-xl font-bold text-[#0A0A0A] dark:text-white tracking-tight mb-3 group-hover:text-[#FF7120] transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#6E6E6A] dark:text-[#A0A09B] leading-relaxed mb-6 line-clamp-3">
                      {service.intro}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.technologies.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F6F6F4] dark:bg-[#18181D] text-[#6E6E6A] dark:text-[#A0A09B] border border-[#E2E2DC] dark:border-[#282830]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#EFEFEA] dark:border-[#1E1E24]">
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full inline-flex items-center justify-between text-xs font-mono font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#FF7120] transition-colors"
                    >
                      <span>Explore Dedicated Page</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Focus: AI Agent Development Architecture */}
        <section className="py-24 bg-white dark:bg-[#0D0D10] border-b border-[#E2E2DC] dark:border-[#222228]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7120]/10 text-[#FF7120] border border-[#FF7120]/20 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI AGENT ARCHITECTURE</span>
                </div>
                <h3 className="text-3xl sm:text-5xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight leading-tight">
                  Autonomous AI Agents Designed for Scale.
                </h3>
                <p className="text-base text-[#555552] dark:text-[#A0A09B] leading-relaxed">
                  Unlike traditional automation tools, our AI agents are adaptive, goal-driven,
                  and capable of learning over time. They observe their environment, process unstructured data,
                  and take actions through secure API pipelines.
                </p>

                {/* Workflow Diagram */}
                <div className="p-6 rounded-2xl bg-[#F6F6F4] dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#222228] font-mono text-xs space-y-2">
                  <div className="text-[#FF7120] font-bold">// 5-STAGE COGNITION PIPELINE</div>
                  <div className="flex items-center gap-2 text-[#0A0A0A] dark:text-white">
                    <span className="w-6 h-6 rounded-full bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] flex items-center justify-center text-[10px]">1</span>
                    <span>Input (User / System / External Data Stream)</span>
                  </div>
                  <div className="text-center text-[#8E8E89]">↓</div>
                  <div className="flex items-center gap-2 text-[#0A0A0A] dark:text-white">
                    <span className="w-6 h-6 rounded-full bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] flex items-center justify-center text-[10px]">2</span>
                    <span>Understanding & Semantic Vector Analysis</span>
                  </div>
                  <div className="text-center text-[#8E8E89]">↓</div>
                  <div className="flex items-center gap-2 text-[#0A0A0A] dark:text-white">
                    <span className="w-6 h-6 rounded-full bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] flex items-center justify-center text-[10px]">3</span>
                    <span>Decision Making (LLM Models + Business Rules)</span>
                  </div>
                  <div className="text-center text-[#8E8E89]">↓</div>
                  <div className="flex items-center gap-2 text-[#0A0A0A] dark:text-white">
                    <span className="w-6 h-6 rounded-full bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] flex items-center justify-center text-[10px]">4</span>
                    <span>Action Execution (Tool Calling & API Webhooks)</span>
                  </div>
                  <div className="text-center text-[#8E8E89]">↓</div>
                  <div className="flex items-center gap-2 text-[#0A0A0A] dark:text-white">
                    <span className="w-6 h-6 rounded-full bg-[#FF7120] text-white flex items-center justify-center text-[10px]">5</span>
                    <span>Continuous Learning & Optimization</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/services/ai-agent-development"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF7120] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#0A0A0A] transition-colors"
                  >
                    <span>View AI Agent Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="rounded-3xl overflow-hidden border border-[#222228] shadow-2xl">
                  <img
                    src="/images/ai-mesh.jpg"
                    alt="AI Cognition Mesh"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Build Call to Action */}
        <section className="py-20 bg-[#EFEFEA] dark:bg-[#0D0D10] border-b border-[#E2E2DC] dark:border-[#222228]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="p-8 sm:p-14 rounded-3xl bg-[#0A0A0A] dark:bg-[#121216] text-white border border-[#222228] flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center md:text-left">
                <span className="text-xs font-mono text-[#FF7120] uppercase tracking-wider block">
                  READY TO ELEVATE YOUR DIGITAL INFRASTRUCTURE?
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                  Let&apos;s Build Something Remarkable Together.
                </h2>
                <p className="text-sm text-[#A0A09B] max-w-xl">
                  Connect with our technical architects for a comprehensive project feasibility analysis, roadmap scoping, and fixed-price estimate.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-[#FF7120] hover:bg-white hover:text-black text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-lg flex items-center gap-2 group"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/faq"
                  className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors"
                >
                  Knowledge Base & FAQ →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
