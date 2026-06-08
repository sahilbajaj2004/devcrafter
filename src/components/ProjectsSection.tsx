"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ADARSH KUMAR",
      tag: "IDENTITY / PORTFOLIO",
      description:
        "Portfolio site to showcase full-stack work, resume, and contact flow. Optimized for fast load and clear hiring visibility. Stack: React, Tailwind CSS.",
      image: "/adarsh.png",
      link: "https://portfolio-e7gt.onrender.com/",
    },
    {
      title: "SAHIL BAJAJ",
      tag: "DIGITAL PRESENCE",
      description:
        "Personal portfolio for a full-stack developer to consolidate projects and skills. Clean navigation with a conversion-focused contact path. Stack: Next.js, Tailwind CSS.",
      image: "/sahil.png",
      link: "https://www.sahilbajaj.me/",
    },
    {
      title: "AlgoAnalyzer",
      tag: "EDUCATION PLATFORM",
      description:
        "Algorithm practice platform with a focused learning flow. Built responsive UI and clear problem navigation for students. Stack: Next.js, Tailwind CSS.",
      image: "/algo.png",
      link: "https://algo-analyzer.vercel.app/",
    },
    {
      title: "Dhruv portfolio",
      tag: "portfolio",
      description:
        "Portfolio site to showcase full-stack work, resume, and contact flow. Optimized for fast load and clear hiring visibility. Stack: React, Tailwind CSS.",
      image: "/dhruv.png",
      link: "https://dhruvsharmadev.vercel.app/",
    },
    {
      title: "BURROW AI",
      tag: "E-COMMERCE / AI",
      description:
        "Healthcare-focused storefront with product discovery and detail pages. Designed for trust, clarity, and conversion. Stack: React, Tailwind CSS.",
      image: "/burrow.png",
      link: "https://burrow-3.onrender.com/",
    },
    {
      title: "PRERNA",
      tag: "ACADEMIC PORTAL",
      description:
        "Academic portal for an institute to present programs and updates. Clear navigation and admissions-first layout. Stack: Next.js, Tailwind CSS.",
      image: "/prerna.png",
      link: "https://prernainstitution.vercel.app/",
    },
    {
      title: "PI COMMUNITY",
      tag: "DEVELOPER HUB",
      description:
        "Developer community hub for resources, updates, and events. Built to scale content and keep users engaged. Stack: React, Tailwind CSS.",
      image: "/pi.png",
      link: "https://picommunity.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="relative py-32 bg-black overflow-hidden noise">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-24">
          <h2 className="text-sm uppercase tracking-[0.3em] text-indigo-500 font-bold mb-4">
            Selected Work
          </h2>
          <h3 className="text-5xl md:text-8xl font-display font-bold text-white leading-[0.85] tracking-tighter">
            CRAFTING <br /> <span className="text-white/20">THE DIGITAL.</span>
          </h3>
        </div>

        <div className="space-y-0 border-t border-white/10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-12 border-b border-white/10 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-500 font-bold mb-2 block">
                    {project.tag}
                  </span>
                  <h4 className="text-4xl md:text-6xl font-display font-bold text-white group-hover:text-indigo-500 transition-colors duration-500">
                    {project.title}
                  </h4>
                </div>
                
                <div className="max-w-xs text-white/40 group-hover:text-white transition-colors duration-500">
                  <p className="text-sm font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Hover Image Reveal */}
              <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-64 h-40 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none scale-90 group-hover:scale-100 rotate-3 group-hover:rotate-0 hidden lg:block">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={256}
                  height={160}
                  className="w-full h-full object-cover rounded-lg shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
