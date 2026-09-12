import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import { MobileActionBar } from "@/components/MobileActionBar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Malerbetrieb Brunner | Malermeister in Crailsheim",
    template: "%s | BRUNNER. Malermeister Crailsheim",
  },
  description:
    "Markus Brunner Malermeister in Crailsheim-Tiefenbach – Malerarbeiten, Fassaden, Lackier- und Tapezierarbeiten. Jetzt Projekt anfragen.",
  keywords: [
    "Maler Crailsheim",
    "Malerbetrieb Crailsheim",
    "Malermeister Crailsheim",
    "Fassadenanstrich Crailsheim",
    "Malerarbeiten Innenraum Crailsheim",
    "Maler Tiefenbach",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: "BRUNNER. Malermeister Crailsheim",
    title: "Malerbetrieb Brunner | Malermeister in Crailsheim",
    description:
      "Malerarbeiten mit Gespür für Farbe, Material und Raum – für private und gewerbliche Projekte in Crailsheim und Umgebung.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malerbetrieb Brunner | Malermeister in Crailsheim",
    description:
      "Malerarbeiten mit Gespür für Farbe, Material und Raum – für private und gewerbliche Projekte in Crailsheim und Umgebung.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f1ea",
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
    addressLocality: "Crailsheim",
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: {
    "@type": "City",
    name: "Crailsheim",
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
