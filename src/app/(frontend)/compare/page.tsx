"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  Database,
  Code,
  Layout,
  Sparkles,
  Sliders,
  FileText,
  RefreshCw,
  ExternalLink,
} from "lucide-react";

export default function ComparePage() {
  const [viewMode, setViewMode] = useState<"diff" | "split" | "dynamic" | "before">("diff");

  const comparisonItems = [
    {
      section: "1. Hero Section",
      before: "Hardcoded text, fixed consultation buttons, static metrics.",
      after: "HeroBlock: headline, subheadline, CTA buttons, metrics, and 3D Canvas toggle all editable in Payload CMS.",
      type: "Custom Block",
      status: "Dynamic",
    },
    {
      section: "2. Services Showcase",
      before: "Static 18 service cards hardcoded in servicesCatalog.ts.",
      after: "ServicesGridBlock + Services Collection: filterable by categories (Web, App, AI), custom column layouts (carousel, grid, bento) linked to PostgreSQL.",
      type: "Block + Collection",
      status: "Dynamic",
    },
    {
      section: "3. Tech Stack Matrix",
      before: "Hardcoded tabs and static arrays for Frontend, Backend, DB, etc.",
      after: "TechStackBlock + Technologies Collection: 33 real technologies dynamically fetched from Neon DB with order and categories.",
      type: "Block + Collection",
      status: "Dynamic",
    },
    {
      section: "4. Rich Text & Content Editing",
      before: "No rich text editor. All descriptions hardcoded in JSX files.",
      after: "@payloadcms/richtext-lexical: Official Lexical Rich Text Editor with fixed toolbar, inline formatting, links, headings, and lists.",
      type: "Lexical Editor",
      status: "Dynamic",
    },
    {
      section: "5. Interactive Terminal / CLI",
      before: "Static hardcoded terminal commands and output text in JSX.",
      after: "TerminalBlock: dynamic prompt title, initial command, and editable log lines via Payload blocks.",
      type: "Custom Block",
      status: "Dynamic",
    },
    {
      section: "6. Portfolio & Featured Work",
      before: "Static project objects with hardcoded metrics and images.",
      after: "ProjectsShowcaseBlock + Projects Collection: dynamic featured projects, case study links, and client badges.",
      type: "Block + Collection",
      status: "Dynamic",
    },
    {
      section: "7. Why Choose Us / Pillars",
      before: "Hardcoded 4 pillar cards.",
      after: "FeatureCardsBlock: customizable grid columns (2, 3, or 4), custom badge, and icon cards in CMS.",
      type: "Custom Block",
      status: "Dynamic",
    },
    {
      section: "8. Development Process",
      before: "Fixed 6-step roadmap in component code.",
      after: "ProcessWorkflowBlock: reorderable roadmap steps with custom phase names, descriptions, and deliverable tags.",
      type: "Custom Block",
      status: "Dynamic",
    },
    {
      section: "9. Statistics & Proof Metrics",
      before: "Hardcoded 4 stat numbers in AnimatedStatistics.tsx.",
      after: "StatisticsBlock: reorderable counters with custom numerical values, suffixes (+, %, ms), and captions.",
      type: "Custom Block",
      status: "Dynamic",
    },
    {
      section: "10. Client Testimonials",
      before: "Static review items hardcoded in ClientTestimonials.tsx.",
      after: "TestimonialsBlock + Testimonials Collection: editable client quotes, authors, roles, companies, and star ratings.",
      type: "Block + Collection",
      status: "Dynamic",
    },
    {
      section: "11. Frequently Asked Questions",
      before: "Hardcoded accordion list in FAQSection.tsx.",
      after: "FAQBlock + FAQs Collection: category-filtered accordions with instant search & dynamic expansion.",
      type: "Block + Collection",
      status: "Dynamic",
    },
    {
      section: "12. Call to Action Banner",
      before: "Hardcoded brief submission form and contact buttons.",
      after: "CTABannerBlock: editable headline, subtitle, primary/secondary buttons, and contact snippet badges.",
      type: "Custom Block",
      status: "Dynamic",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F6F6F4] flex flex-col font-sans">
      {/* Header bar */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0A0A0C]/90 backdrop-blur-xl px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            W
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2">
              Homepage Architecture Comparison
              <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                Payload CMS 3.x
              </span>
            </h1>
            <p className="text-xs text-slate-400">
              Comparing Original (Static React) vs Dynamic (Payload Modular Blocks + Neon DB)
            </p>
          </div>
        </div>

        {/* View Switcher Controls */}
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg p-1">
          <button
            onClick={() => setViewMode("diff")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              viewMode === "diff"
                ? "bg-cyan-500 text-black shadow-md font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Architecture Diff
          </button>
          <button
            onClick={() => setViewMode("split")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              viewMode === "split"
                ? "bg-cyan-500 text-black shadow-md font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Split Screen
          </button>
          <button
            onClick={() => setViewMode("dynamic")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              viewMode === "dynamic"
                ? "bg-cyan-500 text-black shadow-md font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Dynamic (Now)
          </button>
          <button
            onClick={() => setViewMode("before")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              viewMode === "before"
                ? "bg-cyan-500 text-black shadow-md font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Original (Before)
          </button>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-2">
          <Link
            href="/admin"
            target="_blank"
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
          >
            <Sliders className="w-3.5 h-3.5" />
            Payload Admin
            <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md bg-white text-black font-semibold hover:bg-slate-200 transition-colors"
          >
            Live Site
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* Main View Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
        {viewMode === "diff" && (
          <div className="space-y-8">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mb-1">
                  Custom Dynamic Blocks
                </div>
                <div className="text-3xl font-bold text-cyan-400 flex items-center gap-2">
                  12 Blocks
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Hero, Services, Tech, Terminal, Projects, Features, Process, Stats, Testimonials, FAQ, CTA, RichText
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mb-1">
                  Rich Text Engine
                </div>
                <div className="text-3xl font-bold text-amber-400 flex items-center gap-2">
                  Lexical 3.x
                  <FileText className="w-5 h-5 text-amber-400" />
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  @payloadcms/richtext-lexical with fixed toolbar, inline styling, headings, links, and code blocks
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mb-1">
                  Database Backing
                </div>
                <div className="text-3xl font-bold text-emerald-400 flex items-center gap-2">
                  Neon PostgreSQL
                  <Database className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Autoscaling Serverless Postgres with full ACID relational blocks tables and instant reordering
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden shadow-2xl">
              <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white">Section-by-Section Transformation</h2>
                  <p className="text-xs text-slate-400">
                    How every part of the original Winhub Solutions homepage was upgraded into dynamic Payload blocks
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                  12 of 12 Sections Dynamic
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950/80 text-xs text-slate-400 font-mono uppercase border-b border-slate-800">
                    <tr>
                      <th className="py-3.5 px-4 w-1/5">Section</th>
                      <th className="py-3.5 px-4 w-2/5 text-rose-300/80">Before (Static React)</th>
                      <th className="py-3.5 px-4 w-2/5 text-cyan-300">After (Dynamic Payload Block)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {comparisonItems.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-4 px-4 font-semibold text-white align-top">
                          {item.section}
                          <span className="block text-xs font-normal text-slate-400 mt-1">
                            {item.type}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-slate-400 align-top leading-relaxed">
                          <span className="inline-block w-2 h-2 rounded-full bg-rose-500 mr-2" />
                          {item.before}
                        </td>
                        <td className="py-4 px-4 text-slate-200 align-top leading-relaxed">
                          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mr-2 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                          {item.after}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Action Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/before"
                className="px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-200 font-medium hover:bg-slate-700 transition-colors flex items-center gap-2 text-sm"
              >
                Launch Original Before Homepage →
              </Link>
              <Link
                href="/"
                className="px-5 py-2.5 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center gap-2 text-sm"
              >
                Launch Dynamic Payload Homepage →
              </Link>
            </div>
          </div>
        )}

        {viewMode === "split" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[82vh]">
            {/* Left: Original Before */}
            <div className="flex flex-col border border-slate-800 rounded-xl overflow-hidden bg-slate-950">
              <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
                <span className="font-semibold text-rose-300">Original (Before): Static Code</span>
                <Link href="/before" target="_blank" className="text-slate-400 hover:text-white flex items-center gap-1">
                  Full Page <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
              <iframe src="/before" className="flex-1 w-full h-full border-0" title="Before Homepage" />
            </div>

            {/* Right: Dynamic Payload */}
            <div className="flex flex-col border border-cyan-500/40 rounded-xl overflow-hidden bg-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.1)]">
              <div className="px-4 py-2 bg-cyan-950/40 border-b border-cyan-500/30 flex items-center justify-between text-xs">
                <span className="font-semibold text-cyan-300">After (Dynamic): Payload CMS Blocks</span>
                <Link href="/" target="_blank" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                  Full Page <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
              <iframe src="/" className="flex-1 w-full h-full border-0" title="Dynamic Homepage" />
            </div>
          </div>
        )}

        {viewMode === "dynamic" && (
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950 h-[84vh]">
            <iframe src="/" className="w-full h-full border-0" title="Dynamic Homepage" />
          </div>
        )}

        {viewMode === "before" && (
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950 h-[84vh]">
            <iframe src="/before" className="w-full h-full border-0" title="Before Homepage" />
          </div>
        )}
      </main>
    </div>
  );
}
