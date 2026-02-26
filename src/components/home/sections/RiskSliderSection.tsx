"use client";

import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import styles from "./RiskSliderSection.module.css";
import type { RiskCard } from "../types";

export function RiskSliderSection({ riskCards }: { riskCards: RiskCard[] }) {
  const riskSliderRef = useRef<HTMLDivElement | null>(null);

  const scrollRisksByOne = (direction: -1 | 1) => {
    const slider = riskSliderRef.current;
    if (!slider) return;

    const firstCard = slider.querySelector<HTMLElement>(`.${styles["risk-card"]}`);
    if (!firstCard) return;

    const stylesObj = getComputedStyle(slider);
    const gapValue = parseFloat(stylesObj.columnGap || stylesObj.gap || "0");
    const step = firstCard.offsetWidth + gapValue;

    slider.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className={styles["risk-slider-section"]} aria-labelledby="risk-slider-heading">
      <div className={styles["risk-slider-shell"]}>
        <div className={styles["risk-slider-head"]}>
          <p className={styles["risk-slider-kicker"]}>RYZYKA I JAK JE GASIMY</p>
          <h2 id="risk-slider-heading">Jak radzimy sobie z kluczowymi wyzwaniami?</h2>
          <p>
            Pokazujemy najczestsze ryzyka na koncowce budowy i dokladnie jak je domykamy, zeby nie
            trzeba bylo gasic pozarow po swojej stronie.
          </p>
        </div>

        <div className={styles["risk-slider-controls"]} aria-label="Nawigacja slidera ryzyk">
          <button
            type="button"
            className={styles["risk-nav-btn"]}
            aria-label="Poprzednie ryzyko"
            onClick={() => scrollRisksByOne(-1)}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className={styles["risk-nav-btn"]}
            aria-label="Nastepne ryzyko"
            onClick={() => scrollRisksByOne(1)}
          >
            <ChevronRight />
          </button>
        </div>

        <div className={styles["risk-slider-track"]} ref={riskSliderRef}>
          {riskCards.map((card, index) => (
            <article className={styles["risk-card"]} key={`${card.pill}-${index + 1}`}>
              <span className={styles["risk-card-pill"]}>{card.pill}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className={styles["risk-card-effect"]}>
                <span className={styles["risk-effect-icon"]} aria-hidden="true">
                  <ShieldCheck />
                </span>
                <span>{card.effect}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
