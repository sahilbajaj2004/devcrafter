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
        <p className="text-xl text-gray-800 font-light leading-relaxed mb-8">
          At SoberDev, we are a team of passionate creators and engineers
          committed to transforming ideas into powerful digital solutions. We
          blend modern technologies with thoughtful design to build products
          that are not only functional but also memorable and impactful.
        </p>

        <p className="text-lg text-gray-700 font-light leading-relaxed">
          From strategy to deployment, every element we craft — from interface
          to backend — is driven by precision, creativity, and purpose. Our
          mission is to help businesses scale through innovative, seamless, and
          user-centric digital experiences.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
