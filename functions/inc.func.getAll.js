/**
 * Returns all the available tools.
 * Also additional information about the tools is provided.
 * @returns {Array}
 */
module.exports = () => {
  try {
    return [
      {
        key: 'getPercentageOfRepetitiveStructure',
        func: require('../index').getPercentageOfRepetitiveStructure,
        preferredStringFormat: 'Array',
        parameters: [['Array', 'string'], 'string'],
      },
      {
        key: 'getPercentageOfShortStrings',
        func: require('../index').getPercentageOfShortStrings,
        preferredStringFormat: 'Array',
        parameters: [['Array', 'string'], 'string', 'number'],
      },
      {
        key: 'getPercentageOfLongStrings',
        func: require('../index').getPercentageOfLongStrings,
        preferredStringFormat: 'Array',
        parameters: [['Array', 'string'], 'string', 'number'],
      },
      {
        key: 'getPercentageOfRepetitiveChars',
        func: require('../index').getPercentageOfRepetitiveChars,
        preferredStringFormat: 'string',
        parameters: ['string', 'number'],
      }
    ];
  } catch (e) {
    console.error(`Error [getAll]: ${e.message}`);
    return [];
  }
};
