# KassenApp V0.23.1

Erster Baustein des Preset-Systems für Version 1.0: festes Dateiformat, GitHub-Ordnerstruktur und Export der aktuellen Artikelliste.

## Änderungen
- Neuer Ordner `presets/` als feste Ablage für Presets im Repository.
- `presets/index.json` ist das Manifest der verfügbaren Presets.
- `presets/beispiel.json` dient als Vorlage für eigene Presets.
- In den Einstellungen gibt es jetzt **„Artikelliste als Preset speichern“**.
- Der Export enthält ausschließlich Artikeldaten; Verkäufe, App-Einstellungen und sonstige lokale Daten werden nicht mitgespeichert.
- Das Preset-Format ist `kassenapp-products`, Version `1`.
- Die Preset-Auswahl und das Laden eines Presets folgen in V0.23.2 / V0.23.3.

## Presets in GitHub ablegen
1. Gewünschte Artikel in der KassenApp einrichten.
2. Unter Einstellungen **„Artikelliste als Preset speichern“** wählen.
3. Die erzeugte JSON-Datei in den Repository-Ordner `presets/` legen.
4. In `presets/index.json` einen Eintrag mit Anzeigename und Dateiname ergänzen.

Beispiel:

```json
{
  "version": 1,
  "presets": [
    { "name": "Sommerfest", "file": "sommerfest.json" }
  ]
}
```

## Test
### Muss funktionieren
1. Einstellungen öffnen und **„Artikelliste als Preset speichern“** anklicken.
2. Prüfen, dass eine `.json`-Datei heruntergeladen wird.
3. Datei öffnen und prüfen: `format` = `kassenapp-products`, `version` = `1`, `products` enthält die aktuelle Artikelliste.
4. Prüfen, dass die Datei **keine Verkäufe** (`sales`) enthält.
5. `presets/index.json` und `presets/beispiel.json` im Repository prüfen.

### Regressionstest
- Normale Datensicherung weiterhin herunterladen und wieder einlesen.
- Artikel hinzufügen/bearbeiten/löschen.
- Verkauf durchführen und speichern.

### Gerätecheck
- Desktop und Handy: Export-Button in den Einstellungen muss vollständig erreichbar und anklickbar sein.
