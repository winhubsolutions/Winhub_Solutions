"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/agencyData";
import {
  Globe,
  Layers,
  Smartphone,
  Cpu,
  BookOpen,
  Palette,
  ShoppingBag,
  TrendingUp,
  ArrowRight,
  Terminal,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal,
} from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  Globe,
  Layers,
  Smartphone,
  Cpu,
  BookOpen,
  Palette,
  ShoppingBag,
  TrendingUp,
};

export default function ServicesShowcase() {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  const selectedService = SERVICES_DATA.find((s) => s.id === activeModalId);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    // Approximate active card index
    const cardWidth = 360;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlideIndex(Math.min(Math.max(0, index), SERVICES_DATA.length - 1));
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [viewMode]);

  // Auto-play scroll effect in carousel mode
  useEffect(() => {
    if (viewMode !== "carousel" || isPaused) return;

    const timer = setInterval(() => {
      if (!carouselRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      if (scrollLeft >= scrollWidth - clientWidth - 20) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: 360, behavior: "smooth" });
      }
    }, 4500);

    return () => clearInterval(timer);
  }, [viewMode, isPaused]);

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 370;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToSlide = (index: number) => {
    if (!carouselRef.current) return;
    const scrollAmount = 370;
    carouselRef.current.scrollTo({
      left: index * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="services-showcase" className="py-24 bg-[#F6F6F4] dark:bg-[#0A0A0C] border-b border-[#E2E2DC] dark:border-[#222228] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>// OUR SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] dark:text-white uppercase max-w-2xl leading-[1.08]">
              Digital Solutions Designed Around Your Business.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-sm sm:text-base text-[#6E6E6A] dark:text-[#A0A09B] max-w-md leading-relaxed md:text-right">
              We provide comprehensive IT services to help businesses innovate,
              automate and expand their digital presence.
            </p>

            {/* View Mode & Carousel Controls */}
            <div className="flex items-center gap-3">
              {/* Carousel vs Grid Toggle */}
              <div className="flex items-center bg-white dark:bg-[#141418] p-1 rounded-full border border-[#E2E2DC] dark:border-[#222228] shadow-sm">
                <button
                  onClick={() => setViewMode("carousel")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    viewMode === "carousel"
                      ? "bg-[#FF7120] text-white font-bold shadow-sm"
                      : "text-[#6E6E6A] dark:text-[#A0A09B] hover:text-[#0A0A0A] dark:hover:text-white"
                  }`}
                  aria-label="Carousel View"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Carousel</span>
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    viewMode === "grid"
                      ? "bg-[#FF7120] text-white font-bold shadow-sm"
                      : "text-[#6E6E6A] dark:text-[#A0A09B] hover:text-[#0A0A0A] dark:hover:text-white"
                  }`}
                  aria-label="Grid View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Grid</span>
                </button>
              </div>

              {/* Prev / Next Chevrons (Shown in Carousel mode) */}
              {viewMode === "carousel" && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleScroll("left")}
                    disabled={!canScrollLeft}
                    className={`p-2.5 rounded-full bg-white dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#222228] text-[#0A0A0A] dark:text-white transition-all shadow-sm ${
                      canScrollLeft
                        ? "hover:bg-[#FF7120] hover:text-white hover:border-[#FF7120] cursor-pointer"
                        : "opacity-40 cursor-not-allowed"
                    }`}
                    aria-label="Scroll Carousel Left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <span className="text-xs font-mono text-[#8E8E89] px-1 hidden sm:inline">
                    {`0${activeSlideIndex + 1}`} / {`0${SERVICES_DATA.length}`}
                  </span>

                  <button
                    onClick={() => handleScroll("right")}
                    disabled={!canScrollRight}
                    className={`p-2.5 rounded-full bg-white dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#222228] text-[#0A0A0A] dark:text-white transition-all shadow-sm ${
                      canScrollRight
                        ? "hover:bg-[#FF7120] hover:text-white hover:border-[#FF7120] cursor-pointer"
                        : "opacity-40 cursor-not-allowed"
                    }`}
                    aria-label="Scroll Carousel Right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Services Container: Carousel Track vs Grid */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className={
            viewMode === "carousel"
              ? "flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 no-scrollbar -mx-4 px-4 sm:-mx-8 sm:px-8 cursor-grab active:cursor-grabbing"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-4"
          }
        >
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className={`group p-7 rounded-3xl bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] flex flex-col justify-between hover:border-[#FF7120] hover:shadow-xl dark:hover:shadow-none transition-all duration-300 relative overflow-hidden ${
                  viewMode === "carousel"
                    ? "flex-shrink-0 w-[290px] sm:w-[330px] md:w-[360px] snap-start"
                    : "w-full hover:-translate-y-1"
                }`}
              >
                {/* Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#FF7120] transition-colors" />

                <div>
                  {/* Relevant Graphic Thumbnail */}
                  <div className="relative mb-5 rounded-2xl overflow-hidden border border-[#E2E2DC] dark:border-[#222228] bg-[#0E0E12] aspect-[16/9]">
                    <img
                      src={`/images/services/${service.id}.svg`}
                      alt={service.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/ai-mesh.jpg";
                      }}
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[9px] font-mono text-white/80 border border-white/10 uppercase">
                      {service.id}
                    </div>
                  </div>

                  {/* Top Metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#8E8E89] group-hover:text-[#FF7120] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#F6F6F4] dark:bg-[#1A1A20] flex items-center justify-center text-[#0A0A0A] dark:text-white group-hover:bg-[#FF7120] group-hover:text-white transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white tracking-tight mb-3 group-hover:text-[#FF7120] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6E6A] dark:text-[#A0A09B] leading-relaxed mb-6 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Sub Services Badges */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.subServices.slice(0, 3).map((sub) => (
                      <span
                        key={sub}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F6F6F4] dark:bg-[#1A1A20] text-[#6E6E6A] dark:text-[#A0A09B] border border-[#E2E2DC] dark:border-[#282830]"
                      >
                        {sub}
                      </span>
                    ))}
                    {service.subServices.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#FF7120]">
                        +{service.subServices.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#EFEFEA] dark:border-[#1E1E24] flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalId(service.id)}
                      className="text-xs font-mono font-semibold text-[#0A0A0A] dark:text-white group-hover:text-[#FF7120] transition-colors"
                    >
                      Specifications
                    </button>
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#FF7120] hover:underline"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicator Dots (Visible in Carousel View) */}
        {viewMode === "carousel" && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {SERVICES_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                aria-label={`Jump to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlideIndex === i
                    ? "w-8 bg-[#FF7120]"
                    : "w-2 bg-[#D5D5CF] dark:bg-[#282830] hover:bg-[#FF7120]/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] hover:bg-[#FF7120] dark:hover:bg-[#FF7120] hover:text-white dark:hover:text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-md group"
          >
            <span>Explore All 18 Services</span>
            <ArrowRight className="w-4 h-4 text-[#FF7120] group-hover:text-white transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalId(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#F6F6F4] dark:bg-[#1C1C22] text-[#6E6E6A] dark:text-[#A0A09B] hover:text-[#0A0A0A] dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-[#FF7120] uppercase block mb-1">
              SPECIFICATION // {selectedService.number}
            </span>
            <h3 className="text-2xl font-black text-[#0A0A0A] dark:text-white mb-4">
              {selectedService.title}
            </h3>
            <p className="text-sm text-[#555552] dark:text-[#A0A09B] leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="mb-6">
              <span className="text-xs font-mono text-[#0A0A0A] dark:text-white uppercase font-bold block mb-3">
                Covered Disciplines:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.subServices.map((sub) => (
                  <div key={sub} className="flex items-center gap-2 text-xs font-mono text-[#6E6E6A] dark:text-[#A0A09B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7120] shrink-0" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#EFEFEA] dark:border-[#1E1E24] flex items-center justify-between">
              <Link
                href={`/services/${selectedService.id}`}
                onClick={() => setActiveModalId(null)}
                className="text-xs font-mono text-[#FF7120] hover:underline flex items-center gap-1 font-bold"
              >
                <span>Visit Dedicated Service Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setActiveModalId(null)}
                className="px-5 py-2.5 rounded-full bg-[#FF7120] text-white text-xs font-mono font-bold uppercase hover:bg-[#0A0A0A] transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
