export type ProcessStep = {
  number: string;
  title: string;
  text: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Kennenlernen",
    text: "Wir besprechen Ihr Vorhaben, Ihre Wünsche und die vorhandenen Flächen.",
  },
  {
    number: "02",
    title: "Einschätzung",
    text: "Material, Untergrund, Farbwirkung und Aufwand werden sorgfältig abgestimmt.",
  },
  {
    number: "03",
    title: "Ausführung",
    text: "Die Arbeiten werden zuverlässig, präzise und mit Blick fürs Detail umgesetzt.",
  },
  {
    number: "04",
    title: "Übergabe",
    text: "Am Ende zählt nicht nur die neue Farbe, sondern ein Ergebnis, das rundum stimmt.",
  },
];
