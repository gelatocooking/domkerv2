import type { ProblemCard, ProblemSectionContent } from "../types";
import styles from "./ProblemSection.module.css";

type Props = {
  problemCards: ProblemCard[];
  content: ProblemSectionContent;
};

export function ProblemSection({ problemCards, content }: Props) {
  return (
    <section className={styles["problem-section"]} aria-labelledby="problem-heading">
      <div className={styles["problem-head"]}>
        <p className={styles["problem-eyebrow"]}>{content.eyebrow}</p>
        <h2 id="problem-heading">{content.heading}</h2>
        <p className={styles["problem-sublead"]}>{content.lead}</p>
      </div>

      <div className={styles["problem-grid"]} aria-label={content.gridAriaLabel}>
        {problemCards.map((card, index) => (
          <article
            key={card.pill}
            className={`${styles["problem-card"]} ${styles[`tone-${index + 1}`]}`}
          >
            <span className={styles["problem-pill"]}>{card.pill}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
