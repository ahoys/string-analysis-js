// nodeunit tests/test.getPercentageOfShortStrings.js
const getPercentageOfShortStrings = require('../functions/inc.func.getPercentageOfShortStrings');
const strings = require('./strings.json')['getPercentageOfShortStrings'];

// Tests --------------------------------------

exports.all_strings_default_params = function (test) {
  strings.forEach((strArr) => {
    const result = getPercentageOfShortStrings(strArr[0]).toFixed(2);
    test.equal(result, strArr[1], strArr);
  });
  test.done();
};