// Problem 1

// Problem Description
// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.

// Problem:
// Input: string of digits and possibly ' ', '-', '.', and '(' ')'.
// Output: 10 numbers.

// Rules:
// To be a valid phone number it must:
  // be at least 10 digits
  // be no more than 11 digits
  // if 11 digits, the first digit must be 1
// If the number is 11 digits and valid, return only the last 10 digits
// For bad numbers, return 10 0's

// Questions:
// If the string contains other characters, should they be removed and then check validity?
// Will the input always be a string?

// Examples / test cases:
// cleanPhoneNumber('11234567890')         // 1234567890
// cleanPhoneNumber('1234567890')          // 1234567890
// cleanPhoneNumber('1-123-456-7890')      // 1234567890
// cleanPhoneNumber('123-456-7890')        // 1234567890
// cleanPhoneNumber('12345678901234')      // 0000000000
// cleanPhoneNumber('abc1234567')          // 0000000000
// cleanPhoneNumber('123456')              // 000000000000
// cleanPhoneNumber('123.456-7890')        // 1234567890

// Data Structure

// Input: String
// Output: string of numbers

// Algorithm:

// clean input string, removing any allowable special characters.
// check string contents for any non-allowed characters, return 0's if true.
// check cleaned string length
  // if string is eleven characters long, check first digit for 1.
   // if it is one, return last 1 digits.
  // if its 10 digits, return 10 digits

// Code:

function cleanPhoneNumber(phone) {
  let invalidNumber = '0000000000';
  if (phone.match(/[^0-9\.\-()]/)) {
    return invalidNumber;
  }

  phone = phone.replace(/[\.\-() ]/g, "")

  // if (phone.length > 11 || phone.length < 10) {
  //   return invalidNumber;
  // } else if (phone.length === 11) {
  //   if (phone[0] === '1') {
  //     return phone.slice(1);
  //   }
  // } else {
  //   return phone;
  // }

  // Refactored if statement.
  if (phone.length === 10) {
    return phone;
  } else if (phone.length === 11 && phone[0] === '1') {
    return phone.slice(1);
  } else {
    return invalidNumber
  }
}

console.log(cleanPhoneNumber('11234567890')    );     // 1234567890
console.log(cleanPhoneNumber('1234567890')     );     // 1234567890
console.log(cleanPhoneNumber('1-123-456-7890') );     // 1234567890
console.log(cleanPhoneNumber('123-456-7890')   );     // 1234567890
console.log(cleanPhoneNumber('12345678901234') );     // 0000000000
console.log(cleanPhoneNumber('abc1234567')     );     // 0000000000
console.log(cleanPhoneNumber('123456')         );     // 0000000000
console.log(cleanPhoneNumber('123.456-7890')   );     // 1234567890