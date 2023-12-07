// JS210 - Small Problems - Medium 2 - Problem 4 - Unlucky Days

// Unlucky days occur on Friday the 13th
  // Can only happen once per month

// Algorithm:
// create a date object with 13th day, 1st month and `year` year
// create a `badDays` var
// Loop from 1 to 12 
  // set date's month to current iteration number
  // check the day of date
  // if it's friday + 1 to badDays
// return badDays

function fridayThe13ths(year) {
  let date = new Date(`January 13, ${year}`)
  let badDays = 0;
  for (let i = 0; i <= 11; i += 1) {
    date.setMonth(i);
    if (date.getDay() === 5) {
      badDays += 1;
    }
  }
  return badDays;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

// LS Solution

function fridayThe13ths(year) {
  const thirteenths = [];

  for (let i = 0; i < 12; i += 1) {
    thirteenths.push(new Date(year, i, 13));
  }

  return thirteenths.reduce((count, day) => day.getDay() === 5 ? (count + 1) : count, 0);
}