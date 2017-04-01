// nodeunit tests/test.getPercentageOfLongStrings.js
const getPercentageOfLongStrings = require('../functions/inc.func.getPercentageOfLongStrings');
const strings = require('./strings.json')['getPercentageOfLongStrings'];

// Tests --------------------------------------

exports.all_strings_default_params = function (test) {
  strings.forEach((strArr) => {
    const result = getPercentageOfLongStrings(strArr[0]);
    test.equal(result, strArr[1], strArr);
  });
  test.done();
};