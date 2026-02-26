import Link from "next/link";
import buttonStyles from "@/styles/Button.module.css";
import styles from "./Business.module.css";
import base from "@/styles/SectionBase.module.css";
import type { BusinessOutroContent } from "../types";

type Props = {
  content: BusinessOutroContent;
};

export function BusinessOutroSection({ content }: Props) {
  return (
    <section
      className={`${base.section} ${styles["business-section"]} ${styles["business-outro"]}`}
      aria-labelledby="end-heading"
    >
      <div className={`${base.head} ${styles["services-head"]}`}>
        <p className={`${base.eyebrow} ${styles["services-eyebrow"]}`}>{content.eyebrow}</p>
        <h2 id="end-heading" className={base.title}>
          {content.heading}
        </h2>
        {content.lead && <p className={base.lead}>{content.lead}</p>}
      </div>
      <div className={`${styles["service-detail-actions"]} ${styles["business-outro-actions"]}`}>
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
