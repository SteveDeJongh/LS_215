function allNumbers(stringInput) {
  stringInput = stringInput.replace(/ /, "");
  stringNumbers = stringInput.split(',');
  let currentMaxNumber = Number(stringInput.split(',')[0].split(/\.\.|-|:/)[0]);
  let resultNumbers = [];

  stringNumbers.forEach((numberIt, idx) => {
    let workingNumbers = numberIt.split(/\.\.|-|:/);
    let workingNumbersLength = workingNumbers.length;

    if (idx === 0 && workingNumbersLength === 1) { // Path for first number of input.
      // console.log('branch 1')
      resultNumbers.push(String(numberIt));
    } else if (workingNumbersLength === 1) { // Path for a non-range.
      // console.log('in here!');
      // console.log(`currentMaxNumber ${currentMaxNumber}`);
      // console.log(`workingNumbers[0] ${workingNumbers[0]}`);

      let nextNum = nextNumFinder(Number(currentMaxNumber), workingNumbers[0])

      currentMaxNumber = nextNum;
      resultNumbers.push(String(nextNum));
    } else { // Path for a range
      // console.log('else branch!');

      for (let i = 1; i < workingNumbersLength; i += 1) { 
        // console.log(`Working numbers array: ${workingNumbers}`);
        if (resultNumbers.length === 0) {
          currentMaxNumber = String(workingNumbers[0]);
          resultNumbers.push(String(workingNumbers[0]));          
        } else if (i === 1) {
          resultNumbers.push(String(nextNumFinder(Number(currentMaxNumber), workingNumbers[0])));
        }
        // console.log(`Result numbers array: ${resultNumbers}`);
        // console.log(`Last result Number: ${resultNumbers[resultNumbers.length - 1]}`);

        let startNum = Number(resultNumbers[resultNumbers.length - 1]); // returning NaN

        // console.log(`Logging startnum line 39: ${startNum}`)
        // console.log(`logging working numers[i] ${workingNumbers[i]}`)

        let endNum = Number(nextNumFinder(startNum, workingNumbers[i]));
        // console.log(`Logging the endNum! ${endNum}`);

        for (let x = startNum + 1; x <= endNum; x += 1) {
          // console.log(`we in here?`)
          resultNumbers.push(String(x));
        }
        currentMaxNumber = resultNumbers[resultNumbers.length - 1];
        // console.log(`Final log of resultNumbers array after loop ${resultNumbers}`)
      }
    }
  });

  return resultNumbers.join(', ');
}

function nextNumFinder(current, significantPart) {
  let status = true;
  let number = current;
  significantPart = significantPart.trim();
  // console.log(`Significant part ${significantPart}`);
  // console.log(`Sginificant part length ${significantPart.length}`);
  // console.log(`Sginificant part trimmed length ${significantPart.trim().length}`);

  // console.log(`Number from nextNumFinder ${number}`)
  while (status) {
    let length = significantPart.length;
    number += 1;
    // console.log(number);
    let stringNum = String(number);

    if (stringNum.slice(-length) === significantPart) {
      status = false
    }
  }
  return number;
}

console.log(allNumbers('1,5,9,1')); // 1, 5, 9, 11
console.log(allNumbers('1-9, 2')); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 12
console.log(allNumbers('1:3, 2, 1-3')); // 1, 2, 3, 12, 21, 22, 23
console.log(allNumbers("1, 3, 7, 2, 4, 1")); // --> 1, 3, 7, 12, 14, 21
console.log(allNumbers("1-3, 1-2")); // --> 1, 2, 3, 11, 12
console.log(allNumbers("1:5:2")); // --> 1, 2, 3, 4, 5, 6, ... 12
console.log(allNumbers("104-2")); // --> 104, 105, ... 112
console.log(allNumbers("104-02")); // --> 104, 105, ... 202
console.log(allNumbers("545, 64:11")); // --> 545, 564, 565, .. 611