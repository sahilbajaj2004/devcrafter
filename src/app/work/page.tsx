import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import PageShell from "@/components/PageShell";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A full index of products SoberDev has shipped — landing pages, full-stack web apps, AI dev tools, and brand sites, with live links to each.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <PageShell
      active="/work"
      eyebrow="Selected work"
      title={
        <>
          Things we&apos;ve
          <br />
          <span className="text-stroke">shipped.</span>
        </>
      }
      intro="Real, live products built for startups and small businesses — each one designed, developed, and deployed end to end. Tap any card to view it live."
    >
      <section className="mx-auto max-w-[1400px] px-6 pb-28 md:pb-40">
        <Reveal>
          <div className="mb-14 flex items-end justify-between border-t border-white/10 pt-10">
            <h2 className="font-display text-2xl font-bold tracking-tighter text-white md:text-4xl">
              The full index
            </h2>
            <span className="font-mono text-xs text-white/35">{PROJECTS.length} projects</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.index} delay={(i % 2) * 0.08}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-500 hover:border-white/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top grayscale-[0.4] transition-all duration-700 group-hover:scale-[1.05] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 font-mono text-xs text-white/70">{p.index}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-indigo-400 md:text-2xl">
                      {p.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-400" />
                  </div>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {p.kind} · {p.year}
                  </p>
                  <p className="mt-4 text-sm font-light leading-relaxed text-white/50">{p.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.12em] text-white/55"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
