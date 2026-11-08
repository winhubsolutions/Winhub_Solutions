import React from "react";
import type { Metadata } from "next";
import LiveTechnologiesView, { TechCategoryGroup } from "@/components/pages/LiveTechnologiesView";

export const metadata: Metadata = {
  title: "Technologies We Work With | Full-Stack & AI Engineering | Winhub Solutions",
  description:
    "Explore the programming languages, frameworks, databases, and AI tooling powering Winhub Solutions software deliverables.",
  alternates: {
    canonical: "https://winhubsolutions.com/technologies",
  },
  openGraph: {
    title: "Engineering Technologies & Stacks | Winhub Solutions",
    description:
      "Modern React, Next.js, Node.js, Python, PostgreSQL, Flutter, and MCP AI agent development stacks.",
    url: "https://winhubsolutions.com/technologies",
    siteName: "Winhub Solutions",
    type: "website",
  },
};

const DEFAULT_CATEGORIES: TechCategoryGroup[] = [
  {
    category: "Frontend Technologies",
    description: "Ultra-fast, responsive, strictly typed, and reactive user interfaces.",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend Technologies",
    description: "High-throughput asynchronous servers, resilient APIs, and microservices.",
    items: ["Node.js", "Express.js", "PHP", "Python", "Java", ".NET"],
  },
  {
    category: "Database Technologies",
    description: "High-integrity ACID relational databases, distributed stores, and caches.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Microsoft SQL Server"],
  },
  {
    category: "CMS Platforms",
    description: "Headless CMS, scholarly publishing systems, and enterprise content portals.",
    items: ["Payload CMS", "WordPress", "Drupal", "Joomla", "Open Journal Systems"],
  },
  {
    category: "Cloud & Infrastructure",
    description: "Sub-second global edge compute, automated CI/CD, and hardened hosting.",
    items: ["Vercel", "AWS", "DigitalOcean", "Linux", "Docker", "Cloudflare"],
  },
  {
    category: "AI & Automation",
    description: "Autonomous models, Model Context Protocol (MCP), and agentic workflows.",
    items: ["LLMs", "AI Agents", "MCP", "API Integrations", "Workflow Automation"],
  },
];

const CMS_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

async function getTechnologiesPageDoc() {
  try {
    const res = await fetch(`${CMS_URL}/api/pages?where[slug][equals]=technologies&limit=1&depth=2`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      return data?.docs?.[0] || null;
    }
  } catch (e) {}
  return null;
}

async function getDynamicTechCategories(): Promise<TechCategoryGroup[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/technologies?limit=100`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data?.docs) && data.docs.length > 0) {
        // Map category keys to group names
        const categoryLabels: Record<string, { title: string; desc: string }> = {
          frontend: {
            title: "Frontend Technologies",
            desc: "Ultra-fast, responsive, strictly typed, and reactive user interfaces.",
          },
          backend: {
            title: "Backend Technologies",
            desc: "High-throughput asynchronous servers, resilient APIs, and microservices.",
          },
          database: {
            title: "Database Technologies",
            desc: "High-integrity ACID relational databases, distributed stores, and caches.",
          },
          cms: {
            title: "CMS Platforms",
            desc: "Headless CMS, scholarly publishing systems, and enterprise content portals.",
          },
          cloud: {
            title: "Cloud & Infrastructure",
            desc: "Sub-second global edge compute, automated CI/CD, and hardened hosting.",
          },
          ai: {
            title: "AI & Automation",
            desc: "Autonomous models, Model Context Protocol (MCP), and agentic workflows.",
          },
        };

        const groups: Record<string, string[]> = {
          frontend: [],
          backend: [],
          database: [],
          cms: [],
          cloud: [],
          ai: [],
        };

        data.docs.forEach((item: any) => {
          const cat = item.category?.toLowerCase();
          if (groups[cat]) {
            groups[cat].push(item.name);
          }
        });

        const result: TechCategoryGroup[] = Object.keys(groups)
          .filter((k) => groups[k].length > 0)
          .map((k) => ({
            category: categoryLabels[k]?.title || k,
            description: categoryLabels[k]?.desc || "",
            items: groups[k],
          }));

        if (result.length > 0) return result;
      }
    }
  } catch (e) {}
  return DEFAULT_CATEGORIES;
}

export default async function TechnologiesPage() {
  const [pageDoc, categories] = await Promise.all([
    getTechnologiesPageDoc(),
    getDynamicTechCategories(),
  ]);

  return <LiveTechnologiesView initialDoc={pageDoc} categories={categories} />;
}
