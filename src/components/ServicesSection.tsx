"use client";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Smartphone,
  Globe,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Platforms",
      description:
        "High-performance digital products built with React, Next.js, and cutting-edge engineering.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Experience Design",
      description:
        "Distinctive UI/UX that prioritizes character, motion, and emotional connection.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Native Apps",
      description:
        "Seamless mobile experiences that leverage the full potential of iOS and Android.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Cloud Architecture",
      description:
        "Scalable, resilient infrastructure designed for modern traffic and high availability.",
    },
  ];

  return (
    <section id="services" className="relative py-32 bg-black overflow-hidden noise">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-indigo-500 font-bold mb-4">
              Capabilities
            </h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
              SOLUTIONS THAT <br /> SCALE REALITY.
            </h3>
          </div>
          <p className="text-white/40 max-w-sm text-sm font-light">
            We don&apos;t just build features. We architect digital systems that empower your vision and define your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border-b md:border-r border-white/10 hover:bg-white/[0.02] transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="text-white mb-8 group-hover:text-indigo-500 transition-colors duration-500">
                {service.icon}
              </div>
              <h4 className="text-2xl font-display font-bold text-white mb-4">
                {service.title}
              </h4>
              <p className="text-white/50 font-light text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
