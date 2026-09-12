import { projectTypes, timeframes, contactPreferences } from "@/content/form-options";

export const MAX_IMAGE_SIZE = 8 * 1024 * 1024; // 8 MB pro Bild
export const MAX_IMAGES = 5;
export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic"];

export type ContactFormValues = {
  projectType: string;
  timeframe: string;
  location: string;
  description: string;
  name: string;
  phone: string;
  email: string;
  contactPreference: string;
  consent: boolean;
  /** Honeypot-Feld — muss leer bleiben, sonst gilt die Anfrage als Spam */
  companyWebsite: string;
};

export type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

const projectTypeIds = projectTypes.map((t) => t.id);
const timeframeIds = timeframes.map((t) => t.id);
const contactPreferenceIds = contactPreferences.map((t) => t.id);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+()/\-.\s]{5,25}$/;

export function validateStep1(values: Pick<ContactFormValues, "projectType">): FieldErrors {
  const errors: FieldErrors = {};
  if (!projectTypeIds.includes(values.projectType as (typeof projectTypeIds)[number])) {
    errors.projectType = "Bitte wählen Sie eine Option aus.";
  }
  return errors;
}

export function validateStep2(values: Pick<ContactFormValues, "timeframe">): FieldErrors {
  const errors: FieldErrors = {};
  if (!timeframeIds.includes(values.timeframe as (typeof timeframeIds)[number])) {
    errors.timeframe = "Bitte wählen Sie eine Option aus.";
  }
  return errors;
}

export function validateStep3(
  values: Pick<
    ContactFormValues,
    "location" | "description" | "name" | "phone" | "email" | "contactPreference" | "consent" | "companyWebsite"
  >
): FieldErrors {
  const errors: FieldErrors = {};

  if (values.companyWebsite.trim().length > 0) {
    // Honeypot ausgelöst — Fehler wird bewusst nicht spezifisch benannt.
    errors.companyWebsite = "Ungültige Eingabe.";
  }

  if (!values.location || values.location.trim().length < 2) {
    errors.location = "Bitte geben Sie Ort oder Postleitzahl an.";
  }

  if (!values.description || values.description.trim().length < 10) {
    errors.description = "Bitte beschreiben Sie Ihr Vorhaben etwas ausführlicher (mind. 10 Zeichen).";
  } else if (values.description.length > 2000) {
    errors.description = "Die Beschreibung darf maximal 2000 Zeichen umfassen.";
  }

  if (!values.name || values.name.trim().length < 2) {
    errors.name = "Bitte geben Sie Ihren Namen an.";
  }

  const hasPhone = values.phone.trim().length > 0;
  const hasEmail = values.email.trim().length > 0;

  if (!hasPhone && !hasEmail) {
    errors.email = "Bitte geben Sie Telefonnummer oder E-Mail-Adresse an.";
  }
  if (hasPhone && !phonePattern.test(values.phone.trim())) {
    errors.phone = "Bitte geben Sie eine gültige Telefonnummer an.";
  }
  if (hasEmail && !emailPattern.test(values.email.trim())) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }

  if (!contactPreferenceIds.includes(values.contactPreference as (typeof contactPreferenceIds)[number])) {
    errors.contactPreference = "Bitte wählen Sie einen bevorzugten Kontaktweg.";
  }

  if (!values.consent) {
    errors.consent = "Bitte stimmen Sie der Datenschutzerklärung zu.";
  }

  return errors;
}

export function hasErrors(errors: FieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
