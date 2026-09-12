"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ImagePlus, Loader2, Phone, X } from "lucide-react";
import { projectTypes, timeframes, contactPreferences } from "@/content/form-options";
import {
  type ContactFormValues,
  type FieldErrors,
  validateStep1,
  validateStep2,
  validateStep3,
  hasErrors,
  ACCEPTED_IMAGE_TYPES,
  MAX_IMAGES,
  MAX_IMAGE_SIZE,
} from "@/lib/contact-validation";
import { site } from "@/content/site";

const TOTAL_STEPS = 3;

const initialValues: ContactFormValues = {
  projectType: "",
  timeframe: "",
  location: "",
  description: "",
  name: "",
  phone: "",
  email: "",
  contactPreference: "",
  consent: false,
  companyWebsite: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [images, setImages] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function update<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function goNext() {
    let stepErrors: FieldErrors = {};
    if (step === 1) stepErrors = validateStep1(values);
    if (step === 2) stepErrors = validateStep2(values);
    setErrors(stepErrors);
    if (!hasErrors(stepErrors)) {
      setStep((s) => Math.min(TOTAL_STEPS, s + 1));
    }
  }

  function goBack() {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  }

  function onFilesSelected(fileList: FileList | null) {
    if (!fileList) return;
    const incoming = Array.from(fileList).filter((f) => ACCEPTED_IMAGE_TYPES.includes(f.type) && f.size <= MAX_IMAGE_SIZE);
    setImages((prev) => [...prev, ...incoming].slice(0, MAX_IMAGES));
  }

  function removeImage(index: number) {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const stepErrors = validateStep3(values);
    setErrors(stepErrors);
    if (hasErrors(stepErrors)) return;

    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, String(value));
    });
    images.forEach((file) => formData.append("images", file));

    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data?.message ?? "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center border border-anthracite/10 bg-chalk px-6 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ultramarine text-chalk">
          <Check className="h-7 w-7" strokeWidth={2} />
        </span>
        <p className="mt-6 max-w-sm font-display text-2xl font-bold text-anthracite">
          Vielen Dank. Ihre Anfrage ist angekommen.
        </p>
        <p className="mt-2 max-w-sm text-[0.95rem] text-anthracite/65">Wir melden uns persönlich bei Ihnen.</p>
      </div>
    );
  }

  return (
    <div className="border border-anthracite/10 bg-chalk">
      <div className="border-b border-anthracite/10 px-6 py-5 sm:px-10">
        <div className="flex items-center justify-between text-[0.8rem] font-medium text-anthracite/60">
          <span>
            Schritt {step} von {TOTAL_STEPS}
          </span>
          <span>
            {step === 1 && "Was ist geplant?"}
            {step === 2 && "Wann soll es losgehen?"}
            {step === 3 && "Ihre Projektdaten"}
          </span>
        </div>
        <div className="mt-3 h-[3px] w-full bg-anthracite/10">
          <motion.div
            className="h-full bg-ultramarine"
            animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          />
        </div>
      </div>

      <form onSubmit={onSubmit} className="px-6 py-8 sm:px-10 sm:py-10" noValidate>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <StepWrap key="step1">
              <fieldset>
                <legend className="font-display text-xl font-bold text-anthracite sm:text-2xl">
                  Was ist geplant?
                </legend>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {projectTypes.map((option) => (
                    <OptionCard
                      key={option.id}
                      label={option.label}
                      selected={values.projectType === option.id}
                      onClick={() => update("projectType", option.id)}
                    />
                  ))}
                </div>
                {errors.projectType && <ErrorText>{errors.projectType}</ErrorText>}
              </fieldset>
            </StepWrap>
          )}

          {step === 2 && (
            <StepWrap key="step2">
              <fieldset>
                <legend className="font-display text-xl font-bold text-anthracite sm:text-2xl">
                  Wann soll das Projekt stattfinden?
                </legend>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {timeframes.map((option) => (
                    <OptionCard
                      key={option.id}
                      label={option.label}
                      selected={values.timeframe === option.id}
                      onClick={() => update("timeframe", option.id)}
                    />
                  ))}
                </div>
                {errors.timeframe && <ErrorText>{errors.timeframe}</ErrorText>}
              </fieldset>
            </StepWrap>
          )}

          {step === 3 && (
            <StepWrap key="step3">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Ort oder Postleitzahl" htmlFor="location" error={errors.location}>
                  <input
                    id="location"
                    type="text"
                    value={values.location}
                    onChange={(e) => update("location", e.target.value)}
                    className={inputClass(Boolean(errors.location))}
                    autoComplete="postal-code"
                  />
                </Field>

                <Field label="Bevorzugter Kontaktweg" htmlFor="contactPreference" error={errors.contactPreference}>
                  <select
                    id="contactPreference"
                    value={values.contactPreference}
                    onChange={(e) => update("contactPreference", e.target.value)}
                    className={inputClass(Boolean(errors.contactPreference))}
                  >
                    <option value="">Bitte wählen</option>
                    {contactPreferences.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </Field>

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

                <Field label="Telefonnummer" htmlFor="phone" error={errors.phone} optional>
                  <input
                    id="phone"
                    type="tel"
                    value={values.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputClass(Boolean(errors.phone))}
                    autoComplete="tel"
                  />
                </Field>

                <Field label="E-Mail-Adresse" htmlFor="email" error={errors.email} optional className="sm:col-span-2">
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass(Boolean(errors.email))}
                    autoComplete="email"
                  />
                </Field>

                <Field
                  label="Kurze Beschreibung Ihres Vorhabens"
                  htmlFor="description"
                  error={errors.description}
                  className="sm:col-span-2"
                >
                  <textarea
                    id="description"
                    rows={4}
                    value={values.description}
                    onChange={(e) => update("description", e.target.value)}
                    className={inputClass(Boolean(errors.description))}
                    maxLength={2000}
                  />
                </Field>

                <div className="sm:col-span-2">
                  <span className="block text-[0.85rem] font-medium text-anthracite">
                    Bilder <span className="text-anthracite/40">(optional)</span>
                  </span>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {images.map((file, i) => (
                      <ImagePreview key={`${file.name}-${i}`} file={file} onRemove={() => removeImage(i)} />
                    ))}
                    {images.length < MAX_IMAGES && (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex h-20 w-20 flex-col items-center justify-center gap-1 border border-dashed border-anthracite/25 text-anthracite/50 transition-colors hover:border-anthracite/50 hover:text-anthracite"
                      >
                        <ImagePlus className="h-5 w-5" strokeWidth={1.5} />
                        <span className="text-[0.65rem]">Hinzufügen</span>
                      </button>
                    )}
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={ACCEPTED_IMAGE_TYPES.join(",")}
                    multiple
                    className="sr-only"
                    onChange={(e) => onFilesSelected(e.target.files)}
                  />
                  <p className="mt-2 text-[0.72rem] text-anthracite/40">
                    Bis zu {MAX_IMAGES} Bilder, je max. 8 MB (JPG, PNG, WEBP, HEIC).
                  </p>
                </div>

                {/* Honeypot — für Menschen unsichtbar, Bots füllen es häufig aus */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="companyWebsite">Firmenwebsite (bitte freilassen)</label>
                  <input
                    id="companyWebsite"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.companyWebsite}
                    onChange={(e) => update("companyWebsite", e.target.value)}
                  />
                </div>

                <label className="flex items-start gap-3 sm:col-span-2">
                  <input
                    type="checkbox"
                    checked={values.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 accent-ultramarine"
                  />
                  <span className="text-[0.85rem] leading-relaxed text-anthracite/70">
                    Ich habe die{" "}
                    <a href="/datenschutz" className="underline underline-offset-2" target="_blank">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage
                    einverstanden.
                  </span>
                </label>
                {errors.consent && <ErrorText>{errors.consent}</ErrorText>}
              </div>

              {status === "error" && (
                <div className="mt-6 border border-terracotta/30 bg-terracotta/[0.06] px-5 py-4 text-[0.88rem] text-anthracite">
                  <p>{errorMessage}</p>
                  <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-anthracite/70">
                    <a href={site.phone.href} className="inline-flex items-center gap-1.5 underline underline-offset-2">
                      <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
                      {site.phone.display}
                    </a>
                    <a href={site.email.href} className="underline underline-offset-2">
                      {site.email.display}
                    </a>
                  </p>
                </div>
              )}
            </StepWrap>
          )}
        </AnimatePresence>

        <div className="mt-9 flex items-center justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={goBack}
              className="text-[0.9rem] font-medium text-anthracite/60 transition-colors hover:text-anthracite"
            >
              Zurück
            </button>
          ) : (
            <span />
          )}

          {step < TOTAL_STEPS ? (
            <button
              key="next"
              type="button"
              onClick={goNext}
              className="group relative overflow-hidden bg-anthracite px-7 py-3 text-[0.9rem] font-medium text-chalk"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-ultramarine transition-transform duration-500 ease-[cubic-bezier(.65,0,.35,1)] group-hover:translate-x-0"
              />
              <span className="relative z-10">Weiter</span>
            </button>
          ) : (
            <button
              key="submit"
              type="submit"
              disabled={status === "submitting"}
              className="group relative flex items-center gap-2 overflow-hidden bg-ultramarine px-7 py-3 text-[0.9rem] font-medium text-chalk disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                  Wird gesendet …
                </>
              ) : (
                "Anfrage absenden"
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function StepWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

function OptionCard({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`border px-4 py-4 text-left text-[0.9rem] font-medium transition-colors ${
        selected ? "border-anthracite bg-anthracite text-chalk" : "border-anthracite/20 text-anthracite hover:border-anthracite/50"
      }`}
    >
      {label}
    </button>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="block text-[0.85rem] font-medium text-anthracite">
        {label} {optional && <span className="text-anthracite/40">(optional)</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-[0.78rem] text-terracotta">{children}</p>;
}

function inputClass(hasError: boolean) {
  return `w-full border bg-chalk px-4 py-2.5 text-[0.92rem] text-anthracite outline-none transition-colors focus:border-ultramarine ${
    hasError ? "border-terracotta/60" : "border-anthracite/20"
  }`;
}

function ImagePreview({ file, onRemove }: { file: File; onRemove: () => void }) {
  const [url] = useState(() => URL.createObjectURL(file));
  return (
    <div className="relative h-20 w-20 overflow-hidden border border-anthracite/15">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt={`Vorschau: ${file.name}`} className="h-full w-full object-cover" />
      <button
        type="button"
        onClick={onRemove}
        aria-label={`${file.name} entfernen`}
        className="absolute right-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-anthracite/80 text-chalk"
      >
        <X className="h-3 w-3" strokeWidth={2} />
      </button>
    </div>
  );
}
