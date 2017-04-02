/**
 * Returns the percentage of short words in a string or an array of strings.
 * @param payload
 * @param splitter
 * @param maxLength
 * @returns {number}
 */
const getPercentageOfShortStrings = (payload = [], splitter = ' ', maxLength = 3) => {
  try {
    const parts = typeof payload === 'string'
      ? payload.split(splitter)
      : payload;
    const shortWords = parts.filter(x => x.length <= maxLength);
    return shortWords.length / (parts.length || 1);
  } catch (e) {
    console.error(`Error [getPercentageOfShortStrings]: ${e.message}`);
    return 0;
  }
};

module.exports = getPercentageOfShortStrings;
