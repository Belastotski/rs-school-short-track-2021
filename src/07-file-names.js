/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(name) {
  // eslint-disable-next-line no-shadow
  name.forEach((name, i, arr) => {
    let k = 1;
    arr.forEach((val, j) => {
      // eslint-disable-next-line no-param-reassign
      if (name === val && i !== j) arr[j] += `(${k++})`;
    });
  });
  return name;
}

module.exports = renameFiles;
