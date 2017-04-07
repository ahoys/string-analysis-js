// nodeunit tests/test.getAll.js
const params = ['key', 'func', 'preferredStringFormat', 'parameters', 'requiredParameters'];
const totalFunctions = Object.keys(require('../index')).length - 1;

// Tests --------------------------------------

const isFunction = (target) => {
  const getType = {};
  return target && getType.toString.call(target) === '[object Function]';
};

exports.all_functions_available = function (test) {
  const Obj = require('../functions/inc.func.getAll')();
  test.equal(Obj.length, totalFunctions);
  test.done();
};

exports.all_object_keys_available = function (test) {
  const Obj = require('../functions/inc.func.getAll')();
  let result;
  let explanation;
  Obj.forEach((item) => {
    result = true;
    explanation = [];
    if (Object.keys(item).length !== params.length) {
      result = false;
      explanation.push(`${item.key}: invalid count of parameters.`);
    }
    params.forEach((param) => {
      if (!(param in item)) {
        result = false;
        explanation.push(`${item.key}: missing param (${param}).`);
      }
    });
    if (!isFunction(item.func)) {
      result = false;
      explanation.push(`${item.key}: has no valid functions attached.`)
    }
    test.ok(result, explanation);
  });
  test.expect(Obj.length);
  test.done();
};
