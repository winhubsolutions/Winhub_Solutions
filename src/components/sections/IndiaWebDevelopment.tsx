"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Server,
  ShoppingBag,
  Smartphone,
  Layers,
  Code,
  ArrowRight,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Users,
  Clock,
  MessageSquare,
} from "lucide-react";

export default function IndiaWebDevelopment() {
  const [activeTab, setActiveTab] = useState<string>("enterprise");

  const pillars = [
    { id: "custom", label: "Custom Web Development", icon: Code },
    { id: "enterprise", label: "Enterprise Web Solutions", icon: Server },
    { id: "ecommerce", label: "E-Commerce Development", icon: ShoppingBag },
    { id: "mobile-api", label: "Mobile & API Development", icon: Smartphone },
    { id: "cms", label: "CMS Development Services", icon: Layers },
    { id: "fullstack", label: "Custom Website Development", icon: Globe },
  ];

  return (
    <section className="py-24 bg-[#F6F6F4] dark:bg-[#0A0A0C] border-b border-[#E2E2DC] dark:border-[#222228] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top SEO Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>// WEB DEVELOPMENT COMPANY IN INDIA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] dark:text-white uppercase leading-tight mb-6">
            Leading Web Development Company in India.
          </h2>
          <p className="text-base sm:text-lg text-[#555552] dark:text-[#A0A09B] leading-relaxed mb-4">
            We are a leading Web Development Company in India, delivering high-quality, 
            scalable, and business-driven web solutions to clients worldwide. With years 
            of hands-on experience, we specialize in custom website development, web applications, 
            and enterprise web solutions that align perfectly with your business goals.
          </p>
          <p className="text-sm sm:text-base text-[#6E6E6A] dark:text-[#8E8E89] leading-relaxed">
            Whether you are looking to hire a web development company in India or hire 
            experienced web developers in India, our expert team ensures innovative design, 
            robust development, and reliable delivery for every project. From startups to large 
            enterprises, we help businesses build powerful digital products that drive growth and long-term success.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#E2E2DC] dark:border-[#222228]">
          {pillars.map((p) => {
            const Icon = p.icon;
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-[#FF7120] text-white shadow-md font-bold"
                    : "bg-white dark:bg-[#141418] text-[#6E6E6A] dark:text-[#A0A09B] border border-[#E2E2DC] dark:border-[#282830] hover:text-[#0A0A0A] dark:hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div className="bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] rounded-3xl p-8 sm:p-12 shadow-sm mb-16">
          {activeTab === "enterprise" && (
            <div>
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono text-[#FF7120] uppercase block mb-1">
                  ENTERPRISE ARCHITECTURE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] dark:text-white tracking-tight mb-4">
                  Enterprise Web Solutions
                </h3>
                <p className="text-sm sm:text-base text-[#555552] dark:text-[#A0A09B] leading-relaxed">
                  We specialize in building enterprise-grade web solutions designed to improve 
                  operational efficiency, scalability, and performance. Our enterprise development 
                  services support complex business workflows and large-scale systems.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  "Custom Enterprise Web Development",
                  "CRM Software Development",
                  "Custom ERP Software Development",
                  "Enterprise Mobility Solutions",
                  "Enterprise System Integration",
                  "End-to-End IT Consulting",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-4 rounded-2xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0A0A0A] dark:text-white"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF7120] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm font-mono text-[#6E6E6A] dark:text-[#8E8E89]">
                If you are looking to hire web developers in India for enterprise solutions, 
                we deliver secure, scalable, and future-ready systems tailored to your business needs.
              </p>
            </div>
          )}

          {activeTab === "ecommerce" && (
            <div>
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono text-[#FF7120] uppercase block mb-1">
                  DIGITAL STOREFRONTS
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] dark:text-white tracking-tight mb-4">
                  E-Commerce Website Development
                </h3>
                <p className="text-sm sm:text-base text-[#555552] dark:text-[#A0A09B] leading-relaxed">
                  We are a trusted eCommerce web development company in India, helping businesses 
                  create powerful online stores with seamless user experiences and high conversion rates. 
                  We work with leading eCommerce platforms and build custom solutions that are secure, 
                  scalable, and easy to manage.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  "Custom eCommerce Website Development",
                  "Responsive eCommerce Websites & Web Apps",
                  "Multi-Vendor Marketplace Development",
                  "Shopping Cart Development",
                  "SaaS-Based eCommerce Solutions",
                  "Mobile Commerce (M-Commerce) Solutions",
                  "Secure Payment & Fraud Protection",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-4 rounded-2xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0A0A0A] dark:text-white"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF7120] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm font-mono text-[#6E6E6A] dark:text-[#8E8E89]">
                Hire web developers in India to build or scale your eCommerce business with confidence.
              </p>
            </div>
          )}

          {activeTab === "mobile-api" && (
            <div>
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono text-[#FF7120] uppercase block mb-1">
                  HIGH-CONCURRENCY BACKENDS
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] dark:text-white tracking-tight mb-4">
                  Mobile & API Development
                </h3>
                <p className="text-sm sm:text-base text-[#555552] dark:text-[#A0A09B] leading-relaxed">
                  Our backend and API development services power high-performance web and mobile 
                  applications. We design API-driven architectures that ensure smooth communication 
                  between front-end and backend systems.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  "REST API Development",
                  "Backend Development for Web & Mobile Apps",
                  "Mobile CMS Solutions",
                  "Authentication & Authorization Services",
                  "Social Media Integration",
                  "Push Notifications & App Engagement",
                  "Content Distribution Systems",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-4 rounded-2xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0A0A0A] dark:text-white"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF7120] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm font-mono text-[#6E6E6A] dark:text-[#8E8E89]">
                Hire a web development company in India that delivers scalable, secure, and high-performance backend solutions.
              </p>
            </div>
          )}

          {activeTab === "cms" && (
            <div>
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono text-[#FF7120] uppercase block mb-1">
                  CONTENT ARCHITECTURE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] dark:text-white tracking-tight mb-4">
                  CMS Development Services
                </h3>
                <p className="text-sm sm:text-base text-[#555552] dark:text-[#A0A09B] leading-relaxed">
                  We provide custom CMS development services for websites, portals, enterprise 
                  applications, and eCommerce platforms. Our CMS solutions are easy to manage, 
                  scalable, and tailored to your business workflow.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  "Custom CMS Web Development",
                  "CMS for eCommerce Websites",
                  "CMS for B2C & B2B Applications",
                  "Enterprise CMS Development",
                  "CMS Migration & Upgrades",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-4 rounded-2xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0A0A0A] dark:text-white"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF7120] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm font-mono text-[#6E6E6A] dark:text-[#8E8E89]">
                Hire CMS developers in India to build flexible and user-friendly content management systems.
              </p>
            </div>
          )}

          {(activeTab === "custom" || activeTab === "fullstack") && (
            <div>
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono text-[#FF7120] uppercase block mb-1">
                  BESPOKE CODEBASES
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] dark:text-white tracking-tight mb-4">
                  Custom Website & Web Application Development
                </h3>
                <p className="text-sm sm:text-base text-[#555552] dark:text-[#A0A09B] leading-relaxed">
                  We help brands build a strong digital presence through feature-rich, secure, 
                  and scalable websites with intuitive UI/UX design. We create secure, high-performance, 
                  and fully customized web solutions tailored to your unique requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  "Custom Website Design",
                  "Web CMS Development",
                  "Web Portal Development",
                  "eCommerce Website Development",
                  "Enterprise Web Application Development",
                  "Hire Dedicated Full-Stack Developers",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-4 rounded-2xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0A0A0A] dark:text-white"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF7120] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm font-mono text-[#6E6E6A] dark:text-[#8E8E89]">
                Hire full-stack web developers in India to build powerful digital experiences for your business.
              </p>
            </div>
          )}
        </div>

        {/* Dedicated Web Engineering Team Grid */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0A] text-white border border-[#222222]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-[#FF7120] uppercase block mb-2">
              OFFSHORE ADVANTAGE // GLOBAL DELIVERY
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Partner with India&apos;s Dedicated Web Engineering Team.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Experienced Web Developers",
                desc: "5+ years average engineering seniority building international applications.",
                icon: Users,
              },
              {
                title: "Scalable & Secure",
                desc: "Enterprise-grade security standards and cloud-native auto-scaling architecture.",
                icon: ShieldCheck,
              },
              {
                title: "Business-Focused",
                desc: "We prioritize conversion, user retention, and measurable business growth.",
                icon: Terminal,
              },
              {
                title: "Transparent Communication",
                desc: "Daily updates, direct Slack/Teams channels, and bi-weekly sprint demos.",
                icon: MessageSquare,
              },
              {
                title: "On-Time Project Delivery",
                desc: "Milestone-driven agile delivery backed by strict SLA commitments.",
                icon: Clock,
              },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="p-5 rounded-2xl bg-[#141417] border border-[#222228]">
                  <Icon className="w-6 h-6 text-[#FF7120] mb-3" />
                  <h4 className="text-sm font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-xs text-[#8E8E89] leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-8 border-t border-[#222228] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#8E8E89]">
              Technologies: PHP · .NET · Java · HTML5 · Node.js · Angular · Drupal · Joomla · WordPress · Magento · Shopify
            </span>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#FF7120] text-white text-xs font-mono font-bold uppercase hover:bg-white hover:text-black transition-colors shrink-0"
            >
              Hire Web Developers in India
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

