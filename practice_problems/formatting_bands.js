// Lesson 1 - Practice Problem: Formatting Bands

// Solution 1, good solution for reducing number of side effects by returning a new array and new objects.

// let bands = [
//   { name: 'sunset rubdown', country: 'UK', active: false },
//   { name: 'women', country: 'Germany', active: false },
//   { name: 'a silver mt. zion', country: 'Spain', active: true },
// ];

// function processBands(data) {
//   return data.map((band) => {
//     return {
//       name: removePeriods(capitalizeWords(band.name)),
//       country: 'Canada',
//       active: band.active,
//     }
//   });
// }

// function removePeriods(string) {
//   return string.replace(".", "");
// }

// function capitalizeWords(string) {
//   let words = string.split(' ');

//   words = words.map((word) => {
//     let chars = word.split('');
//     chars[0] = chars[0].toUpperCase();
//     return chars.join('');
//   });

//   return words.join(' ');
// }

// processBands(bands);

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]

// 2nd attempt, using hints from "Thinking in Abstractions" with side effects.

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map((band) => {
    updateCountry(band);
    capitalizeBandNames(band);
    removeDotsInBandName(band);
    return band
  });
}

function updateCountry(band) {
  band.country = 'Canada';
}

function removeDotsInBandName(band) {
  band.name = band.name.replace(".", "");
}

function capitalizeBandNames(band) {
  let name = band.name.split(' ');

  name = name.map((word) => {
    let chars = word.split('');
    chars[0] = chars[0].toUpperCase();
    return chars.join('');
  });

  band.name = name.join(' ');
}

processBands(bands);