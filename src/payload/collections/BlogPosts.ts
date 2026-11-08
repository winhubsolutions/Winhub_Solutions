import { slugField } from "../fields/slug";
import { seoFields } from "../fields/seo";
import { autoSeoBeforeChangeHook } from "../hooks/autoSeoHook";

// Blog & Insights Collection for Winhub Solutions
export const BlogPosts = {
  slug: "blog-posts",
  labels: {
    singular: "Insight / Blog Post",
    plural: "Blog & Insights",
  },
  hooks: {
    beforeChange: [autoSeoBeforeChangeHook],
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "readTime", "publishedAt"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Article Title",
    },
    slugField("title"),
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "AI & Machine Learning", value: "AI & Machine Learning" },
        { label: "Web Architecture", value: "Web Architecture" },
        { label: "Front-End Engineering", value: "Front-End Engineering" },
        { label: "Scholarly Publishing", value: "Scholarly Publishing" },
        { label: "Cloud & Security", value: "Cloud & Security" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "readTime",
      type: "text",
      defaultValue: "5 min read",
      label: "Estimated Read Time",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      label: "Publication Date",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "author",
      type: "text",
      defaultValue: "Winhub Engineering Team",
      label: "Author",
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      label: "Article Excerpt / Teaser",
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      label: "Featured Header Image",
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Full Article Content (Lexical Rich Text)",
    },
    {
      name: "tags",
      type: "array",
      label: "Topic Tags",
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
        },
      ],
    },
    seoFields,
  ],
};

