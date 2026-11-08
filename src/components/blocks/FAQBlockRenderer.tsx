"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, ChevronDown } from "lucide-react";
import { getFAQs } from "@/payload/client";
import { FAQDoc } from "@/payload/types";

export interface FAQBlockProps {
  badge?: string;
  headline?: string;
  subtext?: string;
  categoryFilter?: string;
}

export default function FAQBlockRenderer({
  badge = "FREQUENTLY ASKED QUESTIONS",
  headline = "Clear Answers to Technical Questions",
  subtext = "Everything you need to know about our stacks, OJS workflows, and engagement models.",
  categoryFilter = "all",
}: FAQBlockProps) {
  const [faqs, setFaqs] = useState<FAQDoc[]>([]);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  useEffect(() => {
    getFAQs(categoryFilter === "all" ? undefined : categoryFilter).then((data) => {
      setFaqs(data);
    });
  }, [categoryFilter]);

  return (
    <section className="py-24 border-b border-[#E2E2DC] dark:border-[#222228] bg-[#F6F6F4] dark:bg-[#0A0A0C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
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

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.id || idx}
                className="rounded-2xl border border-[#E2E2DC] dark:border-[#222228] bg-[#FFFFFF] dark:bg-[#141418] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:text-emerald-500 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#0A0A0A] dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-[#888890] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-emerald-500" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#555555] dark:text-[#A0A0A8] leading-relaxed border-t border-[#F0F0EB] dark:border-[#1E1E24]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

