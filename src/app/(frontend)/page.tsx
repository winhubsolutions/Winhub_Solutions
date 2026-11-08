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
import DynamicBlocks from "@/components/blocks/DynamicBlocks";

async function getHomePageCmsData() {
  try {
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "https://winhubsolutions.com";
    const res = await fetch(`${serverUrl}/api/pages?where[slug][equals]=home&limit=1`, {
      next: { revalidate: 10 },
    });
    if (res.ok) {
      const data = await res.json();
      return data?.docs?.[0] || null;
    }
  } catch (e) {}
  return null;
}

export default async function HomePage() {
  const homeData = await getHomePageCmsData();
  const hasCustomBlocks = Boolean(homeData?.blocks && homeData.blocks.length > 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F4] dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-[#F6F6F4] selection:bg-[#FF7120] selection:text-white transition-colors duration-300">
      {/* 1. Global Navigation */}
      <Navbar />

      <main className="flex-1">
        {hasCustomBlocks ? (
          <DynamicBlocks blocks={homeData.blocks} />
        ) : (
          <>
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
          </>
        )}
      </main>

      {/* 15. Global Footer */}
      <Footer />
    </div>
  );
}
