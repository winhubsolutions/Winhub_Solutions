"use client";

import React from "react";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export interface ProcessBlockProps {
  badge?: string;
  headline?: string;
  subtext?: string;
  steps?: {
    stepNumber: string;
    title: string;
    description: string;
    deliverable?: string;
  }[];
}

export default function ProcessBlockRenderer({
  badge = "EXECUTION METHODOLOGY",
  headline = "From Architecture Discovery to Zero-Downtime Deployment",
  subtext = "Our battle-tested sprint lifecycle ensures predictability, continuous testing, and on-time delivery.",
  steps = [
    {
      stepNumber: "01",
      title: "Technical Discovery & Architecture",
      description: "We map business domain entities, database schemas, security requirements, and system boundaries.",
      deliverable: "Architecture Blueprint & Schema Spec",
    },
    {
      stepNumber: "02",
      title: "UI/UX Engineering & Design Tokens",
      description: "High-fidelity interactive components and design systems built in Figma and ported into Tailwind.",
      deliverable: "Component Library & Wireframes",
    },
    {
      stepNumber: "03",
      title: "Full-Stack Agile Implementation",
      description: "Two-week test-driven sprints delivering working software with strict typing and continuous code reviews.",
      deliverable: "Live Staging Deployments",
    },
    {
      stepNumber: "04",
      title: "Hardened Production Deployment",
      description: "Global edge CDN configuration, database pooling, zero-downtime cutover, and 24/7 telemetry monitoring.",
      deliverable: "Production Release & SLA",
    },
  ],
}: ProcessBlockProps) {
  return (
    <section className="py-24 border-b border-[#E2E2DC] dark:border-[#222228] bg-[#EFEFEA] dark:bg-[#0D0D10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
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
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#E2E2DC] dark:border-[#222228] bg-[#FFFFFF] dark:bg-[#141418] p-6 flex flex-col justify-between relative group hover:border-emerald-500/50 hover:shadow-lg transition-all"
            >
              <div>
                <span className="text-3xl font-mono font-bold text-emerald-500 mb-4 block">
                  {s.stepNumber}
                </span>
                <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A0A0A8] leading-relaxed mb-6">
                  {s.description}
                </p>
              </div>

              {s.deliverable && (
                <div className="pt-4 border-t border-[#E2E2DC] dark:border-[#222228] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-[11px] font-mono text-[#777777] dark:text-[#888890]">
                    {s.deliverable}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

