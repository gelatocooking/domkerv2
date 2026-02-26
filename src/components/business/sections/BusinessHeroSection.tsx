import { CircleCheck } from "lucide-react";
import Link from "next/link";
import buttonStyles from "@/styles/Button.module.css";
import heroStyles from "@/components/home/sections/HeroSection.module.css";
import styles from "./Business.module.css";
import type { BusinessHeroContent } from "../types";

type Props = {
  content: BusinessHeroContent;
};

export function BusinessHeroSection({ content }: Props) {
  const titleLines = content.titleLines;

  return (
    <section className={`${heroStyles["hero-section"]} ${styles["business-hero"]}`} aria-labelledby="business-hero-title">
      <div className={`${heroStyles["hero-left"]} ${styles["business-hero-left"]}`}>
        <p className={heroStyles["hero-label"]}>{content.label}</p>
        <h1 id="business-hero-title" className={styles["business-hero-title"]}>
          {titleLines?.length ? (
            <>
              {titleLines.map((line) => (
                <span key={line} className={styles["business-hero-title-line"]}>
                  {line}
                </span>
              ))}
            </>
          ) : (
            content.title
          )}
        </h1>
        <p className={`${heroStyles["hero-lead"]} ${styles["business-hero-lead"]}`}>{content.lead}</p>

        <div className={heroStyles["hero-cta-row"]}>
          <Link className={`${buttonStyles.btn} ${buttonStyles.btnPrimary} ${buttonStyles.heroMainCta}`} href={content.ctaPrimaryHref}>
            {content.ctaPrimaryLabel}
          </Link>
          <a className={`${buttonStyles.btn} ${buttonStyles.btnSecondary}`} href={content.ctaSecondaryHref}>
            {content.ctaSecondaryLabel}
          </a>
          <a className={styles["business-inline-link"]} href={content.ctaInlineHref}>
            {content.ctaInlineLabel}
          </a>
        </div>
      </div>

      <aside className={heroStyles["hero-right"]}>
        <div className={`${heroStyles["hero-photo"]} ${styles["business-hero-photo"]}`} aria-label="Scenariusze wspolpracy B2B">
          <div className={`${heroStyles["photo-overlay"]} ${styles["business-hero-overlay"]}`} aria-hidden="true" />
          <div className={heroStyles["hero-photo-points"]} aria-label="Najczestsze scenariusze">
            {content.photoPoints.map((point) => (
              <article className={`${heroStyles["photo-point-card"]} ${heroStyles[point.className]}`} key={point.text}>
                <span className={heroStyles["photo-point-icon"]} aria-hidden="true">
                  <CircleCheck />
                </span>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
