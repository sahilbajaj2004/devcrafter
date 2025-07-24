import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "DevCrafter - Digital Agency",
  description:
    "Crafting digital experiences that push boundaries and redefine possibilities. Modern web development, UI/UX design, and digital strategy.",
  keywords: "web development, UI/UX design, digital agency, mobile apps, digital strategy",
  authors: [{ name: "DevCrafter" }],
  openGraph: {
    title: "DevCrafter - Digital Agency",
    description: "Crafting digital experiences that push boundaries and redefine possibilities.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
