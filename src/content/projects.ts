/**
 * Projektgalerie — Platzhalter-Konfiguration.
 *
 * WICHTIG: Es sind aktuell KEINE echten Referenzprojekte, Orte oder
 * Kundendaten bestätigt. Alle Einträge hier sind eindeutig als
 * Platzhalter markiert (isPlaceholder: true) und müssen durch echte
 * Projekte ersetzt werden, sobald Fotos und Freigaben vorliegen.
 * Siehe BILDER-BENOETIGT.md für die Foto-Shotlist.
 */

export type ProjectCategory = "innenraeume" | "fassaden" | "oberflaechen" | "lackierung";

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "innenraeume", label: "Innenräume" },
  { id: "fassaden", label: "Fassaden" },
  { id: "oberflaechen", label: "Oberflächen" },
  { id: "lackierung", label: "Lackierung" },
];

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** "landscape" | "portrait" — bestimmt das Format in der Magazin-Galerie */
  orientation: "landscape" | "portrait";
  task: string;
  workDone: string;
  colorDirection: string;
  location: string | null;
  hasBeforeAfter: boolean;
  imagePlaceholder: string;
  isPlaceholder: true;
};

export const projects: Project[] = [
  {
    slug: "platzhalter-wohnraum",
    title: "Wohnraum",
    category: "innenraeume",
    orientation: "landscape",
    task: "Beispielhafte Aufgabenstellung, wird nach Freigabe durch ein echtes Projekt ersetzt.",
    workDone: "Platzhaltertext — auszutauschen.",
    colorDirection: "Platzhaltertext — auszutauschen.",
    location: null,
    hasBeforeAfter: false,
    imagePlaceholder: "projekt-wohnraum",
    isPlaceholder: true,
  },
  {
    slug: "platzhalter-fassade",
    title: "Fassade",
    category: "fassaden",
    orientation: "portrait",
    task: "Beispielhafte Aufgabenstellung, wird nach Freigabe durch ein echtes Projekt ersetzt.",
    workDone: "Platzhaltertext — auszutauschen.",
    colorDirection: "Platzhaltertext — auszutauschen.",
    location: null,
    hasBeforeAfter: false,
    imagePlaceholder: "projekt-fassade",
    isPlaceholder: true,
  },
  {
    slug: "platzhalter-oberflaeche",
    title: "Oberflächendetail",
    category: "oberflaechen",
    orientation: "portrait",
    task: "Beispielhafte Aufgabenstellung, wird nach Freigabe durch ein echtes Projekt ersetzt.",
    workDone: "Platzhaltertext — auszutauschen.",
    colorDirection: "Platzhaltertext — auszutauschen.",
    location: null,
    hasBeforeAfter: false,
    imagePlaceholder: "projekt-oberflaeche",
    isPlaceholder: true,
  },
  {
    slug: "platzhalter-treppenhaus",
    title: "Treppenhaus",
    category: "innenraeume",
    orientation: "landscape",
    task: "Beispielhafte Aufgabenstellung, wird nach Freigabe durch ein echtes Projekt ersetzt.",
    workDone: "Platzhaltertext — auszutauschen.",
    colorDirection: "Platzhaltertext — auszutauschen.",
    location: null,
    hasBeforeAfter: false,
    imagePlaceholder: "projekt-treppenhaus",
    isPlaceholder: true,
  },
  {
    slug: "platzhalter-lackierung",
    title: "Tür und Zarge",
    category: "lackierung",
    orientation: "portrait",
    task: "Beispielhafte Aufgabenstellung, wird nach Freigabe durch ein echtes Projekt ersetzt.",
    workDone: "Platzhaltertext — auszutauschen.",
    colorDirection: "Platzhaltertext — auszutauschen.",
    location: null,
    hasBeforeAfter: false,
    imagePlaceholder: "projekt-lackierung",
    isPlaceholder: true,
  },
  {
    slug: "platzhalter-fassadendetail",
    title: "Fassadendetail",
    category: "fassaden",
    orientation: "landscape",
    task: "Beispielhafte Aufgabenstellung, wird nach Freigabe durch ein echtes Projekt ersetzt.",
    workDone: "Platzhaltertext — auszutauschen.",
    colorDirection: "Platzhaltertext — auszutauschen.",
    location: null,
    hasBeforeAfter: false,
    imagePlaceholder: "projekt-fassadendetail",
    isPlaceholder: true,
  },
];
