/* Matrix Rotate
Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it. For instance, given [[1, 2], [3, 4]], which looks like this:

1	2
3	4
You should return [[3, 1], [4, 2]], which looks like this:

3	1
4	2
*/

function rotate(matrix) {
let mat=matrix[0].map((val, index) => matrix.map(row => row[index]).reverse())
  return mat;
}
