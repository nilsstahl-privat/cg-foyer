const SEED_TASKS = [
  // Vorbereitung
  { id:"prep-1", dayNumber:0, date:"2026-07-02", dayLabel:"Vorbereitung", daySubtitle:"bis Do., 2. Juli", title:"Schränke & Deko leer- bzw. wegräumen", estimatedHours:2, neededPersons:4, skillLevel:"jeder", tools:[], done:false, notes:"" },

  // Tag 1 – Do. 02. Juli (Woche 1, Teilwoche)
  { id:"t1-1", dayNumber:1, date:"2026-07-02", dayLabel:"Tag 1 – Donnerstag", daySubtitle:"02. Juli 2026", title:"Deckenlampen entfernen", estimatedHours:0.5, neededPersons:2, skillLevel:"handwerklich", tools:["Schraubendreher","Wagoklemmen","Leiter"], done:false, notes:"" },
  { id:"t1-2", dayNumber:1, date:"2026-07-02", dayLabel:"Tag 1 – Donnerstag", daySubtitle:"02. Juli 2026", title:"Holzdecke entfernen", estimatedHours:4, neededPersons:4, skillLevel:"fachkenntnisse", tools:["Brecheisen","Kreissäge","Akkuschrauber","Hammer","Meisel"], done:false, notes:"" },
  { id:"t1-3", dayNumber:1, date:"2026-07-02", dayLabel:"Tag 1 – Donnerstag", daySubtitle:"02. Juli 2026", title:"Garderobe & Magnetwand entfernen", estimatedHours:1, neededPersons:2, skillLevel:"handwerklich", tools:["Akkuschrauber"], done:false, notes:"" },

  // Tag 2 – Mo. 06. Juli (Woche 2)
  { id:"t2-1", dayNumber:2, date:"2026-07-06", dayLabel:"Tag 2 – Montag", daySubtitle:"06. Juli 2026", title:"Türen aushängen", estimatedHours:1, neededPersons:2, skillLevel:"handwerklich", tools:[], done:false, notes:"" },
  { id:"t2-2", dayNumber:2, date:"2026-07-06", dayLabel:"Tag 2 – Montag", daySubtitle:"06. Juli 2026", title:"Türgarnituren entfernen", estimatedHours:1, neededPersons:1, skillLevel:"handwerklich", tools:[], done:false, notes:"" },
  { id:"t2-3", dayNumber:2, date:"2026-07-06", dayLabel:"Tag 2 – Montag", daySubtitle:"06. Juli 2026", title:"Sideboard entfernen", estimatedHours:1, neededPersons:2, skillLevel:"jeder", tools:[], done:false, notes:"" },
  { id:"t2-4", dayNumber:2, date:"2026-07-06", dayLabel:"Tag 2 – Montag", daySubtitle:"06. Juli 2026", title:"Folientüren anbringen", estimatedHours:2, neededPersons:2, skillLevel:"handwerklich", tools:[], done:false, notes:"" },
  { id:"t2-5", dayNumber:2, date:"2026-07-06", dayLabel:"Tag 2 – Montag", daySubtitle:"06. Juli 2026", title:"Boden abkleben", estimatedHours:2, neededPersons:1, skillLevel:"jeder", tools:["Folie","Klebeband"], done:false, notes:"" },
  { id:"t2-6", dayNumber:2, date:"2026-07-06", dayLabel:"Tag 2 – Montag", daySubtitle:"06. Juli 2026", title:"Schlitze anzeichnen", estimatedHours:1, neededPersons:1, skillLevel:"handwerklich", tools:[], done:false, notes:"" },
  { id:"t2-7", dayNumber:2, date:"2026-07-06", dayLabel:"Tag 2 – Montag", daySubtitle:"06. Juli 2026", title:"Schlitze fräsen", estimatedHours:3, neededPersons:1, skillLevel:"fachkenntnisse", tools:["Schlitzfräse","Schaufel","Besen","Absaugeinrichtung","Industriestaubsauger"], done:false, notes:"" },
  { id:"t2-8", dayNumber:2, date:"2026-07-06", dayLabel:"Tag 2 – Montag", daySubtitle:"06. Juli 2026", title:"Kabel legen", estimatedHours:3, neededPersons:3, skillLevel:"fachkenntnisse", tools:[], done:false, notes:"" },

  // Tag 3 – Di. 07. Juli
  { id:"t3-1", dayNumber:3, date:"2026-07-07", dayLabel:"Tag 3 – Dienstag", daySubtitle:"07. Juli 2026", title:"Kabel legen", estimatedHours:3, neededPersons:3, skillLevel:"fachkenntnisse", tools:[], done:false, notes:"" },
  { id:"t3-2", dayNumber:3, date:"2026-07-07", dayLabel:"Tag 3 – Dienstag", daySubtitle:"07. Juli 2026", title:"Durchführungen bohren", estimatedHours:2, neededPersons:1, skillLevel:"fachkenntnisse", tools:["Schlagbohrer","Dosenbohrer"], done:false, notes:"" },
  { id:"t3-3", dayNumber:3, date:"2026-07-07", dayLabel:"Tag 3 – Dienstag", daySubtitle:"07. Juli 2026", title:"Türen beplanken", estimatedHours:6, neededPersons:2, skillLevel:"handwerklich", tools:["Leimzwingen","Spachtel"], done:false, notes:"" },
  { id:"t3-4", dayNumber:3, date:"2026-07-07", dayLabel:"Tag 3 – Dienstag", daySubtitle:"07. Juli 2026", title:"Alte Dosen & Schalter entfernen", estimatedHours:1, neededPersons:1, skillLevel:"handwerklich", tools:["Schraubendreher"], done:false, notes:"" },
  { id:"t3-5", dayNumber:3, date:"2026-07-07", dayLabel:"Tag 3 – Dienstag", daySubtitle:"07. Juli 2026", title:"Unterkonstruktion vervollständigen", estimatedHours:4, neededPersons:3, skillLevel:"fachkenntnisse", tools:["Akkuschrauber","Kappsäge"], done:false, notes:"" },

  // Tag 4 – Mi. 08. Juli
  { id:"t4-1", dayNumber:4, date:"2026-07-08", dayLabel:"Tag 4 – Mittwoch", daySubtitle:"08. Juli 2026", title:"Elektrikarbeiten", estimatedHours:3, neededPersons:3, skillLevel:"fachkenntnisse", tools:[], done:false, notes:"" },
  { id:"t4-2", dayNumber:4, date:"2026-07-08", dayLabel:"Tag 4 – Mittwoch", daySubtitle:"08. Juli 2026", title:"Gipskarton beplanken", estimatedHours:4, neededPersons:4, skillLevel:"handwerklich", tools:["Spachtel","Traufel"], done:false, notes:"" },
  { id:"t4-3", dayNumber:4, date:"2026-07-08", dayLabel:"Tag 4 – Mittwoch", daySubtitle:"08. Juli 2026", title:"Schlitze verschließen", estimatedHours:2, neededPersons:1, skillLevel:"handwerklich", tools:["Spachtel","Traufel"], done:false, notes:"" },
  { id:"t4-4", dayNumber:4, date:"2026-07-08", dayLabel:"Tag 4 – Mittwoch", daySubtitle:"08. Juli 2026", title:"Wände verputzen", estimatedHours:4, neededPersons:4, skillLevel:"handwerklich", tools:["Spachtel","Traufel","Setzlatten"], done:false, notes:"" },

  // Tag 5 – Do. 09. Juli
  { id:"t5-1", dayNumber:5, date:"2026-07-09", dayLabel:"Tag 5 – Donnerstag", daySubtitle:"09. Juli 2026", title:"Gipskarton beplanken", estimatedHours:2, neededPersons:2, skillLevel:"handwerklich", tools:["Plattenheber","Akkuschrauber"], done:false, notes:"" },
  { id:"t5-2", dayNumber:5, date:"2026-07-09", dayLabel:"Tag 5 – Donnerstag", daySubtitle:"09. Juli 2026", title:"Gipskarton verspachteln", estimatedHours:4, neededPersons:4, skillLevel:"handwerklich", tools:["Spachtel","Traufel"], done:false, notes:"" },
  { id:"t5-3", dayNumber:5, date:"2026-07-09", dayLabel:"Tag 5 – Donnerstag", daySubtitle:"09. Juli 2026", title:"Wände verputzen", estimatedHours:4, neededPersons:4, skillLevel:"handwerklich", tools:["Spachtel","Traufel","Setzlatten"], done:false, notes:"" },

  // Tag 6 – Fr. 10. Juli
  { id:"t6-1", dayNumber:6, date:"2026-07-10", dayLabel:"Tag 6 – Freitag", daySubtitle:"10. Juli 2026", title:"Gipskarton schleifen", estimatedHours:5, neededPersons:3, skillLevel:"handwerklich", tools:["Schleifgiraffe","Handschleifer","Schmirgelpapier","Industriestaubsauger"], done:false, notes:"" },
  { id:"t6-2", dayNumber:6, date:"2026-07-10", dayLabel:"Tag 6 – Freitag", daySubtitle:"10. Juli 2026", title:"Gipskarton verspachteln", estimatedHours:3, neededPersons:4, skillLevel:"handwerklich", tools:["Spachtel","Traufel","Setzlatten"], done:false, notes:"" },
  { id:"t6-3", dayNumber:6, date:"2026-07-10", dayLabel:"Tag 6 – Freitag", daySubtitle:"10. Juli 2026", title:"Wände verputzen", estimatedHours:4, neededPersons:4, skillLevel:"handwerklich", tools:["Spachtel","Traufel","Setzlatten"], done:false, notes:"" },
  { id:"t6-4", dayNumber:6, date:"2026-07-10", dayLabel:"Tag 6 – Freitag", daySubtitle:"10. Juli 2026", title:"Wände schleifen", estimatedHours:4, neededPersons:4, skillLevel:"handwerklich", tools:["Schleifgiraffe","Handschleifer","Schmirgelpapier","Industriestaubsauger"], done:false, notes:"" },

  // Tag 7 – Sa. 11. Juli
  { id:"t7-1", dayNumber:7, date:"2026-07-11", dayLabel:"Tag 7 – Samstag", daySubtitle:"11. Juli 2026", title:"Wände schleifen", estimatedHours:4, neededPersons:4, skillLevel:"handwerklich", tools:["Schleifgiraffe","Handschleifer","Schmirgelpapier","Industriestaubsauger"], done:false, notes:"" },
  { id:"t7-2", dayNumber:7, date:"2026-07-11", dayLabel:"Tag 7 – Samstag", daySubtitle:"11. Juli 2026", title:"Abklebearbeiten", estimatedHours:3, neededPersons:2, skillLevel:"jeder", tools:["Folie","Klebeband"], done:false, notes:"" },
  { id:"t7-3", dayNumber:7, date:"2026-07-11", dayLabel:"Tag 7 – Samstag", daySubtitle:"11. Juli 2026", title:"Türzargen abschleifen", estimatedHours:4, neededPersons:4, skillLevel:"handwerklich", tools:["Handschleifer","Schmirgelpapier","Industriestaubsauger"], done:false, notes:"" },
  { id:"t7-4", dayNumber:7, date:"2026-07-11", dayLabel:"Tag 7 – Samstag", daySubtitle:"11. Juli 2026", title:"Türzargen streichen", estimatedHours:4, neededPersons:2, skillLevel:"jeder", tools:["Pinsel","Walzen"], done:false, notes:"" },
  { id:"t7-5", dayNumber:7, date:"2026-07-11", dayLabel:"Tag 7 – Samstag", daySubtitle:"11. Juli 2026", title:"Drückergarnituren montieren", estimatedHours:2, neededPersons:1, skillLevel:"handwerklich", tools:["Akkuschrauber","Schraubendreher"], done:false, notes:"" },

  // Tag 8 – Mo. 13. Juli (Woche 3)
  { id:"t8-1", dayNumber:8, date:"2026-07-13", dayLabel:"Tag 8 – Montag", daySubtitle:"13. Juli 2026", title:"Abklebearbeiten", estimatedHours:2, neededPersons:4, skillLevel:"jeder", tools:["Folie","Klebeband"], done:false, notes:"" },
  { id:"t8-2", dayNumber:8, date:"2026-07-13", dayLabel:"Tag 8 – Montag", daySubtitle:"13. Juli 2026", title:"Decke streichen", estimatedHours:3, neededPersons:4, skillLevel:"jeder", tools:["Pinsel","Walzen"], done:false, notes:"" },
  { id:"t8-3", dayNumber:8, date:"2026-07-13", dayLabel:"Tag 8 – Montag", daySubtitle:"13. Juli 2026", title:"Wände streichen", estimatedHours:3, neededPersons:4, skillLevel:"jeder", tools:["Pinsel","Walzen"], done:false, notes:"" },

  // Tag 9 – Di. 14. Juli
  { id:"t9-1", dayNumber:9, date:"2026-07-14", dayLabel:"Tag 9 – Dienstag", daySubtitle:"14. Juli 2026", title:"Restliche Streicharbeiten", estimatedHours:3, neededPersons:3, skillLevel:"jeder", tools:["Pinsel","Walzen"], done:false, notes:"" },
  { id:"t9-2", dayNumber:9, date:"2026-07-14", dayLabel:"Tag 9 – Dienstag", daySubtitle:"14. Juli 2026", title:"Klebebänder & Folien entfernen", estimatedHours:2, neededPersons:1, skillLevel:"jeder", tools:[], done:false, notes:"" },
  { id:"t9-3", dayNumber:9, date:"2026-07-14", dayLabel:"Tag 9 – Dienstag", daySubtitle:"14. Juli 2026", title:"Bodenabdeckung entfernen", estimatedHours:1, neededPersons:2, skillLevel:"jeder", tools:[], done:false, notes:"" },
  { id:"t9-4", dayNumber:9, date:"2026-07-14", dayLabel:"Tag 9 – Dienstag", daySubtitle:"14. Juli 2026", title:"Türen einhängen", estimatedHours:2, neededPersons:2, skillLevel:"handwerklich", tools:[], done:false, notes:"" },
  { id:"t9-5", dayNumber:9, date:"2026-07-14", dayLabel:"Tag 9 – Dienstag", daySubtitle:"14. Juli 2026", title:"Reinigungsarbeiten", estimatedHours:4, neededPersons:4, skillLevel:"jeder", tools:[], done:false, notes:"" },

  // Tag 10 – Mi. 15. Juli
  { id:"t10-1", dayNumber:10, date:"2026-07-15", dayLabel:"Tag 10 – Mittwoch", daySubtitle:"15. Juli 2026", title:"Bau der Sitzbänke", estimatedHours:6, neededPersons:3, skillLevel:"handwerklich", tools:["Säge","Akkuschrauber","Schlagbohrmaschine"], done:false, notes:"" },
  { id:"t10-2", dayNumber:10, date:"2026-07-15", dayLabel:"Tag 10 – Mittwoch", daySubtitle:"15. Juli 2026", title:"Reinigungsarbeiten", estimatedHours:3, neededPersons:3, skillLevel:"jeder", tools:[], done:false, notes:"" },
  { id:"t10-3", dayNumber:10, date:"2026-07-15", dayLabel:"Tag 10 – Mittwoch", daySubtitle:"15. Juli 2026", title:"Elektrikarbeiten", estimatedHours:3, neededPersons:3, skillLevel:"fachkenntnisse", tools:[], done:false, notes:"" },

  // Tag 11 – Do. 16. Juli
  { id:"t11-1", dayNumber:11, date:"2026-07-16", dayLabel:"Tag 11 – Donnerstag", daySubtitle:"16. Juli 2026", title:"Elektrikarbeiten", estimatedHours:3, neededPersons:3, skillLevel:"fachkenntnisse", tools:[], done:false, notes:"" },
  { id:"t11-2", dayNumber:11, date:"2026-07-16", dayLabel:"Tag 11 – Donnerstag", daySubtitle:"16. Juli 2026", title:"Einbau Garderobe", estimatedHours:2, neededPersons:2, skillLevel:"handwerklich", tools:["Säge","Akkuschrauber","Schlagbohrmaschine"], done:false, notes:"" },
  { id:"t11-3", dayNumber:11, date:"2026-07-16", dayLabel:"Tag 11 – Donnerstag", daySubtitle:"16. Juli 2026", title:"Bau der Tische", estimatedHours:6, neededPersons:2, skillLevel:"handwerklich", tools:["Säge","Akkuschrauber","Schlagbohrmaschine"], done:false, notes:"" },

  // Tag 12 – Fr. 17. Juli
  { id:"t12-1", dayNumber:12, date:"2026-07-17", dayLabel:"Tag 12 – Freitag", daySubtitle:"17. Juli 2026", title:"Anbringen der Akustikpanele", estimatedHours:6, neededPersons:4, skillLevel:"handwerklich", tools:["Säge","Akkuschrauber","Schlagbohrmaschine"], done:false, notes:"" },
  { id:"t12-2", dayNumber:12, date:"2026-07-17", dayLabel:"Tag 12 – Freitag", daySubtitle:"17. Juli 2026", title:"Reinigungsarbeiten", estimatedHours:4, neededPersons:4, skillLevel:"jeder", tools:[], done:false, notes:"" },
  { id:"t12-3", dayNumber:12, date:"2026-07-17", dayLabel:"Tag 12 – Freitag", daySubtitle:"17. Juli 2026", title:"Elektrikarbeiten", estimatedHours:3, neededPersons:3, skillLevel:"fachkenntnisse", tools:[], done:false, notes:"" },

  // Tag 13 – Sa. 18. Juli
  { id:"t13-1", dayNumber:13, date:"2026-07-18", dayLabel:"Tag 13 – Samstag", daySubtitle:"18. Juli 2026", title:"Restarbeiten", estimatedHours:null, neededPersons:null, skillLevel:"handwerklich", tools:[], done:false, notes:"Zeitbedarf noch offen" },
  { id:"t13-2", dayNumber:13, date:"2026-07-18", dayLabel:"Tag 13 – Samstag", daySubtitle:"18. Juli 2026", title:"Deko", estimatedHours:null, neededPersons:null, skillLevel:"jeder", tools:[], done:false, notes:"Zeitbedarf noch offen" }
];
