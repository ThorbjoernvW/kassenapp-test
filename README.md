# KassenApp V0.25.2

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

1. Prüfen, dass **V0.25.2** als installierte Version angezeigt wird.
2. Nach Deployment prüfen, dass `styles.css?v=0.25.2` und `app.js?v=0.25.2` geladen werden.
3. Prüfen, dass der Service Worker den Cache `kassenapp-v0-25-2` verwendet.
4. Anwendung einmal online laden, danach offline neu öffnen und Navigation in allen verfügbaren Ansichten testen.
5. Bestehenden Update-Mechanismus kurz auf Regressionen prüfen.
6. Die bekannten alten `V0.22.4.1`-Referenzen bleiben bewusst unverändert und sind separat zu behandeln.
