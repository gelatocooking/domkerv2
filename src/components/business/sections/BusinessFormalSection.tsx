import type { BusinessProblemCard } from "../types";
import styles from "./Business.module.css";

type Props = {
  cards: BusinessProblemCard[];
};

export function BusinessFormalSection({ cards }: Props) {
  return (
    <section className={styles["problem-section"]} aria-labelledby="formal-heading">
      <div className={styles["problem-head"]}>
        <p className={styles["problem-eyebrow"]}>FORMALNOSCI I ODPOWIEDZIALNOSC</p>
        <h2 id="formal-heading">To zapewniamy i dokumentujemy po naszej stronie</h2>
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
