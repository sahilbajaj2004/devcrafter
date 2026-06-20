import type React from "react";
import { Reveal } from "@/components/ui/Reveal";
import SiteHeader, { type PageKey } from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/**
 * Shared chrome for the standalone marketing pages. Server component: the shared
 * SiteHeader (with active state) and an animated page header, closed by the
 * shared SiteFooter. Matches the site's design system.
 */
export default function PageShell({
  active,
  eyebrow,
  title,
  intro,
  children,
}: {
  active: PageKey;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen bg-black text-white noise">
      <SiteHeader active={active} />

      <header className="mx-auto max-w-[1400px] px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <Reveal>
          <p className="mb-6 text-[11px] font-mono uppercase tracking-[0.3em] text-indigo-400">
            {eyebrow}
          </p>
          <h1 className="font-display text-5xl font-bold leading-[0.9] tracking-tighter text-white md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/55 md:text-lg">
            {intro}
          </p>
        </Reveal>
      </header>

      <div className="relative z-10">{children}</div>

      <SiteFooter />
    </main>
  );
}
