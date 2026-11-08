"use client";

import React, { useState, useEffect } from "react";
import { STATISTICS_DATA } from "@/data/agencyData";
import { Activity, ShieldCheck, TrendingUp, Award } from "lucide-react";

export default function AnimatedStatistics() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    projects: 0,
    uptime: 0,
    valuation: 0,
    awards: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      setCounts({
        projects: Math.floor(ease * 140),
        uptime: parseFloat((ease * 99.98).toFixed(2)),
        valuation: Math.floor(ease * 420),
        awards: Math.floor(ease * 14),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          projects: 140,
          uptime: 99.98,
          valuation: 420,
          awards: 14,
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const icons = [Activity, ShieldCheck, TrendingUp, Award];

  return (
    <section className="py-20 bg-[#EFEFEA] dark:bg-[#0D0D10] border-b border-[#E2E2DC] dark:border-[#222228] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between mb-12 pb-6 border-b border-[#E2E2DC] dark:border-[#222228]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#0A0A0A] dark:text-white uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#FF7120]" />
            <span>02. TELEMETRY & MEASURED IMPACT</span>
          </div>
          <div className="text-xs font-mono text-[#8E8E89] hidden sm:block">
            AUDITED PERFORMANCE METRICS // 2026
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATISTICS_DATA.map((stat, idx) => {
            const Icon = icons[idx];
            let displayVal = "";
            if (stat.id === "projects") displayVal = `${counts.projects}+`;
            if (stat.id === "uptime") displayVal = `${counts.uptime}%`;
            if (stat.id === "valuation") displayVal = `$${counts.valuation}M+`;
            if (stat.id === "awards") displayVal = `${counts.awards}`;

            return (
              <div
                key={stat.id}
                className="bg-[#F6F6F4] dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] rounded-2xl p-7 transition-all duration-300 hover:border-[#FF7120] hover:bg-white dark:hover:bg-[#18181D] hover:shadow-lg group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#8E8E89]">
                    METRIC // 0{idx + 1}
                  </span>
                  <Icon className="w-4 h-4 text-[#8E8E89] group-hover:text-[#FF7120] transition-colors" />
                </div>

                <div className="text-4xl sm:text-5xl font-black text-[#0A0A0A] dark:text-white tracking-tight mb-2 group-hover:text-[#FF7120] transition-colors font-mono">
                  {displayVal}
                </div>

                <div className="text-sm font-bold text-[#0A0A0A] dark:text-white mb-2 uppercase tracking-wide">
                  {stat.label}
                </div>

                <p className="text-xs text-[#6E6E6A] dark:text-[#9E9E98] leading-relaxed">
                  {stat.description}
                </p>

                <div className="mt-5 w-full bg-[#E5E5DE] dark:bg-[#222228] h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-[#FF7120] h-full transition-all duration-1000"
                    style={{ width: `${Math.min(100, 40 + idx * 20)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

