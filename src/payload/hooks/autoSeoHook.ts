import type { CollectionBeforeChangeHook } from "payload";
import { calculateSeoScore, generateAiSeoMetadata } from "@/lib/seo/aiSeoEngine";

const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "https://winhubsolutions.com";

export const autoSeoBeforeChangeHook: CollectionBeforeChangeHook = async ({
  data,
  operation,
  collection,
}) => {
  if (!data) return data;

  try {
    const title = data.title || data.name || "";
    const slug = data.slug || "";
    const contentText = typeof data.content === "string" ? data.content : data.shortDescription || data.excerpt || "";

    const existingSeo = data.seo || {};
    data.meta = data.meta || {};

    // 1. Auto-generate metadata if missing
    if (!existingSeo.metaTitle || !existingSeo.metaDescription || !data.meta.title || !data.meta.description) {
      const generated = await generateAiSeoMetadata({
        title,
        bodyText: contentText,
        category: collection?.slug,
        currentSlug: slug,
      });

      existingSeo.metaTitle = existingSeo.metaTitle || data.meta.title || generated.seoTitle;
      existingSeo.metaDescription = existingSeo.metaDescription || data.meta.description || generated.metaDescription;
      existingSeo.focusKeyword = existingSeo.focusKeyword || generated.focusKeyword;
      existingSeo.secondaryKeywords = existingSeo.secondaryKeywords || generated.secondaryKeywords.join(", ");
    }

    // Ensure meta fields used by @payloadcms/plugin-seo UI are filled
    if (!data.meta.title && existingSeo.metaTitle) {
      data.meta.title = existingSeo.metaTitle;
    }
    if (!data.meta.description && existingSeo.metaDescription) {
      data.meta.description = existingSeo.metaDescription;
    }
    if (data.meta.title && !existingSeo.metaTitle) {
      existingSeo.metaTitle = data.meta.title;
    }
    if (data.meta.description && !existingSeo.metaDescription) {
      existingSeo.metaDescription = data.meta.description;
    }

    // 2. Auto-set Canonical URL
    if (!existingSeo.canonicalUrl && slug) {
      const basePath = collection?.slug === "services" ? "/services" : collection?.slug === "blog-posts" ? "/blog" : "";
      existingSeo.canonicalUrl = `${SITE_URL}${basePath}/${slug}`;
    }

    // 3. Compute 0 - 100 SEO Score & Recommendations
    const scoreResult = calculateSeoScore({
      title: existingSeo.metaTitle,
      metaDescription: existingSeo.metaDescription,
      slug,
      content: contentText,
      focusKeyword: existingSeo.focusKeyword,
      canonicalUrl: existingSeo.canonicalUrl,
      hasStructuredData: !!existingSeo.structuredData,
    });

    existingSeo.seoScore = scoreResult.score;
    existingSeo.seoRecommendations = scoreResult.recommendations
      .map((r, i) => `${i + 1}. [${r.severity.toUpperCase()}] ${r.message} -> Action: ${r.actionableStep}`)
      .join("\n");
    existingSeo.lastSEOAnalysis = new Date().toISOString();

    data.seo = existingSeo;
  } catch (err) {
    console.warn("[autoSeoHook] Analysis notice:", (err as Error).message);
  }

  return data;
};

