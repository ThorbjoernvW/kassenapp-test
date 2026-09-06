# KassenApp V0.23.4.2

Hotfix innerhalb des Preset-Themas.

## Änderungen

- Preset-Export in den Einstellungen optisch neu aufgebaut.
- Preset-Name und Speichern-Button stehen auf breiten Ansichten kompakt nebeneinander.
- Der Button heißt jetzt kurz „Preset speichern“.
- Hinweis auf die zwei Downloads (Preset-Datei + index.json) steht dezent unter den Bedienelementen.
- „Artikel hinzufügen“ wurde aus dem allgemeinen Einstellungs-Kopf entfernt.
- Der Button befindet sich jetzt direkt im Abschnitt „Artikel“ oberhalb der Artikelliste.
- Auf schmalen Geräten werden die Bedienelemente sauber untereinander angeordnet.

## Test

### Muss funktionieren

1. Einstellungen öffnen.
2. Prüfen, dass „Artikel hinzufügen“ direkt oberhalb der Artikelliste steht.
3. Über den Button einen neuen Artikel anlegen.
4. Preset-Name eingeben und prüfen, dass „Preset speichern“ aktiv wird.
5. Preset speichern und kontrollieren, dass Preset-Datei und `index.json` heruntergeladen werden.

### Regressionstest

- Bestehendes Preset auswählen, laden und Auswahl löschen.
- Artikel bearbeiten/löschen/verschieben.
- Normale Datensicherung testen.

### Gerätecheck

- Desktop: Preset-Name und Speichern-Button stehen kompakt nebeneinander.
- Handy: Preset-Eingabe und Button stehen untereinander und nutzen die verfügbare Breite.
- Der Artikel-hinzufügen-Button muss auf beiden Ansichten direkt bei der Artikelliste bleiben.
