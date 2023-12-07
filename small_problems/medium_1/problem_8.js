// JS210 - Small Problems - Medium 1- Problem 8 - Fibonacci Numbers (Procedural)

function fibonacci(times) {
  let fibs = [1, 1];
  let currentFib;
  for (i = 2; i < times; i += 1) {
    currentFib = (BigInt(fibs[i - 2]) + BigInt(fibs[i - 1]))
    fibs.push(currentFib);
  }

  return currentFib;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

// LS Solution

function fibonacci(nth) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= nth; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}