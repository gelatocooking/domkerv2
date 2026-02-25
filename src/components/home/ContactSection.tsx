"use client";

import { useEffect, useRef, useState } from "react";

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
      className={`contact-section ${isVisible ? "is-visible" : ""}`}
      aria-labelledby="contact-heading"
    >
      <div className="contact-head">
        <p className="contact-eyebrow">KONTAKT</p>
        <h2 id="contact-heading">Pilny termin? Zostaw szybkie zgloszenie</h2>
        <p>Zbieramy minimum danych i wracamy tego samego dnia z konkretna propozycja.</p>
      </div>

      <div className="contact-layout">
        <aside className="contact-hero-card" aria-label="Szybkie podsumowanie procesu">
          <p className="contact-hero-kicker">MINIMUM DANYCH</p>
          <h3>Krotki formularz, szybka decyzja po Twojej stronie</h3>
          <p>
            Podaj podstawowe informacje i od razu przechodzimy do konkretu: terminu wejscia,
            dostepnosci ekip i rekomendowanego planu dzialania.
          </p>
          <ul className="contact-hero-points">
            <li>Bez rozbudowanych opisow</li>
            <li>Jedno glowne CTA</li>
            <li>Kontakt tego samego dnia</li>
          </ul>
        </aside>

        <div className="contact-form-card">
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label className="contact-field">
              <span>Telefon</span>
              <input type="tel" name="phone" autoComplete="tel" required />
            </label>

            <label className="contact-field">
              <span>Lokalizacja (miasto)</span>
              <input type="text" name="city" autoComplete="address-level2" required />
            </label>

            <fieldset className="contact-fieldset">
              <legend>Okno wejscia</legend>
              <div className="contact-window-options">
                {timeWindowOptions.map((option) => (
                  <label key={option} className="contact-window-option">
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

            <button type="submit" className="contact-cta">
              <span>Wyślij zgłoszenie</span>
              <span className="contact-cta-icon" aria-hidden="true">
                →
              </span>
            </button>
            <p className="contact-meta">W godzinach biura zwykle odpisujemy do 15 minut.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
