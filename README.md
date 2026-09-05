# KassenApp V0.22.4.1

Hotfix zum Warenkorb bei schmalen Bildschirmbreiten.

## Änderungen
- Bei schmalem PC-/Tablet-Fenster steht der Artikelname im Warenkorb jetzt in einer eigenen Zeile über Menge, Positionssumme und Löschen.
- Im Handy-Hochformat sitzt der Löschen-Button pro Position sauber in der zweiten Zeile rechts.
- Keine Änderungen an Artikeln, Bezahlung, Verkäufen oder Einstellungen.

## Test
### Muss funktionieren
1. Am PC das Browserfenster schmal ziehen: lange Artikelnamen müssen oberhalb der Bedienelemente vollständig lesbar bleiben.
2. Handy hochkant: mehrere Positionen hinzufügen und prüfen, dass das × jeder Position rechts in derselben Bedienzeile sitzt.
3. Plus, Minus und Löschen betätigen.

### Regressionstest
- Desktop breit: Warenkorb weiterhin normal bedienen.
- Handy quer: Artikel oben, Warenkorb darunter; bestehendes V0.22.4-Layout bleibt erhalten.
- Verkauf vollständig abschließen.

### Gerätecheck
- PC bei ca. 760–1050 px Fensterbreite.
- Handy hochkant.
- Handy quer.
