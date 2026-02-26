import type { BusinessProblemCard } from "../types";
import styles from "./Business.module.css";

type Props = {
  cards: BusinessProblemCard[];
};

export function BusinessAudienceSection({ cards }: Props) {
  return (
    <section className={styles["problem-section"]} aria-labelledby="audience-heading">
      <div className={styles["problem-head"]}>
        <p className={styles["problem-eyebrow"]}>DLA KOGO TO JEST</p>
        <h2 id="audience-heading">Dla firm, ktore chca zdjac z siebie koordynacje realizacji</h2>
        <p className={styles["problem-sublead"]}>
          Jesli potrzebujesz wykonawcy, ktory bierze odpowiedzialnosc operacyjna po swojej stronie,
          jestes w dobrym miejscu.
        </p>
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
