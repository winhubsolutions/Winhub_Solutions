import type { Block } from "payload";

export const HeroBlock: Block = {
  slug: "heroBlock",
  labels: {
    singular: "Hero Section",
    plural: "Hero Sections",
  },
  fields: [
    {
      name: "badgeText",
      type: "text",
      label: "Top Badge Text",
      defaultValue: "YOUR TECHNOLOGY PARTNER",
    },
    {
      name: "headline",
      type: "text",
      required: true,
      label: "Main Headline",
      defaultValue: "WE BUILD THE WEB. YOU BUILD THE FUTURE.",
    },
    {
      name: "subheadline",
      type: "textarea",
      label: "Subheadline / Overview",
      defaultValue:
        "Building Digital Solutions That Move Businesses Forward. Full-stack web engineering, custom enterprise platforms, autonomous AI agents, and scholarly OJS publishing.",
    },
    {
      name: "primaryCtaText",
      type: "text",
      label: "Primary CTA Button Text",
      defaultValue: "Start Your Project",
    },
    {
      name: "primaryCtaUrl",
      type: "text",
      label: "Primary CTA URL",
      defaultValue: "/contact",
    },
    {
      name: "secondaryCtaText",
      type: "text",
      label: "Secondary CTA Button Text",
      defaultValue: "Explore 18 Disciplines",
    },
    {
      name: "secondaryCtaUrl",
      type: "text",
      label: "Secondary CTA URL",
      defaultValue: "/services",
    },
    {
      name: "styleVariant",
      type: "select",
      label: "Visual Background Style",
      defaultValue: "3d-canvas",
      options: [
        { label: "Interactive 3D Canvas Scene", value: "3d-canvas" },
        { label: "Dark Cyber Grid & Glow", value: "cyber-grid" },
        { label: "Minimalist High-Contrast Tech", value: "minimal-dark" },
      ],
    },
    {
      name: "metrics",
      type: "array",
      label: "Hero Bottom Metrics",
      fields: [
        { name: "value", type: "text", required: true, label: "Stat Value (e.g. 99.9%, 150+)" },
        { name: "label", type: "text", required: true, label: "Stat Label (e.g. Uptime, Projects Shipped)" },
      ],
    },
  ],
};

