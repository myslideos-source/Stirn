"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { site } from "@/content/site";

type Values = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof Values, string>>;

const initialValues: Values = { name: "", phone: "", email: "", message: "" };

function validate(values: Values): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) {
    errors.name = "Bitte geben Sie Ihren Namen an.";
  }
  if (!values.phone.trim() && !values.email.trim()) {
    errors.email = "Bitte geben Sie Telefonnummer oder E-Mail-Adresse an.";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Bitte beschreiben Sie Ihr Vorhaben etwas ausführlicher (mind. 10 Zeichen).";
  }
  return errors;
}

function buildMailto(values: Values): string {
  const subject = `Projektanfrage von ${values.name}`;
  const lines = [
    `Name: ${values.name}`,
    values.phone.trim() ? `Telefon: ${values.phone}` : null,
    values.email.trim() ? `E-Mail: ${values.email}` : null,
    "",
    values.message,
  ].filter((line) => line !== null);
  const body = lines.join("\n");
  return `mailto:${site.email.display}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    window.location.href = buildMailto(values);
    setSent(true);
  }

  return (
    <div className="border border-anthracite/10 bg-chalk p-6 sm:p-9">
      <p className="mb-7 flex items-start gap-2.5 text-[0.82rem] leading-relaxed text-anthracite/55">
        <Mail className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
        Dieses Formular öffnet beim Absenden Ihr E-Mail-Programm mit einer vorbereiteten
        Nachricht an {site.email.display}. Es wird nichts automatisch an uns übertragen — Sie
        sehen die Nachricht vorab und senden sie selbst ab.
      </p>

      <form onSubmit={onSubmit} noValidate className="grid gap-5">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass(Boolean(errors.name))}
            autoComplete="name"
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Telefon" htmlFor="phone" error={errors.phone} optional>
            <input
              id="phone"
              type="tel"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputClass(Boolean(errors.phone))}
              autoComplete="tel"
            />
          </Field>
          <Field label="E-Mail" htmlFor="email" error={errors.email} optional>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass(Boolean(errors.email))}
              autoComplete="email"
            />
          </Field>
        </div>

        <Field label="Nachricht" htmlFor="message" error={errors.message}>
          <textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className={inputClass(Boolean(errors.message))}
            maxLength={2000}
          />
        </Field>

        <button
          type="submit"
          className="group relative mt-1 flex w-fit items-center gap-2 overflow-hidden bg-brand px-7 py-3.5 text-[0.9rem] font-medium text-chalk"
        >
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-anthracite transition-transform duration-500 ease-[cubic-bezier(.65,0,.35,1)] group-hover:translate-x-0"
          />
          <span className="relative z-10 flex items-center gap-2">
            <Send className="h-4 w-4" strokeWidth={1.75} />
            Anfrage senden
          </span>
        </button>

        {sent && (
          <p className="text-[0.85rem] text-anthracite/70">
            Ihr E-Mail-Programm sollte sich jetzt mit der vorbereiteten Nachricht geöffnet
            haben. Falls nicht, schreiben Sie uns gerne direkt an{" "}
            <a href={site.email.href} className="underline underline-offset-2">
              {site.email.display}
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-[0.85rem] font-medium text-anthracite">
        {label} {optional && <span className="text-anthracite/40">(optional)</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1.5 text-[0.78rem] text-red-700">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full border bg-chalk px-4 py-2.5 text-[0.92rem] text-anthracite outline-none transition-colors focus:border-brand ${
    hasError ? "border-red-400" : "border-anthracite/20"
  }`;
}
