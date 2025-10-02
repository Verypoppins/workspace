const { createMultiples } = require('./Ejercicio_0_Vera_Rubio.js');

test('createMultiples(2, 4) should return [4, 8]', () => {
  expect(createMultiples(2, 4)).toEqual([4, 8]); // Prueba que la función devuelve los primeros 2 múltiplos de 4
  expect(createMultiples(3, 5)).toEqual([5, 10, 15]); // Prueba que la función devuelve los primeros 3 múltiplos de 5
  expect(createMultiples(5, 3)).toEqual([3, 6, 9, 12, 15]); // Prueba que la función devuelve los primeros 5 múltiplos de 3 
  expect(createMultiples(0, 10)).toEqual([]); // Prueba que la función devuelve un array vacío cuando el tamaño es 0
  expect(createMultiples(1, 7)).toEqual([7]); // Prueba que la función devuelve el primer múltiplo de 7
  expect(createMultiples(3, -4)).toEqual([-4, -8, -12]); // Prueba que la función trabaja con números negativos correctamente
  expect(createMultiples(4, 0)).toEqual([0, 0, 0, 0]); // Prueba que la función devuelve ceros cuando el múltiplo es 0
});
