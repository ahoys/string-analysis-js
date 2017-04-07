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
        preferredStringFormat: 'array',
        parameters: [['array', 'string'], 'string'],
      },
      {
        key: 'getPercentageOfShortStrings',
        function: require('../index').getPercentageOfShortStrings,
        preferredStringFormat: 'array',
        parameters: [['array', 'string'], 'string', 'number'],
      },
      {
        key: 'getPercentageOfLongStrings',
        function: require('../index').getPercentageOfLongStrings,
        preferredStringFormat: 'array',
        parameters: [['array', 'string'], 'string', 'number'],
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
