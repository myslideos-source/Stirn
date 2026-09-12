# Benötigte Bilder — Shotlist

Ein Teil der Motive ist bereits mit vorhandenem Bildmaterial aus dem Projekt belegt
(Status „erledigt"). Für das Fassadenfoto konnte in dieser Entwicklungsumgebung kein
neues, lizenzfreies Bild beschafft werden, da kein Netzwerkzugriff auf Bilddatenbanken
wie Unsplash oder Pexels bestand — dort zeigt die Seite bewusst einen klar
gekennzeichneten Platzhalter statt eines erfundenen oder unpassenden Fotos.

## Grundsätze für das Fotoshooting

- Natürliches Licht bevorzugen, keine übertriebene Nachbearbeitung.
- Format: Rohdaten möglichst hochauflösend, für das Web anschließend als WebP
  exportieren (wie die bereits vorhandenen Bilder in `public/images/`).
- Aussagekräftige, deutsche Alt-Texte pro Bild notieren (Motiv + Ort/Raumart,
  keine Fantasiebezeichnungen).
- Keine Personen ohne deren ausdrückliche Zustimmung ablichten/veröffentlichen;
  keine Person soll direkt in die Kamera schauen.
- Keine sichtbaren fremden Logos im Bild.

## Shotlist

| # | Motiv | Datei | Verwendung im Code | Status |
|---|---|---|---|---|
| 1 | Moderner, hochwertig gestrichener Innenraum | `public/images/hero.webp` | `src/components/Hero.tsx` | erledigt |
| 2 | Derselbe Raum vor der Renovierung | `public/images/before.webp` | `src/components/BeforeAfterSection.tsx` | erledigt |
| 3 | Derselbe Raum nach der Renovierung | `public/images/after.webp` | `src/components/BeforeAfterSection.tsx` | erledigt |
| 4 | Nahaufnahme präziser Malerarbeit | `public/images/craft.webp` | `src/components/CraftSection.tsx` | erledigt |
| 5 | Moderne, frisch gestrichene Hausfassade | `public/images/facade.webp` | `src/components/FacadeSection.tsx` | **offen** |

**Hinweis zu den erledigten Positionen:** Die Herkunft der vorhandenen Fotos (1–4) —
ob eigene Aufnahmen des Betriebs oder Referenzmaterial zur Veranschaulichung des
Layouts — ist vor Veröffentlichung zu bestätigen. Sobald echte, vom Betrieb
freigegebene Aufnahmen vorliegen, sollten sie diese ersetzen.

## So wird das Fassadenfoto ergänzt

1. Ein hochwertiges, lizenzfreies oder eigenes Foto einer modernen, frisch
   gestrichenen Fassade als `public/images/facade.webp` ablegen.
2. In `src/components/FacadeSection.tsx` den `SurfacePlaceholder`-Block durch
   `next/image` mit `src="/images/facade.webp"` und einem passenden Alt-Text
   ersetzen (analog zu `CraftSection.tsx`).

## Wo Platzhalter aktuell eingesetzt werden

Der Platzhalter läuft über die Komponente
`src/components/motion/SurfacePlaceholder.tsx`. Sie zeigt eine dezente,
mineralisch wirkende Fläche mit einem sichtbaren „Platzhalter"-Label — kein
grauer Kasten, kein Stockfoto.
