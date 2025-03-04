/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  domains.forEach((value) => value.split('.').reverse().forEach((el, i, arr) => {
    let prop = '';
    for (let j = 0; j <= i; j++) { prop += `.${arr[j]}`; }
    res[prop] = res[prop] ? res[prop] + 1 : 1;
  }));
  return res;
}
module.exports = getDNSStats;
