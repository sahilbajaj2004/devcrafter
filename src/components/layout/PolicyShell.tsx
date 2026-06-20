import type React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const LABEL = "text-[10px] font-mono uppercase tracking-[0.22em] text-white/40";

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/refund-policy", label: "Refund Policy" },
] as const;

/**
 * Shared chrome for the legal pages (privacy / terms / refund).
 * Matches the site's design system: black canvas, indigo accent,
 * Syne display headings, Bricolage body, JetBrains mono labels.
 */
export function PolicyShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen bg-black text-white noise">
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Link
          href="/"
          className="mb-16 inline-flex items-center gap-2 text-white/50 transition-colors hover:text-indigo-400"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className={LABEL}>Back to Sober<span className="text-indigo-500">Dev</span></span>
        </Link>

        <p className={LABEL}>Legal</p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[0.95] tracking-tighter md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-[11px] font-mono uppercase tracking-[0.18em] text-white/40">
          Last updated: {updated}
        </p>

        <div className="mt-14 space-y-12">{children}</div>

        <footer className="mt-24 flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <span className={LABEL}>© Sober<span className="text-indigo-500">Dev</span></span>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {LEGAL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-indigo-400"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </footer>
      </div>
    </main>
  );
}

/**
 * A single titled section of a legal document. The content wrapper styles all
 * nested <p>, <ul>, <a>, <strong> so each page can stay readable plain markup.
 */
export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
        {title}
      </h2>
      <div className="space-y-4 text-sm leading-relaxed text-white/70 md:text-[15px] [&_a]:text-indigo-400 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-indigo-300 [&_strong]:font-semibold [&_strong]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-white/30">
        {children}
      </div>
    </section>
  );
}
