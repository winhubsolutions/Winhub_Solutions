import type { Block } from "payload";

export const CTABannerBlock: Block = {
  slug: "ctaBannerBlock",
  labels: {
    singular: "Call to Action Banner",
    plural: "Call to Action Banners",
  },
  fields: [
    {
      name: "badge",
      type: "text",
      label: "Top Mini Badge",
      defaultValue: "READY TO BUILD?",
    },
    {
      name: "headline",
      type: "text",
      required: true,
      label: "Banner Headline",
      defaultValue: "Let's Architect Your Next Digital Platform",
    },
    {
      name: "subtext",
      type: "textarea",
      label: "Subtext / Description",
      defaultValue: "Get in touch with our technical leads in Warangal, Telangana. Schedule a free technical discovery call today.",
    },
    {
      name: "buttonText",
      type: "text",
      label: "Primary Button Text",
      defaultValue: "Schedule Architecture Call",
    },
    {
      name: "buttonUrl",
      type: "text",
      label: "Primary Button URL",
      defaultValue: "/contact",
    },
    {
      name: "showContactSnippet",
      type: "checkbox",
      label: "Show Direct Phone & Email Badges",
      defaultValue: true,
    },
  ],
};

