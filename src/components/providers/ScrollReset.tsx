"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Lenis (mounted once in the root layout) keeps its own scroll position across
 * client-side navigations, so a new route can open stuck at the previous scroll
 * spot. Reset it to the top on every pathname change.
 */
export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
