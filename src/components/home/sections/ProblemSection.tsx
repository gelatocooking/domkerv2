import type { ProblemCard } from "../types";
import styles from "./ProblemSection.module.css";

export function ProblemSection({ problemCards }: { problemCards: ProblemCard[] }) {
  return (
    <section className={styles["problem-section"]} aria-labelledby="problem-heading">
      <div className={styles["problem-head"]}>
        <p className={styles["problem-eyebrow"]}>CZY TO BRZMI ZNAJOMO?</p>
        <h2 id="problem-heading">Rozwiazujemy problemy, z ktorymi mierzy sie Twoja firma</h2>
        <p className={styles["problem-sublead"]}>
          Widzielismy to setki razy - od codziennych frustracji po bariery, ktore hamuja tempo i
          przewidywalnosc realizacji.
        </p>
      </div>

      <div className={styles["problem-grid"]} aria-label="Najczestsze ryzyka">
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
