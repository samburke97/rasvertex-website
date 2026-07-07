import { MetadataRoute } from "next";
import { BLOG_POSTS } from "./data/blogData";

/* ============================================
   DYNAMIC SITEMAP GENERATOR

   Next.js automatically serves this at /sitemap.xml

   Priority guidelines:
   - 1.0: Homepage
   - 0.9: Main service pages
   - 0.8: Contact, about
   - 0.7: Secondary pages (careers, projects)
   - 0.6: Blog index + posts
   ============================================ */

const SITE_URL = "https://www.ras-vertex.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

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
      url: `${SITE_URL}/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Service pages - high priority for local SEO
  const servicePages: MetadataRoute.Sitemap = [
    "/painting",
    "/commercial-painting",
    "/body-corporate-painting",
    "/residential-painting",
    "/external-cleaning",
    "/window-cleaning",
    "/waterproofing",
    "/height-safety",
    "/maintenance",
    "/building-inspections",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

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

  // Blog
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt).toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticPages, ...servicePages, ...companyPages, ...blogPages];
}
