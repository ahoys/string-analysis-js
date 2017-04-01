// nodeunit tests/test.getPercentageOfShortWords.js
const getPercentageOfShortStrings = require('../functions/inc.func.getPercentageOfShortStrings');
const strings = require('./strings.json')['getPercentageOfShortStrings'];

// Tests --------------------------------------

exports.all_strings_default_params = function (test) {
  strings.forEach((strArr) => {
    const result = getPercentageOfShortStrings(strArr[0]);
    test.equal(result, strArr[1], strArr);
  });
  test.done();
};