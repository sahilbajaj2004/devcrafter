import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import NotFound from "@/components/NotFound";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist or has moved.",
};

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-black text-white noise">
      <SiteHeader />
      <NotFound />
      <SiteFooter />
    </main>
  );
}
