import { NextRequest, NextResponse } from "next/server";
import { generateAiSeoMetadata, calculateSeoScore } from "@/lib/seo/aiSeoEngine";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, bodyText, category, currentSlug } = body;

    if (!title && !bodyText) {
      return NextResponse.json(
        { success: false, error: "Either 'title' or 'bodyText' is required for AI SEO generation." },
        { status: 400 }
      );
    }

    // Call AI SEO generation engine (Gemini API with deterministic NLP fallback)
    const generated = await generateAiSeoMetadata({
      title: title || "Digital Engineering Service",
      bodyText: bodyText || "",
      category: category || "general",
      currentSlug: currentSlug || "",
    });

    // Calculate score of generated output
    const scoreResult = calculateSeoScore({
      title: generated.seoTitle,
      metaDescription: generated.metaDescription,
      slug: generated.urlSlugSuggestion,
      content: bodyText || "",
      focusKeyword: generated.focusKeyword,
      canonicalUrl: `https://winhubsolutions.com/${category === "services" ? "services/" : ""}${generated.urlSlugSuggestion}`,
      hasStructuredData: true,
    });

    return NextResponse.json({
      success: true,
      data: {
        ...generated,
        projectedSeoScore: scoreResult.score,
        projectedGrade: scoreResult.grade,
        passedChecks: scoreResult.passedChecks,
        totalChecks: scoreResult.totalChecks,
        recommendations: scoreResult.recommendations,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to generate AI SEO metadata." },
      { status: 500 }
    );
  }
}

