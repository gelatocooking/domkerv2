import { Check } from "lucide-react";
import styles from "./Business.module.css";
import base from "@/styles/SectionBase.module.css";
import type { BusinessSpeedSectionContent } from "../types";

type Props = {
  chips: string[];
  content: BusinessSpeedSectionContent;
};

export function BusinessSpeedSection({ chips, content }: Props) {
  return (
    <section className={`${base.section} ${styles["business-section"]}`} aria-labelledby="speed-heading">
      <div className={`${base.head} ${styles["services-head"]}`}>
        <p className={`${base.eyebrow} ${styles["services-eyebrow"]}`}>{content.eyebrow}</p>
        <h2 id="speed-heading" className={base.title}>
          {content.heading}
        </h2>
        {content.lead && <p className={base.lead}>{content.lead}</p>}
      </div>

      <article className={styles["speed-card"]}>
        <div className={styles["speed-grid"]}>
          {chips.map((chip) => (
            <div key={chip} className={styles["speed-item"]}>
              <span className={styles["speed-icon"]} aria-hidden="true">
                <Check />
              </span>
              <span>{chip}</span>
            </div>
          ))}
        </div>
        <p className={styles["business-footnote"]}>{content.footnote}</p>
      </article>
    </section>
  );
}
