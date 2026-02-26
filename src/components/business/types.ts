export type BusinessLink = {
  label: string;
  href?: string;
};

export type BusinessHeroPoint = {
  text: string;
  className: string;
};

export type BusinessHeroContent = {
  label: string;
  title: string;
  lead: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
  ctaInlineLabel: string;
  ctaInlineHref: string;
  photoPoints: BusinessHeroPoint[];
};

export type BusinessShortcutCard = {
  id?: string;
  pill: string;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
};

export type BusinessProblemCard = {
  tone: "tone-1" | "tone-2" | "tone-3" | "tone-4" | "tone-5" | "tone-6";
  pill: string;
  title: string;
  description: string;
};

export type BusinessScenarioCard = {
  id?: string;
  pill: string;
  title: string;
  description: string;
  links: BusinessLink[];
  checklist?: string[];
  effect?: string;
};

export type BusinessNeedPillar = {
  title: string;
  meta: string;
};
