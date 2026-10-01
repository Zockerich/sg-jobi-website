# SG Johannesbrunn/Binabiburg – neue Website

Ziel: Die bestehende Seite (sg-johannesbrunn-binabiburg.de, Frameset/PHP) modern nachbauen, als Demo dem Verein vorstellen. **Alles, was die alte Seite kann, wird übernommen.**

## Stand

| Schritt | Inhalt | Status |
|---|---|---|
| 1 | Design + Startseite mit echten Inhalten | ✅ Entwurf 3 (01.10.2026) |
| 2 | Mannschaftsseiten (eine Vorlage für ~20 Teams, BFV-Widgets) | offen |
| 3 | Kalender-Demo (Google-Kalender pro Team, Abo), Berichte-, Video-Seite | offen |
| 4 | Kontakt, Service (Beitritt/Austritt, Formulare, Hallenplan, SR-Einteilung), Impressum, Mobil-Feinschliff | offen |

## Aufbau (Demo)

- `index.html`, `styles.css`, `app.js` – statische Startseite, keine Build-Tools nötig
- `data/startseite.js` – alle Inhalte als Daten (später: WordPress, Google-Kalender, BFV)
- `assets/wappen.svg` – **nachgezeichnetes Platzhalter-Wappen**, vor Livegang durch Original `sgwappen-neu2.png` ersetzen

Lokal ansehen: `index.html` im Browser öffnen.

## Design

- Entwurf 1 (modern, Marine/Gold, Anzeigetafel) wurde abgelehnt: „optisch ein Fehltritt“.
- Entwurf 2 orientiert sich am bisherigen Design:
  - roter Kopf `#A00000` mit Wappen, „Sportverein, gegründet 1998“, Social-Icons
  - Menü links im grauen Kasten `#E0E0E0` (Mannschaften/Archiv/Service aufklappbar), Vereinsshop
  - Mitte: Letzter Spieltag mit Videobildern, Team-Kurzlinks, Juniorenbericht, Spielplan im BFV-Stil, Mannschafts-Kacheln, Willkommenstext
  - rechts: **Termine direkt neben den Ergebnissen** mit Farbcode nach Ort (Binabiburg, Johannesbrunn, Auswärts, Halle, DJK Vereinsheim, Sonstiges), Schnelllinks, Veranstaltungen
  - Überschriften Rot `#C00000`, Seitenhintergrund Grau `#A0A0A0`
- Aus Entwurf 1 behalten (gefiel): Mannschafts-Kacheln SG1–3 + Junioren-Tags
- Handy: Kalender direkt nach den Ergebnissen
- Entwurf 3 (Entwurf 2 wirkte „zu altbacken“): modernisiert, Identität bleibt
  - volle Monitorbreite für Flächen (Kopf, Bänder, Fuß), Inhalt max. 1400 px
  - Menü oben statt Seitenspalte, Mannschaften als großes Aufklapp-Menü (Herren/Junioren)
  - Ergebnisse als große Bildkarten mit Spielstand, Kalender rechts daneben (Ortsfarben als Streifen + zarte Fläche)
  - Linkliste rechts → Service-Kacheln mit Symbolen
  - rotes Vereinsband (Mitglied werden, Shop, Kunstrasen), dunkler Fuß
  - Handy: Ergebnisse und Team-Kürzel wischbar, Kalender direkt danach

## Entscheidungen

- Kalender: Google-Kalender je Mannschaft, Trainer pflegen selbst (machen sie heute schon). Offen: Spiele automatisch vom BFV übernehmen oder von Hand?
- Berichte: WordPress, Trainer als „Autor“, Kategorie = Mannschaft
- Videos: langfristig alles auf YouTube-Kanal @JobiSG
  - Bestand (Analyse 01.10.2026): 891 Einträge seit 2012, 85 nur YouTube, 806 als MP4 auf binabiburg-web.de/sg-video-archive/ (davon ~61 auch auf YouTube) → ~745 per Skript hochladen
  - Jugendvideos ohne geklärte Einwilligung: „nicht gelistet“

## Bestand der alten Seite (zu übernehmen)

- Mannschaften: SG1–3, U19 A/A2, U17 B, U15 C/C2, U13 D/D2, U11 E1–E3, U9 F–F3, U7 Bambini, Frauen, AH
- Terminkalender (tipp3000.de), 7-Tage-Vorschau, Veranstaltungen, Hallenplan (PDF), Schiedsrichtereinteilung
- Stadionzeitung (PDF), Juniorenberichte, Archiv (Berichte Senioren/Junioren/Damen seit 1998)
- Videos (videolist.php), Bilder-Galerie (tipp3000.de), Forum, Umfragen, Lehrmaterial, Fortbildung
- Kontakt (Adressen.pdf), E-Mail-Formular, Fanshop, Vermietung Kunstrasen (Michael Danner)
- Service: Vereins-Beitritt/-Austritt, Formulare/Vorlagen, Spielerverwaltung, Admin
- Social: Instagram, Facebook, YouTube @JobiSG; Stammvereine SV Johannesbrunn, DJK Binabiburg

## Offene Fragen an Verein / Webmaster

- Webmaster früh einbinden (Server, Domain, Daten)
- Wer bezahlt/betreibt binabiburg-web.de, bleibt der Server?
- Einwilligungen für Fotos/Videos von Jugendspielern
- BFV-Spielpläne als Kalender-Abo möglich?
