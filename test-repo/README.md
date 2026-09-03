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
