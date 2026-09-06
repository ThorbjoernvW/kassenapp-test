# KassenApp V0.23.3

## Thema
Preset laden, validieren und aktuelle Artikelliste ersetzen.

## Neu
- In den Einstellungen kann das ausgewählte Preset mit **„Preset laden“** übernommen werden.
- Vor dem Laden erscheint eine Sicherheitsabfrage.
- Das Preset wird vollständig geprüft, bevor Artikeldaten verändert werden.
- Nur Presets im Format `kassenapp-products`, Version `1`, werden akzeptiert.
- Beim Laden werden alle aktuellen Artikel ersetzt.
- Bereits gespeicherte Verkäufe bleiben unverändert.
- Für geladene Artikel werden neue interne IDs erzeugt, damit bestehende Verkaufsdaten nicht mit neuen Artikeln vermischt werden.
- Bei Fehlern bleibt die bisherige Artikelliste unverändert.

## Testplan
### Muss funktionieren
1. Einstellungen öffnen und ein Preset auswählen.
2. **Preset laden** drücken.
3. Sicherheitsabfrage zunächst abbrechen: Artikelliste darf sich nicht ändern.
4. Erneut laden und bestätigen: aktuelle Artikel müssen durch das Preset ersetzt werden.
5. Prüfen, dass die Artikel in der Kasse sofort aktualisiert sind.
6. Prüfen, dass bereits gespeicherte Verkäufe weiterhin vorhanden sind.
7. Ein fehlerhaftes/ungültiges Preset testen: bestehende Artikelliste muss unverändert bleiben.

### Regressionstest
- Preset-Auswahl mit **Löschen** zurücksetzen.
- Artikelliste als Preset exportieren.
- Artikel manuell anlegen/bearbeiten/löschen.
- Normalen Verkauf durchführen und speichern.
- Sicherung herunterladen und wiederherstellen.

### Gerätecheck
- Preset-Auswahl und Laden auf PC sowie Handy testen.
