const containBox = document.getElementById("container");

console.log(containBox);

// containBox.innerHTML += `<div class="box">1</div>`;
// containBox.innerHTML += `<div class="box">2</div>`;
// containBox.innerHTML += `<div class="box">3</div>`;

// Opcion iteracion
function generateBoxes(count = 5) {
  for (let index = 0; index < count; index++) {
    containBox.innerHTML += `<div class="box">${index + 1}</div>`;
  }
}

/**
 * Analizar opcion invertir con CSS utilizando flexbox
 */
function invertir() {
  // Que pasaria si utilizaramos getElementsByClassName()
  const boxList = document.querySelectorAll(".box");
  console.log(boxList);
}

function pruebaListas() {
  const listaEstatica = document.querySelectorAll(".box");
  const listaDinamica = document.getElementsByClassName("box");
  console.log("lista Estatica", listaEstatica);
  console.log("lista dinamica", listaDinamica);
}

function cambiarCaja() {
  document.getElementById("cambio").innerText = "aasdsgjshvk seo";
}

function invertirConCSS() {
  document.getElementById("container").classList.toggle("invertir");
}

function invertirConArray() {
  const lista = document.querySelectorAll(".box");
  const array = Array.from(lista);
  console.log(array.reverse());
}
