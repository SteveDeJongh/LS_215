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

// function myReduce(array, func, initial) {
//   let val;

//   if (initial) {
//     val = initial;
//     array.forEach(el => val = func(val, el));
//   } else {
//     val = array[0];
//     array.slice(1).forEach(el => val = func(val, el));
//   }

//   return val;
// }

// Cleaner solution:

// function myReduce(array, func, initial) {
//   let value;
//   let index;

//   if (initial === undefined) {
//     value = array[0];
//     index = 1;
//   } else {
//     value = initial;
//     index = 0;
//   }

//   array.slice(index).forEach(element => value = func(value, element));
//   return value;
// }

// let smallest = (result, value) => (result <= value ? result : value);
// let sum = (result, value) => result + value;

// myReduce([5, 12, 15, 1, 6], smallest);           // 1
// myReduce([5, 12, 15, 1, 6], sum, 10);            // 49

// Interrogation

function myOwnEvery(array, func) {
  let res = true;

  array.forEach((el) => {
    res = !!func(el);
    if (!res) {
      return false;
    }
  });

  return res;
}

let isAString = value => typeof value === 'string';
myOwnEvery(['a', 'a234', '1abc'], isAString);       // true

// Or using a for Loop

function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

// 