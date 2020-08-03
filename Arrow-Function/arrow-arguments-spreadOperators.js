// Arrow functions DO NOT have arguments
// Rest Parameters => "gather the remaining parameters into an array"
// Rest Parameters => To create a function which can take any number of parameters

// Spread Operators  => "Get a new copy of an array/object"

let arrow = () => console.log(arguments[0]);

arrow("passing"); // ERROR: arguments is not defined

let arrowArguments = (arguments) => console.log(arguments[0]);

arrowArguments("passing"); // 'p'

let arrowSpread = (...arguments) => console.log(arguments[0]);
arrowSpread("passing"); // "passing"

// ============ Passing Array as an Argument with spread operator===========

var array = [1, 2, 3, 4];

let normal = function () {
  return arguments[0] + ` arguments.length : ${arguments.length}`;
};

normal(array); // "1,2,3,4 arguments.length : 1"
normal(...array); // "1 arguments.length : 4"

// =========== NO Arguments variable ===========
// I can pass a number of arguments without really passing any arguments inside

let arg = function () {
  console.log(
    `${arguments[0]}  ${arguments[1]}  arguments.length : ${arguments.length}`
  );
};
arg("passing", "arguments"); // "passing  arguments  arguments.length : 2"

// ============  No arguments =============

let argArrow = () => {
  console.log(
    `${arguments[0]}  ${arguments[1]}  arguments.length : ${arguments.length}`
  );
};
argArrow("passing", "arguments"); // Uncaught ReferenceError: arguments is not defined

// ============  Passing a parameter =============
let argArrowArguments = (arguments) => {
  console.log(
    `${arguments[0]}  ${arguments[arguments.length - 1]}  arguments.length : ${
      arguments.length
    }`
  );
};
argArrowArguments("passing", "arguments"); // p  g  arguments.length : 7

// ============== Spread Operator in Parameters ============
var array = [1, 2, 3, 4];

let argArrowSolution = (...args) => {
  console.log(`${args[0]}  ${args[1]}  arguments.length : ${args.length}`);
};
argArrowSolution("passing", "arguments"); // passing  arguments  arguments.length : 2
argArrowSolution(array); // 1,2,3,4  undefined  arguments.length : 1
argArrowSolution(...array); // 1  2  arguments.length : 4

// Object assign() -> shallow copy
var a = [1, 2, 3, 4];
var b = a;

b = Object.assign([], a);
var c = [...a];

// ...a = 1,2,3,4
// [...a] = [1,2,3,4]

// Merge -> spread operator, concat
var a = [1, 2, 3, 4];
var b = [5, 6, 7];
var c = [...a, ...b]; // (7) [1, 2, 3, 4, 5, 6, 7]
var concat = a.concat(...b); // (7) [1, 2, 3, 4, 5, 6, 7]

var a = [1, 2, 3, 4];

let func = function (...a) {
  console.log(a);
  // console.log("...arg : ", ...a);
};

func(a); // [[1, 2, 3, 4]],   [1, 2, 3, 4]
func(...a); // [1, 2, 3, 4],   1 2 3 4

func([1, 2, 3, 4]);
