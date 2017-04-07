/**
 * These are all the tools this module publicly serves.
 * See README.md for documentation.
 */
module.exports = {
  getPercentageOfRepetitiveStructure: require('./functions/inc.func.getPercentageOfRepetitiveStructure'),
  getPercentageOfShortStrings: require('./functions/inc.func.getPercentageOfShortStrings'),
  getPercentageOfLongStrings: require('./functions/inc.func.getPercentageOfLongStrings'),
  getPercentageOfRepetitiveChars: require('./functions/inc.func.getPercentageOfRepetitiveChars'),
  getAll: this.getAll,
}