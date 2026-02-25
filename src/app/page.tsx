"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const chips = [
  "Do 800 witryn/mies.",
  "Ochrona nowych wykończeń",
  "Raportowanie po realizacji",
  "Stałe ekipy i koordynacja",
];

type ServiceId = "post-build" | "glass" | "floors" | "maintenance";

type ServiceEntry = {
  id: ServiceId;
  navTitle: string;
  navMeta: string;
  title: string;
  description: string;
  proofChips: string[];
  primaryCtaLabel: string;
  primaryCtaHref: string;  audienceLinks: { label: string; href: string }[];
};

const servicesCatalog: ServiceEntry[] = [
  {
    id: "post-build",
    navTitle: "Sprzątanie pod odbiór / po budowie / refit",
    navMeta: "Budowy, refity, przekazania obiektów",
    title: "Sprzątanie po budowie i pod odbiór",
    description:
      "Obsługujemy odbiory i otwarcia pod presją terminów. Sprzątamy tak, żeby obiekt był gotowy do przekazania bez ryzyka dla nowych powierzchni.",
    proofChips: ["Cała Polska", "Do 5000 m2/dzień*", "Protokoły + zdjęcia", "Koordynator na miejscu"],
    primaryCtaLabel: "Dowiedz się więcej o sprzątaniu pod odbiór",
    primaryCtaHref: "/sprzatanie-po-budowie",
    audienceLinks: [
      { label: "Kierownik budowy", href: "/sprzatanie-po-budowie/kierownik-budowy" },
      {
        label: "Koordynacja sieci / zarządca",
        href: "/sprzatanie-po-budowie/zarzadca-nieruchomosci",
      },
    ],
  },
  {
    id: "glass",
    navTitle: "Mycie witryn i okien",
    navMeta: "Sieci handlowe i pojedyncze lokale",
    title: "Mycie witryn i okien dla firm",
    description:
      "Szybka wycena na podstawie zdjęć i logistyka po naszej stronie. Dla sieci: stałe trasy, harmonogram i raportowanie wykonania.",
    proofChips: ["Wycena ze zdjęć", "Raport po realizacji", "Skala: sieci i lokale", "Cała Polska"],
    primaryCtaLabel: "Zobacz usługę mycia witryn i okien",
    primaryCtaHref: "/mycie-okien-i-witryn",
    audienceLinks: [
      { label: "Kierownik budowy", href: "/sprzatanie-po-budowie/kierownik-budowy" },
      {
        label: "Zarządca / sieć",
        href: "/sprzatanie-po-budowie/zarzadca-nieruchomosci",
      },
    ],
  },
  {
    id: "floors",
    navTitle: "Maszynowe czyszczenie posadzek",
    navMeta: "Obiekty komercyjne i powierzchnie specjalne",
    title: "Maszynowe czyszczenie posadzek (B2B)",
    description:
      "Doczyszczamy posadzki w obiektach komercyjnych. Dobieramy technologię do typu powierzchni i zabrudzeń, łącznie z odplamianiem.",
    proofChips: ["Dobór technologii", "Bezpiecznie dla powierzchni", "Odplamianie", "Obiekty komercyjne"],
    primaryCtaLabel: "Dowiedz się więcej o czyszczeniu posadzek",
    primaryCtaHref: "/maszynowe-czyszczenie-posadzek",
    audienceLinks: [
      { label: "Kierownik budowy", href: "/sprzatanie-po-budowie/kierownik-budowy" },
      {
        label: "Zarządca / sieć",
        href: "/sprzatanie-po-budowie/zarzadca-nieruchomosci",
      },
    ],
  },
  {
    id: "maintenance",
    navTitle: "Cykliczne utrzymanie czystości",
    navMeta: "Biura, retail i multi-lokalizacje",
    title: "Cykliczne utrzymanie czystości (B2B)",
    description:
      "Stały standard sprzątania biur i lokali handlowo-usługowych. Zapewniamy kontrolę jakości, zastępstwa i ciągłość realizacji.",
    proofChips: ["Stały standard", "Kontrola jakości", "Zastępstwa", "Sieci / multi-lokalizacje"],
    primaryCtaLabel: "Dowiedz się więcej o utrzymaniu czystości",
    primaryCtaHref: "/utrzymanie-czystosci",
    audienceLinks: [
      { label: "Kierownik budowy", href: "/sprzatanie-po-budowie/kierownik-budowy" },
      {
        label: "Zarządca / sieć",
        href: "/sprzatanie-po-budowie/zarzadca-nieruchomosci",
      },
    ],
  },
];

