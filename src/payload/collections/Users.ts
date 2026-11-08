// Users Collection (Auth & Roles) for Payload CMS
export const Users = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    group: "Administration",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Full Name",
    },
    {
      name: "role",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
        { label: "Author", value: "author" },
      ],
      defaultValue: "admin",
      required: true,
    },
  ],
};

