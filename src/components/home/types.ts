export type ServiceId = "post-build" | "glass" | "floors" | "maintenance";

export type ServiceEntry = {
  id: ServiceId;
  navTitle: string;
  navMeta: string;
  title: string;
  description: string;
  proofChips: string[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  audienceLinks: { label: string; href: string }[];
};

export type ProblemCard = {
  pill: string;
  title: string;
  description: string;
};

export type RiskCard = {
  pill: string;
  title: string;
  description: string;
  effect: string;
};

export type HeroSectionContent = {
  label: string;
  title: string;
  lead: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  trustStrip: string;
  photoAriaLabel: string;
  pointsAriaLabel: string;
};

export type ProblemSectionContent = {
  eyebrow: string;
  heading: string;
  lead: string;
  gridAriaLabel: string;
};

export type ServicesShortcutSectionContent = {
  ariaLabel: string;
  linkLabel: string;
};

export type ServicesSectionContent = {
  eyebrow: string;
  heading: string;
  lead: string;
  tablistAriaLabel: string;
  popularBadgeLabel: string;
  audienceLabel: string;
};

export type RiskSliderSectionContent = {
  kicker: string;
  heading: string;
  lead: string;
  navAriaLabel: string;
  prevAriaLabel: string;
  nextAriaLabel: string;
};

export type ContactSectionContent = {
  eyebrow: string;
  heading: string;
  lead: string;
  heroAriaLabel: string;
  heroKicker: string;
  heroHeading: string;
  heroLead: string;
  heroPoints: string[];
  form: {
    phoneLabel: string;
    cityLabel: string;
    timeWindowLegend: string;
    timeWindowOptions: string[];
    consentsLegend: string;
    privacyPrefix: string;
    privacyLinkLabel: string;
    privacySuffix: string;
    marketingEmailLabel: string;
    marketingPhoneSmsLabel: string;
    submitLabel: string;
    submitIconLabel: string;
    meta: string;
  };
};


