import { BusinessAudienceSection } from "@/components/business/sections/BusinessAudienceSection";
import { BusinessComplementarySection } from "@/components/business/sections/BusinessComplementarySection";
import {
  businessAudienceCards,
  businessComplementaryCards,
  businessFormalCards,
  businessHero,
  businessLimitsBullets,
  businessNeedsPillars,
  businessProcessSteps,
  businessReferencesCards,
  businessScenarioCards,
  businessSpeedChips,
  businessUseCards,
} from "@/components/business/data";
import {
  businessAudienceSectionContent,
  businessComplementarySectionContent,
  businessFormalSectionContent,
  businessLimitsSectionContent,
  businessNeedsSectionContent,
  businessOutroContent,
  businessProcessIcons,
  businessReferencesSectionContent,
  businessRoadmapContent,
  businessScenarioSectionContent,
  businessSpeedSectionContent,
  businessUseSectionContent,
} from "@/components/business/sectionContent";
import { BusinessFormalSection } from "@/components/business/sections/BusinessFormalSection";
import { BusinessHeroSection } from "@/components/business/sections/BusinessHeroSection";
import { BusinessLimitsSection } from "@/components/business/sections/BusinessLimitsSection";
import { BusinessNeedsSection } from "@/components/business/sections/BusinessNeedsSection";
import { BusinessOutroSection } from "@/components/business/sections/BusinessOutroSection";
import { BusinessReferencesSection } from "@/components/business/sections/BusinessReferencesSection";
import { BusinessScenarioSection } from "@/components/business/sections/BusinessScenarioSection";
import { BusinessSpeedSection } from "@/components/business/sections/BusinessSpeedSection";
import { BusinessUseSection } from "@/components/business/sections/BusinessUseSection";
import { homeContactContent } from "@/components/home/sectionContent";
import { ContactSection } from "@/components/home/sections/ContactSection";
import { ProcessRoadmap } from "@/components/sections/ProcessRoadmap";
import appShell from "@/styles/AppShell.module.css";

export default function BusinessServicesPage() {
  const roadmapSteps = businessProcessSteps.map((step, index) => ({
    mapLabel: step.title,
    title: step.title,
    desc: step.text,
    bullets: [step.text],
    icon: businessProcessIcons[index] ?? "•",
  }));

  return (
    <div className={appShell["home-page"]}>
      <main className={appShell["home-shell"]}>
        <BusinessHeroSection content={businessHero} />
        <BusinessUseSection cards={businessUseCards} content={businessUseSectionContent} />
        <BusinessAudienceSection cards={businessAudienceCards} content={businessAudienceSectionContent} />
        <BusinessNeedsSection pillars={businessNeedsPillars} content={businessNeedsSectionContent} />
        <BusinessScenarioSection cards={businessScenarioCards} content={businessScenarioSectionContent} />
        <BusinessComplementarySection
          cards={businessComplementaryCards}
          content={businessComplementarySectionContent}
        />
        <ProcessRoadmap
          eyebrow={businessRoadmapContent.eyebrow}
          heading={businessRoadmapContent.heading}
          lead={businessRoadmapContent.lead}
          ctaLabel={businessRoadmapContent.ctaLabel}
          ctaSub={businessRoadmapContent.ctaSub}
          ctaHref={businessRoadmapContent.ctaHref}
          steps={roadmapSteps}
        />
        <BusinessSpeedSection chips={businessSpeedChips} content={businessSpeedSectionContent} />
        <BusinessFormalSection cards={businessFormalCards} content={businessFormalSectionContent} />
        <BusinessReferencesSection
          cards={businessReferencesCards}
          content={businessReferencesSectionContent}
        />
        <ContactSection sectionId="minimum-danych" content={homeContactContent} />
        <BusinessOutroSection content={businessOutroContent} />
      </main>
    </div>
  );
}
