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
import { BusinessFormalSection } from "@/components/business/sections/BusinessFormalSection";
import { BusinessHeroSection } from "@/components/business/sections/BusinessHeroSection";
import { BusinessLimitsSection } from "@/components/business/sections/BusinessLimitsSection";
import { BusinessNeedsSection } from "@/components/business/sections/BusinessNeedsSection";
import { BusinessOutroSection } from "@/components/business/sections/BusinessOutroSection";
import { BusinessReferencesSection } from "@/components/business/sections/BusinessReferencesSection";
import { BusinessScenarioSection } from "@/components/business/sections/BusinessScenarioSection";
import { BusinessSpeedSection } from "@/components/business/sections/BusinessSpeedSection";
import { BusinessUseSection } from "@/components/business/sections/BusinessUseSection";
import { ContactSection } from "@/components/home/sections/ContactSection";
import { ProcessRoadmap } from "@/components/sections/ProcessRoadmap";
import appShell from "@/styles/AppShell.module.css";

const processIcons = ["💬", "📋", "🔎", "🛠️", "✅", "🏁"];

export default function BusinessServicesPage() {
  const roadmapSteps = businessProcessSteps.map((step, index) => ({
    mapLabel: step.title,
    title: step.title,
    desc: step.text,
    bullets: [step.text],
    icon: processIcons[index] ?? "•",
  }));

  return (
    <div className={appShell["home-page"]}>
      <main className={appShell["home-shell"]}>
        <BusinessHeroSection content={businessHero} />
        <BusinessUseSection cards={businessUseCards} />
        <BusinessAudienceSection cards={businessAudienceCards} />
        <BusinessNeedsSection pillars={businessNeedsPillars} />
        <BusinessScenarioSection cards={businessScenarioCards} />
        <BusinessComplementarySection cards={businessComplementaryCards} />
        <ProcessRoadmap
          eyebrow="JAK DZIAŁAMY"
          heading="Jak zamawiasz usługę i jak dowozimy efekt"
          lead="Od pierwszego kontaktu do protokołu odbioru - przewidywalnie i bez chaosu."
          ctaLabel="Przejdź do kontaktu"
          ctaSub="W godzinach biura odpowiadamy zwykle do 15 minut."
          ctaHref="/kontakt"
          steps={roadmapSteps}
        />
        <BusinessSpeedSection chips={businessSpeedChips} />
        <BusinessFormalSection cards={businessFormalCards} />
        <BusinessReferencesSection cards={businessReferencesCards} />
        <ContactSection sectionId="minimum-danych" />
        <BusinessOutroSection />
      </main>
    </div>
  );
}
