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
//

// Examples:

compareVersions('0.1', '1');             // -1
compareVersions('1', '1.0');             // 0
compareVersions('1.0', '1.1');           // 1
compareVersions('1.2.0.0', '1.18.2');    // 1 
compareVersions('13.37', '1.18.2');      // 1

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
  let v1 = version1.split('.');
  let v2 = version2.split('.');
  let times = v1.length > v2.length ? v1.length : v2.length;

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
  return !version.match(/[^0-9.]/)
}

compareVersions('0.1', '1');             // -1
compareVersions('1', '1.0');             // 0
compareVersions('1.0', '1.1');           // -1
compareVersions('1.2.0.0', '1.18.2');    // 1 
compareVersions('13.37', '1.18.2');      // 1