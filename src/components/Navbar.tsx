"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        
        // Hide if scrolling down and past 50px, show if scrolling up or at top
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Full-width wrapper for perfect centering */}
      <div className="fixed top-4 inset-x-0 z-50 px-4 flex justify-center pointer-events-none">
        <motion.nav
          className="w-full max-w-6xl glass rounded-full px-4 sm:px-6 py-2 sm:py-3 pointer-events-auto"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="text-base md:text-lg font-display font-bold text-white tracking-tighter cursor-pointer flex-shrink-0"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.05 }}
            >
              SOBER<span className="text-indigo-500">DEV</span>
            </motion.div>

            {/* Desktop Nav - Middle */}
            <div className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
              {["About", "Services", "Projects"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item.toLowerCase())}
                  className="text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all font-bold whitespace-nowrap"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <Button
                onClick={() => handleScrollTo("contact")}
                className="bg-white text-black hover:bg-indigo-500 hover:text-white rounded-full px-4 md:px-7 py-2 md:py-3 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 h-auto"
              >
                LET&apos;S TALK
              </Button>

              {/* Mobile Toggle */}
              <button 
                className="md:hidden text-white p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-2xl md:hidden flex items-center justify-center p-6"
          >
            <button 
              className="absolute top-8 right-8 text-white p-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-10 text-center">
              {["About", "Services", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item.toLowerCase())}
                  className="text-5xl font-display font-bold text-white tracking-tighter hover:text-indigo-500 transition-colors uppercase"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
