"use client";
import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Globe } from "lucide-react";
import ParticleBackground from "./backgrounds/ParticleBackground";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and best practices.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that enhance user experience and engagement.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Digital Strategy",
      description:
        "Comprehensive digital solutions tailored to your business objectives.",
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-black overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-thin text-white text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="text-white mb-4 flex justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-thin text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70 font-thin text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
