import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PAGE_NAV = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type PageKey = (typeof PAGE_NAV)[number]["href"];

/**
 * Shared sticky top bar used by every standalone page (work / services / about
 * / contact / legal). `active` highlights the current page when it is one of the
 * four primary routes; legal pages pass nothing. Solid background (no
 * backdrop-blur) to avoid per-frame repaint cost while scrolling.
 */
export default function SiteHeader({ active }: { active?: PageKey }) {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/90">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span className="font-display text-base font-bold tracking-tighter text-white">
            SoberDev
          </span>
        </Link>
        <nav className="flex items-center gap-5 sm:gap-7">
          {PAGE_NAV.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              aria-current={p.href === active ? "page" : undefined}
              className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-colors hover:text-indigo-400 ${
                p.href === active ? "text-indigo-400" : "text-white/40"
              }`}
            >
              {p.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
