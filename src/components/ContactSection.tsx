"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import ParticleBackground from "./backgrounds/ParticleBackground";


export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "b439ca96-e064-42f2-819b-2f0ac2fd54a9",
        ...formData,
      }),
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      setStatus("✅ Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-20 bg-black overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-thin text-white text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div>
            <h3 className="text-2xl font-thin text-white mb-6">Get In Touch</h3>
            <p className="text-white/70 font-thin mb-8 leading-relaxed">
              Ready to bring your vision to life? Let&apos;s discuss how we can
              craft something extraordinary together.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/60" />
                <a
                  href="mailto:devcrafter.help@gmail.com"
                  className="text-white/80 font-thin hover:underline"
                >
                  devcrafter.help@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/60" />
                <a
                  href="tel:+919811058531"
                  className="text-white/80 font-thin hover:underline"
                >
                  +91 9811058531
                </a>
                <a
                  href="tel:+918459085768"
                  className="text-white/80 font-thin hover:underline"
                >
                  +91 8459085768
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-white/60" />
                <span className="text-white/80 font-thin">Delhi, India</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-8">
              {[
                { Icon: Github, href: "https://github.com/devcrafter" },
                { Icon: Twitter, href: "https://twitter.com/devcrafter" },
                { Icon: Linkedin, href: "https://linkedin.com/in/devcrafter" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 font-thin p-3 w-full rounded-lg"
                />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 font-thin p-3 w-full rounded-lg"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 font-thin p-3 w-full rounded-lg"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                pattern="[0-9+ ]{7,15}"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 font-thin p-3 w-full rounded-lg"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 font-thin p-3 w-full rounded-lg resize-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black hover:bg-white/90 font-thin py-3 rounded-lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {status && <p className="text-white/70 mt-2">{status}</p>}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 mt-20 pt-8">
          <div className="text-center">
            <p className="text-white/60 font-thin">
              © {new Date().getFullYear()} DevCrafter. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
