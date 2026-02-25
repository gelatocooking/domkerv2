"use client";

import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import type { RiskCard } from "./types";

export function RiskSliderSection({ riskCards }: { riskCards: RiskCard[] }) {
  const riskSliderRef = useRef<HTMLDivElement | null>(null);

  const scrollRisksByOne = (direction: -1 | 1) => {
    const slider = riskSliderRef.current;
    if (!slider) return;

    const firstCard = slider.querySelector<HTMLElement>(".risk-card");
    if (!firstCard) return;

    const styles = getComputedStyle(slider);
    const gapValue = parseFloat(styles.columnGap || styles.gap || "0");
    const step = firstCard.offsetWidth + gapValue;

    slider.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="risk-slider-section" aria-labelledby="risk-slider-heading">
      <div className="risk-slider-shell">
        <div className="risk-slider-head">
          <p className="risk-slider-kicker">RYZYKA I JAK JE GASIMY</p>
          <h2 id="risk-slider-heading">Jak radzimy sobie z kluczowymi wyzwaniami?</h2>
          <p>
            Pokazujemy najczęstsze ryzyka na końcówce budowy i dokładnie jak je domykamy, żebyś nie
            musiał gasić pożarów po swojej stronie.
          </p>
        </div>

        <div className="risk-slider-controls" aria-label="Nawigacja slidera ryzyk">
          <button
            type="button"
            className="risk-nav-btn"
            aria-label="Poprzednie ryzyko"
            onClick={() => scrollRisksByOne(-1)}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="risk-nav-btn"
            aria-label="Następne ryzyko"
            onClick={() => scrollRisksByOne(1)}
          >
            <ChevronRight />
          </button>
        </div>

        <div className="risk-slider-track" ref={riskSliderRef}>
          {riskCards.map((card, index) => (
            <article className="risk-card" key={`${card.pill}-${index + 1}`}>
              <span className="risk-card-pill">{card.pill}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="risk-card-effect">
                <span className="risk-effect-icon" aria-hidden="true">
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

