"use client";

import React from "react";
import RichTextRenderer from "../ui/RichTextRenderer";

export interface RichTextBlockProps {
  sectionTag?: string;
  title?: string;
  content?: any;
  maxWidth?: "4xl" | "6xl" | "7xl";
  centered?: boolean;
}

export default function RichTextBlockRenderer({
  sectionTag,
  title,
  content,
  maxWidth = "4xl",
  centered = false,
}: RichTextBlockProps) {
  if (!content) return null;

  const maxWidthClass =
    maxWidth === "6xl"
      ? "max-w-6xl"
      : maxWidth === "7xl"
      ? "max-w-7xl"
      : "max-w-4xl";

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900/60 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className={`relative mx-auto ${maxWidthClass}`}>
        {(sectionTag || title) && (
          <div className={`mb-10 ${centered ? "text-center" : "text-left"}`}>
            {sectionTag && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                {sectionTag}
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className="relative rounded-2xl border border-slate-800/80 bg-slate-950/60 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
          <RichTextRenderer data={content} />
        </div>
      </div>
    </section>
  );
}
