import type { Metadata } from "next";
import { SITE, PRICING } from "@/lib/data";
import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SoberDev — start a project, or reach us by email, phone, or in Delhi, India. Indicative pricing included.",
  alternates: { canonical: "/contact" },
};

const LABEL = "block text-[10px] font-mono uppercase tracking-[0.22em] text-white/40 mb-2";

export default function ContactPage() {
  return (
    <PageShell
      active="/contact"
      eyebrow="Get in touch"
      title={
        <>
          Let&apos;s build
          <br />
          <span className="text-stroke">something.</span>
        </>
      }
      intro="Tell us what you're building. We reply to every genuine inquiry, usually within a day."
    >
      <section className="mx-auto max-w-[1400px] px-6 pb-28 md:pb-40">
        <div className="grid grid-cols-1 gap-16 border-t border-white/10 pt-16 lg:grid-cols-2">
          {/* details */}
          <Reveal className="space-y-10">
            <a href={`mailto:${SITE.email}`} className="group block">
              <span className={LABEL}>Direct mail</span>
              <span className="text-2xl font-light text-white transition-colors group-hover:text-indigo-400 md:text-3xl">
                {SITE.email}
              </span>
            </a>
            <a href={SITE.phoneHref} className="group block">
              <span className={LABEL}>Phone</span>
              <span className="text-2xl font-light text-white transition-colors group-hover:text-indigo-400 md:text-3xl">
                {SITE.phone}
              </span>
            </a>
            <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="group block">
              <span className={LABEL}>Location</span>
              <span className="text-2xl font-light text-white transition-colors group-hover:text-indigo-400 md:text-3xl">
                {SITE.location}
              </span>
            </a>
            <div>
              <span className={LABEL}>Pricing</span>
              <ul className="space-y-1.5">
                {PRICING.map((p) => (
                  <li key={p} className="text-sm font-light text-white/60">{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
