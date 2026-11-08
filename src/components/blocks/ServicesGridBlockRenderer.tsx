"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { getServices } from "@/payload/client";
import { ServiceDoc } from "@/payload/types";

export interface ServicesGridBlockProps {
  badge?: string;
  headline?: string;
  subtext?: string;
  layoutMode?: "carousel" | "grid-3" | "bento";
  categoryFilter?: string;
  displayLimit?: number;
}

export default function ServicesGridBlockRenderer({
  badge = "CORE EXPERTISE",
  headline = "18 Specialized Engineering Disciplines",
  subtext = "From sub-second Next.js interfaces to complex asynchronous Node.js backends and scholarly publishing infrastructure.",
  layoutMode = "carousel",
  categoryFilter = "all",
  displayLimit = 18,
}: ServicesGridBlockProps) {
  const [services, setServices] = useState<ServiceDoc[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getServices().then((data) => {
      let filtered = data;
      if (categoryFilter && categoryFilter !== "all") {
        filtered = filtered.filter((s) => s.category?.toLowerCase() === categoryFilter.toLowerCase());
      }
      if (displayLimit > 0) {
        filtered = filtered.slice(0, displayLimit);
      }
      setServices(filtered);
    });
  }, [categoryFilter, displayLimit]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 border-b border-[#E2E2DC] dark:border-[#222228] bg-[#EFEFEA] dark:bg-[#0D0D10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
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

          {layoutMode === "carousel" && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous service"
                className="w-11 h-11 rounded-xl border border-[#D5D5CE] dark:border-[#2A2A30] bg-[#FFFFFF] dark:bg-[#141418] flex items-center justify-center text-[#0A0A0A] dark:text-white hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next service"
                className="w-11 h-11 rounded-xl border border-[#D5D5CE] dark:border-[#2A2A30] bg-[#FFFFFF] dark:bg-[#141418] flex items-center justify-center text-[#0A0A0A] dark:text-white hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all shadow-sm active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {layoutMode === "carousel" ? (
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none px-4 sm:px-8 pb-4 pt-2 snap-x snap-mandatory max-w-7xl mx-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <div
              key={service.slug || index}
              className="flex-shrink-0 w-[300px] sm:w-[350px] snap-start rounded-2xl border border-[#E2E2DC] dark:border-[#222228] bg-[#FFFFFF] dark:bg-[#141418] p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="w-full h-40 rounded-xl bg-[#F6F6F4] dark:bg-[#0A0A0C] border border-[#E2E2DC] dark:border-[#222228] relative overflow-hidden mb-6 flex items-center justify-center">
                  <Image
                    src={`/images/services/${service.slug}.svg`}
                    alt={service.title}
                    width={320}
                    height={160}
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A0A0A]/5 dark:bg-white/10 text-[#666666] dark:text-[#A0A0A8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A0A0A8] line-clamp-3 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform"
              >
                <span>EXPLORE DISCIPLINE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.slug || index}
              className="rounded-2xl border border-[#E2E2DC] dark:border-[#222228] bg-[#FFFFFF] dark:bg-[#141418] p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="w-full h-40 rounded-xl bg-[#F6F6F4] dark:bg-[#0A0A0C] border border-[#E2E2DC] dark:border-[#222228] relative overflow-hidden mb-6 flex items-center justify-center">
                  <Image
                    src={`/images/services/${service.slug}.svg`}
                    alt={service.title}
                    width={320}
                    height={160}
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A0A0A]/5 dark:bg-white/10 text-[#666666] dark:text-[#A0A0A8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A0A0A8] line-clamp-3 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform"
              >
                <span>EXPLORE DISCIPLINE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

