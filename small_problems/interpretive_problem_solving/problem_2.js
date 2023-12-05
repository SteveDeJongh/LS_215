// JS210 - Small Problems - Interpretive Problem Solving - Problem 1 - Diamonds

// Problem:
// Input: integer
// Ouput: multi line string of `*`s

// Rules:
// diamond but be 4 pointed NSEW
// input integer is width and heigh of diamond
// diamond must be centered ( N and S in middlle of width)

// Examples:
console.log(diamond(3)) //
//  *
// ***
//  *

console.log(diamond(5)) //
//   *
//  ***
// *****
//  ***
//   *

// Data structure
// array of strings of `*`s

// Algorithm:

// initialize array to contain strings of *s
// determine how many line above and below the middle there should be
  // number of times input is divisble by 2
  // this will be "distance from center"

// locally assign a top distance from center to distance from center;
// loop from 1 up to `input`, increaseing by 2
  // on every iteration:
    // push a string to `results` of `distance from center `spaces` + i * '*'s
    // decrease distance from center by 1

// locally assign a bottom distance from center to 1;
// loop from `input` - 2, to `1`, decreasing by 2
  // push a string to `results` of distance from center spaces + i * '*'s
  // increase distance by 1;

// loop over result array console.log each line

//

function diamond(input) {
  let results = [];
  let distanceFromCenter = Math.floor(input / 2);

  let topDistance = distanceFromCenter;

  for (let i = 1; i <= input; i += 2) {
    results.push(`${' '.repeat(topDistance)}${'*'.repeat(i)}`);
    topDistance -= 1;
  }

  let bottomDistance = 1;
  for (let i = input - 2; i > 0; i -= 2) {
    results.push(`${' '.repeat(bottomDistance)}${'*'.repeat(i)}`)
    bottomDistance += 1;
  }

  results.forEach(line => {
    console.log(line);
  })
}