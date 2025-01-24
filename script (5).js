(function () {
  function a(b) {
    const c = 1 / 30.48;
    return parseFloat((b * c).toFixed(2));
  }

  function d(e) {
    const f = 30.48;
    return parseFloat((e * f).toFixed(2));
  }

  function g(h) {
    h = h.replace(/[\.,\s]+/g, "'");
    const i = h.split("'");
    const j = parseInt(i[0], 10) || 0;
    const k = parseInt(i[1], 10) || 0;
    return { pieds: j, pouces: k };
  }

  function l(m) {
    const { pieds: n, pouces: o } = g(m);
    const p = n * 30.48 + o * 2.54;
    return parseFloat(p.toFixed(2));
  }

  function q(r) {
    const s = Math.floor(r);
    const t = (r - s) * 12;
    const u = Math.round(t);
    return `${s}'${u}"`;
  }

  function v() {
    const w = document.getElementById("tailleCm"),
      x = document.getElementById("taillePieds"),
      y = w.value.trim(),
      z = x.value.trim(),
      A = document.getElementById("resultat");

    if (document.activeElement.id === "tailleCm" && y && !isNaN(y)) {
      const B = parseFloat(a(y)),
        C = q(B);
      x.value = "";
      A.textContent = `${y} cm = ${C} ft`;
    } else if (document.activeElement.id === "taillePieds" && z) {
      const D = l(z);
      w.value = "";
      A.textContent = `${z} ft = ${D} cm`;
    } else if (y && !isNaN(y)) {
      const B = parseFloat(a(y)),
        C = q(B);
      A.textContent = `${y} cm = ${C} ft`;
    } else if (z) {
      const D = l(z);
      A.textContent = `${z} ft = ${D} cm`;
    } else {
      A.textContent = "Veuillez entrer une valeur.";
    }
  }

  function E(F) {
    if (F.key === "Enter") v();
  }

  document.getElementById("tailleCm").addEventListener("input", v);
  document.getElementById("taillePieds").addEventListener("input", v);

  const G = `<iframe src="https://rahimmabika.github.io/convertisseur_tailles/" title="Convertisseur"></iframe allow="clipboard-write">`;

  document.getElementById("copy-btn").addEventListener("click", function () {
    navigator.clipboard
      .writeText(G)
      .then(() => {
        alert("Le code iframe a été copié dans le presse-papier !");
      })
      .catch((H) => {
        console.error("Erreur lors de la copie :", H);
        alert(`Erreur lors de la copie du code : ${H.message}`);
      });
  });
})();
