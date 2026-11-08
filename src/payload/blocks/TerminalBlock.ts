import type { Block } from "payload";

export const TerminalBlock: Block = {
  slug: "terminalBlock",
  labels: {
    singular: "Interactive CLI Terminal",
    plural: "Interactive CLI Terminal Blocks",
  },
  fields: [
    {
      name: "terminalTitle",
      type: "text",
      label: "Terminal Header Bar Title",
      defaultValue: "winhub-core-v2.4 ~ bash",
    },
    {
      name: "statusIndicator",
      type: "text",
      label: "Branch & Status",
      defaultValue: "git:(main) [ONLINE · NEON DB 18.6]",
    },
    {
      name: "lines",
      type: "array",
      label: "Terminal Lines",
      fields: [
        { name: "command", type: "text", required: true, label: "Executed Command (e.g. winhub-cli status)" },
        { name: "output", type: "textarea", required: true, label: "Command Output / JSON Response" },
        {
          name: "outputColor",
          type: "select",
          label: "Output Text Color",
          defaultValue: "green",
          options: [
            { label: "Emerald Green", value: "green" },
            { label: "Cyan Blue", value: "cyan" },
            { label: "Amber Orange", value: "amber" },
            { label: "Muted Gray", value: "gray" },
          ],
        },
      ],
    },
  ],
};

