# KassenApp V0.25.5

## Thema

**V0.25 – einklappbare Navigation**

Die Hauptnavigation wurde für Desktop und Tablet platzsparender gestaltet. Desktop verwendet eine kompakte Icon-Leiste, die bei Bedarf aufklappt. Tablet verwendet dauerhaft eine reine Symbolleiste. Auf Smartphones bleibt das bestehende Burger-Menü erhalten.

## Änderungen

### Desktop / Laptop

- Navigation standardmäßig als schmale Icon-Leiste.
- Navigationsicons größer und horizontal mittig ausgerichtet.
- Seiteninhalt innerhalb der verbleibenden Desktop-Fläche mittig ausgerichtet.
- Die Inhaltsfläche nutzt den durch die kompakte Navigation gewonnenen Platz.
- Vollständige Navigation klappt bei Hover mit Maus/Trackpad auf.
- Tastaturfokus kann die Navigation weiterhin gezielt aufklappen.
- Nach Auswahl von **Kasse**, **Verkäufe** oder **Einstellungen** klappt die Navigation direkt wieder ein.
- Die aufgeklappte Navigation liegt über dem Inhalt und verschiebt die eigentliche Seite nicht.

### Tablet

- Tablet von 761 bis 1180 px verwendet dauerhaft eine kompakte Symbolleiste.
- Kein zusätzlicher Burger- oder Aufklappschalter in der Seitenleiste.
- Navigationsicons größer und horizontal mittig ausgerichtet.
- Die Navigation klappt auf Tablet auch bei angeschlossener Maus oder Trackpad nicht auf.
- Das bestehende Tablet-Kassenlayout bleibt erhalten.

### Smartphone

- Das bestehende Burger-Menü bis 760 px bleibt unverändert erhalten.
- Smartphone Hoch- und Querformat behalten ihre bisherigen Layout- und Navigationsregeln.

### Navigationsicons

Die bisherigen Text-/Unicode-Symbole wurden durch einheitliche Inline-SVG-Icons ersetzt:

- **Kasse:** Warenkorb
- **Verkäufe:** Verlaufspfeil mit Uhr
- **Einstellungen:** klassisches Zahnrad

Die SVGs verwenden `currentColor` und übernehmen damit die vorhandenen Aktiv-, Hover- und Inaktivfarben der Navigation.

Zusätzlich besitzen die Navigationsbuttons explizite `aria-label`-Beschriftungen für die kompakte Icon-Darstellung.

## Fehlerbehebungen

- Desktop: Die Navigation blieb nach einem Seitenwechsel durch den gesetzten Fokus geöffnet. Sie klappt nun direkt nach der Auswahl wieder ein.
- Desktop: Die Inhaltsfläche nutzt den durch die schmale Navigation frei gewordenen Platz besser aus.
- Desktop: Icons der eingeklappten Navigation wurden sauber horizontal zentriert.
- Tablet: Der zwischenzeitlich eingeführte zusätzliche Burger-/Aufklappmechanismus wurde wieder entfernt.
- Einstellungen: Das Zahnrad-SVG wurde durch ein klarer erkennbares klassisches Zahnrad ersetzt.

## Nicht verändert

Keine fachlichen Änderungen an:

- Verkaufslogik
- Warenkorb-Logik
- Artikeln und Artikelverwaltung
- Presets
- Persistenz
- Zahlung
- Backup / Restore

## Geänderte Dateien

- `index.html`
- `styles.css`
- `app.js`
- `service-worker.js`
- `version.json`
- `README.md`

## Neue Dateien

Keine.

## Gelöschte Dateien

Keine.

## Durchgeführte Tests

### Desktop / Laptop

- Eingeklappte Icon-Leiste auf Breite, Icon-Größe und Zentrierung geprüft.
- Hover-Aufklappen mit Maus/Trackpad geprüft.
- Direktes Einklappen nach Auswahl von Kasse, Verkäufe und Einstellungen geprüft.
- Tastaturfokus und Aufklappen für Tastaturbedienung geprüft.
- Mittige Ausrichtung der Seitenfläche geprüft.
- Darstellung von Kasse, Verkäufen und Einstellungen geprüft.
- Verhalten auf breiten Desktop-Fenstern und knapp oberhalb des Desktop-Breakpoints geprüft.

