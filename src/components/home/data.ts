import type { ProblemCard, RiskCard, ServiceEntry, ServiceId } from "./types";

export const chips = [
  "Do 800 witryn/mies.",
  "Ochrona nowych wykończeń",
  "Raportowanie po realizacji",
  "Stałe ekipy i koordynacja",
];

export const servicesCatalog: ServiceEntry[] = [
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
      { label: "Zarządca / sieć", href: "/sprzatanie-po-budowie/zarzadca-nieruchomosci" },
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
      { label: "Zarządca / sieć", href: "/sprzatanie-po-budowie/zarzadca-nieruchomosci" },
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
      { label: "Zarządca / sieć", href: "/sprzatanie-po-budowie/zarzadca-nieruchomosci" },
    ],
  },
];

export const problemCards: ProblemCard[] = [
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

export const serviceMenu = [
  "Sprzątanie po budowie",
  "Mycie okien i witryn",
  "Maszynowe czyszczenie posadzek",
  "Utrzymanie czystości",
];

export const serviceShortcutPills: Record<ServiceId, string> = {
  "post-build": "PO BUDOWIE",
  glass: "WITRYNY",
  floors: "POSADZKI",
  maintenance: "UTRZYMANIE",
};

export const riskCards: RiskCard[] = [
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


