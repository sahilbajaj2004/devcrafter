"use client";

import { MARQUEE } from "@/lib/data";

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {MARQUEE.map((s, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="font-display text-2xl font-semibold text-white/70 sm:text-4xl">{s}</span>
          <span className="text-indigo-500 text-xl">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.015] py-6">
      <div className="flex w-max animate-marquee will-change-transform">
        <Row />
        <Row />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}
