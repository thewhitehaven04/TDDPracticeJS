const { reverse } = require('./../src/reverse');

it('Reverse: Happy path', () => {
  expect(reverse('lmao')).toEqual('oaml');
});

it('Reverse: Empty string', () => {
  expect(reverse('')).toEqual('');
});

it('Reverse: Palindrome', () => {
  expect( 
    reverse('racecar')
  ).toEqual('racecar');
});

it('Reverse: String with multiple spaces', () => {
  expect(reverse(' oooaa lll')).toEqual('lll aaooo ');
});

it('Reverse: Throws TypeError when passing in a non-string argument', () => {
  expect(() => reverse(10)).toThrow(TypeError);
});
