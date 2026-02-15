import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://plymouthapplabs.com";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/swipecardz/ap-psych`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/swipecardz/sat`, lastModified: new Date(), priority: 0.8 },
  ];
}
