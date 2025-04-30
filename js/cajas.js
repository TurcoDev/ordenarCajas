const containBox = document.getElementById("container");

console.log(containBox);

// containBox.innerHTML += `<div class="box">1</div>`;
// containBox.innerHTML += `<div class="box">2</div>`;
// containBox.innerHTML += `<div class="box">3</div>`;

// Opcion iteracion
function generateBoxes(count = 20) {
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
