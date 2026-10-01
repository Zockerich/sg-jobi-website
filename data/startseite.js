// Inhalte der Startseite – Stand 01.10.2026, übernommen von sg-johannesbrunn-binabiburg.de
// Später kommen diese Daten aus WordPress (Berichte), Google-Kalender (Termine) und BFV (Ergebnisse).
window.SG_DATA = {
  ergebnisse: [
    { team: "SG1", liga: "KL Isar/Rott 26/27", datum: "27.09.26", titel: "SG1 - SV DJK Wittibreut 4:1", video: "https://www.youtube.com/watch?v=C0FATP_dlGQ", thumb: "https://i.ytimg.com/vi/C0FATP_dlGQ/hqdefault.jpg" },
    { team: "SG2", liga: "KK Pfarrkirchen 26/27", datum: "27.09.26", titel: "SG2 - SV Malgersdorf 0:2", video: "https://www.youtube.com/watch?v=Nr09E9v9_z0", thumb: "https://i.ytimg.com/vi/Nr09E9v9_z0/hqdefault.jpg" },
    { team: "SG3", liga: "KK Pfarrkirchen Res. 26/27", datum: "27.09.26", titel: "SG3 - SV Malgersdorf II 0:0", video: "https://www.youtube.com/watch?v=5rjcYCJGQOs", thumb: "https://i.ytimg.com/vi/5rjcYCJGQOs/hqdefault.jpg" }
  ],

  bericht: {
    link: "Juniorenberichte (bis Mo., 28.09.)",
    titel: "Junioren Wochenvorschau",
    text: "Am Donnerstag treten die C-Junioren zum Kreisklassenspiel beim Nachbarn FC Bonbruck/Bodenkirchen an und am Freitag geht es für die B-Junioren in der Kreisliga Isar/Rott zum DJK SV Altdorf. Am Samstag gibt es dann gleich vier Begegnungen: Die E1 fährt zur E3 des ETSV 09 Landshut und die E2 erwartet den FC Eberspoint; die C2-Junioren spielen zu Hause gegen den FC Velden-Eberspoint II und die A-Junioren haben ein Heimspiel gegen den SV Neufraunhofen."
  },

  // Farbcode nach Ort wie im bisherigen SG-Kalender
  orte: {
    binabiburg:    { name: "Binabiburg",      farbe: "#FAA080" },
    johannesbrunn: { name: "Johannesbrunn",   farbe: "#ADD8E6" },
    auswaerts:     { name: "Auswärts",        farbe: "#F0E68C" },
    halle:         { name: "Halle",           farbe: "#A2EEA2" },
    vereinsheim:   { name: "DJK Vereinsheim", farbe: "#FFE0FF" },
    sonstiges:     { name: "Sonstiges",       farbe: "#C0C0C0" }
  },

  termine: [
    { tag: "Heute Do, 01.10.2026", eintraege: [
      { zeit: "17:30", text: "C-Jugend Training", ort: "johannesbrunn" },
      { zeit: "17:30", text: "FC Eberspoint - F-Jugend", ort: "auswaerts" },
      { zeit: "17:30", text: "Training E-Jugend", ort: "binabiburg" },
      { zeit: "19:00", text: "A-Jugend Training", ort: "johannesbrunn" }
    ]},
    { tag: "Morgen Fr, 02.10.2026", eintraege: [
      { zeit: "16:00", text: "SEMPT-Training G4", ort: "johannesbrunn" },
      { zeit: "17:15", text: "SEMPT-Training G3", ort: "johannesbrunn" },
      { zeit: "19:00", text: "Training SG1/2/3", ort: "binabiburg" },
      { zeit: "19:00", text: "B-Jugend DJK SV Altdorf - SG Jobi", ort: "auswaerts" },
      { zeit: "19:00", text: "C1 Jugend - FC BoBo", ort: "auswaerts" }
    ]}
  ],

  veranstaltungen: [
    { datum: "Fr, 23.10.2026", zeit: "19:30", text: "Wattturnier DJK", ort: "vereinsheim" },
    { datum: "Sa, 24.10.2026", zeit: "19:00", text: "Weinfest DJK", ort: "vereinsheim" }
  ],

  // Kurzlinks unter den Ergebnissen (wie bisher)
  teamKurz: ["SG1", "SG2", "SG3", "A", "B", "C", "C2", "D", "E1", "E2", "F", "G", "AH"],

  mannschaften: {
    Herren: [
      { kurz: "SG1", name: "1. Mannschaft", liga: "Kreisliga Isar/Rott", trainer: "Thomas Ostermeier" },
      { kurz: "SG2", name: "2. Mannschaft", liga: "Kreisklasse Pfarrkirchen", trainer: "Werner Wimmer, Andreas Gassenhuber" },
      { kurz: "SG3", name: "3. Mannschaft", liga: "Kreisklasse Pfarrkirchen Res.", trainer: "Werner Wimmer, Andreas Gassenhuber" }
    ],
    Junioren: ["U19 A", "U19 A2", "U17 B", "U15 C", "U15 C2", "U13 D", "U13 D2", "U11 E1", "U11 E2", "U11 E3", "U9 F", "U9 F2", "U9 F3", "U7 Bambini"],
    Weitere: ["Frauen", "Alte Herren"]
  },

  menue: {
    Mannschaften: ["1. Mannschaft", "2. Mannschaft", "3. Mannschaft", "U19 (A-Jgd)", "U19 (A2-Jgd)", "U17 (B-Jgd)", "U15 (C-Jgd)", "U15 (C2-Jgd)", "U13 (D-Jgd)", "U13 (D2-Jgd)", "U11 (E1-Jgd)", "U11 (E2-Jgd)", "U11 (E3-Jgd)", "U09 (F-Jgd)", "U09 (F2-Jgd)", "U09 (F3-Jgd)", "U07 (G / Bambini)", "Frauen", "AH"],
    Archiv: ["Berichte", "Senioren", "Junioren und Damen", "Terminkalender"],
    Service: ["Vereins-Beitritt", "Vereins-Austritt", "Formulare / Vorlagen", "Lehrmaterial", "Fortbildung", "Kalender Hinweise", "Spielerverwaltung", "Stadionzeitung Update", "Hinweise", "Admin"]
  },

  schnelllinks: [
    ["SG Forum", "Schiedsrichtereinteilung", "Vermietung Kunstrasenplatz"],
    ["Hochladen", "Lehrmaterial", "Umfragen", "Videos (830)", "Bilder", "7 Tage Vorschau", "Hallenplan", "BFV-Vorschau", "BFV-Links"]
  ],

  // Spiele am Wochenende (aus der Wochenvorschau)
  spiele: [
    { datum: "Sa. 3. Okt. 26", klasse: "A-Junioren", heim: "SG Johannesbr.-Binab.", gast: "SV Neufraunhofen" },
    { datum: "Sa. 3. Okt. 26", klasse: "C-Junioren", heim: "SG Johannesbr.-Binab. II", gast: "FC Velden-Eberspoint II" },
    { datum: "Sa. 3. Okt. 26", klasse: "E-Junioren", heim: "SG Johannesbr.-Binab. II", gast: "FC Eberspoint" },
    { datum: "Sa. 3. Okt. 26", klasse: "E-Junioren", heim: "ETSV 09 Landshut III", gast: "SG Johannesbr.-Binab." }
  ]
};
