# BRUNNER. Malermeister — Webseite

Premium-Webseite für Markus Brunner Malermeister in Crailsheim-Tiefenbach. Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion.

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

- `site.ts` — Name, Adresse, Telefon, Fax, E-Mail (NAP-Daten)
- `services.ts` — Leistungen (mit dem Betrieb abzustimmen)
- `process.ts` — Ablauf-Schritte

## Kontaktformular

Das Formular im Bereich „Kontakt“ hat **kein Server-Backend**. Beim Absenden öffnet es
das E-Mail-Programm des Besuchers mit einer vorausgefüllten Nachricht an
`m.brunner@malerbetrieb-brunner.de` (siehe `src/components/ContactForm.tsx`). Das ist
bewusst so gewählt und im Formular selbst sowie in der Datenschutzerklärung
transparent erklärt — es wird nichts automatisch übertragen oder gespeichert.

## Offene Punkte vor Veröffentlichung

1. **Fassadenfoto ergänzen** — für die Sektion „Außen geschützt. Innen angekommen.“
   fehlt noch ein echtes Foto unter `public/images/facade.webp`
   (siehe `src/components/FacadeSection.tsx`). In dieser Entwicklungsumgebung bestand
   kein Netzwerkzugriff auf Bilddatenbanken wie Unsplash/Pexels, daher zeigt die Sektion
   aktuell einen klar gekennzeichneten Platzhalter.
2. **Übrige Bilder prüfen** — siehe `BILDER-BENOETIGT.md`.
3. **Rechtliche Pflichtangaben ergänzen** — gelb markierte Platzhalter in `/impressum`
   und `/datenschutz` (Rechtsform, Handwerkskammer, USt-ID, Hosting-Anbieter).
4. **Domain bestätigen** — `site.url` in `src/content/site.ts` ist auf
   `https://www.malerbetrieb-brunner.de` gesetzt; vor dem Deploy prüfen, dass dies die
   tatsächliche Ziel-Domain ist.

## Struktur

```
src/app/              Next.js App Router (Seiten, Layout, SEO-Dateien)
src/components/        UI-Komponenten
src/components/motion/ Wiederverwendbare Animations-/Reveal-Komponenten
src/content/            Zentrale, pflegbare Inhalte
src/hooks/              Custom Hooks
```
