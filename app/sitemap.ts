import { MetadataRoute } from "next";

/* ============================================
   DYNAMIC SITEMAP GENERATOR
   
   Next.js automatically serves this at /sitemap.xml
   
   Priority guidelines:
   - 1.0: Homepage
   - 0.9: Main service pages
   - 0.8: Contact, About
   - 0.7: Secondary pages
   - 0.6: Blog posts, case studies
   - 0.5: Legal pages, privacy policy
   ============================================ */

const SITE_URL = "https://www.ras-vertex.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Service pages - high priority for local SEO
  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/services/painting`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/cleaning`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/waterproofing`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/height-safety`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/maintenance`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Location pages - critical for local SEO
  const locationPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/locations/sunshine-coast`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/locations/brisbane`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/locations/gold-coast`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Company pages
  const companyPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/careers`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // Legal pages
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...companyPages,
    ...legalPages,
  ];
}
