// const ref = document.getElementById("root");
// console.log("apple");
// ref.innerHTML = "apple";
/*****************************************************************
 * Vanilla Date Exercises
 ******************************************************************/

// 1. Write a function that tests if something is a Date object or not. (Hint: Remember that Date is a class, so this would have to be an instance of that class...)

function isDate(obj) {
  return obj instanceof Date;
}

console.log(isDate(new Date())); //yes- current date
console.log(isDate(new Date("2023-09-24"))); //yes - specific date
console.log(isDate(123456789)); //no - numbers

// 2. Create today's date

console.log(new Date());

// 3. Get the current timestamp (using a static method of Date)

const currentTimestampInSeconds = Math.round(Date.now() / 1000);
console.log(currentTimestampInSeconds);

// 4. Create a date to represent next Christmas Day

console.log(new Date("2023-12-25"));

//or

const now = new Date(); // current date
const currentYear = now.getFullYear(); // current year

const nextChristmas = new Date(currentYear, 11, 25); // date of Christmas in current year

// Check if Christmas has already passed this year
if (nextChristmas < now) {
  // If Christmas has passed, set to next year
  nextChristmas.setFullYear(currentYear + 1);
}

console.log(nextChristmas);

// 5. Work out how many days it is until christmas

// Get difference between now and xmas
// Divide by number of ms in 1 day:
// milliseconds per day = 24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second
// Math.floor for whole days; Math.ceil to include today

const currentDate1 = new Date(); // current date

const currentYear1 = currentDate1.getFullYear(); // Christmas day in current year
const christmasDate = new Date(currentYear1, 11, 25); // December is 11 due to 0-index

const timeDifference = christmasDate - currentDate1; // Time difference (milliseconds)

const daysUntilChristmasCeil = Math.ceil(
  timeDifference / (1000 * 60 * 60 * 24)
); // Convert milliseconds to days (ceil version)
const daysUntilChristmasFloor = Math.floor(
  timeDifference / (1000 * 60 * 60 * 24)
); // Convert milliseconds to days (floor version)

console.log(`${daysUntilChristmasCeil} days until Christmas.`);
console.log(`${daysUntilChristmasFloor} days until Christmas.`);

// 6. I'm going to make 2 random dates. I want you to log out which one is earlier (or if they are the same?!)

//instructor's code
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const date1 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date1", date1);

const date2 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date2", date2);

//My answer
if (date1 < date2) {
  console.log("date1 is earlier than date2");
} else if (date2 < date1) {
  console.log("date2 is earlier than date1");
} else {
  console.log("date1 and date2 are the same");
}

// 7. How do I test if a date is valid? ****

function isDateValid(date) {
  return date instanceof Date && !isNaN(date);
}

const validDate = new Date("2023-09-24");
const invalidDate = new Date("hello");

console.log(isDateValid(validDate));
console.log(isDateValid(invalidDate));

// 8. Output today in the following format: MM-DD-YYYY - using the getter methods on the date object

// 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')

// 10. Output the current time in hours, mins & seconds

// 11. Make a clock by starting with the current time and then every second adds a second to the date and prints it.

// 12. Create a copy of today

// 13. Use the setter methods to find out what is 3years, 2months and 1 day from now

// 14. Get your timezone from today (remember it's in mins and the sign is inverted)

// 15. Use the Intl module formatter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

// 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.

// 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates

/*****************************************************************
 * For date-fns Exercises follow link on page
 ******************************************************************/
