"use client";
import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="relative py-32 bg-black overflow-hidden noise">
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-indigo-500 font-bold mb-4">
            Our DNA
          </h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-[0.9]">
            WE BUILD <br /> <span className="text-white/20">DIFFERENT.</span>
          </h3>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl text-white/80 font-light leading-tight">
            We are a two-person studio in Delhi building fast, reliable web
            products for startups and small businesses.
          </p>
          <p className="text-lg text-white/50 font-light leading-relaxed">
            You get a working product, not a design that never ships. We handle
            design, development, and deployment end to end with direct
            communication and zero agency fluff. If you need a web developer in
            Delhi or a partner for website development in Delhi, we can help.
          </p>
          
          <div className="pt-4">
            <div className="w-20 h-1 bg-indigo-500" />
          </div>

          <div className="pt-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-6">
              Who builds this
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-white/10 p-6">
                <p className="text-white font-bold text-sm tracking-wide">Sahil Bajaj</p>
                <p className="text-indigo-500/70 text-[10px] uppercase tracking-widest font-bold">Co-Founder</p>
                <p className="text-white/60 text-sm font-light mt-3">
                  Full-stack developer focused on shipping clean, scalable products for founders and small teams.
                </p>
                <a
                  href="https://github.com/sahilbajaj2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
              <div className="border border-white/10 p-6">
                <p className="text-white font-bold text-sm tracking-wide">Adarsh Shrivastava</p>
                <p className="text-indigo-500/70 text-[10px] uppercase tracking-widest font-bold">Co-Founder</p>
                <p className="text-white/60 text-sm font-light mt-3">
                  Builds dependable web experiences with an eye on performance, UX, and real-world delivery.
                </p>
                <a
                  href="https://github.com/AdarshKumarSr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