### Tablet Hochformat

- Permanente Symbolleiste ohne zusätzlichen Burger-Schalter geprüft.
- Größe und horizontale Zentrierung der Icons geprüft.
- Wechsel zwischen Kasse, Verkäufe und Einstellungen geprüft.
- Touch-Bedienung und Scrollverhalten geprüft.

### Tablet Querformat

- Permanente Symbolleiste ohne zusätzlichen Burger-Schalter geprüft.
- Dreispalten-Kassenlayout geprüft.
- Artikel, Warenkorb und Bezahlung geprüft.
- Schnellwahl und Tastenfeld geprüft.
- Interne Scrollbereiche und Touch-Bedienung geprüft.
- Verhalten mit Maus/Trackpad geprüft; Tablet-Navigation klappt dabei nicht auf.

### Smartphone Hochformat

- Bestehende Mobile-Topbar mit Burger-Menü geprüft.
- Menü öffnen und schließen geprüft.
- Wechsel zwischen allen drei Ansichten geprüft.
- Keine Desktop-/Tablet-Symbolleiste sichtbar.

### Smartphone Querformat

- Bestehender vertikaler Kassenaufbau geprüft.
- Burger-Menü geprüft.
- Seiten-Scrollen sowie Artikel, Warenkorb und Bezahlung geprüft.
- Keine Tablet-/Desktop-Navigation sichtbar.

### Navigation / SVG-Icons

- Warenkorb-, Verlauf-/Uhr- und Zahnrad-Icon auf Desktop, Tablet und Smartphone geprüft.
- Aktiv-, Hover- und Inaktivzustände geprüft.
- Zentrierung und Größenwirkung der Icons geprüft.
- Zahnrad nach der letzten Anpassung auf klare Erkennbarkeit geprüft.

### Technische Prüfungen

- JavaScript-Syntax von `app.js` geprüft.
- JavaScript-Syntax von `service-worker.js` geprüft.
- CSS-Struktur / Klammerung geprüft.
- Versionsstellen auf V0.25.5 geprüft.
- PWA-/Cache-Wechsel auf V0.25.5 geprüft.
- Offline-Neustart nach vorherigem Online-Laden geprüft.
- Update-Mechanismus auf Regressionen geprüft.

## Versionsstand

Aktueller Versionsstand: **V0.25.5**

Relevante Versionsstellen:

- `index.html`: `V0.25.5`
- `styles.css?v=0.25.5`
- `app.js?v=0.25.5`
- `app.js` Versionsfallback: `V0.25.5`
- `service-worker.js`: Cache `kassenapp-v0-25-5`
- `version.json`: `0.25.5`
- `README.md`: `V0.25.5`

## Bekannte technische Schulden

Die bereits vor V0.25 dokumentierten alten `V0.22.4.1`-Referenzen bleiben bewusst unverändert:

- Service-Worker-Registrierungs-Querystring
- `CURRENT_VERSION`-Fallback

Diese Punkte gehören nicht zum Navigationsthema von V0.25 und sollen separat bereinigt werden.

Außerdem bleibt `styles.css` historisch gewachsen und enthält mehrere aufeinanderfolgende Override- und Media-Query-Blöcke. V0.25 reduziert diese bestehende technische Schuld nicht grundlegend.

## Ergebnis

V0.25.5 schließt das Thema **einklappbare Navigation** ab.

Endgültiges Navigationsverhalten:

- **Desktop:** kompakte Icon-Leiste, Aufklappen per Hover bzw. Tastaturfokus.
- **Tablet:** permanente reine Icon-Leiste ohne Burger-/Aufklappschalter.
- **Smartphone:** bestehendes Burger-Menü.

Die Navigation verwendet einheitliche SVG-Icons für Kasse, Verkäufe und Einstellungen.
