"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sahil Gupta",
      role: "Founder, Varchasv institute",
      content:
        "SoberDev transformed our vision into a stunning digital reality. Their attention to detail and technical expertise exceeded all expectations.",
      image: "/SahilGupta.jpg",
    },
    {
      name: "Bhumit Rajotiya",
      role: "Founder, StartupHub",
      content:
        "Working with SoberDev was an absolute game-changer for our startup. They delivered a flawless MVP that helped us secure our seed funding.",
      image: "/BhumitRajotiya.jpg",
    },
    {
      name: "Anjali Verma",
      role: "Product Manager, CloudFlow",
      content:
        "The level of craftsmanship and innovation SoberDev brought to our project was phenomenal. They understood our requirements perfectly.",
      image: "/anjali.jpg",
    },
  ];

  return (
    <section id="testimonials" className="relative py-32 bg-black overflow-hidden noise">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-sm uppercase tracking-[0.3em] text-indigo-500 font-bold mb-4">
            Voice of Partners
          </h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
            TRUSTED BY <br /> <span className="text-white/20">VISIONARIES.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-2xl relative group hover:bg-white/[0.15] transition-all duration-500"
            >
              <Quote className="text-indigo-500 h-8 w-8 mb-8 opacity-40 group-hover:opacity-100 transition-opacity" />
              <p className="text-lg text-white/80 font-light leading-relaxed mb-10">
                &quot;{t.content}&quot;
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                <div className="w-12 h-12 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 relative">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide">{t.name}</h4>
                  <p className="text-indigo-500/60 text-[10px] uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
