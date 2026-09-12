/**
 * Zentrale Stammdaten des Betriebs (NAP: Name, Adresse, Telefon).
 * Diese Datei ist die einzige Quelle der Wahrheit für Kontaktdaten,
 * Schema.org-Angaben und Footer/Kontakt-Inhalte.
 */

export const site = {
  brandName: "BRUNNER.",
  brandSuffix: "MALERMEISTER · CRAILSHEIM",
  legalName: "Markus Brunner Malermeister",
  owner: "Markus Brunner",

  address: {
    street: "Seeweg 5/1",
    zip: "74564",
    city: "Crailsheim-Tiefenbach",
    region: "Baden-Württemberg",
    country: "DE",
  },

  phone: {
    display: "07951 295158",
    href: "tel:+497951295158",
  },

  fax: {
    display: "07951 294351",
  },

  email: {
    display: "m.brunner@malerbetrieb-brunner.de",
    href: "mailto:m.brunner@malerbetrieb-brunner.de",
  },

  // Reale, vom Betrieb genannte Domain.
  url: "https://www.malerbetrieb-brunner.de",

  serviceArea: "Crailsheim und Umgebung",

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Seeweg 5/1, 74564 Crailsheim-Tiefenbach"),

  nav: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Arbeiten", href: "#arbeiten" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Kontakt", href: "#kontakt" },
  ],

  legalNav: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
} as const;

export type Site = typeof site;
