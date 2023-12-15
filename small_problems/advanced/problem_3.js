/* Problem 3

Transpose MxN

Problem:
Input: Array of 1 or more arrays containing 1 or more elements each
Output: Array of arrays
Rules:
  Input can now not be "square"

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

Data Structure:
Arrays

Algorithm:
No changes needed from previus solution.


*/

function transpose(input) {
  let result = [];

  input.forEach((arr, idx) => {
    if (idx === 0) {
      arr.forEach(el => result.push([el]));
    } else {
      arr.forEach((el, idx2) => result[idx2].push(el));
    }
  })

  return result;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
