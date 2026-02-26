import type {
  BusinessHeroContent,
  BusinessNeedPillar,
  BusinessProblemCard,
  BusinessScenarioCard,
  BusinessShortcutCard,
} from "./types";

export const businessHero: BusinessHeroContent = {
  label: "B2B - Budowy - Sieci - Lokale handlowe",
  title: "Sprzątanie dla firm i sieci handlowych - pod termin i standard",
  lead:
    "To nie jest opis jednej usługi. To hub współpracy B2B: wybierasz scenariusz, sprawdzasz jak prowadzimy realizacje operacyjnie i przechodzisz do właściwej podstrony.",
  ctaPrimaryLabel: "Odbierz ofertę do zatwierdzenia (PDF/HTML)",
  ctaPrimaryHref: "/kontakt",
  ctaSecondaryLabel: "Potrzebujesz szybkiego kontaktu? +48 502 992 002",
  ctaSecondaryHref: "tel:+48502992002",
  ctaInlineLabel: "Wolisz krótko? Wyślij minimum danych",
  ctaInlineHref: "#minimum-danych",
  photoPoints: [
    { text: "Po budowie / po remoncie / odbiory", className: "point-1" },
    { text: "Sieci i wiele lokalizacji", className: "point-2" },
    { text: "Stała obsługa i utrzymanie standardu", className: "point-3" },
    { text: "Witryny i szybkie uruchomienie", className: "point-4" },
  ],
};

export const businessUseCards: BusinessShortcutCard[] = [
  {
    pill: "NA JUŻ",
    title: "Masz odbiór lub termin krytyczny",
    description: "Po budowie, po remoncie, przed otwarciem punktu.",
    linkLabel: "/sprzatanie-po-budowie",
    linkHref: "/sprzatanie-po-budowie",
  },
  {
    id: "siec",
    pill: "SIECI",
    title: "Masz wiele lokalizacji",
    description: "Powtarzalny standard i centralna koordynacja.",
    linkLabel: "#siec",
    linkHref: "#scenario-networks",
  },
  {
    pill: "CYKLICZNIE",
    title: "Chcesz stałą obsługę",
    description: "Biura oraz lokale handlowo-usługowe.",
    linkLabel: "/utrzymanie-czystosci",
    linkHref: "/utrzymanie-czystosci",
  },
  {
    pill: "WITRYNY",
    title: "Szukasz obsługi witryn",
    description: "Abonament i szybka wycena ze zdjęć.",
    linkLabel: "/mycie-okien-i-witryn",
    linkHref: "/mycie-okien-i-witryn",
  },
];

export const businessAudienceCards: BusinessProblemCard[] = [
  {
    tone: "tone-1",
    pill: "GENERALNY WYKONAWCA",
    title: "Budowa i odbiory",
    description: "Kierownicy budów oraz biuro: zakupy, zaopatrzenie, koordynacja wykonawców.",
  },
  {
    tone: "tone-2",
    pill: "SIECI",
    title: "Ekspansja w wielu miastach",
    description: "Jedna jakość w wielu lokalizacjach i ciągłość działania bez losowości ekip.",
  },
  {
    tone: "tone-3",
    pill: "OBIEKTY KOMERCYJNE",
    title: "Powtarzalny standard",
    description: "Biura i lokale handlowo-usługowe, gdzie liczy się przewidywalność i kontrola.",
  },
];

export const businessNeedsPillars: BusinessNeedPillar[] = [
  {
    title: "Termin i okno wejścia",
    meta: "po godzinach / między robotami",
  },
  {
    title: "Bezpieczeństwo wykończeń",
    meta: "posadzki / szkło / armatura",
  },
  {
    title: "Kontrola i domknięcie",
    meta: "checklista / protokół / zdjęcia",
  },
];

export const businessScenarioCards: BusinessScenarioCard[] = [
  {
    pill: "PO BUDOWIE / REFIT",
    title: "Termin, odbiór, przekazanie obiektu",
    description:
      "Ustawiamy priorytety i okno wejścia tak, żeby realizacja zaczęła i skończyła się dokładnie wtedy, kiedy potrzebujesz.",
    links: [
      { label: "Kierownik budowy", href: "/sprzatanie-po-budowie/kierownik-budowy" },
      { label: "Biuro / koordynacja / office", href: "/sprzatanie-po-budowie/zarzadca-nieruchomosci" },
      { label: "Strona usługi", href: "/sprzatanie-po-budowie" },
    ],
    effect: "Zespoły i sprzęt dobieramy pod termin i warunki wejścia.",
  },
  {
    id: "scenario-networks",
    pill: "SIECI - WIELE LOKALIZACJI",
    title: "Powtarzalność i ciągłość serwisu",
    description:
      "Problemem sieci rzadko jest to, czy da się posprzątać. Problemem jest jedna jakość i brak losowości ekip.",
    checklist: [
      "koordynacja realizacji i jeden punkt kontaktu",
      "backup ludzi/sprzętu i checklisty kontroli",
      "procedury obiektu: wejścia, poufność, rejestry",
      "mycie witryn dla sieci: do 800 miesięcznie, logistyka po naszej stronie",
      "start prac: nawet w 3 dni po potwierdzeniu zakresu",
    ],
    links: [
      { label: "Zapytaj o obsługę sieci", href: "/kontakt" },
      { label: "Jak to wygląda po stronie koordynacji", href: "/sprzatanie-po-budowie/zarzadca-nieruchomosci" },
      { label: "Wyślij miasta + liczbę lokali/witryn + częstotliwość", href: "/kontakt" },
    ],
  },
  {
    pill: "CYKLICZNE UTRZYMANIE",
    title: "Biura i lokale handlowo-usługowe",
    description:
      "Stała obsługa działa wtedy, kiedy jest poukładana: harmonogram, standard, kontrola i zastępstwa.",
    links: [
      { label: "Utrzymanie czystości", href: "/utrzymanie-czystosci" },
      { label: "Biura", href: "/utrzymanie-czystosci/biura" },
      { label: "Lokale handlowo-usługowe", href: "/utrzymanie-czystosci/lokale-handlowo-uslugowe" },
    ],
    effect: "Checklisty + kontrola + zastępstwa = ciągłość standardu.",
  },
];

