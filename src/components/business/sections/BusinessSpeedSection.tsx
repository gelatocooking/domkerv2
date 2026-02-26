import styles from "./Business.module.css";
import base from "@/styles/SectionBase.module.css";

type Props = {
  chips: string[];
};

export function BusinessSpeedSection({ chips }: Props) {
  return (
    <section className={`${base.section} ${styles["business-section"]}`} aria-labelledby="speed-heading">
      <div className={`${base.head} ${styles["services-head"]}`}>
        <p className={`${base.eyebrow} ${styles["services-eyebrow"]}`}>TEMPO DZIAŁANIA</p>
        <h2 id="speed-heading" className={base.title}>Jak szybko działamy</h2>
      </div>

      <article className={styles["speed-card"]}>
        <div className={styles["speed-grid"]}>
          {chips.map((chip) => (
            <div key={chip} className={styles["speed-item"]}>
              <span className={styles["speed-icon"]} aria-hidden="true">
                ✓
              </span>
              <span>{chip}</span>
            </div>
          ))}
        </div>
        <p className={styles["business-footnote"]}>
          SLA do 24h dotyczy uruchomienia i koordynacji realizacji po potwierdzeniu zakresu,
          warunków wejścia i przyjęciu zlecenia.
        </p>
      </article>
    </section>
  );
}
