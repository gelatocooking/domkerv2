import Link from "next/link";
import buttonStyles from "@/styles/Button.module.css";
import styles from "./Business.module.css";
import base from "@/styles/SectionBase.module.css";

export function BusinessOutroSection() {
  return (
    <section className={`${base.section} ${styles["business-section"]} ${styles["business-outro"]}`} aria-labelledby="end-heading">
      <div className={`${base.head} ${styles["services-head"]}`}>
        <p className={`${base.eyebrow} ${styles["services-eyebrow"]}`}>NA KONIEC</p>
        <h2 id="end-heading" className={base.title}>Potrzebujesz oferty do zatwierdzenia (PDF/HTML)?</h2>
        <p className={base.lead}>
          Napisz lub zadzwon. Wrocimy z widelkami i jasnym kolejnym krokiem, gotowym do przekazania
          przelozonemu, zarzadowi lub dzialowi zakupow.
        </p>
      </div>
      <div className={`${styles["service-detail-actions"]} ${styles["business-outro-actions"]}`}>
        <Link className={`${buttonStyles.btn} ${buttonStyles.btnPrimary}`} href="/kontakt">
          Przejdz do kontaktu
        </Link>
        <a className={`${buttonStyles.btn} ${buttonStyles.btnSecondary}`} href="tel:+48502992002">
          +48 502 992 002
        </a>
      </div>
    </section>
  );
}
