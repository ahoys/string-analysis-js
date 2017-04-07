/**
 * Returns the percentage of repetitive chars in a string.
 * @param content
 * @param minChars
 * @returns {number}
 */
module.exports = (content = '', minChars = 3) => {
  try {
    let sum = 0;
    let multiplier = 1;
    let prevChar = null;
    let pass = false;
    const len = content.length;
    for (let i = 0; i < len; ++i) {
      if (content[i] === prevChar) {
        multiplier = multiplier + 1;
        if (multiplier >= minChars || pass) {
          sum += multiplier;
          multiplier = 0;
          pass = true;
        }
      } else {
        multiplier = 1;
        pass = false;
      }
      prevChar = content[i];
    }
    return sum / (len || 1);
  } catch (e) {
    console.error(`Error [getPercentageOfRepetitiveChars]: ${e.message}`);
    return 0;
  }
};
