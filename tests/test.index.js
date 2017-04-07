// nodeunit tests/test.index.js
const Index = require('../index');

// Tests --------------------------------------

exports.all_functions_available = function (test) {
  const result = Object.keys(Index).length;
  test.equal(result, 5, result);
  test.done();
};