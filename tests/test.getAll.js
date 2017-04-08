// nodeunit tests/test.getAll.js
const keys = ['key', 'func', 'preferredStringFormat', 'parameters', 'requiredParameters'];
const keyTypes = {
  key: 'string',
  func: 'Function',
  preferredStringFormat: 'string',
  parameters: 'object',
  requiredParameters: Array,
};
const functionCount = Object.keys(require('../index')).length - 1;

// Tests --------------------------------------

/**
 * Returns whether something is a function or not.
 * @param target
 * @returns {*|boolean}
 */
const isFunction = (target) => {
  const getType = {};
  return target && getType.toString.call(target) === '[object Function]';
};

/**
 * Tests whether all the functions are available.
 * @param test
 */
exports.all_functions_available = function (test) {
  const Obj = require('../functions/inc.func.getAll')();
  test.equal(Obj.length, functionCount);
  test.done();
};

/**
 * Tests whether all the keys are available and correct.
 * @param test
 */
exports.all_object_keys_available = function (test) {
  const Obj = require('../functions/inc.func.getAll')();
  Obj.forEach((item) => {
    test.equal(Object.keys(item).length, keys.length, `Testing key count for ${item.key}.`);
    test.equal(Object.keys(item).filter(x => keys.indexOf(x) < 0).length, 0, `Looking for invalid keys in ${item.key}`);
  });
  test.done();
};

exports.has_valid_key_types = function (test) {
  const Obj = require('../functions/inc.func.getAll')();
  Obj.forEach((item) => {
    Object.keys(keyTypes).forEach((key) => {
      const correctType = keyTypes[key];
      if (correctType === Array) {
        test.equal(item[key].constructor, correctType, `Testing correct key type for ${item.key}, ${key}`);
      } else if (correctType === 'Function') {
        test.ok(
          isFunction(item[key]),
          `Testing correct key type for ${item.key}, ${key}`
        );
      } else {
        test.equal(typeof item[key], correctType, `Testing correct key type for ${item.key}, ${key}`);
      }
    });
  });
  test.done();
};

/**
 * Tests whether all getAll objects have a
 * valid function attached into them that returns a number.
 * @param test
 */
exports.has_number_returning_func = function (test) {
  const Obj = require('../functions/inc.func.getAll')();
  Obj.forEach((item) => {
    test.equal(
      typeof item.func('test'),
      'number',
      `${item.key} not valid func return type.`
    );
  });
  test.done();
};

/**
 * Tests whether all requiredParameters are boolean.
 * @param test
 */
exports.has_valid_requiredParameters = function (test) {
  const Obj = require('../functions/inc.func.getAll')();
  Obj.forEach((item) => {
    test.equal(item.requiredParameters.filter(x => typeof x !== 'boolean').length, 0, `${item.key} requiredParameters include invalid types.`);
  });
  test.done();
};