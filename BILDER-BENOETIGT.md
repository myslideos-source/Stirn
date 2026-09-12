# Benötigte Bilder — Shotlist

Ein Teil der Motive ist inzwischen mit bereitgestelltem Bildmaterial belegt
(siehe Tabelle unten, Status „erledigt"). Für alle weiterhin offenen
Positionen verwendet die Seite bewusst klar gekennzeichnete Platzhalter
(sichtbares „Platzhalter"-Label, keine erfundenen Referenzprojekte, keine
Stockfotos mit gestellten Handwerkern) statt Fantasiebildern.

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
| 1 | Wortmarke „STIRN." | `src/components/Logo.tsx` (`public/images/logo-stirn.png`) | erledigt |
| 2 | Fertiger Innenraum (Wohnraum mit Akzentwand) | Hero-Hintergrund (`public/images/hero-fertiger-innenraum.jpg`) | erledigt |
| 3 | Präzise Farbkante / Detailaufnahme eines Anstrichrands | `services.ts` → `innenraum` (`public/images/farbkante-detail.jpg`) | erledigt |
| 4 | Vorher-Nachher-Paar Wandfläche/Raum | `BeforeAfterSlider` (`public/images/vorher-wandflaeche.jpg`, `nachher-wandflaeche.jpg`) | erledigt |
| 5 | Jürgen Stirn bei der Arbeit | Über-uns-Sektion | offen |
| 6 | Authentisches Porträt von Jürgen Stirn | `src/components/About.tsx` | offen |
| 7 | Fassade (vorher/nachher oder fertig) | `services.ts` → `fassade`, `projects.ts` | offen |
| 8 | Lackierarbeit (Tür, Zarge, Heizkörper) | `services.ts` → `lackierarbeiten` | offen |
| 9 | Tapezierarbeit (Untergrund/Bahn im Detail) | `services.ts` → `tapezierarbeiten` | offen |
| 10 | Putz-/Spachtelarbeit im Detail | `services.ts` → `putz-spachtel` | offen |
| 11 | Arbeitsmaterialien in sauberer, aufgeräumter Umgebung | `services.ts` → `farbberatung` | offen |
| 12 | Fahrzeug oder Betriebssitz (falls vorhanden) | Kontakt-/Über-uns-Sektion | offen |
| 13 | 4–6 Projektfotos für die Galerie (verschiedene Formate) | `src/content/projects.ts` | offen |
| 14 | Weitere Vorher-Nachher-Paare (mind. 2 zusätzliche Sets) | `BeforeAfterSlider` | offen |

**Hinweis zu den erledigten Positionen:** Die Herkunft der bereitgestellten
Fotos (1–4) — ob eigene Aufnahmen des Betriebs oder Referenzmaterial zur
Veranschaulichung des Layouts — ist vor Veröffentlichung zu bestätigen.
Insbesondere Vorher-Nachher-Paar und Hero-Foto sollten, sobald verfügbar,
durch tatsächlich beim Betrieb entstandene Aufnahmen ersetzt werden, damit
die Seite ausschließlich echte eigene Referenzen zeigt.

## Wo Platzhalter aktuell eingesetzt werden

Alle noch offenen Bild-Platzhalter laufen über die Komponente
`src/components/motion/SurfacePlaceholder.tsx`. Sie zeigt eine dezente,
mineralisch wirkende Fläche mit einem sichtbaren „Platzhalter"-Label — kein
grauer Kasten, kein Stockfoto. Sobald echte Fotos vorliegen, kann diese
Komponente an den jeweiligen Stellen 1:1 durch `next/image` mit dem realen
Bildpfad ersetzt werden (siehe `services.ts` → `image`-Feld und
`BeforeAfterSlider`-Props `beforeSrc`/`afterSrc` als Beispiel).

Noch betroffene Stellen:

- `src/components/Services.tsx` — Oberflächendetail für 5 der 6 Leistungen
- `src/components/ProjectGallery.tsx` — sämtliche Projektbilder (Galerie und Detailansicht)
- `src/components/About.tsx` — Porträt

## Projekt- und Referenzdaten

`src/content/projects.ts` enthält ausschließlich Platzhalterprojekte
(`isPlaceholder: true`). Diese dürfen erst durch echte Projekte ersetzt
werden, sobald Fotos, Ortsangaben und Kundendaten vom Betrieb ausdrücklich
freigegeben wurden.
