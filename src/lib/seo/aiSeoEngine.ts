/**
 * AI AutoSEO Engine - Winhub Solutions
 * Core algorithmic scoring, keyword research, NLP content analysis, and LLM metadata generation.
 */

export interface SeoEvaluationInput {
  title?: string;
  metaDescription?: string;
  slug?: string;
  content?: string;
  focusKeyword?: string;
  headings?: { h1?: string[]; h2?: string[]; h3?: string[] };
  images?: { src: string; alt?: string }[];
  internalLinks?: string[];
  externalLinks?: string[];
  canonicalUrl?: string;
  hasStructuredData?: boolean;
}

export interface SeoRecommendation {
  id: string;
  category: "title" | "meta" | "headings" | "keywords" | "content" | "links" | "images" | "schema" | "technical";
  severity: "critical" | "warning" | "good";
  message: string;
  actionableStep: string;
  impactScore: number;
}

export interface SeoScoreBreakdown {
  titleScore: number;       // max 15
  metaScore: number;        // max 15
  headingsScore: number;    // max 10
  keywordScore: number;     // max 15
  contentScore: number;     // max 15
  internalLinksScore: number;// max 10
  imagesScore: number;      // max 10
  schemaScore: number;      // max 5
  technicalScore: number;   // max 5
}

export interface SeoScoreResult {
  score: number; // 0 - 100
  grade: "A+" | "A" | "B" | "C" | "D" | "F";
  status: "Excellent" | "Good" | "Needs Improvement" | "Critical Issues";
  breakdown: SeoScoreBreakdown;
  recommendations: SeoRecommendation[];
  passedChecks: number;
  totalChecks: number;
  wordCount: number;
  readingTimeMinutes: number;
  keywordDensityPercent: number;
}

export interface KeywordResearchResult {
  topic: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  searchIntent: "Commercial" | "Informational" | "Transactional" | "Navigational";
  suggestedContentTopics: string[];
  targetUrlMapping: string;
  difficultyEstimate: "Low" | "Medium" | "High";
  estimatedOpportunityScore: number; // 0-100
}

export interface InternalLinkSuggestion {
  sourceSlug: string;
  targetSlug: string;
  targetTitle: string;
  anchorTextSuggestion: string;
  relevanceReason: string;
  relevanceScore: number;
}

export interface AiSeoGenerationResult {
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  relatedKeywords: string[];
  urlSlugSuggestion: string;
  ogTitle: string;
  ogDescription: string;
  imageAltSuggestions: string[];
  internalLinkSuggestions: string[];
  faqSuggestions: { question: string; answer: string }[];
  structuredDataRecommendation: string;
}

// -----------------------------------------------------------------------------
// 1. Algorithmic SEO Scoring Engine (0 - 100)
// -----------------------------------------------------------------------------

