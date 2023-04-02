const { analyzeArray } = require("../src/analyzeArray")

it("Analyze: non-sparse, non-empty array of positive numbers", () => {
  expect(analyzeArray([1, 5, 2])).toEqual({
    min: 1,
    max: 5, 
    length: 3,
    average: 8 / 3
  })
})

it("Analyze: sparse array", () => {
  expect(analyzeArray([1, , 5, 2])).toEqual({
    min: 1,
    max: 5, 
    length: 4,
    average: 8 / 3
  });
})

it("Analyze: array with a non-number values", () => {
  expect(() => { analyzeArray([1, 5, 'a']) }).toThrow(TypeError);
})

it("Analyze: empty array", () => {
  expect(analyzeArray([])).toEqual({
    min: null,
    max: null,
    length: 0,
    average: null
  })
})

it("Analyze: non-array argument", () => {
  expect(() => analyzeArray(2)).toThrow(TypeError);
})

it('Analyze: single-element array', () => {
  expect(analyzeArray([9])).toEqual({
    min: 9,
    max: 9,
    average: 9,
    length: 1
})})