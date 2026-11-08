// FAQs Collection for Winhub Solutions
export const FAQs = {
  slug: "faqs",
  labels: {
    singular: "FAQ",
    plural: "FAQs",
  },
  admin: {
    useAsTitle: "question",
    defaultColumns: ["question", "category", "order"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "question",
      type: "text",
      required: true,
      label: "Question",
    },
    {
      name: "answer",
      type: "textarea",
      required: true,
      label: "Answer",
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "General & Working with Us", value: "general" },
        { label: "Open Journal Systems (OJS)", value: "ojs" },
        { label: "Angular Development", value: "angular" },
        { label: "React & Next.js", value: "react" },
        { label: "AI Agent Development", value: "ai" },
        { label: "Support & Maintenance", value: "support" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "order",
      type: "number",
      label: "Sort Order",
      defaultValue: 0,
      admin: {
        position: "sidebar",
      },
    },
  ],
};

