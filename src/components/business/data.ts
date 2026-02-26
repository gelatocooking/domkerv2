import type {
  BusinessHeroContent,
  BusinessProblemCard,
  BusinessScenarioCard,
  BusinessShortcutCard,
} from "./types";

export const businessHero: BusinessHeroContent = {
  label: "B2B - Budowy - Sieci - Lokale handlowe",
  title: "Sprzatanie dla firm i sieci handlowych - pod termin i standard",
  lead:
    "To nie jest opis jednej uslugi. To hub wspolpracy B2B: wybierasz scenariusz, sprawdzasz jak prowadzimy realizacje operacyjnie i przechodzisz do wlasciwej podstrony.",
  ctaPrimaryLabel: "Odbierz oferte do zatwierdzenia (PDF/HTML)",
  ctaPrimaryHref: "/kontakt",
  ctaSecondaryLabel: "Potrzebujesz szybkiego kontaktu? +48 502 992 002",
  ctaSecondaryHref: "tel:+48502992002",
  ctaInlineLabel: "Wolisz krotko? Wyslij minimum danych",
  ctaInlineHref: "#minimum-danych",
  photoPoints: [
    { text: "Po budowie / po remoncie / odbiory", className: "point-1" },
    { text: "Sieci i wiele lokalizacji", className: "point-2" },
    { text: "Stala obsluga i utrzymanie standardu", className: "point-3" },
    { text: "Witryny i szybkie uruchomienie", className: "point-4" },
  ],
};

export const businessUseCards: BusinessShortcutCard[] = [
  {
    pill: "NA JUZ",
    title: "Masz odbior lub termin krytyczny",
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
    title: "Chcesz stala obsluge",
    description: "Biura oraz lokale handlowo-uslugowe.",
    linkLabel: "/utrzymanie-czystosci",
    linkHref: "/utrzymanie-czystosci",
  },
  {
    pill: "WITRYNY",
    title: "Szukasz obslugi witryn",
    description: "Abonament i szybka wycena ze zdjec.",
    linkLabel: "/mycie-okien-i-witryn",
    linkHref: "/mycie-okien-i-witryn",
  },
];

export const businessAudienceCards: BusinessProblemCard[] = [
  {
    tone: "tone-1",
    pill: "GENERALNY WYKONAWCA",
    title: "Budowa i odbiory",
    description: "Kierownicy budow oraz biuro: zakupy, zaopatrzenie, koordynacja wykonawcow.",
  },
  {
    tone: "tone-2",
    pill: "SIECI",
    title: "Ekspansja w wielu miastach",
    description: "Jedna jakosc w wielu lokalizacjach i ciaglosc dzialania bez losowosci ekip.",
  },
  {
    tone: "tone-3",
    pill: "OBIEKTY KOMERCYJNE",
    title: "Powtarzalny standard",
    description: "Biura i lokale handlowo-uslugowe, gdzie liczy sie przewidywalnosc i kontrola.",
  },
];

export const businessNeedsBullets = [
  "wejscie w konkretnym oknie, takze po godzinach i miedzy robotami",
  "bezpieczne czyszczenie nowych wykonczen: podlogi, szklo, armatura",
  "oferta gotowa do przekazania dalej bez 5 rund doprecyzowan",
  "jeden standard w wielu lokalizacjach: zakres, checklisty, kontrola, zastepstwa",
  "material do domkniecia tematu: protokoly odbioru i zdjecia",
];

export const businessScenarioCards: BusinessScenarioCard[] = [
  {
    pill: "PO BUDOWIE / REFIT",
    title: "Termin, odbior, przekazanie obiektu",
    description:
      "Ustawiamy priorytety i okno wejscia tak, zeby realizacja zaczela i skonczyla sie dokladnie wtedy, kiedy potrzebujesz.",
    links: [
      { label: "Kierownik budowy", href: "/sprzatanie-po-budowie/kierownik-budowy" },
      { label: "Biuro / koordynacja / office", href: "/sprzatanie-po-budowie/zarzadca-nieruchomosci" },
      { label: "Strona uslugi", href: "/sprzatanie-po-budowie" },
    ],
    effect: "Zespoly i sprzet dobieramy pod termin i warunki wejscia.",
  },
  {
    id: "scenario-networks",
    pill: "SIECI - WIELE LOKALIZACJI",
    title: "Powtarzalnosc i ciaglosc serwisu",
    description:
      "Problemem sieci rzadko jest to, czy da sie posprzatac. Problemem jest jedna jakosc i brak losowosci ekip.",
    checklist: [
      "koordynacja realizacji i jeden punkt kontaktu",
      "backup ludzi/sprzetu i checklisty kontroli",
      "procedury obiektu: wejscia, poufnosc, rejestry",
      "mycie witryn dla sieci: do 800 miesiecznie, logistyka po naszej stronie",
      "start prac: nawet w 3 dni po potwierdzeniu zakresu",
    ],
    links: [
      { label: "Zapytaj o obsluge sieci", href: "/kontakt" },
      { label: "Jak to wyglada po stronie koordynacji", href: "/sprzatanie-po-budowie/zarzadca-nieruchomosci" },
      { label: "Wyslij miasta + liczbe lokali/witryn + czestotliwosc", href: "/kontakt" },
    ],
  },
  {
    pill: "CYKLICZNE UTRZYMANIE",
    title: "Biura i lokale handlowo-uslugowe",
    description:
      "Stala obsluga dziala wtedy, kiedy jest poukladana: harmonogram, standard, kontrola i zastepstwa.",
    links: [
      { label: "Utrzymanie czystosci", href: "/utrzymanie-czystosci" },
      { label: "Biura", href: "/utrzymanie-czystosci/biura" },
      { label: "Lokale handlowo-uslugowe", href: "/utrzymanie-czystosci/lokale-handlowo-uslugowe" },
    ],
    effect: "Checklisty + kontrola + zastepstwa = ciaglosc standardu.",
  },
];

