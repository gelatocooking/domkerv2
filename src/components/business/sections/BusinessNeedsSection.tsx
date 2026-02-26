"use client";

import { CalendarClock, ClipboardCheck, CircleHelp, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import buttonStyles from "@/styles/Button.module.css";
import styles from "./Business.module.css";
import base from "@/styles/SectionBase.module.css";
import type { BusinessNeedPillar, BusinessNeedsSectionContent } from "../types";

type Props = {
  pillars: BusinessNeedPillar[];
  content: BusinessNeedsSectionContent;
};

const pillarIcons = [CalendarClock, ShieldCheck, ClipboardCheck];

function useIntersectionObserver(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export function BusinessNeedsSection({ pillars, content }: Props) {
  const { ref: sectionRef, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={sectionRef}
      className={`${base.section} ${styles["business-section"]} ${styles["business-needs-animated"]} ${isVisible ? styles["business-needs-visible"] : ""}`}
      aria-labelledby="done-heading"
    >
      <div className={`${base.head} ${styles["services-head"]} ${styles["needs-head"]}`}>
        <p className={`${base.eyebrow} ${styles["services-eyebrow"]}`}>{content.eyebrow}</p>
        <h2 id="done-heading" className={base.title}>
          {content.heading}
        </h2>
        {content.lead && <p className={base.lead}>{content.lead}</p>}
      </div>

      <div className={styles["business-pillars-grid"]}>
        {pillars.map((pillar, index) => {
          const Icon = pillarIcons[index] ?? CircleHelp;
          return (
            <article
              key={pillar.title}
              className={`${styles["business-pillar-card"]} ${styles["business-pillar-card--animated"]}`}
              style={{ "--card-index": index } as React.CSSProperties}
            >
              <span className={`${styles["business-pillar-icon"]} ${styles["business-pillar-icon--interactive"]}`} aria-hidden="true">
                <Icon />
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.meta}</p>
              <span className={styles["business-pillar-card__line"]} aria-hidden="true" />
            </article>
          );
        })}
      </div>

      <div className={`${styles["business-pillars-actions"]} ${styles["needs-actions"]}`}>
        <Link className={`${buttonStyles.btn} ${buttonStyles.btnPrimary}`} href={content.primaryCtaHref}>
          {content.primaryCtaLabel}
        </Link>
        <a className={`${buttonStyles.btn} ${buttonStyles.btnSecondary}`} href={content.secondaryCtaHref}>
          {content.secondaryCtaLabel}
        </a>
      </div>
    </section>
  );
}