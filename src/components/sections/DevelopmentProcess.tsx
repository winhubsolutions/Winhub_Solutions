"use client";

import React from "react";
import { PROCESS_STEPS } from "@/data/agencyData";
import { Terminal, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DevelopmentProcess() {
  return (
    <section id="process" className="py-24 bg-[#F6F6F4] dark:bg-[#0A0A0C] border-b border-[#E2E2DC] dark:border-[#222228] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>// OUR DEVELOPMENT PROCESS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] dark:text-white uppercase max-w-2xl">
              From Concept to Successful Launch.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6E6E6A] dark:text-[#A0A09B] max-w-md leading-relaxed">
            A structured, transparent engineering lifecycle ensuring predictability, 
            enterprise quality, and on-time project delivery.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-8 rounded-3xl bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] flex flex-col justify-between hover:border-[#FF7120] hover:shadow-xl dark:hover:shadow-none transition-all duration-300 group hover:-translate-y-1 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-[#FF7120] font-mono">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#F6F6F4] dark:bg-[#1A1A20] text-[#6E6E6A] dark:text-[#A0A09B] border border-[#E2E2DC] dark:border-[#282830]">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6E6A] dark:text-[#A0A09B] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EFEFEA] dark:border-[#1E1E24] flex items-center gap-2 text-xs font-mono text-[#0A0A0A] dark:text-white">
                <CheckCircle2 className="w-4 h-4 text-[#FF7120]" />
                <span>Verified Milestone</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF7120] text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#0A0A0A] dark:hover:bg-white dark:hover:text-[#0A0A0A] hover:shadow-xl hover:shadow-[#FF7120]/25 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
