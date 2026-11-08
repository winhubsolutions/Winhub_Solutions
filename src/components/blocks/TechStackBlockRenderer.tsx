"use client";

import React, { useEffect, useState } from "react";
import TechIcon from "@/components/icons/TechIcons";
import { Terminal, Sparkles, CheckCircle2 } from "lucide-react";

export interface TechStackBlockProps {
  badge?: string;
  headline?: string;
  subtext?: string;
  activeCategory?: string;
  enableInteractiveTabs?: boolean;
}

interface TechDoc {
  id: number | string;
  name: string;
  category: string;
  iconIdentifier?: string;
  description?: string;
  featured?: boolean;
}

export default function TechStackBlockRenderer({
  badge = "FULL-STACK CAPABILITIES",
  headline = "Modern Technologies & Hardened Stacks",
  subtext = "We engineer on proven, high-performance foundations. Zero bloat, strict typing, and resilient databases.",
  activeCategory = "all",
  enableInteractiveTabs = true,
}: TechStackBlockProps) {
  const [techList, setTechList] = useState<TechDoc[]>([]);
  const [selectedCat, setSelectedCat] = useState<string>(activeCategory);

  const categories = [
    { label: "All Technologies", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Database", value: "database" },
    { label: "CMS & Platforms", value: "cms" },
    { label: "Cloud & DevOps", value: "cloud" },
    { label: "AI & Automation", value: "ai" },
  ];

  useEffect(() => {
    fetch("/api/technologies?limit=100")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.docs?.length > 0) {
          setTechList(data.docs);
        } else {
          // Fallback static list
          setTechList([
            { id: 1, name: "React", category: "frontend", iconIdentifier: "react" },
            { id: 2, name: "Next.js 15", category: "frontend", iconIdentifier: "nextjs" },
            { id: 3, name: "Angular", category: "frontend", iconIdentifier: "angular" },
            { id: 4, name: "Node.js", category: "backend", iconIdentifier: "nodejs" },
            { id: 5, name: "TypeScript", category: "frontend", iconIdentifier: "typescript" },
            { id: 6, name: "PostgreSQL", category: "database", iconIdentifier: "postgresql" },
            { id: 7, name: "Payload CMS", category: "cms", iconIdentifier: "payload" },
            { id: 8, name: "Open Journal Systems", category: "cms", iconIdentifier: "ojs" },
            { id: 9, name: "AI Agents", category: "ai", iconIdentifier: "ai-agents" },
          ]);
        }
      })
      .catch(() => {});
  }, []);

  const displayedTech = selectedCat === "all"
    ? techList
    : techList.filter((t) => t.category.toLowerCase() === selectedCat.toLowerCase());

  return (
    <section className="py-24 border-b border-[#E2E2DC] dark:border-[#222228] bg-[#F6F6F4] dark:bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
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

          {enableInteractiveTabs && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setSelectedCat(c.value)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                    selectedCat === c.value
                      ? "bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] shadow-sm scale-105"
                      : "border border-[#D5D5CE] dark:border-[#2A2A30] bg-[#FFFFFF]/60 dark:bg-[#141418]/60 text-[#666666] dark:text-[#A0A0A8] hover:bg-[#EFEFEA] dark:hover:bg-[#1C1C22]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {displayedTech.map((tech) => (
            <div
              key={tech.id}
              className="rounded-2xl border border-[#E2E2DC] dark:border-[#222228] bg-[#FFFFFF] dark:bg-[#141418] p-5 flex flex-col items-center justify-center text-center hover:border-emerald-500/50 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <TechIcon name={tech.iconIdentifier || tech.name} className="w-10 h-10" />
              </div>
              <span className="text-sm font-semibold text-[#0A0A0A] dark:text-white mb-1">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#777777] dark:text-[#888890]">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

