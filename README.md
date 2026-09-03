# KassenApp V0.16

## Neu in V0.16

- **Haptische Rückmeldung** auf unterstützten Geräten:
  - kurzer Impuls beim Hinzufügen, Ändern oder Entfernen eines Artikels
  - deutlicheres Vibrationsmuster beim erfolgreichen Verkaufsabschluss
  - in den Einstellungen ein-/ausschaltbar
- **PWA-Installation**:
  - App-Manifest mit 192px- und 512px-App-Icon
  - Standalone-Darstellung auf unterstützten Geräten
  - Installationsbutton in den Einstellungen, wenn der Browser ihn anbietet
- **Offline-Start** bleibt erhalten und wurde für die PWA erweitert.
- **Update-Funktion**:
  - in den Einstellungen kann aktiv nach einer neuen Version gesucht werden
  - eine fertig geladene neue Version wird angezeigt und kann per Button aktiviert werden
  - danach lädt die App automatisch neu
- **Handy-/Tablet-Ausrichtung optimiert**:
  - Hochformat bleibt auf eine gut bedienbare Kassenansicht ausgelegt
  - im Querformat werden bei kleinen Displays Artikel und Verkaufsabschluss platzsparend nebeneinander dargestellt
- **Touch-Bedienung verbessert**:
  - größere Mindest-Touchflächen
  - keine klebenden Hover-Zustände auf Touchgeräten
  - unmittelbares optisches Feedback beim Tippen
- Der App-Name wird nun auch in der mobilen Kopfzeile aktualisiert.

## GitHub Pages

Alle Dateien und den Ordner `icons` in das Repository hochladen. Für Offline/PWA muss die Seite über HTTPS laufen; GitHub Pages erfüllt diese Voraussetzung.

## Hinweis zur Haptik

Die Vibrations-API wird nicht von allen Browsern unterstützt. Wenn sie fehlt, läuft die App ohne Einschränkung weiter.


## V0.16
- Haptisches Feedback fuer die Schnellwahl-Betraege und „Passend“.
- Schnellwahl-Tasten verlieren nach dem Tippen auf Touchgeraeten den grünen Zustand wieder.
- Service-Worker-Cache auf V0.16 angehoben.


## V0.16
- Haptisches Feedback für alle Tasten im Geld-Tastenfeld ergänzt.
- Rücktaste und „Passend“ im Tastenfeld geben ebenfalls Feedback und verlieren nach dem Tippen den Fokus.

## V0.17
- Tablet-Kasse als feste Zwei-Spalten-Ansicht ohne Scrollen der gesamten Kassenseite.
- Artikelbereich und Warenkorb scrollen bei Bedarf intern.
- Lange Artikelnamen im Warenkorb werden vollständig und mehrzeilig angezeigt.
- Auf Handy und Tablet öffnet ein Tap auf die Artikelkarte in Einstellungen direkt den Bearbeiten-Dialog.
- Größere Touch-Ziele und Safe-Area-Unterstützung für mobile/PWA-Nutzung.
- Service-Worker-Cache auf V0.17 aktualisiert.

## V0.18
- Automatische Update-Prüfung beim Online-Start der App.
- Erneute Update-Prüfung beim Zurückkehren in die App bzw. wenn das Gerät wieder online kommt (mit kurzer Drosselung).
- Service-Worker-Registrierung umgeht den HTTP-Cache bei Update-Prüfungen; vorhandene lokale Kassen-, Artikel- und Verkaufsdaten bleiben unverändert.
- Handy-Querformat als kompakte Zwei-Spalten-Kasse (ca. 60/40) ohne Scrollen der gesamten Seite.
- Mobile Kopfzeile wird in der Kassen-Queransicht ausgeblendet; der Burger bleibt als schwebender 44px-Menübutton oben rechts erreichbar.
- Artikelbereich und Warenkorb scrollen bei Bedarf jeweils intern.
- Drei Artikelspalten im Handy-Querformat für bessere Flächennutzung.
- Tastenfeld im Querformat auf vier Spalten verdichtet, damit Rückgeld und Verkaufsabschluss sichtbar bleiben.
- Safe Areas werden auch in der Queransicht berücksichtigt.
- Service-Worker-Cache auf V0.18 aktualisiert.
## V0.18.1 Hotfix

- Der Burger-Button funktioniert jetzt als Umschalter: Ist das Menü geöffnet, schließt ein erneuter Tipp auf den Burger das Menü wieder.
- Der Hotfix zählt nicht als eine der geplanten Funktionsverbesserungen der nächsten Version.

