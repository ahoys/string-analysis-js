// nodeunit tests/test.getPercentageOfLongStrings.js
const getPercentageOfLongStrings = require('../functions/inc.func.getPercentageOfLongStrings');
const strings = require('./strings.json')['getPercentageOfLongStrings'];

// Tests --------------------------------------

exports.all_strings_default_params = function (test) {
  strings.forEach((strArr) => {
    const result = getPercentageOfLongStrings(strArr[0]).toFixed(2);
    test.equal(result, strArr[1], strArr);
  });
  test.done();
};

exports.invalid_params = function (test) {
  let result;
  result = getPercentageOfLongStrings({});
  test.equal(result, 0, result);
  result = getPercentageOfLongStrings('test test', {});
  test.equal(result, 0, result);
  result = getPercentageOfLongStrings('test test', ' ', {});
  test.equal(result, 0, result);
  test.expect(3);
  test.done();
};
