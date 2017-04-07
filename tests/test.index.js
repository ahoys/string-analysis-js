// nodeunit tests/test.index.js
const totalFunctions = 5;

// Tests --------------------------------------

const isFunction = (target) => {
  const getType = {};
  return target && getType.toString.call(target) === '[object Function]';
};

exports.all_functions_available = function (test) {
  const Obj = require('../index');
  const result = Object.keys(Obj).length;
  test.equal(result, totalFunctions, result);
  test.done();
};

exports.all_keys_have_functions = function (test) {
  const Obj = require('../index');
  let result;
  let explanation;
  Object.keys(Obj).forEach((key) => {
    result = true;
    explanation = '';
    if (!isFunction(Obj[key])) {
      result = false;
      explanation = `${key} is not a function.`;
    }
    test.ok(result, explanation);
  });
  test.expect(totalFunctions);
  test.done();
};
