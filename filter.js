// filter
// Does return a new array
// Can manipulate the size of new Array
// returns based on condition

const people = [
  { name: "frank", age: 30, position: "developer" },
  { name: "andrea", age: 20, position: "designer" },
  { name: "tessa", age: 10, position: "dog" }
];

const youngPeople = people.filter(function(person) {
  return person.age >= 20;
});

const developers = people.filter(function(person) {
  return person.position === "developer";
});

const seniorDevelopers = people.filter(function(person) {
  return person.position === "senior Developers";
});

console.log(youngPeople); // 0: {name: "frank", age: 30, position: "developer"}, 1: {name: "andrea", age: 20, position: "designer"}
console.log(developers); // [{name: "frank", age: 30, position: "developer"}]
console.log(seniorDevelopers); // []
