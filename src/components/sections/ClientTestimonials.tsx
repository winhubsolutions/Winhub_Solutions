"use client";

import React, { useState } from "react";
import { TESTIMONIALS_DATA } from "@/data/agencyData";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-[#EFEFEA] dark:bg-[#0D0D10] border-b border-[#E2E2DC] dark:border-[#222228] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest mb-3">
              <span>// 08. CLIENT ENDORSEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] dark:text-white uppercase max-w-2xl">
              VERIFIED ENTERPRISE FEEDBACK.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white dark:bg-[#141417] border border-[#E2E2DC] dark:border-[#282830] flex items-center justify-center text-[#0A0A0A] dark:text-white hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white dark:bg-[#141417] border border-[#E2E2DC] dark:border-[#282830] flex items-center justify-center text-[#0A0A0A] dark:text-white hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white dark:bg-[#121215] border rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                currentIndex === idx
                  ? "border-[#FF7120] shadow-xl shadow-[#FF7120]/10 scale-[1.02]"
                  : "border-[#E2E2DC] dark:border-[#222228] opacity-85 hover:opacity-100"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#FF7120]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#F6F6F4] dark:bg-[#18181D] text-[#6E6E6A] dark:text-[#A0A09B] uppercase">
                    {item.projectType}
                  </span>
                </div>

                <blockquote className="text-sm sm:text-base text-[#222222] dark:text-[#E0E0DB] font-normal leading-relaxed mb-8">
                  “{item.quote}”
                </blockquote>
              </div>

              <div className="pt-6 border-t border-[#EFEFEA] dark:border-[#1E1E24] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] font-mono font-bold text-xs flex items-center justify-center">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0A0A0A] dark:text-white">
                    {item.author}
                  </div>
                  <div className="text-xs text-[#6E6E6A] dark:text-[#8E8E89]">
                    {item.role}, <span className="text-[#0A0A0A] dark:text-white font-medium">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

