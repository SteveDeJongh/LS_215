/* Problem 1
start :03 end :25

1000 Lights

Problem:
Input: Interger input of number of switches
Output: Array of switch positions that are left on after all toggle cycles are complete.
Rules:
  Lights are number from 1 to N
  Lights are initially OFF
  Lights are toggle at started index intervals
    ie: 1, 2, 3, 4, 5
        2, 4,
        3,
        4
        5


Questions:
  Will the input always be a positive integer?
  What should i do if the input is negative, 0, or a non integer?
    Return "Invalid Input"

Examples:

function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
lightsOn(-1); "Invalid Input"
lightsOn(0); "Invalid Input"
lightsOn("A"); "Invalid Input"

Data Structure:
Array


Algorithm:
validate input:
  if it's negative, 0, or not an integer return "Invalid Input"

create an array containing n number of elements, all initially set to false.

loop from 1 to `n`:
  for each loop
    map over the array, changing the boolean value of the element to the opposite value if the index + 1 is equally divisible by current loop iteration.

map over the array of booleans, if the value is true, return the current index + 1
filter the resulting array to just the integer values.
return that array

*/

function lightsOn(n) {
  if (!Number.isInteger(n) || n <= 0) return "Invalid Input";

  let lights = new Array(n).fill(false);

  for (let i = 1; i <= n; i += 1) {
    lights = lights.map((el, idx) => {
      if ((idx + 1) % i === 0) {
        return !el
      }
      return el;
    })
  }

  lights = lights.map((el, idx) => {
    if (el) {
      return idx + 1;
    }
  })

  lights = lights.filter(el => el);

  return lights;;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(-1)); "Invalid Input"
console.log(lightsOn(0)); "Invalid Input"
console.log(lightsOn("A")); "Invalid Input"