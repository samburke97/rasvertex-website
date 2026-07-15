import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    // No AVIF — certain iOS Safari versions report AVIF support but fail to
    // actually decode some AVIF-encoded images, leaving the <img> blank
    // with no error (network request succeeds, it just never paints).
    // WebP has universal, reliable Safari/iOS support with no such issue.
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/gbphbpqf/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/cleaning", destination: "/external-cleaning", permanent: true },
      {
        source: "/blog/improve-the-look-and-value-of-your-property",
        destination: "/blog",
        permanent: true,
      },
      { source: "/blog/tag/:tag*", destination: "/blog", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
