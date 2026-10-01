# KassenApp V0.25.5

## V0.25.5 – Zahnrad-Icon präzisiert

- Das SVG-Symbol für **Einstellungen** wurde durch ein klar erkennbares klassisches Zahnrad mit ausgeformten Zähnen ersetzt.
- Warenkorb- und Verlaufs-Icon bleiben unverändert.
- Größe, Zentrierung, Farben und Navigationslogik bleiben unverändert.
- Keine Änderungen an Breakpoints, Verkauf, Artikeln, Presets, Persistenz oder Zahlung.

### Testplan V0.25.5

1. Desktop/Laptop: Zahnrad in eingeklappter Navigation auf klare Erkennbarkeit, Größe und Zentrierung prüfen.
2. Desktop: Hover-Aufklappen testen und Ausrichtung von Icon und Beschriftung prüfen.
3. Tablet Hoch-/Querformat: Zahnrad in der permanenten Symbolleiste prüfen.
4. Smartphone Hoch-/Querformat: bestehendes Burger-Menü öffnen und Zahnrad mit Beschriftung prüfen.
5. Aktiv-, Hover- und Inaktivzustand der Einstellungen kontrollieren.
6. Warenkorb- und Verlaufs-Icon als Regressionstest unverändert prüfen.
7. Nach Deployment Cache-/Versionswechsel auf V0.25.5 und Offline-Laden prüfen.

## V0.25.4 – SVG-Icons für die Navigation

- Die bisherigen Text-/Unicode-Symbole der Hauptnavigation wurden durch einheitliche Inline-SVG-Icons ersetzt.
- **Kasse:** Warenkorb-Symbol.
- **Verkäufe:** Verlaufspfeil mit Uhr.
- **Einstellungen:** Zahnrad.
- Die SVGs verwenden `currentColor` und übernehmen damit die bestehenden Aktiv-, Hover- und Inaktivfarben der Navigation.
- Desktop-, Tablet- und Smartphone-Navigationslogik sowie alle Breakpoints bleiben unverändert.
- Keine Änderungen an Verkauf, Artikeln, Presets, Persistenz oder Zahlung.

### Testplan V0.25.4

1. Desktop/Laptop: alle drei SVG-Icons in eingeklappter Navigation auf Größe, Zentrierung und Erkennbarkeit prüfen.
2. Desktop: Hover-Aufklappen testen; Icon und Beschriftung müssen sauber ausgerichtet bleiben.
3. Tablet Hoch-/Querformat: Symbolleiste ohne Burger-Menü prüfen; Icons müssen mittig und ausreichend groß dargestellt werden.
4. Smartphone Hoch-/Querformat: bestehendes Burger-Menü öffnen und alle drei SVG-Icons sowie Beschriftungen prüfen.
5. Aktive Ansicht nacheinander auf Kasse, Verkäufe und Einstellungen wechseln und Aktivzustand kontrollieren.
6. Tastaturfokus auf Desktop prüfen; Icons müssen mit der bestehenden Fokus-/Aufklapplogik funktionieren.
7. Nach Deployment Cache-/Versionswechsel auf V0.25.4 und Offline-Laden prüfen.

## V0.25.3 – Tablet-Navigation nur mit Symbolen

- Der zusaetzliche Burger-/Aufklappschalter in der Tablet-Seitenleiste wurde entfernt.
- Tablet von 761 bis 1180 px verwendet dauerhaft nur die kompakte Symbolnavigation.
- Die Navigationssymbole sind groesser und horizontal exakt in der Seitenleiste zentriert.
- Die Navigation klappt auf Tablet auch bei angeschlossener Maus bzw. Trackpad nicht mehr auf.
- Desktop-Verhalten aus V0.25.2 bleibt unveraendert.
- Smartphone bis 760 px behaelt das bestehende Burger-Menue.
- Keine Aenderungen an Verkauf, Artikeln, Presets, Persistenz oder Zahlung.

### Testplan V0.25.3

