// nodeunit tests/test.util.js
const index = require('../index');

// Tests --------------------------------------

exports.all_functions_available = function (test) {
  let result = Object.keys(index).length;
  test.equal(result, 4, result);
  test.done();
};