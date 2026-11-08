import type { Block } from "payload";

export const TechStackBlock: Block = {
  slug: "techStackBlock",
  labels: {
    singular: "Technology Stack Showcase",
    plural: "Technology Stack Showcase Blocks",
  },
  fields: [
    {
      name: "badge",
      type: "text",
      label: "Section Badge",
      defaultValue: "FULL-STACK CAPABILITIES",
    },
    {
      name: "headline",
      type: "text",
      required: true,
      label: "Section Headline",
      defaultValue: "Modern Technologies & Hardened Stacks",
    },
    {
      name: "subtext",
      type: "textarea",
      label: "Section Subtitle",
      defaultValue: "We engineer on proven, high-performance foundations. Zero bloat, strict typing, and resilient databases.",
    },
    {
      name: "activeCategory",
      type: "select",
      label: "Default Active Category",
      defaultValue: "all",
      options: [
        { label: "All Categories", value: "all" },
        { label: "Frontend", value: "frontend" },
        { label: "Backend", value: "backend" },
        { label: "Database", value: "database" },
        { label: "CMS & Platforms", value: "cms" },
        { label: "Cloud & DevOps", value: "cloud" },
        { label: "AI & Automation", value: "ai" },
      ],
    },
    {
      name: "enableInteractiveTabs",
      type: "checkbox",
      label: "Enable Interactive Filter Tabs",
      defaultValue: true,
    },
  ],
};

