// Global Site Settings for Winhub Solutions
export const SiteSettings = {
  slug: "site-settings",
  label: "Global Site Settings",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "companyName",
      type: "text",
      defaultValue: "Winhub Solutions",
      required: true,
      label: "Official Company Name",
    },
    {
      name: "tagline",
      type: "text",
      defaultValue: "WE BUILD THE WEB. YOU BUILD THE FUTURE.",
      label: "Company Tagline",
    },
    {
      name: "headquarters",
      type: "text",
      defaultValue: "Hanamkonda, Warangal & Knowledge City Hyderabad, Telangana, India",
      label: "Headquarters Summary",
    },
    {
      name: "registeredAddress",
      type: "textarea",
      defaultValue: "Hanamkonda, Warangal – 506001 & Raidurgam, Knowledge City Rd, Panmaktha, Hyderabad, Serilingampalle (M), Telangana 500032",
      label: "Full Registered Corporate Address",
    },
    {
      name: "contacts",
      type: "group",
      label: "Contact Information",
      fields: [
        {
          name: "email",
          type: "email",
          defaultValue: "contact@winhubsolutions.com",
          label: "Inquiry Email",
        },
        {
          name: "phone",
          type: "text",
          defaultValue: "+91 73865 66445",
          label: "Primary Phone Number",
        },
        {
          name: "whatsapp",
          type: "text",
          defaultValue: "+91 73865 66445",
          label: "WhatsApp Support Number",
        },
      ],
    },
    {
      name: "telemetryStatus",
      type: "text",
      defaultValue: "SYSTEMS OPERATIONAL // ACCEPTING Q4 BRIEFINGS",
      label: "Header Status Telemetry",
    },
    {
      name: "socialLinks",
      type: "group",
      label: "Social Media Links",
      fields: [
        { name: "linkedin", type: "text", label: "LinkedIn URL" },
        { name: "twitter", type: "text", label: "Twitter / X URL" },
        { name: "github", type: "text", label: "GitHub URL" },
        { name: "instagram", type: "text", label: "Instagram URL" },
      ],
    },
  ],
};

