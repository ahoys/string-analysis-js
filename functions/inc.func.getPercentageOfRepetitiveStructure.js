/**
 * Returns the percentage of repetitive structure in a string or an array of strings.
 * @param payload
 * @param splitter
 * @returns {number}
 */
const getPercentageOfRepetitiveStructure = (payload = [], splitter = ' ') => {
  try {
    const parts = typeof payload === 'string'
      ? payload.split(splitter)
      : payload;
    const totalCount = parts.length;
    if (totalCount < 1) return 0;
    const strTable = {};
    // First we'll measure distances between the same words.
    parts.forEach((str, i) => {
      if (strTable[str] === undefined) {
        // Initialization of a word.
        // The word can't have a distance as it is the only one.
        strTable[str] = {
          indexes: [i],
          distanceToPrevious: [],
          sameDistanceAsPreviousCount: 0,
        };
      } else {
        // Index of the previous word for a measurement.
        const prevIndex = strTable[str]
          .indexes[strTable[str].indexes.length - 1];
        // The distance of the previous word and its' parent.
        const prevDistance = strTable[str]
          .distanceToPrevious[strTable[str]
          .distanceToPrevious.length - 1];
        // If the current distance is the same as the previous distance,
        // we have a pattern.
        const distance = i - prevIndex;
        strTable[str].distanceToPrevious.push(distance);
        if (distance === prevDistance) {
          // Save how many occurrences there were so that
          // we can calculate a percentage that tells us how big part
          // of this word's usage was just repetition.
          strTable[str].sameDistanceAsPreviousCount++;
        }
        strTable[str].indexes.push(i);
      }
    });
    // Next we'll combine the results to find out the sentence level picture of the
    // patterns.
    let sum = 0;
    let count = 0;
    Object.keys(strTable).forEach((key) => {
      const distanceCount = strTable[key].distanceToPrevious.length - 1;
      sum += strTable[key].sameDistanceAsPreviousCount / (distanceCount || 1);
      ++count;
    });
    return sum / (count || 1);
  } catch (e) {
    console.error(`Error [getPercentageOfRepetitiveStructure]: ${e.message}`);
    return 0;
  }
};

module.exports = getPercentageOfRepetitiveStructure;
