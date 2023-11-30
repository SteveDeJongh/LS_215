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

function wordCap(string) {
  string = string.toLowerCase();

  let words = string.split(' ');
  words = words.map(word => word[0].toUpperCase() + word.slice(1));
  return words.join(' ');
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

// LS Solution

function wordCap(words) {
  return words.split(' ')
              .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}

// 5

// function swapCase(string) {
//   let chars = string.split('');

//   chars = chars.map(char => {
//     if (/[a-z]/.test(char)) {
//       return char.toUpperCase();
//     } else if (/[A-Z]/.test(char)) {
//       return char.toLowerCase();
//     } else {
//       return char;
//     }
//   });

//   return chars.join('');
// }

// Re formatted.

function swapCase(string) {
  return string.split('')
               .map(char => {
                  if (/[a-z]/.test(char)) {
                    return char.toUpperCase();
                  } else if (/[A-Z]/.test(char)) {
                    return char.toLowerCase();
                  } else {
                    return char;
                  }
                })
                .join('');
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

// 6

function staggeredCase(string) {
  let chars = string.split('');

  return chars.map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

// 7

function staggeredCase(string) {
  let chars = string.split('');
  let whichCase = true;

  return chars.map(char => {
    if (whichCase && /[a-z]/i.test(char)) {
      whichCase = false;
      return char.toUpperCase();
    } else if (/[a-z]/i.test(char)) {
      whichCase = true;
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"

// LS Solution

function staggeredCase(string) {
  let needUpper = true;
  let newChar;

  return string.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      if (needUpper) {
        newChar = char.toUpperCase();
      } else {
        newChar = char.toLowerCase();
      }

      needUpper = !needUpper;
      return newChar;
    } else {
      return char;
    }
  }).join('');
}

// 8

function wordLengths(string) {
  if (arguments.length === 0 || string.length === 0) {
    return [];
  }
  return string.split(' ').map(word => {
    return `${word} ${word.length}`
  });
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

// 9

function searchWord(word, text) {
  return text.split(' ').filter(textWord => {
    return textWord.toLowerCase() === word.toLowerCase();
  }).length;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3

// LS Solution using match and a constructed regex.

function searchWord(word, text) {
  const regex = new RegExp(word, 'gi');
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}


// FE ensuring we only match full words.

function searchWord(word, text) {
  if (!word || !text) return 'Argument error';

  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}

// 10

function searchWord(word, text) {
  if (!word || !text) return 'Argument error';

  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  return text.replace(regex, `**${word.toUpperCase()}**`);
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"