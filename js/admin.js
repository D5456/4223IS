
// Array de materias
const materias = ["Matemáticas", "Ciencias", "Historia", "Idiomas", "Artes"];

// Obtener el elemento de lista del DOM
const listaMaterias = document.getElementById("lista-materias");

// Agregar las materias a la lista
for (let i = 0; i < materias.length; i++) {
  const materia = materias[i];

  // Crear un elemento de lista para la materia y agregarlo a la lista
  const itemLista = document.createElement("div");
  itemLista.textContent = materia;
  itemLista.classList.add("materia");
  listaMaterias.appendChild(itemLista);

  // Añadir un manejador de eventos para la selección de la materia
  itemLista.addEventListener("click", function() {
    // Alternar la clase seleccionado en la materia
    itemLista.classList.toggle("seleccionado");

    // Actualizar el campo oculto con las materias seleccionadas
    const seleccionados = document.querySelectorAll(".seleccionado");
    const valoresSeleccionados = Array.from(seleccionados).map(function(seleccionado) {
      return seleccionado.textContent;
    });
    const campoSeleccionado = document.getElementById("materias-seleccionadas");
    campoSeleccionado.value = JSON.stringify(valoresSeleccionados);
  });
}
function materia(){
    alert("se envio correctamente");
}
function materia1(){
    alert("se envio correctamente");
}
function materia2(){
    alert("se envio correctamente");
}
function materia3(){
    alert("se envio correctamente");
}
function verificacion(){
    alert("se verifico correctamente");
}
