"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ParticleBackground from "./backgrounds/ParticleBackground";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "CEO, TechVision",
      content:
        "DevCrafter transformed our vision into a stunning digital reality. Their attention to detail and technical expertise exceeded all expectations. The team's professionalism and dedication truly set them apart.",
      image: "/testimonials/priya.jpg",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      role: "Founder, StartupHub",
      content:
        "Working with DevCrafter was an absolute game-changer for our startup. They delivered a flawless MVP that helped us secure our seed funding. Highly recommend their services!",
      image: "/testimonials/rahul.jpg",
      rating: 5,
    },
    {
      name: "Anjali Verma",
      role: "Product Manager, CloudFlow",
      content:
        "The level of craftsmanship and innovation DevCrafter brought to our project was phenomenal. They understood our requirements perfectly and delivered beyond our expectations.",
      image: "/testimonials/anjali.jpg",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "CTO, DataSync Solutions",
      content:
        "DevCrafter's technical prowess and design sensibility are unmatched. They built a scalable backend system that handles millions of requests seamlessly. Exceptional work!",
      image: "/testimonials/vikram.jpg",
      rating: 5,
    },
    {
      name: "Neha Kapoor",
      role: "Marketing Director, BrandCraft",
      content:
        "Our website redesign by DevCrafter not only looks beautiful but also increased our conversion rates by 40%. Their strategic approach to design is truly impressive.",
      image: "/testimonials/neha.jpg",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

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

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
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
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-light">
                  {testimonials[currentIndex].name.charAt(0)}
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

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full shadow-md transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-white w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-white"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full shadow-md transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-white w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Additional Testimonials Grid (Optional) */}
        {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 text-sm font-light mb-4 line-clamp-3">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-light">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="text-white text-sm font-light">
                    {testimonial.name}
                  </h5>
                  <p className="text-white/50 text-xs font-thin">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
