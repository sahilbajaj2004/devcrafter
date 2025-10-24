"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Ensure the logic runs only on the client side
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
        setLastScrollY(currentScrollY);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollY]);

  // 🔹 Reusable scroll function for all nav items
  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    } else {
      window.location.hash = id;
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 pointer-events-auto"
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-thin text-white"
          whileHover={{ scale: 1.05 }}
        >
          DevCrafter
        </motion.div>

        {/* 🔹 All nav items now scroll smoothly */}
        <div className="hidden md:flex space-x-8">
          {["About", "Services", "Projects", "Contact"].map((item) => {
            const id = item.toLowerCase();
            return (
              <motion.button
                key={item}
                onClick={() => handleScrollTo(id)}
                className="text-white/80 hover:text-white font-thin transition-colors bg-transparent border-none cursor-pointer"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.button>
            );
          })}
        </div>

        {/* 🔹 Get Started also uses same handler */}
        <Button
          variant="outline"
          onClick={() => handleScrollTo("contact")}
          className="border-white/20 text-gray-400 hover:bg-white hover:text-black"
        >
          Get Started
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
