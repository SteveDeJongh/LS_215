/* Problem 3

25 mins

Problem: Now i know my ABCs
Input: A string
Output: True or false depending on if the word can be spelled with the blocks
Rules:
  a block can only be used once
  matches are case insensitive

Questions:
  Can the input every be anything other than a string?
    If so, what should i return?
  Can the input contain spaces?
    How should i handle those?
      Spaces don't count, can contain any number of spaces.

Examples:
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('je st');      // true
isBlockWord('BU TCH');     // false

Data Structure:
Array of 2 letter "Blocks"
  "block" will be arrays containing both letters
Array of characters

Algorithm:

check that the input is typof 'string'
  if not, return 'Invalid Input'

declare a variable `blocks` which contains the blocks
uppercase the input string and split into an array of chars called `chars`

map over the chars
  if the char is a space
    return true
  
  if a block containing the letter can be found in the `blocks` array
    delete that block from the `blocks` array
    return true
  
  otherwise
    return false;

return the value of checking if all values in `chars` are now `true`;

*/

function isBlockWord(input) {
  if ('string' !== typeof input) {
    return 'Invalid Input';
  }

  let blocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']];

  let chars = input.toUpperCase().split('');

  chars = chars.map(let => {
    if (let === " ") return true;

    let yesOrNo = getIndexOfBlock(blocks, let);
    if (yesOrNo >= 0) {
      blocks.splice(yesOrNo, 1);
      return true;
    }

    return false;
  });

  return chars.every(x => x === true);
}

function getIndexOfBlock(blocks, let) {
  return blocks.findIndex(block => {
    return block.includes(let);
  })
}

console.log(isBlockWord([]));           // 'Invalid Input'
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('je st'));      // true
console.log(isBlockWord('BU TCH'));     // false

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false