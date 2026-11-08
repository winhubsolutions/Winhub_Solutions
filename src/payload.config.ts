import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { seoPlugin } from "@payloadcms/plugin-seo";
import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
  HTMLConverterFeature,
} from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";

import { Users } from "./payload/collections/Users";
import { Inquiries } from "./payload/collections/Inquiries";
import { Services } from "./payload/collections/Services";
import { Projects } from "./payload/collections/Projects";
import { Technologies } from "./payload/collections/Technologies";
import { BlogPosts } from "./payload/collections/BlogPosts";
import { Pages } from "./payload/collections/Pages";
import { Testimonials } from "./payload/collections/Testimonials";
import { FAQs } from "./payload/collections/FAQs";
import { Media } from "./payload/collections/Media";
import { SiteSettings } from "./payload/globals/SiteSettings";
import { AutoSeoSettings } from "./payload/globals/AutoSeoSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: "users",
    meta: {
      titleSuffix: "· Winhub Solutions Payload CMS",
      description: "Payload CMS Admin Portal",
      icons: [{ rel: "icon", url: "/logo-icon.png" }],
    },
    theme: "dark",
    dateFormat: "yyyy-MM-dd HH:mm:ss",
    livePreview: {
      breakpoints: [
        { label: "Mobile (iPhone)", name: "mobile", width: 375, height: 667 },
        { label: "Tablet (iPad)", name: "tablet", width: 768, height: 1024 },
        { label: "Desktop (1440p)", name: "desktop", width: 1440, height: 900 },
      ],
      collections: ["pages", "services", "projects", "blog-posts"],
      url: ({ data, collectionConfig }: any) => {
        const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "";
        const slug = data?.slug;
        if (collectionConfig?.slug === "pages") {
          return `${serverUrl}/${slug === "home" || !slug ? "" : slug}`;
        }
        if (collectionConfig?.slug === "services") {
          return `${serverUrl}/services/${slug || ""}`;
        }
        if (collectionConfig?.slug === "projects") {
          return `${serverUrl}/portfolio`;
        }
        if (collectionConfig?.slug === "blog-posts") {
          return `${serverUrl}/blog`;
        }
        return `${serverUrl}/`;
      },
    },
  },

  collections: [
    Users as any,
    Services as any,
    Projects as any,
    Inquiries as any,
    Technologies as any,
    BlogPosts as any,
    Pages as any,
    Testimonials as any,
    FAQs as any,
    Media as any,
  ],

  globals: [
    SiteSettings as any,
    AutoSeoSettings as any,
  ],

  plugins: [
    seoPlugin({
      collections: ["pages", "services", "projects", "blog-posts"],
      uploadsCollection: "media",
      generateTitle: ({ doc }: any) => `${doc?.title?.value || ""} | Winhub Solutions`,
      generateDescription: ({ doc }: any) => doc?.shortDescription?.value || doc?.heroHeadline?.value || "",
      generateURL: ({ doc, collectionSlug }: any) => {
        const slug = doc?.slug?.value;
        if (collectionSlug === "pages") return `https://winhubsolutions.in/${slug === "home" ? "" : slug}`;
        return `https://winhubsolutions.in/${collectionSlug}/${slug}`;
      },
    }),
  ],

  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      FixedToolbarFeature(),
      InlineToolbarFeature(),
      HTMLConverterFeature(),
    ],
  }),

  secret: process.env.PAYLOAD_SECRET || "9b8c3f4e2a1d0e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f",

  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },

  db: postgresAdapter({
    push: false,
    pool: {
      host: "44.218.206.133",
      port: 5432,
      user: process.env.PGUSER || "neondb_owner",
      password: process.env.PGPASSWORD || "npg_FmYh0t1uXLSP",
      database: process.env.PGDATABASE || "neondb",
      ssl: {
        rejectUnauthorized: false,
        servername: "ep-red-sun-bc56t67s-pooler.c-16.us-east-1.aws.neon.tech",
      },
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    },
  }),
});

