"use client";

import React from "react";
import { Terminal } from "lucide-react";

export interface TerminalBlockProps {
  terminalTitle?: string;
  statusIndicator?: string;
  lines?: {
    command: string;
    output: string;
    outputColor?: "green" | "cyan" | "amber" | "gray";
  }[];
}

const colorMap = {
  green: "text-emerald-400",
  cyan: "text-cyan-400",
  amber: "text-amber-400",
  gray: "text-neutral-400",
};

export default function TerminalBlockRenderer({
  terminalTitle = "winhub-core-cli v2.4 ~ bash",
  statusIndicator = "git:(main) [ONLINE · NEON DB 18.6]",
  lines = [
    {
      command: "winhub-cli status --all",
      output:
        "{\n  \"engine\": \"Next.js 15.3.9\",\n  \"database\": \"Neon PostgreSQL 18.6 (AWS us-east-1)\",\n  \"cms\": \"Payload CMS 3.93.0\",\n  \"disciplines\": 18,\n  \"status\": \"healthy\"\n}",
      outputColor: "green",
    },
    {
      command: "winhub-cli deploy --target production",
      output: "✓ Edge bundles generated\n✓ SSR payload handlers bound\n✓ Deployed with zero cold-start",
      outputColor: "cyan",
    },
  ],
}: TerminalBlockProps) {
  return (
    <section className="py-20 border-b border-[#E2E2DC] dark:border-[#222228] bg-[#EFEFEA] dark:bg-[#0D0D10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="rounded-2xl border border-[#D5D5CE] dark:border-[#222228] bg-[#0A0A0C] shadow-2xl overflow-hidden font-mono text-xs">
          {/* Top terminal bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#141418] border-b border-[#222228]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-[#888890] ml-3 text-[11px]">{terminalTitle}</span>
            </div>
            <div className="text-[10px] text-[#888890] flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-500" />
              <span>{statusIndicator}</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 space-y-5 text-neutral-300 overflow-x-auto leading-relaxed">
            {lines.map((l, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-emerald-500 font-bold">$</span>
                  <span className="font-semibold">{l.command}</span>
                </div>
                <pre className={`pl-4 whitespace-pre-wrap ${colorMap[l.outputColor || "green"]}`}>
                  {l.output}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

