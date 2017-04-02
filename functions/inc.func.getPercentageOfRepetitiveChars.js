const isValidType = require('../util/inc.func.isValidType');

/**
 * Returns the percentage of repetitive chars in a string.
 * @param payload
 * @param minChars
 * @returns {number}
 */
const getPercentageOfRepetitiveChars = (payload = '', minChars = 3) => {
  try {
    if (!isValidType([payload, minChars], ['string', 'number'])) {
      console.error(
        'Error [getPercentageOfRepetitiveChars]: Invalid parameters'
      );
      return 0;
    }
    let sum = 0;
    let multiplier = 0;
    let prevChar = null;
    for (let i = 0; i < payload.length; i++) {
      const char = payload[i];
      if (char === prevChar) {
        // Make sure the first char will be counted too.
        multiplier += multiplier < 1 ? 2 : 1;
        if (multiplier >= minChars) {
          sum += multiplier;
          multiplier = 0;
        }
      }
      prevChar = char;
    }
    return sum / (payload.length || 1);
  } catch (e) {
    console.error(`Error [getPercentageOfRepetitiveChars]: ${e.message}`);
    return 0;
  }
};

module.exports = getPercentageOfRepetitiveChars;
