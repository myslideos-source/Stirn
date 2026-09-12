/**
 * Zentrale Stammdaten des Betriebs (NAP: Name, Adresse, Telefon).
 * Diese Datei ist die einzige Quelle der Wahrheit für Kontaktdaten,
 * Schema.org-Angaben und Footer/Kontakt-Inhalte.
 */

export const site = {
  brandName: "STIRN.",
  brandSuffix: "MALERBETRIEB · FICHTENAU",
  legalName: "Jürgen Stirn Malerbetrieb",
  owner: "Jürgen Stirn",

  address: {
    street: "Grenzstraße 39",
    zip: "74579",
    city: "Fichtenau",
    region: "Baden-Württemberg",
    country: "DE",
  },

  phone: {
    display: "07962 421",
    href: "tel:+497962421",
  },

  email: {
    display: "sabine.stirn@t-online.de",
    href: "mailto:sabine.stirn@t-online.de",
  },

  // Platzhalter — vor Veröffentlichung durch die endgültige Domain ersetzen.
  url: "https://www.stirn-malerbetrieb.de",

  // Ausschließlich bestätigte Bewertungen — keine Erfindung einzelner Stimmen.
  rating: {
    value: 5.0,
    count: 5,
    source: "Malerfinder.de",
    // Platzhalter — vor Veröffentlichung mit dem tatsächlichen Profil-Link abgleichen.
    sourceUrl: "https://www.malerfinder.de/",
  },

  social: {
    // Platzhalter — nur eintragen, sobald vom Betrieb bestätigt.
  },

  nav: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Projekte", href: "#projekte" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Ablauf", href: "#ablauf" },
  ],

  legalNav: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
} as const;

export type Site = typeof site;
