// LS 215 Lesson 2 - Practice Problems: Strings

// 1

let firstName = 'Steve';
let lastName = 'De Jongh';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// 2

console.log(firstName.concat(lastName));

// 3

let fullNameArray = fullName.split(' ');
console.log(fullNameArray);

// 4

let language = 'JavaScript';
let idx = language.indexOf('S');
console.log(idx);

// 5

let charCode = language.charCodeAt(idx);
console.log(charCode);

// 6

console.log(String.fromCharCode(charCode));

// 7

console.log(language.lastIndexOf('a'));

// 8

let a = 'a';
let b = 'b';

console.log(a > b);
b = 'B';
console.log(a > b);

// 9

console.log(language.slice(1,4));
console.log(language.slice(2,4));

// 10

console.log(language.substring(1,4));
console.log(language.substring(2,4));

// 11

console.log(language.slice(1, -1));
console.log(language.slice(2, -1));

// 12

console.log(language.substring(1, -1));
console.log(language.substring(2, -1));

// 13

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';

let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();

console.log(compoundSentence);

// 14

console.log(fact1[0]);
console.log(fact2[0]);

// 15

let pi = (22 / 7);
pi = pi.toString();

console.log(pi.lastIndexOf('14'));

// 16

// let boxNumber = 356.toString(); // Raises an error. JS interprets the `.` after the number as a decimal point. We can avoid this by adding a second `.` `365..toString()`.

// let boxNumber = 356..toString();

// OR

let boxNumber = (356).toString();

console.log(boxNumber);

// 17

boxNumber = parseInt(boxNumber, 10);
console.log(typeof(boxNumber));
boxNumber = String(boxNumber);
console.log(typeof(boxNumber));

// 18

let inputName = prompt('What is your name?');

if (inputName.endsWith('!')) {
  inputName = inputName.slice(0, -1);
  console.log(`HELLO ${inputName.toUpperCase()}. WHY ARE WE SCREAMING?`)
} else {
  console.log(`Hello ${inputName}.`)
}

// Or not using template literals.

let name = prompt('What is your name?');

if (name.endsWith('!')) {
  name = name.slice(0, -1);
  console.log('HELLO ' + name.toUpperCase() + '. WHY ARE WE SCREAMING?');
} else {
  console.log('Hello ' + name + '.');
}