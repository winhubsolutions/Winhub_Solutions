import type { Block } from "payload";

export const StatisticsBlock: Block = {
  slug: "statisticsBlock",
  labels: {
    singular: "Statistics Counter Block",
    plural: "Statistics Counter Blocks",
  },
  fields: [
    {
      name: "headline",
      type: "text",
      label: "Section Title (Optional)",
    },
    {
      name: "statItems",
      type: "array",
      label: "Statistic Items",
      fields: [
        { name: "value", type: "number", required: true, label: "Numeric Value" },
        { name: "prefix", type: "text", label: "Prefix (e.g. $)" },
        { name: "suffix", type: "text", label: "Suffix (e.g. +, %, k)", defaultValue: "+" },
        { name: "label", type: "text", required: true, label: "Label" },
        { name: "description", type: "text", label: "Brief Context" },
      ],
    },
  ],
};

