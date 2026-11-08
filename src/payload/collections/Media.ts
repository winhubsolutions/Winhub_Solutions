// Media Collection for Payload CMS
export const Media = {
  slug: "media",
  labels: {
    singular: "Media Asset",
    plural: "Media Library",
  },
  access: {
    read: () => true,
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/svg+xml", "application/pdf"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 800,
        height: 600,
        position: "centre",
      },
      {
        name: "hero",
        width: 1920,
        height: 1080,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      label: "Alt Text",
      admin: {
        description: "Accessible text description for search engines and screen readers.",
      },
    },
    {
      name: "caption",
      type: "text",
      label: "Caption",
    },
  ],
};

