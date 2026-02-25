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

