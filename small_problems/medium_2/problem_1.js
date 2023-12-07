// JS210 - Small Problems - Medium 2 - Problem 1 - Lettercase Percentage Ratio

// 

function letterPercentages(input) {
  let result = {lowercase: 0, uppercase: 0, neither: 0};

  let length = input.length;

  for (let i = 0; i < length; i += 1) {
    let char = input[i];

    if (char >= 'a' && char <= 'z') {
      result.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  }

  Object.keys(result).forEach(key => {
    result[key] = ((result[key] / length) * 100).toFixed(2);
  });

  return result;
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// Alt solution using RegExp

function letterPercentages(string) {
  const count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2),
  };
}