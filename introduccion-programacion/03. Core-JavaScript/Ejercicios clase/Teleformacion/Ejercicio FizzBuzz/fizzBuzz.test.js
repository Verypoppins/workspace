let utils = require('./fizzBuzz.js');

test('fizzBuzz returns "fizz" when number is divisible by 3', () => {
  expect(utils.fizzBuzz(3)).toBe('Fizz');
  expect(utils.fizzBuzz(9)).toBe('Fizz');
  expect(utils.fizzBuzz(-3)).toBe('Fizz');
});

test('fizzBuzz returns "fizz" when number is divisible by 5', () => {
  expect(utils.fizzBuzz(5)).toBe('Buzz');
  expect(utils.fizzBuzz(10)).toBe('Buzz');
  expect(utils.fizzBuzz(-5)).toBe('Buzz');
});

test('fizzBuzz returns {number} when number is not divisible by 3 or 5', () => {
  expect(utils.fizzBuzz(7)).toBe('7');
  expect(utils.fizzBuzz(8)).toBe('8');
  expect(utils.fizzBuzz(-7)).toBe('-7');
});
