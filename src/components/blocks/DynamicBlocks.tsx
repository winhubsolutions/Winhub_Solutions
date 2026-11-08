"use client";

import React from "react";
import HeroBlockRenderer from "./HeroBlockRenderer";
import ServicesGridBlockRenderer from "./ServicesGridBlockRenderer";
import TechStackBlockRenderer from "./TechStackBlockRenderer";
import ProjectsBlockRenderer from "./ProjectsBlockRenderer";
import FeatureCardsBlockRenderer from "./FeatureCardsBlockRenderer";
import ProcessBlockRenderer from "./ProcessBlockRenderer";
import StatsBlockRenderer from "./StatsBlockRenderer";
import TestimonialsBlockRenderer from "./TestimonialsBlockRenderer";
import FAQBlockRenderer from "./FAQBlockRenderer";
import CTABannerBlockRenderer from "./CTABannerBlockRenderer";
import TerminalBlockRenderer from "./TerminalBlockRenderer";
import RichTextBlockRenderer from "./RichTextBlockRenderer";

export interface DynamicBlockItem {
  blockType: string;
  id?: string;
  [key: string]: any;
}

interface DynamicBlocksProps {
  blocks?: DynamicBlockItem[];
}

export default function DynamicBlocks({ blocks }: DynamicBlocksProps) {
  if (!blocks || blocks.length === 0) {
    // If no custom blocks exist, render the full default sequence
    return (
      <>
        <HeroBlockRenderer />
        <ServicesGridBlockRenderer />
        <TechStackBlockRenderer />
        <TerminalBlockRenderer />
        <ProjectsBlockRenderer />
        <FeatureCardsBlockRenderer />
        <ProcessBlockRenderer />
        <StatsBlockRenderer />
        <TestimonialsBlockRenderer />
        <FAQBlockRenderer />
        <CTABannerBlockRenderer />
      </>
    );
  }

  return (
    <>
      {blocks.map((block, index) => {
        const key = block.id || `${block.blockType}-${index}`;

        switch (block.blockType) {
          case "heroBlock":
            return <HeroBlockRenderer key={key} {...block} />;
          case "servicesGridBlock":
            return <ServicesGridBlockRenderer key={key} {...block} />;
          case "techStackBlock":
            return <TechStackBlockRenderer key={key} {...block} />;
          case "projectsShowcaseBlock":
            return <ProjectsBlockRenderer key={key} {...block} />;
          case "featureCardsBlock":
            return <FeatureCardsBlockRenderer key={key} {...block} />;
          case "processWorkflowBlock":
            return <ProcessBlockRenderer key={key} {...block} />;
          case "statisticsBlock":
            return <StatsBlockRenderer key={key} {...block} />;
          case "testimonialsBlock":
            return <TestimonialsBlockRenderer key={key} {...block} />;
          case "faqBlock":
            return <FAQBlockRenderer key={key} {...block} />;
          case "ctaBannerBlock":
            return <CTABannerBlockRenderer key={key} {...block} />;
          case "terminalBlock":
            return <TerminalBlockRenderer key={key} {...block} />;
          case "richTextBlock":
            return <RichTextBlockRenderer key={key} {...block} />;
          default:
            return null;
        }
      })}
    </>
  );
}

