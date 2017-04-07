// nodeunit tests/test.getPercentageOfRepetitiveStructure.js
const getPercentageOfRepetitiveStructure = require('../functions/inc.func.getPercentageOfRepetitiveStructure');
const strings = require('./strings.json')['getPercentageOfRepetitiveStructure'];

// Tests --------------------------------------

exports.all_strings_default_params = function (test) {
  strings.forEach((strArr) => {
    const result = getPercentageOfRepetitiveStructure(strArr[0]).toFixed(2);
    test.equal(result, strArr[1], strArr);
  });
  test.done();
};

exports.invalid_params = function (test) {
  let result;
  result = getPercentageOfRepetitiveStructure({});
  test.equal(result, 0, result);
  result = getPercentageOfRepetitiveStructure('test test', {});
  test.equal(result, 0, result);
  test.expect(2);
  test.done();
};