export const businessComplementaryCards: BusinessShortcutCard[] = [
  {
    pill: "WITRYNY",
    title: "Mycie witryn",
    description: "Szybka wycena ze zdjęć, abonament, a dla sieci możliwy ryczałt.",
    linkLabel: "/mycie-okien-i-witryn",
    linkHref: "/mycie-okien-i-witryn",
  },
  {
    pill: "POSADZKI B2B",
    title: "Maszynowe czyszczenie",
    description: "Technologia dobierana pod typ posadzki i poziom zabrudzeń.",
    linkLabel: "/maszynowe-czyszczenie-posadzek",
    linkHref: "/maszynowe-czyszczenie-posadzek",
  },
  {
    pill: "DEMINERALIZOWANA WODA",
    title: "Mycie przeszkleń",
    description: "Opcja dostępna w wybranych realizacjach i zakresach.",
    linkLabel: "Ustalane na etapie oferty",
    linkHref: "",
  },
  {
    pill: "WYKŁADZINY",
    title: "Pranie wielkopowierzchniowe",
    description: "Dla biur i firm przy realizacjach utrzymaniowych oraz po pracach.",
    linkLabel: "Zakres B2B",
    linkHref: "",
  },
];

export const businessSpeedChips = [
  "Odpowiedź: do 15 minut w godzinach biura",
  "Widełki: tego samego dnia po komplecie danych",
  "Start realizacji: nawet w 3 dni",
  "Sieci: SLA do 24h po akceptacji zakresu i warunków wejścia",
];

export const businessFormalCards: BusinessProblemCard[] = [
  {
    tone: "tone-1",
    pill: "BHP I KADRY",
    title: "Legalne zatrudnienie",
    description: "Szkolenia BHP i przygotowanie zespołu do pracy na obiekcie.",
  },
  {
    tone: "tone-2",
    pill: "ANALIZA ZAGROŻEŃ",
    title: "Przed startem realizacji",
    description: "Ocena ryzyk i ustalenie kolejności prac pod konkretny obiekt.",
  },
  {
    tone: "tone-3",
    pill: "PROTOKOŁY",
    title: "Odbiór, zdjęcia, usterki",
    description: "Materiał do zamknięcia tematu i przekazania dalej w organizacji.",
  },
  {
    tone: "tone-4",
    pill: "OC",
    title: "Polisa odpowiedzialności",
    description: "Do końca marca 2026: 500 tys. zł, od kwietnia 2026: 2 mln zł.",
  },
  {
    tone: "tone-5",
    pill: "NDA I REJESTRY",
    title: "Poufność i procedury obiektu",
    description: "Umowa NDA i rejestr wejść, jeśli obiekt tego wymaga.",
  },
  {
    tone: "tone-6",
    pill: "ROZLICZENIA",
    title: "Umowa i faktura VAT",
    description: "Jasne formalności B2B po stronie realizacji i zamknięcia zlecenia.",
  },
];

export const businessLimitsBullets = [
  "Nie bierzemy tematów wymagających wejścia 100 osób jednocześnie",
  "Nie wykonujemy posadzek",
  "Przy dużym lub nietypowym zakresie mówimy wprost, jak to ugryźć",
];

export const businessReferencesCards: BusinessShortcutCard[] = [
  {
    pill: "CASE STUDY",
    title: "Realizacje",
    description: "Zobacz konkretne wdrożenia i zakresy usług.",
    linkLabel: "/realizacje",
    linkHref: "/realizacje",
  },
  {
    pill: "REFERENCJE",
    title: "Opinie i rekomendacje",
    description: "Sprawdź jak firmy oceniają współpracę operacyjną.",
    linkLabel: "/referencje",
    linkHref: "/referencje",
  },
];

export const businessProcessSteps = [
  {
    title: "Kontakt",
    text: "Telefon lub e-mail. W godzinach biura odpowiadamy zwykle do 15 minut.",
  },
  {
    title: "Minimum danych",
    text: "Po komplecie informacji wracamy tego samego dnia z widełkami i kolejnym krokiem.",
  },
  {
    title: "Wizja",
    text: "Przy większych tematach potwierdzamy technologie, kolejność i warunki wejścia.",
  },
  {
    title: "Wejście",
    text: "BHP, analiza zagrożeń, zabezpieczenia i przygotowanie zespołu pod obiekt.",
  },
  {
    title: "Realizacja + kontrola",
    text: "Checklisty i odbiór wewnętrzny zanim przekażemy realizację dalej w organizacji.",
  },
  {
    title: "Finalizacja",
    text: "Protokoły odbioru i zdjęcia, rozliczenie, domknięcie tematu bez poprawek.",
  },
];

