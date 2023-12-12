/* Practice Problem #1 Distinct String
Start :02, end :10.

Problem:
Input: array of strings, integer
Output: string

Rules:
  A distinct string is one that only occurs once in the array.
  return the `nth` distinct string in the array.

Questions:
  Will we always be passed in an array of strings and a integer?
  are "a" and "A" 2 distinct strings? Is the match case sensitive?
  Will the array always only contain strings?
  Will the 2nd argument ever be 0?


Examples:
distinctString(["d","b","c","b","c","a"], 2); // "a"
distinctString(['a', 'A', 'B'], 2); // 'A'

Data structure:
Array

Algorithm:
initialize a `distincts` array to an empty array
loop over each string in passed in array.
  check the currents strings count in the array
  if one, push element to distincts
return the `nth` - 1 (for the index) of the `distincts` array.

*/

function distinctString(arr, num) {
  let distincts = [];

  arr.forEach(string => {
    if (arr.filter(x => x === string).length === 1) {
      distincts.push(string);
    }
  });
  return distincts[num - 1] || "Invalid";
}

console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
console.log(distinctString(['a', 'A', 'B'], 2)); // 'A'
console.log(distinctString([], 0)); // "Invalid"
console.log(distinctString(['a', ,'a', 'A'], 1)); // 'A'
