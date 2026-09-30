# KassenApp V0.24.3

Tablet-Querformat – neutrale Bedienelemente in Warenkorb und Bezahlung.

## Änderungen

- Plus- und Minus-Tasten im Warenkorb: schwarze Schrift/Symbole auf weißem Hintergrund mit dunkler Umrandung.
- Schnellwahltasten: schwarze Schrift auf weißem Hintergrund mit dunkler Umrandung.
- Zahlentasten des Tastenfelds (0–9 und 00): schwarze Schrift auf weißem Hintergrund mit dunkler Umrandung.
- Sondertasten des Tastenfelds bleiben funktional und optisch unterscheidbar.
- Änderung gilt gezielt für das Tablet-Querformat des V0.24-Layouts.

## Test

### Muss funktionieren
1. Kasse auf einem Tablet im Querformat öffnen.
2. Artikel in den Warenkorb legen: + und − müssen schwarz auf weiß dargestellt werden.
3. Schnellwahl öffnen: die Schnellwahltasten müssen schwarz auf weiß dargestellt werden.
4. Tastenfeld öffnen: Zahlentasten 0–9 und 00 müssen schwarz auf weiß dargestellt werden.
5. Mengen ändern, Geldbetrag eingeben und einen Verkauf abschließen.

### Regressionstest
- Löschen-Schaltfläche im Warenkorb weiterhin rot und funktionsfähig.
- Tastenfeld-Sonderfunktionen (Komma, Rücktaste, Passend) testen.
- Drei-Spalten-Layout und internes Scrollen prüfen.

### Gerätecheck
- Tablet quer ist die Zielansicht.
- Desktop und Handy kurz gegenprüfen; deren Darstellung soll unverändert bleiben.
