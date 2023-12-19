/* Problem 5

Start :55 end 1:12

Problem: Vigenere Cipher
Input: 2 strings, 1 the text to be ciphered, and 1 the keyword to use.
Output: Resulting of cipher string.
Rules:
  letters in the keyword represent the number to be use by the caesar cipher for that hcar
    The letters are numbered of a 0 based index.
    Only move forward in the keyword if the character is alphabetical.
  

Questions:
  Will the input always be 2 strings?
  Will the keyword always be lowercase?
  Will the keyword ever be longer than the text?

Examples:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Data Structure:
Arrays of letters and chars
Strings

Algorithm:

declare a `letters` array with lowercase letters a-z.

map over the characters of keyword, changing their value to the index of the character in the letters array.

delcare a cipherVal variable to 0

split the text into an array of chars

map over chars
  if char is not alphatetical
    return char
  else
    pass current char and keyword[cipherVal] to the caseer cipher function
    increase cipherVal by 1, if over length over keyword, set to 0;
    return the value of the function call

return the chars array joined back together.
*/

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function caesarEncrypt(string, num) {
  if (typeof string !== 'string' || typeof num !== 'number') return 'Invalid Input';

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

    if (letterIndex >= letters.length) {
      letterIndex = letterIndex % letters.length;
    }

    let resChar = letters[letterIndex];

    if (upcase) {
      resChar = resChar.toUpperCase();
    }

    return resChar;
  })

  return chars.join('');
}

function vigenereCipher(text, keyword) {
  keyword = keyword.toLowerCase().split('').map(char => {
    return letters.indexOf(char);
  })

  let cipherVal = 0;
  let regexp = /[^a-z]/i;

  return text.split('').map(char => {
    if (regexp.test(char)) return char;

    let returnVal = caesarEncrypt(char, keyword[cipherVal]);
    cipherVal = (cipherVal + 1 < keyword.length) ? cipherVal += 1 : 0;
    return returnVal;
  }).join('');
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat')); // Bmnxmtpeqw dhz'x gh ar pbldal!