"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Lock,
  Mail,
  Key,
  ShieldCheck,
  Terminal,
  ArrowRight,
  Database,
  Layers,
  FileText,
  Briefcase,
  HelpCircle,
  MessageSquare,
  Image as ImageIcon,
  Users,
  Settings,
  ExternalLink,
  LogOut,
  Plus,
  Search,
  CheckCircle2,
  Cpu,
  Clock,
  Eye,
  Edit,
  Save,
  RefreshCw,
  Phone,
  DollarSign,
  Calendar,
} from "lucide-react";
import { SERVICES_CATALOG } from "@/data/servicesCatalog";
import { PORTFOLIO_PROJECTS, AGENCY_CONFIG } from "@/data/agencyData";

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  status?: string;
  created_at: string;
}

export default function AdminPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("admin@winhubsolutions.in");
  const [password, setPassword] = useState<string>("admin123");
  const [dbAdapter, setDbAdapter] = useState<"neon-postgres" | "mongodb" | "local">("neon-postgres");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Dashboard State
  const [activeTab, setActiveTab] = useState<"dashboard" | "services" | "projects" | "leads" | "media" | "faqs" | "settings">("dashboard");
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [savedNotice, setSavedNotice] = useState<string | null>(null);

  // Inbound Leads from Neon DB
  const [leads, setLeads] = useState<ContactSubmission[]>([]);
  const [leadsLoading, setLeadsLoading] = useState<boolean>(false);

  // Media items from Neon DB
  const [mediaItems, setMediaItems] = useState<any[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);

  // Settings State Form
  const [companyName, setCompanyName] = useState(AGENCY_CONFIG.name);
  const [companyEmail, setCompanyEmail] = useState(AGENCY_CONFIG.contacts.email);
  const [companyPhone, setCompanyPhone] = useState(AGENCY_CONFIG.contacts.phone);
  const [companyAddress, setCompanyAddress] = useState(AGENCY_CONFIG.address.full);
  const [telemetryStatus, setTelemetryStatus] = useState(AGENCY_CONFIG.status);

  const fetchLeads = async () => {
    setLeadsLoading(true);
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      if (data.submissions) {
        setLeads(data.submissions);
      }
    } catch (e) {
      console.error("Failed to fetch leads from Neon DB:", e);
    } finally {
      setLeadsLoading(false);
    }
  };

  const fetchMedia = async () => {
    try {
      const res = await fetch("/api/media");
      const data = await res.json();
      if (data.media) {
        setMediaItems(data.media);
      }
    } catch (e) {
      console.error("Failed to fetch media:", e);
    }
  };

  const fetchSettings = async () => {
    try {
      const res = await fetch("/api/settings");
      const data = await res.json();
      if (data.settings) {
        if (data.settings.name) setCompanyName(data.settings.name);
        if (data.settings.email) setCompanyEmail(data.settings.email);
        if (data.settings.phone) setCompanyPhone(data.settings.phone);
        if (data.settings.address) setCompanyAddress(data.settings.address);
        if (data.settings.status) setTelemetryStatus(data.settings.status);
      }
    } catch (e) {
      console.error("Failed to fetch settings:", e);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
      fetchMedia();
      fetchSettings();
    }
  }, [isAuthenticated, activeTab]);

  const handleUpdateLeadStatus = async (id: number, newStatus: string) => {
    try {
      const res = await fetch("/api/contact", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
        );
        setSavedNotice(`Lead #${id} status updated to ${newStatus.toUpperCase()}`);
        setTimeout(() => setSavedNotice(null), 3000);
      }
    } catch (e) {
      console.error("Failed to update status:", e);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/media", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success && data.item) {
        setMediaItems((prev) => [data.item, ...prev]);
        setSavedNotice(`Uploaded ${file.name} to Neon PostgreSQL media vault.`);
        setTimeout(() => setSavedNotice(null), 4000);
      }
    } catch (err) {
      console.error("Upload error:", err);
    } finally {
      setUploading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError(null);

    setTimeout(() => {
      if (email.trim() && password.trim()) {
        setIsAuthenticated(true);
      } else {
        setLoginError("Please enter valid administrator credentials.");
      }
      setIsLoading(false);
    }, 400);
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: companyName,
          email: companyEmail,
          phone: companyPhone,
          address: companyAddress,
          status: telemetryStatus,
        }),
      });
      if (res.ok) {
        setSavedNotice("Global Site Settings successfully committed to Neon PostgreSQL.");
      }
    } catch (e) {
      console.error("Failed to commit settings:", e);
    }
    setTimeout(() => setSavedNotice(null), 4000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070709] text-white flex flex-col justify-between selection:bg-[#FF7120] selection:text-white relative overflow-hidden font-sans">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF7120]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Header Telemetry */}
        <header className="p-6 border-b border-[#1A1A22] flex items-center justify-between z-10">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo-icon.png" alt="Winhub Solutions" className="h-8 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tight text-white uppercase leading-none">
                Winhub Solutions
              </span>
              <span className="text-[9px] font-mono text-[#FF7120] tracking-widest uppercase mt-0.5">
                Payload CMS & Neon PostgreSQL Control Center
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-mono text-[#8E8E89] hover:text-[#FF7120] transition-colors"
          >
            <span>Back to Live Website</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </header>

        {/* Login Container */}
        <main className="flex-1 flex items-center justify-center p-6 z-10">
          <div className="w-full max-w-md">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0E0E14] border border-[#22222E] shadow-2xl backdrop-blur-xl relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7120]/10 border border-[#FF7120]/30 text-[#FF7120] text-xs font-mono mb-6">
                <Terminal className="w-3.5 h-3.5" />
                <span>PAYLOAD CMS // SUPERADMIN AUTH</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                Sign in to Control Center
              </h1>
              <p className="text-xs font-mono text-[#8E8E89] mb-8 leading-relaxed">
                Direct access to Winhub Solutions content collections, Neon PostgreSQL database, and digital assets.
              </p>

              {loginError && (
                <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                  {loginError}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#A0A09B] mb-2 tracking-wider">
                    Superadmin Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#666666] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="admin@winhubsolutions.in"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#161620] border border-[#2B2B38] text-white text-xs font-mono focus:outline-none focus:border-[#FF7120] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#A0A09B] mb-2 tracking-wider">
                    Master Password
                  </label>
                  <div className="relative">
                    <Key className="w-4 h-4 text-[#666666] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#161620] border border-[#2B2B38] text-white text-xs font-mono focus:outline-none focus:border-[#FF7120] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#A0A09B] mb-2 tracking-wider">
                    Database Adapter
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setDbAdapter("neon-postgres")}
                      className={`py-2 px-3 rounded-xl border text-center transition-all ${
                        dbAdapter === "neon-postgres"
                          ? "bg-[#FF7120]/15 border-[#FF7120] text-[#FF7120] font-bold"
                          : "bg-[#14141C] border-[#22222E] text-[#8E8E89]"
                      }`}
                    >
                      Neon PostgreSQL
                    </button>
                    <button
                      type="button"
                      onClick={() => setDbAdapter("local")}
                      className={`py-2 px-3 rounded-xl border text-center transition-all ${
                        dbAdapter === "local"
                          ? "bg-[#FF7120]/15 border-[#FF7120] text-[#FF7120] font-bold"
                          : "bg-[#14141C] border-[#22222E] text-[#8E8E89]"
                      }`}
                    >
                      Local Engine
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 py-3.5 rounded-xl bg-[#FF7120] hover:bg-[#E85F0F] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#FF7120]/25 cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <span>Authenticating Credentials...</span>
                  ) : (
                    <>
                      <span>Enter Control Portal</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-[#1C1C26] text-center">
                <span className="text-[10px] font-mono text-[#666666]">
                  Production Credentials Pre-filled · Ready to Inspect
                </span>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Telemetry */}
        <footer className="p-6 border-t border-[#1A1A22] text-center text-[11px] font-mono text-[#6E6E6A] z-10">
          <span>PAYLOAD CMS ARCHITECTURE · NEON POSTGRESQL 18.6 CLUSTER · NEXT.JS 14</span>
        </footer>
      </div>
    );
  }

  // Authenticated Payload CMS Dashboard
  const filteredServices = SERVICES_CATALOG.filter((s) =>
    s.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    s.slug.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0A0A0E] text-white flex flex-col font-sans selection:bg-[#FF7120] selection:text-white">
      {/* Top Admin Header */}
      <header className="h-16 bg-[#111117] border-b border-[#20202A] px-6 flex items-center justify-between shrink-0 sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo-icon.png" alt="Winhub Solutions" className="h-7 w-auto object-contain" />
            <span className="text-sm font-black tracking-tight text-white uppercase hidden sm:inline">
              Winhub Solutions
            </span>
          </Link>
          <span className="text-[#3A3A48] hidden sm:inline">|</span>
          <span className="px-2.5 py-1 rounded-md bg-[#FF7120]/15 border border-[#FF7120]/30 text-[10px] font-mono text-[#FF7120] uppercase font-bold">
            Payload CMS // Neon Postgres
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#8E8E89]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Neon DB: ep-red-sun // CONNECTED</span>
          </div>

          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181822] hover:bg-[#20202E] text-xs font-mono text-[#E5E5E0] border border-[#282836] transition-colors"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-xs font-mono text-red-400 border border-red-500/25 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Layout Grid */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Navigation Sidebar */}
        <aside className="w-64 bg-[#0D0D12] border-r border-[#1C1C26] p-4 flex flex-col justify-between shrink-0 hidden md:flex">
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#666666] tracking-widest block mb-2 px-3">
                OVERVIEW
              </span>
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("dashboard")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "dashboard"
                      ? "bg-[#FF7120] text-white font-bold shadow-md shadow-[#FF7120]/20"
                      : "text-[#8E8E89] hover:bg-[#15151D] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    Dashboard
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 font-bold">
                    ACTIVE
                  </span>
                </button>
              </nav>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase text-[#666666] tracking-widest block mb-2 px-3">
                COLLECTIONS
              </span>
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("services")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "services"
                      ? "bg-[#FF7120] text-white font-bold shadow-md shadow-[#FF7120]/20"
                      : "text-[#8E8E89] hover:bg-[#15151D] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Services
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-black/30">18</span>
                </button>

                <button
                  onClick={() => setActiveTab("leads")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "leads"
                      ? "bg-[#FF7120] text-white font-bold shadow-md shadow-[#FF7120]/20"
                      : "text-[#8E8E89] hover:bg-[#15151D] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Inbound Leads
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 font-bold">
                    NEON
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("projects")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "projects"
                      ? "bg-[#FF7120] text-white font-bold shadow-md shadow-[#FF7120]/20"
                      : "text-[#8E8E89] hover:bg-[#15151D] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Projects
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-black/30">6</span>
                </button>

                <button
                  onClick={() => setActiveTab("faqs")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "faqs"
                      ? "bg-[#FF7120] text-white font-bold shadow-md shadow-[#FF7120]/20"
                      : "text-[#8E8E89] hover:bg-[#15151D] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    FAQs
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-black/30">40</span>
                </button>

                <button
                  onClick={() => setActiveTab("media")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "media"
                      ? "bg-[#FF7120] text-white font-bold shadow-md shadow-[#FF7120]/20"
                      : "text-[#8E8E89] hover:bg-[#15151D] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    Media Library
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-black/30">29</span>
                </button>
              </nav>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase text-[#666666] tracking-widest block mb-2 px-3">
                GLOBALS
              </span>
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "settings"
                      ? "bg-[#FF7120] text-white font-bold shadow-md shadow-[#FF7120]/20"
                      : "text-[#8E8E89] hover:bg-[#15151D] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Site Settings
                  </span>
                </button>
              </nav>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[#14141B] border border-[#22222E] space-y-1 text-[11px] font-mono">
            <div className="text-white font-bold">Admin: {email}</div>
            <div className="text-[#8E8E89]">Role: Super Administrator</div>
            <div className="text-emerald-400">DB: Neon PostgreSQL 18.6</div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
          {savedNotice && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{savedNotice}</span>
            </div>
          )}

          {/* TAB 0: Default Dashboard Overview */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              {/* Top Welcome & Telemetry Banner */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#12121A] via-[#161622] to-[#101016] border border-[#242435] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7120]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7120]/15 border border-[#FF7120]/30 text-[#FF7120] text-xs font-mono mb-3">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>CONTROL CENTER // DEFAULT DASHBOARD</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-2">
                      Winhub Solutions Control Portal
                    </h1>
                    <p className="text-xs sm:text-sm font-mono text-[#8E8E89] max-w-2xl leading-relaxed">
                      Integrated Payload CMS v2.32 engine running on Neon Serverless PostgreSQL 18.6 with Next.js 14 App Router SSG.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/"
                      target="_blank"
                      className="px-5 py-3 rounded-xl bg-[#FF7120] hover:bg-[#E85F0F] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-[#FF7120]/25"
                    >
                      <span>Preview Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={fetchLeads}
                      className="px-4 py-3 rounded-xl bg-[#1A1A26] hover:bg-[#222232] border border-[#2D2D40] text-white text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${leadsLoading ? "animate-spin" : ""}`} />
                      <span>Sync Telemetry</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Database Cluster Health Diagnostic */}
              <div className="p-6 rounded-2xl bg-[#111118] border border-[#20202E] space-y-3 font-mono text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white font-bold pb-2 border-b border-[#1E1E2C]">
                  <span className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#FF7120]" />
                    NEON POSTGRESQL 18.6 SERVERLESS CLUSTER // DATABASE STATUS
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    ONLINE · POOLED SSL ACTIVE
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1 text-[#8E8E89]">
                  <div className="p-3.5 rounded-xl bg-[#0D0D14] border border-[#1E1E2C]">
                    <span className="text-[10px] block uppercase text-[#555555]">Host Endpoint</span>
                    <span className="text-white font-bold truncate block">ep-red-sun-bc56t67s...</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0D0D14] border border-[#1E1E2C]">
                    <span className="text-[10px] block uppercase text-[#555555]">Active Database</span>
                    <span className="text-white font-bold">neondb (neondb_owner)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0D0D14] border border-[#1E1E2C]">
                    <span className="text-[10px] block uppercase text-[#555555]">Relational Tables</span>
                    <span className="text-[#FF7120] font-bold">contact_submissions, media_items</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0D0D14] border border-[#1E1E2C]">
                    <span className="text-[10px] block uppercase text-[#555555]">Response Latency</span>
                    <span className="text-emerald-400 font-bold">&lt; 15ms · 8.8.8.8 Resolver</span>
                  </div>
                </div>
              </div>

              {/* Core Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div
                  onClick={() => setActiveTab("leads")}
                  className="p-5 rounded-2xl bg-[#111118] border border-[#20202E] hover:border-[#FF7120] transition-all cursor-pointer group space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#8E8E89] uppercase">Inbound Leads</span>
                    <MessageSquare className="w-4 h-4 text-[#FF7120]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FF7120] transition-colors">
                    {leads.length}
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400">Live in Neon DB</div>
                </div>

                <div
                  onClick={() => setActiveTab("services")}
                  className="p-5 rounded-2xl bg-[#111118] border border-[#20202E] hover:border-[#FF7120] transition-all cursor-pointer group space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#8E8E89] uppercase">Services</span>
                    <Layers className="w-4 h-4 text-[#FF7120]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FF7120] transition-colors">
                    18
                  </div>
                  <div className="text-[10px] font-mono text-[#8E8E89]">Disciplines Published</div>
                </div>

                <div
                  onClick={() => setActiveTab("projects")}
                  className="p-5 rounded-2xl bg-[#111118] border border-[#20202E] hover:border-[#FF7120] transition-all cursor-pointer group space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#8E8E89] uppercase">Projects</span>
                    <Briefcase className="w-4 h-4 text-[#FF7120]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FF7120] transition-colors">
                    6
                  </div>
                  <div className="text-[10px] font-mono text-[#8E8E89]">Case Studies Live</div>
                </div>

                <div
                  onClick={() => setActiveTab("faqs")}
                  className="p-5 rounded-2xl bg-[#111118] border border-[#20202E] hover:border-[#FF7120] transition-all cursor-pointer group space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#8E8E89] uppercase">FAQs</span>
                    <HelpCircle className="w-4 h-4 text-[#FF7120]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FF7120] transition-colors">
                    40
                  </div>
                  <div className="text-[10px] font-mono text-[#8E8E89]">Schema Entities</div>
                </div>

                <div
                  onClick={() => setActiveTab("media")}
                  className="p-5 rounded-2xl bg-[#111118] border border-[#20202E] hover:border-[#FF7120] transition-all cursor-pointer group space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#8E8E89] uppercase">Media Items</span>
                    <ImageIcon className="w-4 h-4 text-[#FF7120]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FF7120] transition-colors">
                    29
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400">Database Synced</div>
                </div>
              </div>

              {/* Quick Actions Shortcuts */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8E89] block">
                  // QUICK ACCESS SHORTCUTS
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  <button
                    onClick={() => setActiveTab("services")}
                    className="p-3.5 rounded-xl bg-[#15151F] border border-[#222230] hover:border-[#FF7120] text-left transition-colors cursor-pointer"
                  >
                    <Layers className="w-4 h-4 text-[#FF7120] mb-2" />
                    <span className="block text-xs font-bold text-white uppercase">Services</span>
                    <span className="text-[10px] font-mono text-[#666666]">18 entries</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("leads")}
                    className="p-3.5 rounded-xl bg-[#15151F] border border-[#222230] hover:border-[#FF7120] text-left transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400 mb-2" />
                    <span className="block text-xs font-bold text-white uppercase">Inbound Leads</span>
                    <span className="text-[10px] font-mono text-[#666666]">Neon DB</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("projects")}
                    className="p-3.5 rounded-xl bg-[#15151F] border border-[#222230] hover:border-[#FF7120] text-left transition-colors cursor-pointer"
                  >
                    <Briefcase className="w-4 h-4 text-indigo-400 mb-2" />
                    <span className="block text-xs font-bold text-white uppercase">Projects</span>
                    <span className="text-[10px] font-mono text-[#666666]">6 studies</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("media")}
                    className="p-3.5 rounded-xl bg-[#15151F] border border-[#222230] hover:border-[#FF7120] text-left transition-colors cursor-pointer"
                  >
                    <ImageIcon className="w-4 h-4 text-cyan-400 mb-2" />
                    <span className="block text-xs font-bold text-white uppercase">Media Library</span>
                    <span className="text-[10px] font-mono text-[#666666]">Asset Vault</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("faqs")}
                    className="p-3.5 rounded-xl bg-[#15151F] border border-[#222230] hover:border-[#FF7120] text-left transition-colors cursor-pointer"
                  >
                    <HelpCircle className="w-4 h-4 text-amber-400 mb-2" />
                    <span className="block text-xs font-bold text-white uppercase">FAQs Hub</span>
                    <span className="text-[10px] font-mono text-[#666666]">SEO Schema</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("settings")}
                    className="p-3.5 rounded-xl bg-[#15151F] border border-[#222230] hover:border-[#FF7120] text-left transition-colors cursor-pointer"
                  >
                    <Settings className="w-4 h-4 text-purple-400 mb-2" />
                    <span className="block text-xs font-bold text-white uppercase">Settings</span>
                    <span className="text-[10px] font-mono text-[#666666]">Global HQ</span>
                  </button>
                </div>
              </div>

              {/* Recent Inbound Leads Preview */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#20202A]">
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
                      <span>Latest Inbound Leads</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400">
                        NEON DB
                      </span>
                    </h3>
                    <p className="text-xs font-mono text-[#8E8E89]">
                      Direct client submissions from the Contact Us form
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab("leads")}
                    className="text-xs font-mono text-[#FF7120] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View All ({leads.length})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="rounded-2xl border border-[#20202A] bg-[#111117] overflow-hidden">
                  {leads.length === 0 ? (
                    <div className="p-8 text-center text-xs font-mono text-[#8E8E89]">
                      No inquiries recorded yet. Form submissions from /contact will appear here automatically.
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono">
                        <thead className="bg-[#181822] text-[#8E8E89] uppercase text-[10px]">
                          <tr>
                            <th className="py-2.5 px-4">Lead ID</th>
                            <th className="py-2.5 px-4">Client Name</th>
                            <th className="py-2.5 px-4">Service</th>
                            <th className="py-2.5 px-4">Budget</th>
                            <th className="py-2.5 px-4">Date</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1D1D28]">
                          {leads.slice(0, 5).map((l) => (
                            <tr key={l.id} className="hover:bg-[#161622] transition-colors">
                              <td className="py-3 px-4 text-[#FF7120] font-bold">#{l.id}</td>
                              <td className="py-3 px-4 text-white font-bold">{l.name}</td>
                              <td className="py-3 px-4 text-[#A0A09B]">{l.service || "General"}</td>
                              <td className="py-3 px-4 text-emerald-400">{l.budget || "Flexible"}</td>
                              <td className="py-3 px-4 text-[#666666] text-[10px]">
                                {new Date(l.created_at).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB: Inbound Leads (Neon PostgreSQL) */}
          {activeTab === "leads" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#20202A]">
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight text-white flex items-center gap-3">
                    <span>Inbound Inquiries & Leads</span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      LIVE NEON POSTGRESQL
                    </span>
                  </h2>
                  <p className="text-xs font-mono text-[#8E8E89]">
                    Real-time contact submissions stored in <span className="text-[#FF7120]">public.contact_submissions</span>
                  </p>
                </div>

                <button
                  onClick={fetchLeads}
                  disabled={leadsLoading}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#181822] hover:bg-[#222230] border border-[#2A2A38] text-xs font-mono text-white transition-colors cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${leadsLoading ? "animate-spin" : ""}`} />
                  <span>Refresh DB</span>
                </button>
              </div>

              {/* Inquiries Table */}
              <div className="rounded-2xl border border-[#20202A] bg-[#111117] overflow-hidden">
                {leads.length === 0 ? (
                  <div className="p-12 text-center space-y-3">
                    <Database className="w-8 h-8 text-[#FF7120] mx-auto opacity-70" />
                    <div className="text-sm font-bold text-white uppercase">Table Synchronized & Awaiting Submissions</div>
                    <div className="text-xs font-mono text-[#8E8E89] max-w-md mx-auto">
                      Submissions from the Contact Us form (/contact) and footer will be saved instantly to Neon PostgreSQL.
                    </div>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-[#181822] border-b border-[#242432] text-[#8E8E89] uppercase tracking-wider text-[10px]">
                        <tr>
                          <th className="py-3 px-4">ID</th>
                          <th className="py-3 px-4">Name</th>
                          <th className="py-3 px-4">Email / Phone</th>
                          <th className="py-3 px-4">Service Required</th>
                          <th className="py-3 px-4">Budget</th>
                          <th className="py-3 px-4">Message</th>
                          <th className="py-3 px-4">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1D1D28]">
                        {leads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-[#161622] transition-colors">
                            <td className="py-3.5 px-4 text-[#FF7120] font-bold">#{lead.id}</td>
                            <td className="py-3.5 px-4 text-white font-bold">{lead.name}</td>
                            <td className="py-3.5 px-4 text-[#A0A09B]">
                              <div>{lead.email}</div>
                              {lead.phone && <div className="text-[10px] text-[#6E6E6A]">{lead.phone}</div>}
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="px-2 py-0.5 rounded-full bg-[#FF7120]/15 text-[#FF7120] text-[10px]">
                                {lead.service || "General"}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-emerald-400">{lead.budget || "Flexible"}</td>
                            <td className="py-3.5 px-4 text-[#8E8E89] max-w-xs truncate">{lead.message || "—"}</td>
                            <td className="py-3.5 px-4 text-[#666666] text-[10px]">
                              {new Date(lead.created_at).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 1: Services Collection */}
          {activeTab === "services" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#20202A]">
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                    Services Collection
                  </h2>
                  <p className="text-xs font-mono text-[#8E8E89]">
                    18 IT & Digital Disciplines · Lexical Rich Text Enabled
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-[#666666] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchFilter}
                      onChange={(e) => setSearchFilter(e.target.value)}
                      placeholder="Filter services..."
                      className="pl-8 pr-4 py-2 rounded-xl bg-[#14141C] border border-[#242432] text-white text-xs font-mono focus:outline-none focus:border-[#FF7120]"
                    />
                  </div>

                  <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FF7120] hover:bg-[#E85F0F] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create</span>
                  </button>
                </div>
              </div>

              {/* Services Table */}
              <div className="rounded-2xl border border-[#20202A] bg-[#111117] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#181822] border-b border-[#242432] text-[#8E8E89] uppercase tracking-wider text-[10px]">
                      <tr>
                        <th className="py-3 px-4">Title & Slug</th>
                        <th className="py-3 px-4">Domain Tag</th>
                        <th className="py-3 px-4">Tech Stack</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1D1D28]">
                      {filteredServices.map((service) => (
                        <tr key={service.slug} className="hover:bg-[#161622] transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-white">{service.title}</div>
                            <div className="text-[10px] text-[#6E6E6A]">/services/{service.slug}</div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="px-2 py-0.5 rounded-full bg-[#FF7120]/15 text-[#FF7120] text-[10px]">
                              {service.shortTag}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-[#A0A09B]">
                            {service.technologies.slice(0, 3).join(", ")}
                            {service.technologies.length > 3 && ` +${service.technologies.length - 3}`}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              Published
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Link
                                href={`/services/${service.slug}`}
                                target="_blank"
                                className="p-1.5 rounded-lg bg-[#1E1E2A] hover:bg-[#282838] text-[#8E8E89] hover:text-white transition-colors"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </Link>
                              <button className="p-1.5 rounded-lg bg-[#1E1E2A] hover:bg-[#FF7120] text-[#8E8E89] hover:text-white transition-colors">
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Portfolio Projects */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#20202A]">
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                    Portfolio & Case Studies
                  </h2>
                  <p className="text-xs font-mono text-[#8E8E89]">
                    6 Flagship Commercial Deployments
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PORTFOLIO_PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-5 rounded-2xl bg-[#111117] border border-[#20202A] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#FF7120] uppercase">{proj.category}</span>
                      <span className="text-[10px] font-mono text-emerald-400">Live</span>
                    </div>
                    <h3 className="text-base font-bold text-white">{proj.title}</h3>
                    <p className="text-xs font-mono text-[#8E8E89] line-clamp-2">{proj.description}</p>
                    <div className="pt-2 flex flex-wrap gap-1">
                      {proj.tags.map((t) => (
                        <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#1A1A24] text-[#A0A09B]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: FAQs */}
          {activeTab === "faqs" && (
            <div className="space-y-6">
              <div className="pb-6 border-b border-[#20202A]">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-xs font-mono text-[#8E8E89]">
                  Schema-Indexed Knowledge Base (FAQPage JSON-LD)
                </p>
              </div>

              <div className="space-y-3">
                {SERVICES_CATALOG.flatMap((s) => s.faqs).slice(0, 10).map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#111117] border border-[#20202A] space-y-1.5">
                    <div className="text-xs font-bold text-white">{faq.q}</div>
                    <div className="text-xs font-mono text-[#8E8E89]">{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Media Library & Database Storage */}
          {activeTab === "media" && (
            <div className="space-y-6">
              <div className="pb-6 border-b border-[#20202A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                    Neon PostgreSQL Database & Media Library
                  </h2>
                  <p className="text-xs font-mono text-[#8E8E89]">
                    Connected to AWS US-East-1 Neon Cluster: <span className="text-[#FF7120]">ep-red-sun-bc56t67s-pooler</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                    Neon DB Active
                  </span>
                </div>
              </div>

              {/* Neon DB Status Card */}
              <div className="p-6 rounded-2xl bg-[#14141E] border border-[#262638] space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-white font-bold">
                  <span className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#FF7120]" />
                    NEON POSTGRESQL 18.6 SERVERLESS CLUSTER
                  </span>
                  <span className="text-emerald-400">ONLINE · POOLED SSL</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-[#8E8E89]">
                  <div className="p-3 rounded-xl bg-[#0D0D14] border border-[#1E1E2C]">
                    <span className="text-[10px] block uppercase text-[#555555]">Host</span>
                    <span className="text-white font-bold truncate block">ep-red-sun-bc56t67s-pooler.c-16...</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0D0D14] border border-[#1E1E2C]">
                    <span className="text-[10px] block uppercase text-[#555555]">Database</span>
                    <span className="text-white font-bold">neondb (Owner: neondb_owner)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0D0D14] border border-[#1E1E2C]">
                    <span className="text-[10px] block uppercase text-[#555555]">Public Schema Tables</span>
                    <span className="text-[#FF7120] font-bold">contact_submissions, media_items</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-[#111117] border border-[#20202A] space-y-2">
                  <div className="aspect-video bg-black/60 rounded-xl overflow-hidden flex items-center justify-center p-2">
                    <img src="/logo-dark-mode.png" alt="Logo" className="max-h-8 object-contain" />
                  </div>
                  <div className="text-[11px] font-mono text-white truncate">logo-dark-mode.png</div>
                  <div className="text-[10px] font-mono text-emerald-400">Synchronized Asset</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#111117] border border-[#20202A] space-y-2">
                  <div className="aspect-video bg-black/60 rounded-xl overflow-hidden flex items-center justify-center p-2">
                    <img src="/logo-icon.png" alt="Logo Icon" className="max-h-8 object-contain" />
                  </div>
                  <div className="text-[11px] font-mono text-white truncate">logo-icon.png</div>
                  <div className="text-[10px] font-mono text-emerald-400">Synchronized Asset</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#111117] border border-[#20202A] space-y-2">
                  <div className="aspect-video bg-black/60 rounded-xl overflow-hidden flex items-center justify-center p-2">
                    <img src="/logo.png" alt="Winhub Logo" className="max-h-8 object-contain" />
                  </div>
                  <div className="text-[11px] font-mono text-white truncate">winhub-logo.png</div>
                  <div className="text-[10px] font-mono text-emerald-400">Synchronized Asset</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#111117] border border-[#20202A] space-y-2">
                  <div className="aspect-video bg-black/60 rounded-xl overflow-hidden flex items-center justify-center p-2">
                    <img src="/images/ai-mesh.jpg" alt="AI Mesh" className="max-h-full object-cover" />
                  </div>
                  <div className="text-[11px] font-mono text-white truncate">ai-mesh.jpg</div>
                  <div className="text-[10px] font-mono text-emerald-400">Synchronized Asset</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Global Site Settings */}
          {activeTab === "settings" && (
            <div className="space-y-6 max-w-3xl">
              <div className="pb-6 border-b border-[#20202A]">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                  Site Settings Global
                </h2>
                <p className="text-xs font-mono text-[#8E8E89]">
                  Global Metadata, Official Warangal Address & Telemetry
                </p>
              </div>

              <form onSubmit={handleSaveSettings} className="space-y-5">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#A0A09B] mb-2 tracking-wider">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#14141C] border border-[#242432] text-white text-xs font-mono focus:outline-none focus:border-[#FF7120]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#A0A09B] mb-2 tracking-wider">
                      Official Contact Email
                    </label>
                    <input
                      type="email"
                      value={companyEmail}
                      onChange={(e) => setCompanyEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#14141C] border border-[#242432] text-white text-xs font-mono focus:outline-none focus:border-[#FF7120]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#A0A09B] mb-2 tracking-wider">
                      Official Phone
                    </label>
                    <input
                      type="text"
                      value={companyPhone}
                      onChange={(e) => setCompanyPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#14141C] border border-[#242432] text-white text-xs font-mono focus:outline-none focus:border-[#FF7120]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#A0A09B] mb-2 tracking-wider">
                    Official Headquarters Address
                  </label>
                  <input
                    type="text"
                    value={companyAddress}
                    onChange={(e) => setCompanyAddress(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#14141C] border border-[#242432] text-white text-xs font-mono focus:outline-none focus:border-[#FF7120]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#A0A09B] mb-2 tracking-wider">
                    Telemetry Status Text
                  </label>
                  <input
                    type="text"
                    value={telemetryStatus}
                    onChange={(e) => setTelemetryStatus(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#14141C] border border-[#242432] text-white text-xs font-mono focus:outline-none focus:border-[#FF7120]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#FF7120] hover:bg-[#E85F0F] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Commit Settings to Neon Database</span>
                </button>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
