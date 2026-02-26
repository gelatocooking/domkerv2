import { CircleCheck } from "lucide-react";
import Link from "next/link";
import type { BusinessScenarioCard } from "../types";
import styles from "./Business.module.css";
import base from "@/styles/SectionBase.module.css";

type Props = {
  cards: BusinessScenarioCard[];
};

export function BusinessScenarioSection({ cards }: Props) {
  return (
    <section className={`${base.section} ${styles["business-section"]}`} aria-labelledby="scenario-heading">
      <div className={`${base.head} ${styles["services-head"]}`}>
        <p className={`${base.eyebrow} ${styles["services-eyebrow"]}`}>WYBIERZ SCENARIUSZ</p>
        <h2 id="scenario-heading" className={base.title}>Dopasuj ścieżkę do typu realizacji</h2>
      </div>

      <div className={styles["business-scenario-grid"]}>
        {cards.map((card) => (
          <article className={styles["risk-card"]} id={card.id} key={`${card.pill}-${card.title}`}>
            <span className={styles["risk-card-pill"]}>{card.pill}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            {card.checklist && (
              <ul className={styles["business-list-compact"]}>
                {card.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            <div className={styles["business-links"]}>
              {card.links.map((item) => (
                <Link href={item.href ?? "/"} key={`${item.label}-${item.href}`}>
                  {item.label}
                </Link>
              ))}
            </div>
            {card.effect && (
              <div className={styles["risk-card-effect"]}>
                <span className={styles["risk-effect-icon"]} aria-hidden="true">
                  <CircleCheck />
                </span>
                <span>{card.effect}</span>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
