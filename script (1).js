// Conversion cm en pieds
function converterCMenPied(cm) {
  const piedsParCm = 1 / 30.48;
  return parseFloat((cm * piedsParCm).toFixed(2)); // Limiter à deux décimales
}

// Conversion pieds en cm
function convertirPiedEnCm(piedsDecimal) {
  const cmParPied = 30.48;
  return parseFloat((piedsDecimal * cmParPied).toFixed(2)); // Limiter à deux décimales
}

// Fonction pour convertir l'entrée en format pied'pouces (comme "6'9")
function convertirEnFormatPiedsPouces(input) {
  input = input.replace(/[\.,\s]+/g, "'"); // Remplacer les espaces ou les points par des apostrophes
  
  const parts = input.split("'");

  const pieds = parseInt(parts[0], 10) || 0;
  const pouces = parseInt(parts[1], 10) || 0;

  return { pieds, pouces };
}

// Fonction pour convertir les pieds/pouces en cm
function convertirPiedsPoucesEnCm(input) {
  const { pieds, pouces } = convertirEnFormatPiedsPouces(input);
  const resultat = pieds * 30.48 + pouces * 2.54;
  return parseFloat(resultat.toFixed(2)); // Limiter à deux décimales
}

// Conversion décimal en pieds et pouces
function convertirDecimalEnPiedsPouces(piedsDecimal) {
  const pieds = Math.floor(piedsDecimal);
  const poucesDecimal = (piedsDecimal - pieds) * 12;
  const pouces = Math.round(poucesDecimal); // Arrondi des pouces
  return `${pieds}'${pouces}"`;
}

// Gestion de la conversion
function convertirTaille() {
  const tailleCmInput = document.getElementById("tailleCm");
  const taillePiedsInput = document.getElementById("taillePieds");
  const tailleCm = tailleCmInput.value.trim();
  const taillePieds = taillePiedsInput.value.trim();
  const resultat = document.getElementById("resultat");

  if (tailleCm && !isNaN(tailleCm)) {
    const piedsDecimal = converterCMenPied(tailleCm);
    const piedsPouces = convertirDecimalEnPiedsPouces(piedsDecimal);
    taillePiedsInput.value = "";
    resultat.textContent = `${tailleCm} cm = ${piedsPouces} ft`;
  } else if (taillePieds) {
    const resultatCm = convertirPiedsPoucesEnCm(taillePieds);
    tailleCmInput.value = "";
    resultat.textContent = `${taillePieds} ft = ${resultatCm} cm`;
  } else {
    resultat.textContent = "Veuillez entrer une valeur.";
  }
}

// Gestion des champs
document.getElementById("tailleCm").addEventListener("input", convertirTaille);
document.getElementById("taillePieds").addEventListener("input", convertirTaille);

// Code iframe à copier
const iframeCode = `<iframe src="https://rahimmabika.github.io/convertisseur_tailles/" title="Convertisseur"></iframe allow="clipboard-write">`;

document.getElementById("copy-btn").addEventListener("click", function () {
  navigator.clipboard
    .writeText(iframeCode)
    .then(() => {
      alert("Le code iframe a été copié dans le presse-papier !");
    })
    .catch((err) => {
      console.error("Erreur lors de la copie :", err);
      alert(`Erreur lors de la copie du code : ${err.message}`);
    });
});
