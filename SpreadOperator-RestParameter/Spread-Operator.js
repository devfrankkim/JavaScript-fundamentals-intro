// Passing elements of an array to a function as separate arguments
// Also, the spread syntax can be used to merge arrays:
// Array.from()
// Merge

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

merged; // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

// ========== Array.from() ========
let str = "Hello";

let ArrayFrom = Array.from(str);
let spreadStr = [...str];
console.log(ArrayFrom);
console.log(spreadStr);

let arr = [1, 2, 3];
let arrCopy = [...arr];

// Do the arrays have the same contents?
JSON.stringify(arr) === JSON.stringify(arrCopy); // true

// Are the arrays equal?
arr === arrCopy; // false (not same reference)

arr.push(4);
arr; // 1, 2, 3, 4
arrCopy; // 1, 2, 3

// ========   Note that it is possible to do the same thing to make a copy of an object:  ===========
let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj };

// Do the objects have the same contents?
JSON.stringify(obj) === JSON.stringify(objCopy);

// are the objects equal?
obj === objCopy; // false (not same reference)

// modifying our initial object does not modify the copy:

obj.d = 4;
JSON.stringify(obj); // "{"a":1,"b":2,"c":3,"d":4}"
JSON.stringify(objCopy); // "{"a":1,"b":2,"c":3}"

// Before ...Spread Operator syntax-> Apply

let numbers = [1, 3, 5, 9];
var max = Math.max.apply(null, numbers); // 8
var max = Math.max(...numbers); // 8

console.log(max);

/*
This way of copying an object is much shorter than

let objCopy = Object.assign({}, obj); 

or 

for an array

let arrCopy = Object.assign([], arr); 

so we prefer to use it whenever we can.

When we see "..." in the code, it is either rest parameters or the spread syntax.

There’s an easy way to distinguish between them:

- When ... is at the end of function parameters,  
  it’s “rest parameters” and gathers the rest of the list of arguments into an array.

- When ... occurs in a function call or alike, 
  it’s called a “spread syntax” and expands an array into a list.


Use patterns:

- Rest parameters are used to create functions that accept any number of arguments.
- The spread syntax is used to pass an array to functions 
  that normally require a list of many arguments.

Together they help to travel between a list and an array of parameters with ease.
*/
