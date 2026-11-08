import type { Block } from "payload";

export const FAQBlock: Block = {
  slug: "faqBlock",
  labels: {
    singular: "FAQ Accordion Section",
    plural: "FAQ Accordion Sections",
  },
  fields: [
    {
      name: "badge",
      type: "text",
      label: "Section Badge",
      defaultValue: "FREQUENTLY ASKED QUESTIONS",
    },
    {
      name: "headline",
      type: "text",
      required: true,
      label: "Section Headline",
      defaultValue: "Clear Answers to Technical Questions",
    },
    {
      name: "subtext",
      type: "textarea",
      label: "Section Subtitle",
      defaultValue: "Everything you need to know about our stacks, OJS workflows, and engagement models.",
    },
    {
      name: "categoryFilter",
      type: "select",
      label: "Filter FAQs by Category",
      defaultValue: "all",
      options: [
        { label: "All Categories", value: "all" },
        { label: "General & Company", value: "general" },
        { label: "Open Journal Systems (OJS)", value: "ojs" },
        { label: "Angular & Front-End", value: "angular" },
        { label: "AI & Automation", value: "ai" },
        { label: "Support & Maintenance", value: "support" },
      ],
    },
  ],
};

