// LS 216 Interview Assessment review

/*
Interview Practice PRoblems: Asking Questions

Problem 1:
A distinct string is a string that is present only once in an array.

Given an array of strings, arr, and an integer, k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the result string is the one encountered earliest in the array.

Example

distinctString(["d","b","c","b","c","a"], 2); // "a"

Problem:
Input: Array of strings, and 'nth' integer
Output: the `nth` disctinct string.
Rules:
  A distinct string occurs only once in the passed in array
  if there is no `nth` disctinct string, return an empty string.

Questions:
  Will the input always be an array and an integer?
  Will we always be passed 2 appropriate arguments?
  Do we need to account for an empty array?
  Will the integer argument ever be 0?

  What is a `distinct string`?
    Does case matter?
    Wll the values in the array always be strings?

Examples:

distinctString(["d","b","c","b","c","a"], 2); // "a"
distinctString(["d","b","c","b","c","a"], 3); // ""
distinctString(["d","b","c","b","c","a"], 0); // ""
distinctString([1, 2, 2, 3, 4, 4, 5], 2); // 3 /// ?????

Data Structure:
array
integer
strings

Algorithm:

create a matches variable, set to 0;
create a matchString variables, set to empty string

loop from 0 to array legnth
  in the loop, count occurances of `inputArray[currentEl]` in `input array`.
  if count is 1
    set match string to that element
    increase matches by 1
  break from loop if matches === `nth` 

return `` as we never got to `nth` number of distinct strings.

// Code

function distinctString(arr, nth) {
  let matches = 0;
  let matchEl = "";

  for (let i = 0; i < arr.length; i += 1) {
    let currEl = arr[i];
    let count = arr.filter(el => el === currEl).length;
    if (count === 1) {
      matchEl = currEl;
      matches += 1;
    }
    if (matches === nth) return matchEl;

  }
  return "";
}

console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
console.log(distinctString(["d","b","c","b","c","a"], 3)); // ""
console.log(distinctString(["d","b","c","b","c","a"], 0)); // ""
console.log(distinctString([1, 2, 2, 3, 4, 4, 5], 2)); // 3 /// ?????

*/

// Problem 2

/*

*/