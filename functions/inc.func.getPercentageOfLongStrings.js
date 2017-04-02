/**
 * Returns the percentage of long words in a string or an array of strings.
 * @param payload
 * @param splitter
 * @param minLength
 * @returns {number}
 */
const getPercentageOfLongStrings = (payload = [], splitter = ' ', minLength = 16) => {
  try {
    const parts = typeof payload === 'string'
      ? payload.split(splitter)
      : payload;
    return parts.filter(x => x.length >= minLength).length / (parts.length || 1);
  } catch (e) {
    console.error(`Error [getPercentageOfLongStrings]: ${e.message}`);
    return 0;
  }
};

module.exports = getPercentageOfLongStrings;