1. Tablet Hochformat (761–1180 px): pruefen, dass nur Logo und die drei Navigationssymbole sichtbar sind und kein zusaetzlicher Burger-Schalter erscheint.
2. Tablet Querformat: gleiche Pruefung sowie Dreispalten-Kassenlayout und verfuegbare Inhaltsbreite kontrollieren.
3. Alle drei Symbole antippen und sicherstellen, dass Kasse, Verkaeufe und Einstellungen korrekt wechseln.
4. Tablet mit Maus/Trackpad testen: Navigation darf beim Hover nicht aufklappen.
5. Ausrichtung und Groesse der Symbole optisch mit der Desktop-Leiste vergleichen.
6. Smartphone Hoch-/Querformat als Regressionstest: bestehendes Burger-Menue muss unveraendert funktionieren.
7. Desktop/Laptop ab 1181 px als Regressionstest: Hover-Aufklappen und Zentrierung aus V0.25.2 muessen erhalten bleiben.
8. Nach Deployment Cache-/Versionswechsel auf V0.25.3 und Offline-Laden pruefen.

## V0.25.2 – Desktop-Zentrierung

- Icons der eingeklappten Desktop-Navigation horizontal exakt zentriert.
- Kompakte Navigationsbuttons auf eine feste, mittig ausgerichtete Breite gesetzt.
- Beim Aufklappen nutzt die Navigation weiterhin die volle Buttonbreite mit Beschriftung.
- Der Seiteninhalt wird auf Desktop innerhalb der verbleibenden Flaeche horizontal mittig ausgerichtet.
- Gleichzeitig bleibt nahezu die gesamte durch das Einklappen gewonnene Breite fuer die eigentliche Seite nutzbar.
- Tablet- und Smartphone-Regeln wurden nicht veraendert.

### Zusaetzlicher Testplan V0.25.2

1. Desktop/Laptop ab 1181 px: eingeklappte Navigationsicons optisch und geometrisch mittig pruefen.
2. Navigation aufklappen und kontrollieren, dass Icons/Beschriftungen weiterhin sauber links ausgerichtet sind.
3. Kasse, Verkaeufe und Einstellungen jeweils aufrufen und pruefen, dass der Seiteninhalt horizontal mittig in der verbleibenden Flaeche sitzt.
4. Sehr breite Desktop-Fenster sowie kleinere Desktop-Fenster knapp oberhalb 1180 px pruefen.
5. Tablet Hoch-/Querformat und Smartphone Hoch-/Querformat als Regressionstest pruefen.
6. Nach Deployment Cache-/Versionswechsel auf V0.25.2 und normales Offline-Laden pruefen.

Einklappbare Navigation für Desktop und Tablet – PC-Darstellung nach Praxistest verfeinert.

## Thema

Die Hauptnavigation wird auf größeren Geräten platzsparend als schmale Icon-Leiste dargestellt und kann bei Bedarf vollständig aufgeklappt werden. Das bestehende Smartphone-Burger-Menü bleibt erhalten.

## Änderungen

- Desktop/Laptop mit Maus/Trackpad:
  - Navigation standardmäßig als schmalere Icon-Leiste.
  - Die Icons sind in der eingeklappten Leiste größer und näher am linken Rand angeordnet.
  - Die Inhaltsfläche nutzt auf PC die vollständig verfügbare Breite neben der eingeklappten Navigation.
  - Aufklappen der vollständigen Navigation bei Hover.
  - Nach Auswahl einer Ansicht klappt die Navigation sofort wieder ein und bleibt nicht wegen des Mausklick-Fokus geöffnet.
  - Tastaturfokus kann die Navigation weiterhin gezielt aufklappen.
- Tablet/Touch ab 761 px:
  - Navigation standardmäßig als schmale Icon-Leiste.
  - Neuer Burger-Button innerhalb der Leiste zum Auf- und Einklappen.
  - Nach Auswahl einer Ansicht wird die Navigation wieder eingeklappt.
- Smartphone bis 760 px:
  - Das bestehende Burger-Menü bleibt unverändert erhalten.
- Die Inhaltsfläche reserviert nur die Breite der schmalen Icon-Leiste; die aufgeklappte Navigation liegt darüber und verschiebt die Kassenansicht nicht.
- Die vorhandenen Ansichten **Kasse**, **Verkäufe** und **Einstellungen** sowie deren Wechselmechanismus bleiben unverändert.
- Navigationsbuttons besitzen zusätzlich explizite `aria-label`-Beschriftungen für die kompakte Icon-Darstellung.
- Keine Änderungen an Verkaufslogik, Artikeln, Presets, Persistenz oder Zahlungsablauf.

## Fehlerbehebungen

- PC: Die Navigation blieb nach einem Seitenwechsel durch den gesetzten Fokus geöffnet, bis an eine andere Stelle geklickt wurde. Sie klappt nun direkt nach der Auswahl wieder ein.
- PC: Die bisherige maximale Shell-Breite verhinderte auf großen Bildschirmen, dass der durch die schmale Navigation frei werdende Platz vollständig genutzt wurde.
- Keine fachfremden Fehlerbehebungen.

