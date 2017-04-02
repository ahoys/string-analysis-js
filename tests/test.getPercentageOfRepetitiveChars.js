// nodeunit tests/test.getPercentageOfRepetitiveChars.js
const getPercentageOfRepetitiveChars = require('../functions/inc.func.getPercentageOfRepetitiveChars');
const strings = require('./strings.json')['getPercentageOfRepetitiveChars'];

// Tests --------------------------------------

exports.all_strings_default_params = function (test) {
  strings.forEach((strArr) => {
    const result = getPercentageOfRepetitiveChars(strArr[0]).toFixed(2);
    test.equal(result, strArr[1], strArr);
  });
  test.done();
};