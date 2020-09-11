// Generate Random Hex Colour Values
// Use a function that can return a full 6 digits hex value with one line

// # Solution 1
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

function colour() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    console.log(hexColor);
  }
  return hexColor;
}

console.log(color());

// # Solution 2
function color() {
  // let c = Math.random();
  // console.log(c);
  // c = c.toString(16);
  // console.log(c);
  // console.log(c.split(6));

  return "#" + Math.random().toString(16).substring(2, 8);
}

console.log(color());

/*
substring vs slice
https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring

*/
