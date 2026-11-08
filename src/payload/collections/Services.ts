import { slugField } from "../fields/slug";
import { seoFields } from "../fields/seo";
import { autoSeoBeforeChangeHook } from "../hooks/autoSeoHook";

// Services Collection for Winhub Solutions
export const Services = {
  slug: "services",
  labels: {
    singular: "Service",
    plural: "Services (18 Disciplines)",
  },
  hooks: {
    beforeChange: [autoSeoBeforeChangeHook],
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "featured", "updatedAt"],
    group: "Content",
    livePreview: {
      url: ({ data }: any) => `${process.env.NEXT_PUBLIC_SERVER_URL || ""}/services/${data?.slug || ""}`,
      breakpoints: [
        { label: "Mobile (iPhone)", name: "mobile", width: 375, height: 667 },
        { label: "Tablet (iPad)", name: "tablet", width: 768, height: 1024 },
        { label: "Desktop (1440p)", name: "desktop", width: 1440, height: 900 },
      ],
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Service Title",
      admin: {
        description: "e.g. Website Design & Development, React.js Development, AI Agent Development",
      },
    },
    slugField("title"),
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Web Development", value: "web-development" },
        { label: "Custom Software", value: "custom-software" },
        { label: "Mobile Development", value: "mobile-development" },
        { label: "AI & Automation", value: "ai-automation" },
        { label: "Scholarly Publishing (OJS)", value: "scholarly-publishing" },
        { label: "Design & UX", value: "design-ux" },
        { label: "Marketing & SEO", value: "marketing-seo" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Featured on Homepage",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "shortDescription",
      type: "textarea",
      required: true,
      label: "Short Excerpt / Teaser",
      admin: {
        description: "Displayed in service grids and card previews (120-180 characters).",
      },
    },
    {
      name: "h1Heading",
      type: "text",
      required: true,
      label: "Hero H1 Headline",
    },
    {
      name: "content",
      type: "richText",
      label: "Comprehensive Service Description (Lexical Rich Text)",
      admin: {
        description: "Full in-depth service overview, architecture breakdown, and methodologies.",
      },
    },
    {
      name: "expertiseList",
      type: "array",
      label: "Key Expertise & Capabilities",
      fields: [
        {
          name: "item",
          type: "text",
          required: true,
          label: "Capability",
        },
      ],
    },
    {
      name: "features",
      type: "array",
      label: "Core Architecture Features",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Feature Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Feature Description",
        },
      ],
    },
    {
      name: "benefits",
      type: "array",
      label: "Business Benefits / Why Winhub Solutions?",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Benefit Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Benefit Description",
        },
      ],
    },
    {
      name: "processSteps",
      type: "array",
      label: "Development Lifecycle Process",
      fields: [
        {
          name: "step",
          type: "text",
          label: "Step Number (e.g., 01)",
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Phase Title",
        },
        {
          name: "desc",
          type: "textarea",
          required: true,
          label: "Phase Description",
        },
      ],
    },
    {
      name: "technologies",
      type: "array",
      label: "Technology Stack Tags",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "Technology Name (e.g. Next.js, Node.js, Python)",
        },
      ],
    },
    {
      name: "faqs",
      type: "array",
      label: "Service-Specific FAQs",
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
      ],
    },
    seoFields,
  ],
};

