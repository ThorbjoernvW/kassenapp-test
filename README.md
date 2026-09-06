# KassenApp V0.23.4.2.4

Hotfix innerhalb des Preset-Themas.

## Änderung
- Der Button „Löschen“ bei der Preset-Auswahl ist jetzt als rote/destruktive Aktion gestaltet.
- Funktional bleibt das Verhalten unverändert: Der Button löscht nur die aktuelle Preset-Auswahl, nicht die Preset-Datei.

## Test
### Muss funktionieren
1. Einstellungen öffnen.
2. Preset auswählen.
3. Prüfen, dass „Löschen“ rot dargestellt wird.
4. „Löschen“ drücken und prüfen, dass nur die Auswahl zurückgesetzt wird.

### Regressionstest
- Preset auswählen und laden.
- Preset speichern.

### Gerätecheck
- Desktop und Handy: rote Darstellung und deaktivierter Zustand prüfen.
