import { CircleCheck } from "lucide-react";
import Link from "next/link";
import buttonStyles from "@/styles/Button.module.css";
import styles from "./HeroSection.module.css";

export function HeroSection({ chips }: { chips: string[] }) {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["hero-left"]}>
        <p className={styles["hero-label"]}>B2B • Budowy / Remonty • Sieci • Cala Polska</p>
        <h1>Sprzatanie pod odbiory i przekazanie obiektu</h1>
        <p className={styles["hero-lead"]}>
          Dzialamy jak wykonawca: terminy, standard i wiele lokalizacji. Chronimy nowe wykonczenia i
          zostawiamy obiekt gotowy do odbioru.
        </p>

        <div className={styles["hero-cta-row"]}>
          <Link
            className={`${buttonStyles.btn} ${buttonStyles.btnPrimary} ${buttonStyles.heroMainCta}`}
            href="/kontakt"
          >
            Wypelnij formularz kontaktowy
          </Link>
          <a className={`${buttonStyles.btn} ${buttonStyles.btnSecondary}`} href="tel:+48000000000">
            Zadzwon - minimum danych
          </a>
        </div>

        <p className={styles["trust-strip"]}>Odpowiedz do 15 min • SLA 24h • Wycena dzis • Start 3 dni*</p>
      </div>

      <aside className={styles["hero-right"]}>
        <div className={styles["hero-photo"]} aria-label="Zdjecie realizacji">
          <div className={styles["photo-overlay"]} aria-hidden="true" />
          <div className={styles["hero-photo-points"]} aria-label="Wyrozniki operacyjne">
            {chips.map((chip, index) => (
              <article
                key={chip}
                className={`${styles["photo-point-card"]} ${styles[`point-${index + 1}`]}`}
              >
                <span className={styles["photo-point-icon"]} aria-hidden="true">
                  <CircleCheck />
                </span>
                <p>{chip}</p>
              </article>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
