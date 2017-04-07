// nodeunit tests/test.getAll.js
const getAll = require('../functions/inc.func.getAll');
const params = ['id', 'function', 'preferredStringFormat', 'parameters'];

// Tests --------------------------------------

exports.all_functions_available = function (test) {
  const obj = getAll();
  const result = Object.keys(obj).length;
  test.equal(result, 4);
  test.done();
};

exports.all_object_keys_available = function (test) {
  const obj = getAll();
  let result;
  let explanation;
  Object.keys(obj).forEach((key) => {
      result = true;
      explanation = [];
      const thisItem = obj[key];
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
  test.expect(Object.keys(obj).length);
  test.done();
};