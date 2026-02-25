import {
  chips,
  problemCards,
  riskCards,
  serviceMenu,
  servicesCatalog,
  serviceShortcutPills,
} from "@/components/home/data";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { RiskSliderSection } from "@/components/home/RiskSliderSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ServicesShortcutSection } from "@/components/home/ServicesShortcutSection";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ProcessRoadmap } from "@/components/sections/ProcessRoadmap";

export default function Home() {
  return (
    <div className="home-page">
      <SiteHeader serviceMenu={serviceMenu} />

      <main className="home-shell">
        <HeroSection chips={chips} />
        <ServicesShortcutSection
          servicesCatalog={servicesCatalog}
          serviceShortcutPills={serviceShortcutPills}
        />
        <ProblemSection problemCards={problemCards} />
        <ServicesSection servicesCatalog={servicesCatalog} />
        <RiskSliderSection riskCards={riskCards} />
        <ProcessRoadmap />

      </main>
    </div>
  );
}
