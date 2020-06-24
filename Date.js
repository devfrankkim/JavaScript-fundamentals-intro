// Date Object
// month & day start from 0
// It is up to us to set up the reference for month and day
const months = [
  "January",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December"
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

// const date = new Date('6/6/2002'); you can reference it yourself.

const NOW = new Date();
const monthNumber = NOW.getMonth();
const month = months[monthNumber];
const dayNumber = NOW.getDay();
const day = days[dayNumber];
const date = NOW.getDate();
const year = NOW.getFullYear();

const sentence = `${day}, ${date}, ${month}`;

document.body.innerHTML = sentence;
