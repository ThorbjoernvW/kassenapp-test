# KassenApp V0.22.3.1

Themenblock V0.22: **Optische Überarbeitung**  
Unterthema V0.22.3: **Artikelbilder**  
Hotfix V0.22.3.1: **Installierte Versionsanzeige**

## Behoben

- Unter **Einstellungen → Handy & App** wird nach einem Update jetzt zuverlässig die tatsächlich geladene App-Version angezeigt.
- Die Versionsanzeige und `app.js` beziehen ihre installierte Versionsnummer jetzt aus derselben zentralen Versionsangabe im HTML. Dadurch können diese beiden Anzeigen nicht mehr versehentlich unterschiedliche Versionsstände verwenden.
- `version.json` und der Service-Worker-Cache wurden auf V0.22.3.1 angehoben.

## Ursache

In V0.22.3 war die sichtbare Version im HTML bereits V0.22.3, während `app.js` intern noch `V0.22.2` enthielt. Beim Rendern der Einstellungen hat `app.js` deshalb die korrekte Anzeige wieder mit der alten Versionsnummer überschrieben.

## Bewusst nicht geändert

- Größe/Form der farbigen Textfläche auf Artikelbildern.
- Auswahl des sichtbaren Bildausschnitts.
- Sonstige Artikelkachel-Optik.

Diese Punkte bleiben für die weitere Arbeit an V0.22.3 vorgesehen.

## Testplan

1. V0.22.3.1 auf `develop` bereitstellen und die Testseite aktualisieren.
2. **Einstellungen → Handy & App** öffnen.
3. Prüfen: **Installierte Version: V0.22.3.1**.
4. Prüfen: **Verfügbare Version: V0.22.3.1** (sobald die Serverprüfung abgeschlossen ist).
5. Prüfen: Status **App ist aktuell ✓**.
6. Seite vollständig schließen und erneut öffnen; die installierte Version muss weiterhin V0.22.3.1 anzeigen.
7. Optional im PWA-Modus denselben Test wiederholen.

## Geänderte Dateien

- `index.html`
- `app.js`
- `version.json`
- `service-worker.js`
- `README.md`
