/**
 * Winhub Solutions - Master Payload CMS Configuration
 * Next.js & Payload CMS with Neon PostgreSQL & Lexical Rich Text Architecture
 */

import { Users } from "./collections/Users";
import { Inquiries } from "./collections/Inquiries";
import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";
import { Services } from "./collections/Services";
import { Projects } from "./collections/Projects";
import { Technologies } from "./collections/Technologies";
import { BlogPosts } from "./collections/BlogPosts";
import { Testimonials } from "./collections/Testimonials";
import { FAQs } from "./collections/FAQs";
import { SiteSettings } from "./globals/SiteSettings";

export const payloadConfig = {
  // Admin Panel & Default Dashboard Settings
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "· Winhub Solutions CMS Control Center",
      favicon: "/logo-icon.png",
      ogImage: "/logo-dark-mode.png",
      description: "Official Payload CMS & Neon PostgreSQL Administration Portal for Winhub Solutions",
    },
    // Default Dashboard Appearance
    theme: "dark", // 'dark' | 'light' | 'auto'
    dateFormat: "yyyy-MM-dd HH:mm:ss",
    components: {
      graphics: {
        Logo: "/components/admin/AdminLogo",
        Icon: "/components/admin/AdminIcon",
      },
      beforeDashboard: [
        "/components/admin/DashboardOverview",
      ],
      afterDashboard: [
        "/components/admin/DashboardQuickLinks",
      ],
    },
    // Default Dashboard Live Preview Support
    livePreview: {
      url: ({ data, collectionConfig }: any) => {
        if (collectionConfig?.slug === "services") {
          return `${process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"}/services/${data.slug}`;
        }
        if (collectionConfig?.slug === "projects") {
          return `${process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"}/portfolio`;
        }
        if (collectionConfig?.slug === "pages") {
          return `${process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"}/${data.slug === "home" ? "" : data.slug}`;
        }
        return process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
      },
      breakpoints: [
        { label: "Mobile (iPhone)", name: "mobile", width: 375, height: 667 },
        { label: "Tablet (iPad)", name: "tablet", width: 768, height: 1024 },
        { label: "Desktop", name: "desktop", width: 1440, height: 900 },
      ],
      collections: ["services", "pages", "projects", "blog-posts"],
    },
    // Auto-login helper for rapid development inspection
    autoLogin: {
      email: "admin@winhubsolutions.in",
      password: "admin",
      prefillOnly: true,
    },
    // Custom Navigation & Grouping
    routes: {
      admin: "/admin",
      login: "/admin/login",
      inactivityRoute: "/admin/login",
    },
  },

  // Collections Registry (Grouped by domain)
  collections: [
    Services,
    Projects,
    Inquiries,
    Technologies,
    BlogPosts,
    Pages,
    Testimonials,
    FAQs,
    Media,
    Users,
  ],

  // Globals Registry
  globals: [
    SiteSettings,
  ],

  // Server URL & Telemetry
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",
  cors: [
    "http://localhost:3000",
    "https://winhubsolutions.in",
  ],
  csrf: [
    "http://localhost:3000",
    "https://winhubsolutions.in",
  ],

  // Database Connection Configuration (Neon PostgreSQL Serverless)
  dbConfig: {
    adapter: "postgres",
    connectionString:
      process.env.DATABASE_URL ||
      process.env.POSTGRES_URL ||
      "postgresql://neondb_owner:npg_FmYh0t1uXLSP@ep-red-sun-bc56t67s-pooler.c-16.us-east-1.aws.neon.tech/neondb?sslmode=require",
  },

  // Lexical Rich Text Editor Configuration
  editorConfig: {
    features: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "heading",
      "link",
      "list",
      "quote",
      "upload",
      "codeBlock",
    ],
  },

  // TypeScript Types Output
  typescript: {
    outputFile: "src/payload/payload-types.ts",
  },

  // GraphQL Schema Generation
  graphQL: {
    schemaOutputFile: "src/payload/schema.graphql",
  },
};

export default payloadConfig;
