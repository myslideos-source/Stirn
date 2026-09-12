import { NextRequest, NextResponse } from "next/server";
import {
  ACCEPTED_IMAGE_TYPES,
  MAX_IMAGES,
  MAX_IMAGE_SIZE,
  validateStep1,
  validateStep2,
  validateStep3,
  hasErrors,
} from "@/lib/contact-validation";

export const runtime = "nodejs";

/**
 * API-Route für die Projektanfrage.
 *
 * WICHTIG — E-Mail-Versand ist aktuell NICHT konfiguriert:
 * Diese Route validiert eingehende Anfragen vollständig serverseitig
 * (Pflichtfelder, Formate, Honeypot, Bildgrößen/-typen), sendet die
 * Anfrage aber bewusst NICHT per E-Mail weiter, solange kein
 * E-Mail-Dienst angebunden ist. Eine vorgetäuschte Erfolgsmeldung
 * ohne tatsächliche Zustellung würde Anfragen von Kunden verloren
 * gehen lassen, ohne dass dies bemerkt wird — das wird hier bewusst
 * vermieden.
 *
 * Um den Versand zu aktivieren:
 * 1. E-Mail-Dienst wählen (z. B. Resend, Postmark, SMTP via Nodemailer).
 * 2. API-Key/Zugangsdaten als Umgebungsvariable CONTACT_EMAIL_API_KEY
 *    (und ggf. CONTACT_EMAIL_FROM / CONTACT_EMAIL_TO) hinterlegen.
 * 3. Die Funktion `sendContactRequest` unten implementieren.
 * 4. Den frühzeitigen Abbruch (EMAIL_NOT_CONFIGURED) entfernen.
 */

async function sendContactRequest(payload: Record<string, unknown>): Promise<void> {
  // Platzhalter für die künftige Anbindung eines E-Mail-Dienstes.
  // Beispiel (Resend):
  //   const resend = new Resend(process.env.CONTACT_EMAIL_API_KEY);
  //   await resend.emails.send({
  //     from: process.env.CONTACT_EMAIL_FROM!,
  //     to: process.env.CONTACT_EMAIL_TO!,
  //     subject: `Neue Projektanfrage von ${payload.name}`,
  //     text: JSON.stringify(payload, null, 2),
  //   });
  throw new Error("EMAIL_NOT_CONFIGURED");
}

export async function POST(request: NextRequest) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, code: "INVALID_BODY", message: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  const get = (key: string) => (formData.get(key)?.toString() ?? "").trim();

  const values = {
    projectType: get("projectType"),
    timeframe: get("timeframe"),
    location: get("location"),
    description: get("description"),
    name: get("name"),
    phone: get("phone"),
    email: get("email"),
    contactPreference: get("contactPreference"),
    consent: get("consent") === "true",
    companyWebsite: get("companyWebsite"),
  };

  const errors = {
    ...validateStep1(values),
    ...validateStep2(values),
    ...validateStep3(values),
  };

  const images = formData.getAll("images").filter((v): v is File => v instanceof File && v.size > 0);

  if (images.length > MAX_IMAGES) {
    return NextResponse.json(
      { ok: false, code: "TOO_MANY_IMAGES", message: `Maximal ${MAX_IMAGES} Bilder sind möglich.` },
      { status: 400 }
    );
  }

  for (const image of images) {
    if (image.size > MAX_IMAGE_SIZE) {
      return NextResponse.json(
        { ok: false, code: "IMAGE_TOO_LARGE", message: "Ein Bild überschreitet die maximale Dateigröße von 8 MB." },
        { status: 400 }
      );
    }
    if (!ACCEPTED_IMAGE_TYPES.includes(image.type)) {
      return NextResponse.json(
        { ok: false, code: "IMAGE_TYPE_INVALID", message: "Nicht unterstütztes Bildformat." },
        { status: 400 }
      );
    }
  }

  if (hasErrors(errors)) {
    // Der Honeypot-Fehler (companyWebsite) wird wie ein normaler
    // Validierungsfehler behandelt, um Spam-Bots keine Rückmeldung
    // über die Erkennung zu geben.
    return NextResponse.json(
      { ok: false, code: "VALIDATION_ERROR", message: "Bitte überprüfen Sie Ihre Angaben.", errors },
      { status: 422 }
    );
  }

  try {
    await sendContactRequest({ ...values, imageCount: images.length });
  } catch (error) {
    if (error instanceof Error && error.message === "EMAIL_NOT_CONFIGURED") {
      console.warn(
        "[contact] E-Mail-Dienst ist nicht konfiguriert — Anfrage wurde validiert, aber NICHT zugestellt.",
        { name: values.name, projectType: values.projectType }
      );
      return NextResponse.json(
        {
          ok: false,
          code: "EMAIL_NOT_CONFIGURED",
          message:
            "Der E-Mail-Versand ist auf dieser Seite noch nicht eingerichtet. Bitte kontaktieren Sie uns direkt telefonisch oder per E-Mail.",
        },
        { status: 503 }
      );
    }

    console.error("[contact] Unerwarteter Fehler beim Versand:", error);
    return NextResponse.json(
      { ok: false, code: "SEND_FAILED", message: "Die Anfrage konnte nicht gesendet werden." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
