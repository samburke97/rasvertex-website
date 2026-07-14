import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./styles/globals.css";
import Navigation from "./components/layout/navigation/Navigation";
import Footer from "./components/layout/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--inter-font",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--bebas-font",
});
import {
  LocalBusinessSchema,
  OrganizationSchema,
} from "./components/seo/StructuredData";

/* ============================================
   SITE-WIDE SEO CONFIGURATION
   ============================================ */

const SITE_NAME = "RAS-VERTEX";
const SITE_URL = "https://www.rasvertex.com.au";
const SITE_LOCALE = "en_AU";

// Primary keywords for Sunshine Coast commercial property maintenance
const PRIMARY_KEYWORDS = [
  "commercial property maintenance Sunshine Coast",
  "commercial painting Sunshine Coast",
  "residential painting Sunshine Coast",
  "body corporate painting Sunshine Coast",
  "external building cleaning Sunshine Coast",
  "high-rise window cleaning Sunshine Coast",
  "waterproofing services Sunshine Coast",
  "rope access services Sunshine Coast",
  "body corporate maintenance Sunshine Coast",
  "building maintenance Sunshine Coast",
  "height safety systems Sunshine Coast",
  "building inspections Sunshine Coast",
  "property maintenance Hervey Bay",
  "commercial painting north Brisbane",
];

export const metadata: Metadata = {
  // ============================================
  // BASIC META
  // ============================================
  title: "Commercial Property Maintenance Sunshine Coast | RAS-VERTEX",
  description:
    "The Sunshine Coast's property maintenance specialists. Painting, external & window cleaning, waterproofing, maintenance & height safety. 25+ years experience.",
  keywords: PRIMARY_KEYWORDS,
  authors: [{ name: "RAS-VERTEX", url: SITE_URL }],
  creator: "RAS-VERTEX",
  publisher: "RAS-VERTEX",

  // ============================================
  // CRAWLING & INDEXING
  // ============================================
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ============================================
  // OPEN GRAPH (Facebook, LinkedIn, etc.)
  // ============================================
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Commercial Property Maintenance Sunshine Coast | RAS-VERTEX",
    description:
      "The Sunshine Coast's trusted property maintenance experts. Painting, external & window cleaning, waterproofing, maintenance & height safety. 25+ years experience.",
    images: [
      {
        url: "/og-image.jpg", // 1200x630px recommended
        width: 1200,
        height: 630,
        alt: "RAS-VERTEX Commercial Property Maintenance Services",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg", // 1200x1200px for LinkedIn
        width: 1200,
        height: 1200,
        alt: "RAS-VERTEX, 25 Years of Excellence",
        type: "image/jpeg",
      },
    ],
  },

  // ============================================
  // TWITTER CARDS
  // ============================================
  twitter: {
    card: "summary_large_image",
    site: "@rasvertex", // Update with actual Twitter handle
    creator: "@rasvertex",
    title: "RAS-VERTEX | Commercial Property Maintenance",
    description:
      "Queensland's trusted commercial property maintenance experts. Painting, cleaning, waterproofing & height safety services.",
    images: ["/twitter-image.jpg"], // 1200x600px recommended
  },

  // ============================================
  // ICONS & PWA
  // ============================================
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#06141b" },
    ],
  },
  manifest: "/site.webmanifest",

  // ============================================
  // VERIFICATION (Add your codes)
  // ============================================
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Google Search Console
    // yandex: "YOUR_YANDEX_CODE",
    // bing: "YOUR_BING_CODE",
  },

  // ============================================
  // OTHER
  // ============================================
  category: "Business Services",
  classification: "Commercial Property Maintenance",

  other: {
    "geo.region": "AU-QLD",
    "geo.placename": "Sunshine Coast",
    "geo.position": "-26.6500;153.0667", // Sunshine Coast coordinates
    ICBM: "-26.6500, 153.0667",
    rating: "general",
    distribution: "global",
    "revisit-after": "7 days",
  },
};

// ============================================
// VIEWPORT CONFIGURATION
// ============================================
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#06141b" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      dir="ltr"
      className={`${inter.variable} ${bebasNeue.variable}`}
    >
      <body>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to main content
        </a>

        {/* Schema.org Structured Data */}
        <OrganizationSchema />
        <LocalBusinessSchema />

        <Navigation />

        <main id="main-content" role="main" style={{ paddingTop: "72px" }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
