/**
 * Returns the percentage of UPPERCASE letters in a string.
 * @param {string} content String of interest.
 * @param {string} re Custom regex for detecting the uppercase letters.
 * @returns {number} Percentage of uppercase letters.
 */
const getPercentageOfUpperCaseChars = (content = '', re = /^[A-ZÄÖÅÆØ]+$/) => {
  try {
    const len = content.length;
    if (!len) return 0;
    let c = 0;
    for (i = 0; i < len; i++) {
      if (content[i].match(re)) {
        c += 1;
      }
    }
    return c / len;
  } catch (e) {
    console.error(`Error [getPercentageOfUpperCaseChars]: ${e.message}`);
    return 0;
  }
};

module.exports = getPercentageOfUpperCaseChars;
