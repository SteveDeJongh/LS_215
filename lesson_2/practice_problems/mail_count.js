// LS215 - Lesson 2 - Mail Count

// function mailCount(emailData) {
//   let emails = emailData.split('##||##\n\n').map(email => email.split('#/#\n'));
//   let dates = emails.map(email => new Date(email[2].match(/\d\d-\d\d-\d\d\d\d/)));
//   dates.sort((a, b) => a - b);
//   console.log(`Count of Email: ${emails.length}`);
//   console.log(`Date Range: ${dates[0]} - ${dates[dates.length - 1]}`);
// }

// mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016

// LS Solution

function mailCount(emailData) {
  let emails = emailData.split('##||##');
  let count = emails.length;
  let emailDates = emails.map(email => email.split('#/#')[2]);

  console.log('Count of Email: ' + count);
  console.log('Date Range: ' + displayableDateRange(emailDates));
}

function displayableDateRange(dates) {
  let dateObjects = getDateObjects(dates);
  dateObjects.sort((a, b) => a.valueOf() - b.valueOf());
  return dateObjects[0].toDateString() + ' - ' + dateObjects[dateObjects.length - 1].toDateString();
}

function getDateObjects(dates) {
  return dates.map(date => {
    let dateElements = date.split(' ')[1].split('-');
    let month = parseInt(dateElements[0], 10) - 1;
    let day = parseInt(dateElements[1], 10);
    let year = parseInt(dateElements[2], 10);
    return new Date(year, month, day);
  });
}

mailCount(emailData);