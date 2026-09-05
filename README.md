# KassenApp V0.23.2

## Thema
Preset-System – Auswahl vorhandener Presets in den Einstellungen.

## Neu in V0.23.2
- Die App lädt `presets/index.json` beim Start ohne Browser-Cache.
- In den Einstellungen gibt es jetzt eine Preset-Auswahl.
- Alle gültigen Einträge aus dem Preset-Index werden im Dropdown angezeigt.
- Nach der Auswahl zeigt die App Preset-Name und zugehörige Datei an.
- Ein leerer oder nicht erreichbarer Preset-Index wird sauber abgefangen.
- Die vorhandene Artikelliste wird in V0.23.2 noch nicht verändert.

Das tatsächliche Laden, Prüfen und Ersetzen der Artikelliste folgt getrennt in V0.23.3.

## Preset-Index
Beispiel:

```json
{
  "version": 1,
  "presets": [
    {
      "name": "Sommerfest",
      "file": "sommerfest.json"
    }
  ]
}
```

Die referenzierten JSON-Dateien liegen ebenfalls im Ordner `presets/`.

## Test
### Muss funktionieren
1. App öffnen und zu **Einstellungen** wechseln.
2. Unter **Artikel-Preset auswählen** muss die Auswahl erscheinen.
3. Das vorhandene Beispiel-Preset muss auswählbar sein.
4. Nach Auswahl müssen Name und Dateiname angezeigt werden.
5. Die aktuelle Artikelliste darf sich durch die Auswahl noch nicht verändern.

### Regressionstest
- Artikelliste als Preset exportieren.
- Artikel anlegen/bearbeiten/löschen.
- Normale Sicherung herunterladen und wieder einlesen.
- Einen Verkauf durchführen.

### Fehlerfall
`presets/index.json` testweise umbenennen oder ungültig machen. Die App muss eine verständliche Fehlermeldung anzeigen und die vorhandenen Artikel unverändert lassen.
