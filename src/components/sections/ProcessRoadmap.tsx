"use client";

import { useMemo, useState } from "react";
import type { KeyboardEvent } from "react";
import styles from "./ProcessRoadmap.module.css";

export type ProcessRoadmapStep = {
  id?: string;
  number?: string;
  mapLabel: string;
  title: string;
  desc: string;
  bullets: string[];
  icon: string;
};

type Step = {
  id: string;
  number: string;
  mapLabel: string;
  title: string;
  desc: string;
  bullets: string[];
  icon: string;
};

type PinPosition = {
  x: number;
  y: number;
};

export type ProcessRoadmapProps = {
  eyebrow?: string;
  heading?: string;
  lead?: string;
  ctaLabel?: string;
  ctaSub?: string;
  ctaHref?: string;
  steps?: ProcessRoadmapStep[];
  initialActiveId?: string;
};

const defaultSteps: ProcessRoadmapStep[] = [
  {
    id: "01",
    number: "01",
    mapLabel: "Kontakt",
    title: "Kontakt",
    desc: "Wybierasz kanal. W godzinach pracy biura odpowiadamy do 15 minut.",
    bullets: ["Do 15 minut (w godz. pracy)", "Szybki kontekst", "Jasny punkt startu"],
    icon: "💬",
  },
  {
    id: "02",
    number: "02",
    mapLabel: "Minimum danych",
    title: "Minimum danych",
    desc: "Zbieramy informacje potrzebne do widelki i kolejnego kroku.",
    bullets: ["Zakres minimum", "Widelki i decyzja", "Bez nadmiaru formalnosci"],
    icon: "📋",
  },
  {
    id: "03",
    number: "03",
    mapLabel: "Rozpoznanie",
    title: "Rozpoznanie / wizja",
    desc: "Przy wiekszych zleceniach stan szyb i detali potrafi znaczaco zmienic czas i technologie, dlatego potwierdzamy wycene po rozpoznaniu.",
    bullets: ["Potwierdzenie technologii", "Korekta wyceny", "Ryzyka i detale"],
    icon: "✏️",
  },
  {
    id: "04",
    number: "04",
    mapLabel: "Przygotowanie",
    title: "Wejscie + przygotowanie",
    desc: "Szkolenie na obiekcie, analiza zagrozen, ustalenie zalecanej kolejnosci prac.",
    bullets: ["Szkolenie i BHP", "Analiza zagrozen", "Kolejnosc prac"],
    icon: "🛠️",
  },
  {
    id: "05",
    number: "05",
    mapLabel: "Realizacja",
    title: "Realizacja + kontrola",
    desc: "Zanim powiemy gotowe, robimy odbior wewnetrzny checklista.",
    bullets: ["Checklista odbioru wewnetrznego", "Kontrola jakosci", "Staly nadzor"],
    icon: "✅",
  },
  {
    id: "06",
    number: "06",
    mapLabel: "Odbior",
    title: "Odbior i domkniecie",
    desc: "Protokoly odbioru i zdjecia, rozliczenie, koniec tematu.",
    bullets: ["Protokoly + zdjecia + rozliczenie", "Zamkniecie tematu", "Jasny final"],
    icon: "🏁",
  },
];

const PATH_D =
  "M 60 288 C 80 200 120 175 180 200 C 240 220 280 140 380 72 C 440 40 540 40 620 72 C 700 108 760 168 800 184 C 840 198 875 238 900 288";

const DEFAULT_PIN_POSITIONS: PinPosition[] = [
  { x: 6, y: 72 },
  { x: 18, y: 50 },
  { x: 38, y: 18 },
  { x: 62, y: 18 },
  { x: 80, y: 46 },
  { x: 90, y: 72 },
];

function normalizeSteps(input: ProcessRoadmapStep[]): Step[] {
  return input.map((step, index) => {
    const number = step.number ?? String(index + 1).padStart(2, "0");
    return {
      id: step.id ?? number,
      number,
      mapLabel: step.mapLabel,
      title: step.title,
      desc: step.desc,
      bullets: step.bullets,
      icon: step.icon,
    };
  });
}

function buildPinPositions(count: number): PinPosition[] {
  if (count === DEFAULT_PIN_POSITIONS.length) return DEFAULT_PIN_POSITIONS;
  if (count <= 1) return [{ x: 50, y: 46 }];
  return Array.from({ length: count }, (_, index) => {
    const t = index / (count - 1);
    const x = 6 + t * 84;
    const y = 46 + Math.sin(t * Math.PI * 2 - Math.PI / 2) * 26;
    return { x, y };
  });
}

