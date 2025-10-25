"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
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

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = direction === "left" ? -450 : 450;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
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

        {/* Smooth Scroll Section */}
        <div
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-8 px-4 snap-x snap-mandatory no-scrollbar scroll-smooth"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="min-w-[340px] md:min-w-[420px] lg:min-w-[460px] snap-center group relative cursor-pointer rounded-2xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-lg border border-white/10 hover:border-white/30 transition-all duration-700 ease-out"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <div 
                      className="relative overflow-hidden h-[280px] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${
                          typeof project.image === "string"
                            ? project.image
                            : (project.image as Record<string, unknown>)?.src || "/placeholder.svg"
                        })`
                      }}
                    >
                      {project.tag && (
                        <span className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs px-3 py-1 rounded-full font-medium shadow">
                          {project.tag}
                        </span>
                      )}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                        <div className="text-center text-white">
                          <h3 className="text-2xl font-light mb-3">
                            {project.title}
                          </h3>
                          <p className="text-white/85 text-sm leading-relaxed font-thin">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Arrows */}
          <button
            onClick={() => scroll("left")}
            className={`absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full shadow-md transition-all duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <ChevronLeft className="text-gray-800 w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full shadow-md transition-all duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <ChevronRight className="text-gray-800 w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
