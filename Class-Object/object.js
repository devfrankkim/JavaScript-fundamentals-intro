// Nearly all objects in JavaScript are instances of 'Object'
// object = { key : value}

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

// Runtime: when the programm is running

let objFrank = { name: "frank", age: 100, value: "Direct from object" };

frank.hasJob = true; // you can keep adding values like this because JS is runtime language

console.log(frank.hasJob); // true

delete frank.hasJob;
console.log(frank.hasJob); // undefined
