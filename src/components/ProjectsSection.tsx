"use client";
import { motion } from "framer-motion";
import GridBackground from "./backgrounds/GridBackground";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with seamless checkout",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://example.com/ecommerce",
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics platform with real-time data visualization",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://example.com/saas-dashboard",
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive financial management",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://example.com/mobile-banking",
    },
    {
      title: "Portfolio Website",
      description: "Creative showcase for digital artist",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://example.com/portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 bg-transparent overflow-hidden"
    >
      <GridBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-thin text-gray-900 text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-thin mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 font-thin">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
