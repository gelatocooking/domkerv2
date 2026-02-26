import Link from "next/link";
import buttonStyles from "@/styles/Button.module.css";
import styles from "./Business.module.css";
import base from "@/styles/SectionBase.module.css";

type Props = {
  bullets: string[];
};

export function BusinessNeedsSection({ bullets }: Props) {
  return (
    <section className={`${base.section} ${styles["business-section"]}`} aria-labelledby="done-heading">
      <div className={`${base.head} ${styles["services-head"]}`}>
        <p className={`${base.eyebrow} ${styles["services-eyebrow"]}`}>CO FIRMY CHCA MIEC ZALATWIONE</p>
        <h2 id="done-heading" className={base.title}>W B2B wygrywa przewidywalnosc, a nie sam opis zakresu</h2>
      </div>

      <article className={`${styles["service-detail-card"]} ${styles["business-detail-card"]}`}>
        <ul className={`${styles["business-bullets"]} ${styles["business-bullets-dark"]}`}>
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className={styles["service-detail-actions"]}>
          <Link className={`${buttonStyles.btn} ${buttonStyles.btnPrimary}`} href="/kontakt">
            Wyslij komplet informacji - wrocimy z widelkami
          </Link>
          <a className={`${buttonStyles.btn} ${buttonStyles.btnSecondary}`} href="tel:+48502992002">
            Albo szybciej: +48 502 992 002
          </a>
        </div>
      </article>
    </section>
  );
}
