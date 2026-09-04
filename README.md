# KassenApp V0.22.3.2

Themenblock V0.22: **Optische Überarbeitung**  
Unterthema V0.22.3: **Artikelbilder / Kacheloptik**

## Geändert

- Die farbige Textfläche auf Bildkacheln ist deutlich kompakter und verdeckt weniger vom Artikelbild.
- Das Artikelbild füllt weiterhin die komplette Kachel; der linke Farbbalken bleibt sichtbar.
- Pro Artikel lässt sich in **Einstellungen → Artikel bearbeiten** jetzt der sichtbare Bildausschnitt einstellen.
- Dafür gibt es zwei Regler: **horizontal (links/rechts)** und **vertikal (oben/unten)**.
- Eine Vorschau zeigt während des Verschiebens direkt, welcher Bildbereich später in der Kachel sichtbar ist.
- Die Position wird pro Artikel lokal gespeichert und bleibt auch nach Neustart sowie Backup/Restore erhalten.
- Bestehende Artikelbilder starten automatisch mit der bisherigen Zentrierung **50% / 50%**.

## Bewusst nicht geändert

- Warenkorb und Bezahlbereich.
- Verkäufe.
- Grundlayout von Artikeln ohne Bild.
- Upload-Komprimierung der Bilder.

## Testplan

### Muss funktionieren
1. **Einstellungen** öffnen und einen Artikel mit Bild bearbeiten.
2. Horizontal-Regler ganz nach links und rechts bewegen; die Vorschau muss direkt folgen.
3. Vertikal-Regler ganz nach oben und unten bewegen; die Vorschau muss direkt folgen.
4. Eine gewünschte Position einstellen, **Speichern** und zur Kasse wechseln.
5. Prüfen, ob die Kachel exakt denselben Bildausschnitt zeigt.
6. Seite neu laden und prüfen, ob die Position erhalten bleibt.
7. Artikel erneut bearbeiten und prüfen, ob die gespeicherten Prozentwerte wieder geladen werden.

### Regressionstest
1. Einen Artikel ohne Bild bearbeiten und speichern.
2. Ein neues Bild hochladen; die Position muss zunächst bei 50% / 50% starten.
3. Bild entfernen; der Artikel muss wieder auf das normale Kachellayout zurückfallen.
4. Backup erstellen und wieder einlesen; die Bildposition muss erhalten bleiben.
5. Artikelkachel antippen; Artikel muss normal dem Warenkorb hinzugefügt werden.

### Gerätecheck
- Laptop/Desktop: Kacheln und Bildposition prüfen.
- Handy hochkant: kompakte Textfläche und Bildausschnitt prüfen.
- Handy quer: Textfläche darf das Bild nicht übermäßig verdecken.
- Tablet: Bildausschnitt und Lesbarkeit prüfen.

## Geänderte Dateien

- `app.js`
- `styles.css`
- `index.html`
- `version.json`
- `service-worker.js`
- `README.md`