const problemCards = [
  {
    pill: "TERMINY",
    title: "Smugi i pył wychodzą na ostatniej prostej",
    description: "W świetle dziennym wychodzą poprawki, a odbiór jest blisko.",
  },
  {
    pill: "KOORDYNACJA",
    title: "Sprzątanie między robotami blokuje ekipy",
    description: "Bez planu stref robi się przepychanka i opóźnienia.",
  },
  {
    pill: "RYZYKO",
    title: "Nowe powierzchnie łatwo uszkodzić złą technologią",
    description: "Posadzki, szyby i armatura wymagają właściwego procesu.",
  },
  {
    pill: "PODWYKONAWCA",
    title: "Gdy termin się przesuwa, problem spada na Ciebie",
    description: "Nawet jeśli to nie Twoja wina, odpowiedzialność zostaje.",
  },
  {
    pill: "STANDARD",
    title: "Odbiór ma checklistę, nie ogólną ocenę czystości",
    description: "Liczy się rezultat pod kontrolę inwestora i otwarcie obiektu.",
  },
  {
    pill: "KONTROLA",
    title: "Bez raportu nie masz pewności co jest domknięte",
    description: "Potrzebujesz jasnego: co zrobione, co zostaje i na kiedy.",
  },
];

const serviceMenu = [
  "Sprzątanie po budowie",
  "Mycie okien i witryn",
  "Maszynowe czyszczenie posadzek",
  "Utrzymanie czystości",
];

const serviceShortcutPills: Record<ServiceId, string> = {
  "post-build": "PO BUDOWIE",
  glass: "WITRYNY",
  floors: "POSADZKI",
  maintenance: "UTRZYMANIE",
};

const riskCards = [
  {
    pill: "LOGISTYKA",
    title: "Przesunięcia ekip i chaos na obiekcie",
    description:
      "Końcówka budowy bywa nieprzewidywalna - ekipy schodzą, ktoś blokuje dostęp, zmieniają się godziny.",
    effect:
      "Efekt? Jedno okno realizacji + potwierdzanie ustaleń + koordynator w trakcie prac -> mniej przestojów i mniej gaszenia pożarów po stronie Zamawiającego.",
  },
  {
    pill: "FORMALNOŚCI",
    title: "Ograniczenia dostępu i procedury obiektu",
    description:
      "Rejestry wejść, NDA, zasady BHP i zgody administracji potrafią zablokować start, jeśli nie są ustawione wcześniej.",
    effect:
      "Efekt? NDA, rejestr wejść i procedury wdrażamy przed startem -> szybsze wejście na obiekt i brak blokad w dniu realizacji.",
  },
  {
    pill: "ODBIÓR",
    title: "Poprawki na końcu i niespodzianki przy odbiorze",
    description:
      "Najczęściej wychodzą na wierzch detale: smugi, pył i niedoczyszczone miejsca w łazienkach lub na oknach.",
    effect:
      "Efekt? Odbiór wewnętrzny checklistą + protokoły i zdjęcia -> mniej czasu Zamawiającego na wytykanie poprawek i ponowne odbiory.",
  },
  {
    pill: "JAKOŚĆ",
    title: "Usterki odkryte w trakcie prac",
    description:
      "Sprzątanie czasem ujawnia rysy, odpryski i problemy po ekipach. Bez jasnej ścieżki łatwo o późniejsze spory.",
    effect:
      "Efekt? Protokół usterek + szybka informacja do Zleceniodawcy -> jasna decyzja co dalej i brak sporów kto to zrobił.",
  },
  {
    pill: "ZASOBY",
    title: "Ryzyko braku ludzi lub sprzętu",
    description:
      "Na finiszu liczy się termin. Dlatego planujemy nie tylko optymistycznie, ale też z realnym zabezpieczeniem.",
    effect:
      "Efekt? Backup do każdego zlecenia -> większa pewność terminu, nawet gdy wysypie się logistyka.",
  },
];

