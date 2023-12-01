// Lesson 3 - An Example Problem: Comparing Version Numbers

// Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the . character, we should return null.
// Here is an example of version number ordering:
// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

// PEDAC

// Problem:
// Input: strings
  // - string SHOULD be made up of only numbers and '.' characters.
    // - if it contains anything else, function should return null.
// Output 1, -1, or 0
// Rules:
// If any input comtains invalid characters, return null.
//   - Any character other than digits and . are considered invalid
//   - a version number that begins or ends with a period or has more than one period in a row, is invalid.
// - Compare the two input versions
//   - if version1 > version2, return 1
//   - if version1 < version2, return -1
//   - if version1 === version2, return 0

// Comparing version numbers:
// Version numbers are compared by leading decimal separated numbers first ie:
  // 2.10 > 1.20;


// Examples:

compareVersions('0.1', '1');             // -1
compareVersions('1', '1.0');             // 0
compareVersions('1.0', '1.1');           // 1
compareVersions('1.2.0.0', '1.18.2');    // 1 
compareVersions('13.37', '1.18.2');      // 1
compareVersions('1.a', '1.1');           // null
compareVersions('1.', '.1');             // null

// Data structure and algorithm

// split string into array of numbers
// output is number

// Algorithm:

// check if either version numbers are invalid, if they are, return null.
// convert version numbers into array of numbers.
// step over longest array,
  // compare each index of each array
  // if there a difference, add or negative from equal varaible.
  // if there's no value from one array, default to 0 for comparison.
  // if equal variable is not 0, return value.
// return value of equal variable

function compareVersions(version1, version2) {
  if (!validVersionNumber(version1) || !validVersionNumber(version2)) {
    return null;
  }

  let equal = 0;
  let v1 = version1.split('.').map(Number);
  let v2 = version2.split('.').map(Number);
  // let times = v1.length > v2.length ? v1.length : v2.length;
  let times = Math.max(v1.length, v2.length);

  for (let i = 0; i < times; i += 1) {
    if (equal !== 0) { return equal};
    let c1 = v1[i] || 0;
    let c2 = v2[i] || 0;

    if (c1 > c2) {
      equal = 1;
    } else if (c1 < c2) {
      equal = -1;
    }
  }
  return equal;
}

function validVersionNumber(version) {
  if (version[0] === '.' || version[version.length - 1] === '.') {
    return false;
  }
  return !version.match(/[^0-9.]|(\.\.+)/) // Alternate implementation of valid check /^[0-9]+(\.[0-9]+)*$/
}

// LS Solution

function compareVersions(versionA, versionB) {
  let validChars = /^[0-9]+(\.[0-9]+)*$/;

  if (!validChars.test(versionA) || !validChars.test(versionB)) {
    return null;
  }

  let aParts = versionA.split('.').map(Number);
  let bParts = versionB.split('.').map(Number);
  let maxLength = Math.max(aParts.length, bParts.length);

  for (let i = 0; i < maxLength; i += 1) {
    let aValue = aParts[i] || 0;
    let bValue = bParts[i] || 0;

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
}


console.log(compareVersions('0.1', '1'));             // -1
console.log(compareVersions('1', '1.0'));             // 0
console.log(compareVersions('1.0', '1.1'));           // -1
console.log(compareVersions('1.2.0.0', '1.18.2'));    // -1 
console.log(compareVersions('13.37', '1.18.2'));      // 1
console.log(compareVersions('1.a', '1.1'));           // null
console.log(compareVersions('1.', '.1'));             // null
console.log(compareVersions('1..0', '1.1'));          // null
console.log(compareVersions('134', '1234'));          // -1 // Ensures we're comparing numbers, and not character by character.

// LS Test Cases
console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1