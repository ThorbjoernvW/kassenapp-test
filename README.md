# KassenApp V0.22.1

## Schwerpunkt: CSS-Basis bereinigt

Diese Unterversion baut auf V0.22.0.1 auf und ist bewusst ein Refactoring ohne geplante sichtbare Designänderung.

- Wiederholte CSS-Eigenschaften innerhalb identischer Selektoren und Media-Query-Kontexte wurden entfernt, wenn eine spätere Regel sie ohnehin vollständig überschreibt.
- Leere historische Landscape-Kommentarblöcke wurden entfernt.
- Die autoritative Handy-Queransicht aus V0.22 bleibt unverändert erhalten.
- Produktkacheln und Bilddarstellung werden noch nicht neu gestaltet; das folgt in V0.22.2/V0.22.3.
- Version und Service-Worker-Cache wurden auf V0.22.1 angehoben.

## Daten
Die lokale Datenhaltung bleibt unverändert. Der bestehende localStorage-Schlüssel wird weiterhin verwendet.
