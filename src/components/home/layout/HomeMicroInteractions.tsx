"use client";

import { useEffect } from "react";

export function HomeMicroInteractions() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("main[data-home-shell]");
    if (!root) return;

    const sections = Array.from(root.querySelectorAll<HTMLElement>(":scope > section"));
    if (!sections.length) return;

    const animatedSections = sections.filter((section) => !section.hasAttribute("data-no-reveal"));
    if (!animatedSections.length) return;

    animatedSections.forEach((section, index) => {
      section.dataset.reveal = "true";
      section.style.setProperty("--scroll-shift", "0px");
      if (index === 0) section.dataset.revealVisible = "true";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const node = entry.target as HTMLElement;
          node.dataset.revealVisible = "true";
          observer.unobserve(node);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    animatedSections.forEach((section, index) => {
      if (index !== 0) observer.observe(section);
    });

    let ticking = false;

    const updateScrollMotion = () => {
      const viewport = window.innerHeight || 1;
      for (const section of animatedSections) {
        const rect = section.getBoundingClientRect();
        const progress = (viewport - rect.top) / (viewport + rect.height);
        const clamped = Math.max(0, Math.min(1, progress));
        const shift = (0.5 - clamped) * 14;
        section.style.setProperty("--scroll-shift", `${shift.toFixed(2)}px`);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateScrollMotion);
    };

    updateScrollMotion();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
