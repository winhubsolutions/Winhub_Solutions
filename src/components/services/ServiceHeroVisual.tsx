"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Terminal, Cpu, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface Props {
  slug: string;
  title: string;
  categoryTag: string;
  technologies: string[];
}

export default function ServiceHeroVisual({ slug, title, categoryTag, technologies }: Props) {
  const [activeTab, setActiveTab] = useState<"visual" | "telemetry">("visual");

  return (
    <div className="relative group w-full max-w-xl mx-auto">
      {/* Background Ambient Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7120]/30 to-[#FF9E42]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-500 pointer-events-none" />

      {/* Main Glassmorphism Container */}
      <div className="relative rounded-3xl bg-[#0E0E12] border border-[#26262E] dark:border-[#222228] p-5 sm:p-6 shadow-2xl overflow-hidden text-white">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#222228] mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
            <span className="ml-2 text-[10px] font-mono text-[#8E8E89] uppercase tracking-wider">
              {slug}.spec
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#18181F] p-1 rounded-xl border border-[#2E2E38]">
            <button
              onClick={() => setActiveTab("visual")}
              className={`px-3 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all ${
                activeTab === "visual"
                  ? "bg-[#FF7120] text-white font-bold shadow-sm"
                  : "text-[#8E8E89] hover:text-white"
              }`}
            >
              Graphic
            </button>
            <button
              onClick={() => setActiveTab("telemetry")}
              className={`px-3 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all ${
                activeTab === "telemetry"
                  ? "bg-[#FF7120] text-white font-bold shadow-sm"
                  : "text-[#8E8E89] hover:text-white"
              }`}
            >
              Specs
            </button>
          </div>
        </div>

        {/* Tab Content: Visual Graphic */}
        {activeTab === "visual" ? (
          <div className="relative rounded-2xl overflow-hidden border border-[#22222A] bg-[#050507]">
            <img
              src={`/images/services/${slug}.svg`}
              alt={`${title} Architecture Graphic`}
              className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
              onError={(e) => {
                // Fallback to ai-mesh if custom SVG fails
                (e.target as HTMLImageElement).src = "/images/ai-mesh.jpg";
              }}
            />
            {/* Overlay Chip */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-[#0A0A0E]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-white">
                <span className="w-2 h-2 rounded-full bg-[#FF7120] animate-ping" />
                ACTIVE ENGINE
              </span>
              <span className="text-[#FF7120] font-bold">100% PRODUCTION READY</span>
            </div>
          </div>
        ) : (
          /* Tab Content: Telemetry Specs */
          <div className="space-y-4 py-2 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-[#14141A] border border-[#262630] space-y-2.5">
              <div className="flex justify-between items-center text-[#A0A09B]">
                <span>Architecture Target:</span>
                <span className="text-white font-bold uppercase">{title}</span>
              </div>
              <div className="flex justify-between items-center text-[#A0A09B]">
                <span>Category Domain:</span>
                <span className="text-[#FF7120] font-bold">{categoryTag}</span>
              </div>
              <div className="flex justify-between items-center text-[#A0A09B]">
                <span>Deployment Pipeline:</span>
                <span className="text-emerald-400">CI/CD Automated // Edge</span>
              </div>
              <div className="flex justify-between items-center text-[#A0A09B]">
                <span>Security Hardening:</span>
                <span className="text-white">OWASP Top 10 + SSL/TLS</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase text-[#666666] tracking-widest block mb-2 font-bold">
                CORE FRAMEWORKS & DEPENDENCIES:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-[#1C1C24] border border-[#2A2A35] text-[11px] text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#FF7120]/10 border border-[#FF7120]/20 flex items-center gap-2.5 text-[11px] text-[#FF7120]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Engineered to enterprise standards by Winhub Solutions.</span>
            </div>
          </div>
        )}

        {/* Footer Metrics */}
        <div className="mt-4 pt-3 border-t border-[#1C1C24] flex items-center justify-between text-[10px] font-mono text-[#8E8E89]">
          <span className="flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5 text-[#FF7120]" />
            HIGH-THROUGHPUT ARCHITECTURE
          </span>
          <span className="text-white font-bold">SLA: 99.9% UPTIME</span>
        </div>
      </div>
    </div>
  );
}
