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

Given an array of integers, nums, return the third largest number in the array. If the third largest number does not exist, return the greatest number.

You are not allowed to sort the array.

Example

thirdMax([3, 2, 1]); // 1


Problem:
Input: array of numbers
Output: 3rd largest number in the array, or largest number
Rules:
  Can not sort the array
  if input is less than 3 numbers long, return largest number
  
Questions:
Will we always be passed in an array?
  If not, what should we do?
Will the array always only contain numbers?
  Are string representation of numbers valid?
Is greater than in value or in length?

Examples:
thirdMax([3, 2, 1]);              // 1
thirdMax([3, 2, 1, 4]);           // 2
thirdMax([2, 1]);                 // 2
thirdMax([]);                     // 0
thirdMax('');                     // 0

Data Structure:
Array

Algorithm:
check if input is valid, if not, return 0
declare a `largest` variable to an empty array of three 0s
iterate over each element in passed in array.
If the number is greater than the 3rd element in the results array
  add element to the end of the array
  remove first element of the array
  continue to next iteration
if the number is greater than the 2nd element in the results array
  add element to the 2nd position
  remove first elmement
  continue
if the element is greater than the 1st element in the results array
  add element after the 1st element
  remove first element
  continue

return the first element of the results array.

function thirdMax(input) {
  if (!Array.isArray(input) || input.length === 0) return 0;

  let results = [0,0,0];

  input.forEach(el => {
    if (el > results[2]) {
      results.push(el);
      results.shift();
    } else if (el > results[1]) {
      results.splice(2,0,el);
      results.shift();
    } else if (el > results[0]) {
      results.splice(1, 0, el);
      results.shift();
    }
  })
  return results[0] || results[2];
}

console.log(thirdMax([3, 2, 1]));              // 1
console.log(thirdMax([3, 2, 1, 4]));           // 2
console.log(thirdMax([2, 1]));                 // 2
console.log(thirdMax([]));                     // 0
console.log(thirdMax(''));                     // 0

*/

// Problem 3

/*

Write a function, primeNumberPrinter, that prints all prime numbers present as substrings in a given string.

Example

primeNumberPrinter("a4bc2k13d"); // [2, 13]

// Problem:
// input: string
// output: array of numbers
// Rules:
  // Number must be prime to be returned

Questions
How should the string be split?
Will the input always be a string?
Will we always be passed in the correct number of arguments?
Will the passed in string always contain numbers?
If there are no matches, what should we return?
What is a prime number?
Will the string consist of only alphabetical and numerical characters?

Examples:

primeNumberPrinter("a4bc2k13d"); // [2, 13]
primeNumberPrinter("a1b2c3d4"); // [1,2,3]
primeNumberPrinter("abcd"); // []
primeNumberPrinter([]); // "Invalid Input"


Data Structure:
String, array, integers

Algorithm:
check if input is valid, if it isn't, return a string saying so.
extract all number sequences from the passed in string
filter the extracted numbers down to prime numbers only
  helper function `isPrime`


Helper:
  check if number is equally divisble by any number from number / 2 down.
  if it is, return false
  otherwise true

function primeNumberPrinter(input) {
  if (typeof(input) !== "string") return "Invalid input."

  let numbers = (input.match(/[0-9]+/g) || []).map(x => Number(x))
  return numbers.filter(x => isPrime(x))
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let div = Math.floor(num / 2); div > 1; div -= 1) {
    if (num % div === 0) return false;
  }
  return true;
}

console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]
console.log(primeNumberPrinter("a1b2c3d4")); // [2,3]
console.log(primeNumberPrinter("abcd")); // []
console.log(primeNumberPrinter([])); // "Invalid Input"

*/

// Problem 4

