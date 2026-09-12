/**
 * Zentrale Leistungs-Konfiguration.
 *
 * WICHTIG: Diese Leistungen sind vor Veröffentlichung der Webseite mit dem
 * Betrieb (Jürgen Stirn) abzustimmen. Texte sind vorläufige, plausible
 * Beispielbeschreibungen — keine bestätigten Verfahren, Materialmarken
 * oder Zertifikate. Einträge können hier einfach ergänzt, geändert oder
 * entfernt werden; die Reihenfolge im Array bestimmt die Darstellung.
 */

export type Service = {
  number: string;
  slug: string;
  title: string;
  summary: string;
  detail: string;
  /** Bild-Platzhalter-ID für das Oberflächendetail, siehe BILDER-BENOETIGT.md */
  imagePlaceholder: string;
};

export const services: Service[] = [
  {
    number: "01",
    slug: "innenraum",
    title: "Malerarbeiten im Innenbereich",
    summary: "Wände und Decken, sauber vorbereitet und präzise beschichtet.",
    detail:
      "Von der Einzelwand bis zur kompletten Wohnung: Untergrundprüfung, saubere Abdeckung und ein gleichmäßiger, deckender Anstrich, abgestimmt auf Raum und Lichtsituation.",
    imagePlaceholder: "leistung-innenraum",
  },
  {
    number: "02",
    slug: "fassade",
    title: "Fassaden und Außenanstriche",
    summary: "Witterungsbeständige Oberflächen für Ihr Gebäude.",
    detail:
      "Fassadenflächen werden begutachtet, vorbereitet und mit geeigneten Beschichtungen versehen — für ein Ergebnis, das Wind und Wetter standhält und die Optik des Hauses aufwertet.",
    imagePlaceholder: "leistung-fassade",
  },
  {
    number: "03",
    slug: "lackierarbeiten",
    title: "Lackierarbeiten",
    summary: "Türen, Zargen, Heizkörper und Holzoberflächen im Detail.",
    detail:
      "Präzise Lackierarbeiten an Türen, Fensterrahmen, Heizkörpern und weiteren Bauteilen — sauber geschliffen, grundiert und in gleichmäßiger Deckkraft ausgeführt.",
    imagePlaceholder: "leistung-lackierung",
  },
  {
    number: "04",
    slug: "tapezierarbeiten",
    title: "Tapezierarbeiten",
    summary: "Vom Untergrund bis zur exakt sitzenden Bahn.",
    detail:
      "Tapezierarbeiten für Raufaser, Vliestapete und Strukturtapeten — mit sorgfältiger Untergrundvorbereitung und exaktem Anschluss an Ecken, Kanten und Übergängen.",
    imagePlaceholder: "leistung-tapete",
  },
  {
    number: "05",
    slug: "putz-spachtel",
    title: "Putz- und Spachtelarbeiten",
    summary: "Ebene, tragfähige Flächen als Grundlage jeder Beschichtung.",
    detail:
      "Ausbesserungen, Glättungen und Spachtelarbeiten schaffen die Grundlage für ein sauberes Endergebnis — ob kleine Reparaturstelle oder größere Fläche.",
    imagePlaceholder: "leistung-spachtel",
  },
  {
    number: "06",
    slug: "farbberatung",
    title: "Farb- und Materialberatung",
    summary: "Persönliche Empfehlung für Farbton, Oberfläche und Wirkung.",
    detail:
      "Gemeinsam wird besprochen, welche Farbwirkung, Oberflächenstruktur und Materialwahl zu Raum, Licht und persönlichem Geschmack passt.",
    imagePlaceholder: "leistung-beratung",
  },
];
