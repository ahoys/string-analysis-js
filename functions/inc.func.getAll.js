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
        parameters: {
          content: ['Array', 'string'],
          splitter: ['string']
        },
        requiredParameters: [true, false],
      },
      {
        key: 'getPercentageOfShortStrings',
        func: require('../index').getPercentageOfShortStrings,
        preferredStringFormat: 'Array',
        parameters: {
          content: ['Array', 'string'],
          splitter: ['string'],
          maxLength: ['number'],
        },
        requiredParameters: [true, false, false],
      },
      {
        key: 'getPercentageOfLongStrings',
        func: require('../index').getPercentageOfLongStrings,
        preferredStringFormat: 'Array',
        parameters: {
          content: ['Array', 'string'],
          splitter: ['string'],
          minLength: ['number'],
        },
        requiredParameters: [true, false, false],
      },
      {
        key: 'getPercentageOfRepetitiveChars',
        func: require('../index').getPercentageOfRepetitiveChars,
        preferredStringFormat: 'string',
        parameters: {
          content: ['string'],
          minChars: ['number'],
        },
        requiredParameters: [true, false],
      },
      {
        key: 'getPercentageOfUpperCaseChars',
        func: require('../index').getPercentageOfUpperCaseChars,
        preferredStringFormat: 'string',
        parameters: {
          content: ['string'],
          re: ['string'],
        },
        requiredParameters: [true, false],
      }
    ];
  } catch (e) {
    console.error(`Error [getAll]: ${e.message}`);
    return [];
  }
};
