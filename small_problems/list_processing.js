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

function leadingSubstrings(string) {
  let resArr = [];
  let chars = string.split('');

  for (let end = 0; end < string.length; end += 1) {
    resArr.push(chars.slice(0, end + 1).join(''))
  }

  return resArr;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// LS Solution, using `string.slice`

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

// FE, use a list processing function.

function leadingSubstrings(string) {
  let chars = string.split('');

  return chars.map((char, idx) => {
    return string.slice(0, idx + 1);
  });
}

// 6

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}


function substrings(string) {
  let resArr = [];
 
  for (let start = 0; start < string.length; start += 1) {
    resArr = resArr.concat(leadingSubstrings(string.slice(start)))
  };

  return resArr;
}

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

// LS Solution

function substrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

// FE

function substrings(string) {
  let chars = string.split('');

  return chars.map((let, index) => {
    return leadingSubstrings(string.slice(index));
  }).flat();
}

// 7

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

function substrings(string) {
  let resArr = [];
 
  for (let start = 0; start < string.length; start += 1) {
    resArr = resArr.concat(leadingSubstrings(string.slice(start)))
  };

  return resArr;
}

function palindromes(string) {
  return substrings(string)
  .filter((str) => {
    return str.length >= 2 && str === str.split('').reverse().join('');
  })
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// LS Solution, moves palindrome check to a separate function and uses it for the filter callback function.

function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

// 8

function buyFruit(list) {
  return list.map(item => {
    let result = [];
    for (let i = 0; i < item[1]; i += 1) {
      result.push(item[0]);
    }
    return result;
  }).flat();
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// LS Solution, using reduce.

function buyFruit(fruitsList) {
  return fruitsList.map(fruit => repeat(fruit))
                   .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruit) {
  const result = [];

  for (let i = 0; i < fruit[1]; i += 1) {
    result.push(fruit[0]);
  }

  return result;
}

// 9

function transactionsFor(item, list) {
  return list.filter(transaction => {
    return transaction.id === item;
  })
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// LS Solution

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(({id}) => id === inventoryItem);
}

// 10

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(({id}) => id === inventoryItem);
}

function isItemAvailable(item, transactions) {
  let itemTransactions = transactionsFor(item, transactions);
  let movements = itemTransactions.map((trans) => {
    if (trans.movement === 'in') {
      return trans.quantity;
    } else {
      return -trans.quantity
    }
  });

  let stock = movements.reduce((sum, val) => sum += val);
  return stock > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(105, transactions);     // true

// LS Solution, combines my map and reduce functions on the items.

function isItemAvailable(item, transactions) {
  const quantity = transactionsFor(item, transactions).reduce((sum, transaction) => {
    if (transaction.movement === 'in') {
      return sum + transaction.quantity;
    } else {
      return sum - transaction.quantity;
    }
  }, 0);

  return quantity > 0;
}