import type { Block } from "payload";

export const TestimonialsBlock: Block = {
  slug: "testimonialsBlock",
  labels: {
    singular: "Client Testimonials Slider",
    plural: "Client Testimonials Blocks",
  },
  fields: [
    {
      name: "badge",
      type: "text",
      label: "Section Badge",
      defaultValue: "TRUST & PARTNERSHIPS",
    },
    {
      name: "headline",
      type: "text",
      required: true,
      label: "Section Headline",
      defaultValue: "Endorsed by Editors, CTOs & Enterprise Founders",
    },
    {
      name: "subtext",
      type: "textarea",
      label: "Section Subtitle",
      defaultValue: "Read what technical leaders and academic institutions say about partnering with Winhub Solutions.",
    },
    {
      name: "featuredOnly",
      type: "checkbox",
      label: "Display Featured Testimonials Only",
      defaultValue: true,
    },
  ],
};

