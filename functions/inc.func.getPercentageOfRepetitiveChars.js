/**
 * Returns the percentage of repetitive chars in a string.
 * @param content
 * @param minChars
 * @returns {number}
 */
module.exports = (content = '', minChars = 3) => {
  try {
    let sum = 0;
    let multiplier = 0;
    let prevChar = null;
    const len = content.length;
    for (let i = 0; i < len; ++i) {
      if (content[i] === prevChar) {
        // Make sure the first char will be counted too.
        multiplier += multiplier < 1 ? 2 : 1;
        if (multiplier >= minChars) {
          sum += multiplier;
          multiplier = 0;
        }
      }
      prevChar = content[i];
    }
    return sum / (len || 1);
  } catch (e) {
    console.error(`Error [getPercentageOfRepetitiveChars]: ${e.message}`);
    return 0;
  }
};
