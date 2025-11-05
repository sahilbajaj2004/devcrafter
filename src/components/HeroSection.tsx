"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GridBackground from "./backgrounds/GridBackground";
import ParticleBackground from "./backgrounds/ParticleBackground";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const [text, setText] = useState("");
  const fullText =
    "We provide powerful software solutions to help your business grow.";

  // Typing animation for tagline
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <GridBackground />
      <ParticleBackground />
      <motion.div className="relative z-10 text-center px-4" style={{ y }}>
        {/* Logo/Name */}
        <motion.h1
          className="text-6xl md:text-8xl font-thin text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
<<<<<<< HEAD
          SoberDev
=======
          SoberDevs
>>>>>>> 643596fea5bdc5c2eb93355441f7fe73a4ce4be1
        </motion.h1>

        {/* Typing tagline */}
        <motion.p
          className="text-lg md:text-xl text-indigo-400 font-light mb-3 min-h-[28px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {text}
          <span className="animate-pulse text-indigo-300">|</span>
        </motion.p>

        {/* Secondary tagline */}
        <motion.p
          className="text-xl md:text-2xl text-white/80 font-thin mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Crafting digital experiences that push boundaries and redefine
          possibilities.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 font-medium px-8 py-3 group shadow-lg shadow-indigo-500/20"
          >
            <a href="#contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform inline-block" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
