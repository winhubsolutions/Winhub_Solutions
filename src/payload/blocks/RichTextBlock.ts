import type { Block } from "payload";

export const RichTextBlock: Block = {
  slug: "richTextBlock",
  labels: {
    singular: "Rich Text Section",
    plural: "Rich Text Sections",
  },
  fields: [
    {
      name: "sectionTag",
      type: "text",
      label: "Section Tag / Badge",
      defaultValue: "Overview",
    },
    {
      name: "title",
      type: "text",
      label: "Section Title (Optional)",
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Rich Text Content (Lexical Editor)",
    },
    {
      name: "maxWidth",
      type: "select",
      label: "Container Max Width",
      defaultValue: "4xl",
      options: [
        { label: "Medium (max-w-4xl)", value: "4xl" },
        { label: "Large (max-w-6xl)", value: "6xl" },
        { label: "Full (max-w-7xl)", value: "7xl" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "centered",
      type: "checkbox",
      label: "Center Header & Badges",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
  ],
};
