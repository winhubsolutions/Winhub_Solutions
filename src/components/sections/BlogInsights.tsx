"use client";

import React from "react";
import { INSIGHTS_DATA } from "@/data/agencyData";
import { ArrowUpRight, Clock } from "lucide-react";

export default function BlogInsights() {
  return (
    <section id="insights" className="py-24 bg-[#F6F6F4] dark:bg-[#0A0A0C] border-b border-[#E2E2DC] dark:border-[#222228] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest mb-3">
              <span>// 09. RESEARCH & INTELLIGENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] dark:text-white uppercase max-w-2xl">
              TECHNICAL PAPERS & DISPATCHES.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6E6E6A] dark:text-[#A0A09B] max-w-md leading-relaxed">
            Unfiltered engineering teardowns, performance benchmarks, and 
            architectural methodologies from our senior engineering group.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS_DATA.map((article) => (
            <article
              key={article.id}
              className="group bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] rounded-3xl p-7 transition-all duration-300 hover:shadow-xl hover:border-[#FF7120]/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#EFEFEA] dark:border-[#1E1E24] mb-5">
                  <span className="text-xs font-mono text-[#FF7120] uppercase font-semibold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#8E8E89]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white tracking-tight mb-3 group-hover:text-[#FF7120] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6E6E6A] dark:text-[#A0A09B] leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-5 border-t border-[#EFEFEA] dark:border-[#1E1E24] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0A0A0A] dark:text-white">
                    {article.author.name}
                  </div>
                  <div className="text-[10px] font-mono text-[#8E8E89]">
                    {article.author.role}
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#F6F6F4] dark:bg-[#18181D] flex items-center justify-center text-[#0A0A0A] dark:text-white group-hover:bg-[#FF7120] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

