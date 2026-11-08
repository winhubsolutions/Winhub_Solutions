"use client";

import React, { useState } from "react";
import { FAQ_DATA } from "@/data/agencyData";
import { Terminal, Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#0D0D10] border-b border-[#E2E2DC] dark:border-[#222228] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>// GENERAL FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] dark:text-white uppercase">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E6A] dark:text-[#A0A09B] mt-4">
            Everything you need to know about partnering with Winhub Solutions, 
            our technology approach, and our engagement models.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#FAF9F5] dark:bg-[#141418] border-[#FF7120] shadow-sm"
                    : "bg-[#F6F6F4] dark:bg-[#121215] border-[#E2E2DC] dark:border-[#222228] hover:border-[#CCCCCC] dark:hover:border-[#333338]"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0A0A0A] dark:text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#FF7120] text-white"
                        : "bg-white dark:bg-[#1C1C22] text-[#6E6E6A] dark:text-[#A0A09B] border border-[#E2E2DC] dark:border-[#282830]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#555552] dark:text-[#A0A09B] leading-relaxed border-t border-[#EAEAE4] dark:border-[#1E1E24]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 p-8 rounded-3xl bg-[#F6F6F4] dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#222228] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-[#0A0A0A] dark:text-white mb-1">
              Have a specific technical question?
            </h4>
            <p className="text-xs sm:text-sm text-[#6E6E6A] dark:text-[#A0A09B]">
              Our engineering team is ready to analyze your requirements and provide an estimate.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] hover:bg-[#FF7120] dark:hover:bg-[#FF7120] hover:text-white dark:hover:text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors shrink-0"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
