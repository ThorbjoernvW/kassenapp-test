# KassenApp V0.26

## Thema

**V0.26 – Presets aktualisieren**

Die Preset-Auswahl in den Einstellungen kann jetzt manuell neu geladen werden, ohne die aktuelle Artikelliste zu verändern.

## Änderungen

### Preset-Auswahl

- Neuer Button **„Presets aktualisieren“** in den Einstellungen.
- Der Button ruft `presets/index.json` erneut ab.
- Das Preset-Dropdown wird anschließend aus dem neu geladenen Index aufgebaut.
- Beim Aktualisieren wird kein Preset automatisch geladen.
- Die aktuelle Artikelliste bleibt unverändert.
- Bestehende Verkäufe bleiben unverändert.
- Während des Abrufs ist der Aktualisieren-Button deaktiviert.

### Fehlerbehandlung

- Wenn bereits eine Preset-Liste erfolgreich geladen wurde und eine spätere Aktualisierung fehlschlägt, bleibt die bisherige Liste verfügbar.
- Schlägt bereits das initiale Laden fehl, bleibt das bisherige Verhalten erhalten: Die Preset-Auswahl wird als nicht verfügbar angezeigt.

### PWA / Offline

- `presets/index.json` wird im Service Worker gezielt **network-first** behandelt.
- Dadurch liefert **„Presets aktualisieren“** bei bestehender Netzwerkverbindung tatsächlich den aktuellen Index und nicht zuerst einen älteren Runtime-Cache-Stand.
- Ein zuvor erfolgreich geladener Preset-Index bleibt als Offline-Fallback im Cache nutzbar.
- Das übrige Runtime-Caching bleibt unverändert.

## Nicht verändert

Keine fachlichen Änderungen an:

- Verkaufslogik
- Warenkorb-Logik
- Artikelverwaltung
- Preset-Dateiformat
- Laden eines ausgewählten Presets
- Preset-Export
- Persistenz / `localStorage`
- Zahlung
- Backup / Restore
- Navigation und responsive Grundstruktur

## Geänderte Dateien

- `index.html`
- `styles.css`
- `app.js`
- `service-worker.js`
- `version.json`
- `README.md`

## Neue Dateien

Keine.

## Gelöschte Dateien

Keine.

## Durchgeführte technische Prüfungen

- JavaScript-Syntax von `app.js` geprüft.
- JavaScript-Syntax von `service-worker.js` geprüft.
- Versionsstellen der für V0.26 vorgesehenen Dateien geprüft.
- Geprüft, dass die Aktualisierungsfunktion `state.products` und `state.sales` nicht verändert.
- Geprüft, dass der Preset-Index bei erfolgreicher Aktualisierung das Dropdown neu aufbaut.
- Geprüft, dass bei fehlgeschlagener manueller Aktualisierung eine zuvor geladene Preset-Liste im Arbeitsspeicher erhalten bleibt.
- Service-Worker-Pfad für `presets/index.json` auf Network-first mit Cache-Fallback geprüft.

## Noch durchzuführende manuelle Tests

### Presets

- App online öffnen und initiale Preset-Liste prüfen.
- `presets/index.json` im Test-Repository verändern und **„Presets aktualisieren“** ausführen.
- Prüfen, dass neue bzw. entfernte Presets direkt im Dropdown erscheinen.
- Vor und nach dem Aktualisieren die aktuelle Artikelliste vergleichen; sie darf sich nicht verändern.
- Bestehende Verkäufe vor und nach der Aktualisierung prüfen.
- Preset auswählen und laden; bestehende Ladefunktion auf Regression prüfen.
- Preset-Export auf Regression prüfen.

### Fehler / Offline

- Nach erfolgreichem Laden Netzwerk trennen und **„Presets aktualisieren“** testen.
- Prüfen, dass ein bereits gecachter Preset-Index weiterhin verfügbar bleibt.
- Fehlerfall mit nicht erreichbarer bzw. ungültiger `presets/index.json` prüfen.
- Prüfen, dass eine bereits vorhandene Preset-Liste bei fehlgeschlagener manueller Aktualisierung erhalten bleibt.

### Geräte / Layout

- Desktop/Laptop.
- Tablet Hochformat.
- Tablet Querformat.
- Smartphone Hochformat.
- Smartphone Querformat.
- Insbesondere Breite, Bedienbarkeit und Anordnung des neuen Buttons prüfen.

### PWA / Update

- Update von V0.25.5 auf V0.26 prüfen.
- Cache-Wechsel auf `kassenapp-v0-26` prüfen.
- Offline-Neustart nach vorherigem Online-Laden prüfen.

## Versionsstand

Aktueller Entwicklungsstand: **V0.26**

Relevante Versionsstellen:

- `index.html`: `V0.26`
- `styles.css?v=0.26`
- `app.js?v=0.26`
- `app.js` Versionsfallback: `V0.26`
- `service-worker.js`: Cache `kassenapp-v0-26`
- Service-Worker-App-Shell: Assets mit `0.26`
- `version.json`: `0.26`
- `README.md`: `V0.26`

## Bekannte technische Schulden

Die bereits vor V0.26 dokumentierten alten `V0.22.4.1`-Referenzen bleiben bewusst unverändert:

- Service-Worker-Registrierungs-Querystring
- `CURRENT_VERSION`-Fallback in `index.html`

Diese Stellen gehören nicht zum Thema **„Presets aktualisieren“** und werden in V0.26 nicht nebenbei bereinigt.

Außerdem bleibt `styles.css` historisch gewachsen und enthält mehrere aufeinanderfolgende Override- und Media-Query-Blöcke.
