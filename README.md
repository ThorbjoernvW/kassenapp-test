# KassenApp V0.22.3.4

## Thema
Artikelfotos vollständig entfernt.

Die Foto-Idee wurde verworfen. Diese Version entfernt die gesamte Artikelfoto-Funktion aus der App und kehrt bei den Artikelkacheln zur Darstellung mit Artikelfarbe, optionalem Symbol, Artikelname und Preis zurück.

## Entfernt
- Upload und Speicherung von Artikelbildern
- Bildkomprimierung im Browser
- Bildvorschau im Artikel-Dialog
- horizontale/vertikale Bildposition
- Zoom und Touch-Gesten für Bilder
- Bilddarstellung auf Kassenkacheln
- Bilddarstellung in Einstellungen und Top-Artikel-Statistik
- zugehörige CSS-Regeln und Event-Handler

Beim Laden bestehender Daten und beim Import alter Sicherungen werden die früheren Bildfelder verworfen. Dadurch werden alte Base64-Bilder nach dem nächsten Speichern nicht weiter im App-Zustand geführt.

## Testplan
1. Einstellungen öffnen und einen Artikel bearbeiten: Es darf keine Bild-Upload- oder Bildausschnitt-Funktion mehr geben.
2. Artikel mit Symbol und Artikel ohne Symbol prüfen. Beide Kacheltypen müssen normal dargestellt und antippbar sein.
3. Einen bestehenden Artikel bearbeiten und speichern. Name, Preis, Farbe, Symbol und Aktiv-Status müssen funktionieren.
4. Falls auf dem Gerät vorher Artikelbilder gespeichert waren: App neu laden. Die Kasse darf keine Bilder mehr anzeigen.
5. Alte JSON-Sicherung mit Bilddaten importieren. Der Import soll funktionieren, die Bilder aber ignorieren.
6. Verkäufe und Top-Artikel kurz prüfen; dort dürfen keine Artikelbilder mehr erscheinen.
