/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const tempArray = [...s2];
  const count = (sum, v) => {
    if (tempArray.findIndex((e) => e === v) !== -1) {
      tempArray.splice(tempArray.findIndex((e) => e === v), 1);
      return sum + 1;
    }
    return sum;
  };
  return [...s1].reduce(count, 0);
}

// console.log(getCommonCharacterCount('aabcc' ,'adcaa'));
module.exports = getCommonCharacterCount;
