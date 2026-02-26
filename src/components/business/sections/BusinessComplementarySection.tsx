import Link from "next/link";
import type { BusinessShortcutCard } from "../types";
import styles from "./Business.module.css";
import base from "@/styles/SectionBase.module.css";

type Props = {
  cards: BusinessShortcutCard[];
};

export function BusinessComplementarySection({ cards }: Props) {
  return (
    <section className={`${base.section} ${styles["business-section"]}`} aria-labelledby="complementary-heading">
      <div className={`${base.head} ${styles["services-head"]}`}>
        <p className={`${base.eyebrow} ${styles["services-eyebrow"]}`}>USLUGI UZUPELNIAJACE</p>
        <h2 id="complementary-heading" className={base.title}>Uslugi, ktore czesto finalizuja temat</h2>
        <p className={base.lead}>Wybierz usluge uzupelniajaca i przejdz do wlasciwej podstrony.</p>
      </div>

      <div className={`${styles["services-shortcut-grid"]} ${styles["business-shortcut-clean"]}`}>
        {cards.map((card) => (
          <article className={styles["services-shortcut-card"]} key={`${card.pill}-${card.title}`}>
            <span className={styles["services-shortcut-pill"]}>{card.pill}</span>
            <div className={styles["services-shortcut-heading"]}>
              <h3>{card.title}</h3>
            </div>
            <p>{card.description}</p>
            {card.linkHref ? (
              <Link href={card.linkHref}>{card.linkLabel}</Link>
            ) : (
              <span className={styles["business-static-link"]}>{card.linkLabel}</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
