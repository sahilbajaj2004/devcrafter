"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV } from "@/lib/data";
import { scrollToId } from "@/components/providers/SmoothScroll";
import Magnetic from "@/components/ui/Magnetic";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // hide on scroll-down, show on scroll-up (no manual scroll listener)
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 80);
  });

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <div className="fixed top-4 inset-x-0 z-[90] px-4 flex justify-center pointer-events-none">
        <motion.nav
          className="w-full max-w-6xl glass rounded-full px-3 sm:px-5 py-2 sm:py-2.5 pointer-events-auto"
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToId("__top")}
              className="text-base md:text-lg font-display font-bold text-white tracking-tighter shrink-0"
            >
              SOBER<span className="text-indigo-500">DEV</span>
            </button>

            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className="text-[10px] uppercase tracking-[0.28em] text-white/55 hover:text-white transition-colors font-bold"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Magnetic strength={0.5}>
                <button
                  onClick={() => go("contact")}
                  className="group hidden sm:inline-flex items-center gap-1.5 bg-white text-black hover:bg-indigo-500 hover:text-white rounded-full pl-5 pr-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Magnetic>

              <button
                className="md:hidden text-white p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                onClick={() => setOpen((v) => !v)}
                aria-label="Menu"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] bg-black/95 backdrop-blur-2xl md:hidden flex items-center justify-center p-6"
          >
            <button className="absolute top-8 right-8 text-white p-4" onClick={() => setOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {[...NAV, { label: "Contact", id: "contact" }].map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => go(item.id)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl font-display font-bold text-white tracking-tighter hover:text-indigo-500 transition-colors uppercase"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
