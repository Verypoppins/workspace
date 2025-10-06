// TEORÍA OBJETOS

//Ejercicio Objetos:
//Tenemos una función que recibe dos parámetros. name y subs. Haz que la función devuelva un objeto con la siguiente información:
//name con el valor del parámetro name
//subscribers con el valor del parámetro subs
//hash, con el valor de la longitud del string name multiplicado por el parámetro subs
//Un método getStatus que devuelva el texto El canal de <name> tiene <subs> suscriptores. Por ejemplo, para name = 'Dani' y subs = 100, el método getStatus devolvería El canal de Dani tiene 100 suscriptores.
//¡Ojo! El método getStatus debe devolver el texto, NO imprimirlo por consola.

function createObject(name, subs) {
  return {
    name: name,
    subscribers: subs,
    hash: name.length * subs,

    getStatus: function () {
      return `El canal de ${name} tiene ${subs} suscriptores`;
    },
  };
}

//---------------------------------------------------
//Tienes una función que recibe un objeto como parámetro. La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.
//Por ejemplo, para el objeto { a: true, b: 42, c: false } la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.

function getKeysOfBooleanValues(obj) {
  let result = [];
  let entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i++) {
    if (typeof entries[i][1] == 'boolean') {
      result.push(entries[i][0]);
    }
  }
  return result;
}

//---------------------------------------------------
//Hacer ejercicio 1.7 y 1.8 en casa si podemos

//Ejercicio 1.9:
//Crea una clase llamada Circle que tenga como entrada el radio en el
//constructor. Debería tener dos métodos, uno para calcular el perímetro
//(get_perimeter) y otro para calcular el área (get_area). También debería
//poder calcular el volumen del cilindro que quedaría dada una altura
//(get_volume_by_height).

class Circle {
  constructor(radio) {
    this.radio = radio;
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radio;
  }

  calculateArea() {
    return Math.PI * this.radio * this.radio;
  }

  calculateVolumeByHeight(altura) {
    return this.calculateArea() * altura;
  }
}
