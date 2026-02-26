import {
  chips,
  problemCards,
  riskCards,
  servicesCatalog,
  serviceShortcutPills,
} from "@/components/home/data";
import { HeroSection } from "@/components/home/sections/HeroSection";
import { ProblemSection } from "@/components/home/sections/ProblemSection";
import { RiskSliderSection } from "@/components/home/sections/RiskSliderSection";
import { ContactSection } from "@/components/home/sections/ContactSection";
import { ServicesSection } from "@/components/home/sections/ServicesSection";
import { ServicesShortcutSection } from "@/components/home/sections/ServicesShortcutSection";
import { ProcessRoadmap } from "@/components/sections/ProcessRoadmap";
import appShell from "@/styles/AppShell.module.css";

export default function Home() {
  return (
    <div className={appShell["home-page"]}>
      <main className={appShell["home-shell"]}>
        <HeroSection chips={chips} />
        <ServicesShortcutSection
          servicesCatalog={servicesCatalog}
          serviceShortcutPills={serviceShortcutPills}
        />
        <ProblemSection problemCards={problemCards} />
        <ServicesSection servicesCatalog={servicesCatalog} />
        <RiskSliderSection riskCards={riskCards} />
        <ProcessRoadmap />
        <ContactSection />
      </main>
    </div>
  );
}
