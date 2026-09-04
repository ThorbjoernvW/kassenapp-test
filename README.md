# KassenApp V0.22.3.3.1

Hotfix zum Themenblock **V0.22.3 – Artikelbilder/Kacheloptik**.

## Behoben

- Auf Touchgeraeten eingestellte Bildposition und Zoom werden jetzt mit derselben Transformationslogik in der Editor-Vorschau und auf der echten Artikelkachel dargestellt.
- Der gespeicherte horizontale und vertikale Bildausschnitt wird beim Rendern der Kassenkachel explizit angewendet.
- Zoom und Verschiebung verwenden jetzt einen zentrierten, normalisierten Pan statt eines vom Bildausschnitt abhaengigen Transform-Ursprungs. Dadurch verhalten sich Vorschau und Kachel deutlich konsistenter.

## Testplan

1. Auf dem Handy einen Artikel mit Bild bearbeiten.
2. Das Bild mit einem Finger deutlich diagonal verschieben.
3. Mit zwei Fingern auf etwa 150–200 % zoomen.
4. Speichern und direkt zur Kasse wechseln.
5. Pruefen, ob Position und Zoom auf der Artikelkachel sichtbar sind.
6. Den Artikel erneut bearbeiten: gespeicherte Werte/Vorschau muessen erhalten sein.
7. App neu laden und nochmals pruefen.
8. Am Laptop kurz kontrollieren, dass Horizontal-, Vertikal- und Zoom-Regler weiterhin korrekt auf die Kachel wirken.

## Geaenderte Dateien

- `app.js`
- `index.html`
- `version.json`
- `service-worker.js`
- `README.md`

`styles.css` wurde fuer diesen Hotfix nicht veraendert.
