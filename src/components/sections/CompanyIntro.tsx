"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Award, Briefcase, Code, Users } from "lucide-react";
import { ABOUT_DATA } from "@/data/agencyData";

export default function CompanyIntro() {
  const highlightIcons = [Briefcase, Award, Code, Users];

  return (
    <section id="about-intro" className="py-24 bg-white dark:bg-[#0D0D10] border-b border-[#E2E2DC] dark:border-[#222228] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>// ABOUT WINHUB SOLUTIONS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight leading-tight">
              Technology That Turns <br />
              <span className="text-[#FF7120]">Ideas Into Reality.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#555552] dark:text-[#A0A09B] leading-relaxed">
              <p className="font-medium text-[#1A1A18] dark:text-white">
                {ABOUT_DATA.intro}
              </p>
              {ABOUT_DATA.descriptionParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] hover:bg-[#FF7120] dark:hover:bg-[#FF7120] hover:text-white dark:hover:text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-md group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#FF7120] group-hover:text-white transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Highlights Bento Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT_DATA.highlights.map((item, index) => {
              const Icon = highlightIcons[index % highlightIcons.length];
              return (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl bg-[#F6F6F4] dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#222228] flex flex-col justify-between hover:border-[#FF7120] transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1C1C22] border border-[#E2E2DC] dark:border-[#282830] flex items-center justify-center text-[#FF7120] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#8E8E89] uppercase tracking-wider block mb-1">
                      {item.label}
                    </span>
                    <h3 className="text-xl font-black text-[#0A0A0A] dark:text-white tracking-tight">
                      {item.value}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
