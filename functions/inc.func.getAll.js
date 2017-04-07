const Index = require('../index');

/**
 * Returns all the available tools.
 * Also additional infomation about the functions is provided.
 * @returns {object}
 */
module.exports = () => {
  try {
    return {
      getPercentageOfRepetitiveStructure: {
        id: 'getPercentageOfRepetitiveStructure',
        function: Index.getPercentageOfRepetitiveStructure,
        preferredStringFormat: 'array',
        parameters: [['array', 'string'], 'string'],
      },
      getPercentageOfShortStrings: {
        id: 'getPercentageOfShortStrings',
        function: Index.getPercentageOfShortStrings,
        preferredStringFormat: 'array',
        parameters: [['array', 'string'], 'string', 'number'],
      },
      getPercentageOfLongStrings: {
        id: 'getPercentageOfLongStrings',
        function: Index.getPercentageOfLongStrings,
        preferredStringFormat: 'array',
        parameters: [['array', 'string'], 'string', 'number'],
      },
      getPercentageOfRepetitiveChars: {
        id: 'getPercentageOfRepetitiveChars',
        function: Index.getPercentageOfRepetitiveChars,
        preferredStringFormat: 'string',
        parameters: ['string', 'number'],
      },
    }
  } catch (e) {
    console.error(`Error [getAll]: ${e.message}`);
    return {};
  }
};
