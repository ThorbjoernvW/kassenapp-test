# KassenApp V0.24

Tablet-Kassenlayout im Querformat.

## Änderung
- Tablet quer: drei visuelle Spalten für Artikel, Warenkorb und Bezahlung.
- Aufteilung ungefähr 40 % / 32 % / 28 %.
- Artikel und Warenkorb können intern scrollen.
- Gesamtbetrag, Geldeingabe, Rückgeld und Abschluss bleiben in der rechten Spalte erreichbar.
- Handy-Layouts und Desktop-Layout bleiben unverändert.

## Test
### Muss funktionieren
1. App auf einem Tablet im Querformat öffnen.
2. Prüfen: links Artikel, mittig Warenkorb, rechts Gesamt/Bezahlung.
3. Viele Artikel in den Warenkorb legen und Warenkorb intern scrollen.
4. Schnellwahl und Tastenfeld testen.
5. Verkauf vollständig abschließen.

### Regressionstest
- Desktop: bisheriges Kassenlayout prüfen.
- Handy hochkant und quer: bisheriges Layout prüfen.
- Tablet hochkant: bisherige Zweispaltenansicht prüfen.

### Gerätecheck
- Tablet quer bei typischen Breiten von ca. 900 bis 1366 px mit Touch-Eingabe.
