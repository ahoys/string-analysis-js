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
        function: require('../index').getPercentageOfRepetitiveStructure,
        preferredStringFormat: 'Array',
        parameters: [['Array', 'string'], 'string'],
      },
      {
        key: 'getPercentageOfShortStrings',
        function: require('../index').getPercentageOfShortStrings,
        preferredStringFormat: 'Array',
        parameters: [['Array', 'string'], 'string', 'number'],
      },
      {
        key: 'getPercentageOfLongStrings',
        function: require('../index').getPercentageOfLongStrings,
        preferredStringFormat: 'Array',
        parameters: [['Array', 'string'], 'string', 'number'],
      },
      {
        key: 'getPercentageOfRepetitiveChars',
        function: require('../index').getPercentageOfRepetitiveChars,
        preferredStringFormat: 'string',
        parameters: ['string', 'number'],
      }
    ];
  } catch (e) {
    console.error(`Error [getAll]: ${e.message}`);
    return [];
  }
};
