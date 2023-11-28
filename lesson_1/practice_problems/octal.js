// Lesson 1 - Practice Problem: Octal

function octalToDecimal(numberString) {
  let length = numberString.length - 1;
  let decimalParts = numberString.split('').map(dig => {
    let val = dig * Math.pow(8, length); // relies on implicit conversion of string to Number.
    length -= 1;
    return val;
  });

  return decimalParts.reduce((sum, parts) => sum += parts);
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9

// LS Solution

function octalToDecimal(numberString) {
  let decimalParts = numberString.split('').map((digitChar, index) => {
    return Number(digitChar) * Math.pow(8, numberString.length - index - 1);
  });

  return decimalParts.reduce((sum, number) => sum + number);
}

// Alternative solution, using only reduce

function octalToDecimal(numberString) {
  return numberString.split('').reduce((sum, digitChar, index) => {
    return sum + Number(digitChar) * Math.pow(8, numberString.length - index - 1);
  }, 0);
}