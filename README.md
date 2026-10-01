# KassenApp V0.24.4

Tablet-Querformat – Zwischensummen für die Kategorien im Bezahlbereich.

## Thema

Die Gesamtsumme im oberen Bereich der Bezahlspalte wird im Tablet-Querformat um eine kompakte Aufschlüsselung nach den bestehenden Kategorien ergänzt.

## Änderungen

- Im Tablet-Querformat werden oberhalb der Gesamtsumme zwei Zwischensummen angezeigt:
  - Essen
  - Getränke
- Die Werte werden live aus dem aktuellen Warenkorb berechnet.
- Die Gesamtsumme bleibt unverändert die Summe aller Warenkorbpositionen.
- Die Zwischensummen werden auch bei `0,00 €` angezeigt, damit die Darstellung nicht springt.
- Die neue Aufschlüsselung ist gezielt auf das bestehende V0.24-Tablet-Querformat begrenzt.
- Desktop, Tablet-Hochformat und Smartphone-Layouts blenden die neuen Zwischensummenzeilen aus.
- Keine Änderung an Verkaufsdaten, Persistenz, Presets oder Zahlungslogik.

## Fehlerbehebungen

- Keine zusätzlichen Fehlerbehebungen in dieser Version.

## Bekannte technische Schuld

Die bereits dokumentierten alten `V0.22.4.1`-Referenzen in der Service-Worker-Registrierung und im `CURRENT_VERSION`-Fallback wurden bewusst nicht verändert, da sie nicht automatisch zum Thema V0.24.4 gehören.

## Testplan

### Tablet Querformat – Zielansicht

1. Kasse auf einem Tablet im Querformat öffnen.
2. Prüfen, dass weiterhin drei Bereiche sichtbar sind:
   `Artikel | Warenkorb | Bezahlung`.
3. Einen Essensartikel hinzufügen:
   - Zwischensumme „Essen“ muss steigen.
   - „Getränke“ muss unverändert bleiben.
   - „Gesamt“ muss dem Warenkorb entsprechen.
4. Einen Getränkeartikel hinzufügen:
   - Zwischensumme „Getränke“ muss steigen.
   - „Gesamt“ muss der Summe aus Essen und Getränke entsprechen.
5. Mengen mit `+` und `−` ändern und prüfen, dass alle drei Summen sofort korrekt aktualisiert werden.
6. Einzelne Positionen löschen und den Warenkorb leeren; alle Werte müssen korrekt bis `0,00 €` zurückgehen.
7. Schnellwahl und Tastenfeld testen.
8. „Passend“, Rückgeldberechnung und Verkauf abschließen testen.
9. Prüfen, dass durch die zwei zusätzlichen Zeilen keine Bedienelemente abgeschnitten werden.
10. Interne Scrollbereiche von Artikeln, Warenkorb und Bezahlung prüfen.

### Tablet Hochformat

- Prüfen, dass die zusätzlichen Zwischensummenzeilen nicht angezeigt werden.
- Bestehendes Layout, Scrollen und Bedienung gegenprüfen.

### Desktop/Laptop

- Prüfen, dass die zusätzlichen Zwischensummenzeilen nicht angezeigt werden.
- Kasse, Warenkorb und Bezahlung kurz auf Regressionen prüfen.

### Smartphone Hochformat

- Prüfen, dass die zusätzlichen Zwischensummenzeilen nicht angezeigt werden.
- Artikel, Warenkorb und Bezahlung sowie Seiten-Scrollen testen.

### Smartphone Querformat

- Prüfen, dass der bestehende vertikale Aufbau erhalten bleibt.
- Zusätzliche Zwischensummenzeilen dürfen nicht angezeigt werden.
- Seiten-Scrollen und Bedienbarkeit testen.

### PWA / Update

- Prüfen, dass V0.24.4 als installierte Version angezeigt wird.
- Nach Deployment kontrollieren, dass aktualisierte Assets geladen werden.
- Bestehende bekannte `V0.22.4.1`-Referenzen bleiben bewusst unverändert und sind separat zu behandeln.
