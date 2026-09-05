# KassenApp V0.22.4

## Thema
Warenkorb – insbesondere die Bedienung auf dem Handy im Querformat.

Diese Version ändert nur den Kassen-/Warenkorbbereich. Auf kleinen Touch-Geräten im Querformat wird die Kasse nicht mehr in zwei Spalten gequetscht. Stattdessen stehen Artikel, Warenkorb und Bezahlung untereinander in voller Breite.

## Änderungen
- Handy quer: keine Zwei-Spalten-Kasse mehr
- Artikelbereich steht oben in voller Breite
- Warenkorb folgt direkt unter den Artikeln
- Bezahlbereich und „Verkauf abschließen“ folgen unter dem Warenkorb
- die Seite darf im Querformat scrollen, damit nichts künstlich in eine geringe Bildschirmhöhe gepresst wird
- Warenkorbzeilen nutzen die volle Breite
- lange Artikelnamen dürfen sauber umbrechen
- Menge, Plus/Minus und Löschen bleiben mit 44-px-Touchflächen gut bedienbar
- das kompakte 4-Spalten-Tastenfeld bleibt im Querformat erhalten
- Tablet und Desktop behalten ihr zweispaltiges Layout

## Testplan
### Muss funktionieren
1. App am Handy öffnen und ins Querformat drehen.
2. Prüfen, dass zuerst die Artikel und darunter der komplette Warenkorb erscheinen.
3. Mehrere Artikel hinzufügen, bis mehrere Warenkorbzeilen sichtbar sind.
4. Nach unten scrollen: Gesamt, Gegeben, Rückgeld und „Verkauf abschließen“ müssen vollständig erreichbar sein.
5. Plus, Minus und Löschen in mehreren Warenkorbzeilen testen.
6. Einen Artikel mit langem Namen testen. Der Name darf nicht abgeschnitten werden.
7. Schnellwahl und Tastenfeld testen und einen Verkauf abschließen.

### Regressionstest
1. Handy wieder hochkant drehen: die bisherige Hochformat-Ansicht muss erhalten bleiben.
2. Tablet prüfen: Artikel und Kassenspalte müssen weiterhin nebeneinander stehen.
3. Laptop/Desktop prüfen: zweispaltiges Kassenlayout muss unverändert funktionieren.
4. Burger-Menü im Handy-Querformat öffnen und wieder schließen.

## Geänderte Dateien
- `styles.css`
- `index.html`
- `app.js`
- `version.json`
- `service-worker.js`
- `README.md`
