// nodeunit tests/test.index.js
const Index = require('../index');
const totalFunctions = 5;

// Tests --------------------------------------

const isFunction = (target) => {
  const getType = {};
  return target && getType.toString.call(target) === '[object Function]';
};

exports.all_functions_available = function (test) {
  const result = Object.keys(Index).length;
  test.equal(result, totalFunctions, result);
  test.done();
};

exports.all_keys_have_functions = function (test) {
  let result;
  let explanation;
  Object.keys(Index).forEach((key) => {
    result = true;
    explanation = '';
    if (!isFunction(Index[key])) {
      result = false;
      explanation = `${key} is not a function.`;
    }
    test.ok(result, explanation);
  });
  test.expect(totalFunctions);
  test.done();
};