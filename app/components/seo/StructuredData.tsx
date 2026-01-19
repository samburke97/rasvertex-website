/* ============================================
   SCHEMA.ORG STRUCTURED DATA COMPONENTS
   
   These generate JSON-LD structured data for rich search results.
   Critical for local SEO and service-based businesses.
   
   Test your structured data at:
   https://search.google.com/test/rich-results
   https://validator.schema.org/
   ============================================ */

// ============================================
// ORGANIZATION SCHEMA
// Appears in Knowledge Panel
// ============================================
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.ras-vertex.com.au/#organization",
    name: "RAS-VERTEX",
    alternateName: "RAS-VERTEX Property Services",
    url: "https://www.ras-vertex.com.au",
    logo: {
      "@type": "ImageObject",
      url: "https://www.ras-vertex.com.au/logo.png",
      width: 400,
      height: 100,
    },
    image: "https://www.ras-vertex.com.au/og-image.jpg",
    description:
      "Queensland's trusted commercial property maintenance experts providing painting, cleaning, waterproofing, height safety, and building maintenance services across Sunshine Coast, Brisbane, and Gold Coast.",
    foundingDate: "2014",
    founders: [
      {
        "@type": "Person",
        name: "RAS-VERTEX Founders",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "", // Add your street address
      addressLocality: "Sunshine Coast",
      addressRegion: "QLD",
      postalCode: "4551", // Update with actual postcode
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.65,
      longitude: 153.0667,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+61-XXX-XXX-XXX", // Add your phone number
        contactType: "customer service",
        email: "info@ras-vertex.com.au", // Add your email
        areaServed: ["AU-QLD"],
        availableLanguage: ["English"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "17:00",
        },
      },
    ],
    sameAs: [
      "https://www.facebook.com/rasvertex", // Add your social links
      "https://www.instagram.com/rasvertex",
      "https://www.linkedin.com/company/ras-vertex",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Sunshine Coast",
        "@id": "https://www.wikidata.org/wiki/Q1355083",
      },
      {
        "@type": "City",
        name: "Brisbane",
        "@id": "https://www.wikidata.org/wiki/Q34932",
      },
      {
        "@type": "City",
        name: "Gold Coast",
        "@id": "https://www.wikidata.org/wiki/Q140075",
      },
    ],
    slogan: "Higher Standards in Property Maintenance",
    knowsAbout: [
      "Commercial Painting",
      "Building Maintenance",
      "Waterproofing",
      "Height Safety Systems",
      "Rope Access",
      "Commercial Cleaning",
      "Window Cleaning",
      "Property Maintenance",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================
// LOCAL BUSINESS SCHEMA
// Critical for "near me" searches and Google Maps
// ============================================
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.ras-vertex.com.au/#localbusiness",
    name: "RAS-VERTEX",
    image: [
      "https://www.ras-vertex.com.au/images/storefront-1x1.jpg",
      "https://www.ras-vertex.com.au/images/storefront-4x3.jpg",
      "https://www.ras-vertex.com.au/images/storefront-16x9.jpg",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "", // Add street address
      addressLocality: "Sunshine Coast",
      addressRegion: "QLD",
      postalCode: "4551",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.65,
      longitude: 153.0667,
    },
    url: "https://www.ras-vertex.com.au",
    telephone: "+61-XXX-XXX-XXX",
    email: "info@ras-vertex.com.au",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127", // Update with actual review count
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Property Manager",
        },
        reviewBody:
          "Exceptional service from the RAS-VERTEX team. Professional, reliable, and excellent attention to detail.",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Property Maintenance Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Commercial Painting",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Interior Commercial Painting",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Exterior Commercial Painting",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Building Cleaning",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "High-Rise Window Cleaning",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Building Facade Cleaning",
              },
            },
          ],
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================
// SERVICE SCHEMA
// For individual service pages
// ============================================
interface ServiceSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  provider?: string;
  areaServed?: string[];
  serviceType?: string;
}

export function ServiceSchema({
  name,
  description,
  image,
  url,
  provider = "RAS-VERTEX",
  areaServed = ["Sunshine Coast", "Brisbane", "Gold Coast"],
  serviceType,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    image,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: provider,
      "@id": "https://www.ras-vertex.com.au/#localbusiness",
    },
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
      servicePhone: "+61-XXX-XXX-XXX",
      serviceSmsNumber: "+61-XXX-XXX-XXX",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================
// FAQ SCHEMA
// For FAQ sections - appears as rich results
// ============================================
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================
// BREADCRUMB SCHEMA
// For navigation hierarchy in search results
// ============================================
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================
// WEBSITE SEARCH SCHEMA
// Enables sitelinks search box in Google
// ============================================
export function WebsiteSearchSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.ras-vertex.com.au/#website",
    url: "https://www.ras-vertex.com.au",
    name: "RAS-VERTEX",
    description: "Commercial Property Maintenance Services",
    publisher: {
      "@id": "https://www.ras-vertex.com.au/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.ras-vertex.com.au/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
