//Escribe una función llamada isAdult que:

//Acepte un único argumento:
//El argumento de entrada es de tipo string.
//El valor representa la edad de una persona y debe estar entre "0" y "120".
//Debe retornar un booleano:
//true si la persona es mayor o igual a 18 años.
//false si la persona es menor de 18 años o si el valor no es válido.

function isAdult(age) {
    // Verificar que el argumento es de tipo string
    if (typeof age !== 'string') {
        return false;
    }
    // Convertir la edad a número
    const ageNum = Number(age);
    if (isNaN(ageNum) || ageNum < 0 || ageNum > 120) {
        return false; // Edad no válida
    }
    return ageNum >= 18; // Retorna true si es mayor o igual a 18, de lo contrario false
}

// Exporta la función
module.exports = { isAdult };

// ------------------------------------------------------------------------------------

//Escribe una función llamada isValidMonth que:

//Acepte un único argumento:
//El argumento de entrada es de tipo string.
//El valor representa un mes del año como número y debe estar entre "1" y "12".
//Debe retornar un booleano:
//true si el mes es válido.
//false si no es válido o el valor no es un número.

function isValidMonth (month) {
    if (typeof month !== 'string')
        return false;

    const monthNum = Number(month);
    if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
        return false;
    }
    return true;
}