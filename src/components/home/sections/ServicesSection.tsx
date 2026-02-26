"use client";

import Link from "next/link";
import { useState } from "react";
import buttonStyles from "@/styles/Button.module.css";
import base from "@/styles/SectionBase.module.css";
import { ServiceNavIcon } from "../ServiceNavIcon";
import styles from "./ServicesSection.module.css";
import type { ServiceEntry, ServiceId, ServicesSectionContent } from "../types";

type Props = {
  servicesCatalog: ServiceEntry[];
  content: ServicesSectionContent;
};

export function ServicesSection({ servicesCatalog, content }: Props) {
  const [activeServiceId, setActiveServiceId] = useState<ServiceId>("post-build");
  const activeService =
    servicesCatalog.find((service) => service.id === activeServiceId) ?? servicesCatalog[0];

  return (
    <section
      className={`${base.section} ${styles["services-section"]}`}
      aria-labelledby="services-detailed-heading"
    >
      <div className={`${base.head} ${styles["services-head"]}`}>
        <p className={`${base.eyebrow} ${styles["services-eyebrow"]}`}>{content.eyebrow}</p>
        <h2 id="services-detailed-heading" className={base.title}>
          {content.heading}
        </h2>
        <p className={base.lead}>{content.lead}</p>
      </div>

      <div className={styles["services-layout"]}>
        <div className={styles["services-switcher"]} role="tablist" aria-label={content.tablistAriaLabel}>
          {servicesCatalog.map((service) => (
            <button
              key={service.id}
              type="button"
              role="tab"
              aria-selected={activeServiceId === service.id}
              className={`${styles["service-switch-item"]} ${
                activeServiceId === service.id ? styles["is-active"] : ""
              }`}
              onClick={() => setActiveServiceId(service.id)}
            >
              <span className={styles["service-switch-icon"]}>
                <ServiceNavIcon id={service.id} />
              </span>
              <span className={styles["service-switch-copy"]}>
                <strong>
                  {service.navTitle}
                  {service.id === "post-build" && (
                    <span className={styles["service-switch-badge"]}>{content.popularBadgeLabel}</span>
                  )}
                </strong>
                <small>{service.navMeta}</small>
              </span>
            </button>
          ))}
        </div>

        <article className={styles["service-detail-card"]} role="tabpanel" aria-live="polite">
          <h3>{activeService.title}</h3>
          <p>{activeService.description}</p>

          <div className={styles["service-proof-chips"]}>
            {activeService.proofChips.slice(0, 3).map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>

          <div className={styles["service-detail-actions"]}>
            <Link
              className={`${buttonStyles.btn} ${buttonStyles.btnPrimary}`}
              href={activeService.primaryCtaHref}
            >
              {activeService.primaryCtaLabel}
            </Link>
          </div>

          <div className={styles["service-audience"]}>
            <p>{content.audienceLabel}</p>
            <div className={styles["service-audience-segments"]}>
              {activeService.audienceLinks.map((audience) => (
                <Link key={audience.href} href={audience.href}>
                  {audience.label}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
