import { getPayload } from "payload";
import configPromise from "../src/payload.config";

function formatSeoTitle(rawTitle: string): string {
  const clean = rawTitle.trim();
  let title = `${clean} | Winhub Solutions`;
  if (title.length < 50) {
    title = `${clean} Services in India | Winhub Solutions`;
  }
  if (title.length > 60) {
    title = title.slice(0, 57) + "...";
  }
  return title;
}

function formatSeoDescription(rawDesc: string, fallbackTitle: string): string {
  let clean = (rawDesc || "").replace(/\s+/g, " ").trim();
  if (!clean || clean.length < 50) {
    clean = `Partner with Winhub Solutions for industry-leading ${fallbackTitle.toLowerCase()} services in India. Scalable architecture, high security, and dedicated engineering.`;
  }
  if (clean.length < 100) {
    clean = `${clean} Scalable software engineering and dedicated developers by Winhub Solutions.`;
  }
  if (clean.length > 155) {
    clean = clean.slice(0, 152) + "...";
  }
  return clean;
}

async function autoFillAllSeo() {
  console.log("Initializing Payload Local API for SEO auto-fill...");
  const payload = await getPayload({ config: configPromise });

  // 1. Update all Pages
  console.log("Fetching all pages...");
  const pages = await payload.find({ collection: "pages", limit: 100 });
  for (const page of pages.docs) {
    const rawTitle = page.title || "";
    const rawDesc = (page as any).heroSubtitle || (page as any).heroHeadline || "";
    const metaTitle = formatSeoTitle(rawTitle);
    const metaDescription = formatSeoDescription(rawDesc, rawTitle);

    console.log(`Updating SEO for Page: ${page.title} (slug: ${page.slug})`);
    console.log(`  Title (${metaTitle.length} chars): ${metaTitle}`);
    console.log(`  Desc (${metaDescription.length} chars): ${metaDescription}`);

    await payload.update({
      collection: "pages",
      id: page.id,
      data: {
        meta: {
          title: metaTitle,
          description: metaDescription,
        },
        seo: {
          ...(page as any).seo,
          metaTitle,
          metaDescription,
          focusKeyword: `${rawTitle.toLowerCase()} company in india`,
          canonicalUrl: `https://winhubsolutions.com/${page.slug === "home" ? "" : page.slug}`,
        },
      },
    });
  }

  // 2. Update all Services
  console.log("Fetching all services...");
  const services = await payload.find({ collection: "services", limit: 100 });
  for (const s of services.docs) {
    const rawTitle = s.title || "";
    const rawDesc = (s as any).shortDescription || (s as any).h1Heading || "";
    const metaTitle = formatSeoTitle(rawTitle);
    const metaDescription = formatSeoDescription(rawDesc, rawTitle);

    console.log(`Updating SEO for Service: ${s.title} (slug: ${s.slug})`);

    await payload.update({
      collection: "services",
      id: s.id,
      data: {
        meta: {
          title: metaTitle,
          description: metaDescription,
        },
        seo: {
          ...(s as any).seo,
          metaTitle,
          metaDescription,
          focusKeyword: `${rawTitle.toLowerCase()} services india`,
          canonicalUrl: `https://winhubsolutions.com/services/${s.slug}`,
        },
      },
    });
  }

  // 3. Update all Projects
  console.log("Fetching all projects...");
  const projects = await payload.find({ collection: "projects", limit: 100 });
  for (const proj of projects.docs) {
    const rawTitle = proj.title || "";
    const rawDesc = (proj as any).description || "";
    const metaTitle = formatSeoTitle(rawTitle);
    const metaDescription = formatSeoDescription(rawDesc, rawTitle);

    console.log(`Updating SEO for Project: ${proj.title}`);

    await payload.update({
      collection: "projects",
      id: proj.id,
      data: {
        meta: {
          title: metaTitle,
          description: metaDescription,
        },
        seo: {
          ...(proj as any).seo,
          metaTitle,
          metaDescription,
          canonicalUrl: `https://winhubsolutions.com/portfolio`,
        },
      },
    });
  }

  console.log("ALL SEO fields across pages, services, and projects have been populated successfully!");
  process.exit(0);
}

autoFillAllSeo().catch((err) => {
  console.error("Error auto-filling SEO:", err);
  process.exit(1);
});

