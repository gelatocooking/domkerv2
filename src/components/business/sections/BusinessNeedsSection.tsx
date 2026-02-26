import { CalendarClock, ClipboardCheck, CircleHelp, ShieldCheck } from "lucide-react";
import Link from "next/link";
import buttonStyles from "@/styles/Button.module.css";
import styles from "./Business.module.css";
import base from "@/styles/SectionBase.module.css";
import type { BusinessNeedPillar } from "../types";

type Props = {
  pillars: BusinessNeedPillar[];
};

const pillarIcons = [CalendarClock, ShieldCheck, ClipboardCheck];

export function BusinessNeedsSection({ pillars }: Props) {
  return (
    <section className={`${base.section} ${styles["business-section"]}`} aria-labelledby="done-heading">
      <div className={`${base.head} ${styles["services-head"]}`}>
        <p className={`${base.eyebrow} ${styles["services-eyebrow"]}`}>CO FIRMY CHCĄ MIEĆ ZAŁATWIONE</p>
        <h2 id="done-heading" className={base.title}>W B2B wygrywa przewidywalność, a nie sam opis zakresu</h2>
      </div>

      <div className={styles["business-pillars-grid"]}>
        {pillars.map((pillar, index) => {
          const Icon = pillarIcons[index] ?? CircleHelp;
          return (
            <article key={pillar.title} className={styles["business-pillar-card"]}>
              <span className={styles["business-pillar-icon"]} aria-hidden="true">
                <Icon />
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.meta}</p>
            </article>
          );
        })}
      </div>

      <div className={styles["business-pillars-actions"]}>
        <Link className={`${buttonStyles.btn} ${buttonStyles.btnPrimary}`} href="/kontakt">
          Wyślij komplet informacji - wrócimy z widełkami
        </Link>
        <a className={`${buttonStyles.btn} ${buttonStyles.btnSecondary}`} href="tel:+48502992002">
          Albo szybciej: +48 502 992 002
        </a>
      </div>
    </section>
  );
}
