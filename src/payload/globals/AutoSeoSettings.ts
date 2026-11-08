// AI AutoSEO Global Settings for Payload CMS
export const AutoSeoSettings = {
  slug: "auto-seo",
  label: "AI AutoSEO Command Center",
  admin: {
    group: "SEO & Intelligence",
    description: "Autonomous SEO monitoring, indexing telemetry, and ranking optimization engine.",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "healthScore",
      type: "number" as const,
      defaultValue: 88,
      label: "Overall Site SEO Health Score (0 - 100)",
      admin: {
        readOnly: true,
        description: "Calculated dynamically across all 18 services and core landing pages.",
      },
    },
    {
      name: "healthGrade",
      type: "text" as const,
      defaultValue: "Grade A",
      label: "SEO Health Grade",
      admin: {
        readOnly: true,
      },
    },
    {
      name: "telemetry",
      type: "group" as const,
      label: "Google Services Integration",
      fields: [
        {
          name: "searchConsoleConnected",
          type: "checkbox" as const,
          defaultValue: true,
          label: "Google Search Console Connected (winhubsolutions.com)",
        },
        {
          name: "ga4PropertyId",
          type: "text" as const,
          defaultValue: "384910281",
          label: "GA4 Property ID",
        },
        {
          name: "pageSpeedMobileScore",
          type: "number" as const,
          defaultValue: 94,
          label: "Core Web Vitals Mobile Score (0 - 100)",
          admin: {
            readOnly: true,
          },
        },
      ],
    },
    {
      name: "automation",
      type: "group" as const,
      label: "Autonomous SEO Sweeps & Schedules",
      fields: [
        {
          name: "dailyLinkCheck",
          type: "checkbox" as const,
          defaultValue: true,
          label: "Daily Broken Link & Meta Tag Detection",
        },
        {
          name: "weeklyRankingAudit",
          type: "checkbox" as const,
          defaultValue: true,
          label: "Weekly Keyword Ranking & Opportunity Sweep",
        },
        {
          name: "monthlyGrowthReport",
          type: "checkbox" as const,
          defaultValue: true,
          label: "Monthly Organic Traffic & Expansion Blueprint",
        },
      ],
    },
    {
      name: "lastAuditTimestamp",
      type: "date" as const,
      label: "Last Site-Wide Crawl Timestamp",
      admin: {
        readOnly: true,
      },
    },
    {
      name: "optimizationNotes",
      type: "textarea" as const,
      defaultValue: "All 18 service disciplines fully structured with JSON-LD Schema.org entities, OpenGraph cards, and canonical tags.",
      label: "System Audit Summary",
    },
  ],
};

