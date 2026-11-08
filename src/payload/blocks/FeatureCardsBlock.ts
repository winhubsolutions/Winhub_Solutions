import type { Block } from "payload";

export const FeatureCardsBlock: Block = {
  slug: "featureCardsBlock",
  labels: {
    singular: "Feature Cards Grid",
    plural: "Feature Cards Grid Blocks",
  },
  fields: [
    {
      name: "badge",
      type: "text",
      label: "Section Badge",
      defaultValue: "WHY WINHUB SOLUTIONS",
    },
    {
      name: "headline",
      type: "text",
      required: true,
      label: "Section Headline",
      defaultValue: "Engineering Excellence Over Off-the-Shelf Compromise",
    },
    {
      name: "subtext",
      type: "textarea",
      label: "Section Subtitle",
      defaultValue: "How we approach custom software design, database security, and system longevity.",
    },
    {
      name: "cards",
      type: "array",
      label: "Feature Cards",
      fields: [
        { name: "title", type: "text", required: true, label: "Card Title" },
        { name: "description", type: "textarea", required: true, label: "Card Description" },
        { name: "badge", type: "text", label: "Optional Mini Tag" },
        { name: "iconName", type: "text", label: "Lucide Icon Name (e.g. Shield, Zap, Cpu, Code2, Database)" },
      ],
    },
  ],
};

