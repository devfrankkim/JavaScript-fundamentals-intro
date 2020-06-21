// Spread Operators for Arrays and Objects

// Array

// example 1
var frank = "FRANKKIM";
var characters = [frank];
characters = ["frank", "is", "cool"];

console.log(frank); // "FRANKKIM"
console.log(characters); //["frank", "is", "cool"]

// example 2
var frank = ["FRANKKIM"];
var characters = frank;

console.log(characters); //["FRANKKIM"]
console.log(characters === frank); // true

characters = ["frank", "is", "cool"];

console.log(frank); //["FRANKKIM"]
console.log(characters); //["frank", "is", "cool"]

// Objects

var andrea = { name: "Andrea" };
var frank = andrea;

console.log(frank); //  { name: "Andrea" };

frank.name = "frank";
console.log(frank); // {name: "frank"}
console.log(andrea); // {name: "frank"}

// SOLUTION for Array

// example 1
var frank = "FRANKKIM";
var characters = [...frank];
// [ 'F', 'R', 'A', 'N', 'K', 'K', 'I', 'M' ]

// example 2

var items = ["This", "is", "a", "sentence"];
console.log(items); //(4) ["This", "is", "a", "sentence"]

// Notice that this is not an array anymore. Instead, it is a string.

console.log(...items); // "This is a sentence"

// example 3

Math.max(1, 2, 3, 4, 5, 999); // 999

var numbers = [1, 2, 3, 4, 5, 999];

console.log(numbers); // [1, 2, 3, 4, 5, 999]
console.log(...numbers); // 1 2 3 4 5 999

Math.min(...numbers); // 1
Math.max(...numbers); // 999

// SOLUTION for Objects

// example 1
var andrea = { name: "Andrea" };
var frank = { ...andrea }; // Pass me the value but don't give me the reference(original value)

console.log(andrea); //  { name: "Andrea" }
console.log(frank); //  { name: "Andrea" }

frank.name = "frank kim";

console.log(andrea); // { name: "Andrea" }
console.log(frank); // {name: "frank kim"}

// example 2

var obj1 = { firstName: "frank", age: 100 };
var obj2 = { lastName: "kim", gender: "M" };
var newObj = { ...obj1, ...obj2, planet: "Mars" };
console.log(newObj);

// {firstName: "frank", age: 100, lastName: "kim", gender: "M", planet: "Mars"}
