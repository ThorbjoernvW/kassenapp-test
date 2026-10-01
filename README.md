# KassenApp V0.24.4.3

V0.24-Stabilisierung – kompakte Verkaufstabelle ohne horizontales Scrollen.

## Thema

Die Gesamtsumme im oberen Bereich der Bezahlspalte wird im Tablet-Querformat um eine kompakte Aufschlüsselung nach den bestehenden Kategorien ergänzt.

## Änderungen

- Die Verkaufstabelle nutzt jetzt die verfügbare Seitenbreite und benötigt keinen horizontalen Seitenscroll mehr.
- Die Spalte **„Artikel“** erhält flexibel den verbleibenden Platz.
- Zu lange Artikelzusammenfassungen werden einzeilig mit **„…“** abgeschnitten.
- Die vollständigen Verkaufspositionen bleiben unverändert in der Verkaufsdetailansicht verfügbar.
- Uhrzeit, Betrag, Status und Detail-Pfeil behalten feste, kompakte Spaltenbreiten.
- Auf schmalen Smartphone-Displays werden die festen Spalten zusätzlich kompakter dargestellt.
- Die drei Hauptüberschriften **„Artikel“**, **„Warenkorb“** und **„Kasse“** haben im Tablet-Querformat jetzt dieselbe Schriftgröße.
- **„Warenkorb“** ist im Tablet-Querformat oben bündig zu „Artikel“ und „Kasse“ ausgerichtet.
- Die Änderung ist auf das bestehende Tablet-Querformat begrenzt; andere Geräteklassen werden nicht verändert.
- Die Überschrift der Artikelspalte lautet jetzt auf allen Geräteklassen **„Artikel“** statt „Kasse“.
- Die Überschrift des Warenkorbs lautet jetzt auf allen Geräteklassen **„Warenkorb“** statt „Aktueller Verkauf“.
- Die dritte Spalte erhält im Tablet-Querformat die Überschrift **„Kasse“**.
- Die zusätzliche Überschrift „Kasse“ bleibt außerhalb des Tablet-Querformats ausgeblendet.
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

Die bereits dokumentierten alten `V0.22.4.1`-Referenzen in der Service-Worker-Registrierung und im `CURRENT_VERSION`-Fallback wurden bewusst nicht verändert, da sie nicht automatisch zum Thema V0.24.4.3 gehören.

## Testplan

### Verkäufe – Tabelle

1. Verkauf mit wenigen Artikeln öffnen und prüfen, dass alle Spalten ohne horizontales Scrollen sichtbar sind.
2. Verkauf mit vielen bzw. langen Artikeln erzeugen.
3. Prüfen, dass die Spalte „Artikel“ nur den verfügbaren Platz nutzt und am Ende mit „…“ gekürzt wird.
4. Den gekürzten Verkauf anklicken und prüfen, dass in der Detailansicht weiterhin alle Artikel vollständig angezeigt werden.
5. Status „Abgeschlossen“ und „Storniert“ prüfen.
6. Betrag und Uhrzeit auf korrekte Darstellung prüfen.
7. Desktop/Laptop, Tablet Hochformat, Tablet Querformat, Smartphone Hochformat und Smartphone Querformat gegenprüfen.
8. Insbesondere auf Smartphones sicherstellen, dass kein horizontaler Seitenscroll durch die Verkaufstabelle entsteht.

### Tablet Querformat – Zielansicht

- Prüfen, dass **Artikel, Warenkorb und Kasse gleich groß und an der Oberkante bündig** dargestellt werden.
- Prüfen, dass die drei sichtbaren Spaltenüberschriften **„Artikel | Warenkorb | Kasse“** lauten.
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

- Prüfen, dass „Artikel“ und „Warenkorb“ verwendet werden und keine zusätzliche Überschrift „Kasse“ erscheint.
- Prüfen, dass die zusätzlichen Zwischensummenzeilen nicht angezeigt werden.
- Bestehendes Layout, Scrollen und Bedienung gegenprüfen.

### Desktop/Laptop

- Prüfen, dass „Artikel“ und „Warenkorb“ verwendet werden und keine zusätzliche Überschrift „Kasse“ erscheint.
- Prüfen, dass die zusätzlichen Zwischensummenzeilen nicht angezeigt werden.
- Kasse, Warenkorb und Bezahlung kurz auf Regressionen prüfen.

### Smartphone Hochformat

- Prüfen, dass „Artikel“ und „Warenkorb“ verwendet werden und keine zusätzliche Überschrift „Kasse“ erscheint.
- Prüfen, dass die zusätzlichen Zwischensummenzeilen nicht angezeigt werden.
- Artikel, Warenkorb und Bezahlung sowie Seiten-Scrollen testen.

### Smartphone Querformat

- Prüfen, dass „Artikel“ und „Warenkorb“ verwendet werden und keine zusätzliche Überschrift „Kasse“ erscheint.
- Prüfen, dass der bestehende vertikale Aufbau erhalten bleibt.
- Zusätzliche Zwischensummenzeilen dürfen nicht angezeigt werden.
- Seiten-Scrollen und Bedienbarkeit testen.

### PWA / Update

- Prüfen, dass V0.24.4.3 als installierte Version angezeigt wird.
- Nach Deployment kontrollieren, dass aktualisierte Assets geladen werden.
- Bestehende bekannte `V0.22.4.1`-Referenzen bleiben bewusst unverändert und sind separat zu behandeln.
