// Lesson 3: Practice Problem - Swap

// Problem Description
// Write a function called swap that takes a string as an argument, and returns a new string, where the alphabetic characters have taken the place of the numeric characters, and vice versa.

// Problem:
// Input: string
// Output: string
// Rules:
  // if character is numeric, swap it with the first-next non-numeric character
  // if there are no more characters left from one or the other set, leave existing character in place.

// Questions:
  // Will the string only contain lowercase letters and numbers?
      // No, it can contain other characters that should remain in place.
      // Uppercase characters can be present.
  // Do i need to handle invalid input or empty input?
  // will the string always have a mix of nubmers and letters?

// Examples / Test Cases

// console.log(swap("1a2b3c") === "a1b2c3"); // true
// console.log(swap("abcd123") === "123dabc"); // true

// console.log(swap('') === ''); // true
// console.log(swap('1234abc') === 'abc4123'); // true
// console.log(swap("12a") === "a21"); // true
// console.log(swap("ab1") === "1ba"); // true
// console.log(swap("abcd") === "abcd"); // true
// console.log(swap("1") === "1"); // true
// console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
// console.log(swap("ab1CD23") === "12a3DbC"); // true

// Data Structure:
// string
// arrays of letters and numbers

// Algorithm:

// initialize array of letters from input
// initialize array of digits from input



function swap(str) {
  let digits = str.match(/[0-9]/g) || [];
  let letters = str.match(/[a-zA-Z]/g) || [];

  let digitsRegex = new RegExp('[0-9]');
  let lettersRegex = new RegExp('[a-zA-Z]');

  return str.split('').map(char => {
    if (digitsRegex.test(char) && letters.length > 0) {
      return letters.shift();
    } else if (lettersRegex.test(char) && digits.length > 0) {
      return digits.shift();
    } else {
      return char;
    }
  }).join('');
}

// function transform()

console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap('') === ''); // true
console.log(swap('1234abc') === 'abc4123'); // true
console.log(swap("12a") === "a21"); // true
console.log(swap("ab1") === "1ba"); // true
console.log(swap("abcd") === "abcd"); // true
console.log(swap("1") === "1"); // true
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
console.log(swap("ab1CD23") === "12a3DbC"); // true