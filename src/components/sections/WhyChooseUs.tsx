"use client";

import React from "react";
import { WHY_CHOOSE_US_DATA } from "@/data/agencyData";
import { Terminal, ShieldCheck, Briefcase, Lock, Sparkles, CheckCircle2 } from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  Terminal,
  Briefcase,
  ShieldCheck,
  Lock,
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-[#F6F6F4] dark:bg-[#0A0A0C] border-b border-[#E2E2DC] dark:border-[#222228] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>// WHY CHOOSE WINHUB SOLUTIONS?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] dark:text-white uppercase leading-tight">
            Your Vision. Our Technology. <br />
            <span className="text-[#FF7120]">Shared Success.</span>
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((item, index) => {
            const Icon = iconMap[item.icon] || Terminal;
            return (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] flex flex-col justify-between hover:border-[#FF7120] hover:shadow-xl dark:hover:shadow-none transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 text-3xl font-black text-[#EFEFEA] dark:text-[#1A1A22] select-none group-hover:text-[#FF7120]/20 transition-colors">
                  0{index + 1}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F6F6F4] dark:bg-[#1A1A20] flex items-center justify-center text-[#FF7120] mb-6 group-hover:bg-[#FF7120] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6E6A] dark:text-[#A0A09B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EFEFEA] dark:border-[#1E1E24] flex items-center gap-2 text-xs font-mono text-[#0A0A0A] dark:text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7120]" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
