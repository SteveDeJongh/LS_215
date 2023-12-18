/* Problem 2

Start: :31 end :50

Problem: Diamonds
Input: Odd integer, representing the height and width of the diamond.
Output: A 4 pointed diamond made up of "*" characters.
Rules:
  Diamond must have 4 points
    top and bottom point centered
      top point of the star will have only 1 "*", and centered in `n` width.
  Number of stars for each row to and from center increase and decrease by 2
  Number of left side spaces for each row decreases and increases by 1

  

Questions:
  If the input isn't always an odd integers, what should i return?
    return "Invalid input"
  How should the resulting diamond be output?
    1 continuous string with line breaks
    Or can i ouput each row 1 by 1
      Return only 1 string


Examples:

diamond(1);
// logs
*

diamond(3);
// logs
 *
***
 *

Data Structure:
Arrays, with all elements joined and used as return value.


Algorithm:
declare a 'result' variable and initialize it to an empty array.
declare a `incrementer` variable to `2` 

loop from 1 up to and including `n`, as `x`
  on each iteration:
    check if current loop is === `n`, if it is
      change incrementer to -2
    add a string of (n - 1 - x) / 2 spaces followed by x number of stars to `result`
  
  break from loop when x is `1` and incrementer is -2;

  return the result array joined with /n characters.

*/

function diamond(n) {
  let result = [];
  let increment = 2;

  for (let x = 1; x > 0; x += increment) {
    if (x === n) {
      increment = -2;
    }

    result.push(" ".repeat(Math.floor((n - x) / 2)) + '*'.repeat(x))

    // if (incrementer === -2 && x === 1) { // Changing the loops break condition to a negative number removes the need for this check.
    //   break;
    // }
  }

  return result.join('\n');
}

console.log(diamond(1));
// logs
// *

console.log(diamond(3));
// logs
//  *
// ***
//  *
//  * 

console.log(diamond(9));
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *