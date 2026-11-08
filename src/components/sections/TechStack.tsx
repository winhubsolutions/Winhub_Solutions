"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TECH_CATEGORIES_DATA } from "@/data/agencyData";
import TechIcon from "@/components/icons/TechIcons";
import { Terminal, ArrowRight, Sparkles } from "lucide-react";

export default function TechStack() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);

  const activeCategory = TECH_CATEGORIES_DATA[activeCategoryIdx];

  return (
    <section id="technologies" className="py-24 bg-white dark:bg-[#0D0D10] border-b border-[#E2E2DC] dark:border-[#222228] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>// TECHNOLOGIES WE WORK WITH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] dark:text-white uppercase max-w-2xl">
              Powered by Modern Technologies.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6E6E6A] dark:text-[#A0A09B] max-w-md leading-relaxed">
            We select the right technology for every project to deliver performance, 
            flexibility and long-term maintainability.
          </p>
        </div>

        {/* Capsule Tab Navigation (Matching Target UI Screenshot) */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[#F6F6F4] dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#222228] shadow-inner max-w-full">
            {TECH_CATEGORIES_DATA.map((cat, idx) => {
              const isActive = activeCategoryIdx === idx;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategoryIdx(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#FF7120] text-white shadow-md font-semibold"
                      : "text-[#666666] dark:text-[#A0A09B] hover:text-[#0A0A0A] dark:hover:text-white"
                  }`}
                >
                  {cat.category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Description */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#EAEAE4] dark:border-[#1E1E24]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF7120]" />
            <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white">
              {activeCategory.category} Stack
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#6E6E6A] dark:text-[#8E8E89] hidden sm:block">
            {activeCategory.description}
          </p>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 mb-12">
          {activeCategory.items.map((tech) => (
            <div
              key={tech.name}
              className="p-5 sm:p-6 rounded-2xl bg-[#FAF9F5] dark:bg-[#141418] border border-[#ECEBE4] dark:border-[#222228] flex flex-col items-center justify-center text-center group hover:border-[#FF7120] hover:shadow-lg dark:hover:shadow-none hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center mb-2.5 transform group-hover:scale-110 transition-transform duration-200">
                <div className="grayscale contrast-125 dark:brightness-110 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-300">
                  <TechIcon name={tech.name} className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
                </div>
              </div>
              <span className="text-xs font-semibold text-[#4A4A48] dark:text-[#C5C5C0] group-hover:text-[#FF7120] transition-colors truncate max-w-full block">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* AI & Futuristic Technology Banner with Uploaded Asset */}
        <div className="rounded-3xl overflow-hidden bg-[#0A0A0C] border border-[#222228] relative p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7120]/20 text-[#FF7120] border border-[#FF7120]/30 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI AGENTS & MCP INTEGRATION</span>
            </div>
            <h4 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-4">
              Intelligent Automation That Scales Your Enterprise.
            </h4>
            <p className="text-sm text-[#A0A09B] leading-relaxed mb-6">
              From Model Context Protocol (MCP) servers to autonomous workflow agents, 
              we connect cutting-edge language models directly to your company databases 
              and operational tools.
            </p>
            <Link
              href="/technologies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF7120] hover:bg-[#E85F0F] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors"
            >
              <span>Explore All Technologies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative z-10 lg:w-1/2 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl max-w-sm group">
              <img
                src="/images/ai-mesh.jpg"
                alt="Winhub AI Intelligence Mesh"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-mono text-cyan-400">
                  // WINHUB NEURAL COGNITION ENGINE
                </span>
              </div>
            </div>
          </div>

          {/* Ambient Glow */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#FF7120]/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
