import { Check } from "lucide-react";
import styles from "./Business.module.css";
import base from "@/styles/SectionBase.module.css";
import type { BusinessSectionHeaderContent } from "../types";

type Props = {
  bullets: string[];
  content: BusinessSectionHeaderContent;
};

export function BusinessLimitsSection({ bullets, content }: Props) {
  return (
    <section className={`${base.section} ${styles["business-section"]}`} aria-labelledby="limits-heading">
      <div className={`${base.head} ${styles["services-head"]}`}>
        <p className={`${base.eyebrow} ${styles["services-eyebrow"]}`}>{content.eyebrow}</p>
        <h2 id="limits-heading" className={base.title}>
          {content.heading}
        </h2>
        {content.lead && <p className={base.lead}>{content.lead}</p>}
      </div>

      <article className={styles["speed-card"]}>
        <div className={`${styles["speed-grid"]} ${styles["speed-grid-three"]}`}>
          {bullets.map((item) => (
            <div key={item} className={styles["speed-item"]}>
              <span className={styles["speed-icon"]} aria-hidden="true">
                <Check />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