export function ProcessRoadmap({
  eyebrow = "PROCES JAKO ROADMAPA",
  heading = "Jak zamawiasz usluge i jak dowozimy efekt",
  lead = "6 krokow od kontaktu do efektu - jasno i bez niespodzianek.",
  ctaLabel = "Zamow oferte do zatwierdzenia",
  ctaSub = "Gotowa do wyslania do przelozonego / zarzadu / dzialu zakupow",
  ctaHref = "/kontakt",
  steps: stepsInput = defaultSteps,
  initialActiveId,
}: ProcessRoadmapProps = {}) {
  const steps = useMemo(() => normalizeSteps(stepsInput), [stepsInput]);
  const firstId = steps[0]?.id ?? "01";
  const [activeId, setActiveId] = useState<string>(initialActiveId ?? firstId);
  const pinPositions = useMemo(() => buildPinPositions(steps.length), [steps.length]);

  const activeStep = useMemo<Step>(
    () => steps.find((step) => step.id === activeId) ?? steps[0],
    [activeId, steps],
  );

  const activeIndex = steps.findIndex((step) => step.id === activeId);

  const handlePinKeyDown = (e: KeyboardEvent<SVGGElement>, id: string): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveId(id);
    }
  };

  if (!steps.length || !activeStep) return null;

  return (
    <section className={styles.roadmap}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.lead}>{lead}</p>
      </div>

      <div className={styles.desktopLayout}>
        <div className={styles.mapWrapper}>
          <svg viewBox="0 0 1000 400" className={styles.svg} aria-hidden="true">
            <path d={PATH_D} className={styles.path} />
            {steps.map((step, i) => {
              const pos = pinPositions[i];
              const cx = (pos.x / 100) * 1000;
              const cy = (pos.y / 100) * 400;
              const isActive = step.id === activeId;
              const isPast = activeIndex >= i;

              return (
                <g
                  key={step.id}
                  className={`${styles.roadmapPin} ${isActive ? styles.roadmapPinActive : ""}`}
                  onClick={() => setActiveId(step.id)}
                  onKeyDown={(e) => handlePinKeyDown(e, step.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Krok ${step.number}: ${step.title}`}
                  aria-pressed={isActive}
                >
                  {isActive && <circle cx={cx} cy={cy} r={46} className={styles.pinPulse} />}
                  <circle
                    className={`${styles.pinCircle} ${
                      isActive ? styles.pinCircleActive : isPast ? styles.pinCirclePast : ""
                    }`}
                    cx={cx}
                    cy={cy}
                    r={34}
                  />
                  <text
                    className={`${styles.pinNumber} ${
                      isActive ? styles.pinNumberActive : isPast ? styles.pinNumberPast : ""
                    }`}
                    x={cx}
                    y={cy - 7}
                    textAnchor="middle"
                  >
                    {step.number}
                  </text>
                  <text className={styles.pinIcon} x={cx} y={cy + 18} textAnchor="middle">
                    {step.icon}
                  </text>
                  <text
                    className={`${styles.pinLabel} ${isActive ? styles.pinLabelActive : ""}`}
                    x={cx}
                    y={cy < 100 ? cy + 64 : cy - 54}
                    textAnchor="middle"
                  >
                    {step.mapLabel}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelInner} key={activeStep.id}>
            <div className={styles.bigNum}>{activeStep.number}</div>
            <h3 className={styles.panelTitle}>{activeStep.title}</h3>
            <p className={styles.panelDesc}>{activeStep.desc}</p>
            <ul className={styles.list}>
              {activeStep.bullets.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.bullet}>→</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.dots}>
              {steps.map((step) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveId(step.id)}
                  aria-label={`Krok ${step.number}`}
                  aria-current={step.id === activeId ? "step" : undefined}
                  className={`${styles.dot} ${step.id === activeId ? styles.dotActive : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mobileList}>
        {steps.map((step) => {
          const isActive = step.id === activeId;
          return (
            <article
              key={step.id}
              className={`${styles.roadmapCard} ${isActive ? styles.roadmapCardActive : ""}`}
              onClick={() => setActiveId(step.id)}
            >
              <div className={styles.cardHead}>
                <span className={styles.cardIcon}>{step.icon}</span>
                <span className={styles.cardNum}>{step.number}</span>
                <h3 className={styles.cardTitle}>{step.title}</h3>
              </div>
              <p className={styles.cardDesc}>{step.desc}</p>
              {isActive && (
                <ul className={`${styles.list} ${styles.listMobile}`}>
                  {step.bullets.map((item) => (
                    <li key={item} className={styles.listItem}>
                      <span className={styles.bullet}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>

      <div className={styles.cta}>
        <a href={ctaHref} className={styles.ctaBtn}>
          {ctaLabel}
        </a>
        <span className={styles.ctaSub}>{ctaSub}</span>
      </div>
    </section>
  );
}
