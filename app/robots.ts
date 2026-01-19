import { MetadataRoute } from "next";

/* ============================================
   ROBOTS.TXT CONFIGURATION
   
   Next.js automatically serves this at /robots.txt
   ============================================ */

const SITE_URL = "https://www.ras-vertex.com.au";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/thank-you", // Don't index thank you pages
          "/404",
          "/500",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/images/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
