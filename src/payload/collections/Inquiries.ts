// Inquiries / Contact Submissions Collection for Payload CMS
export const Inquiries = {
  slug: "inquiries",
  labels: {
    singular: "Inbound Lead",
    plural: "Inbound Leads",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "service", "budget", "createdAt"],
    group: "Communications",
    description: "Inbound client inquiries and project briefs recorded from the contact form.",
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Client Name",
    },
    {
      name: "email",
      type: "email",
      required: true,
      label: "Email Address",
    },
    {
      name: "phone",
      type: "text",
      label: "Phone / WhatsApp",
    },
    {
      name: "company",
      type: "text",
      label: "Organization / Company",
    },
    {
      name: "service",
      type: "text",
      label: "Requested Service",
    },
    {
      name: "budget",
      type: "text",
      label: "Project Budget",
    },
    {
      name: "timeline",
      type: "text",
      label: "Target Timeline",
    },
    {
      name: "message",
      type: "textarea",
      label: "Project Scope & Details",
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "New Lead", value: "new" },
        { label: "Under Review", value: "review" },
        { label: "Consultation Scheduled", value: "scheduled" },
        { label: "Proposal Sent", value: "proposal" },
        { label: "Closed / Won", value: "won" },
      ],
      defaultValue: "new",
      admin: {
        position: "sidebar",
      },
    },
  ],
};

