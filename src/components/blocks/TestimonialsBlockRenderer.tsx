"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, Star, Quote } from "lucide-react";

export interface TestimonialsBlockProps {
  badge?: string;
  headline?: string;
  subtext?: string;
  featuredOnly?: boolean;
}

interface TestimonialDoc {
  id: string | number;
  author: string;
  position?: string;
  company?: string;
  rating?: number;
  quote: string;
  featured?: boolean;
}

export default function TestimonialsBlockRenderer({
  badge = "TRUST & PARTNERSHIPS",
  headline = "Endorsed by Editors, CTOs & Enterprise Founders",
  subtext = "Read what technical leaders and academic institutions say about partnering with Winhub Solutions.",
  featuredOnly = true,
}: TestimonialsBlockProps) {
  const [items, setItems] = useState<TestimonialDoc[]>([]);

  useEffect(() => {
    fetch("/api/testimonials?limit=20")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.docs?.length > 0) {
          const list = featuredOnly ? data.docs.filter((d: TestimonialDoc) => d.featured) : data.docs;
          setItems(list);
        } else {
          setItems([
            {
              id: 1,
              author: "Dr. Rajeshwar Rao",
              position: "Editor-in-Chief",
              company: "Asian Journal of Applied Sciences",
              quote: "Winhub Solutions transformed our academic journal with an outstanding OJS 3.x upgrade and responsive theme. Our submissions increased significantly.",
              rating: 5,
            },
            {
              id: 2,
              author: "Vikram Reddy",
              position: "CTO",
              company: "AstraLogix Enterprise",
              quote: "Their team built a high-throughput React & Node.js platform that handles hundreds of thousands of daily requests with sub-second latency.",
              rating: 5,
            },
            {
              id: 3,
              author: "Priya Sharma",
              position: "VP Product",
              company: "Nexus FinTech Labs",
              quote: "The AI agent automation designed by Winhub cut our operational ticket triage time by 75%. Exceptional engineering precision.",
              rating: 5,
            },
          ]);
        }
      })
      .catch(() => {});
  }, [featuredOnly]);

  return (
    <section className="py-24 border-b border-[#E2E2DC] dark:border-[#222228] bg-[#EFEFEA] dark:bg-[#0D0D10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-[#E2E2DC] dark:border-[#222228] bg-[#FFFFFF] dark:bg-[#141418] p-8 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  {Array.from({ length: item.rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#444444] dark:text-[#D0D0D8] leading-relaxed italic mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[#E2E2DC] dark:border-[#222228] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#0A0A0A] dark:text-white text-sm">
                    {item.author}
                  </h4>
                  <p className="text-xs text-[#777777] dark:text-[#888890] mt-0.5">
                    {item.position}{item.position && item.company ? " · " : ""}{item.company}
                  </p>
                </div>
                <Quote className="w-6 h-6 text-[#D5D5CE] dark:text-[#33333C]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

