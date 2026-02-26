"use client";

import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import styles from "./RiskSliderSection.module.css";
import type { RiskCard, RiskSliderSectionContent } from "../types";

type Props = {
  riskCards: RiskCard[];
  content: RiskSliderSectionContent;
};

export function RiskSliderSection({ riskCards, content }: Props) {
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
          <p className={styles["risk-slider-kicker"]}>{content.kicker}</p>
          <h2 id="risk-slider-heading">{content.heading}</h2>
          <p>{content.lead}</p>
        </div>

        <div className={styles["risk-slider-controls"]} aria-label={content.navAriaLabel}>
          <button
            type="button"
            className={styles["risk-nav-btn"]}
            aria-label={content.prevAriaLabel}
            onClick={() => scrollRisksByOne(-1)}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className={styles["risk-nav-btn"]}
            aria-label={content.nextAriaLabel}
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
