// JS210 - Small Problems - Medium 1- Problem 3 - Rotation Part 3

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}

function rotateRightmostDigits(num, digit) {
  let digits = String(num).split('');
  let untouched = digits.slice(0, -digit)
  let rotaters = digits.slice(-digit);

  rotaters = rotateArray(rotaters);
  let result = Number(untouched.concat(rotaters).join(''));
  return result;
}


// Algorithm:

// create a varaible to store the number of digits in the number (this will also be the number of digits to be rotated)
// create a variable to hold the number

// Loop number of digits times
// on each loop split the digits in an array
// grab the num of digits from the end of the array
// pass in those digits as a number to rotate right most digits
// return that value to teh original array in the same space
// return a number from the modified array back to the outer hold number variable

//

function maxRotation(input) {
  let length = String(input).split('').length;
  let number = input;

  for (let i = length; i > 0; i -= 1) {
    let digits = String(number).split('')
    let workingDigits = Number(digits.slice(-i).join(''));
    let newValues = rotateRightmostDigits(workingDigits, i);
    newValues = String(newValues).split('');
    digits.splice(-i, i, ...newValues)
    number = Number(digits.join(''));
  }

  return number;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845