function ServiceNavIcon({ id }: { id: ServiceId }) {
  const iconProps = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.45,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (id === "post-build") {
    return (
      <svg {...iconProps}>
        <path d="M4 17.5h16" />
        <path d="M6 17.5V10l2.7-2.3h6.6L18 10v7.5" />
        <path d="M10.7 7.7V5.4h2.6v2.3" />
        <path d="M8.8 12.3h6.4" />
      </svg>
    );
  }

  if (id === "maintenance") {
    return (
      <svg {...iconProps}>
        <path d="M6 18h12" />
        <path d="M8.2 18V10.6l1.8-2h4L15.8 10.6V18" />
        <path d="M10.2 12.1h3.6" />
        <path d="M5.1 8.3h13.8" />
      </svg>
    );
  }

  if (id === "floors") {
    return (
      <svg {...iconProps}>
        <rect x="5.2" y="5.2" width="13.6" height="13.6" rx="2.4" />
        <path d="M8.2 8.9h7.6M8.2 12h7.6M8.2 15.1h7.6" />
        <path d="M12 5.2v13.6" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <path d="M4.5 16.8h15" />
      <path d="M6.7 16.8V9.6L9 7.4h6l2.3 2.2v7.2" />
      <path d="M9.3 11.8h5.4" />
      <path d="M10.2 7.4 12 5.8l1.8 1.6" />
    </svg>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState<ServiceId>("post-build");
  const riskSliderRef = useRef<HTMLDivElement | null>(null);
  const activeService =
    servicesCatalog.find((service) => service.id === activeServiceId) ?? servicesCatalog[0];

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const scrollRisksByOne = (direction: -1 | 1) => {
    const slider = riskSliderRef.current;
    if (!slider) return;

    const firstCard = slider.querySelector<HTMLElement>(".risk-card");
    if (!firstCard) return;

    const styles = getComputedStyle(slider);
    const gapValue = parseFloat(styles.columnGap || styles.gap || "0");
    const step = firstCard.offsetWidth + gapValue;

    slider.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="home-page">
      <header className={`site-header ${isMenuOpen ? "is-menu-open" : ""}`}>
        <div className="header-shell">
          <Link className="brand" href="/" onClick={closeMenu}>
            <Image src="/domker-logo.png" alt="Domker" width={144} height={42} priority />
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            Menu
          </button>

          <nav className="main-nav" id="main-navigation" aria-label="Nawigacja główna">
            <Link href="/" onClick={closeMenu}>
              Strona główna
            </Link>

            <div className={`nav-dropdown ${isServicesOpen ? "is-open" : ""}`}>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
                onClick={() => setIsServicesOpen((prev) => !prev)}
              >
                Usługi dla firm
                <span aria-hidden="true">▾</span>
              </button>
              <div className="dropdown-menu">
                {serviceMenu.map((item) => (
                  <Link key={item} href="/kontakt" onClick={closeMenu}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/referencje" onClick={closeMenu}>
              Referencje
            </Link>
            <Link href="/realizacje" onClick={closeMenu}>
              Realizacje
            </Link>
            <Link href="/cennik" onClick={closeMenu}>
              Cennik
            </Link>
            <Link href="/faq" onClick={closeMenu}>
              FAQ
            </Link>
            <Link href="/kontakt" onClick={closeMenu}>
              Kontakt
            </Link>
          </nav>

          <Link className="header-cta" href="/kontakt" onClick={closeMenu}>
            Bezpłatna konsultacja
          </Link>
        </div>
      </header>

      <main className="home-shell">
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

            <p className="trust-strip">
              Odpowiedź do 15 min • SLA 24h • Wycena dziś • Start 3 dni*
            </p>
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

        <section className="problem-section" aria-labelledby="problem-heading">
          <div className="problem-head">
            <p className="problem-eyebrow">CZY TO BRZMI ZNAJOMO?</p>
            <h2 id="problem-heading">Rozwiązujemy problemy, z którymi mierzy się Twoja firma</h2>
            <p className="problem-sublead">
              Widzieliśmy to setki razy - od codziennych frustracji po bariery, które hamują tempo
              i przewidywalność realizacji.
            </p>
          </div>

          <div className="problem-grid" aria-label="Najczęstsze ryzyka">
            {problemCards.map((card, index) => (
              <article key={card.pill} className={`problem-card tone-${index + 1}`}>
                <span className="problem-pill">{card.pill}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

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

        <section className="risk-slider-section" aria-labelledby="risk-slider-heading">
          <div className="risk-slider-shell">
            <div className="risk-slider-head">
              <p className="risk-slider-kicker">RYZYKA I JAK JE GASIMY</p>
              <h2 id="risk-slider-heading">Jak radzimy sobie z kluczowymi wyzwaniami?</h2>
              <p>
                Pokazujemy najczęstsze ryzyka na końcówce budowy i dokładnie jak je domykamy,
                żebyś nie musiał gasić pożarów po swojej stronie.
              </p>
            </div>

            <div className="risk-slider-controls" aria-label="Nawigacja slidera ryzyk">
              <button
                type="button"
                className="risk-nav-btn"
                aria-label="Poprzednie ryzyko"
                onClick={() => scrollRisksByOne(-1)}
              >
                ‹
              </button>
              <button
                type="button"
                className="risk-nav-btn"
                aria-label="Następne ryzyko"
                onClick={() => scrollRisksByOne(1)}
              >
                ›
              </button>
            </div>

            <div className="risk-slider-track" ref={riskSliderRef}>
              {riskCards.map((card, index) => (
                <article className="risk-card" key={`${card.pill}-${index + 1}`}>
                  <span className="risk-card-pill">{card.pill}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="risk-card-effect">
                    <span className="risk-effect-icon" aria-hidden="true">
                      ✓
                    </span>
                    <span>{card.effect}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
