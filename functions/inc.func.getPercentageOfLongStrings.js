/**
 * Returns the percentage of long words in a string or an array of strings.
 * @param content
 * @param splitter
 * @param minLength
 * @returns {number}
 */
module.exports = (content = [], splitter = ' ', minLength = 16) => {
  try {
    const parts = typeof content === 'string'
      ? content.split(splitter)
      : content;
    return parts.filter(x => x.length >= minLength).length / (parts.length || 1);
  } catch (e) {
    console.error(`Error [getPercentageOfLongStrings]: ${e.message}`);
    return 0;
  }
};
