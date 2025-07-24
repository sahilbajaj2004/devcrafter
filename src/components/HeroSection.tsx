"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GridBackground from "./backgrounds/GridBackground";
import ParticleBackground from "./backgrounds/ParticleBackground";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <GridBackground />
      <ParticleBackground />
      <motion.div className="relative z-10 text-center px-4" style={{ y }}>
        <motion.h1
          className="text-6xl md:text-8xl font-thin text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          DevCrafter
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white/80 font-thin mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Crafting digital experiences that push boundaries and redefine
          possibilities
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 font-thin px-8 py-3 group"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
