/**
 * Zentrale Leistungs-Konfiguration.
 *
 * WICHTIG: Diese Leistungen sind vor Veröffentlichung der Webseite mit dem
 * Betrieb (Markus Brunner) abzustimmen. Texte sind vorläufige, plausible
 * Beispielbeschreibungen — keine bestätigten Verfahren, Materialmarken
 * oder Zertifikate. Einträge können hier einfach ergänzt, geändert oder
 * entfernt werden; die Reihenfolge im Array bestimmt die Darstellung.
 */

export type Service = {
  number: string;
  slug: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: "01",
    slug: "innenraeume",
    title: "Innenräume",
    description:
      "Saubere Wand- und Deckengestaltung für Wohnräume, Büros und gewerbliche Flächen.",
  },
  {
    number: "02",
    slug: "fassaden",
    title: "Fassaden",
    description:
      "Schutz und Gestaltung für Fassaden – fachgerecht ausgeführt und passend zur Architektur.",
  },
  {
    number: "03",
    slug: "lackierarbeiten",
    title: "Lackierarbeiten",
    description:
      "Hochwertige Oberflächen für Türen, Rahmen, Geländer und weitere Bauteile.",
  },
  {
    number: "04",
    slug: "tapezierarbeiten",
    title: "Tapezierarbeiten",
    description:
      "Von zurückhaltenden Strukturen bis zu ausdrucksstarken Wandgestaltungen.",
  },
];
