// nodeunit tests/test.getPercentageOfRepetitiveStructure.js
const getPercentageOfRepetitiveStructure = require('../tools/inc.func.getPercentageOfRepetitiveStructure');
const strings = require('./strings.json')['getPercentageOfRepetitiveStructure'];

// Tests --------------------------------------

exports.all_strings_default_params = function (test) {
  strings.forEach((strArr) => {
    const result = getPercentageOfRepetitiveStructure(strArr[0]);
    test.equal(result, strArr[1], strArr);
  });
  test.done();
};