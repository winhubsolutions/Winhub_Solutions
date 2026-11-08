"use client";

import React from "react";

interface MarqueeTickerProps {
  items?: string[];
  reverse?: boolean;
  className?: string;
}

export default function MarqueeTicker({
  items = [
    "NEXT.JS APPS",
    "CUSTOM WEB DEVELOPMENT",
    "HIGH-CONVERSION E-COMMERCE",
    "SPATIAL UI/UX DESIGN",
    "ENTERPRISE SAAS",
    "HEADLESS PAYLOAD CMS",
    "TECHNICAL SEO",
    "ZERO-LATENCY EDGE ROUTING",
    "SUB-SECOND TTFB",
    "B2B PLATFORMS",
  ],
  reverse = false,
  className = "",
}: MarqueeTickerProps) {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div
      className={`w-full overflow-hidden whitespace-nowrap bg-[#0A0A0A] text-white py-3.5 border-y border-[#222222] ${className}`}
    >
      <div
        className={`inline-block ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {repeatedItems.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center mx-4 sm:mx-6 text-xs sm:text-sm font-mono tracking-widest uppercase text-[#D6D6D6]"
          >
            <span className="text-[#FF7120] mr-3">✦</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

