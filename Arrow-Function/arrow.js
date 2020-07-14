//  Difference between Arrow function and normal function

// Arrow doesn't have binding
// Arrow does NOT have arguments variable
// Arrow works inside the enclosing scope
// Arrow does NOT really have its own 'this'
// Which means, it's going to use its parents 'this' and it binds it

// ==================================================================
var obj = {
  age: 100,
  arrowFunction: () => console.log(this.age, this),
  normalFunction: function () {
    console.log(this.age, this);
  },
};

obj.arrowFunction(); // undefined, Window
obj.normalFunction(); // 50 , {age: 50, arrowFunction: ƒ, normalFunction: ƒ}

// Arrow function doesn't need binding

function enclosingScope() {
  this.age = 100;
  let array = ["enclosing scope"];
  let arrowFunction = () => {
    return `${this.age} ${array[0]}`;
  };
  return arrowFunction();
}

console.log(enclosingScope()); // "100 enclosing scope"

let array = [1, 2, 3];

let array = () => array; // No binding
let arrLength = () => array.length; // No binding
let arrowFunction = () => array[0]; // No binding
let arrowFunctionNoParameter = () => array[1]; // No binding
let arrowFunctionNoBinding = (array) => array[2]; // No binding

array(); //   [1, 2, 3]
arrLength(); // 3
arrowFunction(); // 1
arrowFunctionNoParameter(); // 2
arrowFunctionNoParameter(array); // 2
arrowFunctionNoParameter(...array); // 2
arrowFunctionNoBinding(array); // 3

// Receiving its arguments inside the enclosing scope including 'String'

let arrow = () =>
  console.log(arguments[0] + arguments[1] + arguments[2] + arguments[3]);

arrow(100, 1000, 1000, "NOPE"); // arguments is not defined

function NoBindingNoParameter() {
  console.log(arguments); // Arguments(4) [100, 1000, 10000, " Arrow function is crazy ", callee: ƒ, Symbol(Symbol.iterator): ƒ]
  let arrowFunction = () =>
    arguments[0] + arguments[1] + arguments[2] + arguments[3];
  return arrowFunction();
}

function NoBindingNoParameter(a, b, c, d) {
  console.log(arguments);
  let arrowFunction = () => a + b + c + d;
  return arrowFunction();
}

NoBindingNoParameter(100, 1000, 10000, " Arrow function is crazy ");

// 11100 Arrow function is crazy

// ============ enclosing scope ex) setTimeout ===========

let noArrowFunction = function () {
  this.value = 1;
  setTimeout(function () {
    this.value++;
    console.log("Inside the normal function : ", this.value);
  }, 1000);
};
let noArrow = new noArrowFunction(); // Inside the normal function :  NaN

let thatSolution = function () {
  let that = this;
  this.value = 1;
  setTimeout(function () {
    that.value++;
    console.log("Using that : ", that.value);
  }, 1000);
};
let thatNoArrow = new thatSolution(); // Using that :  2

let arrowFunction = function () {
  this.value = 100;
  setTimeout(() => {
    this.value++;
    console.log("Inside the arrow function : ", this.value);
  }, 1000);
};
let arrow = new arrowFunction(); // Inside the arrow function :  101
