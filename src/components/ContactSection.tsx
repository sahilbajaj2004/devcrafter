"use client";
import { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

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
  const [currentYear, setCurrentYear] = useState<number | null>(null);

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
        access_key: "b439ca96-e064-42f2-819b-2f0ac2fd54a9",
        ...formData,
      }),
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      setStatus("SUCCESS: WE'LL BE IN TOUCH.");
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
      setStatus("ERROR: PLEASE TRY AGAIN.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden noise">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-indigo-500 font-bold mb-4">
              Get in Touch
            </h2>
            <h3 className="text-5xl md:text-8xl font-display font-bold text-white leading-[0.85] tracking-tighter">
              READY TO <br /> <span className="text-white/20">START?</span>
            </h3>
          </div>
          <div className="space-y-4 text-right">
            <p className="text-white/60 text-sm font-light uppercase tracking-widest">Available for new projects</p>
            <div className="flex justify-end gap-6">
              <a href="mailto:soberdev.help@gmail.com" className="text-white hover:text-indigo-500 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://github.com/sahilbajaj2004" className="text-white hover:text-indigo-500 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/soberdev" className="text-white hover:text-indigo-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="group cursor-default">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold mb-2 group-hover:text-indigo-500 transition-colors">Direct Mail</h4>
              <p className="text-2xl text-white font-light">devssober@gmail.com</p>
            </div>
            <div className="group cursor-default">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold mb-2 group-hover:text-indigo-500 transition-colors">Inquiries</h4>
              <p className="text-2xl text-white font-light">+91 9811058531</p>
            </div>
            <div className="group cursor-default">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold mb-2 group-hover:text-indigo-500 transition-colors">Location</h4>
              <p className="text-2xl text-white font-light">DELHI, INDIA</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="FIRST NAME"
                  required
                  className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-indigo-500 transition-colors font-display font-bold tracking-widest text-[11px]"
                />
              </div>
              <div className="relative group">
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="LAST NAME"
                  required
                  className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-indigo-500 transition-colors font-display font-bold tracking-widest text-[11px]"
                />
              </div>
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="EMAIL ADDRESS"
              required
              className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-indigo-500 transition-colors font-display font-bold tracking-widest text-[11px]"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="TELL US ABOUT YOUR PROJECT"
              rows={4}
              required
              className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-indigo-500 transition-colors font-display font-bold tracking-widest text-[11px] resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-6 bg-white text-black font-display font-bold tracking-[0.2em] text-[11px] hover:bg-indigo-500 hover:text-white transition-all duration-500"
            >
              {loading ? "SENDING..." : "DISPATCH MESSAGE"}
            </button>

            {status && (
              <p className="text-[10px] font-bold tracking-widest text-indigo-500 text-center">{status}</p>
            )}
          </form>
        </div>

        <footer className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase">
            © {currentYear} SOBERDEV DIGITAL INC.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold tracking-[0.3em] text-white/50 hover:text-white transition-colors">TWITTER</a>
            <a href="#" className="text-[10px] font-bold tracking-[0.3em] text-white/50 hover:text-white transition-colors">LINKEDIN</a>
            <a href="#" className="text-[10px] font-bold tracking-[0.3em] text-white/50 hover:text-white transition-colors">DRIBBBLE</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