export function calculateSeoScore(input: SeoEvaluationInput): SeoScoreResult {
  const recommendations: SeoRecommendation[] = [];
  let passedChecks = 0;
  const totalChecks = 16;

  const title = (input.title || "").trim();
  const desc = (input.metaDescription || "").trim();
  const content = (input.content || "").trim();
  const focusKw = (input.focusKeyword || "").toLowerCase().trim();
  const words = content.length > 0 ? content.split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;
  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  // --- A. Title Score (Max 15) ---
  let titleScore = 0;
  if (title.length >= 45 && title.length <= 65) {
    titleScore += 10;
    passedChecks++;
  } else if (title.length > 0) {
    titleScore += 5;
    recommendations.push({
      id: "title-length",
      category: "title",
      severity: "warning",
      message: `Title length is ${title.length} characters (ideal: 50–60 chars).`,
      actionableStep: "Adjust title length to prevent search snippet truncation.",
      impactScore: 5,
    });
  } else {
    recommendations.push({
      id: "title-missing",
      category: "title",
      severity: "critical",
      message: "Missing SEO Title.",
      actionableStep: "Define a descriptive title containing your focus keyword.",
      impactScore: 15,
    });
  }

  if (focusKw && title.toLowerCase().includes(focusKw)) {
    titleScore += 5;
    passedChecks++;
  } else if (focusKw) {
    recommendations.push({
      id: "title-keyword",
      category: "title",
      severity: "warning",
      message: "Focus keyword missing from SEO Title.",
      actionableStep: `Include "${focusKw}" near the beginning of the title.`,
      impactScore: 5,
    });
  }

  // --- B. Meta Description Score (Max 15) ---
  let metaScore = 0;
  if (desc.length >= 120 && desc.length <= 165) {
    metaScore += 10;
    passedChecks++;
  } else if (desc.length > 0) {
    metaScore += 5;
    recommendations.push({
      id: "meta-length",
      category: "meta",
      severity: "warning",
      message: `Meta description is ${desc.length} characters (ideal: 140–160 chars).`,
      actionableStep: "Tune description length for optimal SERP visibility.",
      impactScore: 5,
    });
  } else {
    recommendations.push({
      id: "meta-missing",
      category: "meta",
      severity: "critical",
      message: "Missing Meta Description.",
      actionableStep: "Add a compelling call-to-action summary with target keywords.",
      impactScore: 15,
    });
  }

  if (focusKw && desc.toLowerCase().includes(focusKw)) {
    metaScore += 5;
    passedChecks++;
  } else if (focusKw && desc.length > 0) {
    recommendations.push({
      id: "meta-keyword",
      category: "meta",
      severity: "warning",
      message: "Focus keyword missing from Meta Description.",
      actionableStep: `Incorporate "${focusKw}" naturally in the description.`,
      impactScore: 5,
    });
  }

  // --- C. Headings Structure (Max 10) ---
  let headingsScore = 0;
  const h1s = input.headings?.h1 || [];
  const h2s = input.headings?.h2 || [];

  if (h1s.length === 1) {
    headingsScore += 5;
    passedChecks++;
  } else if (h1s.length === 0) {
    recommendations.push({
      id: "h1-missing",
      category: "headings",
      severity: "critical",
      message: "No H1 heading detected.",
      actionableStep: "Add exactly one primary H1 heading summarizing page intent.",
      impactScore: 5,
    });
  } else {
    headingsScore += 2;
    recommendations.push({
      id: "h1-multiple",
      category: "headings",
      severity: "warning",
      message: `Multiple H1 tags (${h1s.length}) detected.`,
      actionableStep: "Keep a single H1 per page and structure sub-topics with H2/H3.",
      impactScore: 3,
    });
  }

  if (h2s.length >= 2) {
    headingsScore += 5;
    passedChecks++;
  } else {
    recommendations.push({
      id: "h2-insufficient",
      category: "headings",
      severity: "warning",
      message: "Insufficient section hierarchy (fewer than two H2 tags).",
      actionableStep: "Break content into logical sub-sections using H2 tags.",
      impactScore: 5,
    });
  }

  // --- D. Keyword Relevance & Placement (Max 15) ---
  let keywordScore = 0;
  let keywordDensityPercent = 0;

  if (focusKw && wordCount > 0) {
    const rawMatches = (content.toLowerCase().match(new RegExp(focusKw, "g")) || []).length;
    keywordDensityPercent = parseFloat(((rawMatches * focusKw.split(" ").length / wordCount) * 100).toFixed(2));

    if (rawMatches >= 1) {
      keywordScore += 5;
      passedChecks++;
    }
    if (keywordDensityPercent >= 0.5 && keywordDensityPercent <= 2.5) {
      keywordScore += 10;
      passedChecks++;
    } else if (keywordDensityPercent > 2.5) {
      keywordScore += 4;
      recommendations.push({
        id: "kw-stuffing",
        category: "keywords",
        severity: "warning",
        message: `High keyword density detected (${keywordDensityPercent}%).`,
        actionableStep: "Reduce keyword repetition to avoid algorithmic stuffing penalties.",
        impactScore: 6,
      });
    } else {
      recommendations.push({
        id: "kw-sparse",
        category: "keywords",
        severity: "warning",
        message: `Low focus keyword density (${keywordDensityPercent}%).`,
        actionableStep: `Naturally integrate "${focusKw}" in early paragraphs and section headers.`,
        impactScore: 5,
      });
    }
  } else if (!focusKw) {
    recommendations.push({
      id: "kw-missing-target",
      category: "keywords",
      severity: "critical",
      message: "No Focus Keyword defined for this page.",
      actionableStep: "Assign a target commercial or informational keyword.",
      impactScore: 15,
    });
  }

  // --- E. Content Depth & Quality (Max 15) ---
  let contentScore = 0;
  if (wordCount >= 600) {
    contentScore = 15;
    passedChecks += 2;
  } else if (wordCount >= 300) {
    contentScore = 10;
    passedChecks++;
    recommendations.push({
      id: "content-thin",
      category: "content",
      severity: "warning",
      message: `Moderate content length (${wordCount} words).`,
      actionableStep: "Expand depth to 600+ words to compete for high-intent search terms.",
      impactScore: 5,
    });
  } else {
    contentScore = 4;
    recommendations.push({
      id: "content-critical-thin",
      category: "content",
      severity: "critical",
      message: `Thin content detected (${wordCount} words).`,
      actionableStep: "Add comprehensive technical specs, FAQs, and service methodologies.",
      impactScore: 11,
    });
  }

  // --- F. Internal & External Linking (Max 10) ---
  let internalLinksScore = 0;
  const internalLinks = input.internalLinks || [];
  if (internalLinks.length >= 3) {
    internalLinksScore = 10;
    passedChecks++;
  } else if (internalLinks.length >= 1) {
    internalLinksScore = 6;
    recommendations.push({
      id: "links-few",
      category: "links",
      severity: "warning",
      message: `Only ${internalLinks.length} internal links found.`,
      actionableStep: "Link to at least 3 complementary service pages or case studies.",
      impactScore: 4,
    });
  } else {
    recommendations.push({
      id: "links-none",
      category: "links",
      severity: "critical",
      message: "Zero internal links on page.",
      actionableStep: "Add contextual links to pass domain authority and assist crawling.",
      impactScore: 10,
    });
  }

  // --- G. Image Optimization (Max 10) ---
  let imagesScore = 0;
  const images = input.images || [];
  if (images.length > 0) {
    const missingAlt = images.filter((img) => !img.alt || img.alt.trim() === "").length;
    if (missingAlt === 0) {
      imagesScore = 10;
      passedChecks++;
    } else {
      imagesScore = Math.max(2, 10 - missingAlt * 3);
      recommendations.push({
        id: "img-missing-alt",
        category: "images",
        severity: "warning",
        message: `${missingAlt} image(s) missing descriptive alt text.`,
        actionableStep: "Add descriptive, keyword-relevant alt attributes to all graphics.",
        impactScore: 5,
      });
    }
  } else {
    imagesScore = 6; // text-only acceptable but images preferred
    recommendations.push({
      id: "img-none",
      category: "images",
      severity: "warning",
      message: "No visual media or diagrams found.",
      actionableStep: "Include relevant architecture schematics or interface screenshots.",
      impactScore: 4,
    });
  }

  // --- H. Structured Data (Max 5) ---
  let schemaScore = 0;
  if (input.hasStructuredData) {
    schemaScore = 5;
    passedChecks++;
  } else {
    recommendations.push({
      id: "schema-missing",
      category: "schema",
      severity: "warning",
      message: "Missing JSON-LD structured data.",
      actionableStep: "Attach Service, Organization, or FAQPage schema to unlock rich snippets.",
      impactScore: 5,
    });
  }

  // --- I. Technical / Canonical (Max 5) ---
  let technicalScore = 0;
  if (input.canonicalUrl && input.canonicalUrl.startsWith("http")) {
    technicalScore = 5;
    passedChecks++;
  } else {
    recommendations.push({
      id: "canonical-missing",
      category: "technical",
      severity: "warning",
      message: "Missing or relative canonical URL.",
      actionableStep: "Explicitly declare absolute canonical URL to avoid duplicate content penalties.",
      impactScore: 5,
    });
  }

  const rawTotal =
    titleScore +
    metaScore +
    headingsScore +
    keywordScore +
    contentScore +
    internalLinksScore +
    imagesScore +
    schemaScore +
    technicalScore;

  const score = Math.min(100, Math.max(0, rawTotal));

  let grade: SeoScoreResult["grade"] = "F";
  let status: SeoScoreResult["status"] = "Critical Issues";

  if (score >= 90) {
    grade = "A+";
    status = "Excellent";
  } else if (score >= 80) {
    grade = "A";
    status = "Good";
  } else if (score >= 70) {
    grade = "B";
    status = "Good";
  } else if (score >= 55) {
    grade = "C";
    status = "Needs Improvement";
  } else if (score >= 40) {
    grade = "D";
    status = "Needs Improvement";
  }

  return {
    score,
    grade,
    status,
    breakdown: {
      titleScore,
      metaScore,
      headingsScore,
      keywordScore,
      contentScore,
      internalLinksScore,
      imagesScore,
      schemaScore,
      technicalScore,
    },
    recommendations,
    passedChecks,
    totalChecks,
    wordCount,
    readingTimeMinutes,
    keywordDensityPercent,
  };
}

