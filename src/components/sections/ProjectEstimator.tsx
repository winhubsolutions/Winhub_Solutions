"use client";

import React, { useState } from "react";
import { Check, Calculator, Sparkles, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

export default function ProjectEstimator() {
  const [selectedService, setSelectedService] = useState("web-app");
  const [selectedTimeline, setSelectedTimeline] = useState("standard");
  const [selectedScale, setSelectedScale] = useState("mid");
  const [includeCMS, setIncludeCMS] = useState(true);
  const [include3D, setInclude3D] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const serviceOptions = [
    { id: "brand-site", name: "Flagship Corporate Website", basePrice: 12000 },
    { id: "web-app", name: "Custom SaaS / Web Application", basePrice: 22000 },
    { id: "ecommerce", name: "Headless E-commerce Ecosystem", basePrice: 18000 },
    { id: "ui-ux", name: "Design System & High-Fi Prototypes", basePrice: 9000 },
  ];

  const timelineOptions = [
    { id: "express", name: "Sprint Accelerated (4-6 Wks)", multiplier: 1.25 },
    { id: "standard", name: "Standard Cadence (8-10 Wks)", multiplier: 1.0 },
    { id: "thorough", name: "Comprehensive Enterprise (12-16 Wks)", multiplier: 1.15 },
  ];

  const scaleOptions = [
    { id: "growth", name: "Under 50k Monthly Active Users", adder: 0 },
    { id: "mid", name: "50k - 500k High Concurrency", adder: 4000 },
    { id: "enterprise", name: "1M+ Global Edge Multi-Region", adder: 9000 },
  ];

  // Calculate estimated investment
  const currentService = serviceOptions.find((s) => s.id === selectedService) || serviceOptions[0];
  const currentTimeline = timelineOptions.find((t) => t.id === selectedTimeline) || timelineOptions[1];
  const currentScale = scaleOptions.find((sc) => sc.id === selectedScale) || scaleOptions[1];

  let calculatedPrice = currentService.basePrice;
  if (includeCMS) calculatedPrice += 3500;
  if (include3D) calculatedPrice += 4500;
  calculatedPrice += currentScale.adder;
  calculatedPrice = Math.round(calculatedPrice * currentTimeline.multiplier);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#FF7120", "#0A0A0A", "#EFEFEA"],
      });
    } catch {
      // fallback
    }

    setSubmitted(true);
  };

  return (
    <section id="estimator" className="py-24 bg-[#F6F6F4] dark:bg-[#0A0A0C] border-b border-[#E2E2DC] dark:border-[#222228] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>// 11. INTERACTIVE PROJECT ESTIMATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] dark:text-white uppercase max-w-2xl">
              CONFIGURE YOUR SYSTEM ARCHITECTURE.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6E6E6A] dark:text-[#A0A09B] max-w-md leading-relaxed">
            Select parameters to calculate estimated capital requirements, 
            timeline projections, and system dependencies in real time.
          </p>
        </div>

        {/* Two-Column Interactive Tool */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls (7 Cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#121215] p-8 sm:p-10 rounded-3xl border border-[#E2E2DC] dark:border-[#222228] shadow-sm space-y-8">
            {/* 1. Core Architecture Scope */}
            <div>
              <span className="text-xs font-mono text-[#8E8E89] uppercase tracking-wider block mb-3 font-semibold">
                STEP 01: SELECT PRIMARY DISCIPLINE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedService(opt.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedService === opt.id
                        ? "border-[#FF7120] bg-[#FFF4ED] dark:bg-[#28170D] text-[#0A0A0A] dark:text-white font-bold"
                        : "border-[#E2E2DC] dark:border-[#282830] bg-[#F6F6F4] dark:bg-[#18181D] text-[#4A4A46] dark:text-[#C5C5BE] hover:border-[#8E8E89]"
                    }`}
                  >
                    <div className="text-xs font-mono text-[#FF7120] mb-1">
                      BASE: ${opt.basePrice.toLocaleString()}
                    </div>
                    <div className="text-xs sm:text-sm">{opt.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Timeline Target */}
            <div>
              <span className="text-xs font-mono text-[#8E8E89] uppercase tracking-wider block mb-3 font-semibold">
                STEP 02: VELOCITY & TIMEFRAME
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timelineOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedTimeline(opt.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedTimeline === opt.id
                        ? "border-[#FF7120] bg-[#FFF4ED] dark:bg-[#28170D] text-[#0A0A0A] dark:text-white font-bold"
                        : "border-[#E2E2DC] dark:border-[#282830] bg-[#F6F6F4] dark:bg-[#18181D] text-[#4A4A46] dark:text-[#C5C5BE] hover:border-[#8E8E89]"
                    }`}
                  >
                    <div className="text-xs">{opt.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Scalability Tier */}
            <div>
              <span className="text-xs font-mono text-[#8E8E89] uppercase tracking-wider block mb-3 font-semibold">
                STEP 03: TARGET TRAFFIC & LOAD
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scaleOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedScale(opt.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedScale === opt.id
                        ? "border-[#FF7120] bg-[#FFF4ED] dark:bg-[#28170D] text-[#0A0A0A] dark:text-white font-bold"
                        : "border-[#E2E2DC] dark:border-[#282830] bg-[#F6F6F4] dark:bg-[#18181D] text-[#4A4A46] dark:text-[#C5C5BE] hover:border-[#8E8E89]"
                    }`}
                  >
                    <div className="text-xs">{opt.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Architectural Add-ons */}
            <div>
              <span className="text-xs font-mono text-[#8E8E89] uppercase tracking-wider block mb-3 font-semibold">
                STEP 04: ARCHITECTURAL EXTENSIONS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIncludeCMS(!includeCMS)}
                  className={`p-4 rounded-xl border text-left flex items-center justify-between ${
                    includeCMS
                      ? "border-[#FF7120] bg-[#FFF4ED] dark:bg-[#28170D] text-[#0A0A0A] dark:text-white"
                      : "border-[#E2E2DC] dark:border-[#282830] bg-[#F6F6F4] dark:bg-[#18181D] text-[#6E6E6A] dark:text-[#9E9E98]"
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-[#0A0A0A] dark:text-white">
                      Headless Payload CMS
                    </div>
                    <div className="text-[11px] text-[#6E6E6A] dark:text-[#9E9E98]">+$3,500 setup</div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center ${
                      includeCMS ? "bg-[#FF7120] text-white" : "border border-[#8E8E89]"
                    }`}
                  >
                    {includeCMS && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setInclude3D(!include3D)}
                  className={`p-4 rounded-xl border text-left flex items-center justify-between ${
                    include3D
                      ? "border-[#FF7120] bg-[#FFF4ED] dark:bg-[#28170D] text-[#0A0A0A] dark:text-white"
                      : "border-[#E2E2DC] dark:border-[#282830] bg-[#F6F6F4] dark:bg-[#18181D] text-[#6E6E6A] dark:text-[#9E9E98]"
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-[#0A0A0A] dark:text-white">
                      Interactive 3D WebGL Canvas
                    </div>
                    <div className="text-[11px] text-[#6E6E6A] dark:text-[#9E9E98]">+$4,500 shaders</div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center ${
                      include3D ? "bg-[#FF7120] text-white" : "border border-[#8E8E89]"
                    }`}
                  >
                    {include3D && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Real-time Calculation Panel (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-[#0A0A0A] text-white rounded-3xl p-8 border border-[#222222] shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-6">
                  <span className="text-xs font-mono text-[#FF7120] uppercase tracking-wider">
                    ESTIMATION TELEMETRY
                  </span>
                  <span className="text-[11px] font-mono text-[#666666]">
                    LIVE AUDIT
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-xs font-mono text-[#8E8E89] uppercase tracking-widest mb-1">
                    ESTIMATED INVESTMENT RANGE:
                  </div>
                  <div className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight flex items-baseline gap-2">
                    <span className="text-[#FF7120]">$</span>
                    <span>{calculatedPrice.toLocaleString()}</span>
                    <span className="text-xs font-mono text-[#8E8E89] font-normal">
                      USD
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#8E8E89] mt-2">
                    Estimated Timeline: {currentTimeline.name.split("(")[1]?.replace(")", "") || "8-10 Weeks"}
                  </div>
                </div>

                {/* Configuration Breakdown */}
                <div className="p-4 rounded-xl bg-[#141417] border border-[#222222] space-y-2 mb-6 text-xs font-mono">
                  <div className="flex justify-between text-[#B0B0B0]">
                    <span>Discipline:</span>
                    <span className="text-white">{currentService.name}</span>
                  </div>
                  <div className="flex justify-between text-[#B0B0B0]">
                    <span>Cadence:</span>
                    <span className="text-white">{currentTimeline.name.split(" ")[0]}</span>
                  </div>
                  <div className="flex justify-between text-[#B0B0B0]">
                    <span>Traffic Tier:</span>
                    <span className="text-white">{currentScale.name.split(" ")[0]}</span>
                  </div>
                  <div className="flex justify-between text-[#B0B0B0]">
                    <span>Payload CMS:</span>
                    <span className={includeCMS ? "text-[#FF7120]" : "text-[#666666]"}>
                      {includeCMS ? "Enabled" : "Omitted"}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#B0B0B0]">
                    <span>3D WebGL Shaders:</span>
                    <span className={include3D ? "text-[#FF7120]" : "text-[#666666]"}>
                      {include3D ? "Included" : "Standard 2D"}
                    </span>
                  </div>
                </div>

                {/* Lock In Estimate Form */}
                {submitted ? (
                  <div className="p-5 rounded-2xl bg-[#1A1A1E] border border-[#FF7120] text-center">
                    <Sparkles className="w-6 h-6 text-[#FF7120] mx-auto mb-2" />
                    <h4 className="text-sm font-bold text-white mb-1">
                      Estimate Locked & Dispatched
                    </h4>
                    <p className="text-xs text-[#8E8E89]">
                      A senior technical director will contact you at {email} within 4 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      required
                      placeholder="corporate.email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-full bg-[#18181C] border border-[#2E2E34] text-xs font-mono text-white placeholder-[#6E6E6A] focus:outline-none focus:border-[#FF7120]"
                    />
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-[#FF7120] hover:bg-[#E85F0F] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#FF7120]/25"
                    >
                      <span>Lock In Specification</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

