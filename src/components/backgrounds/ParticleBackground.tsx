"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Particle = {
  left: string;
  top: string;
  randomX: number;
  randomY: number;
  randomRotation: number;
  duration: number;
  delay: number;
};

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only once on client
    const newParticles: Particle[] = Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      randomX: Math.random() * 200 - 100,
      randomY: Math.random() * 200 - 100,
      randomRotation: Math.random() * 360,
      duration: Math.random() * 8 + 5,
      delay: Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  // Don’t render until client has generated the random data
  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: p.left,
            top: p.top,
          }}
          animate={{
            x: [0, p.randomX, -p.randomX, 0],
            y: [0, p.randomY, -p.randomY, 0],
            opacity: [0, 1, 0.5, 1, 0],
            rotate: [0, p.randomRotation, p.randomRotation * 2, 0],
            scale: [0.5, 1, 0.8, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
