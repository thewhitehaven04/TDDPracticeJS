/**
 * @typedef {{
 * average: ?Number,
 * min: ?Number;
 * max: ?Number;
 * length: Number
 * }} ArrayPropertiesDto
 */

/**
 * @param {Array<Number>} arr
 * @returns {ArrayPropertiesDto}
 */
const analyzeArray = (arr) => {
  const filtered = arr.filter((num) => num !== undefined);
  if (filtered.some(value => isNaN(value))) 
    throw new TypeError('The array contains non-number values other than undefined (sparse array)');

  let max = Math.max(...filtered);
  let min = Math.min(...filtered);
  let average = filtered.reduce((prev, curr) => prev + curr, 0) / filtered.length; 
  return {
    max: (max === -Infinity) ? null : max,
    min: (min === Infinity) ? null : min,
    average: isNaN(average) ? null : average,
    length: arr.length ?? 0,
  };
};

module.exports = { analyzeArray };
