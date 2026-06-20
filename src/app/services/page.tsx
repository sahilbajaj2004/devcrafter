import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import PageShell from "@/components/layout/PageShell";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "What SoberDev builds — web platforms, experience design, cross-platform apps, and deployment & DevOps — and the stack behind each.",
  alternates: { canonical: "/services" },
};

/**
 * Per-service detail layered on top of the homepage cards. The stack lists are
 * grounded in the technologies already listed across the site.
 */
const DETAIL: Record<
  string,
  { detail: string; includes: string[] }
> = {
  "01": {
    detail:
      "We build the full product, not just the front end. Fast, accessible interfaces in React and Next.js, backed by typed APIs and databases that hold up as you grow. Performance and SEO are built in, not bolted on later.",
    includes: ["React & Next.js", "TypeScript", "Tailwind CSS", "Node.js / Express APIs", "MongoDB & MySQL", "SEO & performance"],
  },
  "02": {
    detail:
      "Interfaces with character. We pair clean visual hierarchy with purposeful motion so the product feels considered the moment it loads — without sacrificing speed or accessibility.",
    includes: ["UI & interaction design", "Motion with GSAP & Framer Motion", "Design systems", "Responsive layouts", "Accessibility"],
  },
  "03": {
    detail:
      "One product, every screen. We ship cross-platform apps with React Native and responsive PWAs so a single, maintainable codebase runs smoothly on Android and iOS as well as the web.",
    includes: ["React Native", "Responsive PWAs", "iOS & Android", "Offline-friendly UX", "App store readiness"],
  },
  "04": {
    detail:
      "Shipping is part of the build. We set up hosting, pipelines, and databases so releases are reliable and repeatable, and so you are never stuck wondering how to deploy the thing we made.",
    includes: ["Vercel, Render & Railway", "MongoDB Atlas", "CI/CD pipelines", "Docker", "AWS", "Monitoring & rollbacks"],
  },
};

export default function ServicesPage() {
  return (
    <PageShell
      active="/services"
      eyebrow="What we do"
      title={
        <>
          Services that
          <br />
          <span className="text-indigo-500">ship.</span>
        </>
      }
      intro="Based in Delhi, building full-stack products, landing pages, and tools for founders who need something real, shipped. Four things we do, end to end."
    >
      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:pb-32">
        <div className="border-t border-white/10">
          {SERVICES.map((s, i) => {
            const d = DETAIL[s.no];
            return (
              <Reveal key={s.no} delay={(i % 2) * 0.06}>
                <article className="grid grid-cols-1 gap-6 border-b border-white/10 py-12 md:grid-cols-12 md:py-16">
                  <div className="md:col-span-1">
                    <span className="font-mono text-xs text-white/30">{s.no}</span>
                  </div>
                  <div className="md:col-span-6">
                    <h2 className="font-display text-3xl font-bold tracking-tighter text-white md:text-5xl">
                      {s.title}
                    </h2>
                    <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/55">
                      {d?.detail ?? s.description}
                    </p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="mb-4 text-[10px] font-mono uppercase tracking-[0.22em] text-white/30">
                      Stack &amp; included
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {(d?.includes ?? []).map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.12em] text-white/60"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-20 flex flex-col items-start justify-between gap-6 border border-white/10 bg-white/[0.02] p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tighter text-white md:text-4xl">
                Have something to build?
              </h2>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-white/50">
                Tell us about the project and we&apos;ll come back with scope, timeline, and a quote.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 bg-white px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-indigo-500 hover:text-white"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
