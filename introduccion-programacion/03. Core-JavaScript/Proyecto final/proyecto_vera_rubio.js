// ahorcado.js

//Configuración de palabras y dificultades
const palabras = {
  easy: [
    { word: 'html', hint: 'Lenguaje de marcado básico' },
    { word: 'bug', hint: 'Error en el código' },
  ],
  medium: [
    { word: 'variable', hint: 'Almacena valores' },
    { word: 'function', hint: 'Bloque de código reutilizable' },
  ],
  hard: [
    { word: 'asynchronous', hint: 'Tipo de programación no bloqueante' },
    { word: 'polymorphism', hint: 'Concepto clave en POO' },
  ],
};

let palabraSeleccionada;
let palabraOculta = [];
let intentosRestantes;

//Elegir dificultad
document.querySelectorAll('.difficulty-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const nivel = btn.dataset.level;
    iniciarJuego(nivel);
  });
});

function iniciarJuego(nivel) {
  document.getElementById('difficulty-container').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';

  const opciones = palabras[nivel];
  palabraSeleccionada = opciones[Math.floor(Math.random() * opciones.length)];

  intentosRestantes = nivel === 'easy' ? 8 : nivel === 'medium' ? 6 : 4;
  palabraOculta = Array(palabraSeleccionada.word.length).fill('_');

  mostrarJuego();
  crearTeclado();
}

//Dificultad al inicio del juego
document.querySelectorAll('.difficulty-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const nivel = btn.dataset.level;
    iniciarJuego(nivel);
  });
});

function iniciarJuego(nivel) {
  document.getElementById('difficulty-container').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';

  const opciones = palabras[nivel];
  palabraSeleccionada = opciones[Math.floor(Math.random() * opciones.length)];

  intentosRestantes = nivel === 'easy' ? 8 : nivel === 'medium' ? 6 : 4;
  palabraOculta = Array(palabraSeleccionada.word.length).fill('_');

  mostrarJuego();
  crearTeclado();
}

//mostrar pista e intentos
function mostrarJuego() {
  document.getElementById(
    'hint',
  ).textContent = `💡 Pista: ${palabraSeleccionada.hint}`;
  document.getElementById('word-display').textContent = palabraOculta.join(' ');
  document.getElementById(
    'attempts',
  ).textContent = `Intentos restantes: ${intentosRestantes}`;
}

//teclado alfabético
function crearTeclado() {
  const teclado = document.getElementById('keyboard');
  teclado.innerHTML = ''; // por si se reinicia

  const letras = 'abcdefghijklmnopqrstuvwxyz'.split('');
  letras.forEach((letra) => {
    const boton = document.createElement('button');
    boton.textContent = letra;
    boton.classList.add('key');
    boton.addEventListener('click', () => manejarLetra(letra, boton));
    teclado.appendChild(boton);
  });
}

//logica cuando se pulsa un botón
function manejarLetra(letra, boton) {
  boton.disabled = true; // Desactivar la letra una vez usada

  const palabra = palabraSeleccionada.word;
  if (palabra.includes(letra)) {
    // Reemplazar guiones por la letra acertada
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === letra) {
        palabraOculta[i] = letra;
      }
    }
  } else {
    intentosRestantes--;
  }

  mostrarJuego();
  comprobarFinJuego();
}

//comprobar si el juego ha terminado
function comprobarFinJuego() {
  if (!palabraOculta.includes('_')) {
    setTimeout(() => alert('🎉 ¡Has ganado!'), 100);
    reiniciar();
  } else if (intentosRestantes === 0) {
    setTimeout(
      () =>
        alert(`💀 Fin del juego. La palabra era: ${palabraSeleccionada.word}`),
      100,
    );
    reiniciar();
  }
}

function reiniciar() {
  document.getElementById('difficulty-container').style.display = 'block';
  document.getElementById('game-container').style.display = 'none';
}
