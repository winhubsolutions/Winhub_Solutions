"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { getProjects } from "@/payload/client";
import { ProjectDoc } from "@/payload/types";

export interface ProjectsBlockProps {
  badge?: string;
  headline?: string;
  subtext?: string;
  featuredOnly?: boolean;
  showViewAllButton?: boolean;
}

export default function ProjectsBlockRenderer({
  badge = "SELECTED WORK",
  headline = "Real Platforms. Measurable Impact.",
  subtext = "A selection of recent enterprise portals, scholarly journals, and AI automation engines delivered by Winhub Solutions.",
  featuredOnly = true,
  showViewAllButton = true,
}: ProjectsBlockProps) {
  const [projects, setProjects] = useState<ProjectDoc[]>([]);

  useEffect(() => {
    getProjects().then((data) => {
      const filtered = featuredOnly ? data.filter((p) => p.featured) : data;
      setProjects(filtered);
    });
  }, [featuredOnly]);

  return (
    <section className="py-24 border-b border-[#E2E2DC] dark:border-[#222228] bg-[#EFEFEA] dark:bg-[#0D0D10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D5D5CE] dark:border-[#2A2A30] bg-[#FFFFFF]/60 dark:bg-[#141418]/60 text-xs font-mono font-medium text-[#666666] dark:text-[#A0A0A8] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                <span>{badge}</span>
              </div>
            )}
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0A0A0A] dark:text-white leading-tight">
              {headline}
            </h2>
            {subtext && (
              <p className="text-sm sm:text-base text-[#666666] dark:text-[#A0A0A8] mt-4 leading-relaxed">
                {subtext}
              </p>
            )}
          </div>

          {showViewAllButton && (
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#D5D5CE] dark:border-[#2A2A30] bg-[#FFFFFF] dark:bg-[#141418] text-xs font-mono font-medium text-[#0A0A0A] dark:text-white hover:border-emerald-500 transition-all shadow-sm active:scale-95"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <div
              key={p.slug || idx}
              className="rounded-3xl border border-[#E2E2DC] dark:border-[#222228] bg-[#FFFFFF] dark:bg-[#141418] p-8 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-xl transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                  <span className="text-xs font-mono text-[#888890]">{p.year}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#0A0A0A] dark:text-white mb-3 group-hover:text-emerald-500 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs font-mono text-[#666666] dark:text-[#A0A0A8] mb-4">
                  Client: {p.client}
                </p>
                <p className="text-sm text-[#666666] dark:text-[#A0A0A8] leading-relaxed mb-6">
                  {p.shortDescription}
                </p>
              </div>

              {p.metrics && (
                <div className="pt-6 border-t border-[#E2E2DC] dark:border-[#222228] flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                    {p.metrics}
                  </span>
                  <Link
                    href={`/portfolio`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#0A0A0A] dark:text-white group-hover:text-emerald-500 transition-colors"
                  >
                    <span>CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

