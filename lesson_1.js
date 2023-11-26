// LS 215 - Lesson 1

// Iterating

// function myForEach(array, func) {
//   for (let i = 0; i < array.length; i += 1) {
//     func(array[i], i, array);
//   }
// }

// let min = Infinity;
// let getMin = value => (min = value <= min ? value : min);
// myForEach([4, 5, 12, 23, 3], getMin);
// console.log(min);                        // 3

// Filtering / Selection

// function myFilter(array, func) {
//   let resArr = [];

//   for (let i = 0; i < array.length; i += 1) {
//     let val = func(array[i]);
//     if (val) {
//       resArr.push(array[i]);
//     }
//   }

//   return resArr;
// }

// let isPythagoreanTriple = function (triple) {
//   return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
// };

// myFilter([{ a: 3, b: 4,  c: 5 },
//           { a: 5, b: 12, c: 13 },
//           { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

// // returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

// // OR using for each for iteration.

// function myFilter(array, func) {
//   let result = [];

//   array.forEach(value => {
//     if (func(value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

// Transformation

// function myMap(array, func) {
//   let resArr = [];

//   array.forEach(el => {
//     resArr.push(func(el))
//   });

//   return resArr;
// }

// let plusOne = n => n + 1;
// myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]

// Reduce

