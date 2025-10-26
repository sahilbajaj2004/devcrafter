import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL || "https://devcrafter.vercel.app";
  const siteUrl = raw.replace(/\/$/, "");

  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
