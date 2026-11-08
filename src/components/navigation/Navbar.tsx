"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Globe,
  Laptop,
  Zap,
  Atom,
  Server,
  Shield,
  Smartphone,
  Apple,
  Bot,
  Code2,
  ShoppingBag,
  BookOpen,
  Cpu,
  Workflow,
  Palette,
  Search,
  TrendingUp,
  Gauge,
  Layers,
} from "lucide-react";
import { AGENCY_CONFIG } from "@/data/agencyData";
import ThemeToggle from "@/components/ui/ThemeToggle";
import BrandLogo from "@/components/ui/BrandLogo";

const SERVICE_GROUPS = [
  {
    category: "Web & Full-Stack",
    services: [
      { title: "Website Design & Development", slug: "website-design-development", icon: Globe },
      { title: "Custom Web Applications", slug: "custom-web-applications", icon: Laptop },
      { title: "Next.js Development", slug: "nextjs-development", icon: Zap },
      { title: "React.js Development", slug: "reactjs-development", icon: Atom },
      { title: "Node.js Development", slug: "nodejs-development", icon: Server },
      { title: "Angular Development", slug: "angular-development", icon: Shield },
    ],
  },
  {
    category: "Mobile & Enterprise",
    services: [
      { title: "Mobile App Development", slug: "mobile-app-development", icon: Smartphone },
      { title: "iOS Development", slug: "ios-development", icon: Apple },
      { title: "Android Development", slug: "android-development", icon: Bot },
      { title: "Custom Software Development", slug: "custom-software-development", icon: Layers },
      { title: "E-Commerce Development", slug: "ecommerce-development", icon: ShoppingBag },
      { title: "OJS Development", slug: "ojs-development", icon: BookOpen },
    ],
  },
  {
    category: "AI & Growth",
    services: [
      { title: "AI Agent Development", slug: "ai-agent-development", icon: Cpu },
      { title: "AI Automation", slug: "ai-automation", icon: Workflow },
      { title: "UI/UX Design", slug: "uiux-design", icon: Palette },
      { title: "SEO Services", slug: "seo-services", icon: Search },
      { title: "Digital Marketing", slug: "digital-marketing", icon: TrendingUp },
      { title: "Gatsby Development", slug: "gatsby-development", icon: Gauge },
    ],
  },
];

