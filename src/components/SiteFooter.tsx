import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { SITE } from "@/lib/data";

const LINK =
  "text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-indigo-400";

const PAGES = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const LEGAL = [
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-of-service", label: "Terms" },
  { href: "/refund-policy", label: "Refunds" },
] as const;

/**
 * Shared footer for the standalone pages (work / services / about / contact).
 * Mirrors the homepage footer's design language: black canvas, mono uppercase
 * links, indigo hover, hairline borders.
 */
export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-28 border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-display text-2xl font-bold tracking-tighter text-white transition-colors hover:text-indigo-400"
            >
              SoberDev
            </Link>
            <p className="mt-3 text-sm font-light leading-relaxed text-white/45">
              {SITE.tagline} in {SITE.location}. We build products that actually ship.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav className="flex flex-col gap-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/30">
                Pages
              </span>
              {PAGES.map((p) => (
                <Link key={p.href} href={p.href} className={LINK}>
                  {p.label}
                </Link>
              ))}
            </nav>

            <nav className="flex flex-col gap-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/30">
                Legal
              </span>
              {LEGAL.map((l) => (
                <Link key={l.href} href={l.href} className={LINK}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
            © {year} SoberDev
          </span>
          <div className="flex items-center gap-6">
            {SITE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-indigo-400"
                aria-label={s.label}
              >
                {s.label === "GitHub" && <Github className="h-5 w-5" />}
                {s.label === "LinkedIn" && <Linkedin className="h-5 w-5" />}
                {s.label === "Email" && <Mail className="h-5 w-5" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
