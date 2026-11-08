import type { Block } from "payload";

export const ServicesGridBlock: Block = {
  slug: "servicesGridBlock",
  labels: {
    singular: "Services Grid / Carousel",
    plural: "Services Grid / Carousel Blocks",
  },
  fields: [
    {
      name: "badge",
      type: "text",
      label: "Section Badge",
      defaultValue: "CORE EXPERTISE",
    },
    {
      name: "headline",
      type: "text",
      required: true,
      label: "Section Headline",
      defaultValue: "18 Specialized Engineering Disciplines",
    },
    {
      name: "subtext",
      type: "textarea",
      label: "Section Subtitle",
      defaultValue: "From sub-second Next.js interfaces to complex asynchronous Node.js backends and scholarly publishing infrastructure.",
    },
    {
      name: "layoutMode",
      type: "select",
      label: "Layout Presentation",
      defaultValue: "carousel",
      options: [
        { label: "Horizontal Snap Carousel", value: "carousel" },
        { label: "3-Column Responsive Grid", value: "grid-3" },
        { label: "Bento Feature Grid", value: "bento" },
      ],
    },
    {
      name: "categoryFilter",
      type: "select",
      label: "Filter by Service Category",
      defaultValue: "all",
      options: [
        { label: "All Categories", value: "all" },
        { label: "Web Development", value: "web-development" },
        { label: "Custom Software", value: "custom-software" },
        { label: "AI & Automation", value: "ai-automation" },
        { label: "Scholarly Publishing (OJS)", value: "scholarly-publishing" },
        { label: "Design & UX", value: "design-ux" },
      ],
    },
    {
      name: "displayLimit",
      type: "number",
      label: "Maximum Items to Show (0 for all)",
      defaultValue: 18,
    },
  ],
};

