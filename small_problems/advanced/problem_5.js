/*
Problem 5

Problem:
Input: 2 sorted arrays
Output: 1 sorted array
Rules:
  Can not just combine arrays and sort that combination
  Arrays may be of unequal length
  do not mutate the input arrays

Questions:
  Can the arrays be made up of different types?
    ie: strings and numbers?
  Will we always be given two arrays?
  Can the arrays be sparse?
  Will the arrays ever be multi dimentional or contain objects?

Examples:

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

Data structure:
Arrays

Algorithm:
initialize a `result` array
initialize a clone of both input arrays

keep looping until both clone arrays are empty
  compare element at index 0 of both clones
    if clone 1 is less, shift that element to the results array
    other wise:
      shift the element from clone 2 to the results array

return the results array


*/

function merge(ar1, ar2) {
  let result = [];
  let clone1 = ar1.slice(0);
  let clone2 = ar2.slice(0);

  while (clone1.length > 0 || clone2.length > 0) {
    if (clone1[0] <= clone2[0] || clone2[0] === undefined) {
      result.push(clone1.shift());
    } else {
      result.push(clone2.shift());
    }
  }

  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

// LS Solution, slightly different logic on how to get ALL of the elements, but same general idea.

function merge(array1, array2) {
  const copy1 = array1.slice();
  const copy2 = array2.slice();
  const result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}