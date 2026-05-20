"use client";
import { motion } from "framer-motion";
import GridBackground from "./backgrounds/GridBackground";

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
            At SoberDev, we are a team of passionate creators and engineers
            committed to transforming ideas into powerful digital solutions.
          </p>
          <p className="text-lg text-white/50 font-light leading-relaxed">
            From strategy to deployment, every element we craft — from interface
            to backend — is driven by precision, creativity, and purpose. Our
            mission is to help businesses scale through innovative, seamless, and
            user-centric digital experiences.
          </p>
          
          <div className="pt-4">
            <div className="w-20 h-1 bg-indigo-500" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
