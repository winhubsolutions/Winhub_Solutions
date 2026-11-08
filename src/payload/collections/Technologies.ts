// Technologies Collection for Winhub Solutions
export const Technologies = {
  slug: "technologies",
  labels: {
    singular: "Technology",
    plural: "Technologies",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "featured", "order"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Technology Name (e.g. React, Node.js, PostgreSQL)",
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Frontend", value: "frontend" },
        { label: "Backend", value: "backend" },
        { label: "Database", value: "database" },
        { label: "CMS & Platforms", value: "cms" },
        { label: "Cloud & DevOps", value: "cloud" },
        { label: "AI & Data", value: "ai" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "iconIdentifier",
      type: "text",
      label: "SVG Icon Identifier (e.g. react, nodejs, angular)",
      admin: {
        description: "Matches the TechIcons brand icon mapper.",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Technical Description & Use Case",
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Featured in Homepage Grid",
      defaultValue: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "order",
      type: "number",
      label: "Display Order",
      defaultValue: 0,
      admin: {
        position: "sidebar",
      },
    },
  ],
};

