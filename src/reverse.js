const reverse = (/** @type {String} */ str) => {
  if (typeof str === 'string') {
    const reverted = Array.from(str).reverse();
    return reverted.join('');
  }
  throw new TypeError('This function only supports objects of type String');
};

module.exports = {
  reverse
}