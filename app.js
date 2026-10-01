// Rendert die Startseite aus window.SG_DATA
(function () {
  const d = window.SG_DATA;
  const $ = (sel) => document.querySelector(sel);
  const liste = (name) => $(`[data-liste="${name}"]`);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Menü mit aufklappbaren Untermenüs
  document.querySelectorAll("[data-menue]").forEach((el) => {
    const name = el.dataset.menue;
    el.outerHTML = `<details><summary>${esc(name)}</summary><ul>${d.menue[name].map((p) => `<li><a href="#">${esc(p)}</a></li>`).join("")}</ul></details>`;
  });

  // Bericht
  const b = d.bericht;
  $('[data-feld="bericht"]').innerHTML = `
    <a class="bericht__link" href="#">⚽ ${esc(b.link)}</a>
    <h1>${esc(b.titel)}</h1>
    <p>${esc(b.text)}</p>`;

  // Ergebnisse mit Spielvideo
  liste("ergebnisse").innerHTML = d.ergebnisse.map((e) => `
    <li class="ergebnis"><a href="${esc(e.video)}">
      <p class="ergebnis__liga">${esc(e.liga)} ${esc(e.datum)}</p>
      <p class="ergebnis__titel">${esc(e.titel)}</p>
      <span class="ergebnis__bild" style="background-image:url('${esc(e.thumb)}')" role="img" aria-label="Spielvideo ansehen"></span>
    </a></li>`).join("");

  liste("teamKurz").innerHTML = d.teamKurz.map((t) => `<a href="#mannschaften">${esc(t)}</a>`).join("");

  // Spielplan
  liste("spiele").innerHTML = d.spiele.map((s) => `
    <div class="spiel__zeile"><span>${esc(s.datum)}</span><span>${esc(s.klasse)}</span><span></span></div>
    <div class="spiel">
      <span>${/SG Johannesbr/.test(s.heim) ? `<strong>${esc(s.heim)}</strong>` : esc(s.heim)}</span>
      <span class="spiel__vs">-:-</span>
      <span>${/SG Johannesbr/.test(s.gast) ? `<strong>${esc(s.gast)}</strong>` : esc(s.gast)}</span>
    </div>`).join("");

  // Schnelllinks rechts
  liste("schnelllinks").innerHTML = d.schnelllinks.map((gruppe, i) =>
    `<ul class="${i === 0 ? "einspaltig" : ""}">${gruppe.map((l) => `<li><a href="#">${esc(l)}</a></li>`).join("")}</ul>`).join("");

  // Termine mit Farbcode nach Ort
  const farbe = (ort) => d.orte[ort].farbe;
  liste("termine").innerHTML = d.termine.map((t) => `
    <p class="tag">${esc(t.tag)}:</p>
    <ul class="termine">${t.eintraege.map((e) => `
      <li class="termin" style="--farbe:${farbe(e.ort)}" title="${esc(d.orte[e.ort].name)}">
        <span class="termin__zeit">${esc(e.zeit)}</span><span>${esc(e.text)}</span>
      </li>`).join("")}</ul>`).join("");

  liste("veranstaltungen").innerHTML = d.veranstaltungen.map((v) => `
    <li class="termin termin--event" style="--farbe:${farbe(v.ort)}">
      <span><b>${esc(v.text)}</b>${esc(v.datum)}, ${esc(v.zeit)} Uhr</span>
    </li>`).join("");

  liste("legende").innerHTML = Object.values(d.orte).map((o) => `<li style="--farbe:${o.farbe}">${esc(o.name)}</li>`).join("");

  // Mannschafts-Kacheln
  liste("herren").innerHTML = d.mannschaften.Herren.map((m) => `
    <li><a href="#">
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
  const teams = d.menue.Mannschaften;
  liste("abo").innerHTML = teams.map((t) => `<li><button type="button" aria-pressed="false">${esc(t)}</button></li>`).join("");
  liste("abo").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn) btn.setAttribute("aria-pressed", String(btn.getAttribute("aria-pressed") !== "true"));
  });
  document.querySelectorAll('[data-oeffnet="abo"]').forEach((k) => k.addEventListener("click", () => dlg.showModal()));

  // Mobiles Menü
  const knopf = $(".menue-knopf"), nav = $("#menue");
  knopf.addEventListener("click", () => {
    const offen = nav.classList.toggle("offen");
    knopf.setAttribute("aria-expanded", String(offen));
  });
})();
