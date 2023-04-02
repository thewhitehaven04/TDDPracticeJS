const calculator = {
  /**
   * @param {Number & String} x
   * @param {Number & String} y
   */
  add: function (x, y) {
    if (!isNaN(x) && !isNaN(y)) {
      return Number.parseFloat(x) + Number.parseFloat(y);
    }
    throw new TypeError(
      'Both parameters must be either numbers or number-convertible strings',
    );
  },
  /**
   * @param {Number & String} x
   * @param {Number & String} y
   */
  subtract: function (x, y) {
    if (!isNaN(x) && !isNaN(y)) {
      return Number.parseFloat(x) - Number.parseFloat(y);
    }
    throw new TypeError(
      'Both parameters must be either numbers or number-convertible strings',
    );
  },
  /**
   * @param {Number & String} x
   * @param {Number & String} y
   */
  multiply: function (x, y) {
    if (!isNaN(x) && !isNaN(y)) {
      return x * y;
    }
    throw new TypeError(
      'Both parameters must be either numbers or number-convertible strings',
    );
  },
  /**
   * @param {Number & String} x
   * @param {Number & String} y
   */
  divide: function (x, y) {
    if (!isNaN(x) && !isNaN(y)) {
      if (y !== 0) return x / y;
      throw new RangeError('Division by zero is not allowed.');
    }
    throw new TypeError(
      'This method only accepts instances of type Number of string-represented numbers',
    );
  },
};

module.exports = { calculator };
