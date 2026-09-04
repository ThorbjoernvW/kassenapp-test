# KassenApp V0.22.1 – CSS-Doppelungs-Audit

## In V0.22.1 bereinigt
- Wiederholte Eigenschaften desselben Selektors im selben Media-Query-Kontext wurden entfernt, wenn sie durch eine spätere identische Selektorregel sicher überschrieben werden.
- Leere Altblöcke der früheren Landscape-Hotfixes wurden entfernt.
- Handy-Querformat bleibt in einem einzigen autoritativen Landscape-Block.
- Keine doppelt deklarierten benannten JavaScript-Funktionen festgestellt.

## Bewusst noch nicht zusammengeführt
1. Produktgitter und Produktkacheln: bleiben bis V0.22.2/V0.22.3 unangetastet, weil dort die sichtbare Kachel-/Bildoptik überarbeitet wird.
2. Verkaufsstatistik: mehrere Breakpoints sind funktional beabsichtigt und haben niedrige Refactoring-Priorität.
3. Unterschiedliche Breakpoints (z. B. 680/760/780 px): nicht blind vereinheitlicht, da sie aktuell unterschiedliche Geräteklassen abbilden und eine Zusammenlegung sichtbare Änderungen erzeugen könnte.

## Empfehlung
Ab V0.22.2 nur noch thematische, klar benannte Layoutblöcke ergänzen. Alte Regeln sollen dabei ersetzt statt durch weitere Overrides ergänzt werden.
