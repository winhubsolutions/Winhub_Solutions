import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LiveServiceView from "@/components/services/LiveServiceView";
import { SERVICES_CATALOG, ServiceDetail } from "@/data/servicesCatalog";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES_CATALOG.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const staticService = SERVICES_CATALOG.find((s) => s.slug === slug);
  const cmsService = await getDynamicService(slug);

  if (!staticService && !cmsService) return {};

  const title =
    cmsService?.seo?.metaTitle ||
    cmsService?.metaTitle ||
    cmsService?.title ||
    staticService?.metaTitle ||
    "Winhub Solutions";

  const description =
    cmsService?.seo?.metaDescription ||
    cmsService?.metaDescription ||
    cmsService?.shortDescription ||
    staticService?.metaDescription ||
    "";

  return {
    title,
    description,
    alternates: {
      canonical: `https://winhubsolutions.com/services/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://winhubsolutions.com/services/${slug}`,
      siteName: "Winhub Solutions",
      type: "website",
    },
  };
}

async function getDynamicService(slug: string) {
  try {
    const serverUrl =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
    const res = await fetch(
      `${serverUrl}/api/services?where[slug][equals]=${encodeURIComponent(slug)}&limit=1&depth=2`,
      { cache: "no-store" }
    );
    if (res.ok) {
      const data = await res.json();
      return data?.docs?.[0] || null;
    }
  } catch (e) {}
  return null;
}

export default async function SingleServicePage({ params }: Props) {
  const { slug } = await params;
  const staticService = SERVICES_CATALOG.find((s) => s.slug === slug);
  const cmsService = await getDynamicService(slug);

  if (!staticService && !cmsService) {
    notFound();
  }

  // Parse arrays from CMS document or fallback to static catalog
  const dynamicExpertise =
    Array.isArray(cmsService?.expertiseList) && cmsService.expertiseList.length > 0
      ? cmsService.expertiseList
          .map((e: any) => (typeof e === "string" ? e : e?.item))
          .filter(Boolean)
      : staticService?.expertise || [];

  const dynamicTechnologies =
    Array.isArray(cmsService?.technologies) && cmsService.technologies.length > 0
      ? cmsService.technologies
          .map((t: any) => (typeof t === "string" ? t : t?.name))
          .filter(Boolean)
      : staticService?.technologies || [];

  const dynamicFeatures =
    Array.isArray(cmsService?.features) && cmsService.features.length > 0
      ? cmsService.features.map((f: any) => ({
          title: f?.title || "",
          desc: f?.description || f?.desc || "",
        }))
      : staticService?.features || [];

  const dynamicWhyChooseUs =
    Array.isArray(cmsService?.benefits) && cmsService.benefits.length > 0
      ? cmsService.benefits.map((b: any) => ({
          title: b?.title || "",
          desc: b?.description || b?.desc || "",
        }))
      : staticService?.whyChooseUs || [];

  const dynamicProcess =
    Array.isArray(cmsService?.processSteps) && cmsService.processSteps.length > 0
      ? cmsService.processSteps.map((p: any, idx: number) => ({
          step: p?.step || String(idx + 1).padStart(2, "0"),
          title: p?.title || "",
          desc: p?.desc || p?.description || "",
        }))
      : staticService?.process || [];

  const dynamicFaqs =
    Array.isArray(cmsService?.faqs) && cmsService.faqs.length > 0
      ? cmsService.faqs.map((f: any) => ({
          q: f?.question || f?.q || "",
          a: f?.answer || f?.a || "",
        }))
      : staticService?.faqs || [];

  // Merge dynamic CMS document with fallback catalog definition
  const service: ServiceDetail = {
    ...staticService,
    title: cmsService?.title || staticService?.title || "",
    h1: cmsService?.h1Heading || cmsService?.h1 || staticService?.h1 || staticService?.title || "",
    slug: cmsService?.slug || staticService?.slug || slug,
    shortTag: cmsService?.category || cmsService?.shortTag || staticService?.shortTag || "ENGINEERING",
    intro: cmsService?.shortDescription || cmsService?.intro || staticService?.intro || "",
    overview: cmsService?.overview || staticService?.overview || "",
    expertise: dynamicExpertise,
    technologies: dynamicTechnologies,
    features: dynamicFeatures,
    whyChooseUs: dynamicWhyChooseUs,
    process: dynamicProcess,
    relatedServices: staticService?.relatedServices || [],
    faqs: dynamicFaqs,
    metaTitle:
      cmsService?.seo?.metaTitle ||
      cmsService?.metaTitle ||
      cmsService?.meta?.title ||
      staticService?.metaTitle ||
      "",
    metaDescription:
      cmsService?.seo?.metaDescription ||
      cmsService?.metaDescription ||
      cmsService?.meta?.description ||
      staticService?.metaDescription ||
      "",
  };

  // Structured Data Schema
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        serviceType: service.title,
        provider: {
          "@type": "Organization",
          name: "Winhub Solutions",
          url: "https://winhubsolutions.com",
        },
        description: service.intro,
        areaServed: "Worldwide",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://winhubsolutions.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://winhubsolutions.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://winhubsolutions.com/services/${service.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <LiveServiceView initialService={service} initialDoc={cmsService} />
    </>
  );
}
