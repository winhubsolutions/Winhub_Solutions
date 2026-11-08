/**
 * Technical SEO & Structured Data Generator - Winhub Solutions
 * Generates verified schema.org JSON-LD structured data and meta configurations.
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "https://winhubsolutions.com";

export interface OrganizationSchemaData {
  name?: string;
  url?: string;
  logo?: string;
  email?: string;
  phone?: string;
  addressWarangal?: {
    street?: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  addressHyderabad?: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
}

export function generateOrganizationSchema(customData?: OrganizationSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: customData?.name || "Winhub Solutions",
    alternateName: ["Winhub Solutions India", "Winhub IT"],
    url: customData?.url || SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo-icon.png`,
      width: "512",
      height: "512",
      caption: "Winhub Solutions Official Logo",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: customData?.phone || "+917386566445",
        contactType: "customer service",
        areaServed: ["IN", "US", "AE", "GB", "CA", "AU"],
        availableLanguage: ["English", "Telugu", "Hindi"],
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        name: "Registered Headquarters (Warangal)",
        addressLocality: "Hanamkonda, Warangal",
        addressRegion: "Telangana",
        postalCode: "506001",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        name: "Hyderabad Corporate Office",
        streetAddress: "Raidurgam, Knowledge City Rd, Panmaktha, Serilingampalle (M)",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500032",
        addressCountry: "IN",
      },
    ],
    sameAs: [
      "https://github.com/winhubsolutions",
      "https://linkedin.com/company/winhubsolutions",
      "https://x.com/winhubsolutions",
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Winhub Solutions",
    image: `${SITE_URL}/logo-dark-mode.png`,
    telephone: "+917386566445",
    email: "contact@winhubsolutions.com",
    url: SITE_URL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Raidurgam, Knowledge City Rd, Panmaktha",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500032",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.4399",
      longitude: "78.3807",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };
}

export interface ServiceSchemaData {
  name: string;
  description: string;
  slug: string;
  category?: string;
  providerName?: string;
  imageUrl?: string;
}

export function generateServiceSchema(service: ServiceSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.name,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    category: service.category || "IT & Software Engineering Services",
    serviceType: service.name,
    provider: {
      "@type": "Organization",
      name: service.providerName || "Winhub Solutions",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Global",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Deliverables`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${service.name} Consultation & Strategy`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${service.name} Custom Engineering & Launch`,
          },
        },
      ],
    },
  };
}

export interface ArticleSchemaData {
  title: string;
  description: string;
  slug: string;
  publishedAt?: string;
  modifiedAt?: string;
  authorName?: string;
  imageUrl?: string;
}

export function generateArticleSchema(article: ArticleSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${article.slug}#article`,
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}/blog/${article.slug}`,
    datePublished: article.publishedAt || "2026-01-01T00:00:00Z",
    dateModified: article.modifiedAt || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: article.authorName || "Winhub Solutions Engineering Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Winhub Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-icon.png`,
      },
    },
    image: article.imageUrl ? (article.imageUrl.startsWith("http") ? article.imageUrl : `${SITE_URL}${article.imageUrl}`) : `${SITE_URL}/images/hero-tech-bg.jpg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${article.slug}`,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