// -----------------------------------------------------------------------------
// 2. AI Keyword Research & Intent Analyzer
// -----------------------------------------------------------------------------

export function performKeywordResearch(topic: string): KeywordResearchResult {
  const clean = topic.trim().toLowerCase();

  // Keyword mapping matrix for agency disciplines
  const keywordKnowledgeGraph: Record<string, Partial<KeywordResearchResult>> = {
    "angular development": {
      primaryKeyword: "Angular Development Company in India",
      secondaryKeywords: [
        "Angular Development Services",
        "Hire Angular Developers India",
        "Enterprise Angular Development",
        "Angular Web Application Development",
      ],
      longTailKeywords: [
        "hire dedicated angular developers for enterprise saas",
        "angularjs to angular 18 migration services in india",
        "custom angular dashboard development company",
      ],
      searchIntent: "Commercial",
      suggestedContentTopics: [
        "Why Angular 18 is Ideal for Enterprise SaaS Dashboards",
        "Step-by-Step Guide: Migrating Legacy AngularJS to Modern Angular",
        "Angular vs React: Cost & Performance Analysis for Businesses",
      ],
      targetUrlMapping: "/services/angular-development",
      difficultyEstimate: "Medium",
      estimatedOpportunityScore: 88,
    },
    "nodejs development": {
      primaryKeyword: "Node.js Development Company in India",
      secondaryKeywords: [
        "Node.js Backend Development",
        "Hire Node.js Developers",
        "Scalable Microservices Node.js",
        "Real-Time Node.js API Development",
      ],
      longTailKeywords: [
        "high concurrency nodejs backend architecture for fintech",
        "hire offshore node js engineers for rest and graphql apis",
        "real-time websocket applications in node js",
      ],
      searchIntent: "Commercial",
      suggestedContentTopics: [
        "Architecting Ultra-Low Latency REST APIs with Node.js & Fastify",
        "Scaling Node.js Microservices to 100k Concurrent Connections",
      ],
      targetUrlMapping: "/services/nodejs-development",
      difficultyEstimate: "High",
      estimatedOpportunityScore: 84,
    },
    "ai agent development": {
      primaryKeyword: "AI Agent Development Services India",
      secondaryKeywords: [
        "Autonomous AI Agents Development",
        "Custom AI Agents for Business",
        "Enterprise LLM Integration Services",
        "AI Workflow Automation Company",
      ],
      longTailKeywords: [
        "custom autonomous ai agent development for customer support",
        "langchain and crewai enterprise workflow implementation",
        "multimodal ai agents for inventory and sales automation",
      ],
      searchIntent: "Transactional",
      suggestedContentTopics: [
        "How Autonomous AI Agents Are Replacing Traditional RPA Workflows",
        "Building Enterprise Knowledge Retrieval Systems with LangChain & Vector DBs",
      ],
      targetUrlMapping: "/services/ai-agent-development",
      difficultyEstimate: "Medium",
      estimatedOpportunityScore: 96,
    },
    "ojs development": {
      primaryKeyword: "OJS Development & Customization Services India",
      secondaryKeywords: [
        "Open Journal Systems Customization",
        "OJS Journal Setup and Hosting",
        "OJS Theme Development Company",
        "Academic Publishing OJS Support",
      ],
      longTailKeywords: [
        "custom ojs 3 theme development for scopus indexed journals",
        "ojs doi crossref indexing setup and automation",
        "academic journal website development using open journal systems",
      ],
      searchIntent: "Commercial",
      suggestedContentTopics: [
        "Essential Checklist for Getting Your OJS Journal Scopus & Web of Science Indexed",
        "OJS 3 Upgrade Guide: Preserving Citations, DOIs and User Data",
      ],
      targetUrlMapping: "/services/ojs-development",
      difficultyEstimate: "Low",
      estimatedOpportunityScore: 92,
    },
  };

  // Check direct knowledge graph match or synthesize
  for (const [key, val] of Object.entries(keywordKnowledgeGraph)) {
    if (clean.includes(key) || key.includes(clean)) {
      return {
        topic,
        primaryKeyword: val.primaryKeyword || `${topic} Company in India`,
        secondaryKeywords: val.secondaryKeywords || [
          `${topic} Services`,
          `Hire ${topic} Developers`,
          `Custom ${topic} Solutions`,
        ],
        longTailKeywords: val.longTailKeywords || [
          `best ${topic.toLowerCase()} services for startups and enterprises`,
          `hire professional ${topic.toLowerCase()} experts in india`,
        ],
        searchIntent: val.searchIntent || "Commercial",
        suggestedContentTopics: val.suggestedContentTopics || [
          `Comprehensive Guide to ${topic} for Modern Enterprises`,
          `Why Businesses Choose Wintech Solutions for ${topic}`,
        ],
        targetUrlMapping: val.targetUrlMapping || `/services/${clean.replace(/\s+/g, "-")}`,
        difficultyEstimate: val.difficultyEstimate || "Medium",
        estimatedOpportunityScore: val.estimatedOpportunityScore || 85,
      };
    }
  }

  // Synthesize dynamically
  return {
    topic,
    primaryKeyword: `${topic} Company in India`,
    secondaryKeywords: [
      `${topic} Services India`,
      `Custom ${topic} Development`,
      `Hire Dedicated ${topic} Experts`,
      `Enterprise ${topic} Solutions`,
    ],
    longTailKeywords: [
      `top rated ${topic.toLowerCase()} agency in hyderabad and warangal`,
      `cost-effective ${topic.toLowerCase()} development for global businesses`,
      `hire offshore ${topic.toLowerCase()} developers with proven track record`,
    ],
    searchIntent: "Commercial",
    suggestedContentTopics: [
      `How to Choose the Right ${topic} Partner in 2026`,
      `Technical Architecture & Best Practices for ${topic}`,
    ],
    targetUrlMapping: `/services/${clean.replace(/[^a-z0-9]+/g, "-")}`,
    difficultyEstimate: "Medium",
    estimatedOpportunityScore: 82,
  };
}

