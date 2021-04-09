/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';
  let i = 1;
  // eslint-disable-next-line no-unused-vars
  let res = '';
  [...str].reduce((tmp, v) => {
    if (tmp === v) i += 1;
    else {
      res += `${i !== 1 ? i : ''}${tmp}`;
      i = 1;
    }
    return v;
  });
  return `${res}${(i !== 1 ? i : '')}${str[str.length - 1]}`;
}
module.exports = encodeLine;
