// JS210 - Small Problems - Medium 2 - Problem 5 - Next Featured Number Higher than a Given Value

// Rules:
// Number is odd
// Number is a multiple of 7
// A digit can only occur once in the number (max number 9876543200 )

// Algorithm:

// if number is greather than 9876543201, return `No possislbe Number`.
// loop from current number up by 1
// if number is divisble by 7, change iterator to 7
// check if number has unique digits
  // helper function
// if it does, return that number

// Helper function
  // take in number as a string
  // loop from 0 to 9
    // check the match count against string is 1 or less
    // if it's not, retunr false
  // return true


//

function featured(startNum) {
  if (startNum >= 9876543201) return "There is no possible number that fulfills those requirements."

  let iterator = 1;
  for (let num = startNum + 1; num <= 9876543201; num += iterator) {
    if (iterator === 1 && num % 7 === 0 && num % 2 === 1) iterator = 14;

    if (num % 2 === 1 && num % 7 === 0 && allUnique(num)) {
      return num;
    }
  }
}

function allUnique(number) {
  number = String(number).split('');
  for (let i = 0; i <= 9; i += 1) {
    let count = number.filter((el) => el === String(i)).length;
    if (count >= 2) {
      return false;
    }
  }
  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

// LS Solution

function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}