/**
 * Extends the basic typeof.
 * @param target
 * @returns {*}
 */
const getTypeOf = (target) => {
  if (target === undefined) return 'undefined';
  const type = typeof target;
  if (type === 'object') {
    // Either an array or an object.
    return target.constructor === Array ? 'array' : 'object';
  } else {
    // Something else.
    return type;
  }
};

/**
 * Returns true if the given arguments are valid.
 * @param params
 * @param allowedTypes
 * @returns {boolean}
 */
const isValidType = (params = [], allowedTypes) => {
  const BreakException = {};
  try {
    if (
      params === undefined ||
      params.constructor !== Array ||
      params.length < 1
    ) {
      // No params given.
      return false;
    }
    if (
      allowedTypes === undefined ||
      allowedTypes.constructor !== Array ||
      allowedTypes.length < 1
    ) {
      // No allowed types given.
      return false;
    }
    // Validate types.
    allowedTypes.forEach((type, i) => {
      if (type.constructor === Array) {
        // Nested types.
        type.forEach((subType, r) => {
          if (typeof subType !== 'string') {
            allowedTypes[i][r] = getTypeOf(subType);
          }
        });
      } else if (typeof type !== 'string') {
        allowedTypes[i] = getTypeOf(type);
      }
    });
    // Start validation.
    params.forEach((param, i) => {
      const thisType = getTypeOf(param);
      const thisAllowedType = allowedTypes[i];
      if (thisAllowedType.constructor === Array) {
        // Multi choices
        if (thisAllowedType.indexOf(thisType) < 0) throw BreakException;
      } else {
        // Single choices
        if (thisType !== thisAllowedType) throw BreakException;
      }
    });
    return true;
  } catch (e) {
    // The function or the validation has failed.
    return false;
  }
};

module.exports = isValidType;
