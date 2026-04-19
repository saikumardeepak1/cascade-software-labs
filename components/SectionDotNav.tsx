"use client";

import { useEffect, useState } from "react";
import { SECTIONS, type SectionId } from "@/lib/sections";

// Sections that have a dark background — dots will be white
const DARK_BG_SECTIONS: SectionId[] = ["hero", "get-started"];

export default function SectionDotNav() {
  const [active, setActive] = useState<SectionId>("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const intersectionMap = new Map<SectionId, number>();

    const pickMostVisible = () => {
      let bestId: SectionId = "hero";
      let bestRatio = -1;
      intersectionMap.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });
      setActive(bestId);
    };

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            intersectionMap.set(id as SectionId, entry.intersectionRatio);
          });
          pickMostVisible();
        },
        {
          threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
        }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isDark = DARK_BG_SECTIONS.includes(active);

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3"
    >
      {SECTIONS.map(({ id }) => {
        const isActive = active === id;
        const sectionId = id as SectionId;

        return (
          <button
            key={id}
            onClick={() => scrollTo(sectionId)}
            aria-label={`Go to section ${id}`}
            className="flex items-center justify-center w-4 h-4 cursor-pointer"
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: isActive ? 10 : 6,
                height: isActive ? 10 : 6,
                backgroundColor: isDark
                  ? isActive
                    ? "rgba(255,255,255,1)"
                    : "rgba(255,255,255,0.35)"
                  : isActive
                  ? "rgba(0,0,0,1)"
                  : "rgba(0,0,0,0.3)",
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
