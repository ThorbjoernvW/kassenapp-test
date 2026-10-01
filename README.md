# KassenApp V0.25

Einklappbare Navigation für Desktop und Tablet.

## Thema

Die Hauptnavigation wird auf größeren Geräten platzsparend als schmale Icon-Leiste dargestellt und kann bei Bedarf vollständig aufgeklappt werden. Das bestehende Smartphone-Burger-Menü bleibt erhalten.

## Änderungen

- Desktop/Laptop ab 761 px mit Maus/Trackpad:
  - Navigation standardmäßig als schmale Icon-Leiste.
  - Aufklappen der vollständigen Navigation bei Hover.
  - Aufklappen ebenfalls bei Tastaturfokus innerhalb der Navigation.
  - Beim Verlassen wird die Navigation wieder zur Icon-Leiste.
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

- Keine fachfremden Fehlerbehebungen in dieser Version.

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

1. Anwendung mit Maus/Trackpad bei mindestens 761 px Breite öffnen.
2. Prüfen, dass links zunächst nur die schmale Icon-Leiste sichtbar ist.
3. Mit dem Mauszeiger über die Navigation fahren und prüfen, dass sie vollständig aufklappt.
4. Prüfen, dass App-Name, Navigationsbeschriftungen und Statusbereich beim Aufklappen erscheinen.
5. Mauszeiger aus der Navigation bewegen und prüfen, dass sie wieder einklappt.
6. Kasse, Verkäufe und Einstellungen über die Navigation öffnen.
7. Mit der Tastatur in die Navigation fokussieren und prüfen, dass sie für Tastaturbedienung aufgeklappt bleibt.
8. Prüfen, dass die Inhaltsfläche beim Auf- und Einklappen nicht horizontal springt.

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

1. Prüfen, dass **V0.25** als installierte Version angezeigt wird.
2. Nach Deployment prüfen, dass `styles.css?v=0.25` und `app.js?v=0.25` geladen werden.
3. Prüfen, dass der Service Worker den Cache `kassenapp-v0-25` verwendet.
4. Anwendung einmal online laden, danach offline neu öffnen und Navigation in allen verfügbaren Ansichten testen.
5. Bestehenden Update-Mechanismus kurz auf Regressionen prüfen.
6. Die bekannten alten `V0.22.4.1`-Referenzen bleiben bewusst unverändert und sind separat zu behandeln.
