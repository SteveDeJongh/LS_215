/*
Problem 2 - thirdMax

start: 0:12 - end :27

Problem:
Input: array of integers
Output: 3rd largest integer in the array, OR the highest number
Rules:
  Integer must be the third largest
  if there are less than 3 integers, return the biggest integer.

Questions:
  Will the input alawys be valid?
    An empty array?
    Not an array?
      How should these be handled?
  Will the number evers be negative?
  How should we factor in multiple integers of the same value? Do they count as one?
    treat each matching integer as it's own.
  Will the array always only contain integers?
    ignore non integer values.

Examples:
thirdMax([3, 2, 1]); // 1
thirdMax(['a', 3, 2, 1]); // 1 // ignore non-integer values.
thirdMax([3, 3, 1]); // 1 // treat each matching integer as it's own.

Data Structure:
Arrays

Algorithm:
filter input array to just integers
sort filtered array by highest to lowest
if array length is 3 or more
  return element as index 2
if not
  return element at index 0;


*/

function thirdMax(arr) {
  arr = arr.filter(el => typeof(el) === 'number');
  arr.sort((a,b) => b - a);
  console.log(arr);
  if (arr.length >= 3) {
    return arr[2];
  } else {
    return arr[0];
  }
}

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax(['a', 3, 2, 1])); // 1 // ignore non-integer values.
console.log(thirdMax([3, 3, 1])); // 1 // treat each matching integer as it's own.
console.log(thirdMax([1,2,2,2, 3])); // 2
console.log(thirdMax([3,1,5,2])); // 2, check sort works