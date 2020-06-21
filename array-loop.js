// Arrays and for loop

const names = ["andrea", "tessa", "frank"];
const lastName = "kim";

let newArray = [];

// for loop

for (let i = 0; i < names.length; i++) {
  newArray.push(names[i] + " " + lastName);
}

console.log(newArray);

// map funciton

let newArray = names.map(x => x + " " + lastName);
