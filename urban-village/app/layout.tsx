import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urbanvillagebyterivik.com"),
  title: "Urban Village by Terivik | Relaxation Park & Restaurant, Maitama Abuja",
  description:
    "Abuja's premier outdoor escape. Dine, unwind, and play at Urban Village by Terivik Park — lush gardens, great food, cocktails, spa, and events in Maitama.",
  icons: {
    icon: [
      { url: "/images/urban-village-logo.png", type: "image/png" },
      { url: "/images/urban-village-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/urban-village-logo.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/images/urban-village-logo.png",
    apple: [{ url: "/images/urban-village-logo.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Urban Village by Terivik — Maitama, Abuja",
    description:
      "A park. A table. A moment that's yours. Dining, drinks, wellness and events in the heart of Maitama.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Restaurant"],
  name: "Urban Village by Terivik",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Terivik Park, Alvan Ikoku, Nile Street Junction",
    addressLocality: "Maitama, Abuja",
    addressCountry: "NG",
  },
  telephone: "+2348033337998",
  email: "terivikparkurbanvillage@gmail.com",
  openingHours: ["Mo-Sa 10:00-23:00", "Su 14:00-00:00"],
  servesCuisine: ["Nigerian", "International"],
  priceRange: "₦₦₦",
  geo: { "@type": "GeoCoordinates", latitude: 9.0970065, longitude: 7.4802306 },
  sameAs: [
    "https://www.instagram.com/urbanvillagebyterivik/",
    "https://www.facebook.com/p/Urban-Village-by-TeriVik-61552014205588/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:text-sm focus:bg-terracotta focus:text-cream"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
