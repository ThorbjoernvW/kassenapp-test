# KassenApp V0.24.2

Tablet-Querformat – Feinschliff des dreispaltigen Kassenlayouts.

> V0.24.1 wurde bewusst nicht erneut verwendet, weil diese Versionsnummer bereits für die verworfene Auswertungs-Version vergeben war.

## Änderungen

- Schnellwahltasten im Tablet-Querformat sind dunkel/schwarz statt blau.
- Die Bezahlspalte nutzt ihre Inhalte kompakter; die große Leerfläche mitten zwischen den Bedienelementen wurde entfernt.
- Artikel, Warenkorb und Bezahlung sind nun als drei eigenständige, gleichartig abgegrenzte Karten/Spalten erkennbar.
- Andere Geräteansichten werden von diesen CSS-Regeln nicht verändert.

## Test

### Muss funktionieren
1. Kassenansicht auf einem Tablet im Querformat öffnen.
2. Prüfen, dass Artikel, Warenkorb und Bezahlung jeweils eine eigene sichtbare Umrandung besitzen.
3. Schnellwahl öffnen: 10 €, 20 €, 50 € und Passend müssen dunkel dargestellt sein.
4. Mehrere Artikel hinzufügen und prüfen, dass der Bezahlbereich kompakt angeordnet bleibt.
5. Schnellwahl und Tastenfeld verwenden und einen Verkauf abschließen.

### Regressionstest
- Warenkorb mit vielen Positionen intern scrollen.
- Artikelbereich intern scrollen.
- Desktop und Handy hoch/quer kurz prüfen.

### Gerätecheck
Besonders auf dem echten Tablet im Querformat prüfen, ob die drei Spalten optisch sauber getrennt und die Abstände stimmig sind.
