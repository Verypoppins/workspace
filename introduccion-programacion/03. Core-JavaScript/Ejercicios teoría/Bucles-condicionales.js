//Bucles con condicionales:
//6. Imprimir los números del 1 al 100 de uno en uno como alerta o por pantalla.

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

//7. Imprimir sólo los números pares del 1 al 100 en log de consola o por pantalla.

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

//8. Imprimir sólo los números múltiplos de 20 del 1 al 1000 por pantalla.

for (let i = 1; i <= 1000; i++) {
  if (i % 20 === 0) console.log(i);
}

//9. Imprimir por pantalla las tablas de multiplicar del 0 al 9

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//10. Preguntar un número por input, después, imprimir todos los números
//impares hasta él. Un ejemplo sería: “Dime un número entero”. Le
//respondemos 22. Nos saca por pantalla: 1, 3, 5, 7, …, 21.

const numero = parseInt(prompt('Dime un numero entero'));

let impares = [];

for (let i = 0; i < numero; i++) {
  if (i % 2 !== 0) {
    impares.push(i);
  }
}
alert(impares.join(', '));

//11. Preguntar un número de números a introducir, después, preguntar por
//esos números, por último, sacar por pantalla la suma de los mismos. Un
//ejemplo sería: “Dime un número” -> 3. Después, preguntar 3 veces: “uno
//de los sumandos es?” -> 4, 3, 2. Y por último, cuando se han conseguido
//todos los números, responder la suma -> 9.

//1️⃣ Qué pide el ejercicio
//1. Preguntar cuántos números va a introducir el usuario.
//2. Preguntar cada número tantas veces como haya dicho antes.
//3. Sumar todos esos números y mostrar el resultado.

// 1) Pido cuántos números va a meter el usuario
const cantidad = parseInt(prompt('¿Cuántos números vas a sumar?'));

// 2) Creo una "cajita" (array) donde guardaré esos números
let numeros = [];

// 3) Repetiré la pregunta 'cantidad' veces
for (let i = 0; i < cantidad; i++) {
  // 3.a) Pregunto un número concreto (i + 1 para que salga "Número 1", "Número 2", ...)
  const numero = parseInt(prompt(`Dime el número ${i + 1}:`));

  // 3.b) Meto ese número dentro del array
  numeros.push(numero);
}

// 4) Inicializo el acumulador de la suma
let suma = 0;

// 5) Recorro todos los números que guardé y los voy sumando
for (let num of numeros) {
  suma += num; // suma = suma + num
}

// 6) Muestro el resultado
alert(`La suma de tus números es: ${suma}`);

//12. Preguntar por pantalla un número entero y que se imprima por pantalla
//un triángulo tipo, siendo el número entero el número de líneas que se
//imprimen. Un ejemplo sería con el número 5:

// 1️⃣ Pedimos un número entero
const lineas = parseInt(prompt('Dime un número entero:'));

// 2️⃣ Bucle exterior -> controla cuántas líneas imprimimos
for (let i = 1; i <= lineas; i++) {
  let texto = ''; // aquí construiremos cada línea

  // 3️⃣ Bucle interior -> añade los impares en orden descendente
  for (let j = i; j >= 1; j--) {
    texto += 2 * j - 1; // fórmula del impar: 1, 3, 5, 7...
  }
}
// 4️⃣ Imprimimos la línea en consola
console.log(texto);

//13. Preguntar al usuario que escriba un texto, después que lo muestre de
//manera invertida (al revés) por pantalla.

const texto = prompt('Escribe aquí un texto');

const textoInvertido = texto.split('').reverse().join('');

console.log('Tu texto invertido es:' + textoInverido);

//14. Escribir un programa que muestre el eco de todo lo que el usuario
//introduzca hasta que el usuario escriba “salir” que terminará.

let tex = '';

while (texto !== 'salir') {
  texto = prompt('Escribe algo (o escribe "salir" para terminar)');
}

if (texto !== 'salir') {
  console.log('Eco: ' + texto);
}
console.log('Programa terminado.');

//15. (Difícil) Dibujar un cuadrado por pantalla. Primero, piensa cómo lo vas a
//dibujar utilizando qué parámetro ascii. Después, imagina las reglas que
//hay que seguir para dibujar un cuadrado. El programa debe aceptar un
//valor con el tamaño del cuadrado y después pintar por pantalla ese
//cuadrado.

function drawSquare(n) {
  if (n <= 0) return;
  const full = '*'.repeat(n);
  console.log(full);
  for (let i = 0; i < n - 2; i++) {
    console.log('*' + ' '.repeat(n - 2) + '*');
  }
  if (n > 1) console.log(full);
}
drawSquare(parseInt(prompt('Tamaño del cuadrado'), 10));

//
