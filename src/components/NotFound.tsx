"use client";

import { useRef, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

/**
 * Animated 404 hero. Clean entrance timeline + a slow infinite float on the
 * numerals. Honors prefers-reduced-motion (renders static).
 */
// Stronger outline than the global .text-stroke so the numerals read clearly at
// this size; kept local so the homepage hero's .text-stroke stays unchanged.
const STROKE: CSSProperties = {
  WebkitTextStroke: "2px rgba(255,255,255,0.55)",
  color: "transparent",
};

export default function NotFound() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".nf-404", { yPercent: 10, scale: 0.94, opacity: 0, duration: 1, ease: "power4.out" })
        .from(".nf-eyebrow", { y: 18, opacity: 0, duration: 0.6 }, "-=0.55")
        .from(".nf-line", { y: 24, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(".nf-sub", { y: 18, opacity: 0, duration: 0.6 }, "-=0.45")
        .from(".nf-cta > *", { y: 16, opacity: 0, duration: 0.6, stagger: 0.09 }, "-=0.4");

      // gentle perpetual drift on the numerals
      gsap.to(".nf-float", { y: -12, duration: 3.2, ease: "sine.inOut", repeat: -1, yoyo: true });
    },
    { scope: root },
  );

  return (
    <div ref={root} className="grid flex-1 place-items-center px-6 py-24 text-center">
      <div className="flex flex-col items-center">
        <div className="nf-float">
          <h1 className="nf-404 font-display font-bold leading-none tracking-tighter text-[clamp(6rem,26vw,18rem)]">
            <span style={STROKE}>4</span>
            <span className="text-indigo-500">0</span>
            <span style={STROKE}>4</span>
          </h1>
        </div>

        <p className="nf-eyebrow mt-2 text-[11px] font-mono uppercase tracking-[0.3em] text-indigo-400">
          Error · Page not found
        </p>
        <h2 className="nf-line mt-6 max-w-2xl font-display text-3xl font-bold tracking-tighter text-white md:text-5xl">
          This page shipped somewhere else.
        </h2>
        <p className="nf-sub mt-5 max-w-md text-sm font-light leading-relaxed text-white/50 md:text-base">
          The page you&apos;re looking for doesn&apos;t exist, moved, or never made it to production.
        </p>

        <div className="nf-cta mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 bg-white px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-indigo-500 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back home
          </Link>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 border border-white/15 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-white/40 hover:text-indigo-400"
          >
            View work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
