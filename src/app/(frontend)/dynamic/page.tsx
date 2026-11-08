import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import DynamicBlocks from "@/components/blocks/DynamicBlocks";

const CMS_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";

async function getHomePageData() {
  try {
    const res = await fetch(`${CMS_URL}/api/pages?where[slug][equals]=home&limit=1`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const data = await res.json();
      if (data?.docs?.length > 0) {
        return data.docs[0];
      }
    }
  } catch (err) {}
  return null;
}

export default async function DynamicHomePage() {
  const homeDoc = await getHomePageData();

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F4] dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-[#F6F6F4] selection:bg-[#FF7120] selection:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <DynamicBlocks blocks={homeDoc?.blocks || []} />
      </main>
      <Footer />
    </div>
  );
}

