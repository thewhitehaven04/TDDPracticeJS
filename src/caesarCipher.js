/**
 * @param {String} str
 * @param {Number} shift
 * @returns {String}
 */
const caesarCipher = (str, shift) => {
  const lowerBound = 'a'.charCodeAt(0);
  const upperBound = 'z'.charCodeAt(0);

  const lowerUppercaseBound = 'A'.charCodeAt(0);
  const upperUppercaseBound = 'Z'.charCodeAt(0);

    return Array.from(str)
    .map((char) => {
      const charCode = char.codePointAt(0);
      if (
        (charCode >= lowerBound && charCode <= upperBound) ||
        (charCode >= lowerUppercaseBound && charCode <= upperUppercaseBound)
      )
        return String.fromCharCode(charCode + (shift % 26));
      else return char;
    })
    .join('');
};

module.exports = {
  caesarCipher,
};