// -----------------------------------------------------------------------------
// 3. Automated Internal Linking Suggestions
// -----------------------------------------------------------------------------

export function suggestInternalLinks(
  currentSlug: string,
  contentText: string,
  existingPages: { slug: string; title: string; category?: string }[]
): InternalLinkSuggestion[] {
  const suggestions: InternalLinkSuggestion[] = [];
  const text = contentText.toLowerCase();

  // Natural link affinity graph
  const affinityMap: Record<string, { targetSlug: string; anchorText: string; reason: string }[]> = {
    "angular-development": [
      { targetSlug: "custom-web-applications", anchorText: "custom web applications", reason: "Frontend architecture relates to comprehensive web app development." },
      { targetSlug: "nodejs-development", anchorText: "Node.js backend APIs", reason: "Full-stack synergy for Angular applications." },
      { targetSlug: "uiux-design", anchorText: "UI/UX design systems", reason: "Component libraries require tailored UI/UX." },
    ],
    "nodejs-development": [
      { targetSlug: "custom-web-applications", anchorText: "scalable web platforms", reason: "Backend microservices power full web apps." },
      { targetSlug: "reactjs-development", anchorText: "React frontend integration", reason: "Standard MERN / fullstack pairing." },
      { targetSlug: "ai-agent-development", anchorText: "AI automated agents", reason: "Node services orchestrate LLM agents." },
    ],
    "ai-agent-development": [
      { targetSlug: "custom-software-development", anchorText: "custom software workflows", reason: "AI agents automate enterprise software pipelines." },
      { targetSlug: "nodejs-development", anchorText: "event-driven Node.js backend", reason: "Agent tool calling execution layer." },
      { targetSlug: "contact", anchorText: "schedule an AI architecture consultation", reason: "High-intent lead conversion." },
    ],
    "ojs-development": [
      { targetSlug: "website-design-development", anchorText: "academic journal website design", reason: "Journal portals require bespoke styling." },
      { targetSlug: "custom-web-applications", anchorText: "editorial workflow software", reason: "Peer review automation." },
      { targetSlug: "seo-services", anchorText: "Google Scholar & Scopus indexing SEO", reason: "Academic discoverability." },
    ],
  };

  const affinities = affinityMap[currentSlug] || [];
  for (const aff of affinities) {
    const page = existingPages.find((p) => p.slug === aff.targetSlug);
    suggestions.push({
      sourceSlug: currentSlug,
      targetSlug: aff.targetSlug,
      targetTitle: page?.title || aff.targetSlug.replace(/-/g, " "),
      anchorTextSuggestion: aff.anchorText,
      relevanceReason: aff.reason,
      relevanceScore: 95,
    });
  }

  // Cross-reference any existing pages mentioned in text
  for (const page of existingPages) {
    if (page.slug === currentSlug) continue;
    const titleWords = page.title.toLowerCase();
    if (text.includes(titleWords) && !suggestions.some((s) => s.targetSlug === page.slug)) {
      suggestions.push({
        sourceSlug: currentSlug,
        targetSlug: page.slug,
        targetTitle: page.title,
        anchorTextSuggestion: page.title,
        relevanceReason: `Target page keyword explicitly mentioned in content.`,
        relevanceScore: 85,
      });
    }
  }

  return suggestions.slice(0, 5);
}

