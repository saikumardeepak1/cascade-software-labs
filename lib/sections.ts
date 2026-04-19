export const SECTIONS = [
  { id: "hero",        label: "Hero",          index: 1 },
  { id: "intro",       label: "Intro",         index: 2 },
  { id: "why-cascade", label: "Why Cascade",   index: 3 },
  { id: "services",    label: "Our Services",  index: 4 },
  { id: "pillars",     label: "Security & ROI",index: 5 },
  { id: "how-we-work", label: "How We Work",   index: 6 },
  { id: "faq",         label: "FAQ",           index: 7 },
  { id: "get-started", label: "Get Started",   index: 8 },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
