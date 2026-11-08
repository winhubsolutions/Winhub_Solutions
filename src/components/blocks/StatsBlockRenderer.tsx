"use client";

import React from "react";

export interface StatsBlockProps {
  headline?: string;
  statItems?: {
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
    description?: string;
  }[];
}

export default function StatsBlockRenderer({
  headline,
  statItems = [
    { value: 150, suffix: "+", label: "Projects Completed", description: "Across 7 global markets" },
    { value: 18, suffix: "", label: "Engineering Disciplines", description: "Full-stack web & scholarly platforms" },
    { value: 99.9, suffix: "%", label: "Production Uptime", description: "Hardened serverless architecture" },
    { value: 50, suffix: "+", label: "Enterprise Clients", description: "From startups to research editors" },
  ],
}: StatsBlockProps) {
  return (
    <section className="py-20 border-b border-[#E2E2DC] dark:border-[#222228] bg-[#F6F6F4] dark:bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {headline && (
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0A0A0A] dark:text-white mb-12">
            {headline}
          </h2>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statItems.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#E2E2DC] dark:border-[#222228] bg-[#FFFFFF] dark:bg-[#141418] p-6 text-center hover:border-emerald-500/50 transition-all shadow-sm"
            >
              <div className="text-3xl sm:text-5xl font-mono font-bold text-[#0A0A0A] dark:text-white mb-2">
                {stat.prefix || ""}
                {stat.value}
                {stat.suffix || ""}
              </div>
              <div className="text-sm font-semibold text-[#0A0A0A] dark:text-white mb-1">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-xs text-[#777777] dark:text-[#888890]">
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

