"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ParticleBackground from "./backgrounds/ParticleBackground";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sahil Gupta",
      role: "Founder, Varchasv institute",
      content:
        "SoberDev transformed our vision into a stunning digital reality. Their attention to detail and technical expertise exceeded all expectations. The team's professionalism and dedication truly set them apart.",
      image: "/SahilGupta.jpg",
      rating: 5,
    },
    {
      name: "Bhumit Rajotiya",
      role: "Founder, StartupHub",
      content:
        "Working with SoberDev was an absolute game-changer for our startup. They delivered a flawless MVP that helped us secure our seed funding. Highly recommend their services!",
      image: "/BhumitRajotiya.jpg",
      rating: 5,
    },
    {
      name: "Anjali Verma",
      role: "Product Manager, CloudFlow",
      content:
<<<<<<< HEAD
        "The level of craftsmanship and innovation SoberDev brought to our project was phenomenal. They understood our requirements perfectly and delivered beyond our expectations.",
      image: "/testimonials/anjali.jpg",
=======
        "The level of craftsmanship and innovation DevCrafter brought to our project was phenomenal. They understood our requirements perfectly and delivered beyond our expectations.",
      image: "/anjali.jpg",
>>>>>>> 643596fea5bdc5c2eb93355441f7fe73a4ce4be1
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "CTO, DataSync Solutions",
      content:
<<<<<<< HEAD
        "SoberDev's technical prowess and design sensibility are unmatched. They built a scalable backend system that handles millions of requests seamlessly. Exceptional work!",
      image: "/testimonials/vikram.jpg",
=======
        "DevCrafter's technical prowess and design sensibility are unmatched. They built a scalable backend system that handles millions of requests seamlessly. Exceptional work!",
      image: "/vikram.jpg",
>>>>>>> 643596fea5bdc5c2eb93355441f7fe73a4ce4be1
      rating: 5,
    },
    {
      name: "Neha Kapoor",
      role: "Marketing Director, BrandCraft",
      content:
<<<<<<< HEAD
        "Our website redesign by SoberDev not only looks beautiful but also increased our conversion rates by 40%. Their strategic approach to design is truly impressive.",
      image: "/testimonials/neha.jpg",
=======
        "Our website redesign by DevCrafter not only looks beautiful but also increased our conversion rates by 40%. Their strategic approach to design is truly impressive.",
      image: "/neha.jpg",
>>>>>>> 643596fea5bdc5c2eb93355441f7fe73a4ce4be1
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-slide every 2 seconds, pause on hover
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovered, testimonials.length]);

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-black overflow-hidden"
    >
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-thin text-white text-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>

        <motion.p
          className="text-lg text-white/70 text-center font-light mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hear what our clients have to say about their experience working with
          us
        </motion.p>

        {/* Main Testimonial Card with Side Navigation */}
        <div
          className="max-w-5xl mx-auto relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center justify-center gap-6">
            {/* Left Navigation Button */}
            <button
              onClick={prevTestimonial}
              className="flex-shrink-0 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex-1 max-w-4xl"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-8 right-8 h-12 w-12 text-white/10" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/90 text-lg md:text-xl font-light text-center mb-8 leading-relaxed">
                  &quot;{testimonials[currentIndex].content}&quot;
                </p>

                {/* Client Info */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full mb-4 overflow-hidden border-2 border-white/20">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-white text-xl font-light">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-white/60 text-sm font-thin">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Navigation Button */}
            <button
              onClick={nextTestimonial}
              className="flex-shrink-0 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
