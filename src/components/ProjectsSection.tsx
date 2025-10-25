"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GridBackground from "./backgrounds/GridBackground";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Adarsh Kumar — Portfolio",
      tag: "Featured",
      description:
        "A refined React-based personal website that balances professional presentation with visual sophistication",
      image: "/adarsh.png",
      link: "https://portfolio-e7gt.onrender.com/",
    },
    {
      title: "Sahil Bajaj — Portfolio",
      tag: "Featured",
      description:
        "An elegant Next.js portfolio with minimal design, smooth transitions, and sharp aesthetics that define a developer's digital identity.",
      image: "/sahil.png",
      link: "https://www.sahilbajaj.me/",
    },
    {
      title: "BurrowAI",
      tag: "Full Stack App",
      description:
        "A robust full-stack application built with MERN and Flask, featuring secure authentication, real-time cart management, and services such as online medication purchasing, doctor appointment scheduling, and powered by an advanced AI model for enhanced user experience.",
      image: "/burrow.png",
      link: "https://burrow-3.onrender.com/",
    },
    {
      title: "PiCommunity",
      tag: "SaaS Platform",
      description:
        "Pi Community is a vibrant developer hub fostering innovation through collaboration and continuous learning. We bring together diverse minds to mentor, experiment, and shape the future of technology, one line of code at a time.",
      image: "/pi.png",
      link: "https://picommunity.vercel.app/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getProjectIndex = (offset: number) => {
    return (currentIndex + offset + projects.length) % projects.length;
  };

  return (
    <section
      id="projects"
      className="relative py-24 bg-transparent overflow-hidden"
    >
      <GridBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-thin text-gray-900 text-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 text-center font-light mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Building sleek, high-impact digital experiences through a seamless
          blend of creativity, precision, and innovation.
        </motion.p>

        {/* Carousel with Center Focus */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 md:gap-8 px-4">
            {/* Left Card (Previous) */}
            <motion.div
              key={`left-${getProjectIndex(-1)}`}
              initial={{ opacity: 0, scale: 0.75, x: -50 }}
              animate={{ opacity: 0.6, scale: 0.85, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block w-[350px] lg:w-[380px] cursor-pointer"
              onClick={prevProject}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all">
                <div
                  className="h-[240px] lg:h-[260px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${
                      projects[getProjectIndex(-1)].image
                    })`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/30" />
                  {projects[getProjectIndex(-1)].tag && (
                    <span className="absolute top-2 left-2 bg-white/90 text-gray-800 text-xs px-2 py-1 rounded-full font-medium shadow">
                      {projects[getProjectIndex(-1)].tag}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Center Card (Current/Featured) */}
            <motion.div
              key={`center-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 }}
              className="w-[340px] md:w-[480px] lg:w-[560px] group relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg border border-white/10 hover:border-white/30 transition-all duration-700"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <a
                href={projects[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="relative overflow-hidden h-[280px] md:h-[350px] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${projects[currentIndex].image})`,
                  }}
                >
                  {projects[currentIndex].tag && (
                    <span className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs px-3 py-1 rounded-full font-medium shadow">
                      {projects[currentIndex].tag}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                    <div className="text-center text-white">
                      <h3 className="text-2xl md:text-3xl font-light mb-3">
                        {projects[currentIndex].title}
                      </h3>
                      <p className="text-white/85 text-sm md:text-base leading-relaxed font-thin">
                        {projects[currentIndex].description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Right Card (Next) */}
            <motion.div
              key={`right-${getProjectIndex(1)}`}
              initial={{ opacity: 0, scale: 0.75, x: 50 }}
              animate={{ opacity: 0.6, scale: 0.85, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block w-[350px] lg:w-[380px] cursor-pointer"
              onClick={nextProject}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all">
                <div
                  className="h-[240px] lg:h-[260px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${
                      projects[getProjectIndex(1)].image
                    })`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/30" />
                  {projects[getProjectIndex(1)].tag && (
                    <span className="absolute top-2 left-2 bg-white/90 text-gray-800 text-xs px-2 py-1 rounded-full font-medium shadow">
                      {projects[getProjectIndex(1)].tag}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons and Dots */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={prevProject}
              className="bg-gray-800/10 hover:bg-gray-800/20 backdrop-blur-md p-3 rounded-full shadow-md transition-all duration-300 group"
              aria-label="Previous project"
            >
              <ChevronLeft className="text-gray-800 w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gray-800"
                      : "w-2 bg-gray-800/30 hover:bg-gray-800/50"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="bg-gray-800/10 hover:bg-gray-800/20 backdrop-blur-md p-3 rounded-full shadow-md transition-all duration-300 group"
              aria-label="Next project"
            >
              <ChevronRight className="text-gray-800 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
