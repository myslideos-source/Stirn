export type ProcessStep = {
  number: string;
  title: string;
  text: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Kennenlernen",
    text: "Wir besprechen Ihr Vorhaben und die vorhandenen Flächen.",
  },
  {
    number: "02",
    title: "Einschätzung",
    text: "Material, Farbwirkung und Aufwand werden aufeinander abgestimmt.",
  },
  {
    number: "03",
    title: "Ausführung",
    text: "Die Arbeiten werden zuverlässig und mit Blick fürs Detail umgesetzt.",
  },
  {
    number: "04",
    title: "Übergabe",
    text: "Am Ende steht ein Ergebnis, das rundum stimmt.",
  },
];
