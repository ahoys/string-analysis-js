// nodeunit tests/test.util.js
const isValidType = require('../util/inc.func.isValidType');

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
    [[[0, 1, 2]], ['array']],
  ];
  templates.forEach((params) => {
    const result = isValidType(params[0], params[1]);
    test.equal(result, true, params);
  });
  test.done();
};

exports.isInvalidType = function (test) {
  const templates = [
    [[0], ['string']],
    [[undefined], ['string']],
    [[['nesting']], ['string']],
    [[], ['string']],
    [['test'], []],
    [[0, 1], [['string', 'array'], 'number']],
  ];
  templates.forEach((params) => {
    const result = isValidType(params[0], params[1]);
    test.equal(result, false, params);
  });
  test.done();
};