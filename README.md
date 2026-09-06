# KassenApp V0.23.4.1

## Thema
Preset-System – `index.json` beim Preset-Export automatisch erzeugen.

## Änderungen
- Beim Speichern eines neuen Artikel-Presets werden jetzt **zwei Dateien** heruntergeladen:
  1. die Preset-Datei, z. B. `sommerfest-2026.json`
  2. eine aktualisierte `index.json`
- Die neue `index.json` übernimmt alle bereits vorhandenen Presets aus der geladenen Preset-Liste und ergänzt das neu erstellte Preset.
- Existiert bereits ein Eintrag mit gleichem Namen oder Dateinamen, wird dieser ersetzt statt doppelt angelegt.
- Der Preset-Export ist nur möglich, wenn die bestehende `presets/index.json` erfolgreich geladen wurde. So wird verhindert, dass versehentlich eine unvollständige Indexdatei erzeugt wird.
- Verkäufe und sonstige Kassendaten bleiben unverändert.

## Verwendung
1. Artikel wie gewünscht einrichten.
2. Unter **Einstellungen → Artikel-Preset erstellen** einen Namen vergeben.
3. **Artikelliste als Preset speichern** drücken.
4. Die heruntergeladene Preset-Datei und die ebenfalls heruntergeladene `index.json` gemeinsam in den GitHub-Ordner `presets/` hochladen bzw. dort ersetzen.

## Testplan
### Muss funktionieren
1. Bestehende Preset-Liste muss erfolgreich geladen sein.
2. Preset-Namen eingeben und speichern.
3. Es müssen die Preset-Datei und eine `index.json` heruntergeladen werden.
4. `index.json` öffnen und prüfen, dass vorhandene Presets weiterhin enthalten sind.
5. Das neu erstellte Preset muss zusätzlich mit richtigem Namen und Dateinamen enthalten sein.
6. Beide Dateien in `presets/` hochladen und App neu laden.
7. Das neue Preset muss danach in der Auswahl erscheinen und ladbar sein.

### Regressionstest
- Ein vorhandenes Preset laden.
- Preset-Auswahl mit **Löschen** zurücksetzen.
- Einen normalen Verkauf durchführen.
- Komplette Datensicherung testen.

### Gerätecheck
- Preset-Export einmal am PC und einmal am Handy testen.
- Falls der Browser beim ersten Mal nach der Erlaubnis für mehrere Downloads fragt, diese erlauben.
