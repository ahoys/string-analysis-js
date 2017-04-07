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
  let allFound = true;
  let missing = [];
  Object.keys(obj).forEach((key) => {
      const thisItem = obj[key];
      if (Object.keys(thisItem).length !== params.length) {
          allFound = false;
          missing.push(`${key}: invalid count of parameters.`);
      } else {
          params.forEach((param) => {
              if (!(param in thisItem)) {
                  allFound = false;
                  missing.push(`${key}: missing param (${param}).`);
              }
          });
      }
  });
  test.equal(allFound, true, missing);
  test.done();
};