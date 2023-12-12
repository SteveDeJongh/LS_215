// JS210 - Small Problems - Interpretive Problem Solving - Problem 1 - 1000 lights

// Problem:
// Input: Integer
// Output: Array of integers representing the light number

// Rules
// Number of light is the passed in number
  // All lights start off
// start by toggle every light
// then every 2nd light
// thne every 3rd light
// ... keep togglign every "nth" light until input integer is reached.

// Questions
// Will we always be given an integer input?
// Do we need to handle invalid input?

// Examples:
// console.log(nthLight(5)) // [1,4]
// console.log(nthLight(100)) // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// nthLight(4) // =>
// off off off off
// on on on on
// on off on off
// on off off off
// on off off on

// off off off off off 0
// on on on on on 1
// on off on off on 2
// on off off off on 3
// on off off on on 4
// on off off on off 5

// Data structure
// Array of integer and booleans

// Algorithm:

// initialize an Array to hold lights
// Initialize an array to `results`
// creating the switches:
  // loop from 1 up to and including`input` times,
    // add an element to `lights` that holds
      // an array containing the current loop number, and a `false` boolean.

// Toggling the switches:
  // loop 1 up to `input` times again
    // loop over the array of switches
    // if the integer at element 0 divides evenly by the current outside loop number
    // toggle the switch

// once toggle is all done,
  // loop over the array of switches again
  // check if the boolean value is true
    // if it is, push the number of the light to the results array


// Codes:

function nthLight(input) {
  let switches = initalizeSwitches(input)

  switches = toggleSwitches(switches, input);

  return whitchLightsAreOn(switches);
}

function initalizeSwitches(count) {
  let switches = [];
  for (let i = 1; i <= count; i += 1) {
    switches.push([i, false]);
  }

  return switches;
}

function toggleSwitches(switches, count) {
  for (let i = 1; i <= count; i += 1){
    switches = switches.map((lightSwitch) => {
      if (lightSwitch[0] % i === 0) {
        lightSwitch[1] = !lightSwitch[1]
      }
      return [lightSwitch[0], lightSwitch[1]];
    })
  }
  return switches;
}

// function whitchLightsAreOn(switches) {
//   let result = [];

//   switches.forEach(light => {
//     if (light[1]) {
//       result.push(light[0])
//     }
//   })

//   return result;
// }

// Alternative implementation of `whitchlightsareon`
function whitchLightsAreOn(switches) {
  return switches.filter(light => {
    return light[1]
  }).map(x => x[0]);
}

console.log(nthLight(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(nthLight(5)); // [1, 4]