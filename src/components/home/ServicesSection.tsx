"use client";

import Link from "next/link";
import { useState } from "react";
import { ServiceNavIcon } from "./ServiceNavIcon";
import type { ServiceEntry, ServiceId } from "./types";

export function ServicesSection({ servicesCatalog }: { servicesCatalog: ServiceEntry[] }) {
  const [activeServiceId, setActiveServiceId] = useState<ServiceId>("post-build");
  const activeService =
    servicesCatalog.find((service) => service.id === activeServiceId) ?? servicesCatalog[0];

  return (
    <section className="services-section" aria-labelledby="services-detailed-heading">
      <div className="services-head">
        <p className="services-eyebrow">NASZE USŁUGI</p>
        <h2 id="services-detailed-heading">Wybierz usługę i przejdź od problemu do decyzji</h2>
        <p>4 ścieżki - każda z jasnym zakresem, logistyką i standardem odbioru.</p>
      </div>

      <div className="services-layout">
        <div className="services-switcher" role="tablist" aria-label="Wybierz usługę">
          {servicesCatalog.map((service) => (
            <button
              key={service.id}
              type="button"
              role="tab"
              aria-selected={activeServiceId === service.id}
              className={`service-switch-item ${activeServiceId === service.id ? "is-active" : ""}`}
              onClick={() => setActiveServiceId(service.id)}
            >
              <span className="service-switch-icon">
                <ServiceNavIcon id={service.id} />
              </span>
              <span className="service-switch-copy">
                <strong>
                  {service.navTitle}
                  {service.id === "post-build" && (
                    <span className="service-switch-badge">Najczęściej wybierane</span>
                  )}
                </strong>
                <small>{service.navMeta}</small>
              </span>
            </button>
          ))}
        </div>

        <article className="service-detail-card" role="tabpanel" aria-live="polite">
          <h3>{activeService.title}</h3>
          <p>{activeService.description}</p>

          <div className="service-proof-chips">
            {activeService.proofChips.slice(0, 3).map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>

          <div className="service-detail-actions">
            <Link className="btn btn-primary" href={activeService.primaryCtaHref}>
              {activeService.primaryCtaLabel}
            </Link>
          </div>

          <div className="service-audience">
            <p>Dla kogo?</p>
            <div className="service-audience-segments">
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

