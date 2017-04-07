// nodeunit tests/test.getPercentageOfRepetitiveStructure.js
const strings = require('./strings.json')['getPercentageOfRepetitiveStructure'];

// Tests --------------------------------------

exports.all_strings_default_params = function (test) {
  const Obj = require('../functions/inc.func.getPercentageOfRepetitiveStructure');
  strings.forEach((strArr) => {
    const result = Obj(strArr[0]).toFixed(2);
    test.equal(result, strArr[1], strArr);
  });
  test.done();
};

exports.invalid_params = function (test) {
  const Obj = require('../functions/inc.func.getPercentageOfRepetitiveStructure');
  let result;
  result = Obj({});
  test.equal(result, 0, result);
  result = Obj('test test', {});
  test.equal(result, 0, result);
  test.expect(2);
  test.done();
};
