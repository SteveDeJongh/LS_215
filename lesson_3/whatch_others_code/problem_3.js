// Problem 3

// Problem Description
// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

// Examples:

// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true

// Problem:
// Input: String
// Output: boolean
// Rules:
// Each block can only be used once to make up the word
  // Each block has 2 letters, if one letter is used, the other can't be.
// Blocks are not case sensitive

// Potential questions:
  // Will the input always be a stsring with a length of 1 or greater?
  // How should invalid input be handled?
  // Do spaces count?
  // Punctuation?

// Examples:
// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true

// Data Strucutre:
// Input: string
// Split input into array of characters?
// Blocks, array of 2 element arrays containing each of the two characters

// Algorithm:
// Convert input string to upper case and split into chars.
// create a used block array.

let spellingBlocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']];

function isBlockWord(word) {
  word = word.toUpperCase().split('');

  let usedBlocks = [];

  for (let i = 0; i < word.length; i += 1) {
    let char = word[i];

    if (searchForBlock(char, usedBlocks)) {
      return false
    } else {
      usedBlocks.push(searchForBlock(char, spellingBlocks))
    }
  };

  return true
}

function searchForBlock(search, blocks) {
  return blocks.find(block => {
    return block.includes(search);
  });
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true