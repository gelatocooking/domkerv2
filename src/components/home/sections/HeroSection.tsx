import { CircleCheck } from "lucide-react";
import Link from "next/link";
import buttonStyles from "@/styles/Button.module.css";
import styles from "./HeroSection.module.css";
import type { HeroSectionContent } from "../types";

type Props = {
  chips: string[];
  content: HeroSectionContent;
};

export function HeroSection({ chips, content }: Props) {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["hero-left"]}>
        <p className={styles["hero-label"]}>{content.label}</p>
        <h1>{content.title}</h1>
        <p className={styles["hero-lead"]}>{content.lead}</p>

        <div className={styles["hero-cta-row"]}>
          <Link
            className={`${buttonStyles.btn} ${buttonStyles.btnPrimary} ${buttonStyles.heroMainCta}`}
            href={content.primaryCtaHref}
          >
            {content.primaryCtaLabel}
          </Link>
          <a className={`${buttonStyles.btn} ${buttonStyles.btnSecondary}`} href={content.secondaryCtaHref}>
            {content.secondaryCtaLabel}
          </a>
        </div>

        <p className={styles["trust-strip"]}>{content.trustStrip}</p>
      </div>

      <aside className={styles["hero-right"]}>
        <div className={styles["hero-photo"]} aria-label={content.photoAriaLabel}>
          <div className={styles["photo-overlay"]} aria-hidden="true" />
          <div className={styles["hero-photo-points"]} aria-label={content.pointsAriaLabel}>
            {chips.map((chip, index) => (
              <article
                key={chip}
                className={`${styles["photo-point-card"]} ${styles[`point-${index + 1}`]}`}
              >
                <span className={styles["photo-point-icon"]} aria-hidden="true">
                  <CircleCheck />
                </span>
                <p>{chip}</p>
              </article>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
