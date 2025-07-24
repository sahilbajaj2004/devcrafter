"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  Code,
  Palette,
  Smartphone,
  Globe,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

// Animated Background Components
const GridBackground = () => (
  <div className="absolute inset-0 opacity-30">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
        linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
      `,
        backgroundSize: "50px 50px",
      }}
    />
  </div>
)

const ParticleBackground = () => (
  <div className="absolute inset-0">
    {[...Array(50)].map((_, i) => {
      const randomX = Math.random() * 200 - 100
      const randomY = Math.random() * 200 - 100
      const randomRotation = Math.random() * 360

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
      )
    })}
  </div>
)

// Navbar Component
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      animate={{
        y: isVisible ? 0 : -100,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div className="text-2xl font-thin text-white" whileHover={{ scale: 1.05 }}>
            DevCrafter
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["About", "Services", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white font-thin transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}

// Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <GridBackground />
      <ParticleBackground />
      <motion.div className="relative z-10 text-center px-4" style={{ y }}>
        <motion.h1
          className="text-6xl md:text-8xl font-thin text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          DevCrafter
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white/80 font-thin mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Crafting digital experiences that push boundaries and redefine possibilities
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Button size="lg" className="bg-white text-black hover:bg-white/90 font-thin px-8 py-3 group">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

// About Section
const AboutSection = () => (
  <section id="about" className="relative py-20 bg-transparent overflow-hidden">
    <GridBackground />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-8">About Us</h2>
        <p className="text-xl text-gray-800 font-thin leading-relaxed mb-8">
          We are a collective of digital artisans, dedicated to transforming ideas into extraordinary digital
          experiences. Our approach combines cutting-edge technology with timeless design principles to create
          solutions that not only function flawlessly but inspire and engage.
        </p>
        <p className="text-lg text-gray-700 font-thin leading-relaxed">
          From concept to deployment, we craft every pixel with purpose, every interaction with intention, and every
          line of code with precision.
        </p>
      </motion.div>
    </div>
  </section>
)

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and engagement.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Digital Strategy",
      description: "Comprehensive digital solutions tailored to your business objectives.",
    },
  ]

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
                  <motion.div className="text-white mb-4 flex justify-center" whileHover={{ scale: 1.1, rotate: 5 }}>
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-thin text-white mb-3">{service.title}</h3>
                  <p className="text-white/70 font-thin text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with seamless checkout",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://example.com/ecommerce",
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics platform with real-time data visualization",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://example.com/saas-dashboard",
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive financial management",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://example.com/mobile-banking",
    },
    {
      title: "Portfolio Website",
      description: "Creative showcase for digital artist",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://example.com/portfolio",
    },
  ]

  return (
    <section id="projects" className="relative py-20 bg-transparent overflow-hidden">
      <GridBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-thin text-gray-900 text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-thin mb-2">{project.title}</h3>
                      <p className="text-white/80 font-thin">{project.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section with Web3Forms
const ContactSection = () => {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.target)
    formData.append("access_key", "b439ca96-e064-42f2-819b-2f0ac2fd54a9")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json,
    })

    const result = await response.json()
    setLoading(false)
    if (result.success) {
      setStatus("Message sent successfully!")
      event.target.reset()
    } else {
      setStatus("Something went wrong. Please try again.")
    }
  }

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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-thin text-white mb-6">Get In Touch</h3>
            <p className="text-white/70 font-thin mb-8 leading-relaxed">
              Ready to bring your vision to life? Let&apos;s discuss how we can craft something extraordinary together.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/60" />
                <a href="mailto:devcrafter.help@gmail.com" className="text-white/80 font-thin hover:underline">
                  devcrafter.help@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/60" />
                <a href="tel:+919811058531" className="text-white/80 font-thin hover:underline">
                  +91 9811058531
                </a>
                <a href="tel:+918459085768" className="text-white/80 font-thin hover:underline">
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
                  className="text-white/60 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="first_name"
                  placeholder="First Name"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 font-thin"
                  required
                />
                <Input
                  name="last_name"
                  placeholder="Last Name"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 font-thin"
                  required
                />
              </div>
                <Input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 font-thin"
                required
                />
                <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 font-thin"
                required
                />
                <Textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 font-thin resize-none"
                required
                />
              <Button type="submit" disabled={loading} className="w-full bg-white text-black hover:bg-white/90 font-thin py-3">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
            {status && <p className="mt-4 text-center text-white/70">{status}</p>}
          </motion.div>
        </div>
        <motion.div
          className="border-t border-white/10 mt-20 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-white/60 font-thin">© {new Date().getFullYear()} DevCrafter. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Component
export default function DevCrafterWebsite() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
