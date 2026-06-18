import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";

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