const ALL_SERVICES = SERVICE_GROUPS.flatMap((g) => g.services);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 160);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Technologies", href: "/technologies" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Top Telemetry Strip */}
      <div className="w-full bg-[#0A0A0A] dark:bg-[#050507] text-[#8E8E89] text-[11px] font-mono tracking-wider py-1.5 border-b border-[#222222] dark:border-[#1E1E24] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-white whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#FF7120] animate-pulse" />
              WINHUB SOLUTIONS // OFFICIAL
            </span>
            <span className="hidden md:inline-block text-[#555555]">|</span>
            <span className="hidden md:inline-block whitespace-nowrap">
              {AGENCY_CONFIG.headquarters}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${AGENCY_CONFIG.contacts.email}`}
              className="text-[#FF7120] hover:underline hidden sm:inline-block font-mono whitespace-nowrap"
            >
              {AGENCY_CONFIG.contacts.email}
            </a>
            <span className="text-[#666666] hidden lg:inline-block whitespace-nowrap">
              {AGENCY_CONFIG.status}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#F6F6F4] dark:bg-[#0A0A0C] border-b border-[#E2E2DC] dark:border-[#222228] py-2.5 shadow-md"
            : "bg-[#F6F6F4] dark:bg-[#0A0A0C] border-b border-[#EAEAE4] dark:border-[#1E1E24] py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="group inline-flex items-center">
              <BrandLogo />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 text-xs font-mono uppercase tracking-wider text-[#333333] dark:text-[#D6D6D6] mx-auto px-4">
            {navLinks.map((link) => {
              const isServices = link.href === "/services";
              const isActive = isServices
                ? pathname.startsWith("/services")
                : pathname === link.href;

              if (isServices) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={`relative py-1.5 transition-colors duration-150 group font-semibold whitespace-nowrap inline-flex items-center gap-1.5 ${
                        isActive
                          ? "text-[#FF7120] dark:text-[#FF7120]"
                          : "hover:text-[#FF7120] dark:hover:text-[#FF7120]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-[#FF7120]" : "text-[#888888]"
                        }`}
                      />
                      <span
                        className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#FF7120] transition-all duration-200 rounded-full ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>

                    {/* Mega Dropdown Panel */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[760px] xl:w-[820px] z-50 transition-all duration-200 ${
                        servicesDropdownOpen
                          ? "opacity-100 visible translate-y-0 pointer-events-auto"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="rounded-2xl bg-white dark:bg-[#0A0A0E] border border-[#E2E2DC] dark:border-[#22222A] shadow-[0_25px_70px_rgba(0,0,0,0.5)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.95)] p-6 overflow-hidden">
                        {/* 3 Balanced Columns of Services */}
                        <div className="grid grid-cols-3 gap-6">
                          {SERVICE_GROUPS.map((group) => (
                            <div key={group.category} className="space-y-1">
                              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF7120] pb-2 border-b border-[#EAEAE4] dark:border-[#1E1E24] mb-2 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7120]" />
                                <span>{group.category}</span>
                              </div>
                              {group.services.map((service) => {
                                const ServiceIcon = service.icon;
                                return (
                                  <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    onClick={() => setServicesDropdownOpen(false)}
                                    className="group flex items-center gap-2.5 py-1.5 px-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                                  >
                                    <ServiceIcon className="w-4 h-4 text-[#FF7120] shrink-0 transition-transform duration-200 group-hover:scale-110" />
                                    <span className="text-[13px] font-medium text-[#1A1A18] dark:text-[#EAEAEA] group-hover:text-[#FF7120] dark:group-hover:text-[#FF7120] transition-colors truncate">
                                      {service.title}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative py-1.5 transition-colors duration-150 group font-semibold whitespace-nowrap inline-flex items-center ${
                    isActive
                      ? "text-[#FF7120] dark:text-[#FF7120]"
                      : "hover:text-[#FF7120] dark:hover:text-[#FF7120]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#FF7120] transition-all duration-200 rounded-full ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Theme Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <ThemeToggle />

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-300 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] hover:bg-[#FF7120] dark:hover:bg-[#FF7120] hover:text-white dark:hover:text-white hover:shadow-lg hover:shadow-[#FF7120]/25 whitespace-nowrap"
            >
              <span>Get a Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white dark:bg-[#141417] border border-[#E2E2DC] dark:border-[#222228] text-[#0A0A0A] dark:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F6F6F4] dark:bg-[#0D0D10] border-b border-[#E2E2DC] dark:border-[#222228] px-4 py-6 space-y-4 max-h-[82vh] overflow-y-auto">
            <nav className="flex flex-col space-y-2 font-mono text-sm">
              {navLinks.map((link) => {
                const isServices = link.href === "/services";
                const isActive = isServices
                  ? pathname.startsWith("/services")
                  : pathname === link.href;

                if (isServices) {
                  return (
                    <div key={link.label} className="border-b border-black/5 dark:border-white/5 pb-2">
                      <div className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex-1 py-2 px-3 rounded-lg uppercase tracking-wider font-semibold ${
                            isActive
                              ? "text-[#FF7120]"
                              : "text-[#0A0A0A] dark:text-white"
                          }`}
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="p-2 text-[#888888] hover:text-[#FF7120]"
                          aria-label="Toggle Services List"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileServicesOpen ? "rotate-180 text-[#FF7120]" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {mobileServicesOpen && (
                        <div className="mt-2 pl-3 pr-2 py-2 space-y-1.5 bg-black/5 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/5 max-h-64 overflow-y-auto">
                          {ALL_SERVICES.map((service) => {
                            const ServiceIcon = service.icon;
                            return (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                onClick={() => {
                                  setMobileServicesOpen(false);
                                  setMobileMenuOpen(false);
                                }}
                                className="flex items-center gap-2.5 py-1.5 px-2 text-xs font-sans text-[#4A4A46] dark:text-[#C0C0B8] hover:text-[#FF7120] dark:hover:text-[#FF7120] truncate rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                              >
                                <ServiceIcon className="w-3.5 h-3.5 text-[#FF7120] shrink-0" />
                                <span className="truncate">{service.title}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 px-3 rounded-lg uppercase tracking-wider ${
                      isActive
                        ? "bg-[#FF7120] text-white font-bold"
                        : "text-[#0A0A0A] dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-4 border-t border-[#E2E2DC] dark:border-[#222228]">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#FF7120] text-white shadow-md"
              >
                <span>Get a Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
