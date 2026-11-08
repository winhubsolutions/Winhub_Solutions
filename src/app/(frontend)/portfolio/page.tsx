"use client";

import React, { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import { PORTFOLIO_PROJECTS, Project } from "@/data/agencyData";
import { Terminal, ArrowUpRight, X, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Website Development",
    "Web Applications",
    "Mobile Applications",
    "CMS Development",
    "AI & Automation",
    "E-Commerce",
  ];

  const filtered =
    selectedCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

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
              alt="Winhub IT Solutions Case Studies Architecture"
              className="w-full h-full object-cover object-right md:object-center opacity-30 dark:opacity-40 filter saturate-150 transform scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#EFEFEA] via-[#EFEFEA]/90 to-[#EFEFEA]/45 dark:from-[#0A0A0C] dark:via-[#0A0A0C]/90 dark:to-[#0A0A0C]/45" />
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
                ENGINEERING SHOWCASE // 2026
              </span>
              <span className="text-[#888888] dark:text-[#555555]">|</span>
              <span className="text-[#555552] dark:text-[#A0A09B] uppercase">
                PRODUCTION DEPLOYMENTS
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight mb-6 max-w-4xl leading-[1.05]">
              Ideas Transformed Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7120] via-[#FF8A3D] to-[#E85F0F]">
                Digital Experiences.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#4A4A46] dark:text-[#B0B0A8] max-w-3xl leading-relaxed">
              Explore our projects and discover how we combine design, development and 
              technology to solve real business challenges.
            </p>
          </div>
        </section>

        {/* Category Filter Pills */}
        <section className="py-8 border-b border-[#E2E2DC] dark:border-[#222228] bg-white dark:bg-[#0D0D10] sticky top-[72px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#FF7120] text-white shadow-sm font-bold"
                    : "bg-[#F6F6F4] dark:bg-[#141418] text-[#6E6E6A] dark:text-[#A0A09B] border border-[#E2E2DC] dark:border-[#282830] hover:text-[#0A0A0A] dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project) => (
                <div
                  key={project.id}
                  className="rounded-3xl bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] overflow-hidden hover:border-[#FF7120] hover:shadow-xl dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Project Graphic Preview */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A0A0E] border-b border-[#E2E2DC] dark:border-[#222228]">
                    <img
                      src={`/images/projects/${project.slug}.svg`}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/ai-mesh.jpg";
                      }}
                    />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#FF7120] uppercase font-bold">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-[#8E8E89]">{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white mb-2 group-hover:text-[#FF7120] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E6E6A] dark:text-[#A0A09B] leading-relaxed mb-6">
                      {project.tagline}
                    </p>

                    <div className="p-4 rounded-2xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#EAEAE4] dark:border-[#24242A] mb-6">
                      <span className="text-[10px] font-mono text-[#8E8E89] uppercase block mb-1">
                        Project Overview
                      </span>
                      <p className="text-xs text-[#555552] dark:text-[#A0A09B] leading-relaxed">
                        Every project begins with understanding the client&apos;s requirements. We focus on delivering practical solutions with modern design, reliable functionality and scalable architecture.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.impactMetrics.map((metric) => (
                        <div key={metric.label}>
                          <span className="text-[10px] font-mono text-[#8E8E89] block uppercase">
                            {metric.label}
                          </span>
                          <span className="text-sm font-black text-[#FF7120]">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#F6F6F4] dark:bg-[#1A1A20] text-[#6E6E6A] dark:text-[#A0A09B] border border-[#E2E2DC] dark:border-[#282830]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 pt-0 flex items-center justify-between border-t border-[#EFEFEA] dark:border-[#1E1E24] mt-4">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0A0A0A] dark:text-white hover:text-[#FF7120] transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <Link
                      href="/contact"
                      className="text-xs font-mono text-[#FF7120] hover:underline"
                    >
                      Hire Developers →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#F6F6F4] dark:bg-[#1C1C22] text-[#6E6E6A] dark:text-[#A0A09B] hover:text-[#0A0A0A] dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-[#FF7120] uppercase font-semibold block mb-1">
              CASE STUDY // {activeModalProject.category}
            </span>
            <h3 className="text-2xl font-black text-[#0A0A0A] dark:text-white mb-2">
              {activeModalProject.title}
            </h3>
            <p className="text-xs font-mono text-[#8E8E89] mb-4">
              Client: {activeModalProject.client} · Year: {activeModalProject.year}
            </p>

            <p className="text-sm text-[#555552] dark:text-[#A0A09B] leading-relaxed mb-6">
              {activeModalProject.description}
            </p>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#EAEAE4] dark:border-[#24242A] mb-6">
              {activeModalProject.impactMetrics.map((m) => (
                <div key={m.label}>
                  <span className="text-xs font-mono text-[#8E8E89] block uppercase mb-1">
                    {m.label}
                  </span>
                  <span className="text-xl font-black text-[#FF7120]">{m.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {activeModalProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-[#F6F6F4] dark:bg-[#18181D] text-[#4A4A46] dark:text-[#D0D0CE] border border-[#E2E2DC] dark:border-[#282830]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-[#EFEFEA] dark:border-[#1E1E24] flex items-center justify-between">
              <button
                onClick={() => setActiveModalProject(null)}
                className="text-xs font-mono text-[#6E6E6A] dark:text-[#A0A09B] hover:text-[#0A0A0A] dark:hover:text-white"
              >
                Close
              </button>
              <Link
                href="/contact"
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-full bg-[#FF7120] text-white text-xs font-mono font-bold uppercase hover:bg-[#0A0A0A] transition-colors"
              >
                Start Similar Project
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

