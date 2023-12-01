// Problem 2

// Problem Description
// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

// Counting from the rightmost digit and moving left, double the value of every second digit
// For any digit that thus become 10 or more, subtract 9 from the result
// 1111 becomes 2121
// 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
// Add all these digits together
// 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
// 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
// If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

// Problem:
// Input: A string of numbers
// Output: true or false
// Rules:
  // every second digit start from right to be double
    // if over 10, subtract 9 from the result.
  // sum digits of resulting operation. If evenly divisible by 10, the number is valid.
// All non number characters in the string can be ignored.

// Question?

// How should an empty string be handled? Or any invalid entry?
// Will the input always be a string?

// Examples / test cases
// isValidNumber('1111');                // False
// isValidNumber('8763');                // True
// isValidNumber('abc8763');             // True
// isValidNumber('2323 2005 7766 3553'); // True
// isValidNumber('');                    // False

// Data Stucture:
// Input: string
// Output: boolean

// Convert cleaned up string into an array of numbers.

// Algorithm:

// Remove any non digit characters from the string.
// split string into an array of string numbers.
// map over array convering all characters to numbers.
// iterate over the array from back to front, starting at the 2nd to last index , jumping 2
  // multiply the number by 2.
  // if the number is greater than 10, reduce by 9
  // reassign the number to the array at the same index.
// sum the values of the array.
// check modulo of sum by 10 against 0
// return value of check.

// function isValidNumber(input) {
//   if (input == false) { // Depends on how falsy input values should be handled.
//     return false;
//   }

//   input = input.replace(/[^0-9]/g, "");

//   let digits = input.split('').map(Number);

//   for (let i = digits.length - 2; i >= 0; i -= 2) {
//     let val = digits[i] * 2;

//     if (val >= 10) {
//       val -= 9;
//     }

//     digits[i] = val;
//   }

//   let sum = digits.reduce((sum, val) => sum += val, 0);

//   return sum % 10 === 0;
// }

// Instead of iterating from back to front, we could also just iterate a reversed array, and use map to do the conversion and track index.

function isValidNumber(input) {
  if (!input) { // Depends on how falsy input values should be handled.
    return false;
  }

  input = input.replace(/[^0-9]/g, "");

  let digits = input.split('').map(Number).reverse();

  digits = digits.map((num, idx) => {
    if (idx % 2 === 0 || idx === 0) {
      return num;
    }

    return num * 2 >= 10 ? (num * 2)-9 : (num*2);
  })

  let sum = digits.reduce((sum, val) => sum += val, 0);

  return sum % 10 === 0;
}

console.log(isValidNumber('1111'));                // False
console.log(isValidNumber('8763'));                // True
console.log(isValidNumber('abc8763'));             // True
console.log(isValidNumber('2323 2005 7766 3554')); // True
console.log(isValidNumber(''));                    // False // Depends on how empty strings should be handled.