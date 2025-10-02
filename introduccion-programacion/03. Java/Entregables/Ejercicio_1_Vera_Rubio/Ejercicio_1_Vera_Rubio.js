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
// Verificar que el argumento es de tipo string
if (typeof year !== 'string') {
    return false;
}
// Convertir el año a número
const yearNum = Number(year);
// Verificar que el año está en el rango permitido
if (isNaN(yearNum) || yearNum < 1900 || yearNum > 100000) {
    return false;
}
if ((yearNum % 4 === 0 && yearNum % 100 !== 0) || (yearNum % 400 === 0)) {
    return true; // Es un año bisiesto
} else {
    return false; // No es un año bisiesto
}
}

// Exporta la función
module.exports = { isLeapYear };