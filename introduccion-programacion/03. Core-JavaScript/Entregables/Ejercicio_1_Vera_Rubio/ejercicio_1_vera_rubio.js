//Escribe una función, llamada isLeapYear que:
//acepta un único argumento:
//o el argumento de entrada es de tipo str
//o el año puede tener un valor entre “1900” y “100000”
//debe retornar un único valor de tipo booleano:
//o en caso de que el año sea bisiesto, el retorno será verdadero
//o si el año no es bisiesto, retornará falso.
//ejemplo:
//o input: “1990”
//o output: False
//o 1990 no es múltiplo de 4, así que no es un año bisiesto.
//No te olvides de realizar los tests necesarios para comprobar tu función.
//------------------------------------------------------------------------------------

function isLeapYear(year) {
  // Verifica que mi argumento es de tipo string
  if (typeof year !== 'string') {
    return false;
  }
  // Convierte el año a un número
  const yearNum = Number(year);
  // Verifica que el año está en el rango que se pide
  if (isNaN(yearNum) || yearNum < 1900 || yearNum > 100000) {
    return false;
  }
  if ((yearNum % 4 === 0 && yearNum % 100 !== 0) || yearNum % 400 === 0) {
    return true; // Es un año bisiesto
  } else {
    return false; // No es un año bisiesto
  }
}

// Exporta la función
module.exports = { isLeapYear };

//Ejercicio sugerido:
//Escribe una función llamada isPalindromeYear que:
//Acepte un único argumento:
//El argumento de entrada debe ser de tipo string.
//El año puede tener un valor entre "1900" y "9999".
//Debe retornar un único valor de tipo booleano:
//Si el año es un palíndromo (se lee igual al derecho y al revés), el retorno será true.
//Si no es un palíndromo, retornará false.
//Ejemplo:
//input: "2002" → output: true (2002 se lee igual al derecho y al revés)
//input: "2023" → output: false
//No olvides realizar los tests necesarios para comprobar tu función.

function isPalindromeYear(year) {
  if (typeof year !== 'string') {
    return false;
  }

  const yearNum = Number(year);
  if (isNaN(yearNum) || yearNum < 1900 || yearNum > 9999) {
    return false;
  }

  const reversed = year.split('').reverse().join('');
  return year === reversed;
}

console.log(isPalindromeYear('2002'));

//Ejercicio sugerido: isEvenDigitSumYear

// Escribe una función llamada isEvenDigitSumYear que:
// Acepte un único argumento:
// El argumento de entrada debe ser de tipo string.
// El año puede tener un valor entre "1900" y "9999".
// Debe retornar un único valor de tipo booleano:
// Si la suma de los dígitos del año es un número par, retorna true.
// Si la suma de los dígitos es impar, retorna false.
// Ejemplos:
// input: "2020" → output: true (2+0+2+0 = 4, que es par)
// input: "1999" → output: false (1+9+9+9 = 28, que es par… ups, cambia a un ejemplo impar: "1998" → 1+9+9+8=27, impar → false)
// No olvides realizar los tests necesarios para comprobar tu función.

function isEvenDigitSumYear(year) {
  if (typeof year !== 'string') {
    return false;
  }
  const yearNum = Number(year);
  if (isNaN(yearNum) || yearNum < 1900 || yearNum > 9999) {
    return false;
  }

  let suma = 0;
  for (let i = 0; i < year.length; i++) {
    suma += Number(year[i]);
  }
  return suma % 2 === 0;
}
console.log(isEvenDigitSumYear('2030'));

// //Ejercicio: hasThreeDifferentDigits
// Crea una función llamada hasThreeDifferentDigits que:
// Reciba un único argumento:
// Debe ser un string
// Debe ser un año entre "1900" y "9999"
// Devuelva un booleano:
// true si el año tiene al menos 3 dígitos distintos
// false si no los tiene

function HasThreeDifferentDigits(numero) {
  if (typeof numero !== 'string') {
    return false;
  }

  const yearNum = Number(numero);

  if (isNaN(yearNum) || yearNum < 1900 || yearNum > 9999) {
    return false;
  }

  const uniqDigits = new Set(numero);
  return uniqDigits.size >= 3;
}

console.log(HasThreeDifferentDigits('2042'));

//Ejercicio: hasRepeatedDigits

// Crea una función llamada hasRepeatedDigits que:
// Reciba un único argumento:
// Debe ser un string
// Debe representar un número entre "1900" y "9999"
// Devuelva un booleano:
// true si al menos un dígito se repite
// false si todos los dígitos son distintos
// Ejemplos:
// "2020" → ✅ true (el 2 y el 0 se repiten)

function hasRepeatedDigits(year) {
  if (typeof year !== 'string') {
    return false;
  }

  const yearNum = Number(year);
  if (isNaN(yearNum) || yearNum < 1900 || yearNum > 9999) {
    return false;
  }

  const digitSet = new Set();

  for (let i = 0; i < year.length; i++) {
    if (digitSet.has(year[i])) {
      return true;
    }
    digitSet.add(year[i]);
  }
  return false;
}
