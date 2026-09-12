export const projectTypes = [
  { id: "innenraum", label: "Innenraum" },
  { id: "fassade", label: "Fassade" },
  { id: "renovierung", label: "Renovierung" },
  { id: "lackierarbeit", label: "Lackierarbeit" },
  { id: "sonstiges", label: "Sonstiges" },
] as const;

export const timeframes = [
  { id: "asap", label: "So bald wie möglich" },
  { id: "drei-monate", label: "Innerhalb der nächsten drei Monate" },
  { id: "spaeter", label: "Später" },
  { id: "offen", label: "Noch offen" },
] as const;

export const contactPreferences = [
  { id: "telefon", label: "Telefon" },
  { id: "email", label: "E-Mail" },
  { id: "egal", label: "Kein Vorzug" },
] as const;

export type ProjectTypeId = (typeof projectTypes)[number]["id"];
export type TimeframeId = (typeof timeframes)[number]["id"];
export type ContactPreferenceId = (typeof contactPreferences)[number]["id"];
