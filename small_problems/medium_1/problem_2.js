// JS210 - Small Problems - Medium 1- Problem 2 - Rotation Part 2

// Problem:

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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917