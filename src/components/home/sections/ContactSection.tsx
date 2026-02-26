"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ContactSection.module.css";
import type { ContactSectionContent } from "../types";

type Props = {
  sectionId?: string;
  content: ContactSectionContent;
};

export function ContactSection({ sectionId, content }: Props) {
  const initialWindow = content.form.timeWindowOptions[0] ?? "";
  const [timeWindow, setTimeWindow] = useState<string>(initialWindow);
  const selectedTimeWindow = content.form.timeWindowOptions.includes(timeWindow)
    ? timeWindow
    : initialWindow;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setIsVisible(true);
        observer.unobserve(node);
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      className={`${styles["contact-section"]} ${isVisible ? styles["is-visible"] : ""}`}
      aria-labelledby="contact-heading"
      data-no-reveal
    >
      <div className={styles["contact-head"]}>
        <p className={styles["contact-eyebrow"]}>{content.eyebrow}</p>
        <h2 id="contact-heading">{content.heading}</h2>
        <p>{content.lead}</p>
      </div>

      <div className={styles["contact-layout"]}>
        <aside className={styles["contact-hero-card"]} aria-label={content.heroAriaLabel}>
          <p className={styles["contact-hero-kicker"]}>{content.heroKicker}</p>
          <h3>{content.heroHeading}</h3>
          <p>{content.heroLead}</p>
          <ul className={styles["contact-hero-points"]}>
            {content.heroPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </aside>

        <div className={styles["contact-form-card"]}>
          <form className={styles["contact-form"]} onSubmit={(event) => event.preventDefault()}>
            <label className={styles["contact-field"]}>
              <span>{content.form.phoneLabel}</span>
              <input type="tel" name="phone" autoComplete="tel" required />
            </label>

            <label className={styles["contact-field"]}>
              <span>{content.form.cityLabel}</span>
              <input type="text" name="city" autoComplete="address-level2" required />
            </label>

            <fieldset className={styles["contact-fieldset"]}>
              <legend>{content.form.timeWindowLegend}</legend>
              <div className={styles["contact-window-options"]}>
                {content.form.timeWindowOptions.map((option) => (
                  <label key={option} className={styles["contact-window-option"]}>
                    <input
                      type="radio"
                      name="window"
                      value={option}
                      checked={selectedTimeWindow === option}
                      onChange={() => setTimeWindow(option)}
                      required
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className={styles["contact-consents"]}>
              <legend>{content.form.consentsLegend}</legend>
              <label className={styles["consent-item"]}>
                <input type="checkbox" name="privacy_ack" required />
                <span>
                  {content.form.privacyPrefix}
                  <a href="/polityka-prywatnosci">{content.form.privacyLinkLabel}</a> {content.form.privacySuffix}
                </span>
              </label>

              <label className={styles["consent-item"]}>
                <input type="checkbox" name="marketing_email" />
                <span>{content.form.marketingEmailLabel}</span>
              </label>

              <label className={styles["consent-item"]}>
                <input type="checkbox" name="marketing_phone_sms" />
                <span>{content.form.marketingPhoneSmsLabel}</span>
              </label>
            </fieldset>

            <button type="submit" className={styles["contact-cta"]}>
              <span>{content.form.submitLabel}</span>
              <span className={styles["contact-cta-icon"]} aria-hidden="true">
                {content.form.submitIconLabel}
              </span>
            </button>
            <p className={styles["contact-meta"]}>{content.form.meta}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
