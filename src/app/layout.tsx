import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import { MobileActionBar } from "@/components/MobileActionBar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Malermeister Jürgen Stirn | Malerbetrieb in Fichtenau",
    template: "%s | STIRN. Malerbetrieb Fichtenau",
  },
  description:
    "Jürgen Stirn Malerbetrieb in Fichtenau – persönliche Beratung, sorgfältige Malerarbeiten und hochwertige Oberflächen. Jetzt Projekt unverbindlich anfragen.",
  keywords: [
    "Maler Fichtenau",
    "Malerbetrieb Fichtenau",
    "Malermeister Fichtenau",
    "Maler Crailsheim",
    "Fassadenanstrich Fichtenau",
    "Malerarbeiten Innenraum",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: "STIRN. Malerbetrieb Fichtenau",
    title: "Malermeister Jürgen Stirn | Malerbetrieb in Fichtenau",
    description:
      "Persönliches Malerhandwerk aus Fichtenau: Innenraum, Fassade, Lackierung, Tapezierarbeiten und Farbberatung.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malermeister Jürgen Stirn | Malerbetrieb in Fichtenau",
    description:
      "Persönliches Malerhandwerk aus Fichtenau: Innenraum, Fassade, Lackierung, Tapezierarbeiten und Farbberatung.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2efe8",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  name: site.legalName,
  image: `${site.url}/opengraph-image`,
  telephone: site.phone.href.replace("tel:", ""),
  email: site.email.display,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: {
    "@type": "City",
    name: site.address.city,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
  },
  founder: {
    "@type": "Person",
    name: site.owner,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <MobileActionBar />
      </body>
    </html>
  );
}
