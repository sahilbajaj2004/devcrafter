import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Prefer using a canonical site URL if provided; fallback to production URL
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://soberdevS.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "SoberDev",
  title: {
    default: "SoberDev - Digital Agency",
    template: "%s | SoberDev",
  },
  description:
    "Crafting digital experiences that push boundaries and redefine possibilities. Modern web development, UI/UX design, and digital strategy.",
  keywords:
    "web development, UI/UX design, digital agency, mobile apps, digital strategy, frontend, backend, product design, SaaS",
  authors: [{ name: "SoberDev" }],
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SoberDev - Digital Agency",
    description:
      "Crafting digital experiences that push boundaries and redefine possibilities.",
    type: "website",
    url: "/",
    siteName: "SoberDev",
    images: ["/soberdev.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoberDev - Digital Agency",
    description:
      "Crafting digital experiences that push boundaries and redefine possibilities.",
    images: ["/soberdev.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f19",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        {/* Basic JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SoberDev",
              url: SITE_URL,
              logo: new URL("/soberdev.jpg", SITE_URL).toString(),
            }),
          }}
        />
      </body>
    </html>
  );
}
