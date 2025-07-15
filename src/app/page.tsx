"use client";

import { useState } from "react";
import Navbar from "@/components/Dev/NavBar";
import Hero from "@/components/Dev/Hero";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <main
      className={`${
        isDark ? "dark" : ""
      } min-h-screen bg-white dark:bg-black transition-colors font-sans`}
    >
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* Hero Section */}
      <Hero />
    </main>
  );
}
