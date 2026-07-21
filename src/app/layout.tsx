import type { Metadata } from "next";
import { Dela_Gothic_One, Inter } from "next/font/google";
import "./globals.css";

const delaGothic = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cambionatur.al"),
  title: {
    default: "Cambio Natural — Bridge Builders for Planetary Health",
    template: "%s — Cambio Natural",
  },
  description:
    "Cambio Natural is a collective supporting bridge builders and caregivers with technology, gatherings and community, bringing wisdom from the margins to transformative action for Planetary Health.",
  openGraph: {
    siteName: "Cambio Natural",
    type: "website",
    locale: "en_US",
    url: "https://cambionatur.al",
    title: "Cambio Natural — Bridge Builders for Planetary Health",
    description:
      "A collective supporting bridge builders and caregivers with technology, gatherings and community.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambio Natural — Bridge Builders for Planetary Health",
    description:
      "A collective supporting bridge builders and caregivers with technology, gatherings and community.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${delaGothic.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
