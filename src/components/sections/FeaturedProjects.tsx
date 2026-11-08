"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PORTFOLIO_PROJECTS, Project } from "@/data/agencyData";
import {
  ArrowRight,
  Terminal,
  ArrowUpRight,
  Sparkles,
  X,
  CheckCircle2,
} from "lucide-react";

export default function FeaturedProjects() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="portfolio-showcase" className="py-24 bg-white dark:bg-[#0D0D10] border-b border-[#E2E2DC] dark:border-[#222228] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Featured Case Studies Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-12 border-b border-[#E2E2DC] dark:border-[#222228] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>// PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0A0A0A] dark:text-white tracking-tight uppercase">
              Selected Recent Work.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-white hover:text-[#FF7120] dark:hover:text-[#FF7120] uppercase tracking-wider"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Selected Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_PROJECTS.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#F6F6F4] dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] overflow-hidden hover:border-[#FF7120] hover:shadow-xl dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between"
            >
              {/* Project Preview Image */}
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

              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#FF7120] uppercase font-semibold">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#8E8E89]">{project.year}</span>
                </div>
                <h4 className="text-xl font-bold text-[#0A0A0A] dark:text-white mb-2 group-hover:text-[#FF7120] transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#6E6E6A] dark:text-[#A0A09B] leading-relaxed mb-6">
                  {project.tagline}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 p-3 rounded-2xl bg-white dark:bg-[#18181D] border border-[#EAEAE4] dark:border-[#24242A] mb-6">
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
              </div>

              <div className="p-7 pt-0 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white dark:bg-[#1C1C22] text-[#6E6E6A] dark:text-[#A0A09B] border border-[#E2E2DC] dark:border-[#282830]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0A0A0A] dark:text-white hover:text-[#FF7120] transition-colors"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Case Study Modal */}
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
              <Link
                href="/portfolio"
                onClick={() => setActiveModalProject(null)}
                className="text-xs font-mono text-[#FF7120] hover:underline"
              >
                Go to Portfolio Page →
              </Link>
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
    </section>
  );
}
