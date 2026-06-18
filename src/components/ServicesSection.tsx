"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 md:py-40 bg-black overflow-hidden noise">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-[0.95] tracking-tighter">
                  What we<br />
                  <span className="text-indigo-500">do.</span>
                </h2>
                <p className="mt-6 max-w-xs text-white/45 text-sm font-light leading-relaxed">
                  Based in Delhi, building full-stack products, landing pages, and tools for founders
                  who need something real, shipped.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8 border-t border-white/10">
            {SERVICES.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.06}>
                <motion.div
                  whileHover="hover"
                  className="group relative grid grid-cols-12 items-baseline gap-4 border-b border-white/10 py-9 md:py-11"
                >
                  <motion.span
                    variants={{ hover: { width: "100%" } }}
                    initial={{ width: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="pointer-events-none absolute left-0 top-0 h-px bg-indigo-500"
                  />
                  <span className="col-span-2 font-mono text-xs text-white/30 pt-2">{s.no}</span>
                  <h3 className="col-span-10 md:col-span-5 text-2xl md:text-4xl font-display font-bold text-white transition-colors duration-500 group-hover:text-indigo-400">
                    {s.title}
                  </h3>
                  <p className="col-span-12 md:col-span-5 text-white/45 text-sm font-light leading-relaxed mt-3 md:mt-0 md:pl-4 transition-colors duration-500 group-hover:text-white/70">
                    {s.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
