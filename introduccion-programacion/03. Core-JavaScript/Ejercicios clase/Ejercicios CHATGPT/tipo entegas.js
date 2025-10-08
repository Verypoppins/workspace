//Ejercicio 0
function createMultiples(tamaño, número) {
  //Aquí definimos la función con sus dos parámetros
  let resultado = []; //Creamos un array vacío donde se guardarán los múltiplos
  for (let i = 1; i <= tamaño; i++) {
    // Bucle que itera desde 1 hasta el tamaño indicado
    resultado.push(i * número); //Calcula el múltiplo y lo añade al array resultado
  }
  return resultado; //Devuelve el array con los múltiplos
}
//console.log(createMultiples(2, 4)); //sale: [ 4, 8 ]

// Exporta la función
module.exports = { createMultiples };

//-------------------------------------------------

function createSquares(tamaño) {
  let resultado = [];
  for (let i = 1; i <= tamaño; i++) {
    resultado.push(i * i);
  }
  return resultado;
}

//------------------------------------------------

function createMultiplesOfThree(multiplos) {
  let resultado = [];
  for (let i = 1; i <= multiplos; i++) {
    resultado.push(i * 3);
  }
  return resultado;
}

//-------------------------------------------------

function createEvenNumbers(numeros) {
  let resultado = [];
  for (let i = 1; i <= numeros; i++) {
    resultado.push(i * 2);
  }
  return resultado;
}

//----------------------------------------------------

function createOddNumbers(cantidad) {
  let resultado = [];
  for (let i = 1; i <= cantidad; i++) {
    resultado.push(i * 2 - 1);
  }
  return resultado;
}
