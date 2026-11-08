"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  Plus,
  Minus,
  ArrowRight,
  ArrowUpRight,
  Terminal,
  Globe,
  Layers,
  Smartphone,
  Cpu,
  BookOpen,
  Palette,
  ShoppingBag,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import {
  ServiceFAQItem,
  ServiceCategoryMeta,
  FAQ_CATEGORIES,
} from "@/data/allFaqData";

interface FAQPageClientProps {
  initialFaqs: ServiceFAQItem[];
}

// Icon mapper helper
function renderCategoryIcon(iconName: string, className = "w-5 h-5") {
  switch (iconName) {
    case "Globe":
      return <Globe className={className} />;
    case "Layers":
      return <Layers className={className} />;
    case "Smartphone":
      return <Smartphone className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    case "BookOpen":
      return <BookOpen className={className} />;
    case "Palette":
      return <Palette className={className} />;
    case "ShoppingBag":
      return <ShoppingBag className={className} />;
    case "TrendingUp":
      return <TrendingUp className={className} />;
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
}

export default function FAQPageClient({ initialFaqs }: FAQPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set([initialFaqs[0]?.id || ""])
  );

  // Calculate question count per category
  const categoryCounts = useMemo(() => {
    const map: Record<string, number> = { All: initialFaqs.length };
    FAQ_CATEGORIES.forEach((cat) => {
      map[cat.title] = initialFaqs.filter((f) => f.category === cat.title).length;
    });
    return map;
  }, [initialFaqs]);

  const filteredFaqs = useMemo(() => {
    return initialFaqs.filter((f) => {
      const matchCat =
        selectedCategory === "All" || f.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === "" ||
        f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.serviceTitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [initialFaqs, selectedCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(filteredFaqs.map((f) => f.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  const selectCategoryAndScroll = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
    const target = document.getElementById("faq-accordion-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#282830] text-xs font-mono text-[#FF7120] uppercase tracking-widest mb-4 shadow-sm">
            <Terminal className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE // ALL SERVICES COVERED</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A0A0A] dark:text-white uppercase leading-[1.05] mb-6">
            Frequently Asked <br />
            <span className="text-[#FF7120]">Questions.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#555552] dark:text-[#A0A09B] leading-relaxed">
            Transparent answers across all our service pillars—from custom web development and mobile applications to enterprise AI agents, OJS academic publishing, and technical SEO.
          </p>

          {/* Search Bar */}
          <div className="relative mt-8 max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#888888] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by technology, question, or service..."
              className="w-full pl-12 pr-12 py-3.5 rounded-full bg-white dark:bg-[#121216] border border-[#E2E2DC] dark:border-[#282832] text-sm text-[#0A0A0A] dark:text-white placeholder-[#888888] focus:outline-none focus:border-[#FF7120] focus:ring-2 focus:ring-[#FF7120]/20 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-[#888888] hover:text-[#0A0A0A] dark:hover:text-white cursor-pointer px-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* ─── ALL SERVICES HIGHLIGHT MATRIX ─── */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF7120] font-bold">
                // EXPLORE BY SERVICE PILLAR
              </span>
              <span className="text-xs font-mono text-[#888888]">
                (Click to filter)
              </span>
            </div>
            {selectedCategory !== "All" && (
              <button
                onClick={() => setSelectedCategory("All")}
                className="text-xs font-mono text-[#FF7120] hover:underline cursor-pointer"
              >
                Show All Services ({initialFaqs.length})
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FAQ_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.title;
              const count = categoryCounts[cat.title] || 0;

              return (
                <div
                  key={cat.id}
                  onClick={() => selectCategoryAndScroll(cat.title)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? "bg-white dark:bg-[#16161B] border-[#FF7120] shadow-lg shadow-[#FF7120]/10 ring-2 ring-[#FF7120]/30"
                      : "bg-white/80 dark:bg-[#111114] border-[#E2E2DC] dark:border-[#222228] hover:border-[#FF7120]/50 hover:bg-white dark:hover:bg-[#141418]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-[#FF7120] text-white"
                            : "bg-[#F6F6F4] dark:bg-[#1A1A20] text-[#FF7120] group-hover:bg-[#FF7120] group-hover:text-white"
                        }`}
                      >
                        {renderCategoryIcon(cat.iconName, "w-5 h-5")}
                      </div>

                      <span
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-full border transition-colors ${
                          isSelected
                            ? "bg-[#FF7120]/10 border-[#FF7120] text-[#FF7120] font-bold"
                            : "bg-[#F6F6F4] dark:bg-[#1A1A20] border-[#E2E2DC] dark:border-[#282830] text-[#888888]"
                        }`}
                      >
                        {count} Qs
                      </span>
                    </div>

                    <h2
                      className={`text-base font-bold mb-1.5 transition-colors ${
                        isSelected
                          ? "text-[#FF7120]"
                          : "text-[#0A0A0A] dark:text-white group-hover:text-[#FF7120]"
                      }`}
                    >
                      {cat.title}
                    </h2>

                    <p className="text-xs text-[#666662] dark:text-[#9A9A95] leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F0F0EB] dark:border-[#1E1E24] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#888888]">
                      {isSelected ? "Currently Viewing" : "Click to view FAQs"}
                    </span>
                    {cat.serviceSlug && cat.serviceSlug !== "contact" && (
                      <Link
                        href={`/services/${cat.serviceSlug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] font-mono text-[#FF7120] hover:underline flex items-center gap-1"
                      >
                        <span>Service Page</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── CATEGORY PILLS & CONTROLS ─── */}
        <div
          id="faq-accordion-section"
          className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-4 pb-6 border-b border-[#E2E2DC] dark:border-[#222228]"
        >
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                selectedCategory === "All"
                  ? "bg-[#FF7120] text-white font-bold shadow-md shadow-[#FF7120]/20"
                  : "bg-white dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#282830] text-[#555552] dark:text-[#A0A09B] hover:border-[#FF7120] hover:text-[#0A0A0A] dark:hover:text-white"
              }`}
            >
              All Services ({initialFaqs.length})
            </button>

            {FAQ_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.title;
              const count = categoryCounts[cat.title] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.title)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#FF7120] text-white font-bold shadow-md shadow-[#FF7120]/20"
                      : "bg-white dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#282830] text-[#555552] dark:text-[#A0A09B] hover:border-[#FF7120] hover:text-[#0A0A0A] dark:hover:text-white"
                  }`}
                >
                  {cat.shortLabel} ({count})
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-[#888888]">
            <span className="font-bold text-[#0A0A0A] dark:text-white">
              {filteredFaqs.length} Answers
            </span>
            <span>•</span>
            <button
              onClick={expandAll}
              className="hover:text-[#FF7120] transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <span>•</span>
            <button
              onClick={collapseAll}
              className="hover:text-[#FF7120] transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* ─── ACCORDIONS LIST ─── */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openIds.has(faq.id);

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white dark:bg-[#141418] border-[#FF7120] shadow-md shadow-[#FF7120]/5"
                      : "bg-white/90 dark:bg-[#111115] border-[#E2E2DC] dark:border-[#222228] hover:border-[#CCCCCC] dark:hover:border-[#333338]"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF7120]/10 border border-[#FF7120]/30 text-[10px] font-mono text-[#FF7120] uppercase font-bold tracking-wider">
                          {renderCategoryIcon(faq.iconName, "w-3 h-3")}
                          <span>{faq.category}</span>
                        </span>
                        {faq.serviceTitle && (
                          <span className="text-[10px] font-mono text-[#888888]">
                            // {faq.serviceTitle}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#0A0A0A] dark:text-white leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                        isOpen
                          ? "bg-[#FF7120] text-white"
                          : "bg-[#F6F6F4] dark:bg-[#1C1C22] text-[#6E6E6A] dark:text-[#A0A09B] border border-[#E2E2DC] dark:border-[#282830]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#555552] dark:text-[#A0A09B] leading-relaxed border-t border-[#F2F2EC] dark:border-[#1E1E24]">
                      <p className="mb-4">{faq.answer}</p>

                      {faq.serviceSlug && (
                        <div className="flex items-center gap-2 pt-2 border-t border-dashed border-[#EAEAE4] dark:border-[#222228]">
                          <span className="text-xs font-mono text-[#888888]">
                            Related Capability:
                          </span>
                          <Link
                            href={
                              faq.serviceSlug === "contact"
                                ? "/contact"
                                : `/services/${faq.serviceSlug}`
                            }
                            className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#FF7120] hover:underline"
                          >
                            <span>Explore {faq.serviceTitle}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-[#121216] border border-[#E2E2DC] dark:border-[#222228] rounded-3xl p-8">
            <HelpCircle className="w-12 h-12 text-[#FF7120] mx-auto mb-4 opacity-70" />
            <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white mb-2">
              No matching questions found
            </h3>
            <p className="text-sm text-[#888888] max-w-md mx-auto mb-6">
              We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;.
              Try searching with another keyword or resetting filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-6 py-2.5 rounded-full bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] text-xs font-mono font-bold uppercase hover:bg-[#FF7120] dark:hover:bg-[#FF7120] hover:text-white transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ─── BOTTOM CTA CARD ─── */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#0A0A0A] dark:bg-[#101014] text-white border border-[#222228] relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs font-mono text-[#FF7120] uppercase tracking-wider block">
                HAVE A BESPOKE ARCHITECTURE REQUIREMENT?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                Can&apos;t find the specific answer you need?
              </h3>
              <p className="text-sm text-[#A0A09B] max-w-xl">
                Our engineering team will review your project requirements, API specifications, and infrastructure constraints to provide a transparent technical breakdown.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-[#FF7120] hover:bg-white hover:text-black text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-lg flex items-center gap-2 group"
              >
                <span>Consult With an Engineer</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
