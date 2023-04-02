const capitalize = (/** @type {String} */ str) => {
  if (str) {
    return str[0].toUpperCase().concat(str.slice(1));
  }
  throw new RangeError('The parameter is an empty string or other type');
};

module.exports = {
  capitalize
}