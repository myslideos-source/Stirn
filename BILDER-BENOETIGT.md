# Benötigte Bilder — Shotlist

Diese Webseite verwendet aktuell **ausschließlich klar gekennzeichnete
Platzhalter** (sichtbares "Platzhalter"-Label, keine erfundenen
Referenzprojekte, keine Stockfotos mit gestellten Handwerkern). Sobald
echtes Bildmaterial vorliegt, sind die unten genannten Motive einzeln
aufzunehmen und die jeweilige Komponente/Datei entsprechend zu ersetzen.

## Grundsätze für das Fotoshooting

- Natürliches Licht bevorzugen, keine übertriebene Nachbearbeitung.
- Format: Rohdaten möglichst hochauflösend, für das Web anschließend als
  WebP/AVIF mit mehreren Breitenstufen exportieren (siehe `next/image`-
  Nutzung, sobald echte Bilder eingebunden werden).
- Aussagekräftige, deutsche Alt-Texte pro Bild notieren (Motiv + Ort/Raumart,
  keine Fantasiebezeichnungen).
- Keine Personen ohne deren ausdrückliche Zustimmung ablichten/veröffentlichen.

## Shotlist

| # | Motiv | Verwendung im Code | Status |
|---|---|---|---|
| 1 | Jürgen Stirn bei der Arbeit | Hero-Hintergrund / Über-uns-Sektion | offen |
| 2 | Authentisches Porträt von Jürgen Stirn | `src/components/About.tsx` | offen |
| 3 | Präzise Farbkante / Detailaufnahme eines Anstrichrands | Hero-Hintergrund, Intro-Statement | offen |
| 4 | Vorbereitete Wandfläche (grundiert/gespachtelt) | `src/content/services.ts` → `putz-spachtel` | offen |
| 5 | Fertiger Innenraum (gestrichene Wand/Zimmer) | Hero-Hintergrund, `services.ts` → `innenraum` | offen |
| 6 | Fassade (vorher/nachher oder fertig) | `services.ts` → `fassade`, `projects.ts` | offen |
| 7 | Lackierarbeit (Tür, Zarge, Heizkörper) | `services.ts` → `lackierarbeiten` | offen |
| 8 | Vorher-Nachher-Paare (mind. 2–3 Sets) | `src/components/BeforeAfterSlider.tsx` | offen |
| 9 | Arbeitsmaterialien in sauberer, aufgeräumter Umgebung | Leistungen / Farb- und Materialberatung | offen |
| 10 | Fahrzeug oder Betriebssitz (falls vorhanden) | Kontakt-/Über-uns-Sektion | offen |
| 11 | Tapezierarbeit (Untergrund/Bahn im Detail) | `services.ts` → `tapezierarbeiten` | offen |
| 12 | 4–6 Projektfotos für die Galerie (verschiedene Formate) | `src/content/projects.ts` | offen |

## Wo Platzhalter aktuell eingesetzt werden

Alle Bild-Platzhalter laufen über die Komponente
`src/components/motion/SurfacePlaceholder.tsx`. Sie zeigt eine dezente,
mineralisch wirkende Fläche mit einem sichtbaren "Platzhalter"-Label — kein
grauer Kasten, kein Stockfoto. Sobald echte Fotos vorliegen, kann diese
Komponente an den jeweiligen Stellen 1:1 durch `next/image` mit dem realen
Bildpfad ersetzt werden.

Betroffene Stellen:

- `src/components/Hero.tsx` — Hero-Hintergrund
- `src/components/Services.tsx` — Oberflächendetail je Leistung
- `src/components/BeforeAfterSlider.tsx` — Vorher/Nachher-Demobilder
- `src/components/ProjectGallery.tsx` — Projektbilder in Galerie und Detailansicht
- `src/components/About.tsx` — Porträt

## Projekt- und Referenzdaten

`src/content/projects.ts` enthält ausschließlich Platzhalterprojekte
(`isPlaceholder: true`). Diese dürfen erst durch echte Projekte ersetzt
werden, sobald Fotos, Ortsangaben und Kundendaten vom Betrieb ausdrücklich
freigegeben wurden.
