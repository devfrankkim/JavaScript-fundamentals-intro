// reduce
// iterates, callback function

// reduces to a single value - number, array, object or whatever

// 1  parameter ('acc') - start / total of all calculations
// 2  parameter ('curr') - current iteration / value
// 3  ALWAYS RETURN the "FIRST PARAMETER" -> It is a callback function

/*
let result = arr.reduce(callback,initValue);

* arr — the array to run the reduce function on.
* callback — the function to execute on each element in the array.
* initValue — an optionally supplied initial value. If this value is not supplied, 
the 0th element is used as the initial value.

Callback:
let result = arr.reduce((accumulator, currentValue) => {}, initValue);
*/

let array = [1, 2, 3, 4, 5];
var result = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(result); // 15

/* ================================================================= */

let array = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];

// No initial value
var result = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(result); // JavaScript

// Intialize value
var result = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, "Testing ");
console.log(result); // Testing javascript

/* ================================================================= */

let array = [{ age: 30, name: "Frank" }, { age: 20, name: "Andrea" }];

var result = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.age;
}, 0);

console.log("Age: ", result); //Age: 50

/*
    If initialValue isn't provided, 
    reduce() will execute the callback function starting at index 1, skipping the first index.
    If initialValue is provided, it will start at index 0.
*/

/* ================================================================= */

const people = [
  { name: "frank", age: 30, position: "developer", id: 1, salary: 100 },
  { name: "andrea", age: 20, position: "designer", id: 2, salary: 200 },
  { name: "tessa", age: 10, position: "dog", id: 3, salary: 300 }
];

// What value we are returning? logic depends on that. (number? array? object?)

const total = people.reduce(function(acc, currentItem) {
  // Always you want to RETURN the accumulator

  console.log(`${acc}  => start`);
  console.log(`${currentItem.salary}  => current salary`);

  acc += currentItem.salary;

  console.log(`${acc} => total`);

  return acc;
}, 0);

console.log(total === 600); // true

// Example 2

const oldestPerson = people.reduce(function(oldest, person) {
  return (oldest.age || 0) > person.age ? oldest : person;
}, {});

console.log(oldestPerson);
// {name: "frank", age: 30, position: "developer", id: 1, salary: 100}

// Example 3

let result = people.reduce((acc, cur) => {
  acc.push(cur.id % 2 ? "odd" : "even");
  return acc;
}, []);
console.log(result); // (3) ["odd", "even", "odd"]

// Example 4

let result1 = people.reduce((acc, cur) => {
  if (cur.id % 2) acc.push(cur);
  return acc;
}, []);
console.log(result1);

/*
    0: {name: "frank", age: 30, position: "developer", id: 1, salary: 100}
    1: {name: "tessa", age: 10, position: "dog", id: 3, salary: 300}
*/

// Example 5

const promiseFactory = time => {
  return new Promise((resolve, reject) => {
    console.log(time);
    setTimeout(resolve, time);
  });
};
[1000, 2000, 3000, 4000].reduce((acc, cur) => {
  return acc.then(() => promiseFactory(cur));
}, Promise.resolve());

/*
immediately => 1000

Promise {<pending>}

1 sec : 2000
2 sec : 3000
3 sec : 4000
*/

// Example 6  => Object.values()
/* 
    (3) [{…}, {…}, {…}]
    0: {value: 1}
    1: {value: 2}
    2: {value: 3}
*/
const add = {
  a: { value: 1 },
  b: { value: 2 },
  c: { value: 3 }
};

const totalValues = Object.values(add).reduce(
  (acc, { value }) => acc + value,
  0
);

/* 
const add = {
  a: 1,
  b: 2,
  c: 3
}

*Grab ALL the VALUES and make an Array for them*
Object.values(add) => [1, 2, 3]

 const totalValues = Object.values(add).reduce((acc, curr) => acc + curr) 
 */

// Example 7 => Object.keys()

//*Grab all the keys and make an array for them*

//  ["a", "b", "c"];

const totalKeys = Object.keys(add).reduce(function(previous, key) {
  return previous + add[key].value;
}, 0);