export const businessComplementaryCards: BusinessShortcutCard[] = [
  {
    pill: "WITRYNY",
    title: "Mycie witryn",
    description: "Szybka wycena ze zdjec, abonament, a dla sieci mozliwy ryczalt.",
    linkLabel: "/mycie-okien-i-witryn",
    linkHref: "/mycie-okien-i-witryn",
  },
  {
    pill: "POSADZKI B2B",
    title: "Maszynowe czyszczenie",
    description: "Technologia dobierana pod typ posadzki i poziom zabrudzen.",
    linkLabel: "/maszynowe-czyszczenie-posadzek",
    linkHref: "/maszynowe-czyszczenie-posadzek",
  },
  {
    pill: "DEMIRALIZOWANA WODA",
    title: "Mycie przeszklien",
    description: "Opcja dostepna w wybranych realizacjach i zakresach.",
    linkLabel: "Ustalane na etapie oferty",
    linkHref: "",
  },
  {
    pill: "WYKLADZINY",
    title: "Pranie wielkopowierzchniowe",
    description: "Dla biur i firm przy realizacjach utrzymaniowych oraz po pracach.",
    linkLabel: "Zakres B2B",
    linkHref: "",
  },
];

export const businessSpeedChips = [
  "Odpowiedz: do 15 minut w godzinach biura",
  "Widelki: tego samego dnia po komplecie danych",
  "Start realizacji: nawet w 3 dni",
  "Sieci: SLA do 24h po akceptacji zakresu i warunkow wejscia",
];

export const businessFormalCards: BusinessProblemCard[] = [
  {
    tone: "tone-1",
    pill: "BHP I KADRY",
    title: "Legalne zatrudnienie",
    description: "Szkolenia BHP i przygotowanie zespolu do pracy na obiekcie.",
  },
  {
    tone: "tone-2",
    pill: "ANALIZA ZAGROZEN",
    title: "Przed startem realizacji",
    description: "Ocena ryzyk i ustalenie kolejnosci prac pod konkretny obiekt.",
  },
  {
    tone: "tone-3",
    pill: "PROTOKOLY",
    title: "Odbior, zdjecia, usterki",
    description: "Material do zamkniecia tematu i przekazania dalej w organizacji.",
  },
  {
    tone: "tone-4",
    pill: "OC",
    title: "Polisa odpowiedzialnosci",
    description: "Do konca marca 2026: 500 tys. zl, od kwietnia 2026: 2 mln zl.",
  },
  {
    tone: "tone-5",
    pill: "NDA I REJESTRY",
    title: "Poufnosc i procedury obiektu",
    description: "Umowa NDA i rejestr wejsc, jesli obiekt tego wymaga.",
  },
  {
    tone: "tone-6",
    pill: "ROZLICZENIA",
    title: "Umowa i faktura VAT",
    description: "Jasne formalnosci B2B po stronie realizacji i zamkniecia zlecenia.",
  },
];

export const businessLimitsBullets = [
  "Nie bierzemy tematow wymagajacych wejscia 100 osob jednoczesnie",
  "Nie wykonujemy posadzek",
  "Przy duzym lub nietypowym zakresie mowimy wprost, jak to ugryzc",
];

export const businessReferencesCards: BusinessShortcutCard[] = [
  {
    pill: "CASE STUDY",
    title: "Realizacje",
    description: "Zobacz konkretne wdrozenia i zakresy uslug.",
    linkLabel: "/realizacje",
    linkHref: "/realizacje",
  },
  {
    pill: "REFERENCJE",
    title: "Opinie i rekomendacje",
    description: "Sprawdz jak firmy oceniaja wspolprace operacyjna.",
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
    text: "Po komplecie informacji wracamy tego samego dnia z widelkami i kolejnym krokiem.",
  },
  {
    title: "Wizja",
    text: "Przy wiekszych tematach potwierdzamy technologie, kolejnosc i warunki wejscia.",
  },
  {
    title: "Wejscie",
    text: "BHP, analiza zagrozen, zabezpieczenia i przygotowanie zespolu pod obiekt.",
  },
  {
    title: "Realizacja + kontrola",
    text: "Checklisty i odbior wewnetrzny zanim przekazemy realizacje dalej w organizacji.",
  },
  {
    title: "Finalizacja",
    text: "Protokoly odbioru i zdjecia, rozliczenie, domkniecie tematu bez poprawek.",
  },
];
