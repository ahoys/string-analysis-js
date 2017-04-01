/**
 * Returns true if the given targets are valid.
 * @param targets
 * @param allowedTypes
 * @returns {boolean}
 */
const isValidType = (targets, allowedTypes) => {
  const BreakException = {};
  try {
    if (
      targets === undefined ||
      allowedTypes === undefined ||
      targets.constructor !== Array ||
      allowedTypes.constructor !== Array
    ) return false;
    targets.forEach((target, i) => {
      if (allowedTypes[i] !== undefined && allowedTypes[i].constructor === Array) {
        // allowedTypes construct: [["", ""], [""], ["", "", ""]];
        if (!allowedTypes[i].includes(typeof target)) throw BreakException;
      } else {
        // allowedTypes construct: ["", "", ""];
        if (!allowedTypes.includes(typeof target)) throw BreakException;
      }
    });
    return true;
  } catch (e) {
    if (e === BreakException) return false;
    console.log(`Error [HeuristicEnsemble][isValidType]: ${e.message}`);
    return false;
  }
};

module.exports = isValidType;