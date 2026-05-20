import type React from "react";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Syne } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

// Prefer using a canonical site URL if provided; fallback to production URL
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://soberdev.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "SoberDev",
  title: {
    default: "SoberDev - Digital Agency",
    template: "%s | SoberDev",
  },
  description:
    "SoberDev — crafting better digital experiences that push boundaries and redefine possibilities. Modern web development, UI/UX design, and digital strategy.",
  keywords:
    "soberdev, better experiences, web development, UI/UX design, digital agency, mobile apps, digital strategy, frontend, backend, product design, SaaS, React, Next.js, TypeScript, Tailwind CSS, accessibility, performance optimization, PWA, e-commerce, API development, cloud, DevOps, prototyping, user research, SEO, content strategy, branding, animation, serverless, headless CMS, GraphQL, Node.js, JavaScript, HTML, CSS",
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
      "SoberDev — crafting better digital experiences that push boundaries and redefine possibilities.",
    type: "website",
    url: SITE_URL,
    siteName: "SoberDev",
    images: [new URL("/soberdev.jpg", SITE_URL).toString()],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoberDev - Digital Agency",
    description:
      "SoberDev — crafting better digital experiences that push boundaries and redefine possibilities.",
    images: [new URL("/soberdev.jpg", SITE_URL).toString()],
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
      <body className={`${bricolage.variable} ${syne.variable} font-sans antialiased bg-black`}>
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] noise" />
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
