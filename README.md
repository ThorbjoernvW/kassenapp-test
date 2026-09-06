# KassenApp V0.23.4.2.3

Hotfix innerhalb von V0.23.4.2.

## Änderung
Der Kopf des Artikelbereichs in den Einstellungen verwendet jetzt denselben horizontalen Innenabstand wie die Artikelliste und die übrigen Einstellungsbereiche. Dadurch stehen **„Artikel“** links und **„+ Artikel hinzufügen“** rechts bündig zu den darunterliegenden Elementen.

- Desktop/Tablet: 22 px horizontaler Abstand
- Handy: 16 px horizontaler Abstand

Es wurden keine Funktionen verändert.

## Test

### Muss funktionieren
- Einstellungen am PC öffnen.
- Prüfen, dass Überschrift/Hint links bündig mit der Artikelliste beginnen.
- Prüfen, dass „+ Artikel hinzufügen“ rechts bündig mit der Artikelliste endet.
- Button anklicken und einen Artikel hinzufügen.

### Regressionstest
- Artikel bearbeiten, löschen und verschieben.
- Preset speichern und laden.

### Gerätecheck
- Desktop/Tablet: horizontalen Abstand links und rechts prüfen.
- Handy: Artikelkopf darf nicht am Bildschirmrand kleben; 16-px-Abstand muss erhalten bleiben.
