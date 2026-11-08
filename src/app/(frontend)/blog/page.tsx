"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import { Terminal, Clock, ArrowRight, X, Sparkles, BookOpen, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image?: string;
  fullContent?: boolean;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalArticle, setActiveModalArticle] = useState<boolean>(false);

  const categories = [
    "All",
    "Artificial Intelligence",
    "Web Development",
    "Software Development",
    "Digital Marketing",
    "UI/UX Design",
    "Technology Trends",
    "Business Automation",
  ];

  const articles: Article[] = [
    {
      id: "ai-agent-guide",
      slug: "what-is-an-ai-agent",
      title: "What Is an AI Agent? Architecture, Autonomous Workflows & Real-World Use Cases",
      category: "Artificial Intelligence",
      readTime: "8 min read",
      date: "November 2026",
      excerpt:
        "An AI Agent is a software system that can observe its environment, process information, and take actions to achieve specific goals. Discover the three-step perception loop, agent types, and autonomous business workflows.",
      image: "/images/ai-mesh.jpg",
      fullContent: true,
    },
    {
      id: "nextjs-web-apps",
      slug: "building-modern-web-applications-nextjs",
      title: "Building Scalable Modern Web Applications with Next.js & React Server Components",
      category: "Web Development",
      readTime: "5 min read",
      date: "November 2026",
      excerpt:
        "Explore how modern React architecture and Next.js App Router empower businesses to deliver blazing fast, responsive web applications with sub-second TTFB.",
    },
    {
      id: "ojs-academic-guide",
      slug: "optimizing-ojs-academic-publishing",
      title: "Best Practices for Open Journal Systems (OJS) Setup, Themes & DOI Indexing",
      category: "Software Development",
      readTime: "7 min read",
      date: "October 2026",
      excerpt:
        "Key technical considerations for universities and scholarly publishers when configuring OJS themes, Crossref DOI indexing, and peer-review workflows.",
    },
    {
      id: "technical-seo-guide",
      slug: "technical-seo-core-web-vitals-guide",
      title: "Technical SEO & Core Web Vitals: Ranking Higher with Pure Code Performance",
      category: "Digital Marketing",
      readTime: "6 min read",
      date: "September 2026",
      excerpt:
        "Learn how website performance optimization, schema markup, and clean code architecture drive long-term organic search dominance.",
    },
    {
      id: "enterprise-erp-systems",
      slug: "enterprise-erp-crm-custom-software",
      title: "Custom CRM & ERP Architecture: Solving Operational Complexity",
      category: "Business Automation",
      readTime: "6 min read",
      date: "August 2026",
      excerpt:
        "Why growing enterprises outgrow off-the-shelf software and how custom web portals streamline inventory, billing, and workflow management.",
    },
    {
      id: "uiux-design-systems",
      slug: "modern-ui-ux-design-tokens",
      title: "Designing for Conversion: Ergonomic Layouts, Spatial Grids & Design Tokens",
      category: "UI/UX Design",
      readTime: "5 min read",
      date: "August 2026",
      excerpt:
        "How design tokens in Figma and Tailwind CSS create harmonious, accessible, and high-converting enterprise digital experiences.",
    },
  ];

  const [articlesList, setArticlesList] = useState<Article[]>(articles);

  useEffect(() => {
    fetch("/api/blog-posts?limit=100")
      .then((res) => res.json())
      .then((data) => {
        if (data?.docs && data.docs.length > 0) {
          const mapped: Article[] = data.docs.map((d: any) => ({
            id: String(d.id),
            slug: d.slug,
            title: d.title,
            category: d.category || "Technology Trends",
            readTime: d.readTime || "5 min read",
            date: d.publishedAt ? new Date(d.publishedAt).toLocaleDateString() : "2026",
            excerpt: d.excerpt || "",
            image: d.featuredImage?.url || "/images/ai-mesh.jpg",
          }));
          setArticlesList([...mapped, ...articles]);
        }
      })
      .catch(() => {});
  }, []);

  const filtered =
    selectedCategory === "All"
      ? articlesList
      : articlesList.filter((a) => a.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F4] dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="pt-24 pb-16 border-b border-[#E2E2DC] dark:border-[#222228] bg-[#EFEFEA] dark:bg-[#0D0D10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest mb-4">
              <Terminal className="w-4 h-4" />
              <span>INSIGHTS & TECHNOLOGY UPDATES</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight mb-6">
              Explore Ideas, Innovations <br />
              <span className="text-[#FF7120]">& Digital Trends.</span>
            </h1>
            <p className="text-base sm:text-xl text-[#555552] dark:text-[#A0A09B] max-w-3xl leading-relaxed">
              Stay informed about the latest developments in web technologies, 
              software engineering, AI automation, digital marketing and business technology.
            </p>
          </div>
        </section>

        {/* Category Filter Pills */}
        <section className="py-8 border-b border-[#E2E2DC] dark:border-[#222228] bg-white dark:bg-[#0D0D10] sticky top-[72px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#FF7120] text-white shadow-sm font-bold"
                    : "bg-[#F6F6F4] dark:bg-[#141418] text-[#6E6E6A] dark:text-[#A0A09B] border border-[#E2E2DC] dark:border-[#282830] hover:text-[#0A0A0A] dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Top Article: "What Is an AI Agent?" */}
        <section className="py-12 border-b border-[#E2E2DC] dark:border-[#222228]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="rounded-3xl bg-[#0A0A0C] border border-[#222228] overflow-hidden text-white grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
              <div className="lg:col-span-7 p-8 sm:p-14 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7120]/20 text-[#FF7120] border border-[#FF7120]/30 text-xs font-mono mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>FEATURED RESEARCH // ARTIFICIAL INTELLIGENCE</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-4">
                    What Is an AI Agent? Architecture, Autonomous Workflows & Real-World Use Cases
                  </h2>
                  <p className="text-sm sm:text-base text-[#A0A09B] leading-relaxed mb-6">
                    An AI Agent is a software system that can observe its environment, process information, 
                    and take actions to achieve specific goals. Unlike traditional programs that only follow fixed instructions, 
                    AI agents can adapt, learn, and make decisions based on data and experience.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#222228] flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs font-mono text-[#8E8E89]">
                    <Clock className="w-4 h-4" />
                    <span>8 min read · November 2026</span>
                  </div>
                  <button
                    onClick={() => setActiveModalArticle(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF7120] hover:bg-[#E85F0F] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Read Complete Paper</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                <img
                  src="/images/ai-mesh.jpg"
                  alt="Winhub AI Intelligence Mesh"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-transparent to-transparent hidden lg:block" />
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((article) => (
                <div
                  key={article.id}
                  className="rounded-3xl bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] overflow-hidden p-8 flex flex-col justify-between hover:border-[#FF7120] transition-colors group shadow-sm"
                >
                  <div>
                    {/* Article Graphic Thumbnail */}
                    <div className="relative mb-6 rounded-2xl overflow-hidden border border-[#E2E2DC] dark:border-[#222228] bg-[#0E0E12] aspect-[16/9]">
                      <img
                        src={`/images/blog/${article.slug}.svg`}
                        alt={article.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/images/ai-mesh.jpg";
                        }}
                      />
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#FF7120] uppercase font-bold">
                        {article.category}
                      </span>
                      <span className="text-xs font-mono text-[#8E8E89]">{article.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white mb-3 group-hover:text-[#FF7120] transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6E6E6A] dark:text-[#A0A09B] leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#EFEFEA] dark:border-[#1E1E24] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#8E8E89]">{article.readTime}</span>
                    {article.id === "ai-agent-guide" ? (
                      <button
                        onClick={() => setActiveModalArticle(true)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FF7120] hover:underline"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FF7120] hover:underline"
                      >
                        <span>Request Dispatch</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* AI Agent Deep-Dive Modal */}
      {activeModalArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] rounded-3xl max-w-4xl w-full p-6 sm:p-10 relative shadow-2xl max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalArticle(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#F6F6F4] dark:bg-[#1C1C22] text-[#6E6E6A] dark:text-[#A0A09B] hover:text-[#0A0A0A] dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4" />
              <span>TECHNICAL WHITEPAPER // WINHUB RESEARCH</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight mb-4">
              What Is an AI Agent?
            </h2>

            <div className="prose dark:prose-invert max-w-none text-sm sm:text-base space-y-6 text-[#4A4A46] dark:text-[#C5C5C0] leading-relaxed">
              <p>
                An <strong>AI Agent</strong> is a software system that can observe its environment, 
                process information, and take actions to achieve specific goals. Unlike traditional programs 
                that only follow fixed instructions, AI agents can adapt, learn, and make decisions based on data and experience.
              </p>
              <p className="italic bg-[#F6F6F4] dark:bg-[#18181D] p-4 rounded-xl border border-[#E2E2DC] dark:border-[#282830]">
                You can think of an AI agent as a smart digital worker that understands situations and responds intelligently.
              </p>

              <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white uppercase pt-2">
                Examples of AI Agents
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Chatbots</strong> – Virtual assistants that answer customer questions and provide support</li>
                <li><strong>Email Filters</strong> – Systems that automatically classify emails based on content or sender</li>
                <li><strong>Recommendation Engines</strong> – Tools that suggest products or content based on user behavior (e.g. Netflix and Amazon)</li>
              </ul>

              <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white uppercase pt-2">
                Autonomous AI Agents
              </h3>
              <p>
                An Autonomous AI Agent goes a step further by operating independently, without continuous human input. 
                These agents can plan, decide, act, and learn on their own in real time. They continuously analyze their 
                environment and improve their behavior based on outcomes.
              </p>
              <p>
                <strong>Example:</strong> Self-driving cars – Autonomous agents that monitor traffic, detect obstacles, 
                and make driving decisions without human control.
              </p>

              <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white uppercase pt-2">
                How Do AI Agents Work? (The 3-Step Perception Loop)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830]">
                  <span className="text-xs font-mono font-bold text-[#FF7120] block mb-1">01. PERCEPTION</span>
                  <p className="text-xs leading-relaxed">
                    Collects data from its environment using user messages, camera input, sensors, or system data.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830]">
                  <span className="text-xs font-mono font-bold text-[#FF7120] block mb-1">02. DECISION-MAKING</span>
                  <p className="text-xs leading-relaxed">
                    Processes data using rules, logic, or ML models to classify text, detect sentiment, and choose best response.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830]">
                  <span className="text-xs font-mono font-bold text-[#FF7120] block mb-1">03. ACTION</span>
                  <p className="text-xs leading-relaxed">
                    Performs actions: sending replies, updating content, or triggering system commands via APIs.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white uppercase pt-2">
                Types of AI Agents
              </h3>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830]">
                  <strong className="text-[#0A0A0A] dark:text-white">Reactive Agents:</strong> Respond to specific inputs without learning from past experiences (e.g. simple keyword chatbots).
                </div>
                <div className="p-3.5 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830]">
                  <strong className="text-[#0A0A0A] dark:text-white">Deliberative Agents:</strong> Evaluate multiple options before taking action (e.g. support ticket routing by complexity).
                </div>
                <div className="p-3.5 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830]">
                  <strong className="text-[#0A0A0A] dark:text-white">Learning Agents:</strong> Improve performance over time by learning from feedback (e.g. adaptive recommendation engines).
                </div>
                <div className="p-3.5 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830]">
                  <strong className="text-[#0A0A0A] dark:text-white">Autonomous Agents:</strong> Operate independently in dynamic environments (e.g. autonomous navigation systems).
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white uppercase pt-2">
                Key Characteristics of AI Agents
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { name: "Autonomy", desc: "Ability to perform tasks without human intervention." },
                  { name: "Perception", desc: "Ability to sense and understand the environment." },
                  { name: "Reactivity", desc: "Ability to respond to real-time changes." },
                  { name: "Reasoning & Decision-Making", desc: "Ability to analyze data and choose appropriate actions." },
                  { name: "Learning", desc: "Ability to improve accuracy and performance over time." },
                  { name: "Communication", desc: "Ability to interact with humans or other systems." },
                  { name: "Goal-Oriented Behavior", desc: "Designed to achieve specific business outcomes." },
                ].map((c) => (
                  <div key={c.name} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7120] shrink-0 mt-0.5" />
                    <span className="text-xs">
                      <strong>{c.name}:</strong> {c.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EFEFEA] dark:border-[#1E1E24] flex items-center justify-between">
              <button
                onClick={() => setActiveModalArticle(false)}
                className="text-xs font-mono text-[#6E6E6A] dark:text-[#A0A09B] hover:text-[#0A0A0A] dark:hover:text-white"
              >
                Close Paper
              </button>
              <Link
                href="/contact"
                onClick={() => setActiveModalArticle(false)}
                className="px-6 py-3 rounded-full bg-[#FF7120] text-white text-xs font-mono font-bold uppercase hover:bg-[#0A0A0A] transition-colors"
              >
                Deploy AI Agents with Winhub
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

