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
// For ranges, number greater than the previous number, to the end of range number, are all a valid number.

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

// Split input string into individual numbers (',')
// initialize an empty array to hold all result numbers
// initialize a variable to store the current "max number" 
      // ***** How do i determine starting number??? *****
  // For each "number", check if they split on a range divider
    // split the number into an array on (:..-)
  // if they dont (resulting array is only 1 element):
    // use a the helper function `nextNum` to find the next number, passing in the current number, and the significant part.
    // assign the return value to both the max number, and result number array.
  // If they do split into multiple parts,
    // create a variable for the number of parts (array length)
    // loop the array from index 1.
      // for each loop
      // determine the start number
      // determine max number
      // loop from start number to max number adding all to the result array.
// return the result numbers array.

// Helper function:
// nextnum(current number, significant part)
  // loop while increment the current number
  // break when the last x digits match the significant part.
  // return number.


function allNumbers(stringInput) {
  stringInput = stringInput.replace(/ /, "");
  stringNumbers = stringInput.split(',');
  let currentMaxNumber = Number(stringInput.split(',')[0].split(/\.\.|-|:/)[0]);
  let resultNumbers = [];

  stringNumbers.forEach((numberIt, idx) => {
    let workingNumbers = numberIt.split(/\.\.|-|:/);
    let workingNumbersLength = workingNumbers.length;

    if (idx === 0 && workingNumbersLength === 1) { // Path for first number of input.
      resultNumbers.push(String(numberIt));
    } else if (workingNumbersLength === 1) { // Path for a non-range.

      let nextNum = nextNumFinder(Number(currentMaxNumber), workingNumbers[0])

      currentMaxNumber = nextNum;
      resultNumbers.push(String(nextNum));
    } else { // Path for a range
      for (let i = 1; i < workingNumbersLength; i += 1) { 
        if (resultNumbers.length === 0) {
          currentMaxNumber = String(workingNumbers[0]);
          resultNumbers.push(String(workingNumbers[0]));          
        } else if (i === 1) {
          resultNumbers.push(String(nextNumFinder(Number(currentMaxNumber), workingNumbers[0])));
        }

        let startNum = Number(resultNumbers[resultNumbers.length - 1]); // returning NaN

        let endNum = Number(nextNumFinder(startNum, workingNumbers[i]));

        for (let x = startNum + 1; x <= endNum; x += 1) {
          resultNumbers.push(String(x));
        }
        currentMaxNumber = resultNumbers[resultNumbers.length - 1];
      }
    }
  });

  return resultNumbers.join(', ');
}

function nextNumFinder(current, significantPart) {
  let status = true;
  let number = current;
  significantPart = significantPart.trim();

  while (status) {
    let length = significantPart.length;
    number += 1;
    let stringNum = String(number);

    if (stringNum.slice(-length) === significantPart) {
      status = false
    }
  }
  return number;
}
  
console.log(allNumbers('1,5,9,1')); // 1, 5, 9, 11
console.log(allNumbers('1-9, 2')); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 12
console.log(allNumbers('1:3, 2, 1-3')); // 1, 2, 3, 12, 21, 22, 23
console.log(allNumbers("1, 3, 7, 2, 4, 1")); // --> 1, 3, 7, 12, 14, 21
console.log(allNumbers("1-3, 1-2")); // --> 1, 2, 3, 11, 12
console.log(allNumbers("1:5:2")); // --> 1, 2, 3, 4, 5, 6, ... 12
console.log(allNumbers("104-2")); // --> 104, 105, ... 112
console.log(allNumbers("104-02")); // --> 104, 105, ... 202
console.log(allNumbers("545, 64:11")); // --> 545, 564, 565, .. 611