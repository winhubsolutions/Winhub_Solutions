import { NextRequest, NextResponse } from "next/server";
import { performKeywordResearch, suggestInternalLinks } from "@/lib/seo/aiSeoEngine";
import { ALL_SERVICES } from "@/data/servicesCatalog";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const topic = searchParams.get("topic") || searchParams.get("q") || "Angular Development";
  return handleKeywordResearch(topic);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const topic = body.topic || body.query || "React Development";
    return handleKeywordResearch(topic);
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 400 });
  }
}

function handleKeywordResearch(topic: string) {
  const result = performKeywordResearch(topic);

  // Find related service if matched
  const matchedService = ALL_SERVICES.find(
    (s) =>
      s.slug.toLowerCase().includes(topic.toLowerCase().replace(/\s+/g, "-")) ||
      topic.toLowerCase().includes(s.title.toLowerCase())
  );

  const internalLinks = matchedService ? suggestInternalLinks(matchedService.slug) : [];

  return NextResponse.json({
    success: true,
    keywordData: result,
    relatedInternalLinks: internalLinks,
    antiCannibalizationRule: {
      canonicalTarget: result.targetUrlMapping,
      guideline: `Primary keyword '${result.primaryKeyword}' must only be the H1 & Title focus of ${result.targetUrlMapping}. Other pages must only reference it via secondary contextual anchors.`,
    },
  });
}

