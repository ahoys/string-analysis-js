// nodeunit tests/test.getPercentageOfRepetitiveStructure.js
const getPercentageOfRepetitiveStructure = require('../tools/inc.func.getPercentageOfRepetitiveStructure');
const strings = require('./strings.json')['getPercentageOfRepetitiveStructure'];

// Tests --------------------------------------

exports.valid_strings = function (test) {
  strings['valid'].forEach((testItem) => {
    const result = getPercentageOfRepetitiveStructure(testItem[0]);
    test.equal(result, testItem[1]);
  });
  test.done();
};

exports.invalid_strings = function (test) {
  strings['invalid'].forEach((testItem) => {
    const result = getPercentageOfRepetitiveStructure(testItem[0]);
    test.equal(result, testItem[1], testItem);
  });
  test.done();
};