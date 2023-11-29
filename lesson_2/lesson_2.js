// LS 215 - Lesson 2 - Regex Review

// 1

function isUrl(string) {
  return !!string.match(/^https?:\/\/\S+$/);
}

isUrl('https://launchschool.com');   // -> true
isUrl('http://example.com');         // -> true
isUrl('https://example.com hello');  // -> false
isUrl('   https://example.com');     // -> false

// 2

function fields(string) {
  return string.split(/[^a-zA-Z0-9]+/);
}

fields("Pete,201,Student");
// -> ['Pete', '201', 'Student']

fields("Pete \t 201    ,  TA");
// -> ['Pete', '201', 'TA']

fields("Pete \t 201");
// -> ['Pete', '201']

fields("Pete \n 201");
// -> ['Pete', '\n', '201']

// LS Solution

let fields = function (str) {
  return str.split(/[ \t,]+/);
};

// 3

let mysteryMath = function(string) {
  return string.replace(/[+\-\/*]/, '?')
}

mysteryMath('4 + 3 - 5 = 2');
// -> '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 + 2) / 7 - 1 = 1'

// 4

function mysteriousMath(equation) {
  return equation.replace(/[+\-*\/]/g, '?')
}

mysteriousMath('4 + 3 - 5 = 2');           // -> '4 ? 3 ? 5 = 2'
mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'

// 5

function danish(string) {
  return string.replace(/\b(apple|blueberry|cherry)\b/, 'danish')
}

danish('An apple a day keeps the doctor away');
// -> 'An danish a day keeps the doctor away'

danish('My favorite is blueberry pie');
// -> 'My favorite is danish pie'

danish('The cherry of my eye');
// -> 'The danish of my eye'

danish('apple. cherry. blueberry.');
// -> 'danish. cherry. blueberry.'

danish('I love pineapple');
// -> 'I love pineapple'

// 6

function formatDate(date) {
  return date.replace(/(\d\d\d\d)-(\d\d)-(\d\d)/, '$3.$2.$1')
}

formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2016/06/17'); // -> '2016/06/17' (no change)

// 7

function formatDate(date) {
  return date.replace(/(\d\d\d\d)(-?\/?)(\d\d)\2(\d\d)/, '$4.$3.$1')
}

formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2017/05/03'); // -> '03.05.2017'
formatDate('2015/01-31'); // -> '2015/01-31' (no change)