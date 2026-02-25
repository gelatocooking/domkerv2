import Link from "next/link";

export function HeroSection({ chips }: { chips: string[] }) {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <p className="hero-label">B2B • Budowy / Remonty • Sieci • Cała Polska</p>
        <h1>Sprzątanie pod odbiory i przekazanie obiektu</h1>
        <p className="hero-lead">
          Działamy jak wykonawca: terminy, standard i wiele lokalizacji. Chronimy nowe
          wykończenia i zostawiamy obiekt gotowy do odbioru.
        </p>

        <div className="hero-cta-row">
          <Link className="btn btn-primary hero-main-cta" href="/kontakt">
            Wypełnij formularz kontaktowy
          </Link>
          <a className="btn btn-secondary" href="tel:+48000000000">
            Zadzwoń - minimum danych
          </a>
        </div>

        <p className="trust-strip">Odpowiedź do 15 min • SLA 24h • Wycena dziś • Start 3 dni*</p>
      </div>

      <aside className="hero-right">
        <div className="hero-photo" aria-label="Zdjęcie realizacji">
          <div className="photo-overlay" aria-hidden="true" />
          <div className="hero-photo-points" aria-label="Wyróżniki operacyjne">
            {chips.map((chip, index) => (
              <article key={chip} className={`photo-point-card point-${index + 1}`}>
                <span className="photo-point-icon" aria-hidden="true">
                  ✓
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

