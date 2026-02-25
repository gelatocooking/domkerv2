"use client";

import { useEffect, useRef, useState } from "react";

type Step = {
  title: string;
  text?: string;
};

type Props = {
  steps?: Step[];
};

const defaultSteps: Step[] = [
  { title: "Kontakt", text: "Wybierasz kanal. W godzinach biura odpowiadamy do 15 minut." },
  { title: "Minimum danych", text: "Zbieramy tylko to, co potrzebne do widelki i nastepnego kroku." },
  {
    title: "Rozpoznanie / wizja",
    text: "Przy wiekszych zleceniach potwierdzamy technologie i czas na obiekcie.",
  },
  {
    title: "Start i przygotowanie",
    text: "Szkolenie, analiza ryzyk, kolejnosc prac i zabezpieczenia.",
  },
  {
    title: "Realizacja + kontrola",
    text: "Odbior wewnetrzny checklista zanim powiemy gotowe.",
  },
  { title: "Odbior i domkniecie", text: "Protokoly + zdjecia, rozliczenie i koniec tematu." },
];

export function TimelineSection({ steps = defaultSteps }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!steps.length) return;

    const updateActive = () => {
      const viewportCenter = window.innerHeight * 0.45;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((node, index) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex((prev) => (prev === closestIndex ? prev : closestIndex));
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        updateActive();
        rafRef.current = null;
      });
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps.length]);

  return (
    <section className="timeline-section" aria-labelledby="timeline-heading">
      <div className="timeline-head">
        <p className="timeline-eyebrow">JAK DZIALAMY</p>
        <h2 id="timeline-heading">Jak zamawiasz usluge i jak dowozimy efekt</h2>
        <p className="timeline-sub">
          Od pierwszego kontaktu do protokolu odbioru - przewidywalnie i bez chaosu.
        </p>
      </div>

      <div className="timeline-trust">
        Odpowiedz do 15 min • Protokoly i zdjecia • Odbior checklista
      </div>

      <div className="timeline-steps" role="list" aria-label="Kroki procesu">
        <span className="timeline-line" aria-hidden="true" />
        {steps.map((step, index) => {
          const number = String(index + 1).padStart(2, "0");
          const isActive = index === activeIndex;
          const isVisible = index <= activeIndex;

          return (
            <div
              key={step.title}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              className={`timeline-step ${isActive ? "is-active" : ""} ${
                isVisible ? "is-visible" : ""
              }`}
              role="listitem"
            >
              <span className="timeline-dot" aria-hidden="true" />
              <span className="timeline-copy">
                <span className="timeline-number">{number}</span>
                <strong>{step.title}</strong>
                {step.text && <small>{step.text}</small>}
              </span>
            </div>
          );
        })}
      </div>

      <div className="timeline-wave" aria-hidden="true" />
    </section>
  );
}
