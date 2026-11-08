import type { Block } from "payload";

export const ProjectsShowcaseBlock: Block = {
  slug: "projectsShowcaseBlock",
  labels: {
    singular: "Projects Showcase",
    plural: "Projects Showcase Blocks",
  },
  fields: [
    {
      name: "badge",
      type: "text",
      label: "Section Badge",
      defaultValue: "SELECTED WORK",
    },
    {
      name: "headline",
      type: "text",
      required: true,
      label: "Section Headline",
      defaultValue: "Real Platforms. Measurable Impact.",
    },
    {
      name: "subtext",
      type: "textarea",
      label: "Section Subtitle",
      defaultValue: "A selection of recent enterprise portals, scholarly journals, and AI automation engines delivered by Winhub Solutions.",
    },
    {
      name: "featuredOnly",
      type: "checkbox",
      label: "Display Featured Projects Only",
      defaultValue: true,
    },
    {
      name: "showViewAllButton",
      type: "checkbox",
      label: "Show 'View All Projects' Link",
      defaultValue: true,
    },
  ],
};

