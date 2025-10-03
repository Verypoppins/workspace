//"Crea una función llamada “createMultiples” que tenga dos parámetros:
//- Primer parámetro, un valor numérico que indice el tamaño de elementos del array
//- Segundo parámetro, número del cuál se van a obtener los múltiplos.
//La función debe devolver un array con el tamaño indicado que contanga los primeros múltiplos de ese número. Por ejemplo: (2, 4) => [4, 8]."
// ---------------------------------------------------
//Definimos la función con los dos parámetros
function createMultiples(tamaño, número) {
  let resultado = []; //Creamos un array vacío donde se guardarán los múltiplos
  for (let i = 1; i <= tamaño; i++) {
    // Bucle que itera desde 1 hasta el tamaño que le indiquemos
    resultado.push(i * número); //Calcula el múltiplo y lo añade al array resultado
  }
  return resultado; //Devuelve el array con los múltiplos
}
//console.log(createMultiples(2, 4)); //sale: [ 4, 8 ] ejemplo para probar que funciona

//Forma con la que exportamos nuestra función
module.exports = { createMultiples };
