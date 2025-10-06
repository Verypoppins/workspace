const input = document.getElementById('miInput');
const boton = document.getElementById('boton');
const parrafo = document.getElementById('parrafoDestino');

boton.addEventListener('click', () => {
  parrafo.textContent = input.value; // Pone el texto del input dentro del párrafo
});
