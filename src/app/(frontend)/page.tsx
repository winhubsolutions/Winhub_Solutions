import React from "react";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import CompanyIntro from "@/components/sections/CompanyIntro";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import IndiaWebDevelopment from "@/components/sections/IndiaWebDevelopment";
import TechStack from "@/components/sections/TechStack";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DevelopmentProcess from "@/components/sections/DevelopmentProcess";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F4] dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-[#F6F6F4] selection:bg-[#FF7120] selection:text-white transition-colors duration-300">
      {/* 1. Global Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section (3D Knot Canvas, Typography, CTAs) */}
        <HeroSection />

        {/* Marquee Ticker */}
        <MarqueeTicker />

        {/* 3. About Winhub Solutions */}
        <CompanyIntro />

        {/* 4. Our Services (18 Disciplines) */}
        <ServicesShowcase />

        {/* 6. Made for Modern Businesses & Portfolio Showcase */}
        <FeaturedProjects />

        {/* 7. Web Development Company in India */}
        <IndiaWebDevelopment />

        {/* 8. Technologies We Work With */}
        <TechStack />

        {/* 9. Why Choose Winhub Solutions? */}
        <WhyChooseUs />

        {/* 8. Our Development Process (6 Steps) */}
        <DevelopmentProcess />
      </main>

      {/* 15. Global Footer */}
      <Footer />
    </div>
  );
}
