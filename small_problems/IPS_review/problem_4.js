/* Problem 4

Start: :03 - :24 - 21 minutes

Problem: Caesar Cipher
Input: String, and integer
Output: New string
Rules:
  Only letters are changed by the cipher
  case remains the same
    if the letter count exceeds the alphabet, loop to start of alphabet


Questions:
  Will we always be given a string and an integer?
    Will the integer ever be negative? or Zero?
  How should invalid inptu be handled?
    return "Invalid input"

Examples:
// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"


Data Structure:
Array of characters

Algorithm:
check if input is valid

declare `letters` and intiailize it to an array of all lower case letters

split input string into characters
declare a upcase variable to false;
map of characters
  check if character is a upper case or lowercase letter
  if uppercase
    set upcase to true
  if lowercase
    set upcase to false
  if not a alphabetical character
    return character
  
  find the index of current char downcased in teh `letters` array
    add `cipherNum` to the index
      if new index is now greater than 25 (0 based index) find the remainder after dividing by 26
  
  retrieve the char at new index from letters
  if upcase is true, upcase the new char

  return the new char.

  join the characters back together and return
    
*/

function caesarEncrypt(string, num) {
  if (typeof string !== 'string' || typeof num !== 'number') return 'Invalid Input';

  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let upcase = false;
  let chars = string.split('');

  chars = chars.map(char => {
    if (char >= 'a' && char <= 'z') {
      upcase = false;
    } else if (char >= 'A' && char <= 'Z') {
      upcase = true;
    } else {
      return char;
    }

    let letterIndex = letters.findIndex(x => x === char.toLowerCase());
    letterIndex += num;

    if (letterIndex > 25) {
      letterIndex = letterIndex % 26;
    }

    let resChar = letters[letterIndex];

    if (upcase) {
      resChar = resChar.toUpperCase();
    }

    return resChar;
  })

  return chars.join('');
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

console.log(caesarEncrypt([]));           // invalid input
console.log(caesarEncrypt("asa", "asa")); // invalid input