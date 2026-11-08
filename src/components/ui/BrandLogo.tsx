"use client";

import React from "react";

interface BrandLogoProps {
  className?: string;
  iconClassName?: string;
  showTagline?: boolean;
  inverted?: boolean; // Set to true when placed on an inherently dark background (e.g. Footer)
}

export default function BrandLogo({
  className = "",
  iconClassName = "h-8 sm:h-9",
  showTagline = true,
  inverted = false,
}: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* 3D Prism Emblem */}
      <img
        src="/logo-icon.png"
        alt="Winhub Solutions"
        className={`${iconClassName} w-auto object-contain transition-transform duration-200 group-hover:scale-105 shrink-0`}
      />

      {/* Modern Theme Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center text-base sm:text-lg font-black tracking-tight uppercase leading-none whitespace-nowrap">
          <span
            className={
              inverted
                ? "!text-white font-black"
                : "text-[#0A0A0A] dark:text-white transition-colors"
            }
            style={inverted ? { color: "#FFFFFF", opacity: 1 } : undefined}
          >
            WINHUB
          </span>
          <span className="text-[#FF7120] ml-1.5 transition-colors">
            SOLUTIONS
          </span>
        </div>

        {showTagline && (
          <span
            className={`text-[8px] sm:text-[9px] font-mono tracking-[0.22em] uppercase mt-1 font-bold whitespace-nowrap transition-colors ${
              inverted
                ? "!text-[#A0A09B]"
                : "text-[#666662] dark:text-[#8E8E89]"
            }`}
            style={inverted ? { color: "#A0A09B" } : undefined}
          >
            EXCEED YOUR EXPECTATION
          </span>
        )}
      </div>
    </div>
  );
}
