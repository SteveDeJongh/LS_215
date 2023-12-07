// JS210 - Small Problems - Medium 1- Problem 9 - Fibonacci Numbers (Memorization)

// let mem = {};


// function fibonacci(n) {
//   if (mem[String(n)]) {
//     return mem[n];
//   }  else {
//     if (n <= 2) {
//       return 1;
//     } else {
//       mem[n] = fibonacci(n - 1) + fibonacci(n - 2); 
//       return mem[n];
//     }
//   };
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050

// LS Solution

// const memo = {};

// function fibonacci(nth) {
//   if (nth <= 2) {
//     return 1;
//   } else {
//     if (memo[nth]) {
//       return memo[nth];
//     } else {
//       memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
//       return memo[nth];
//     }
//   }
// }

// Alternatively, without using a global variable

const fibonacci = (function() {
  const mem = {};

  return function(n) {
    if (mem[String(n)]) {
      return mem[n];
    }  else {
      if (n <= 2) {
        return 1;
      } else {
        mem[n] = fibonacci(n - 1) + fibonacci(n - 2); 
        return mem[n];
      }
    }
  }
})();

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050