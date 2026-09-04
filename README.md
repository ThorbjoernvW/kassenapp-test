# KassenApp V0.22.3.3

Themenblock V0.22: **Optische Überarbeitung**  
Unterthema V0.22.3: **Artikelbilder / Kacheloptik**

## Geändert

- Die Bildausrichtung lässt sich jetzt immer **horizontal und vertikal gleichzeitig** einstellen.
- Zusätzlich gibt es **Zoom von 100 % bis 250 %**.
- Auf Laptop/Desktop bleiben drei präzise Regler sichtbar: horizontal, vertikal und Zoom.
- Auf Touch-Geräten wird die Kachel-Vorschau direkt bedient:
  - **1 Finger ziehen** = Bildausschnitt horizontal und vertikal verschieben.
  - **2 Finger auseinander/zusammen** = hinein-/herauszoomen.
- Der Text für die vertikale Richtung nutzt jetzt den richtigen Pfeil: **Oben ↕ Unten**.
- Bildposition und Zoom werden pro Artikel gespeichert und auf der echten Kassenkachel verwendet.
- Die Vorschau und die Kassenkachel verwenden dieselben Werte für Position und Zoom.
- Ein Button **„Bildausschnitt zurücksetzen“** setzt Position auf 50/50 und Zoom auf 100 %.
- Die farbige Fläche hinter Artikelname und Preis ist nicht mehr kreis-/pillförmig, sondern eine kompakte abgerundete Textfläche unten links.
- Bestehende Artikel ohne Zoom-Wert werden automatisch mit **100 % Zoom** geladen.

## Bewusst nicht geändert

- Warenkorb.
- Bezahlbereich.
- Verkäufe.
- Kacheln ohne Bild.
- Bildkomprimierung beim Upload.

## Testplan

### Muss funktionieren – Laptop/Desktop
1. **Einstellungen → Artikel bearbeiten** bei einem Artikel mit Bild öffnen.
2. Horizontal-Regler bewegen: die Vorschau muss links/rechts reagieren.
3. Vertikal-Regler bewegen: die Vorschau muss oben/unten reagieren.
4. Zoom-Regler von 100 % auf z. B. 160 % stellen.
5. Alle drei Werte kombiniert verändern und speichern.
6. Zur Kasse wechseln: Ausschnitt und Zoom müssen der Vorschau entsprechen.
7. Artikel erneut bearbeiten: alle drei gespeicherten Werte müssen wieder geladen werden.

### Muss funktionieren – Handy/Tablet
1. Artikel mit Bild bearbeiten.
2. In der **Kachel-Vorschau mit einem Finger diagonal ziehen**. Das Bild muss gleichzeitig horizontal und vertikal verschoben werden.
3. Mit zwei Fingern hineinzoomen und wieder herauszoomen.
4. Speichern und zur Kasse wechseln.
5. Die echte Artikelkachel muss denselben Ausschnitt und Zoom zeigen.
6. App neu laden und erneut prüfen, ob die Einstellungen erhalten bleiben.
7. **Bildausschnitt zurücksetzen** testen.

### Regressionstest
1. Neues Bild hochladen: Startwert muss 50/50 und 100 % sein.
2. Bild entfernen: normale Kachel ohne Bild muss wieder erscheinen.
3. Einen Artikel ohne Bild bearbeiten und speichern.
4. Backup erstellen und wieder einlesen: Bildposition und Zoom müssen erhalten bleiben.
5. Artikelkachel in der Kasse antippen: Warenkorb muss weiterhin normal funktionieren.

## Geänderte Dateien

- `app.js`
- `styles.css`
- `index.html`
- `version.json`
- `service-worker.js`
- `README.md`
