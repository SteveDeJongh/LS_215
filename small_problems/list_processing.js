// JS210 - Small Problems - List Processing

// 1

function sum(num) {
  return String(num)
    .split('')
    .reduce((sum, curr) => sum += Number(curr), 0);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

// 2

let numberWords = "zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen".split(' ');

function alphabeticNumberSort(arr) {
  return arr.map((val) => numberWords[val])
    .sort()
    .map((val) => numberWords.indexOf(val));
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// LS Solution

function wordSort(num1, num2) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                        'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                        'twelve', 'thirteen', 'fourteen', 'fifteen',
                        'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}

// 3

function multiplyAllPairs(ar1, ar2) {
  let result = [];

  ar1.forEach(num => {
    ar2.forEach(num2 => result.push(num * num2))
  });

  return result.sort(compareNumbers);
}

function compareNumbers(n1, n2) {
  if (n1 > n2) {
    return 1;
  } else if (n2 > n1) {
    return -1;
  } else {
    return 0;
  }
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// LS Solution, shorter sort syntax

function multiplyAllPairs(array1, array2) {
  const result = [];

  array1.forEach(number1 => {
    array2.forEach(number2 => {
      result.push(number1 * number2);
    });
  });

  return result.sort((a, b) => a - b);
}

// 4

function sumOfSums(arr) {
  let sum = 0;
  arr.forEach((num, index) => sum += arr.slice(0,index + 1)
                                        .reduce((acc, curr) => acc += curr));
  return sum;
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

// LS Solution

function sumOfSums(numbers) {
  return numbers.map((number, idx) => numbers.slice(0, idx + 1)
                                             .reduce((sum, value) => sum + value))
                                             .reduce((sum, value) => sum + value);
}

// 5

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]