// map
// Does RETURN a new array.
// Does not change size of original array. Same amount of the original array.
// Uses values from original array when making new one.

const people = [
  { name: "frank", age: 30, position: "developer" },
  { name: "andrea", age: 20, position: "designer" },
  { name: "tessa", age: 10, position: "dog" }
];

// Example 0

const UNDEFINED = people.map(function() {}); //
console.log(UNDEFINED); // (3) [undefined, undefined, undefined]

// Example 1 (anonymous function) not invoking the function right away.
const names = people.map(function(person) {
  console.log(person.name);
  return `name : ${person.name}`;
});

console.log(names); // (3) ["name : frank", "name : andrea", "name : tessa"]

// Example 2
const ages = people.map(person => `age: ${person.age}`);

console.log(ages); // (3) ["age: 30", "age: 20", "age: 10"]

// Example 3 -> separate function with reference(parameter)
function names(person) {
  return ` position : ${person.position}`;
}

const positions = people.map(names);
console.log(positions); // ["position : developer", " position : designer", " position : dog"]

// Example 4 -> return a new Object inside an Array
const newPeople = people.map(function(person) {
  return { firstName: person.name.toUpperCase(), oldAge: person.age + 100 };
});

console.log(newPeople); // [{…}, {…}, {…}]

// 0: {firstName: "FRANK", oldAge: 130}
// 1: {firstName: "ANDREA", oldAge: 120}
// 2: {firstName: "TESSA", oldAge: 110}

// Example 5 -> include html

const newNames = people.map(function(person) {
  return `<h1>${person.name}</h1>`;
});

console.log(newNames);

// Example 6 -> DOM manipulation

document.body.innerHTML = newNames.join(" ");