// -----------------------------------------------------------------------------
// 4. Automatic AI SEO Generation (Deterministic NLP + Optional LLM)
// -----------------------------------------------------------------------------

export async function generateAiSeoMetadata(input: {
  title: string;
  excerpt?: string;
  bodyText?: string;
  category?: string;
  currentSlug?: string;
}): Promise<AiSeoGenerationResult> {
  const cleanTitle = input.title.trim();
  const research = performKeywordResearch(cleanTitle);

  // Check if LLM API is available (e.g. GEMINI_API_KEY)
  const geminiKey = process.env.GEMINI_API_KEY;
  if (geminiKey) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are an enterprise technical SEO director. Analyze this service/page content and return a strict JSON object (no markdown, no backticks):
Title: ${cleanTitle}
Category: ${input.category || "IT Solutions"}
Content: ${(input.bodyText || input.excerpt || "").slice(0, 2000)}

Output format:
{
  "seoTitle": "Optimal 50-60 char title including primary keyword and '| Winhub Solutions'",
  "metaDescription": "Compelling 145-160 char CTA meta description with primary and secondary keyword",
  "focusKeyword": "Primary high-intent search phrase",
  "secondaryKeywords": ["kw1", "kw2", "kw3"],
  "relatedKeywords": ["kw4", "kw5"],
  "urlSlugSuggestion": "clean-kebab-slug",
  "ogTitle": "Punchy OpenGraph Title",
  "ogDescription": "OpenGraph summary",
  "imageAltSuggestions": ["alt text 1", "alt text 2"],
  "internalLinkSuggestions": ["related service 1", "related service 2"],
  "faqSuggestions": [{"question": "...", "answer": "..."}],
  "structuredDataRecommendation": "Service | Organization | Article"
}`,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.2,
              responseMimeType: "application/json",
            },
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (rawText) {
          const parsed = JSON.parse(rawText);
          return {
            seoTitle: parsed.seoTitle || `${cleanTitle} | Leading IT Company | Winhub Solutions`,
            metaDescription: parsed.metaDescription || `Looking for ${research.primaryKeyword}? Winhub Solutions provides top-tier ${cleanTitle} services with proven scalability and 24/7 technical support.`,
            focusKeyword: parsed.focusKeyword || research.primaryKeyword,
            secondaryKeywords: parsed.secondaryKeywords || research.secondaryKeywords,
            relatedKeywords: parsed.relatedKeywords || research.longTailKeywords,
            urlSlugSuggestion: parsed.urlSlugSuggestion || cleanTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            ogTitle: parsed.ogTitle || `${cleanTitle} - Winhub Solutions`,
            ogDescription: parsed.ogDescription || parsed.metaDescription,
            imageAltSuggestions: parsed.imageAltSuggestions || [`${cleanTitle} architecture schematic`, `${cleanTitle} development workflow`],
            internalLinkSuggestions: parsed.internalLinkSuggestions || research.suggestedContentTopics,
            faqSuggestions: parsed.faqSuggestions || [
              {
                question: `Why choose Winhub Solutions for ${cleanTitle}?`,
                answer: `We deliver dedicated engineering pods, enterprise code standards, scalable architecture, and full lifecycle support.`,
              },
            ],
            structuredDataRecommendation: parsed.structuredDataRecommendation || "Service",
          };
        }
      }
    } catch (e) {
      console.warn("[aiSeoEngine] LLM generation fallback triggered:", (e as Error).message);
    }
  }

  // High-precision deterministic NLP generator fallback
  const seoTitle = `${cleanTitle} Services in India | Winhub Solutions`.slice(0, 60);
  const metaDescription = `Partner with Winhub Solutions for industry-leading ${cleanTitle.toLowerCase()} services. Scalable architecture, high security, and dedicated engineering. Request a quote.`.slice(0, 158);

  return {
    seoTitle,
    metaDescription,
    focusKeyword: research.primaryKeyword,
    secondaryKeywords: research.secondaryKeywords,
    relatedKeywords: research.longTailKeywords,
    urlSlugSuggestion: cleanTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
    ogTitle: `${cleanTitle} | Enterprise IT Engineering`,
    ogDescription: metaDescription,
    imageAltSuggestions: [
      `${cleanTitle} system architecture and design diagram`,
      `${cleanTitle} engineering team delivering digital solutions`,
    ],
    internalLinkSuggestions: research.suggestedContentTopics,
    faqSuggestions: [
      {
        question: `How does Winhub Solutions ensure quality in ${cleanTitle}?`,
        answer: `We follow strict automated testing, zero-downtime deployment pipelines, and industry best practices.`,
      },
      {
        question: `What is the typical turnaround timeline for a ${cleanTitle} project?`,
        answer: `Delivery schedules range from 2 to 6 weeks depending on custom scope, integrations, and milestones.`,
      },
    ],
    structuredDataRecommendation: cleanTitle.toLowerCase().includes("development") || cleanTitle.toLowerCase().includes("design") ? "Service" : "WebPage",
  };
}

