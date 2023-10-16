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

const today3 = new Date();
const month = (today3.getMonth() + 1).toString();
const day = today3.getDate().toString();
const year = today3.getFullYear().toString();

const formattedDate = month + "-" + day + "-" + year;

console.log(formattedDate);

// 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')

const today4 = new Date();
const englishFormattedDate = today4.toLocaleDateString("en-GB");
const germanFormattedDate = today4.toLocaleDateString("de-DE");

console.log("English:", englishFormattedDate);
console.log("German:", germanFormattedDate);

// 10. Output the current time in hours, mins & seconds

const now1 = new Date();
const hours = now1.getHours().toString().padStart(2, "0");
const minutes = now1.getMinutes().toString().padStart(2, "0");
const seconds = now1.getSeconds().toString().padStart(2, "0");

const currentTime = `${hours}:${minutes}:${seconds}`;
console.log(currentTime);

// 11. Make a clock by starting with the current time and then every second adds a second to the date and prints it.

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const currentTime = `${hours}:${minutes}:${seconds}`;

  //current time
  console.log(currentTime);
}

// Update clock every second - have greyed it out so doesn't keep printing time.
// setInterval(updateClock, 1000);

// Initial display
updateClock();

// 12. Create a copy of today

const today = new Date(); // current date and time
const copyOfToday = new Date(today); // copy of today

console.log(today); // original date
console.log(copyOfToday); // copy of today

// 13. Use the setter methods to find out what is 3years, 2months and 1 day from now

const today5 = new Date();

today5.setFullYear(today5.getFullYear() + 3);
today5.setMonth(today5.getMonth() + 2);
today5.setDate(today5.getDate() + 1);

console.log(today5);

// 14. Get your timezone from today (remember it's in mins and the sign is inverted)

const today6 = new Date();
const timezoneOffsetMinutes = today6.getTimezoneOffset();
console.log(timezoneOffsetMinutes);

// 15. Use the Intl module formatter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

const today7 = new Date();
const sydneyTime = new Intl.DateTimeFormat("en-AU", {
  timeZone: "Australia/Sydney",
  timeStyle: "medium",
}).format(today7);

console.log(sydneyTime);

// 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.

function createDuration({
  years = 0,
  months = 0,
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  milliseconds = 0,
}) {
  const yearInMs = years * (365 * 24 * 60 * 60 * 1000);
  const monthInMs = months * (30.44 * 24 * 60 * 60 * 1000); // assuming 30.44 days per month)
  const dayInMs = days * (24 * 60 * 60 * 1000);
  const hourInMs = hours * (60 * 60 * 1000);
  const minuteInMs = minutes * (60 * 1000);
  const secondInMs = seconds * 1000;

  const totalMilliseconds =
    yearInMs +
    monthInMs +
    dayInMs +
    hourInMs +
    minuteInMs +
    secondInMs +
    milliseconds;

  return totalMilliseconds;
}

const durationInMilliseconds = createDuration({
  years: 2,
  months: 3,
  days: 15,
  hours: 6,
  minutes: 30,
  seconds: 45,
  milliseconds: 500,
});

console.log(durationInMilliseconds);

// 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates

function getDateDiff(startDate, endDate) {
  let timeDiff = endDate - startDate;

  const years = Math.floor(timeDiff / (365 * 24 * 60 * 60 * 1000));
  timeDiff -= years * (365 * 24 * 60 * 60 * 1000);

  const months = Math.floor(timeDiff / (30.44 * 24 * 60 * 60 * 1000));
  timeDiff -= months * (30.44 * 24 * 60 * 60 * 1000);

  const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
  timeDiff -= days * (24 * 60 * 60 * 1000);

  const hours = Math.floor(timeDiff / (60 * 60 * 1000));
  timeDiff -= hours * (60 * 60 * 1000);

  const minutes = Math.floor(timeDiff / (60 * 1000));
  timeDiff -= minutes * (60 * 1000);

  const seconds = Math.floor(timeDiff / 1000);
  timeDiff -= seconds * 1000;

  const milliseconds = timeDiff;

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
}

const startDate = new Date(2022, 0, 1); // January 1, 2022
const endDate = new Date(2023, 6, 15, 12, 30, 0, 500); // July 15, 2023, 12:30:00.500
const dateDiff = getDateDiff(startDate, endDate);

console.log(dateDiff);

/*****************************************************************
 * For date-fns Exercises follow link on page
 ******************************************************************/
