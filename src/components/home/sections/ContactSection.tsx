"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ContactSection.module.css";

const timeWindowOptions = ["Dzis", "Jutro", "W tym tygodniu"];

export function ContactSection() {
  const [timeWindow, setTimeWindow] = useState<string>(timeWindowOptions[0]);
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
      ref={sectionRef}
      className={`${styles["contact-section"]} ${isVisible ? styles["is-visible"] : ""}`}
      aria-labelledby="contact-heading"
    >
      <div className={styles["contact-head"]}>
        <p className={styles["contact-eyebrow"]}>KONTAKT</p>
        <h2 id="contact-heading">Pilny termin? Zostaw szybkie zgloszenie</h2>
        <p>Zbieramy minimum danych i wracamy tego samego dnia z konkretna propozycja.</p>
      </div>

      <div className={styles["contact-layout"]}>
        <aside className={styles["contact-hero-card"]} aria-label="Szybkie podsumowanie procesu">
          <p className={styles["contact-hero-kicker"]}>MINIMUM DANYCH</p>
          <h3>Krotki formularz. Konkret tego samego dnia.</h3>
          <p>Podajesz 3-4 informacje. Wracamy z widelkami, terminem i oferta gotowa do zatwierdzenia.</p>
          <ul className={styles["contact-hero-points"]}>
            <li>Widelki + termin po briefie</li>
            <li>Oferta PDF/HTML do wyslania dalej</li>
            <li>Minimum danych. Jasny kolejny krok.</li>
          </ul>
        </aside>

        <div className={styles["contact-form-card"]}>
          <form className={styles["contact-form"]} onSubmit={(event) => event.preventDefault()}>
            <label className={styles["contact-field"]}>
              <span>Telefon</span>
              <input type="tel" name="phone" autoComplete="tel" required />
            </label>

            <label className={styles["contact-field"]}>
              <span>Lokalizacja (miasto)</span>
              <input type="text" name="city" autoComplete="address-level2" required />
            </label>

            <fieldset className={styles["contact-fieldset"]}>
              <legend>Okno wejscia</legend>
              <div className={styles["contact-window-options"]}>
                {timeWindowOptions.map((option) => (
                  <label key={option} className={styles["contact-window-option"]}>
                    <input
                      type="radio"
                      name="window"
                      value={option}
                      checked={timeWindow === option}
                      onChange={() => setTimeWindow(option)}
                      required
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className={styles["contact-consents"]}>
              <legend>Zgody i prywatnosc</legend>
              <label className={styles["consent-item"]}>
                <input type="checkbox" name="privacy_ack" required />
                <span>
                  Potwierdzam zapoznanie z <a href="/polityka-prywatnosci">Polityka prywatnosci</a>{" "}
                  i informacja o przetwarzaniu danych (RODO). *
                </span>
              </label>

              <label className={styles["consent-item"]}>
                <input type="checkbox" name="marketing_email" />
                <span>Wyrazam zgode na kontakt marketingowy e-mail (opcjonalnie).</span>
              </label>

              <label className={styles["consent-item"]}>
                <input type="checkbox" name="marketing_phone_sms" />
                <span>Wyrazam zgode na kontakt marketingowy telefoniczny/SMS (opcjonalnie).</span>
              </label>
            </fieldset>

            <button type="submit" className={styles["contact-cta"]}>
              <span>Wyslij zgloszenie</span>
              <span className={styles["contact-cta-icon"]} aria-hidden="true">
                →
              </span>
            </button>
            <p className={styles["contact-meta"]}>W godzinach biura zwykle odpisujemy do 15 minut.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
