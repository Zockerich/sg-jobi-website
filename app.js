// Rendert die Startseite aus window.SG_DATA
(function () {
  const d = window.SG_DATA;
  const $ = (sel) => document.querySelector(sel);
  const liste = (name) => $(`[data-liste="${name}"]`);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Symbole ---------- */
  const SOCIAL = {
    YouTube: '<path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.8 15V9l5.7 3-5.7 3Z"/>',
    Instagram: '<path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21.9 8c-.1-1.6-.4-3-1.6-4.3S17.6 2.2 16 2.1C14.3 2 9.7 2 8 2.1c-1.6.1-3 .4-4.3 1.6S2.2 6.4 2.1 8C2 9.7 2 14.3 2.1 16c.1 1.6.4 3 1.6 4.3s2.7 1.5 4.3 1.6c1.7.1 6.3.1 8 0 1.6-.1 3-.4 4.3-1.6s1.5-2.7 1.6-4.3c.1-1.7.1-6.3 0-8Zm-2.1 9.9a3.3 3.3 0 0 1-1.8 1.8c-1.3.5-4.3.4-5.7.4s-4.4.1-5.7-.4a3.3 3.3 0 0 1-1.8-1.8c-.5-1.3-.4-4.3-.4-5.7s-.1-4.4.4-5.7a3.3 3.3 0 0 1 1.8-1.8c1.3-.5 4.3-.4 5.7-.4s4.4-.1 5.7.4a3.3 3.3 0 0 1 1.8 1.8c.5 1.3.4 4.3.4 5.7s.1 4.4-.4 5.7Z"/>',
    Facebook: '<path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/>'
  };
  const ICON = {
    video: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3z"/>',
    bild: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-8 9"/>',
    zeitung: '<path d="M4 5h13v14H6a2 2 0 0 1-2-2z"/><path d="M17 9h3v8a2 2 0 0 1-2 2"/><path d="M8 9h5M8 13h5"/>',
    pfeife: '<circle cx="9" cy="14" r="5"/><path d="M12 10h9v4h-5"/><path d="M6 4l2 3M11 3v3"/>',
    halle: '<path d="M3 20V10l9-6 9 6v10"/><path d="M9 20v-6h6v6"/>',
    platz: '<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M12 5v14"/><circle cx="12" cy="12" r="2.5"/>',
    forum: '<path d="M4 5h12v9H8l-4 3z"/><path d="M16 9h4v8l-3-2h-6v-1"/>',
    umfrage: '<path d="M5 20V10M12 20V4M19 20v-7"/>',
    buch: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    ball: '<circle cx="12" cy="12" r="9"/><path d="m12 7 4 3-1.5 5h-5L8 10z"/>',
    formular: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h6M9 16h6"/>'
  };
  const pfeil = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';
  const social = d.social.map((s) => `<a class="social" href="${esc(s.url)}" aria-label="${esc(s.name)}"><svg viewBox="0 0 24 24">${SOCIAL[s.name]}</svg></a>`).join("");
  liste("social").innerHTML = social;
  liste("social2").innerHTML = social;

  /* ---------- Navigation mit Aufklapp-Menüs ---------- */
  const m = d.menue.Mannschaften;
  const gruppen = {
    Mannschaften: [["Herren", m.slice(0, 3)], ["Junioren", m.slice(3, 11)], ["", m.slice(11)]],
    Archiv: [["", d.menue.Archiv]],
    Service: [["", d.menue.Service]]
  };
  document.querySelectorAll("[data-menue]").forEach((li, i) => {
    const name = li.dataset.menue;
    const id = `ausklapp-${i}`;
    const inhalt = gruppen[name].map(([titel, punkte]) =>
      `<div class="ausklapp__gruppe">${titel ? `<h4>${esc(titel)}</h4>` : name === "Mannschaften" ? "<h4>&nbsp;</h4>" : ""}${punkte.map((p) => `<a href="#">${esc(p)}</a>`).join("")}</div>`).join("");
    li.innerHTML = `<button aria-expanded="false" aria-controls="${id}">${esc(name)}${pfeil}</button><div id="${id}" class="ausklapp">${inhalt}</div>`;
  });
  const alleSchliessen = (ausser) => document.querySelectorAll(".nav__punkt > button[aria-expanded]").forEach((b) => {
    if (b === ausser) return;
    b.setAttribute("aria-expanded", "false");
    b.nextElementSibling.classList.remove("offen");
  });
  document.querySelectorAll(".nav__punkt > button").forEach((b) => b.addEventListener("click", (e) => {
    e.stopPropagation();
    const offen = b.getAttribute("aria-expanded") !== "true";
    alleSchliessen(b);
    b.setAttribute("aria-expanded", String(offen));
    b.nextElementSibling.classList.toggle("offen", offen);
  }));
  document.addEventListener("click", (e) => { if (!e.target.closest(".nav")) alleSchliessen(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") alleSchliessen(); });

  const knopf = $(".menue-knopf"), nav = $("#nav");
  knopf.addEventListener("click", () => {
    const offen = nav.classList.toggle("offen");
    knopf.setAttribute("aria-expanded", String(offen));
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) { nav.classList.remove("offen"); knopf.setAttribute("aria-expanded", "false"); alleSchliessen(); }
  });

  /* ---------- Letzter Spieltag ---------- */
  liste("ergebnisse").innerHTML = d.ergebnisse.map((e) => {
    const t = e.titel.match(/^(\S+) - (.+?)\s+(\d+:\d+)$/) || [];
    return `<li class="ergebnis"><a href="${esc(e.video)}" aria-label="Spielvideo ${esc(e.titel)}">
      <span class="ergebnis__bild" style="background-image:url('${esc(e.thumb)}')"></span>
      <span class="ergebnis__team">${esc(e.team)}</span>
      <span class="ergebnis__play" aria-hidden="true"></span>
      <span class="ergebnis__unten">
        <span class="ergebnis__stand">${esc(t[3] || "")}</span>
        <span class="ergebnis__gegner" style="display:block">gegen ${esc(t[2] || e.titel)}</span>
        <span class="ergebnis__liga" style="display:block">${esc(e.liga.replace(/ \d\d\/\d\d$/, ""))}, ${esc(e.datum)}</span>
      </span>
    </a></li>`;
  }).join("");
  liste("teamKurz").innerHTML = d.teamKurz.map((t) => `<a href="#mannschaften">${esc(t)}</a>`).join("");

  /* ---------- Kalender ---------- */
  const farbe = (ort) => d.orte[ort].farbe;
  liste("termine").innerHTML = d.termine.map((t) => `
    <p class="tag">${esc(t.tag.replace(/(\d\d\.\d\d)\.\d{4}/, "$1."))}</p>
    <ul class="termine">${t.eintraege.map((e) => `
      <li class="termin" style="--farbe:${farbe(e.ort)}">
        <span class="termin__zeit">${esc(e.zeit)}</span>
        <span>${esc(e.text)}<span class="sr-only">, ${esc(d.orte[e.ort].name)}</span></span>
      </li>`).join("")}</ul>`).join("");
  liste("legende").innerHTML = Object.values(d.orte).map((o) => `<li style="--farbe:${o.farbe}">${esc(o.name)}</li>`).join("");

  /* ---------- Bericht, Spiele, Feste ---------- */
  const b = d.bericht;
  $('[data-feld="bericht"]').innerHTML = `
    <p class="bericht__meta">Junioren, 28.09.2026</p>
    <h2>${esc(b.titel)}</h2>
    <p>${esc(b.text)}</p>
    <div class="bericht__mehr">
      <a class="pfeil-link" href="#">Alle Juniorenberichte</a>
      <a class="pfeil-link" href="#">Stadionzeitung lesen</a>
    </div>`;

  const sg = (n) => /SG Johannesbr/.test(n) ? `<b>${esc(n.replace("SG Johannesbr.-Binab.", "SG Jobi"))}</b>` : esc(n);
  liste("spiele").innerHTML = d.spiele.map((s) => `
    <li><span class="spiele__meta">${esc(s.datum)}, ${esc(s.klasse)}</span>
    <span class="spiele__paar">${sg(s.heim)} – ${sg(s.gast)}</span></li>`).join("");

  liste("veranstaltungen").innerHTML = d.veranstaltungen.map((v) => {
    const [wt, dat] = v.datum.split(", ");
    return `<li><span class="feste__datum"><small>${esc(wt)}</small>${esc(dat.slice(0, 6))}</span>
      <span><span class="feste__titel" style="display:block">${esc(v.text)}</span><span class="feste__info">${esc(v.zeit)} Uhr, ${esc(d.orte[v.ort].name)}</span></span></li>`;
  }).join("");

  /* ---------- Mannschaften ---------- */
  liste("herren").innerHTML = d.mannschaften.Herren.map((t) => `
    <li><a href="#">
      <span class="herren__kurz">${esc(t.kurz)}</span>
      <span class="herren__name">${esc(t.name)}</span>
      <span class="herren__liga">${esc(t.liga)}</span>
      <span class="herren__trainer">Trainer: ${esc(t.trainer)}</span>
    </a></li>`).join("");
  const tag = (t) => {
    const [alter, ...rest] = t.split(" ");
    return /^U\d/.test(alter) ? `<li><a href="#"><b>${esc(alter)}</b>${esc(rest.join(" "))}</a></li>` : `<li><a href="#">${esc(t)}</a></li>`;
  };
  liste("junioren").innerHTML = d.mannschaften.Junioren.map(tag).join("");
  liste("weitere").innerHTML = d.mannschaften.Weitere.map(tag).join("");

  /* ---------- Service ---------- */
  liste("service").innerHTML = d.service.map((s) => `
    <li><a href="#"><svg viewBox="0 0 24 24" aria-hidden="true">${ICON[s.icon]}</svg>
      <span class="service__titel">${esc(s.titel)}</span><span class="service__info">${esc(s.info)}</span></a></li>`).join("");

  /* ---------- Kalender-Abo ---------- */
  const dlg = $("#abo");
  liste("abo").innerHTML = m.map((t) => `<li><button type="button" aria-pressed="false">${esc(t)}</button></li>`).join("");
  liste("abo").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn) btn.setAttribute("aria-pressed", String(btn.getAttribute("aria-pressed") !== "true"));
  });
  document.querySelectorAll('[data-oeffnet="abo"]').forEach((k) => k.addEventListener("click", () => dlg.showModal()));
})();
