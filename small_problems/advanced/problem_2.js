/* Problem 2

Problem:
Input: 2 dimensional array.
Output: 2 dimensional array with x and y axis flipped.
Rules:
  Do no modify the passed in array. (create a new array)

Questions:
Will the input always be a 2 dimensional array?
Will all elements of the array be the same length?
Will the matrix always be "square"?
Will the input every have anything other than numbers?
  Can the arrays be sparse?
Should i only return the array? Or output it to the console as well?

Examples:
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

Data Strucutre:
Arrays

Algorithm:
initialize a new results array

loop over each element in the passed in array with index
  if outer index is 0
    looper over each element push an new array to the results array that contains the current element
  if outer index is not 0
    loop over each element with index of the sub array, pushing it to the sub array element at current iteration index.

return array

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
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// LS Solution

function transpose(matrix) {
  const transposed = [];
  const newRowsCount = matrix[0].length;

  for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
    transposed.push([]);
  }

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
      transposed[colIdx].push(matrix[rowIdx][colIdx]);
    }
  }

  return transposed;
}