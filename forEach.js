// forEach
// Does NOT return a new array
// arr.forEach(callback(currentValue [, index [, array]])[, thisArg])

// 0. Make an Array.
// 1. pass CALLBACK directly with anonymous function
// 2. pass it as a reference(parameter) with function separately

const people = [
  { name: "frank", age: 30, position: "developer" },
  { name: "andrea", age: 20, position: "designer" },
  { name: "tessa", age: 10, position: "dog" }
];

// Example 1
people.forEach(person => console.log(person.name));
// frank
// andrea
// tessa

function showPerson(person) {
  console.log(person.position.toUpperCase());
  // DEVELOPER
  // DESIGNER
  // DOG
}

// Example 2
people.forEach(showPerson); // Do NOT invoke the callback function right away.
// {name: "frank", age: 30, position: "developer"}
// {name: "andrea", age: 20, position: "designer"}
// {name: "tessa", age: 10, position: "dog"}

// Example 3
people.forEach(function(person) {
  // not invoking this function
  console.log(person.name.toUpperCase());
});

// FRANK
// ANDREA
// TESSA
