"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Phone, Mail, MessageSquare } from "lucide-react";

export interface CTABannerBlockProps {
  badge?: string;
  headline?: string;
  subtext?: string;
  buttonText?: string;
  buttonUrl?: string;
  showContactSnippet?: boolean;
}

export default function CTABannerBlockRenderer({
  badge = "READY TO BUILD?",
  headline = "Let's Architect Your Next Digital Platform",
  subtext = "Get in touch with our technical leads in Warangal, Telangana. Schedule a free technical discovery call today.",
  buttonText = "Schedule Architecture Call",
  buttonUrl = "/contact",
  showContactSnippet = true,
}: CTABannerBlockProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0C] text-white">
      {/* Glow gradient backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-indigo-500/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono font-medium text-emerald-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>
        )}

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          {headline}
        </h2>

        {subtext && (
          <p className="text-base sm:text-lg text-[#A0A0A8] max-w-2xl mx-auto leading-relaxed mb-10">
            {subtext}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0A0A0A] font-semibold text-sm hover:bg-emerald-400 hover:text-[#0A0A0A] transition-all shadow-xl active:scale-95"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {showContactSnippet && (
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#888890] border-t border-white/10 pt-8 font-mono">
            <span className="inline-flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              contact@winhubsolutions.com
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="inline-flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              +91 73865 66445
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="inline-flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Hanamkonda, Warangal &amp; Knowledge City, Hyderabad
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

