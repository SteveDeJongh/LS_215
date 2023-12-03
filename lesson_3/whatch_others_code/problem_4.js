// Problem 4

// Problem Description
// You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611

// Problem:
// Input: A list of numbers, and ranges.
// Output: a list of numbers

// Rules:
// The following number must be greater than the previous number.
// A range can be represented as "1-5", "1:5", or "1..5".
// For ranges, number greater than the previous number, to the next number, is a valid number.

// Examples:

// allNumbers('1,5,9,1') // 1, 5, 9, 11
// allNumbers('1-9, 2') // 1, 2, 3, 4, 5, 6, 7, 8, 9, 12
// allNumbers('1:3, 2, 1-3') // 1, 2, 3, 12, 21, 22, 23

// Data Structure
// Input: string
// Output: string

// Hold valid numbers in an array, join to a string for return value.

// Algorithm:

// Split input string into comma separated sections.
  // How to identify and deal with ranges?
    // for any section that splits into more than 1 section with .. -  or : as a seperator.
    // loop from second element to the last.
    // returning number 1 element before and current element.
    // pass these two element to the helper function to return the numbers for that range.

    // Helper function to return all numbers of a range.
    // ??????
      // loop from start number up to and inlcude last number
      // return array of those numbers

function allNumbers(stringInput) {
  stringNumbers = stringInput.split(',');

  stringNumbers = stringNumbers.map(num => {
    splitNum = num.split(/\.\.|-|:/);
    if (splitNum.length > 1) {
      let resNumbers = [];
      
    } else {
      return num;
    }
  });
  return stringNumbers;
}

console.log(allNumbers('1,1:5:2'));