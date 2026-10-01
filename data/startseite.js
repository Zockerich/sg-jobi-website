// Inhalte der Startseite – Stand 01.10.2026, übernommen von sg-johannesbrunn-binabiburg.de
// Später kommen diese Daten aus WordPress (Berichte), Google-Kalender (Termine) und BFV (Ergebnisse).
window.SG_DATA = {
  spieltag: "So, 27.09.2026",
  ergebnisse: [
    { team: "SG1", liga: "Kreisliga Isar/Rott", gegner: "SV DJK Wittibreut", heim: true, tore: [4, 1], video: "https://www.youtube.com/watch?v=C0FATP_dlGQ", thumb: "https://i.ytimg.com/vi/C0FATP_dlGQ/hqdefault.jpg" },
    { team: "SG2", liga: "Kreisklasse Pfarrkirchen", gegner: "SV Malgersdorf", heim: true, tore: [0, 2], video: "https://www.youtube.com/watch?v=Nr09E9v9_z0", thumb: "https://i.ytimg.com/vi/Nr09E9v9_z0/hqdefault.jpg" },
    { team: "SG3", liga: "Kreisklasse Pfarrkirchen Res.", gegner: "SV Malgersdorf II", heim: true, tore: [0, 0], video: "https://www.youtube.com/watch?v=5rjcYCJGQOs", thumb: "https://i.ytimg.com/vi/5rjcYCJGQOs/hqdefault.jpg" }
  ],
  // Termine aus dem SG-Kalender. typ: training | spiel | event
  termine: [
    { tag: "Heute, Do 01.10.", zeit: "17:30", titel: "Training", team: "C-Jugend", typ: "training" },
    { tag: "Heute, Do 01.10.", zeit: "17:30", titel: "FC Eberspoint – F-Jugend", team: "F-Jugend", typ: "spiel" },
    { tag: "Heute, Do 01.10.", zeit: "17:30", titel: "Training", team: "E-Jugend", typ: "training" },
    { tag: "Heute, Do 01.10.", zeit: "19:00", titel: "Training", team: "A-Jugend", typ: "training" },
    { tag: "Morgen, Fr 02.10.", zeit: "16:00", titel: "SEMPT-Training G4", team: "G-Jugend", typ: "training" },
    { tag: "Morgen, Fr 02.10.", zeit: "17:15", titel: "SEMPT-Training G3", team: "G-Jugend", typ: "training" },
    { tag: "Morgen, Fr 02.10.", zeit: "19:00", titel: "Training SG1/2/3", team: "Herren", typ: "training" },
    { tag: "Morgen, Fr 02.10.", zeit: "19:00", titel: "DJK SV Altdorf – SG Jobi", team: "B-Jugend", typ: "spiel" },
    { tag: "Morgen, Fr 02.10.", zeit: "19:00", titel: "SG Jobi – FC Bonbruck/Bodenkirchen", team: "C-Jugend", typ: "spiel" }
  ],
  wochenende: [
    { team: "A-Jugend", text: "SG Jobi – SV Neufraunhofen", ort: "Heimspiel" },
    { team: "C2-Jugend", text: "SG Jobi – FC Velden-Eberspoint II", ort: "Heimspiel" },
    { team: "E2-Jugend", text: "SG Jobi – FC Eberspoint", ort: "Heimspiel" },
    { team: "E1-Jugend", text: "ETSV 09 Landshut III – SG Jobi", ort: "Auswärts" }
  ],
  bericht: {
    titel: "Junioren-Wochenvorschau",
    datum: "28.09.2026",
    team: "Junioren",
    text: "Am Donnerstag treten die C-Junioren zum Kreisklassenspiel beim Nachbarn FC Bonbruck/Bodenkirchen an und am Freitag geht es für die B-Junioren in der Kreisliga Isar/Rott zum DJK SV Altdorf. Am Samstag gibt es dann gleich vier Begegnungen: Die E1 fährt zur E3 des ETSV 09 Landshut und die E2 erwartet den FC Eberspoint; die C2-Junioren spielen zu Hause gegen den FC Velden-Eberspoint II und die A-Junioren haben ein Heimspiel gegen den SV Neufraunhofen."
  },
  veranstaltungen: [
    { datum: "23.10.", wochentag: "Fr", zeit: "19:30", titel: "Wattturnier", ort: "DJK Vereinsheim" },
    { datum: "24.10.", wochentag: "Sa", zeit: "19:00", titel: "Weinfest", ort: "DJK Binabiburg" }
  ],
  mannschaften: {
    Herren: [
      { kurz: "SG1", name: "1. Mannschaft", liga: "Kreisliga Isar/Rott", trainer: "Thomas Ostermeier" },
      { kurz: "SG2", name: "2. Mannschaft", liga: "Kreisklasse Pfarrkirchen", trainer: "Werner Wimmer, Andreas Gassenhuber" },
      { kurz: "SG3", name: "3. Mannschaft", liga: "Kreisklasse Pfarrkirchen Res.", trainer: "Werner Wimmer, Andreas Gassenhuber" }
    ],
    Junioren: ["U19 A", "U19 A2", "U17 B", "U15 C", "U15 C2", "U13 D", "U13 D2", "U11 E1", "U11 E2", "U11 E3", "U9 F", "U9 F2", "U9 F3", "U7 Bambini"],
    Weitere: ["Frauen", "Alte Herren"]
  }
};
