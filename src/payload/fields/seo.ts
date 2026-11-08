// Reusable SEO Metadata Field Group for Payload CMS
export const seoFields = {
  name: "seo",
  type: "group" as const,
  label: "Search Engine Optimization (SEO)",
  fields: [
    {
      name: "metaTitle",
      type: "text" as const,
      label: "Meta Title",
      admin: {
        description: "Optimal length: 50-60 characters",
      },
    },
    {
      name: "metaDescription",
      type: "textarea" as const,
      label: "Meta Description",
      admin: {
        description: "Optimal length: 150-160 characters",
      },
    },
    {
      name: "keywords",
      type: "text" as const,
      label: "Keywords (comma separated)",
    },
    {
      name: "ogImage",
      type: "upload" as const,
      relationTo: "media",
      label: "Open Graph Image",
    },
    {
      name: "canonicalUrl",
      type: "text" as const,
      label: "Canonical URL",
    },
  ],
};

