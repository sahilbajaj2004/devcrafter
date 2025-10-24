"use client";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Cloud,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import ParticleBackground from "./backgrounds/ParticleBackground";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description:
        "Custom websites and scalable web applications built with the latest frameworks and clean architecture.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description:
        "Elegant, user-focused interfaces designed to deliver seamless and engaging digital experiences.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description:
        "Cross-platform and native mobile apps that deliver performance and delight on both iOS and Android.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Digital Strategy",
      description:
        "Comprehensive digital transformation strategies aligned with your business goals.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend & API Development",
      description:
        "Robust, secure, and efficient backend systems with well-documented APIs for seamless integrations.",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Solutions & DevOps",
      description:
        "Cloud deployment, CI/CD pipelines, and infrastructure management on AWS, GCP, and Azure.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Security & Maintenance",
      description:
        "Ongoing support, monitoring, and security audits to keep your digital products reliable and safe.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Startup MVP Development",
      description:
        "Fast, cost-effective MVPs that help startups validate ideas and attract early investors.",
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
