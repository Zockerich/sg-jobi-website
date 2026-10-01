// Rendert die Startseite aus window.SG_DATA
(function () {
  const d = window.SG_DATA;
  const $ = (sel) => document.querySelector(sel);
  const liste = (name) => $(`[data-liste="${name}"]`);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Anzeigetafel
  $('[data-feld="spieltag"]').textContent = d.spieltag;
  liste("ergebnisse").innerHTML = d.ergebnisse.map((s) => {
    const [a, b] = s.heim ? s.tore : [s.tore[1], s.tore[0]];
    const urteil = a > b ? "sieg" : a === b ? "remis" : "niederlage";
    const wort = { sieg: "Sieg", remis: "Unentschieden", niederlage: "Niederlage" }[urteil];
    const paarung = s.heim ? `gegen ${s.gegner}` : `bei ${s.gegner}`;
    return `<li class="spiel spiel--${urteil}">
      <span class="spiel__team">${esc(s.team)}</span>
      <div class="spiel__paarung">
        <p class="spiel__gegner">${esc(paarung)}</p>
        <p class="spiel__liga">${esc(s.liga)}</p>
      </div>
      <div class="spiel__ergebnis">
        <p class="spiel__stand" aria-label="${s.tore[0]} zu ${s.tore[1]}">${s.tore[0]}<i>:</i>${s.tore[1]}</p>
        <p class="spiel__urteil">${wort}</p>
      </div>
      <a class="spiel__video" href="${esc(s.video)}"><span class="play" aria-hidden="true"></span>Spielvideo</a>
    </li>`;
  }).join("");

  // Agenda, gruppiert nach Tag
  const tage = [...new Set(d.termine.map((t) => t.tag))];
  liste("termine").innerHTML = tage.map((tag) => {
    const zeilen = d.termine.filter((t) => t.tag === tag).map((t) => `
      <div class="termin termin--${t.typ}" data-typ="${t.typ}">
        <span class="termin__zeit">${esc(t.zeit)}</span>
        <span class="termin__titel">${esc(t.titel)}</span>
        <span class="termin__team">${esc(t.team)}</span>
      </div>`).join("");
    return `<div class="agenda__gruppe"><p class="agenda__tag">${esc(tag)}</p>${zeilen}</div>`;
  }).join("");

  document.querySelectorAll(".filter__chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter__chip").forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      const f = chip.dataset.filter;
      document.querySelectorAll(".termin").forEach((t) => { t.hidden = f !== "alle" && t.dataset.typ !== f; });
      document.querySelectorAll(".agenda__gruppe").forEach((g) => {
        g.hidden = !g.querySelector(".termin:not([hidden])");
      });
    });
  });

  liste("wochenende").innerHTML = d.wochenende.map((w) => `
    <li><p class="we__team">${esc(w.team)}</p><p class="we__text">${esc(w.text)}</p><p class="we__ort">${esc(w.ort)}</p></li>`).join("");

  liste("veranstaltungen").innerHTML = d.veranstaltungen.map((e) => `
    <li class="event">
      <span class="event__datum"><small>${esc(e.wochentag)}</small>${esc(e.datum)}</span>
      <div><p class="event__titel">${esc(e.titel)}</p><p class="event__info">${esc(e.zeit)} Uhr, ${esc(e.ort)}</p></div>
    </li>`).join("");

  // Bericht
  const b = d.bericht;
  $('[data-feld="bericht"]').innerHTML = `
    <p class="bericht__meta">${esc(b.team)}, ${esc(b.datum)}</p>
    <h3>${esc(b.titel)}</h3>
    <p>${esc(b.text)}</p>
    <a class="textlink" href="#">Weiterlesen</a>`;

  // Videos
  liste("videos").innerHTML = d.ergebnisse.map((s) => `
    <li><a class="video" href="${esc(s.video)}">
      <span class="video__bild" style="background-image:url('${esc(s.thumb)}')"></span>
      <span><span class="video__titel">${esc(s.team)} – ${esc(s.gegner)} ${s.tore[0]}:${s.tore[1]}</span><br>
      <span class="video__liga">${esc(s.liga)}</span></span>
    </a></li>`).join("");

  // Mannschaften
  liste("herren").innerHTML = d.mannschaften.Herren.map((m) => `
    <li class="herren"><a href="#">
      <span class="herren__kurz">${esc(m.kurz)}</span>
      <span class="herren__name">${esc(m.name)}</span>
      <span class="herren__liga">${esc(m.liga)}</span>
      <span class="herren__trainer">Trainer: ${esc(m.trainer)}</span>
    </a></li>`).join("");
  const tag = (t) => {
    const [alter, ...rest] = t.split(" ");
    return /^U\d/.test(alter) ? `<li><a href="#"><b>${esc(alter)}</b>${esc(rest.join(" "))}</a></li>` : `<li><a href="#">${esc(t)}</a></li>`;
  };
  liste("junioren").innerHTML = d.mannschaften.Junioren.map(tag).join("");
  liste("weitere").innerHTML = d.mannschaften.Weitere.map(tag).join("");

  // Kalender-Dialog
  const dlg = $("#abo");
  const alle = ["SG1", "SG2", "SG3", ...d.mannschaften.Junioren, ...d.mannschaften.Weitere];
  liste("abo").innerHTML = alle.map((t) => `<li><button type="button" aria-pressed="false">${esc(t)}</button></li>`).join("");
  liste("abo").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn) btn.setAttribute("aria-pressed", String(btn.getAttribute("aria-pressed") !== "true"));
  });
  document.querySelectorAll('[data-oeffnet="abo"]').forEach((k) => k.addEventListener("click", () => dlg.showModal()));

  // Mobiles Menü
  const knopf = $(".menue-knopf"), nav = $("#hauptnav");
  knopf.addEventListener("click", () => {
    const offen = nav.classList.toggle("offen");
    knopf.setAttribute("aria-expanded", String(offen));
  });
  nav.addEventListener("click", (e) => { if (e.target.tagName === "A") { nav.classList.remove("offen"); knopf.setAttribute("aria-expanded", "false"); } });
})();
