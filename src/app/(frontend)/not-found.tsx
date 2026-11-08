import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F4] dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-white">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-24 px-4 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>404 // RESOURCE NOT FOUND</span>
          </div>
          <h1 className="text-6xl sm:text-7xl font-black tracking-tight">404</h1>
          <p className="text-sm text-[#6E6E6A] dark:text-[#A0A09B] leading-relaxed">
            The requested page or technical resource does not exist or has been moved to a new route.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF7120] text-white text-xs font-mono font-bold uppercase hover:bg-[#0A0A0A] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

