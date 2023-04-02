const { caesarCipher } = require("../src/caesarCipher")

it('Caesar cipher with positive shift', () => {
  expect(caesarCipher('abc', 3)).toEqual('def');
})

it('Caesar cipher with negative shift', () => {
  expect(caesarCipher('bdf', -1)).toEqual('ace');
})

it('Caesar cipher with shift of higher than 26', () => {
  expect(caesarCipher('abc', 28)).toEqual('cde');
})

it('Caesar cipher with whitespaces', () => {
  expect(caesarCipher('a b c', 2)).toEqual('c d e');
})

it('Caesar with punctuation', () => {
  expect(caesarCipher('a,bc', 3)).toEqual('d,ef')
})

it('Caesar with uppercase', () => {
  expect(caesarCipher('ABC', 1)).toEqual('BCD');
})

it('Caesar with uppercase wrapping', () => {
  expect(caesarCipher('ABC', 30)).toEqual('EFG');
})