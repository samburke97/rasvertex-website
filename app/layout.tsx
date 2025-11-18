import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title:
    "RAS-VERTEX | Facilities Maintenance & Building Services | Sunshine Coast",
  description:
    "Professional waterproofing, maintenance cleaning, high-rise window cleaning, and building services across Sunshine Coast, Brisbane, and Gold Coast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/nuk5csv.css" />
      </head>
      <body>
        <Navigation />
        <main style={{ paddingTop: "80px" }}>{children}</main>
      </body>
    </html>
  );
}
