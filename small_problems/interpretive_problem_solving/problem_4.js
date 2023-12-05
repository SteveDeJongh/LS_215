// JS210 - Small Problems - Interpretive Problem Solving - Problem 4 - Caesar Cipher

// Problem:
// Input: String and a integer
// Output: new string

// Rules:
// Characters should be moved forward `x` numbers in the alphabet while remaining in the same case
  // For increases that exceed the length of the alphabet, loop around to the start
// Non alphabetical characters are left unchanged
// Case remains the same

// Examples:
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

// Data Structure:
// This can be left as a string

// Algorithm:
// initialize empty string
// check if character is lowercase and/or uppercase alphabetical
  // (between char codes of lowercase and upper case values)
// if it is
  // add 'input' to charcode
  // if new charcode is > top of range, subtracts letters of alphabet from it.
  // append character to result string
// if character not a aphabetical character
  // append character to result string as is
// return string

// Code

function caesarEncrypt(string, cipher) {
  const alphabetCount = 26;
  const lowerCaseMin = 97;
  const lowerCaseMax = 122;
  const upperCaseMin = 65;
  const upperCaseMax = 90;

  return string.split('').map(let => {
    let charCode = let.charCodeAt(0);

    if (charCode >= lowerCaseMin && charCode <= lowerCaseMax) {
      charCode += cipher;
      while (charCode > lowerCaseMax) {
        charCode -= alphabetCount;
      }
      return String.fromCharCode(charCode);
    } else if (charCode >= upperCaseMin && charCode <= upperCaseMax) {
      charCode += cipher;
      while (charCode > upperCaseMax) {
        charCode -= alphabetCount;
      }
      return String.fromCharCode(charCode);
    } else {
      return let;
    }
  }).join('');
}

// LS Solution

function caesarEncrypt(plaintext, key) {
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let ciphertext = '';

  plaintext.split('').forEach(char => {
    if (char >= 'A' && char <= 'Z') {
      ciphertext += encrypt(char, key, upperAlphabet);
    } else if (char >= 'a' && char <= 'z') {
      ciphertext += encrypt(char, key, lowerAlphabet);
    } else {
      ciphertext += char;
    }
  });

  return ciphertext;
}

function encrypt(letter, key, alphabet) {
  const letterPos = alphabet.indexOf(letter);

  for (let step = 1; step <= key; step += 1) {
    if (!alphabet[letterPos + step]) {
      alphabet += alphabet;
    }

    letter = alphabet[letterPos + step];
  }

  return letter;
}

// Alternate LS Solution, also using charCodeAt

function caesarEncrypt(plaintext, key) {
  let ciphertext = '';

  plaintext.split('').forEach(char => {
    if (char >= 'A' && char <= 'Z') {
      ciphertext += encrypt(char, key, 'upper');
    } else if (char >= 'a' && char <= 'z') {
      ciphertext += encrypt(char, key, 'lower');
    } else {
      ciphertext += char;
    }
  });

  return ciphertext;
}

function encrypt(letter, key, letterCase) {
  const base = letterCase === 'upper' ? 65 : 97;
  const charCode = letter.charCodeAt(0) - base;
  const shifted = (charCode + key) % 26;

  return String.fromCharCode(shifted + base);
}