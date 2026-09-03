# KassenApp V0.21

## Änderungen in V0.21

1. **Handy-Queransicht überarbeitet**
   - Warenkorb erhält wieder eine komfortable Mindesthöhe.
   - Bezahlbereich und Bedienelemente werden nicht mehr extrem zusammengestaucht.
   - Die rechte Kassenspalte scrollt bei sehr geringer Displayhöhe intern; die komplette Seite bleibt fix.
   - „Verkauf abschließen“ bleibt als große, sticky Schaltfläche am unteren Rand der Kassenspalte erreichbar.

2. **Automatische Update-Erkennung robuster gemacht**
   - Neue `version.json`, die bei Online-Start ohne Cache geprüft wird.
   - Sichtbarer Update-Hinweis in der App, nicht nur in den Einstellungen.
   - Versionsgebundene CSS-/JS-Dateien verhindern, dass alte Assets aus einem vorherigen Cache weiterverwendet werden.
   - Service Worker und Navigation prüfen Aktualisierungen ohne HTTP-Cache.

V0.21 basiert auf V0.20. Lokale Daten bleiben über den bestehenden localStorage-Schlüssel kompatibel.

Hinweis: Um von einer älteren Version erstmals auf diese neue Update-Logik zu wechseln, kann einmalig ein manuelles Neuladen bzw. „Nach Update suchen“ nötig sein. Ab V0.21 übernimmt die App die Versionsprüfung selbst.
