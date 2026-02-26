import Link from "next/link";
import type { BusinessShortcutCard } from "../types";
import styles from "./Business.module.css";
import base from "@/styles/SectionBase.module.css";

type Props = {
  cards: BusinessShortcutCard[];
};

export function BusinessReferencesSection({ cards }: Props) {
  return (
    <section className={`${base.section} ${styles["business-section"]}`} aria-labelledby="references-heading">
      <div className={`${base.head} ${styles["services-head"]}`}>
        <p className={`${base.eyebrow} ${styles["services-eyebrow"]}`}>DALSZE MATERIAŁY</p>
        <h2 id="references-heading" className={base.title}>Zobacz realizacje i referencje</h2>
      </div>
      <div
        className={`${styles["services-shortcut-grid"]} ${styles["business-link-grid-two"]} ${styles["business-shortcut-clean"]}`}
      >
        {cards.map((card) => (
          <article className={styles["services-shortcut-card"]} key={`${card.pill}-${card.title}`}>
            <span className={styles["services-shortcut-pill"]}>{card.pill}</span>
            <div className={styles["services-shortcut-heading"]}>
              <h3>{card.title}</h3>
            </div>
            <p>{card.description}</p>
            <Link href={card.linkHref}>{card.linkLabel}</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
