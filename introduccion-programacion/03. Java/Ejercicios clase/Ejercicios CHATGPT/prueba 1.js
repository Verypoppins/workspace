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

//
//Escribe una función llamada isValidScore que:
//Acepte un único argumento:
//El argumento de entrada debe ser de tipo string.
//Representa la puntuación de un examen y debe estar entre "0" y "100".
//Debe retornar un booleano:
//true si la puntuación es válida (entre 0 y 100).
//false si no es válida o el valor no es un número.

function isValidScore (examen) {
    if (typeof examen !== 'string')
        return false;

    const PuntuacionExamen = Number(examen);
    if (isNaN(PuntuacionExamen) || PuntuacionExamen < 0 || PuntuacionExamen > 100) {
        return false;
    }
    return true;
}

---------------------------------------------------------------------------------------

function isValidPassword(contraseña) {
    if (typeof contraseña !== 'string') {
        return false;
    }

    if (contraseña.length < 6 || contraseña.length > 12) {
        return false;
    }

    const mayusculas = /[A-Z]/.test(contraseña);
    if (!mayusculas) {
        return false;
    }
    const minusculas = /[a-z]/.test(contraseña);
    if (!minusculas) {
        return false; 
    }

    const numero = /[0-9]/.test(contraseña);
    if (!numero) {
        return false; 
    }

    return true;
}

console.log(isValidPassword('Holaquetal3');

-------------------------------------------------------

function isValidEmail(correo) {
    if (typeof correo !== 'string') {
        return false;
    }

    if (correo.trim() !== correo) {
        return false;
    }
    if (correo.split('@').length ! == 2) {
        return false; 
    }

    const despuesDe = correo.split('@')[1];
    if (!despuesDe.includes('.')) {
        return false;
    }
    return true;
}

------------------------------------------------------------

function isValidAge(edad) {
    if(typeof edad !== 'string') {
        return false; 
    }

    const edadValida = Number(edad);
    if(isNaN(edadValida) || edadValida <0 || edadValida > 120) {
        return false;
    }
    return true;
}

---------------------------------------------------------------

function isValidUsername(nombre) {
    if(typeof nombre !== 'string') {
        return false;
    }

    const caracteres = nombre.length;
    if(caracteres < 3 || caracteres > 15) {
        return false;
    }
    const soloLetrasYNumeros = /^[a-zA-Z0-9]+$/.test(nombre);
    if(!soloLetrasYNumeros) {
        return false;
    }

    return true;
}

----------------------------------------------------------------

function isValidTemperature(temperatura) {
    if (typeof temperatura !== 'string') {
        return false;
    }

    const valorTemperatura = Number(temperatura);
    if(isNaN(valorTemperatura) || valorTemperatura < -50 || valorTemperatura > 50) {
        return false;
    }
    
    return true;
}

---------------------------------------------------------------

function isValidPostalCode(codigoPostal) {
    if(typeof codigoPostal !== 'string') {
        return false;
        }
    
    if(codigoPostal.length !== 5) {
        return false;
    }

    const todoNumeros = /^[0-9]{5}$/.test(codigoPostal);
    if(!todoNumeros) {
        return false;
    }
    return true;
}

--------------------------------------------------------------