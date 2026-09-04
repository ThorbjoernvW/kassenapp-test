# KassenApp V0.22 – Doppelungs-Audit

## Bereits in V0.22 bereinigt
- Handy-Querformat: 8 ältere Landscape-Media-Query-Blöcke aus V0.14/V0.18/V0.18.2/V0.18.3/V0.20/V0.21 entfernt bzw. durch einen einzigen autoritativen Landscape-Block ersetzt.
- JavaScript: keine doppelt deklarierten benannten Funktionen gefunden.
- JavaScript: keine identischen `getElementById(...).addEventListener(...)`-Paare gefunden.

## Noch vorhandene CSS-Überlagerungen
1. Einstellungen (`.settings-row`): Basisdefinition plus mehrere historische Responsive-Nachträge. Empfehlung: in einer späteren Refactoring-Version zu Basis + Tablet + Mobile zusammenziehen. Funktional aktuell nicht kritisch.
2. Kassenbereich (`.checkout-panel`, `.cart-list`, `.cash-grid`): Basis, Desktop/Tablet-Höhenregeln und V0.17-Tabletregeln überlagern sich teilweise. Empfehlung: nach Stabilisierung der Handy-Queransicht in Desktop / Tablet / Handy-Hoch / Handy-Quer klar trennen.
3. Navigation (`.app-sidebar`, `.mobile-topbar`, `.nav-btn`): mehrere Generationen der Sidebar/Burger-Entwicklung sind noch im Stylesheet vorhanden. Empfehlung: alten Sidebar-Code entfernen und nur aktuelle Desktop-, Tablet- und Mobile-Regeln behalten.
4. Produktgitter (`.product-grid`, `.product-btn`): mehrere Breakpoints ändern dieselben Eigenschaften. Empfehlung: erst gemeinsam mit der geparkten Kachel-/Bildüberarbeitung konsolidieren, damit diese Arbeit nicht doppelt erfolgt.
5. Verkaufsstatistik (`.top-product-grid`, `.sales-summary-grid`): mehrere Responsive-Breakpoints, größtenteils beabsichtigt. Empfehlung: nur semantisch zusammenfassen; geringe Priorität.
6. Globale Layoutregeln (`body`, `.shell`, `:root`): wiederholen sich durch Versions-Nachträge und Breakpoints. Empfehlung: bei einem späteren CSS-Cleanup Variablen und Viewport-Regeln zentralisieren.

## Empfohlene Reihenfolge
1. V0.22 auf echten Handys im Querformat testen.
2. Wenn stabil: Navigation + Kassenlayout als eigenes CSS-Refactoring bereinigen, ohne neue Funktionen.
3. Danach Einstellungen-Responsive-Regeln zusammenführen.
4. Produktkacheln erst zusammen mit der geplanten Bild-/Kacheloptik anfassen.
5. Verkaufsstatistik zuletzt, da dort die Mehrfachregeln aktuell überwiegend gewünschte Breakpoints sind.