/*
​Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all duplicated elements removed. Treat numbers and number strings (e.g., 1 and '1') as duplicates, and keep the one that comes first in the result.

Examples

flattenAndUnique([]); // []
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']

// Problem:
// Input: Multi dimensional array
// Output: array with all duplicate items removed
// Rules:
  // flatten the array 1 level deep
  // Return the a new array with only unique elements
    // return the first instance of the unique element
    // a char and string reprensation of the same number are equal.

Questions:
How do we define duplicates?
Will we always be passed in a multi dimensional array?
How do we handle invalid entries?

// Examples:
flattenAndUnique([]); // []
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']
flattenAndUnique([[1, 2, 3], ['1', '2', 4]] // [1,2,3,4]

// Data Structure:
array of elements

// Algorithm:
create results array
flatten input array 1 times
iterate over flattened array
  check if current element exists in the results array
    if it doesn't add element to results array

Helper for checking if it exists in array
check if any of the elements in the array
  are equal to the current element converted to string
  or
  are equal to the current element converted to a number

function flattenAndUnique(input) {
  let results = [];
  input = input.flat();

  input.forEach(el => {
    if (!exists(el, results)) {
      results.push(el);
    }
  })

  return results;
}

function exists(el, array) {
  return array.some(test => test === String(el)) || array.some(test => test === Number(el))
}

console.log(flattenAndUnique([])); // []
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']])); // [1, 2, 3, 4, 5, 'a']
console.log(flattenAndUnique([[1, 2, 3], ['1', '2', 4]])); // [1,2,3,4]

*/

// Practice Problem start 2:45 - 3:18 30 minutes.

// You are given a table, in which every key is a stringified number, and each 
// corresponding value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }
// Create a function that returns a table with the same keys, but each 
// character should appear only once among the value-arrays, e.g.

// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }
// Rules
// Whenever two keys share the same character, they should be compared numerically, 
// and the larger key will keep that character. That's why in the example above the 
// array under the key "2" contains "A" and "B", as 2 > 1.
// If duplicate characters are found in the same array, the first occurance should be kept.

// Example 1
// input = {
//   "1": ["C", "F", "G"],
//   "2": ["A", "B", "C"],
//   "3": ["A", "B", "D"],
// }

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }

// Example 2
// input = {
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// }

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }

// Example 3
// input = {
//   "432": ["A", "A", "B", "D"],
//   "53": ["L", "G", "B", "C"],
//   "236": ["L", "A", "X", "G", "H", "X"],
//   "11": ["P", "R", "S", "D"],
// }

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }

/*
Input: object, keys are string numbers, value are arrays of letters.
Output: object, keys are string numbers, values are arrays of letters.

Rules:
letters can only appear once in all of the value arrays
  letter should only remain in the array which holds it with the highest numerical value.
Object keys are to be compared as numbers, not strings
    ie: "33" < "123" // true;

Questions:
  Will the input always be an object?
  Will the number keys always be unique?
  Can the object only have one key?
  Will the characters always be upper case?

Data structure:
input: object
output: object

Arrays for string characters

Algorithm:
get an array of all of the objects keys

loop over the objects keys
    access the array of characters for each key
      loop over each character
        check all other arrays of characters for that value
          if the character is found
            check if current object key is greater than found object key.
              if it is, do nothing
              if it isn't, remove the elemtn from the current array.

*/

function letterKeys(input) {
  let numStrings = Object.keys(input);

  numStrings.forEach(nStr => {
    let letters = input[nStr];

    letters = letters.filter(letter => {
      for (let i = 0; i < numStrings.length; i += 1) {
        if (input[numStrings[i]].includes(letter)) {
          if (Number(numStrings[i]) > nStr) {
            return false;
          }
        }
      }
      return true;
    });

    for (let i = 0; i < letters.length; i += 1) {
      if (letters.filter(x => letters[i] === x).length > 1) {
        letters.splice(letters.lastIndexOf(letters[i]), 1);
        i -= 1;
      }
    }

    input[nStr] = letters
  })

  return input;
}

// Example 1
let input = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }

// console.log(letterKeys(input));

// Example 2
let input2 = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
}

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }

// console.log(letterKeys(input2));

// Example 3
let input3 = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
}

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }

console.log(letterKeys(input3));