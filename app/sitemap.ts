import { MetadataRoute } from "next";
import { execSync } from "child_process";
import path from "path";
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

const SITE_URL = "https://www.rasvertex.com.au";

// lastModified should reflect when a page's content actually changed, not
// today's date on every single build — Google's own guidance is that it
// discounts a sitemap where every URL always says "just updated". Pulling
// it from git history is zero-maintenance and always honest: a page's date
// only moves when someone actually edits app/<route>/page.tsx.
function getLastModified(pageFilePath: string): string {
  try {
    const absPath = path.join(process.cwd(), pageFilePath);
    const output = execSync(`git log -1 --format=%aI -- "${absPath}"`, {
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (output) return new Date(output).toISOString();
  } catch {
    // Git history unavailable in this environment — fall through.
  }
  return new Date().toISOString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: getLastModified("app/page.tsx"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: getLastModified("app/contact/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified: getLastModified("app/about-us/page.tsx"),
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
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: getLastModified(`app${route}/page.tsx`),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Company pages
  const companyPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/projects`,
      lastModified: getLastModified("app/projects/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // Blog
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/blog`,
      lastModified: getLastModified("app/blog/page.tsx"),
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
