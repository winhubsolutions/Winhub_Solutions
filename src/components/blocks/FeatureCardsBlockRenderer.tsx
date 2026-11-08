"use client";

import React from "react";
import { Sparkles, Shield, Zap, Cpu, Code2, Database, Layers, CheckCircle2 } from "lucide-react";

export interface FeatureCardsBlockProps {
  badge?: string;
  headline?: string;
  subtext?: string;
  cards?: {
    title: string;
    description: string;
    badge?: string;
    iconName?: string;
  }[];
}

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-6 h-6 text-emerald-500" />,
  zap: <Zap className="w-6 h-6 text-amber-500" />,
  cpu: <Cpu className="w-6 h-6 text-cyan-500" />,
  code2: <Code2 className="w-6 h-6 text-indigo-500" />,
  database: <Database className="w-6 h-6 text-purple-500" />,
  layers: <Layers className="w-6 h-6 text-emerald-500" />,
};

export default function FeatureCardsBlockRenderer({
  badge = "WHY WINHUB SOLUTIONS",
  headline = "Engineering Excellence Over Off-the-Shelf Compromise",
  subtext = "How we approach custom software design, database security, and system longevity.",
  cards = [
    {
      title: "Zero-Bloat Architecture",
      description: "We don't use heavy pre-built templates. Every frontend is crafted with clean Next.js, React, and strict TypeScript.",
      badge: "PERFORMANCE",
      iconName: "zap",
    },
    {
      title: "Hardened PostgreSQL Infrastructure",
      description: "ACID-compliant serverless relational databases with automatic pooling, connection limits, and backup redundancy.",
      badge: "SECURITY",
      iconName: "database",
    },
    {
      title: "Autonomous AI & Tool Calling",
      description: "Intelligent agent systems with MCP integration that interface directly with business workflows and APIs.",
      badge: "AI AUTOMATION",
      iconName: "cpu",
    },
    {
      title: "Open Journal Systems Mastery",
      description: "Dedicated scholarly publishing engineers delivering custom OJS 3.x themes, indexing, and editorial setups.",
      badge: "SCHOLARLY",
      iconName: "layers",
    },
  ],
}: FeatureCardsBlockProps) {
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#E2E2DC] dark:border-[#222228] bg-[#FFFFFF] dark:bg-[#141418] p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F6F6F4] dark:bg-[#0A0A0C] border border-[#E2E2DC] dark:border-[#222228] flex items-center justify-center">
                    {iconMap[c.iconName?.toLowerCase() || ""] || <Sparkles className="w-6 h-6 text-emerald-500" />}
                  </div>
                  {c.badge && (
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-[#0A0A0A]/5 dark:bg-white/10 text-[#666666] dark:text-[#A0A0A8]">
                      {c.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mb-2">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A0A0A8] leading-relaxed">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

