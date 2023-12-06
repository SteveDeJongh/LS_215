// JS210 - Small Problems - Medium 1- Problem 5 - Word to Digit

// Problem:
// Input: String
// Output: String, with Wordnumbers replaced by digits

// rules:
// replace number words in string to digits

let words = {zero: 0,
             one: 1,
             two: 2,
             three: 3,
             four: 4,
             five: 5,
             six: 6,
             seven: 7,
             eight: 8,
             nine: 9};

function wordToDigit(input) {
  Object.keys(words).forEach(word => {
    let reg = new RegExp('\\b' + word + '\\b', 'g');
    input = input.replace(reg, words[word]);
  });

  return input;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('The weight is done.'));      // "The w8 is d1."