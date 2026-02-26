import Link from "next/link";
import type { BusinessShortcutCard } from "../types";
import styles from "./Business.module.css";
import base from "@/styles/SectionBase.module.css";

type Props = {
  cards: BusinessShortcutCard[];
};

export function BusinessUseSection({ cards }: Props) {
  return (
    <section className={`${base.section} ${styles["business-section"]}`} aria-labelledby="use-page-heading">
      <div className={`${base.head} ${styles["services-head"]}`}>
        <p className={`${base.eyebrow} ${styles["services-eyebrow"]}`}>JAK UZYC TEJ STRONY</p>
        <h2 id="use-page-heading" className={base.title}>Wybierz scenariusz i przejdz do wlasciwej sciezki</h2>
        <p className={base.lead}>To strona-hub. Tu ustawiasz kierunek i przechodzisz do konkretnej podstrony.</p>
      </div>

      <div className={`${styles["services-shortcut-grid"]} ${styles["business-shortcut-clean"]}`}>
        {cards.map((card) => (
          <article className={styles["services-shortcut-card"]} id={card.id} key={`${card.pill}-${card.title}`}>
            <span className={styles["services-shortcut-pill"]}>{card.pill}</span>
            <div className={styles["services-shortcut-heading"]}>
              <h3>{card.title}</h3>
            </div>
            <p>{card.description}</p>
            {card.linkHref.startsWith("#") ? (
              <a href={card.linkHref}>{card.linkLabel}</a>
            ) : (
              <Link href={card.linkHref}>{card.linkLabel}</Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
