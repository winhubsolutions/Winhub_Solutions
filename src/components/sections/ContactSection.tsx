"use client";

import React, { useState } from "react";
import { AGENCY_CONFIG } from "@/data/agencyData";
import { Mail, Phone, MapPin, Send, CheckCircle2, Terminal, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface ContactSectionProps {
  hideHeader?: boolean;
}

export default function ContactSection({ hideHeader = false }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Website Design & Development",
    budget: "$5,000 - $15,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#FF7120", "#0A0A0A", "#FFFFFF"],
      });
    } catch {
      // fallback
    }
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className={`bg-[#EFEFEA] dark:bg-[#0D0D10] border-b border-[#E2E2DC] dark:border-[#222228] relative transition-colors duration-300 ${
        hideHeader ? "pt-12 pb-20" : "py-24"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest mb-3">
                <Terminal className="w-3.5 h-3.5" />
                <span>// READY TO BUILD SOMETHING GREAT?</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] dark:text-white uppercase max-w-2xl">
                Let&apos;s Turn Your Ideas Into Digital Success.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#6E6E6A] dark:text-[#A0A09B] max-w-md leading-relaxed">
              Whether you are planning a new website, developing custom software or 
              exploring AI automation, Winhub Solutions is ready to help.
            </p>
          </div>
        )}

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#121215] p-8 sm:p-10 rounded-3xl border border-[#E2E2DC] dark:border-[#222228] shadow-sm">
              <span className="text-xs font-mono text-[#FF7120] uppercase tracking-wider block mb-6">
                CONTACT INFORMATION
              </span>

              <div className="space-y-6">
                {/* Company Name */}
                <div>
                  <span className="text-xs font-mono text-[#8E8E89] uppercase block mb-1">
                    Company
                  </span>
                  <div className="text-lg font-black text-[#0A0A0A] dark:text-white">
                    {AGENCY_CONFIG.name}
                  </div>
                </div>

                {/* Locations: Warangal & Hyderabad */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] flex items-center justify-center text-[#FF7120] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#FF7120] font-bold uppercase block mb-1">
                        Registered Office // Warangal
                      </span>
                      <p className="text-sm font-medium text-[#1A1A18] dark:text-white leading-relaxed">
                        Hanamkonda, Warangal,
                        <br />
                        Telangana, India – 506001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] flex items-center justify-center text-[#FF7120] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#FF7120] font-bold uppercase block mb-1">
                        Hyderabad Office // Knowledge City
                      </span>
                      <p className="text-sm font-medium text-[#1A1A18] dark:text-white leading-relaxed">
                        Raidurgam, Knowledge City Rd,
                        <br />
                        Panmaktha, Serilingampalle (M),
                        <br />
                        Hyderabad, Telangana 500032
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] flex items-center justify-center text-[#FF7120] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8E8E89] uppercase block mb-1">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${AGENCY_CONFIG.contacts.email}`}
                      className="text-sm font-bold text-[#0A0A0A] dark:text-white hover:text-[#FF7120] transition-colors"
                    >
                      {AGENCY_CONFIG.contacts.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] flex items-center justify-center text-[#FF7120] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8E8E89] uppercase block mb-1">
                      Business Phone
                    </span>
                    <a
                      href={`tel:${AGENCY_CONFIG.contacts.phone}`}
                      className="text-sm font-bold text-[#0A0A0A] dark:text-white hover:text-[#FF7120] transition-colors"
                    >
                      {AGENCY_CONFIG.contacts.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Consult With Us Box */}
            <div className="p-8 rounded-3xl bg-[#0A0A0A] text-white border border-[#222222]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CONSULTATION COMMITMENT</span>
              </div>
              <h4 className="text-lg font-bold uppercase mb-2">
                Zero Obligation Technical Assessment
              </h4>
              <p className="text-xs text-[#8E8E89] leading-relaxed mb-4">
                Speak directly with an engineering architect to evaluate technical feasibility, 
                architecture patterns, and milestone estimates before signing any agreement.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Response within 12 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#121215] p-8 sm:p-12 rounded-3xl border border-[#E2E2DC] dark:border-[#222228] shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#0A0A0A] dark:text-white tracking-tight">
                  Enquiry Received Successfully!
                </h3>
                <p className="text-sm text-[#6E6E6A] dark:text-[#A0A09B] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Winhub Solutions. One of our senior architects 
                  will review your requirements and get back to you within 12 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] text-xs font-mono font-bold uppercase"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-[#FF7120] uppercase tracking-wider block mb-2">
                    START YOUR PROJECT
                  </span>
                  <h3 className="text-2xl font-black text-[#0A0A0A] dark:text-white tracking-tight">
                    Submit Your Project Requirements
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="text-xs font-mono uppercase text-[#6E6E6A] dark:text-[#8E8E89] block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] text-sm text-[#0A0A0A] dark:text-white focus:outline-none focus:border-[#FF7120]"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="text-xs font-mono uppercase text-[#6E6E6A] dark:text-[#8E8E89] block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] text-sm text-[#0A0A0A] dark:text-white focus:outline-none focus:border-[#FF7120]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label className="text-xs font-mono uppercase text-[#6E6E6A] dark:text-[#8E8E89] block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] text-sm text-[#0A0A0A] dark:text-white focus:outline-none focus:border-[#FF7120]"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="text-xs font-mono uppercase text-[#6E6E6A] dark:text-[#8E8E89] block mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Enterprises"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] text-sm text-[#0A0A0A] dark:text-white focus:outline-none focus:border-[#FF7120]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Interested In */}
                  <div>
                    <label className="text-xs font-mono uppercase text-[#6E6E6A] dark:text-[#8E8E89] block mb-2">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] text-sm text-[#0A0A0A] dark:text-white focus:outline-none focus:border-[#FF7120]"
                    >
                      <option value="Website Design & Development">Website Design & Development</option>
                      <option value="Custom Web Applications">Custom Web Applications</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="AI Agent Development">AI Agent Development</option>
                      <option value="OJS Development">OJS Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="E-Commerce Development">E-Commerce Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                  </div>

                  {/* Project Budget */}
                  <div>
                    <label className="text-xs font-mono uppercase text-[#6E6E6A] dark:text-[#8E8E89] block mb-2">
                      Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] text-sm text-[#0A0A0A] dark:text-white focus:outline-none focus:border-[#FF7120]"
                    >
                      <option value="Under $5,000">Under $5,000 (INR 1L - 3L)</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000 (INR 3L - 10L)</option>
                      <option value="$15,000 - $35,000">$15,000 - $35,000 (INR 10L - 25L)</option>
                      <option value="$35,000+">$35,000+ (Enterprise)</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="text-xs font-mono uppercase text-[#6E6E6A] dark:text-[#8E8E89] block mb-2">
                    Project Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project goals, timelines, and specific functional requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] text-sm text-[#0A0A0A] dark:text-white focus:outline-none focus:border-[#FF7120]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FF7120] hover:bg-[#E85F0F] text-white text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FF7120]/25 cursor-pointer"
                >
                  <span>Submit Your Enquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
