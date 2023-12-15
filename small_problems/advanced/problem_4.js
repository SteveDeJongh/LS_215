/*
Problem 4

Problem:
Input: 2 dimensional array
Output: 2 dimensional array with the contents rotated 90 degrees
Rules:
  Element in row 0 and col 0 moved to row 0 and last col
  element in last row and col 0 moved to row 0 and col 0;

Question:
Will the inptu always be a multi dimensional array?
will the input arrays be sparse?

Examples:
const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

Data structure:
Arrays

Algorithm:
initialize an empty array for result
push input[0].lengths number of empty arrays into the results array.

reverse the input array

map over each element in result array tracking index as (oidx)
  initialize temp to hold the array returned to each map iteration.
  loop over elements in reverse input array
    adding each element of that array at oidx to the temp array
  return teh temp array as the value map.

return the result array.

*/

function rotate90(input) {
  let resLength = input[0].length;
  let result = new Array(resLength).fill([]);
  
  let clone = input.slice(0).reverse();

  result = result.map((_, oidx) => {
    let temp = [];
    clone.forEach(el => {
      temp.push(el[oidx]);
    })
    return temp;
  })

  return result;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], 
                              //  [1, 7], 
                              //  [0, 4],
                              //  [8, 2]]
console.log(rotate90(rotate90(matrix2))); // [[ 8, 0, 1, 5 ],
                                          //  [ 2, 4, 7, 3 ] ]

console.log(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

// LS Solution

function rotate90(matrix) {
  const rotated = [];
  const newRowsCount = matrix[0].length;

  for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
    rotated.push([]);
  }

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
      rotated[colIdx].push(matrix[rowIdx][colIdx]);
    }
  }

  for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
    rotated[rowIdx].reverse();
  }

  return rotated;
}