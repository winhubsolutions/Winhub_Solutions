// Testimonials Collection for Winhub Solutions
export const Testimonials = {
  slug: "testimonials",
  labels: {
    singular: "Client Testimonial",
    plural: "Client Testimonials",
  },
  admin: {
    useAsTitle: "author",
    defaultColumns: ["author", "company", "rating", "featured"],
    group: "Social Proof",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "author",
      type: "text",
      required: true,
      label: "Client / Executive Name",
    },
    {
      name: "position",
      type: "text",
      required: true,
      label: "Job Title (e.g. CTO, Head of Product)",
    },
    {
      name: "company",
      type: "text",
      required: true,
      label: "Company / Institution Name",
    },
    {
      name: "rating",
      type: "number",
      min: 1,
      max: 5,
      defaultValue: 5,
      label: "Rating (Stars 1-5)",
    },
    {
      name: "quote",
      type: "textarea",
      required: true,
      label: "Testimonial Statement",
    },
    {
      name: "projectDelivered",
      type: "text",
      label: "Project Delivered (e.g. Enterprise Next.js App, OJS Platform Migration)",
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
      label: "Client Headshot / Avatar",
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Display in Homepage Slider",
      defaultValue: true,
    },
  ],
};

