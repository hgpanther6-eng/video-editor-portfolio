import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ronakgadhavi.com'),
  title: {
    default: "Ronak Gadhavi — Video Editor & Motion Designer",
    template: "%s | Ronak Gadhavi",
  },
  description:
    "Ronak Gadhavi is a video editor and motion designer with 2.5+ years of experience creating engaging visual experiences for brands, businesses and creators. Based in Ahmedabad, India.",
  keywords: [
    "video editor",
    "motion designer",
    "video editing",
    "motion graphics",
    "product films",
    "corporate videos",
    "social media content",
    "Ahmedabad",
    "India",
    "Adobe Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
  ],
  authors: [{ name: "Ronak Gadhavi" }],
  creator: "Ronak Gadhavi",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ronakgadhavi.com",
    siteName: "Ronak Gadhavi",
    title: "Ronak Gadhavi — Video Editor & Motion Designer",
    description:
      "Video editor and motion designer creating engaging visual experiences for brands, businesses and creators. Based in Ahmedabad, India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ronak Gadhavi — Video Editor & Motion Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronak Gadhavi — Video Editor & Motion Designer",
    description:
      "Video editor and motion designer creating engaging visual experiences for brands, businesses and creators.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_SITE_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://ronakgadhavi.com" />
        <meta name="theme-color" content="#1a1a18" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-warm-white text-charcoal antialiased">
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
