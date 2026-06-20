"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Premium dual-cursor: an instant dot + a trailing ring.
 * - Uses gsap.quickTo so movement never triggers a React re-render.
 * - mix-blend-difference keeps it visible over dark bg AND light images.
 * - Disabled on touch devices; snaps (no lag) under prefers-reduced-motion.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dotEl = dot.current!;
    const ringEl = ring.current!;
    document.documentElement.classList.add("has-custom-cursor");

    gsap.set([dotEl, ringEl], { xPercent: -50, yPercent: -50 });

    const xDot = gsap.quickTo(dotEl, "x", { duration: reduce ? 0 : 0.12, ease: "power3" });
    const yDot = gsap.quickTo(dotEl, "y", { duration: reduce ? 0 : 0.12, ease: "power3" });
    const xRing = gsap.quickTo(ringEl, "x", { duration: reduce ? 0 : 0.5, ease: "power3" });
    const yRing = gsap.quickTo(ringEl, "y", { duration: reduce ? 0 : 0.5, ease: "power3" });

    const interactive = "a, button, [role=button], input, textarea, select, label, [data-cursor]";
    let shown = false;

    const move = (e: PointerEvent) => {
      if (!shown) {
        shown = true;
        gsap.to([dotEl, ringEl], { autoAlpha: 1, duration: 0.25 });
      }
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const over = (e: PointerEvent) => {
      const hit = (e.target as HTMLElement)?.closest?.(interactive);
      gsap.to(ringEl, { scale: hit ? 1.9 : 1, duration: 0.35, ease: "power3" });
      gsap.to(dotEl, { scale: hit ? 0 : 1, duration: 0.35, ease: "power3" });
    };

    const down = () => gsap.to(ringEl, { scale: 0.8, duration: 0.2 });
    const up = () => gsap.to(ringEl, { scale: 1, duration: 0.3 });
    const leave = () => {
      shown = false;
      gsap.to([dotEl, ringEl], { autoAlpha: 0, duration: 0.2 });
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.addEventListener("mouseleave", leave);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000] hidden md:block" aria-hidden>
      <div
        ref={ring}
        className="fixed left-0 top-0 h-9 w-9 rounded-full border border-white/60 opacity-0 mix-blend-difference will-change-transform"
      />
      <div
        ref={dot}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-white opacity-0 mix-blend-difference will-change-transform"
      />
    </div>
  );
}
