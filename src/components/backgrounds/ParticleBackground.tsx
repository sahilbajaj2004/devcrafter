"use client";
import { motion } from "framer-motion";

const ParticleBackground = () => (
  <div className="absolute inset-0">
    {[...Array(50)].map((_, i) => {
      const randomX = Math.random() * 200 - 100;
      const randomY = Math.random() * 200 - 100;
      const randomRotation = Math.random() * 360;

      return (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, randomX, -randomX, 0],
            y: [0, randomY, -randomY, 0],
            opacity: [0, 1, 0.5, 1, 0],
            rotate: [0, randomRotation, randomRotation * 2, 0],
            scale: [0.5, 1, 0.8, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      );
    })}
  </div>
);

export default ParticleBackground;
