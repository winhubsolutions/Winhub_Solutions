import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import ServiceHeroVisual from "@/components/services/ServiceHeroVisual";
import { SERVICES_CATALOG, ServiceDetail } from "@/data/servicesCatalog";
import {
  Terminal,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Code2,
  ShieldCheck,
  Award,
  Layers,
  ChevronRight,
} from "lucide-react";

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
  const service = SERVICES_CATALOG.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://winhubsolutions.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://winhubsolutions.com/services/${service.slug}`,
      siteName: "Winhub Solutions",
      type: "website",
    },
  };
}

async function getDynamicService(slug: string) {
  try {
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "https://winhubsolutions.com";
    const res = await fetch(`${serverUrl}/api/services?where[slug][equals]=${slug}&limit=1`, {
      next: { revalidate: 10 },
    });
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

  // Merge dynamic CMS document with fallback catalog definition
  const service: ServiceDetail = {
    ...staticService,
    ...(cmsService || {}),
    title: cmsService?.title || staticService?.title || "",
    h1: cmsService?.h1 || staticService?.h1 || staticService?.title || "",
    slug: staticService?.slug || cmsService?.slug || slug,
    shortTag: cmsService?.shortTag || staticService?.shortTag || "",
    intro: cmsService?.intro || staticService?.intro || "",
    overview: cmsService?.overview || staticService?.overview || "",
    expertise: (cmsService?.expertise && cmsService.expertise.length > 0) ? cmsService.expertise : staticService?.expertise || [],
    technologies: (cmsService?.technologies && cmsService.technologies.length > 0) ? cmsService.technologies : staticService?.technologies || [],
    process: (cmsService?.process && cmsService.process.length > 0) ? cmsService.process : staticService?.process || [],
    whyChooseUs: (cmsService?.whyChooseUs && cmsService.whyChooseUs.length > 0) ? cmsService.whyChooseUs : staticService?.whyChooseUs || [],
    relatedServices: staticService?.relatedServices || [],
    faqs: (cmsService?.faqs && cmsService.faqs.length > 0) ? cmsService.faqs : staticService?.faqs || [],
    metaTitle: cmsService?.seo?.metaTitle || cmsService?.metaTitle || staticService?.metaTitle || "",
    metaDescription: cmsService?.seo?.metaDescription || cmsService?.metaDescription || staticService?.metaDescription || "",
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
    <div className="min-h-screen flex flex-col bg-[#F6F6F4] dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-white transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#EFEFEA] dark:bg-[#0D0D10] border-b border-[#E2E2DC] dark:border-[#222228] py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-2 text-xs font-mono text-[#6E6E6A] dark:text-[#8E8E89]">
            <Link href="/" className="hover:text-[#FF7120] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-[#FF7120] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#0A0A0A] dark:text-white font-bold truncate">
              {service.title}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-16 pb-20 border-b border-[#E2E2DC] dark:border-[#222228] bg-white dark:bg-[#0D0D10] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7120]/10 text-[#FF7120] border border-[#FF7120]/20 text-xs font-mono mb-6">
                  <Terminal className="w-3.5 h-3.5" />
                  <span className="uppercase">{service.shortTag} // WINHUB EXPERTISE</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight leading-[1.05] mb-6">
                  {service.h1}
                </h1>

                <p className="text-base sm:text-xl text-[#555552] dark:text-[#A0A09B] leading-relaxed mb-8">
                  {service.intro}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF7120] hover:bg-[#E85F0F] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Get a Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#overview"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#F6F6F4] dark:bg-[#18181D] border border-[#E2E2DC] dark:border-[#282830] text-[#0A0A0A] dark:text-white text-xs font-mono font-semibold uppercase hover:bg-[#EAEAE4] transition-colors"
                  >
                    <span>Explore Capabilities</span>
                  </a>
                </div>
              </div>

              {/* Bespoke Architecture Graphic & Telemetry Card */}
              <div className="lg:col-span-5">
                <ServiceHeroVisual
                  slug={service.slug}
                  title={service.title}
                  categoryTag={service.shortTag}
                  technologies={service.technologies}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview & Expertise */}
        <section id="overview" className="py-20 border-b border-[#E2E2DC] dark:border-[#222228]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="text-xs font-mono text-[#FF7120] uppercase tracking-widest">
                  // SERVICE OVERVIEW
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight">
                  Comprehensive {service.title} Solutions.
                </h2>
                <p className="text-base sm:text-lg text-[#555552] dark:text-[#A0A09B] leading-relaxed">
                  {service.overview}
                </p>

                {/* Technologies Badges */}
                <div className="pt-4">
                  <span className="text-xs font-mono text-[#8E8E89] uppercase block mb-3 font-bold">
                    Primary Technologies & Frameworks:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-1.5 rounded-full bg-white dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#282830] text-xs font-mono font-bold text-[#0A0A0A] dark:text-white shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expertise List */}
              <div className="lg:col-span-5 bg-white dark:bg-[#121215] p-8 rounded-3xl border border-[#E2E2DC] dark:border-[#222228] shadow-sm">
                <span className="text-xs font-mono text-[#FF7120] uppercase font-bold block mb-4">
                  OUR CORE EXPERTISE
                </span>
                <div className="space-y-3">
                  {service.expertise.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-[#333330] dark:text-[#C5C5C0]">
                      <CheckCircle2 className="w-4 h-4 text-[#FF7120] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Capabilities */}
        <section className="py-20 bg-white dark:bg-[#0D0D10] border-b border-[#E2E2DC] dark:border-[#222228]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-mono text-[#FF7120] uppercase tracking-widest block mb-2">
                // ARCHITECTURAL CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight">
                Features & Technical Specifications.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feat) => (
                <div
                  key={feat.title}
                  className="p-7 rounded-3xl bg-[#F6F6F4] dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#222228] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1C1C22] flex items-center justify-center text-[#FF7120] mb-4">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E6E6A] dark:text-[#A0A09B] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits to Your Business */}
        <section className="py-20 border-b border-[#E2E2DC] dark:border-[#222228]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-mono text-[#FF7120] uppercase tracking-widest block mb-2">
                // MEASURABLE IMPACT
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight">
                Business Benefits.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.benefits.map((b) => (
                <div
                  key={b.title}
                  className="p-7 rounded-3xl bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#F6F6F4] dark:bg-[#18181D] flex items-center justify-center text-[#FF7120] mb-4">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mb-2">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E6E6A] dark:text-[#A0A09B] leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5-Step Development Process */}
        <section className="py-20 bg-white dark:bg-[#0D0D10] border-b border-[#E2E2DC] dark:border-[#222228]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-mono text-[#FF7120] uppercase tracking-widest block mb-2">
                // SYSTEMATIC METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight">
                Our Development Lifecycle.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {service.process.map((p) => (
                <div
                  key={p.step}
                  className="p-6 rounded-2xl bg-[#F6F6F4] dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#222228] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-mono font-black text-[#FF7120] block mb-3">
                      {p.step}
                    </span>
                    <h3 className="text-base font-bold text-[#0A0A0A] dark:text-white mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#6E6E6A] dark:text-[#A0A09B] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Winhub Solutions */}
        <section className="py-20 border-b border-[#E2E2DC] dark:border-[#222228]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-mono text-[#FF7120] uppercase tracking-widest block mb-2">
                // THE WINHUB ADVANTAGE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight">
                Why Choose Winhub Solutions?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.whyChooseUs.map((w) => (
                <div
                  key={w.title}
                  className="p-6 rounded-2xl bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228]"
                >
                  <ShieldCheck className="w-6 h-6 text-[#FF7120] mb-3" />
                  <h3 className="text-base font-bold text-[#0A0A0A] dark:text-white mb-2">
                    {w.title}
                  </h3>
                  <p className="text-xs text-[#6E6E6A] dark:text-[#A0A09B] leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        {service.relatedServices.length > 0 && (
          <section className="py-16 bg-[#EFEFEA] dark:bg-[#0D0D10] border-b border-[#E2E2DC] dark:border-[#222228]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <span className="text-xs font-mono text-[#8E8E89] uppercase tracking-widest block mb-4 font-bold">
                EXPLORE RELATED SERVICES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.relatedServices.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/services/${r.slug}`}
                    className="p-6 rounded-2xl bg-white dark:bg-[#141418] border border-[#E2E2DC] dark:border-[#282830] hover:border-[#FF7120] transition-colors flex items-center justify-between group"
                  >
                    <span className="text-sm font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#FF7120] transition-colors">
                      {r.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#FF7120] group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className="py-20 border-b border-[#E2E2DC] dark:border-[#222228]">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7120] uppercase tracking-widest mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight">
                Questions About {service.title}?
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-6 rounded-2xl bg-white dark:bg-[#121215] border border-[#E2E2DC] dark:border-[#222228]"
                >
                  <h3 className="text-base font-bold text-[#0A0A0A] dark:text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555552] dark:text-[#A0A09B] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Contact CTA */}
        <section className="py-20 bg-white dark:bg-[#0D0D10]">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tight">
              Ready to Initiate Your {service.title} Project?
            </h2>
            <p className="text-base text-[#6E6E6A] dark:text-[#A0A09B] max-w-2xl mx-auto leading-relaxed">
              Connect directly with our engineering team for a free technical consultation 
              and transparent milestone estimate.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF7120] hover:bg-[#E85F0F] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-lg shadow-[#FF7120]/25"
              >
                <span>Initiate Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

