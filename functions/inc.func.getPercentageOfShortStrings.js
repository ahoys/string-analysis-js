/**
 * Returns the percentage of short words in a string or an array of strings.
 * @param content
 * @param splitter
 * @param maxLength
 * @returns {number}
 */
module.exports = (content = [], splitter = ' ', maxLength = 3) => {
  try {
    const parts = typeof content === 'string'
      ? content.split(splitter)
      : content;
    const shortWords = parts.filter(x => x.length <= maxLength);
    return shortWords.length / (parts.length || 1);
  } catch (e) {
    console.error(`Error [getPercentageOfShortStrings]: ${e.message}`);
    return 0;
  }
};
