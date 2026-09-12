# STIRN. Malerbetrieb — Webseite

Premium-Webseite für den Jürgen Stirn Malerbetrieb in Fichtenau. Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion.

## Entwicklung

```bash
npm install
npm run dev
```

Seite läuft danach unter `http://localhost:3000`.

```bash
npm run build   # Produktions-Build
npm run lint    # ESLint
```

## Zentrale Inhalte pflegen

Alle redaktionellen Inhalte liegen zentral in `src/content/`:

- `site.ts` — Name, Adresse, Telefon, E-Mail, Bewertung (NAP-Daten)
- `services.ts` — Leistungen (mit dem Betrieb abzustimmen)
- `projects.ts` — Projektgalerie (aktuell ausschließlich Platzhalter)
- `process.ts` — Ablauf-Schritte
- `form-options.ts` — Auswahloptionen im Anfrageformular

## Offene Punkte vor Veröffentlichung

1. **E-Mail-Versand einrichten** — siehe Kommentar in `src/app/api/contact/route.ts`. Ohne konfigurierten Dienst validiert das Formular zwar vollständig, stellt Anfragen aber nicht zu (bewusst, um keine erfolgreiche Übertragung vorzutäuschen).
2. **Bilder ersetzen** — siehe `BILDER-BENOETIGT.md` für die vollständige Shotlist. Alle Platzhalter laufen über `src/components/motion/SurfacePlaceholder.tsx`.
3. **Rechtliche Pflichtangaben ergänzen** — orange markierte Platzhalter in `/impressum` und `/datenschutz`.
4. **Domain** — `site.url` in `src/content/site.ts` auf die finale Domain setzen (wirkt sich auf Sitemap, Canonical-URLs und Schema.org aus).

## Struktur

```
src/app/              Next.js App Router (Seiten, Layout, API-Route, SEO-Dateien)
src/components/        UI-Komponenten
src/components/motion/ Wiederverwendbare Animations-/Reveal-Komponenten
src/content/            Zentrale, pflegbare Inhalte
src/lib/                Validierungslogik (Formular)
src/hooks/              Custom Hooks
```
