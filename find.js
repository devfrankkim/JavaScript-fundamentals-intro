// find
// Great for getting unique value!!!
// Returns a single instance(Object) or Single Value
// Returns first match, if no match => undefined
// Returns the value of the first element in the provided array that satisfies the provided testing function.

const people = [
  { name: "frank", age: 30, position: "developer", id: 1 },
  { name: "andrea", age: 20, position: "designer", id: 2 },
  { name: "tessa", age: 10, position: "dog", id: 3 }
];

// Example 1
const person = people.find(function(person) {
  return person.id === 3;
});

console.log(person); // {name: "tessa", age: 10, position: "dog", id: 3}
console.log(
  people.find(function(person) {
    return person.name === "frank";
  })
); // {name: "frank", age: 30, position: "developer", id: 1}

// Example 2
const names = ["tuna", "salmon", "fish"];

console.log(
  names.find(function(name) {
    return name === "tuna";
  })
); // tuna

// **** Filter (Array) VS find (Object or Single Value) ****

const filterName = people.filter(function(person) {
  return person.name === "frank";
});
// [{name: "frank", age: 30, position: "developer", id: 1}]
console.log(filterName[0].name); // "frank"

const findName = people.find(function(person) {
  return person.name === "frank";
});
// {name: "frank", age: 30, position: "developer", id: 1}

console.log(findName.name); // "frank"

const filterTuna = names.filter(function(name) {
  return name === "tuna";
});
// ["tuna"]
console.log(filterTuna[0]); // "tuna"

const findTuna = names.find(function(name) {
  return name === "tuna";
});
// tuna

console.log(findTuna); // "tuna"

// Array.find()

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);

console.log(found); // 12;
