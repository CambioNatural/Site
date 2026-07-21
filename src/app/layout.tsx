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
  title: "Cambio Natural",
  description:
    "A collective supporting bridge builders and caregivers with technology, gatherings and community.",
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
