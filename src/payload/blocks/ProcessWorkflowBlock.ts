import type { Block } from "payload";

export const ProcessWorkflowBlock: Block = {
  slug: "processWorkflowBlock",
  labels: {
    singular: "Process & Workflow",
    plural: "Process & Workflow Blocks",
  },
  fields: [
    {
      name: "badge",
      type: "text",
      label: "Section Badge",
      defaultValue: "EXECUTION METHODOLOGY",
    },
    {
      name: "headline",
      type: "text",
      required: true,
      label: "Section Headline",
      defaultValue: "From Architecture Discovery to Zero-Downtime Deployment",
    },
    {
      name: "subtext",
      type: "textarea",
      label: "Section Subtitle",
      defaultValue: "Our battle-tested sprint lifecycle ensures predictability, continuous testing, and on-time delivery.",
    },
    {
      name: "steps",
      type: "array",
      label: "Workflow Steps",
      fields: [
        { name: "stepNumber", type: "text", required: true, label: "Step Number (e.g. 01, 02)" },
        { name: "title", type: "text", required: true, label: "Step Title" },
        { name: "description", type: "textarea", required: true, label: "Step Description" },
        { name: "deliverable", type: "text", label: "Key Deliverable / Outcome" },
      ],
    },
  ],
};

