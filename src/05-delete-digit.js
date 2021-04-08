/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return [...`${n}`].map((_, i, arr) => {
    const temp = [...arr];
    temp.splice(i, 1);
    return +temp.join('');
  }).sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
