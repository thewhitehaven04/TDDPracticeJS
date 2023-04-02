const { capitalize } = require('./../src/capitalize');

it('Capitalize: Happy path', () => {
  expect(capitalize('lmao')).toEqual('Lmao');
});

it('Capitalize: Empty string', () => {
  expect(() => capitalize('')).toThrowError();
});

it('Capitalize: Throwing error with description', () => {
  expect(() => capitalize('')).toThrowError(/.*type$/);
});