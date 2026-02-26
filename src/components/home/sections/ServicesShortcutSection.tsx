import Link from "next/link";
import { ServiceNavIcon } from "../ServiceNavIcon";
import type { ServiceEntry, ServiceId, ServicesShortcutSectionContent } from "../types";
import styles from "./ServicesShortcutSection.module.css";

type Props = {
  servicesCatalog: ServiceEntry[];
  serviceShortcutPills: Record<ServiceId, string>;
  content: ServicesShortcutSectionContent;
};

export function ServicesShortcutSection({ servicesCatalog, serviceShortcutPills, content }: Props) {
  return (
    <section id="co-robimy" className={styles["services-shortcut"]} aria-label={content.ariaLabel}>
      <div className={styles["services-shortcut-grid"]}>
        {servicesCatalog.map((service) => (
          <article className={styles["services-shortcut-card"]} key={service.id}>
            <span className={styles["services-shortcut-pill"]}>{serviceShortcutPills[service.id]}</span>
            <div className={styles["services-shortcut-heading"]}>
              <ServiceNavIcon id={service.id} />
              <h3>{service.navTitle}</h3>
            </div>
            <p>{service.navMeta}</p>
            <Link href={service.primaryCtaHref}>{content.linkLabel}</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
