import Link from "next/link";
import type { BusinessSectionHeaderContent, BusinessShortcutCard } from "../types";
import styles from "./Business.module.css";
import base from "@/styles/SectionBase.module.css";

type Props = {
  cards: BusinessShortcutCard[];
  content: BusinessSectionHeaderContent;
};

export function BusinessComplementarySection({ cards, content }: Props) {
  return (
    <section className={`${base.section} ${styles["business-section"]}`} aria-labelledby="complementary-heading">
      <div className={`${base.head} ${styles["services-head"]}`}>
        <p className={`${base.eyebrow} ${styles["services-eyebrow"]}`}>{content.eyebrow}</p>
        <h2 id="complementary-heading" className={base.title}>
          {content.heading}
        </h2>
        {content.lead && <p className={base.lead}>{content.lead}</p>}
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
