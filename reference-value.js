// Reference vs Value

// Primitive Data Types => String, Number, Symbol, Boolean, Undefined, Null,

// Arrays, Functions, Objects = object

// typeof

/* 
when assigning "Primitive Data type" value to a variable.
=> NOT affecting original value.


when assigning "Non-Primitive Data Type" value to a variable (by reference)
=> Any changes will affect all the references.
*/

// Primitive Data type

var number1 = 1;
var number2 = number1;

number2 = 7;

console.log(`the first value is ${number1}`); // 1
console.log(`the first value is ${number2}`); // 7

// non-primitive data

var person1 = { name: "Frank" };
var person2 = person1; // copying

person2.name = "Andrea";

console.log("person1.name =>", person1.name); // Andrea
console.log("person2.name =>", person2.name); // Andrea

// non-primitive data, solution "SPREAD OPERATOR"

var person1 = { name: "Frank" };
var person2 = { ...person1 }; // copying

person2.name = "Andrea";

console.log("person1.name =>", person1.name); // Frank
console.log("person2.name =>", person2.name); // Andrea
