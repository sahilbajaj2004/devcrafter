"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";

/** Wraps a child and pulls it toward the pointer on hover (magnetic effect). */
export default function Magnetic({
  children,
  strength = 0.4,
  className,
  block = false,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
  block?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    gsap.to(el, { x, y, duration: 0.5, ease: "power3.out" });
  };

  const reset = () => {
    if (ref.current)
      gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ display: block ? "block" : "inline-block", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
