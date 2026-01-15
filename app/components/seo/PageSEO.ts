import { Metadata } from "next";

/* ============================================
   PAGE SEO METADATA GENERATOR
   
   Use this to generate consistent metadata for each page.
   
   Usage in page.tsx:
   
   import { generatePageMetadata } from "@/components/seo/PageSEO";
   
   export const metadata = generatePageMetadata({
     title: "Commercial Painting Services",
     description: "Professional commercial painting...",
     path: "/services/painting",
     keywords: ["commercial painting", "exterior painting"],
   });
   ============================================ */

const SITE_URL = "https://www.ras-vertex.com.au";
const SITE_NAME = "RAS-VERTEX";

interface PageSEOConfig {
  /** Page title (will be appended with site name) */
  title: string;
  /** Page description (150-160 characters ideal) */
  description: string;
  /** Page path (e.g., "/services/painting") */
  path: string;
  /** Additional keywords for this page */
  keywords?: string[];
  /** Custom OG image (defaults to site OG image) */
  ogImage?: string;
  /** Prevent indexing (for thank you pages, etc.) */
  noIndex?: boolean;
  /** Page type for Open Graph */
  ogType?: "website" | "article" | "profile";
  /** Published date (for articles) */
  publishedTime?: string;
  /** Modified date (for articles) */
  modifiedTime?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = "/og-image.jpg",
  noIndex = false,
  ogType = "website",
  publishedTime,
  modifiedTime,
}: PageSEOConfig): Metadata {
  const url = `${SITE_URL}${path}`;

  // Default keywords for all pages
  const defaultKeywords = [
    "Sunshine Coast",
    "Brisbane",
    "Gold Coast",
    "Queensland",
    "commercial property maintenance",
  ];

  return {
    title,
    description,
    keywords: [...keywords, ...defaultKeywords],

    alternates: {
      canonical: url,
    },

    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },

    openGraph: {
      type: ogType,
      url,
      title: `${title} | ${SITE_NAME}`,
      description,
      siteName: SITE_NAME,
      locale: "en_AU",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
  };
}

/* ============================================
   PRE-CONFIGURED METADATA FOR COMMON PAGES
   ============================================ */

export const homePageMetadata = generatePageMetadata({
  title: "Commercial Property Maintenance Experts",
  description:
    "Queensland's trusted commercial property maintenance experts. Professional painting, cleaning, waterproofing, height safety & building services across Sunshine Coast, Brisbane & Gold Coast. 10+ years experience. Free quotes.",
  path: "/",
  keywords: [
    "commercial property maintenance",
    "building maintenance services",
    "facilities management",
    "property services Queensland",
  ],
});

export const contactPageMetadata = generatePageMetadata({
  title: "Contact Us | Get a Free Quote",
  description:
    "Contact RAS-VERTEX for a free property maintenance quote. Serving Sunshine Coast, Brisbane & Gold Coast. Call us today or fill out our quick online form.",
  path: "/contact",
  keywords: [
    "free quote",
    "contact property maintenance",
    "building maintenance quote",
  ],
});

export const paintingServiceMetadata = generatePageMetadata({
  title: "Commercial Painting Services",
  description:
    "Professional commercial painting services for Sunshine Coast, Brisbane & Gold Coast. Interior & exterior painting, heritage restoration, strata painting. Licensed & insured.",
  path: "/services/painting",
  keywords: [
    "commercial painting Sunshine Coast",
    "exterior painting Brisbane",
    "strata painting",
    "heritage painting Queensland",
  ],
});

export const cleaningServiceMetadata = generatePageMetadata({
  title: "Commercial Cleaning & Window Cleaning Services",
  description:
    "High-rise window cleaning and commercial building cleaning services. Rope access specialists serving Sunshine Coast, Brisbane & Gold Coast. IRATA certified.",
  path: "/services/cleaning",
  keywords: [
    "high-rise window cleaning",
    "commercial cleaning Sunshine Coast",
    "building facade cleaning",
    "rope access cleaning",
  ],
});

export const waterproofingServiceMetadata = generatePageMetadata({
  title: "Waterproofing Services",
  description:
    "Professional waterproofing services for balconies, roofs, wet areas & membranes. Protecting Queensland properties from water damage. Free inspections.",
  path: "/services/waterproofing",
  keywords: [
    "waterproofing Sunshine Coast",
    "balcony waterproofing",
    "roof waterproofing Brisbane",
    "membrane installation",
  ],
});

export const heightSafetyServiceMetadata = generatePageMetadata({
  title: "Height Safety & Rope Access Services",
  description:
    "IRATA certified rope access and height safety systems. Anchor point installation, safety inspections & compliance. Sunshine Coast, Brisbane & Gold Coast.",
  path: "/services/height-safety",
  keywords: [
    "rope access services",
    "height safety systems",
    "anchor point installation",
    "IRATA certified Queensland",
  ],
});

export const maintenanceServiceMetadata = generatePageMetadata({
  title: "Building Maintenance Services",
  description:
    "Ongoing commercial building maintenance services. Preventative maintenance, emergency repairs & property inspections. Trusted by body corporates & property managers.",
  path: "/services/maintenance",
  keywords: [
    "building maintenance Sunshine Coast",
    "property maintenance services",
    "body corporate maintenance",
    "facilities maintenance",
  ],
});
