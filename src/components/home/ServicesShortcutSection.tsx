import Link from "next/link";
import { ServiceNavIcon } from "./ServiceNavIcon";
import type { ServiceEntry, ServiceId } from "./types";

type Props = {
  servicesCatalog: ServiceEntry[];
  serviceShortcutPills: Record<ServiceId, string>;
};

export function ServicesShortcutSection({ servicesCatalog, serviceShortcutPills }: Props) {
  return (
    <section id="co-robimy" className="services-shortcut" aria-label="Skrót usług">
      <div className="services-shortcut-grid">
        {servicesCatalog.map((service) => (
          <article className="services-shortcut-card" key={service.id}>
            <span className="services-shortcut-pill">{serviceShortcutPills[service.id]}</span>
            <div className="services-shortcut-heading">
              <ServiceNavIcon id={service.id} />
              <h3>{service.navTitle}</h3>
            </div>
            <p>{service.navMeta}</p>
            <Link href={service.primaryCtaHref}>Zobacz -&gt;</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

