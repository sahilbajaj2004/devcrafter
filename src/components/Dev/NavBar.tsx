"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

export default function Navbar({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 shadow-sm transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          DevCrafter
        </div>

        {/* Navigation + Theme toggle on the right */}
        <div className="flex items-center gap-8">
          {/* Nav Links */}
          <div className="flex items-center gap-6 text-lg font-medium text-gray-800 dark:text-gray-200">
            {["home", "about", "projects", "clients", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="relative group transition-all duration-300 hover:text-blue-700 dark:hover:text-blue-400"
              >
                <span className="capitalize">{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-800 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-white/10 transition"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
