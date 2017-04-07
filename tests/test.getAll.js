// nodeunit tests/test.getAll.js
const params = ['id', 'function', 'preferredStringFormat', 'parameters'];
const totalFunctions = Object.keys(require('../index')).length - 1;

// Tests --------------------------------------

exports.all_functions_available = function (test) {
  const Obj = require('../functions/inc.func.getAll')();
  const result = Object.keys(Obj).length;
  test.equal(result, totalFunctions);
  test.done();
};

exports.all_object_keys_available = function (test) {
  const Obj = require('../functions/inc.func.getAll')();
  let result;
  let explanation;
  Object.keys(Obj).forEach((key) => {
      result = true;
      explanation = [];
      const thisItem = Obj[key];
      if (Object.keys(thisItem).length !== params.length) {
          result = false;
          explanation.push(`${key}: invalid count of parameters.`);
      } else {
          params.forEach((param) => {
              if (!(param in thisItem)) {
                  result = false;
                  explanation.push(`${key}: missing param (${param}).`);
              }
          });
      }
      test.ok(result, explanation);
  });
  test.expect(Object.keys(Obj).length);
  test.done();
};
