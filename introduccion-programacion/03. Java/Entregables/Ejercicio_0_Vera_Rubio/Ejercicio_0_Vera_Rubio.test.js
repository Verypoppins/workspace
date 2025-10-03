const { createMultiples } = require('./Ejercicio_0_Vera_Rubio.js');

test('createMultiples(2, 4) should return [4, 8]', () => {
  expect(createMultiples(2, 4)).toEqual([4, 8]); //Aquí probamos que la función devuelve los primeros 2 múltiplos de 4
  expect(createMultiples(3, 5)).toEqual([5, 10, 15]); //Aquí los primeros 3 de 5
  expect(createMultiples(5, 3)).toEqual([3, 6, 9, 12, 15]); //Aquí los primeros 5 de 3
  expect(createMultiples(0, 10)).toEqual([]); //Aquí nos tiene que devolver un array vacío cuando el tamaño sea 0
  expect(createMultiples(1, 7)).toEqual([7]); //Aquí el primer múltiplo de 7
  expect(createMultiples(3, -4)).toEqual([-4, -8, -12]); //Aquí prueba que trabaja bien con números negativos
  expect(createMultiples(4, 0)).toEqual([0, 0, 0, 0]); //Aquí que devuelve ceros cuando el múltiplo es 0
  expect(createMultiples('Hola', 1)).toEqual([]);
});
