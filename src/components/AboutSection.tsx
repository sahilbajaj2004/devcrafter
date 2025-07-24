"use client";
import { motion } from "framer-motion";
import GridBackground from "./backgrounds/GridBackground";

const AboutSection = () => (
  <section id="about" className="relative py-20 bg-transparent overflow-hidden">
    <GridBackground />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-8">
          About Us
        </h2>
        <p className="text-xl text-gray-800 font-thin leading-relaxed mb-8">
          We are a collective of digital artisans, dedicated to transforming
          ideas into extraordinary digital experiences. Our approach combines
          cutting-edge technology with timeless design principles to create
          solutions that not only function flawlessly but inspire and engage.
        </p>
        <p className="text-lg text-gray-700 font-thin leading-relaxed">
          From concept to deployment, we craft every pixel with purpose, every
          interaction with intention, and every line of code with precision.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
