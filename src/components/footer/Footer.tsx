"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AGENCY_CONFIG } from "@/data/agencyData";
import { ArrowUp, Mail, MapPin, Phone, Check } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-12 border-t border-[#222222] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-[#FF7120]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#222222]">
          {/* Brand Col (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <BrandLogo inverted />
            </Link>

            <p className="text-sm text-[#A0A09B] max-w-sm leading-relaxed">
              Building innovative digital experiences through modern web technologies, 
              custom software engineering and intelligent AI solutions.
            </p>

            {/* Newsletter Dispatch */}
            <div className="pt-2">
              <span className="text-xs font-mono text-[#FF7120] uppercase tracking-wider block mb-3">
                SUBSCRIBE TO TECHNOLOGY UPDATES
              </span>
              {subscribed ? (
                <div className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Subscribed to Winhub Solutions updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-full bg-[#141417] border border-[#2A2A30] text-xs font-mono text-white placeholder-[#666666] focus:outline-none focus:border-[#FF7120]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-[#FF7120] hover:bg-[#E85F0F] text-white text-xs font-mono font-bold uppercase transition-colors shrink-0"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono text-[#8E8E89] uppercase tracking-wider block">
              QUICK LINKS
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#D6D6D6]">
              <li>
                <Link href="/" className="hover:text-[#FF7120] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF7120] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF7120] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-[#FF7120] transition-colors">
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#FF7120] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#FF7120] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF7120] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#FF7120] transition-colors">
                  FAQ & Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono text-[#8E8E89] uppercase tracking-wider block">
              OUR SERVICES
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#D6D6D6]">
              <li>
                <Link href="/services" className="hover:text-[#FF7120] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF7120] transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF7120] transition-colors">
                  AI Agent Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF7120] transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF7120] transition-colors">
                  OJS Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF7120] transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono text-[#8E8E89] uppercase tracking-wider block">
              CONTACT
            </span>
            <div className="space-y-3 text-xs font-mono text-[#D6D6D6]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF7120] shrink-0 mt-0.5" />
                <div className="leading-relaxed space-y-2">
                  <div>
                    <span className="text-[#FF7120] text-[10px] uppercase font-bold block mb-0.5">
                      Warangal (HQ)
                    </span>
                    <p className="text-[11px] leading-relaxed text-[#CCCCCC]">
                      Hanamkonda, Warangal,
                      <br />
                      Telangana, India – 506001
                    </p>
                  </div>
                  <div>
                    <span className="text-[#FF7120] text-[10px] uppercase font-bold block mb-0.5">
                      Hyderabad Office
                    </span>
                    <p className="text-[11px] leading-relaxed text-[#CCCCCC]">
                      Raidurgam, Knowledge City Rd,
                      <br />
                      Panmaktha, Serilingampalle (M),
                      <br />
                      Hyderabad, Telangana 500032
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF7120] shrink-0" />
                <a
                  href={`mailto:${AGENCY_CONFIG.contacts.email}`}
                  className="hover:text-[#FF7120] transition-colors"
                >
                  {AGENCY_CONFIG.contacts.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF7120] shrink-0" />
                <a
                  href={`tel:${AGENCY_CONFIG.contacts.phone}`}
                  className="hover:text-[#FF7120] transition-colors"
                >
                  {AGENCY_CONFIG.contacts.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#6E6E6A] gap-4">
          <p>© 2026 Winhub Solutions. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#8E8E89] hover:text-[#FF7120] transition-colors"
            aria-label="Scroll to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
