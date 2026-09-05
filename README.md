# KassenApp V0.23.2.1

## Thema
Hotfix zur Preset-Auswahl in den Einstellungen.

## Änderungen
- Die technische Beschreibung zur Herkunft der Presets wurde aus der Oberfläche entfernt.
- „Preset auswählen …“ ist nur noch der Startzustand und kann im geöffneten Dropdown nicht erneut gewählt werden.
- Nach einer Preset-Auswahl wird der neue Button **Löschen** aktiv.
- **Löschen** entfernt nur die aktuelle Auswahl; es wird keine Preset-Datei gelöscht.
- Die Statusanzeige zeigt nach der Auswahl nur noch den Preset-Namen und nicht mehr den Dateinamen.

## Test
### Muss funktionieren
1. Einstellungen öffnen.
2. Unter **Artikel-Preset auswählen** darf keine Beschreibung zu `presets/index.json` stehen.
3. Ein Preset auswählen.
4. „Preset auswählen …“ darf danach im Dropdown nicht als auswählbare Option funktionieren.
5. Der Button **Löschen** muss nach der Auswahl aktiv sein.
6. **Löschen** drücken: Die Auswahl muss auf den leeren Startzustand zurückgesetzt werden und der Button wieder deaktiviert sein.
7. Die Artikelliste darf dabei nicht verändert werden.

### Regressionstest
- Preset-Liste muss weiterhin geladen werden.
- Artikelliste als Preset exportieren.
- Artikel anlegen/bearbeiten/löschen.
- Einen normalen Verkauf durchführen.

### Gerätecheck
- Preset-Auswahl und Löschen-Button einmal am PC und einmal am Handy prüfen.
