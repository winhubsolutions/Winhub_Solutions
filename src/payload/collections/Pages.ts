import { slugField } from "../fields/slug";
import { seoFields } from "../fields/seo";
import { autoSeoBeforeChangeHook } from "../hooks/autoSeoHook";
import {
  HeroBlock,
  ServicesGridBlock,
  TechStackBlock,
  ProjectsShowcaseBlock,
  FeatureCardsBlock,
  ProcessWorkflowBlock,
  StatisticsBlock,
  TestimonialsBlock,
  FAQBlock,
  CTABannerBlock,
  TerminalBlock,
  RichTextBlock,
} from "../blocks";

// Pages Collection for Winhub Solutions with Full Custom Dynamic Blocks
export const Pages = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    group: "Structure",
    livePreview: {
      url: ({ data }: any) => {
        const slug = data?.slug === "home" ? "" : (data?.slug || "");
        return `http://localhost:3000/${slug}`;
      },
      breakpoints: [
        { label: "Mobile", name: "mobile", width: 375, height: 667 },
        { label: "Tablet", name: "tablet", width: 768, height: 1024 },
        { label: "Desktop", name: "desktop", width: 1440, height: 900 },
      ],
    },
  },
  hooks: {
    beforeChange: [autoSeoBeforeChangeHook],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Page Title",
    },
    slugField("title"),
    {
      name: "heroHeadline",
      type: "text",
      label: "Page Hero Headline (Fallback)",
    },
    {
      name: "heroSubtitle",
      type: "textarea",
      label: "Page Hero Subtitle (Fallback)",
    },
    {
      name: "pageContent",
      type: "richText",
      label: "Rich Text Body (Lexical Rich Text)",
    },
    {
      name: "blocks",
      type: "blocks",
      label: "Dynamic Modular Page Sections",
      labels: {
        singular: "Section Block",
        plural: "Section Blocks",
      },
      blocks: [
        HeroBlock,
        ServicesGridBlock,
        TechStackBlock,
        ProjectsShowcaseBlock,
        FeatureCardsBlock,
        ProcessWorkflowBlock,
        StatisticsBlock,
        TestimonialsBlock,
        FAQBlock,
        CTABannerBlock,
        TerminalBlock,
        RichTextBlock,
      ],
    },
    seoFields,
  ],
};
