/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const count = (line, col) => {
    const sq = [];
    // eslint-disable-next-line max-len
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (matrix[line + i] !== undefined
          && matrix[line + i][col + j] !== undefined
          && (i || j)) sq.push(matrix[line + i][col + j]);
      }
    }
    return sq.filter((v) => v).length;
  };
  return matrix.map((x, line) => x.map((y, col) => count(line, col)));
}

module.exports = minesweeper;
