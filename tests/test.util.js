// nodeunit tests/test.util.js
const isValidType = require('../util');

// Tests --------------------------------------

exports.isValidType = function (test) {
  const templates = [
    [['test'], ['string']],
    [['test', 3], ['string', 'number']],
    [[3, 3], ['number', 'number']],
    [['test', 3, {}], [['string', 'object'], 'number', 'object']],
    [['test', 3], [['string', 'number'], ['number']]],
    [[['test']], ['array']],
    [[4], [4]],
    [[{}, 1, 'test'], [['string', {}], 4, 'string']],
  ];
  templates.forEach((params) => {
    const result = isValidType(params[0], params[1]);
    test.equal(result, true, params);
  });
  test.done();
};