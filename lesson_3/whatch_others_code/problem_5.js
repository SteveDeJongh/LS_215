// Problem 5

// Problem Description
// Implement encoding and decoding for the rail fence cipher.

// The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.

// In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// Then reads off:

// WECRLTEERDSOEEFEAOCAIVDEN
// To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.

// ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// The first row has seven spots that can be filled with "WECRLTE".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Now the 2nd row takes "ERDSOEEFEAOC".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Leaving "AIVDEN" for the last row.

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// If you now read along the zig-zag shape you can read the original message.

// DECODING SOLUTION:

// Problem:
// Input: multi line string consisting of characters and '.'
// Output: Single line string

// Rules:
// Multi line strings are read diagnonally down until the last row
  // , then back up and down, until the end (right most side) of the text is reached.
//

// Questions:
  // What determines the number of lines?
  // Do lines always end at the top right?
  // Do we need to handle spaces?
  // Do we need to handle invalid input?
  // 

// Examples:

// input:
// W.....N.
// .E...O.D
// ..R.F...
// ...E....

// Data Structure:
// Array of lines
  // Array of chars


// Algorithm:
// initialize results array.
// initalize `lines` array of arrays.
// Split input on newline character
  // Split each line on spaces.
  // assign lines to array "lines"
// initialize a variable 'times' to length of the first lines array length
// Initalize a varaible to track line number (to reference array of arrays.)
// Initialize a upOrDown variable.
// Loop from 0 to 1 less than 'times'.
// Within the loop:
  // push the character from the current line at current index (times).
  // if line number is equal to `finalline` -1
    // switch upOrDown to False
  // if line number is 0
    // switch upOrDown to true
  // If UpOrDown is true (down)
    // increase `line` by 1.
  // else
    // decrease line by 1
// Return `results`.joined.

function decodeRailFence(input) {
  let results = [];
  let lines = input.split(/\n/).map(line => line.split(' '));

  let times = lines[0].length;
  let tracker = 0;
  let finalLine = lines.length - 1;
  let upOrDown = true;

  for (let i = 0; i < times; i += 1) {
    results.push(lines[tracker][i])
    if (tracker === finalLine) {
      upOrDown = false;
    } else if (tracker === 0) {
      upOrDown = true;
    }

    if (upOrDown) {
      tracker += 1;
    } else {
      tracker -= 1;
    }
  }

  return results.join('');
}

console.log(decodeRailFence(`W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .`));

// ENCODING SOLUTION:

// Problem:
// input: text as a string, and line count as integer
// Output: multiline text string.

// Rules:
// Text must be spread across X number of rails.
// Spaces in text are ignored.
// Text flows from top to bottom and back, bouncing until the end of the input string.

// Algorithm:

// reassign text to:
  // text removed of spaces, and split character by characer
// initalize `lines` to an array of arrays (times number of lines).
// initialize a variable `currentLine` to 0.
// Initialize `upOrDown` to true
// Initialize final line to linecount - 1;

// loop over characters from cipher.
// Within the loop:
  // loop over the lines array tracking index.
    // if the index matches the current line
      // shift the first element from the `chars` array to the current `line` array.
    // otherwise
      // push a '.'
    //
  // if line number is equal to `finalline` -1
    // switch upOrDown to False
  // if line number is 0
    // switch upOrDown to true
  // If UpOrDown is true (down)
    // increase `line` by 1.
  // else
    // decrease line by 1
// convert `lines` array to a series of lines
  // the lines have been joined by spaces


function encodeRailFenceToVisual(text, lineCount) {
  text = text.replaceAll(' ', '').split('');

  let lines = [];
  for (i = 1; i <= lineCount; i += 1) {
    lines.push([]);
  }

  let currentLine = 0;
  let upOrDown = true;
  let finalLine = lineCount - 1;

  text.forEach((char) => {
    lines.forEach((arr, index) => {
      if (currentLine === index) {
        arr.push(char);
      } else {
        arr.push('.');
      }
    });

    if (currentLine === finalLine) {
      upOrDown = false;
    } else if (currentLine === 0) {
      upOrDown = true;
    }

    if (upOrDown) {
      currentLine += 1;
    } else {
      currentLine -= 1;
    }
  })

  lines = linesArrayIntoString(lines);

  lines.forEach(line => console.log(line));
  return encodeVisualToText(lines);
}

function linesArrayIntoString(lines) {
  lines = lines.map(line => line.join(' '));
  return lines;
}

function encodeVisualToText(lines) {
  return lines.map(line => {
    return line.replaceAll(/[^A-Z]/g, "")
  }).join('')
}

console.log(encodeRailFenceToVisual('WE ARE DISCOVERED FLEE AT ONCE', 4)); // =>

// W . . . . . I . . . . . R . . . . . E . . . . . E
// . E . . . D . S . . . E . E . . . E . A . . . C .
// . . A . E . . . C . V . . . D . L . . . T . N . .
// . . . R . . . . . O . . . . . F . . . . . O . . .

// WIREEEDSEEEACAECVDLTNROFO