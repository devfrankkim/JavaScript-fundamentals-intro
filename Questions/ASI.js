// ASI, Object literals, square bracket syntax, hoisting
// What happens when you run this code? why?
// How would you fix it? -> semicolon

// ======== Question ========
// let a = {
//   a: 123,
// }[a].forEach(function (x) {
//   console.log(x);
// });

let a = {
  a: 123,
};

[a].forEach(function (x) {
  console.log(x); // {a: 123}
});

// ============== Why? ==============
let a; // undefined
[a]; // [undefined]

a = { a: 123 }[undefined].forEach((x) => console.log(x)); // undefined

// ============== solution ==============

let obj = { a: 123 };
[obj].forEach((x) => console.log(x)); // {a: 123}
