"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    window.__lenis = lenis;

    // refresh triggers once layout settles
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("loader:done", refresh);

    return () => {
      gsap.ticker.remove(raf);
      window.removeEventListener("loader:done", refresh);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}

/** Smoothly scroll to a section id, using Lenis when available. */
export function scrollToId(id: string) {
  if (id === "__top") {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -80, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
