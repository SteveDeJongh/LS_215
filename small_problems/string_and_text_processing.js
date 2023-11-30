// JS210 - Small Problems - String and Text Processing

// 1

function isUppercase(string) {
  return !string.match(/[a-z]/g)
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

// LS solution using `String.test`

function isUppercase(string) {
  return !/[a-z]/.test(string);
}

// 2

function removeVowels(arr) {
  return arr.map(string => {
    return string.replace(/[aeiou]/gi, '');
  });
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

// LS Solution, alternate and more wordy.

function removeVowels(stringArray) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return stringArray.map(string => string.split('').map(char => {
    if (VOWELS.includes(char)) {
      return '';
    } else {
      return char;
    }
  }).join(''));
}

// 3

function letterCaseCount(string) {
  let answerObj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }

  let chars = string.split('');

  chars.forEach(char => {
    if (/[a-z]/.test(char)) {
      answerObj.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      answerObj.uppercase += 1;
    } else {
      answerObj.neither += 1;
    }
  });

  return answerObj;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

// LS Solution

function letterCaseCount(string) {
  const lowerArray = string.match(/[a-z]/g) || [];
  const upperArray = string.match(/[A-Z]/g) || [];
  const neitherArray = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowerArray.length,
    uppercase: upperArray.length,
    neither: neitherArray.length,
  };
}

// 4

