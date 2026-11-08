"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E2E2DC] dark:border-[#2A2A30] bg-white dark:bg-[#141417] text-[#0A0A0A] dark:text-[#F6F6F4] hover:border-[#FF7120] dark:hover:border-[#FF7120] transition-all duration-200 shadow-sm ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {theme === "dark" ? (
          <Moon className="w-3.5 h-3.5 text-[#FF7120] transition-transform duration-300 rotate-0" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-[#FF7120] transition-transform duration-300 rotate-0" />
        )}
      </div>

      {showLabel ? (
        <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-[#6E6E6A] dark:text-[#A0A09B] group-hover:text-[#FF7120]">
          {theme === "dark" ? "DARK" : "LIGHT"}
        </span>
      ) : (
        <span className="text-[10px] font-mono uppercase hidden sm:inline-block text-[#8E8E89] dark:text-[#8E8E89] group-hover:text-[#0A0A0A] dark:group-hover:text-white">
          {theme === "dark" ? "NIGHT" : "DAY"}
        </span>
      )}
    </button>
  );
}
