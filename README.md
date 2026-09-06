# KassenApp V0.23.4.2.1

Hotfix innerhalb des Preset-/Einstellungsblocks.

## Änderung

- Desktop-Anordnung im Abschnitt „Artikel“ korrigiert.
- Überschrift und Drag&Drop-Hinweis bilden links wieder einen sauberen Textblock.
- „+ Artikel hinzufügen“ wird rechts vertikal sauber zu diesem Block ausgerichtet.
- Mobile Darstellung bleibt unverändert: Button weiterhin unter dem Textblock in voller Breite.

## Test

### Muss funktionieren
1. Einstellungen am PC öffnen.
2. Abschnitt „Artikel“ ansehen.
3. Überschrift + Hinweis müssen links sauber untereinander stehen.
4. „+ Artikel hinzufügen“ muss rechts mittig zum Textblock ausgerichtet sein.
5. Button anklicken und prüfen, ob der Artikeldialog weiterhin öffnet.

### Regressionstest
- Artikel bearbeiten, löschen und verschieben.
- Preset speichern und laden.

### Gerätecheck
- PC/Desktop: neue Anordnung prüfen.
- Handy: bestehende einspaltige Darstellung des Artikelkopfs prüfen.