## Geänderte Dateien

- `index.html`
- `styles.css`
- `app.js`
- `service-worker.js`
- `version.json`
- `README.md`

## Neue Dateien

- Keine.

## Gelöschte Dateien

- Keine.

## Bekannte technische Schuld

Die bereits dokumentierten alten `V0.22.4.1`-Referenzen in der Service-Worker-Registrierung und im `CURRENT_VERSION`-Fallback wurden bewusst nicht verändert, da sie nicht zum Navigationsthema von V0.25 gehören.

## Testplan

### Desktop/Laptop

1. Anwendung mit Maus/Trackpad auf einem PC/Laptop ab 1181 px Breite öffnen.
2. Prüfen, dass die eingeklappte Icon-Leiste schmaler als zuvor ist und die Icons deutlich größer dargestellt werden.
3. Prüfen, dass die Inhaltsfläche den frei gewordenen Platz bis an die kompakte Navigation nutzt.
4. Mit dem Mauszeiger über die Navigation fahren und prüfen, dass sie vollständig aufklappt.
5. Kasse, Verkäufe oder Einstellungen auswählen und prüfen, dass die Navigation direkt nach dem Klick wieder einklappt, ohne einen zusätzlichen Klick außerhalb zu benötigen.
6. Mauszeiger vollständig aus der Navigation bewegen und erneut darüber fahren; die Navigation muss wieder normal aufklappen.
7. Mit der Tastatur in die Navigation fokussieren und prüfen, dass sie für Tastaturbedienung aufgeklappt werden kann.
8. Prüfen, dass die Inhaltsfläche beim Auf- und Einklappen nicht horizontal springt.
9. Kasse, Verkäufe und Einstellungen auf Darstellungsfehler durch die nun volle Desktop-Breite prüfen.

### Tablet Hochformat

1. Auf einem Touch-Tablet mit mehr als 760 px Breite öffnen.
2. Prüfen, dass die schmale Icon-Leiste sichtbar ist.
3. Burger-Button in der Leiste antippen.
4. Prüfen, dass die vollständige Navigation aufklappt.
5. Alle drei Ansichten öffnen und prüfen, dass die Navigation danach wieder einklappt.
6. Erneutes Öffnen und manuelles Einklappen über den Burger-Button prüfen.
7. Scrollen und Touch-Ziele auf Bedienbarkeit prüfen.

### Tablet Querformat

1. Bestehendes Dreispaltenlayout `Artikel | Warenkorb | Kasse` öffnen.
2. Prüfen, dass die schmale Navigation zusätzlichen Platz gegenüber der bisherigen breiten Sidebar freigibt.
3. Burger-Button öffnen und schließen.
4. Prüfen, dass die aufgeklappte Navigation die drei Kassenspalten nur überlagert und nicht neu berechnet oder verschiebt.
5. Artikel hinzufügen, Warenkorb bedienen, Schnellwahl/Tastenfeld verwenden und Verkauf abschließen.
6. Interne Scrollbereiche und Touch-Bedienung prüfen.

### Smartphone Hochformat

1. Prüfen, dass weiterhin die bestehende obere Mobile-Topbar mit Burger-Menü verwendet wird.
2. Menü öffnen und schließen.
3. Alle drei Ansichten wechseln.
4. Prüfen, dass keine neue seitliche Icon-Leiste sichtbar ist.

### Smartphone Querformat

1. Prüfen, dass der bestehende vertikale Kassenaufbau erhalten bleibt.
2. Burger-Menü öffnen und schließen.
3. Seiten-Scrollen sowie Artikel, Warenkorb und Bezahlung prüfen.
4. Prüfen, dass keine Tablet-/Desktop-Navigation eingeblendet wird.

### PWA / Offline / Update

1. Prüfen, dass **V0.25.3** als installierte Version angezeigt wird.
2. Nach Deployment prüfen, dass `styles.css?v=0.25.3` und `app.js?v=0.25.3` geladen werden.
3. Prüfen, dass der Service Worker den Cache `kassenapp-v0-25-3` verwendet.
4. Anwendung einmal online laden, danach offline neu öffnen und Navigation in allen verfügbaren Ansichten testen.
5. Bestehenden Update-Mechanismus kurz auf Regressionen prüfen.
6. Die bekannten alten `V0.22.4.1`-Referenzen bleiben bewusst unverändert und sind separat zu behandeln.
