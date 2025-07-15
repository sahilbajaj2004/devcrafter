"use client";

export default function Hero() {
  return (
    <section className="relative px-4 sm:px-8 pt-38 pb-38 text-left bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-[2.75rem] sm:text-[4rem] md:text-[5rem] lg:text-[6.25rem] leading-[1.2] font-black text-black dark:text-white uppercase tracking-tight">
          <span className="block mb-6">DEVCRAFTER IS</span>

          {/* Brush behind the entire main phrase */}
          <span className="relative inline-block w-fit">
            {/* Brush Image */}
            <div
              className="absolute inset-0 -top-3 -bottom-3 -left-4 -right-4 z-0 pointer-events-none"
              style={{
                backgroundColor: "#1e3a8a", // Tailwind blue-800
                WebkitMaskImage: "url(/yellow.avif)",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                WebkitMaskPosition: "center",
                maskImage: "url(/yellow.avif)",
                maskRepeat: "no-repeat",
                maskSize: "cover",
                maskPosition: "center",
                opacity: 1,
              }}
            />

            {/* Foreground Text */}
            <span className="relative z-10 px-4 py-2 text-black dark:text-white">
              WHERE BLOCKCHAIN MEETS THE REAL WORLD
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}
