import styles from "./Business.module.css";
import base from "@/styles/SectionBase.module.css";

type Props = {
  bullets: string[];
};

export function BusinessLimitsSection({ bullets }: Props) {
  return (
    <section className={`${base.section} ${styles["business-section"]}`} aria-labelledby="limits-heading">
      <div className={`${base.head} ${styles["services-head"]}`}>
        <p className={`${base.eyebrow} ${styles["services-eyebrow"]}`}>MINIMUM LOGISTYCZNE</p>
        <h2 id="limits-heading" className={base.title}>
          Mówimy wprost, żeby nie tracić Twojego czasu
        </h2>
      </div>

      <article className={styles["speed-card"]}>
        <div className={`${styles["speed-grid"]} ${styles["speed-grid-three"]}`}>
          {bullets.map((item) => (
            <div key={item} className={styles["speed-item"]}>
              <span className={styles["speed-icon"]} aria-hidden="true">
                ✓
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
