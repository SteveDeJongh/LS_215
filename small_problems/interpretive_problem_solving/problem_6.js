// JS210 - Small Problems - Interpretive Problem Solving - Problem 6 - Seeing Stars

// Problem:
// Input: Integer
// Output: Multi line string of *'s and spaces

// Rules:
// Start must be 8 pointed
// width of star in `n`
// star is on a `n` by `n` grid.
// `n` will always be odd.
// There will b `n` - 1 rows above and below the middle line.

// Example:


// star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

// Data structure
// Arrays of strings

// Algorithm:
// initialize a `rows` count to `n` - 1
// initialize a `result` to an array

// initialize `spaces` to `n` - 3 / 2.
// loop from 1 to rows
// on every odd loop 
  // make a string of `*${' ' * spaces}*${' ' * spaces}*`
  // pad start of string with string.length - `n` / 2 spaces
  // insert row into results column
// on every even loop
  // insert an empty row

// initialize a `reversed` array to the result of reversing the current `results` array.

// add a row to the result array of just `n` stars

// append `reversed` to the `results` array

// log each line in the `results` array.

// Code

// Implementation was thinking we needed to add blank rows between rows of stars, could be cleaner if refactored knowing those empty rows are not required.

function star(n) {
  let rows = n - 1;
  let result = [];
  let spaces = (n - 3) / 2;
  let padAmount = 0;

  for (let i = 1; i <= rows; i += 2) {
    let currString = `*${' '.repeat(spaces)}*${' '.repeat(spaces)}*`;
    let padding = " ".repeat(padAmount);
    spaces -= 1;
    padAmount += 1;
    currString = padding + currString;
    result.push(currString);
  }

  let reverse = result.slice(0).reverse();
  result.push('*'.repeat(n));
  result = result.concat(reverse);

  result.forEach(row => console.log(row));
}

console.log(star(7));

console.log(star(13));