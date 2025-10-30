"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import ParticleBackground from "./backgrounds/ParticleBackground";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showGitDropdown, setShowGitDropdown] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  // Set the current year on the client-side
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

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
    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
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
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } else {
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
                  devssober@gmail.com
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

            {/* Socials */}
            <div className="flex space-x-4 mt-8 relative">
              {/* GitHub dropdown */}
              <div className="relative">
                <motion.button
                  onClick={() => setShowGitDropdown(!showGitDropdown)}
                  className="p-3 bg-white/5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1"
                  whileHover={{ scale: 1.1 }}
                >
                  <Github className="h-6 w-6" />
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${showGitDropdown ? "rotate-180" : ""}`}
                  />
                </motion.button>

                <AnimatePresence>
                  {showGitDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-3 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-3 space-y-2 min-w-[180px]"
                    >
                      <a
                        href="https://github.com/sahilbajaj2004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white/80 hover:text-white hover:bg-white/10 rounded-md px-3 py-2 text-sm"
                      >
                        Founder&apos;s GitHub
                      </a>
                      <a
                        href="https://github.com/AdarshKumarSr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white/80 hover:text-white hover:bg-white/10 rounded-md px-3 py-2 text-sm"
                      >
                        Co-Founder&apos;s GitHub
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* DevCrafter socials */}
              <motion.a
                href="https://twitter.com/devcrafter"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <Twitter className="h-6 w-6" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/devcrafter"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </div>
          </div>

          {/* Right Side - Extended Form */}
            <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full p-3 bg-black/90 border border-white/20 rounded-lg text-white/90 placeholder-white/60 focus:outline-none backdrop-blur-md appearance-none hover:bg-white/10 transition-colors font-thin"
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full p-3 bg-black/90 border border-white/20 rounded-lg text-white/90 placeholder-white/60 focus:outline-none backdrop-blur-md appearance-none hover:bg-white/10 transition-colors font-thin"
              />
              </div>

              <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-3 bg-black/90 border border-white/20 rounded-lg text-white/90 placeholder-white/60 focus:outline-none backdrop-blur-md appearance-none hover:bg-white/10 transition-colors font-thin"
              />

              <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              pattern="[0-9+ ]{7,15}"
              className="w-full p-3 bg-black/90 border border-white/20 rounded-lg text-white/90 placeholder-white/60 focus:outline-none backdrop-blur-md appearance-none hover:bg-white/10 transition-colors font-thin"
              />

              <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full p-3 bg-black/90 border border-white/20 rounded-lg text-white/90 focus:outline-none backdrop-blur-md appearance-none hover:bg-white/10 transition-colors font-thin"
              required
              >
              <option value="" className="bg-black text-white/90 font-thin">
                Select Project Type
              </option>
              <option value="web" className="bg-black text-white/90 font-thin">
                Web Application
              </option>
              <option value="mobile" className="bg-black text-white/90 font-thin">
                Mobile App
              </option>
              <option value="website" className="bg-black text-white/90 font-thin">
                Portfolio / Company Site
              </option>
              <option value="ui-ux" className="bg-black text-white/90 font-thin">
                UI/UX Design
              </option>
              <option value="digital-strategy" className="bg-black text-white/90 font-thin">
                Digital Strategy
              </option>
              <option value="backend-api" className="bg-black text-white/90 font-thin">
                Backend & API Development
              </option>
              <option value="cloud-devops" className="bg-black text-white/90 font-thin">
                Cloud Solutions & DevOps
              </option>
              <option value="security-maintenance" className="bg-black text-white/90 font-thin">
                Security & Maintenance
              </option>
              <option value="startup-mvp" className="bg-black text-white/90 font-thin">
                Startup MVP Development
              </option>
              <option value="custom-software" className="bg-black text-white/90 font-thin">
                Custom Software Solution
              </option>
              </select>

              <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-3 bg-black/90 border border-white/20 rounded-lg text-white/90 placeholder-white/60 focus:outline-none backdrop-blur-md appearance-none hover:bg-white/10 transition-colors font-thin"
              >
              <option value="" className="bg-black text-white/70 font-thin">
                Budget Range (optional)
              </option>
              <option value="<500" className="bg-black text-white/90 font-thin">
                &lt; ₹5000
              </option>
              <option value="500-1000" className="bg-black text-white/90 font-thin">
                ₹5000 – ₹10,000
              </option>
              <option value="1000-5000" className="bg-black text-white/90 font-thin">
                ₹10,000 – ₹25,000
              </option>
              <option value=">5000" className="bg-black text-white/90 font-thin">
                &gt; ₹25,000
              </option>
              </select>

              <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full p-3 bg-black/90 border border-white/20 rounded-lg text-white/90 placeholder-white/60 focus:outline-none backdrop-blur-md appearance-none hover:bg-white/10 transition-colors font-thin"
              >
              <option value="" className="bg-black text-white/90 font-thin">
                Estimated Timeline
              </option>
              <option value="1-2 weeks" className="bg-black text-white/90 font-thin">
                1–2 weeks
              </option>
              <option value="1 month" className="bg-black text-white/90 font-thin">
                About 1 month
              </option>
              <option value="1-3 months" className="bg-black text-white/90 font-thin">
                1–3 months
              </option>
              <option value="flexible" className="bg-black text-white/90 font-thin">
                Flexible
              </option>
              </select>

              <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project or idea..."
              rows={5}
              required
              className="w-full p-3 bg-black/90 border border-white/20 rounded-lg text-white/90 placeholder-white/60 focus:outline-none backdrop-blur-md appearance-none hover:bg-white/10 transition-colors font-thin resize-none"
              />

              <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black hover:bg-white/90 font-thin py-3 rounded-lg transition-colors"
              >
              {loading ? "Sending..." : "Send Message"}
              </button>

              {status && <p className="text-white/70 mt-2 font-thin">{status}</p>}
            </form>
            </div>
          </div>

        {/* Footer */}
        <div className="border-t border-white/10 mt-20 pt-8">
          <div className="text-center">
            {currentYear && (
              <p className="text-white/60 font-thin">
                © {currentYear} SoberDevs. All rights reserved.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
