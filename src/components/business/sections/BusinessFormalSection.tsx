import type { BusinessProblemCard, BusinessSectionHeaderContent } from "../types";
import styles from "./Business.module.css";

type Props = {
  cards: BusinessProblemCard[];
  content: BusinessSectionHeaderContent;
};

export function BusinessFormalSection({ cards, content }: Props) {
  return (
    <section className={styles["problem-section"]} aria-labelledby="formal-heading">
      <div className={styles["problem-head"]}>
        <p className={styles["problem-eyebrow"]}>{content.eyebrow}</p>
        <h2 id="formal-heading">{content.heading}</h2>
        {content.lead && <p className={styles["problem-sublead"]}>{content.lead}</p>}
      </div>
      <div className={styles["problem-grid"]}>
        {cards.map((card) => (
          <article className={`${styles["problem-card"]} ${styles[card.tone]}`} key={`${card.pill}-${card.title}`}>
            <span className={styles["problem-pill"]}>{card.pill}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
