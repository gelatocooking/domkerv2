import type {
  ContactSectionContent,
  HeroSectionContent,
  ProblemSectionContent,
  RiskSliderSectionContent,
  ServicesSectionContent,
  ServicesShortcutSectionContent,
} from "./types";

export const homeHeroContent: HeroSectionContent = {
  label: "B2B • Budowy / Remonty • Sieci • Cała Polska",
  title: "Sprzątanie pod odbiory i przekazanie obiektu",
  lead:
    "Działamy jak wykonawca: terminy, standard i wiele lokalizacji. Chronimy nowe wykończenia i zostawiamy obiekt gotowy do odbioru.",
  primaryCtaLabel: "Wypełnij formularz kontaktowy",
  primaryCtaHref: "/kontakt",
  secondaryCtaLabel: "Zadzwoń - minimum danych",
  secondaryCtaHref: "tel:+48502992002",
  trustStrip: "Odpowiedź do 15 min • SLA 24h • Wycena dziś • Start 3 dni*",
  photoAriaLabel: "Zdjęcie realizacji",
  pointsAriaLabel: "Wyróżniki operacyjne",
};

export const homeServicesShortcutContent: ServicesShortcutSectionContent = {
  ariaLabel: "Skrót usług",
  linkLabel: "Zobacz ->",
};

export const homeProblemContent: ProblemSectionContent = {
  eyebrow: "CZY TO BRZMI ZNAJOMO?",
  heading: "Rozwiązujemy problemy, z którymi mierzy się Twoja firma",
  lead:
    "Widzieliśmy to setki razy - od codziennych frustracji po bariery, które hamują tempo i przewidywalność realizacji.",
  gridAriaLabel: "Najczęstsze ryzyka",
};

export const homeServicesContent: ServicesSectionContent = {
  eyebrow: "NASZE USŁUGI",
  heading: "Wybierz usługę i przejdź od problemu do decyzji",
  lead: "4 ścieżki - każda z jasnym zakresem, logistyką i standardem odbioru.",
  tablistAriaLabel: "Wybierz usługę",
  popularBadgeLabel: "Najczęściej wybierane",
  audienceLabel: "Dla kogo?",
};

export const homeRiskSliderContent: RiskSliderSectionContent = {
  kicker: "RYZYKA I JAK JE GASIMY",
  heading: "Jak radzimy sobie z kluczowymi wyzwaniami?",
  lead:
    "Pokazujemy najczęstsze ryzyka na końcówce budowy i dokładnie jak je domykamy, żeby nie trzeba było gasić pożarów po swojej stronie.",
  navAriaLabel: "Nawigacja slidera ryzyk",
  prevAriaLabel: "Poprzednie ryzyko",
  nextAriaLabel: "Następne ryzyko",
};

export const homeContactContent: ContactSectionContent = {
  eyebrow: "KONTAKT",
  heading: "Pilny termin? Zostaw szybkie zgłoszenie",
  lead: "Zbieramy minimum danych i wracamy tego samego dnia z konkretną propozycją.",
  heroAriaLabel: "Szybkie podsumowanie procesu",
  heroKicker: "MINIMUM DANYCH",
  heroHeading: "Krótki formularz. Konkret tego samego dnia.",
  heroLead: "Podajesz 3-4 informacje. Wracamy z widełkami, terminem i ofertą gotową do zatwierdzenia.",
  heroPoints: [
    "Widełki + termin po briefie",
    "Oferta PDF/HTML do wysłania dalej",
    "Minimum danych. Jasny kolejny krok.",
  ],
  form: {
    phoneLabel: "Telefon",
    cityLabel: "Lokalizacja (miasto)",
    timeWindowLegend: "Okno wejścia",
    timeWindowOptions: ["Dziś", "Jutro", "W tym tygodniu"],
    consentsLegend: "Zgody i prywatność",
    privacyPrefix: "Potwierdzam zapoznanie z ",
    privacyLinkLabel: "Polityką prywatności",
    privacySuffix: " i informacją o przetwarzaniu danych (RODO). *",
    marketingEmailLabel: "Wyrażam zgodę na kontakt marketingowy e-mail (opcjonalnie).",
    marketingPhoneSmsLabel: "Wyrażam zgodę na kontakt marketingowy telefoniczny/SMS (opcjonalnie).",
    submitLabel: "Wyślij zgłoszenie",
    submitIconLabel: "›",
    meta: "W godzinach biura zwykle odpisujemy do 15 minut.",
  },
};
