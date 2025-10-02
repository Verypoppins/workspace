const { isLeapYear } = require('./Ejercicio_1_Vera_Rubio.js');

test('isLeapYear("1990") should return false', () => {
  expect(isLeapYear("1990")).toBe(false); // Prueba que 1990 no es un año bisiesto
  expect(isLeapYear("2000")).toBe(true); // Prueba que 2000 es un año bisiesto
  expect(isLeapYear("1900")).toBe(false); // Prueba que 1900 no es un año bisiesto
  expect(isLeapYear("2020")).toBe(true); // Prueba que 2020 es un año bisiesto
  expect(isLeapYear("2100")).toBe(false); // Prueba que 2100 no es un año bisiesto
  expect(isLeapYear("2400")).toBe(true); // Prueba que 2400 es un año bisiesto
  expect(isLeapYear("abcd")).toBe(false); // Prueba que una entrada no numérica retorna falso});
});