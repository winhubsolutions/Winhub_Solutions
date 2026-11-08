import { getPayload } from "payload";
import configPromise from "../src/payload.config";
import { SERVICES_CATALOG } from "../src/data/servicesCatalog";

function textToLexical(text: string) {
  const paragraphs = text.split("\n\n").filter(Boolean);
  return {
    root: {
      type: "root",
      format: "",
      indent: 0,
      version: 1,
      direction: "ltr",
      children: paragraphs.map((paragraph) => ({
        type: "paragraph",
        format: "",
        indent: 0,
        version: 1,
        direction: "ltr",
        children: [
          {
            mode: "normal",
            text: paragraph.trim(),
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

async function populateEveryService() {
  const payload = await getPayload({ config: configPromise });
  const allServices = await payload.find({
    collection: "services",
    limit: 100,
  });

  console.log(`Found ${allServices.totalDocs} service documents in Payload CMS.`);

  for (const doc of allServices.docs) {
    // Match against catalog by exact slug or closest slug/title match
    let match = SERVICES_CATALOG.find((s) => s.slug === doc.slug);
    if (!match) {
      match = SERVICES_CATALOG.find(
        (s) =>
          doc.slug.includes(s.slug.split("-")[0]) ||
          doc.title.toLowerCase().includes(s.title.toLowerCase().split(" ")[0])
      );
    }
    if (!match) {
      match = SERVICES_CATALOG[0]; // Fallback to rich template
    }

    const needsPopulate =
      !doc.features || doc.features.length === 0 ||
      !doc.benefits || doc.benefits.length === 0 ||
      !doc.expertiseList || doc.expertiseList.length === 0 ||
      !doc.content;

    if (needsPopulate) {
      console.log(`Populating service #${doc.id}: ${doc.title} (${doc.slug})...`);
      await payload.update({
        collection: "services",
        id: doc.id,
        data: {
          h1Heading: doc.h1Heading || match.h1 || `${doc.title} Solutions`,
          shortDescription: doc.shortDescription || match.intro,
          content: doc.content || textToLexical(match.overview || match.intro),
          expertiseList: (doc.expertiseList && doc.expertiseList.length > 0)
            ? doc.expertiseList
            : match.expertise.map((item) => ({ item })),
          features: (doc.features && doc.features.length > 0)
            ? doc.features
            : match.features.map((f) => ({ title: f.title, description: f.desc })),
          benefits: (doc.benefits && doc.benefits.length > 0)
            ? doc.benefits
            : match.benefits.map((b) => ({ title: b.title, description: b.desc })),
          processSteps: (doc.processSteps && doc.processSteps.length > 0)
            ? doc.processSteps
            : match.process.map((p) => ({ step: p.step, title: p.title, desc: p.desc })),
          technologies: (doc.technologies && doc.technologies.length > 0)
            ? doc.technologies
            : match.technologies.map((name) => ({ name })),
          faqs: (doc.faqs && doc.faqs.length > 0)
            ? doc.faqs
            : match.faqs.map((f) => ({ question: f.q, answer: f.a })),
        },
      });
    } else {
      console.log(`Service #${doc.id}: ${doc.title} already fully populated.`);
    }
  }

  console.log("All services in Payload CMS database are now 100% populated with rich dynamic data!");
  process.exit(0);
}

populateEveryService().catch((err) => {
  console.error("Error populating services:", err);
  process.exit(1);
});
