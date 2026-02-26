import {
  chips,
  problemCards,
  riskCards,
  servicesCatalog,
  serviceShortcutPills,
} from "@/components/home/data";
import {
  homeContactContent,
  homeHeroContent,
  homeProblemContent,
  homeRiskSliderContent,
  homeServicesContent,
  homeServicesShortcutContent,
} from "@/components/home/sectionContent";
import { HeroSection } from "@/components/home/sections/HeroSection";
import { ProblemSection } from "@/components/home/sections/ProblemSection";
import { RiskSliderSection } from "@/components/home/sections/RiskSliderSection";
import { ContactSection } from "@/components/home/sections/ContactSection";
import { ServicesSection } from "@/components/home/sections/ServicesSection";
import { ServicesShortcutSection } from "@/components/home/sections/ServicesShortcutSection";
import { HomeMicroInteractions } from "@/components/home/layout/HomeMicroInteractions";
import { ProcessRoadmap } from "@/components/sections/ProcessRoadmap";
import appShell from "@/styles/AppShell.module.css";

export default function Home() {
  return (
    <div className={appShell["home-page"]}>
      <main className={appShell["home-shell"]} data-home-shell>
        <HomeMicroInteractions />
        <HeroSection chips={chips} content={homeHeroContent} />
        <ServicesShortcutSection
          servicesCatalog={servicesCatalog}
          serviceShortcutPills={serviceShortcutPills}
          content={homeServicesShortcutContent}
        />
        <ProblemSection problemCards={problemCards} content={homeProblemContent} />
        <ServicesSection servicesCatalog={servicesCatalog} content={homeServicesContent} />
        <RiskSliderSection riskCards={riskCards} content={homeRiskSliderContent} />
        <ProcessRoadmap />
        <ContactSection content={homeContactContent} />
      </main>
    </div>
  );
}
