// nodeunit tests/test.getPercentageOfUpperCaseChars.js
const strings = require('./strings.json')['getPercentageOfUpperCaseChars'];

// Tests --------------------------------------

exports.all_strings_default_params = function (test) {
  const Obj = require('../functions/inc.func.getPercentageOfUpperCaseChars');
  strings.forEach((strArr) => {
    const result = Obj(strArr[0]);
    test.equal(result, strArr[1], strArr);
  });
  test.done();
};
