import { slugField } from "../fields/slug";
import { seoFields } from "../fields/seo";
import { autoSeoBeforeChangeHook } from "../hooks/autoSeoHook";

// Projects / Portfolio Collection for Winhub Solutions
export const Projects = {
  slug: "projects",
  labels: {
    singular: "Portfolio Project",
    plural: "Portfolio Projects",
  },
  hooks: {
    beforeChange: [autoSeoBeforeChangeHook],
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "client", "category", "featured", "year"],
    group: "Content",
    livePreview: {
      url: () => {
        const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "";
        const route = `/portfolio`;
        return serverUrl ? `${serverUrl}${route}` : route;
      },
      breakpoints: [
        { label: "Mobile (iPhone)", name: "mobile", width: 375, height: 667 },
        { label: "Tablet (iPad)", name: "tablet", width: 768, height: 1024 },
        { label: "Desktop (1440p)", name: "desktop", width: 1440, height: 900 },
      ],
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Project Title",
    },
    slugField("title"),
    {
      name: "client",
      type: "text",
      required: true,
      label: "Client Name / Organization",
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Website Development", value: "Website Development" },
        { label: "Web Applications", value: "Web Applications" },
        { label: "Mobile Applications", value: "Mobile Applications" },
        { label: "CMS Development", value: "CMS Development" },
        { label: "AI & Automation", value: "AI & Automation" },
        { label: "E-Commerce", value: "E-Commerce" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Featured Project",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "year",
      type: "text",
      defaultValue: "2026",
      label: "Project Year",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "shortDescription",
      type: "textarea",
      required: true,
      label: "Overview / Short Summary",
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      label: "Featured Project Thumbnail",
    },
    {
      name: "metrics",
      type: "text",
      label: "Highlight Metric (e.g. +340% Conversions, 99.9% Uptime)",
    },
    {
      name: "challenge",
      type: "textarea",
      label: "Client Challenge",
    },
    {
      name: "solution",
      type: "textarea",
      label: "Winhub Engineering Solution",
    },
    {
      name: "results",
      type: "array",
      label: "Measurable Impact & Results",
      fields: [
        {
          name: "result",
          type: "text",
          required: true,
          label: "Result Point",
        },
      ],
    },
    {
      name: "technologies",
      type: "array",
      label: "Technologies Used",
      fields: [
        {
          name: "tech",
          type: "text",
          required: true,
          label: "Technology",
        },
      ],
    },
    {
      name: "liveUrl",
      type: "text",
      label: "Live Website URL",
    },
    {
      name: "githubUrl",
      type: "text",
      label: "Source Repository (if public)",
    },
    seoFields,
  ],
};

