// JS210 - Small Problems - Medium 1- Problem 6 - Fibonacci Number Location By Length

// Problem
// Input: integer represetantion of number of digits
// Output: index of the frist fib number to contain that many digits

// Rules:
// Fib sequence is made up of the last 2 numbers added together
// By default, fib sequence start with 1


function findFibonacciIndexByLength(digits) {
  let fibs = [1, 1];

  while (String(fibs[(fibs.length - 1)]).length < digits) {
    let fibLength = fibs.length;
    fibs.push(BigInt(fibs[fibLength - 2]) + BigInt(fibs[fibLength -1]));
  }
  return BigInt(fibs.length);
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.

// LS Solution

function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}