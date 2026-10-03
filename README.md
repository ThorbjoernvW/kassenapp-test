# KassenApp V0.27

## Thema

**V0.27 – Navigationsleisten-Fix im Tablet-Querformat**

Im Kassenbereich wird auf Tablets im Querformat wieder die permanente linke Icon-Navigation verwendet. Die Smartphone-Querformat-Sonderregel darf dort nicht mehr stattdessen den Burger-Button rechts einblenden.

## Änderungen

### Tablet-Navigation im Kassenbereich

- Die bestehende Tablet-Querformat-Erkennung `900–1366 px` mit `pointer: coarse` stellt im aktiven Kassenbereich die linke Sidebar-Position wieder her.
- Der für Smartphone-Querformat vorgesehene schwebende Burger-Button wird in diesem Tablet-Bereich ausgeblendet.
- Die Sidebar bleibt links als permanente Icon-Leiste sichtbar.
- Der für die Sidebar benötigte linke Seitenabstand wird im Kassenbereich wieder hergestellt.
- Das bestehende Tablet-Kassenlayout `Artikel | Warenkorb | Kasse` bleibt unverändert.

## Nicht verändert

Keine fachlichen Änderungen an:

- Verkaufslogik
- Warenkorb-Logik
- Bezahlung
- Artikelverwaltung
- Presets
- Persistenz / `localStorage`
- Backup / Restore
- Verkaufsansicht
- Smartphone-Hochformat-Navigation
- Desktop-Aufklappverhalten der Navigation

## Geänderte Dateien

- `index.html` – Versionsstand und Asset-Versionen
- `styles.css` – gezielter Tablet-Navigations-Fix
- `app.js` – Versionsfallback
- `service-worker.js` – Cache-/Asset-Version
- `version.json` – Versionsnummer
- `README.md` – Versionsdokumentation und Testplan

## Neue Dateien

Keine.

## Gelöschte Dateien

Keine.

## Durchgeführte technische Prüfungen

- CSS-Änderung auf den bereits bestehenden Tablet-Querformat-Bereich `900–1366 px` mit `pointer: coarse` begrenzt.
- Smartphone-Querformat-Sonderregel selbst nicht verändert.
- Desktop-Navigationsregeln nicht verändert.
- JavaScript-Geschäftslogik nicht verändert.
- Relevante Versionsstellen auf V0.27 geprüft.
- Die bekannten alten `V0.22.4.1`-Referenzen wurden bewusst nicht nebenbei verändert.

## Testplan

### Galaxy Tab S9 / Tablet Querformat

- Kassenansicht öffnen.
- Prüfen, dass die Navigation links als permanente reine Icon-Leiste erscheint.
- Prüfen, dass oben rechts kein Burger-Button sichtbar ist.
- Zwischen **Kasse**, **Verkäufe** und **Einstellungen** wechseln.
- Zur Kasse zurückkehren und prüfen, dass die Navigation weiterhin links bleibt.
- Prüfen, dass `Artikel | Warenkorb | Kasse` weiterhin in drei Bereichen dargestellt wird.
- Prüfen, dass kein Inhalt von der Sidebar überdeckt wird.

### Tablet Hochformat

- Permanente Icon-Leiste prüfen.
- Alle drei Ansichten auf Navigation und Layout prüfen.

### Smartphone Hochformat

- Burger-Menü öffnen und schließen.
- Alle drei Ansichten aufrufen.
- Sicherstellen, dass das bestehende mobile Verhalten unverändert ist.

### Smartphone Querformat

- Kassenansicht prüfen.
- Sicherstellen, dass der bewusst vertikale Aufbau `Artikel → Warenkorb → Kasse` weiterhin scrollt.
- Bestehendes Burger-Verhalten prüfen.

### Desktop/Laptop

- Schmale linke Icon-Leiste prüfen.
- Aufklappen per Hover und Tastaturfokus prüfen.
- Direktes Einklappen nach Auswahl einer Ansicht prüfen.

### PWA / Update

- Update von V0.26 auf V0.27 prüfen.
- Cache-Wechsel auf `kassenapp-v0-27` prüfen.
- Nach einmaligem Online-Laden einen Offline-Neustart durchführen.

## Versionsstand

Aktueller Entwicklungsstand: **V0.27**

Relevante Versionsstellen:

- `index.html`: `V0.27`
- `styles.css?v=0.27`
- `app.js?v=0.27`
- `app.js` Versionsfallback: `V0.27`
- `service-worker.js`: Cache `kassenapp-v0-27`
- Service-Worker-App-Shell: Assets mit `0.27`
- `version.json`: `0.27`
- `README.md`: `V0.27`

## Bekannte technische Schulden

Die bereits vor V0.27 dokumentierten alten `V0.22.4.1`-Referenzen bleiben bewusst unverändert:

- Service-Worker-Registrierungs-Querystring
- `CURRENT_VERSION`-Fallback in `index.html`

Diese Stellen gehören nicht zum Navigationsleisten-Fix und werden in V0.27 nicht nebenbei bereinigt.

Außerdem bleibt `styles.css` historisch gewachsen und enthält mehrere aufeinanderfolgende Override- und Media-Query-Blöcke. Der V0.27-Fix ist deshalb bewusst eng auf den bereits vorhandenen Tablet-Querformat-Bereich begrenzt.
