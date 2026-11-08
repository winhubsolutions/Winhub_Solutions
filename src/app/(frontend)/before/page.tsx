import React from "react";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import CompanyIntro from "@/components/sections/CompanyIntro";
import AnimatedStatistics from "@/components/sections/AnimatedStatistics";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import IndiaWebDevelopment from "@/components/sections/IndiaWebDevelopment";
import TechStack from "@/components/sections/TechStack";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DevelopmentProcess from "@/components/sections/DevelopmentProcess";
import ClientTestimonials from "@/components/sections/ClientTestimonials";
import FAQSection from "@/components/sections/FAQSection";
import ProjectEstimator from "@/components/sections/ProjectEstimator";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

export default function BeforeHomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F4] dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-[#F6F6F4] selection:bg-[#FF7120] selection:text-white transition-colors duration-300">
      {/* Comparison Top Banner */}
      <div className="sticky top-0 z-50 bg-amber-500/15 border-b border-amber-500/30 backdrop-blur-md px-4 py-2 flex items-center justify-between text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-amber-300">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="font-semibold">BEFORE (Original Homepage):</span>
          <span className="text-amber-200/80 hidden sm:inline">Static hardcoded React components</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="px-3 py-1 rounded-md bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors shadow-sm"
          >
            Switch to Dynamic (Payload CMS) →
          </Link>
          <Link
            href="/compare"
            className="px-3 py-1 rounded-md border border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 transition-colors"
          >
            Side-by-Side Compare
          </Link>
        </div>
      </div>

      {/* 1. Global Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* Marquee Ticker */}
        <MarqueeTicker />

        {/* 3. About Winhub Solutions */}
        <CompanyIntro />

        {/* 4. Animated Statistics */}
        <AnimatedStatistics />

        {/* 5. Our Services (18 Disciplines) */}
        <ServicesShowcase />

        {/* 6. Made for Modern Businesses & Portfolio Showcase */}
        <FeaturedProjects />

        {/* 7. Web Development Company in India */}
        <IndiaWebDevelopment />

        {/* 8. Technologies We Work With */}
        <TechStack />

        {/* 9. Why Choose Winhub Solutions? */}
        <WhyChooseUs />

        {/* 10. Our Development Process (6 Steps) */}
        <DevelopmentProcess />

        {/* 11. Client Testimonials */}
        <ClientTestimonials />

        {/* 12. General FAQ */}
        <FAQSection />

        {/* 13. Interactive Project Estimator */}
        <ProjectEstimator />

        {/* 14. Ready to Build Something Great? */}
        <ContactSection />
      </main>

      {/* 15. Global Footer */}
      <Footer />
    </div>
  );
}
