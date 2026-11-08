"use client";

import React from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";

interface RichTextRendererProps {
  data: any;
  className?: string;
  enableGlow?: boolean;
}

export default function RichTextRenderer({
  data,
  className = "",
  enableGlow = false,
}: RichTextRendererProps) {
  if (!data) return null;

  return (
    <div
      className={`prose prose-invert max-w-none
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
        prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
        prose-p:text-slate-300 prose-p:leading-relaxed
        prose-a:text-cyan-400 prose-a:underline hover:prose-a:text-cyan-300
        prose-strong:text-white prose-strong:font-semibold
        prose-blockquote:border-l-cyan-500 prose-blockquote:bg-cyan-950/20 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
        prose-code:text-cyan-300 prose-code:bg-slate-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:border prose-code:border-slate-800
        prose-ul:text-slate-300 prose-ol:text-slate-300
        prose-li:marker:text-cyan-400
        prose-hr:border-slate-800
        ${enableGlow ? "drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]" : ""}
        ${className}
      `}
    >
      <RichText data={data} />
    </div>
  );
}
