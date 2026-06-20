import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Marquee from "@/components/sections/Marquee";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function SoberDevWebsite() {
  return (
    <main className="relative bg-black">
      <Navbar />
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
