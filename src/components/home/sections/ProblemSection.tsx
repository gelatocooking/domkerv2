import type { ProblemCard } from "../types";
import styles from "./ProblemSection.module.css";

export function ProblemSection({ problemCards }: { problemCards: ProblemCard[] }) {
  return (
    <section className={styles["problem-section"]} aria-labelledby="problem-heading">
      <div className={styles["problem-head"]}>
        <p className={styles["problem-eyebrow"]}>CZY TO BRZMI ZNAJOMO?</p>
        <h2 id="problem-heading">Rozwiązujemy problemy, z którymi mierzy się Twoja firma</h2>
        <p className={styles["problem-sublead"]}>
          Widzieliśmy to setki razy - od codziennych frustracji po bariery, które hamują tempo i
          przewidywalność realizacji.
        </p>
      </div>

      <div className={styles["problem-grid"]} aria-label="Najczęstsze ryzyka">
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
