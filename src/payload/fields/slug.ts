// Reusable Slug Field Configuration for Payload CMS
export const slugField = (fieldToUse: string = "title") => ({
  name: "slug",
  type: "text" as const,
  label: "URL Slug",
  unique: true,
  index: true,
  admin: {
    position: "sidebar" as const,
    description: "URL-friendly identifier (e.g., website-design-development)",
  },
  hooks: {
    beforeValidate: [
      ({ value, data }: any) => {
        if (!value && data?.[fieldToUse]) {
          return data[fieldToUse]
            .toLowerCase()
            .replace(/[^\w ]+/g, "")
            .replace(/ +/g, "-");
        }
        return value;
      },
    ],
  },
});

