// JS210 - Small Problems - Interpretive Problem Solving - Problem 5 - Vigenere Cipher

// Problem:
// Input: String, and keyword
// Output: string

// Rules:
// each letter in the keyword represents a value that the character should be moved forward
// As we move through the input string
  // we only move along the cipher value if the character is alphabetical
  // and keep looping over the cipher keyword.

// Examples:
// vigenere("Pineapples don't go on pizzas!", "meat") //
// Bmnxmtpeqw dhz'x gh ar pbldal!

// Data structure
// Array to key alphabetical values to indexes
// strings

// Algorithm:
// Initialize an array to all letters of the alphabet
// split the keyword into an array of characters
// map over the characters - changing the value to it's index in the alphabet array

// initialize a variable to track count of conversions
// loop through the characters in the input string
// if the current character is alphabetical
  // apply the caeser cipher to each character with the value at count % keyword.length
  // increase count by 1
// if not alphabetical
  // return char as is
// join all chars and return string

function vigenere(string, keyword) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  keyword = keyword.toLowerCase().split('').map(let => alphabet.indexOf(let));

  let count = -1;

  return string.split('').map(char => {
    if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
      count += 1;
      return caesarEncrypt(char, keyword[count % keyword.length])
    } else {
      return char;
    }
  }).join('');
}

console.log(vigenere("Pineapples don't go on pizzas!", "meat")); //
// Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(vigenere("Pineapples don't go on pizzas!", "Aa")); //
// result: Pineapples don't go on pizzas!
console.log(vigenere("Pineapples don't go on pizzas!", "cab")); //
// result: Riogaqrlfu dpp't hq oo riabat!

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