# KassenApp V0.22

## Änderungen in V0.22

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

V0.22 basiert auf V0.20. Lokale Daten bleiben über den bestehenden localStorage-Schlüssel kompatibel.

Hinweis: Um von einer älteren Version erstmals auf diese neue Update-Logik zu wechseln, kann einmalig ein manuelles Neuladen bzw. „Nach Update suchen“ nötig sein. Ab V0.22 übernimmt die App die Versionsprüfung selbst.


## V0.22
- Handy-Queransicht technisch bereinigt: alte, überlappende Landscape-Media-Queries entfernt.
- Eine einzige autoritative Landscape-Regel nutzt die volle Viewport-Höhe.
- Rechte Kassenspalte als festes Grid: Warenkorb flexibel scrollbar, Zahlung und Abschluss bleiben groß erreichbar.
- Artikelkachel-/Bildoptik bewusst unverändert; bleibt auf dem Parkplatz.


## V0.22.0.1 – Hotfix Versionserkennung
- Versionsvergleich normalisiert `V`-Präfixe und vergleicht numerische Versionssegmente.
- Update-Hinweis erscheint nur, wenn die Server-Version wirklich neuer ist.
- Einstellungen zeigen installierte Version, verfügbare Version und Status.
- Service-Worker-App-Shell auf die aktuelle Unterversion synchronisiert.
