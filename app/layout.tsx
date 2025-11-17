import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

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
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
