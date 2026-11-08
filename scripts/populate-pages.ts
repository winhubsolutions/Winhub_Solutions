import { getPayload } from "payload";
import configPromise from "../src/payload.config";

function textToLexical(paragraphs: string[]) {
  return {
    root: {
      type: "root",
      format: "",
      indent: 0,
      version: 1,
      direction: "ltr",
      children: paragraphs.map((text) => ({
        type: "paragraph",
        format: "",
        indent: 0,
        version: 1,
        direction: "ltr",
        children: [
          {
            mode: "normal",
            text,
            type: "text",
            style: "",
            detail: 0,
            format: 0,
            version: 1,
          },
        ],
      })),
    },
  };
}

const standardPages = [
  {
    title: "About Us",
    slug: "about",
    heroHeadline: "Empowering Businesses Through Technology",
    heroSubtitle:
      "Winhub Solutions is an IT services and digital development company focused on delivering innovative technology solutions for businesses, startups, educational institutions and organizations.",
    content: [
      "We specialize in website design and development, custom software engineering, mobile application development, AI-powered automation, UI/UX design and digital marketing.",
      "Our approach combines creativity, technical knowledge and business understanding to develop solutions that address real-world challenges.",
      "With more than five years of experience and over 100 completed projects, we continue to help organizations strengthen their digital presence and improve their business operations.",
    ],
  },
  {
    title: "Contact Us",
    slug: "contact",
    heroHeadline: "Have an Idea? Let's Build It Together.",
    heroSubtitle:
      "Whether you need a high-performance web platform, bespoke custom software, mobile application or intelligent AI automation, our engineering team is ready to turn your technical requirements into digital reality.",
    content: [
      "Our offices are located in Hanamkonda, Warangal, and Knowledge City, Raidurgam, Hyderabad, Telangana, India.",
      "Reach out to us at contact@winhubsolutions.com or schedule an architecture call directly.",
      "All initial consultations are protected under mutual Non-Disclosure Agreements (NDA).",
    ],
  },
  {
    title: "Frequently Asked Questions",
    slug: "faq",
    heroHeadline: "Everything You Need to Know. | Straight Answers from Engineers.",
    heroSubtitle:
      "Transparent details on timelines, pricing structures, code handover, intellectual property, security audits, and dedicated engagement models across all our service pillars.",
    content: [
      "We deliver enterprise-grade software engineered with Next.js, Node.js, React, Flutter, Python, and PostgreSQL.",
      "Full source code and intellectual property (IP) rights are 100% transferred upon milestone completion.",
      "We offer flexible engagement models: Fixed-Price Milestones, Time & Materials, and Dedicated Team Augmentation.",
    ],
  },
  {
    title: "Technologies",
    slug: "technologies",
    heroHeadline: "Building with the | Right Technology.",
    heroSubtitle:
      "We leverage modern programming languages, frameworks, databases and development platforms to create high-performance digital solutions.",
    content: [
      "Our technology selection is guided by stability, performance, security, and developer ergonomics.",
      "We avoid vendor lock-in by designing modular systems that can scale horizontally across cloud providers.",
      "Every project undergoes automated continuous integration (CI) with strict linting, type-safety checks, and comprehensive unit tests.",
    ],
  },
  {
    title: "Privacy Policy",
    slug: "privacy-policy",
    heroHeadline: "Data Governance & Confidentiality Commitment",
    heroSubtitle:
      "How Winhub Solutions collects, safeguards, and handles your digital information with strict encryption standards.",
    content: [
      "We collect only the information necessary to provide software engineering, technical support, and project consultation.",
      "Your project data, codebases, and credentials are never sold or shared with unauthorized third parties.",
      "All communications and project artifacts are protected under end-to-end TLS encryption and strict NDA terms.",
    ],
  },
  {
    title: "Terms of Service",
    slug: "terms-of-service",
    heroHeadline: "Engagement Terms & Intellectual Property Handover",
    heroSubtitle:
      "Our transparent terms governing software delivery, warranty periods, and milestone guarantees.",
    content: [
      "All software development projects are executed according to mutually approved Statements of Work (SOW).",
      "Upon final milestone payment, full copyright and repository ownership are unconditionally assigned to the client.",
      "We provide post-deployment warranty and SLA maintenance packages covering bug resolution and security patches.",
    ],
  },
];

async function seedPages() {
  console.log("Initializing Payload Local API for Pages...");
  const payload = await getPayload({ config: configPromise });

  for (const p of standardPages) {
    const existing = await payload.find({
      collection: "pages",
      where: { slug: { equals: p.slug } },
      limit: 1,
    });

    const pageData: any = {
      title: p.title,
      slug: p.slug,
      heroHeadline: p.heroHeadline,
      heroSubtitle: p.heroSubtitle,
      pageContent: textToLexical(p.content),
    };

    if (existing.docs.length > 0) {
      console.log(`Updating existing page: ${p.title} (${p.slug})...`);
      await payload.update({
        collection: "pages",
        id: existing.docs[0].id,
        data: pageData,
      });
    } else {
      console.log(`Creating new dynamic page: ${p.title} (${p.slug})...`);
      await payload.create({
        collection: "pages",
        data: pageData,
      });
    }
  }

  console.log("All dynamic pages populated successfully in Payload CMS!");
  process.exit(0);
}

seedPages().catch((err) => {
  console.error("Error seeding pages:", err);
  process.exit(1);
});

