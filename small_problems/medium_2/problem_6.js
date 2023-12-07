// JS210 - Small Problems - Medium 2 - Problem 6 - Sum Square - Square Sum

// Algorithm:

// initialize sum
// initialize squareSum
// iterate from 1 to `n`
    // add iterator to sum
    // add iterator squared to squareSum

// square `sum`
// return sum - squareSum

// Code

function sumSquareDifference(n) {
  let sum = 0;
  let squareSum = 0;

  for (let i = 1; i <= n; i += 1) {
    sum += i;
    squareSum += i**2;
  }

  return sum**2 - squareSum;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150