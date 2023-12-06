// JS210 - Small Problems - Medium 1- Problem 1 - Rotation Part 1

// Rules:
// move the first elmenent of the array to the end of the array.
// Do not mutate the array
// if array is empty, return empty array
// if input is not an array, return udnefined.

// Examples:

// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// // the input array is not mutated
// const array = [1, 2, 3, 4];
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]

// Data Structure:
// Arrays

// Algorithm:
// if input is not an array return undefined
// if array is empty, return empty array ***** Might not be needed?
// grab first element of the array
// map over the elements of the array with index, 
  // if the current element is not the last element
    // assign them to the next element in the array
  // if it is the last element
    // assign it to the element in the stored outer variable 

// Code

function rotateArray(input) {
  if (!Array.isArray(input)) {
    return;
  } else if (input.length === 0) {
    return input;
  }

  let first = input[0];
  let lastIndex = input.length - 1;

  return input.map((el, idx) => {
    if (idx === lastIndex) {
      return first;
    } else {
      return input[idx + 1];
    }
  })
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// // the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

// LS Solution

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}