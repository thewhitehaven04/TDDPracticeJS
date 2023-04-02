const { calculator } = require('../src/calculator');

it('Calculator: addition of positive numbers', () => {
  expect(calculator.add(3, 2)).toEqual(5);
});

it('Calculator: addition of a positive number to a negative number', () => {
  expect(calculator.add(-5, 2)).toEqual(-3);
});

it('Calculator: addition of two negative numbers', () => {
  expect(calculator.add(-2, -5)).toEqual(-7);
});

it('Calculator: addition of a number and zero', () => {
  expect(calculator.add(7, 0)).toEqual(7);
});

it('Calculator: additional of two floating point numbers', () => {
  expect(calculator.add(7.1, 1.2)).toBeCloseTo(8.3, 2);
});

it('Calculator: addition of string-represented numbers', () => {
  expect(calculator.add('7.9', '1.6')).toBeCloseTo(9.5);
});

it('Calculator: handling non-numbers', () => {
  expect(() => calculator.add('lmao.9', '1.6')).toThrow(TypeError);
});

it('Calculator: subtraction of positive numbers', () => {
  expect(calculator.subtract(3, 2)).toEqual(1);
});

it('Calculator: subtraction of a positive number to a negative number', () => {
  expect(calculator.subtract(-5, 2)).toEqual(-7);
});

it('Calculator: subtraction of two negative numbers', () => {
  expect(calculator.subtract(-2, -5)).toEqual(3);
});

it('Calculator: subtraction of a number and zero', () => {
  expect(calculator.subtract(7, 0)).toEqual(7);
});

it('Calculator: subtraction of two floating point numbers', () => {
  expect(calculator.subtract(7.1, 1.2)).toBeCloseTo(5.9, 2);
});

it('Calculator: subtraction of string-represented numbers', () => {
  expect(calculator.subtract('7.9', '1.6')).toBeCloseTo(6.3);
});

it('Calculator: subtracting non-numbers', () => {
  expect(() => calculator.subtract('shaking my head', 'ayy lmo')).toThrow(
    TypeError,
  );
});

it('Calculator: multiplication of two positive numbers', () => {
  expect(calculator.multiply(5, 4)).toEqual(20);
});

it('Calculator: multiplication of a positive number by negative number', () => {
  expect(calculator.multiply(5, -2)).toEqual(-10);
});

it('Calculator: multiplication of two negative numbers', () => {
  expect(calculator.multiply(-3, -9)).toEqual(27);
});

it('Calculator: multiplication of a number by zero', () => {
  expect(calculator.multiply(8, 0)).toEqual(0);
});

it('Calculator: multiplication of a number by zero', () => {
  expect(calculator.multiply(8, 0)).toEqual(0);
});

it('Calculator: two zeroes multiplied', () => {
  expect(calculator.multiply(0, 0)).toEqual(0);
});

it('Caculator: multiplication of two string-represented numbers', () => {
  expect(calculator.multiply(7, '2')).toEqual(14);
});

it('Calculator: multiplication throws error upon attempt of multiplication of two non-number values', () => {
  expect(() => calculator.multiply('lmao', 'bruh')).toThrow(TypeError);
});

it('Calculator: division by zero throws RangeError', () => {
  expect(() => {
    calculator.divide(7, 0);
  }).toThrow(RangeError);
});

it('Calculator: division of a zero', () => {
  expect(calculator.divide(0, 9)).toEqual(0);
});

it('Calculator: division of two string-represented numbers', () => {
  expect(calculator.divide('7', '3.5')).toEqual(2);
});

it('Calculator: handling non-number values', () => {
  expect(() => calculator.divide('lmao', [])).toThrow(TypeError);
});

it('Calculator: division of two floating-point numbers', () => {
  expect(calculator.divide(7.9, 2.4)).toBeCloseTo(7.9 / 2.4);
})